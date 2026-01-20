import { getCollection } from "astro:content";
import { createEvents, type EventAttributes } from "ics";

export const prerender = true;

export async function GET() {
  const calendar = await getCollection("calendar");

  // Filter: non-draft events
  const filteredEvents = calendar
    .filter((item) => !item.data.draft)
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  // Convert events to ICS format
  const icsEvents = filteredEvents.map((eventFromCollection) => {
    const startDate = new Date(eventFromCollection.data.date);
    const endDate = eventFromCollection.data.endDate
      ? new Date(eventFromCollection.data.endDate)
      : new Date(eventFromCollection.data.date);

    // For all-day events, DTEND is exclusive (end date + 1 day)
    const exclusiveEndDate = new Date(endDate);
    exclusiveEndDate.setUTCDate(exclusiveEndDate.getUTCDate() + 1);

    // Build description: combine description and URL if both exist
    const description = eventFromCollection.data.url
      ? eventFromCollection.data.description
        ? `${eventFromCollection.data.description}\n\n${eventFromCollection.data.url}`
        : eventFromCollection.data.url
      : eventFromCollection.data.description;

    // For all-day events, use 3-element DateArray [year, month, day]
    const eventData = {
      uid: `calendar-${eventFromCollection.id.replace(/\//g, "-")}@ethereal.news`,
      title: eventFromCollection.data.title,
      start: [
        startDate.getUTCFullYear(),
        startDate.getUTCMonth() + 1,
        startDate.getUTCDate(),
      ],
      end: [
        exclusiveEndDate.getUTCFullYear(),
        exclusiveEndDate.getUTCMonth() + 1,
        exclusiveEndDate.getUTCDate(),
      ],
      startInputType: "utc" as const,
      endInputType: "utc" as const,
      ...(description && { description }),
      ...(eventFromCollection.data.url && {
        url: eventFromCollection.data.url,
      }),
      ...(eventFromCollection.data.location && {
        location: eventFromCollection.data.location,
      }),
      ...(eventFromCollection.data.tags &&
        eventFromCollection.data.tags.length > 0 && {
          categories: eventFromCollection.data.tags,
        }),
    } satisfies EventAttributes;

    return eventData;
  }) satisfies EventAttributes[];

  const { error, value } = createEvents(icsEvents, {
    productId: "-//Ethereal news//Ethereal news calendar//EN",
    calName: "Ethereal news",
    method: "PUBLISH",
  });

  if (error) {
    console.error("Error creating ICS file:", error);
    return new Response(`Error generating calendar: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(value, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="ethereal-news-calendar.ics"',
    },
  });
}
