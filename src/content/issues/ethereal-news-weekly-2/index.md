---
title: 'Ethereal news weekly #2'
description: 'BPO1 upgrade increased blobs, DTC securities tokenization pilot, William Mougayar: Ethereum valuation'
date: 'December 12, 2025'
---

BPO1 upgrade increased blobs, DTC securities tokenization pilot, William Mougayar: Ethereum valuation 

### Ecosystem

* [BPO1](https://lab.ethpandaops.io/ethereum/forks/bpo1) live (first blob parameter only upgrade): increased blobs per block to target: 10 & max: 15 (up from target: 6 & max: 9\)  
* [BPO2](https://lab.ethpandaops.io/ethereum/forks/bpo2) on January 7, increases blobs per block to target: 14 & max: 21  
* William Mougayar: [Ethereum’s valuation as a public good](https://ethmrc.com/the-internets-blueprint-for-ethereum-a-trillion-dollar-public-goods-valuation-framework/), $2-6T near term, $10-20T by 2035 if it becomes the global trust & settlement layer  
* Kevin Owocki: [reforming public goods funding](https://x.com/owocki/status/1996972702687797580)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0.0 \- 1.1 (11.9 for zero net issuance)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,947 \- $3,391 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.035 (0.165 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io/)

---

### Enterprise

* [BlackRock](https://www.sec.gov/Archives/edgar/data/2099103/000143774925037057/iset20251205_s1.htm) filed for staked Ether ETF

### Applications

* Synthetix [wick insurance](https://blog.synthetix.io/wick-insurance/): perps traders can purchase dynamically priced protection for pre-defined time period where accounts are frozen rather than liquidated  
* Veil Cash [0xbow deposit screening](https://docs.veil.cash/intro/verified-users/0xbow-screening) for privacy protocol on Base  
* [Daico.wtf](https://x.com/z0r0zzz/status/1996986410335875169): fundraise using tokens, templates for streaming & governance, live on mainnet & Base  
* Fileverse [dDocs](https://x.com/fileverse/status/1996965533099405571): adds version history  
* Nouns DAO [named core contracts](https://www.enscribe.xyz/blog/nouns) using Enscribe  
* Jonathan Mann: [every 2M blocks](https://x.com/songadaymann/status/1995579645362929726), note NFTs extend song by a year  
* Farcaster switches focus to [wallet-first](https://farcaster.xyz/dwr/0x4368f6be) after 4.5 years of social-first

### Developers

* Hardhat [v3.1.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.1.0) (dev framework): Osaka default EVM for local networks, adds Solidity v0.8.31 support and unified test summary for Solidity & JavaScript tests  
* Remix [v1.4.0](https://ethereumremix.substack.com/p/remix-release-v140) (dev framework): Osaka default EVM & improved autocompletion for TypeScript/JavaScript files  
* Blockscout (block explorer): [contract analysis guide](https://www.blog.blockscout.com/smart-contract-analysis-guide/)  
* [Getcode.eth](https://ethereum-magicians.org/t/introducing-getcode-eth-ens-based-onchain-metadata-resolver/26994) (tool): contract metadata for deployed bytecode via onchain resolver  
* [SlotScan](https://slotscan.info/) (tool): storage layout for verified contracts; [EVM storage learnings](https://wavey.info/posts/2025/reverse-engineering-evm-storage/)  
* PeerDAS:  
  * Feelyourprotocol [PeerDAS](https://feelyourprotocol.org/eip-7594-peerdas-data-availability-sampling) (widget): cross-check versioned hashes, commitments & proofs  
  * Pcaversaccio [raw-tx](https://github.com/pcaversaccio/raw-tx/#readme) (signing scripts): adds PeerDAS support to sign-eip4844  
* [TrueBlocks mini-dApps](https://tjayrush.medium.com/final-report-for-ef-grant-fy24-1558-trueblocks-minidapps-79b53f45bfa3) (local-first utilities): video tutorials on how to create  
* Base Pay [1-step payments](https://blog.base.dev/1-step-crypto-payments): uses ERC8050 compressed RPC links, stateless interactions & callbacks   
* x402:  
  * x402 [v2](https://www.x402.org/writing/x402-v2-launch): adds identity, discovery, dynamic routing, multi-chain/fiat support & plug-in SDK  
  * [ERC8004 agents explorer](https://github.com/Eversmile12/ERC-8004-explorer/#readme): discover registered agents on Sepolia testnet  
  * [x402 hackatho](https://www.x402hackathon.com/)n: submit projects by January 5  
* Application layer standards (ERCs):  
  * Proposal for [simplified Diamond contracts standard](https://ethereum-magicians.org/t/proposal-for-a-simplified-standard-for-diamond-contracts/27119)  
  * [ERC8100](https://github.com/ethereum/ERCs/pull/1396/files): Representable contract state  
  * [ERC8102](https://github.com/ethereum/ERCs/pull/1401/files): Permissioned pull  
  * [ERC8103](https://github.com/ethereum/ERCs/pull/1401/files): Permissioned authorization object

### Security

* USPD [\~$1M exploit](https://uspd.io/blog/anatomy-of-a-hack) via clandestine proxy in the middle of proxy (CPIMP), proxy initialization was front run in September  
* samczsun: [higher bug bounties won’t stop hacks](https://samczsun.com/higher-bug-bounties-wont-stop-hacks/), annual security reviews needed focused on entire deployment   
* [Who has security](https://whohassecurity.com/): list of projects with in-house security  
* Security Alliance (SEAL): [financial transparency report](https://radar.securityalliance.org/2025-financial-transparency-report/)  
* Reminder: [revoke](https://revoke.cash/) unnecessary token approvals

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#171](https://forkcast.org/calls/acdc/171)

* [Fusaka](https://forkcast.org/upgrade/fusaka) upgrade:  
  * [Upgrade process retrospective](https://ethereum-magicians.org/t/2025-upgrade-process-retrospective/27082): add your feedback  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting June 2026):  
  * ePBS: trustless payments not removed, explore non-validating staked builders  
  * Considered for Inclusion:   
    * [EIP7688](https://forkcast.org/upgrade/glamsterdam#eip-7688) forward compatible consensus data structures  
    * [EIP8080](https://forkcast.org/upgrade/glamsterdam/#eip-8080) exits use consolidation queue & [EIP8061](https://forkcast.org/upgrade/glamsterdam/#eip-8061) increase churn limits  
* [Heka \+ Bogota](https://eips.ethereum.org/EIPS/eip-8081) upgrade:  
  * [Fork focus discussion & headliner proposals](https://ethereum-magicians.org/t/eip-8081-heka-bogota-network-upgrade-meta-thread/26876) starts in January   
  * Considered for Inclusion: [EIP7805](https://eips.ethereum.org/EIPS/eip-7805) FOCIL, potential headliner  
  * Heka not in IAU catalog of stars, [proposal to choose new H-star name](https://ethereum-magicians.org/t/h-star-name-for-consensus-layer-upgrade-after-glamsterdam/24298/16)

#### All Core Devs \- Testing (ACDT) [\#63](https://forkcast.org/calls/acdt/063)

* EF P2P Networking team: [blob inclusion analysis](https://ethp2p.github.io/notebooks/20251208/01-blob-inclusion.html)  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade:   
  * Block-level Access Lists: Kurtosis testnet ran for 13 epochs with 4 clients

### Layer 1

* [Fusaka](https://forkcast.org/upgrade/fusaka/) upgrade:  
  * ethPandaOps: [PeerDAS node metrics](https://x.com/samcmAU/status/1998693091981799849), 18% supernodes, 46% custody 4 columns (minimum), 23% custody 5-8 columns  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * [EIP7732](https://forkcast.org/upgrade/glamsterdam/#eip-7732) ePBS breakout [\#28](https://x.com/JustinTraglia/status/1997021426914668843): [dynamic penalties](https://ethresear.ch/t/dynamic-penalties-for-epbs/23472) as solution to free option problem, non-staked builders & trustless payments discussion  
* [Consensus spec viewer](https://jtraglia.github.io/eth-spec-viewer/): view spec items & navigate to consumers  
  Discovery v5 (used to find new peers) [migration tracker](https://notes.ethereum.org/@cskiraly/el-discovery-v5-tracker): sunset v4 by Glamsterdam  
* Karl Floersch: [EVM scaling](https://evmscaling.com), interactive overview  
* Ethereum improvement proposals (EIPs):  
  * [EIP8101](https://github.com/ethereum/EIPs/pull/10900/files): Payload chunking with chunk access lists

### Research

* [Post-quantum consensus layer signatures](https://ethresear.ch/t/post-quantum-signature-aggregation-a-folding-approach/23639): comparison of zkVM & folding options

### Staking

* Beaconcha.in [v2 API](https://docs.beaconcha.in/api/overview): monitor performance with BeaconScore, real-time consensus layer data, analyze rewards & queues; free tier: 1k requests per month  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: ⚠️ Lighthouse \~57% (data may not be 100% accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24.7% \[Note: [dual governance](https://dg.lido.fi/)\]  
* Client releases:  
  * Consensus layer:  
    * Prysm [v7.1.0](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.0): critical fixes for attestation processing, workaround flag can be removed, checkpoint sync backfills data columns & semi-supernode mode custodies 50%+ columns to rebuild blobs  
  * Execution layer  
    * Besu [25.12.0](https://github.com/hyperledger/besu/releases/tag/25.12.0): optimizations for engine\_getPayload methods & engine\_getBlobsV2 and adds opcodes & callTracer to debug tracing  
    * Erigon [v3.3.1](https://github.com/erigontech/erigon/releases/tag/v3.3.1): fixes  
    * Nethermind [1.35.4](https://github.com/NethermindEth/nethermind/releases/tag/1.35.4): OP Stack fixes after Jovian upgrade

### Layer 2

* [Challenge period reduction discussion](https://forum.l2beat.com/t/cont-stage-1-challenge-period-reduction-discussion/411): 1 day (instead of 7\) for Stage 1 optimistic rollups   
* Celo [Jello upgrade](https://forum.celo.org/t/jello-hardfork-successfully-activates-on-mainnet-introducing-op-succinct-lite/12754): ZK fault proofs using OP Succinct Lite  
* Sunnyside Labs: [Worldchain scaling research](https://www.sunnyside.io/blogs/load-to-execution-scaling), CPU performance main bottleneck  
* [ZKsync Lite](https://x.com/zksync/status/1997776803302125607) (formerly ZKsync 1.0) being deprecated in 2026

### Regulation

* US SEC:  
  * Depository Trust Company (DTC) [securities tokenization pilot](https://www.dtcc.com/news/2025/december/11/paving-the-way-to-tokenized-dtc-custodied-assets) received no action letter, expected to rollout in H2 2026  
    * Commissioner Hester Peirce: [significant incremental step](https://www.sec.gov/newsroom/speeches-statements/peirce-121125-tokenization-trending-statement-division-trading-markets-no-action-letter-related-dtcs-development) in moving markets onchain  
  * [Ondo Finance investigation closed](https://ondo.finance/blog/tokenized-securities-step-forward) without charges  
* US CFTC:   
  * [Spot crypto can be traded](https://www.cftc.gov/PressRoom/PressReleases/9145-25) on registered exchanges  
  * [Pilot for crypto collateral](https://www.cftc.gov/PressRoom/PressReleases/9146-25) (including ETH) in derivatives markets  
* US Office of the Comptroller of the Currency (OCC):   
  * [National banks can act as an intermediaries](https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-121.html) in crypto transactions  
  * [Debanking activities](https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-123.html) of 9 largest national banks, preliminary findings  
* Do Kwon (Terraform founder) [sentenced to 15 years](https://www.justice.gov/usao-sdny/pr/crypto-enabled-fraudster-sentenced-orchestrating-40-billion-fraud) for fraud & manipulation

### General

* Australia: [social media ban for under 16s](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions), platforms can’t make users provide state ID  
* US: [Customs & Border Protection proposal to collect](https://www.federalregister.gov/documents/2025/12/10/2025-22461/agency-information-collection-activities-revision-arrival-and-departure-record-form-i-94-and) social media handles (from last 5 years) & email addresses (from last 10 years) for visa waiver travel  
* [React Server Components additional vulnerabilities](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components): denial of service & source code exposure  
* Justin Thaler: [quantum computing & blockchains](https://a16zcrypto.com/posts/article/quantum-computing-misconceptions-realities-blockchains-planning-migrations/), cryptographically relevant quantum computer unlikely pre-2030, Ethereum should continue work on post-quantum primitives & emergency-response plans  
* [Small-field hash-based SNARGs](https://eprint.iacr.org/2025/2197) are less sound than conjectured, generic attacks against common small field proof systems reduce security by \~10 bits

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-2](https://ethereal.news/ethereal-news-weekly-2)*  

---

