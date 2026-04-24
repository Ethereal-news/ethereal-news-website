---
title: 'Ethereal news weekly #20'
description: 'Etherealize: ETH is productive money, DeFi united: effort to restore rsETH backing, Arbitrum security council froze exploiter ETH'
date: 'April 24, 2026'
---

Etherealize: ETH is productive money, DeFi united effort to restore rsETH backing, Arbitrum security council froze exploiter ETH

### Ecosystem

* Etherealize: [ETH is productive money](https://www.productivemoney.org/), compounds without counterparty risk, better money than gold & Bitcoin, $250k long term price target   
* Ethereum Foundation:  
  * EF Ecosystem Support Program: [Glamsterdam upgrade grants round](https://esp.ethereum.foundation/applicants/wishlist/glamsterdam-round)  
  * Road to Devcon 8 [academic program](https://devcon.org/en/academic-program/), up to $300 grants per event & free or discounted Devcon tickets  
  * Ethereum Protocol Fellowship [cohort 6 recap](https://ps.ethereum.foundation/blog/epf6-recap)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 1.2 average, 0 \- 14 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 18k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,265 \- $2,451 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.1% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.030 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![][image1]

Join us next week for the April MetaMask Community Call.

We'll cover:

* How to build trustful agents   
* The latest MetaMask Connect updates  
* x402 \+ Advanced Permissions

Thursday, April 30, 11:30 AM ET  
[RSVP](https://luma.com/1fuu6ncn)

---

### Enterprise

* World ID [4.0](https://world.org/blog/announcements/world-id-full-stack-proof-of-human) (proof of human): teaming up with Vercel, Okta, Zoom, Docusign & Tinder  
* [WalletConnect Pay integrates with iMin](https://walletconnect.com/blog/walletconnect-pay-integrates-with-imin) (Android POS terminals in 100+ countries)

### Applications

* Apoorv [dapp3.eth](https://dapp3.eth.limo/) (browser extension): ENS websites via Helios light client & local IPFS node  
* [Nouns DAO voted](https://nouns.wtf/vote/955) to set auction reserve price to 2.8 ETH  
* Shutter [perpetual endowment network](https://blog.shutter.network/introducing-the-perpetual-endowment-network-pen/) (PEN): proposal for DAO alternative, quarterly voting on yield distribution, soulbound voting seats  
* [Stomp](https://x.com/0xmons/status/2046636270768759246) (game): monster battle, turn-based, 1v1 

### Developers

* [OpenZeppelin Contracts CLI](https://www.openzeppelin.com/news/introducing-openzeppelin-contracts-cli): generate contracts using OpenZeppelin contract libraries  
* Foundry (dev framework):   
  * Forge-std [v1.16.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.16.0) (helpers): adds expectAndMockCall, console.table & currentFilePath  
* [Weiroll](https://github.com/weiroll/weiroll#readme) (operation-chaining/scripting language) migrated to Foundry  
* Backseats [wagmi-swift](https://github.com/backseats/wagmi-swift#readme) & [viem-swift](https://github.com/backseats/viem-swift#readme) (client libraries): wagmi/viem ported to Swift  
* ZeroDev [Omni SDK](https://zerodev.app/blogs/build-once-deploy-everywhere-introducing-the-zerodev-omni-sdk) (ERC4337 SDK): written in Zig, native Swift binding, alpha  
* Ross: [Onchain html example](https://x.com/z0r0zzz/status/2046580373543645202), html app returned by a contract  
  * [Onchain html-registry](https://github.com/ndavd/html-registry#readme): singleton to store/retrieve versioned html  
* Application layer standards (ERCs):  
  * [ERC8236](https://github.com/ethereum/ERCs/pull/1693/changes): Deferred-settlement fungible tokens  
  * Revived [ERC1404](https://github.com/ethereum/ERCs/pull/1701/changes): Simple restricted token  
  * [ERC8238](https://github.com/ethereum/ERCs/pull/1703/changes): Coercion-resistant vault  
  * [ERC8239](https://github.com/ethereum/ERCs/pull/1704/changes): Agent skill registry  
  * [ERC8240](https://github.com/ethereum/ERCs/pull/1705/changes): Trust infrastructure for agents & assets

### Security

* [Kelp](https://x.com/KelpDAO/status/2046332070277091807) \~$292M exploit on April 18, rsETH drained from bridging adapter via forged crosschain message, 1/1 DVN (Decentralized Verifier Networks) setup, subsequent attempt for \~$95M was mitigated  
  * [LayerZero](https://x.com/LayerZero_Core/status/2046081551574983137): quorum of RPCs LayerZero Labs DVN relied upon were compromised (2 RPCs compromised, DDoS attacks on uncompromised RPCs)  
  * [Arbitrum security council](https://forum.arbitrum.foundation/t/security-council-emergency-action-21-04-2026/30803) froze 30,766 ETH held by exploiter on Arbitrum One  
  * [DeFi united](https://x.com/KelpDAO/status/2047599909692727799): coordinated relief effort to restore rsETH backing  
* eth.limo [DNS hijack](https://x.com/eth_limo/status/2045552916157563148) post-mortem, [EasyDNS](https://easydns.com/blog/2026/04/18/we-screwed-up-and-we-own-it-the-eth-limo-shtshow-is-on-us/) account compromised via social engineering  
* Pashov [X-Ray](https://github.com/pashov/skills/tree/main/x-ray#readme): generates protocol overview, threat model, test gaps, Git history, readiness verdict, entry points, invariant map & architecture diagram  
* TheDAO Security Fund: [Ethereum Security quadratic funding round](https://qf.giveth.io/qf/ethereum-security) live on Giveth, 500 ETH matching pool, 2x impact for ETHSecurity badges

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#235](https://forkcast.org/calls/acde/235)

* [Nixo](https://x.com/nixorokish) co-leading All Core Devs going forward  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [bal-devnet-3](https://bal-devnet-3.ethpandaops.io/) running well, 100M gas limit  
  * glamsterdam-devnet-0 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-0)) targeting launch this week  
  * [EIP8037](https://forkcast.org/eips/8037) state creation gas cost increase: complexity concerns  
  * [Mascot needed](https://ethereum-magicians.org/t/mascot-needed-for-glamsterdam-upgrade/26008), last call for suggestions  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * Non-headliner EIPs Proposed for Inclusion:  
    * [EIP8237](https://github.com/ethereum/EIPs/pull/11557/changes) independent CL/EL sync  
    * [EIP8163](https://forkcast.org/eips/8163) reserve EXTENSION (0xae) opcode  
    * [EIP7979](https://forkcast.org/eips/7979) call & return opcodes

#### All core devs \- testing (ACDT) [\#78](https://forkcast.org/calls/acdt/078)

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * FOCIL breakout [\#33](https://x.com/jih2nn/status/2047230740417613987)  
  * Native account abstraction breakout [\#1](https://forkcast.org/calls/aa/001)  
  * Danno Ferrin: [EIP8141 Frame transaction \+ MAYO-2](https://x.com/shemnon/status/2046989990798971081) for post-quantum accounts, 180 byte signatures, store public keys in contracts  
* Consensus specs:  
  * consensus-specs [v1.7.0-alpha.5](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.5)  
  * [eth-consensus-specs](https://pypi.org/project/eth-consensus-specs/) PyPI package  
* Ethereum improvement proposals (EIPs):  
  * Jxom: [EIPs & ERCs explorer](https://eips.sh/)  
  * Meta [EIP8235](https://github.com/ethereum/EIPs/pull/11545/changes): EIP tagging  
  * [EIP8237](https://github.com/ethereum/EIPs/pull/11557/changes): Independent CL/EL sync

### Research

* Maryam Bahrani & Mike Neuder: [capacity oracles](https://ethresear.ch/t/capacity-oracles/24716)

### Staking

* Pintail: [staking ratio tipping point](https://pintail.xyz/posts/2026/staking-ratio/), one third of ETH is staked & ratio continues to grow, case for issuance curve adjustment  
* [Remote-signer-dirk-interop](https://github.com/jshufro/remote-signer-dirk-interop#readme): use Dirk with validator clients that support remote-signer API   
* Reminder: EthStaker [staking survey](https://stakinglandscape.limesurvey.net/398869)  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.1% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 914k active (target 128k), 12k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Besu 26.4.0](https://github.com/besu-eth/besu/releases/tag/26.4.0): adds eth/70 partial block receipt lists, eth/71 block access list exchange & snap/2 block access list exchange, max blobs options, IPv6 dual stack support for DiscV5 & txpool RPCs  
    * Lambda [ethrex v10.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v10.0.0): Glamsterdam upgrade prep, new P2P stack & snap sync hardening  
    * Paradigm [Reth v2.1.0](https://github.com/paradigmxyz/reth/releases/tag/v2.1.0) (medium): migrate to v2 storage command without a full resync, alloy-evm fix for gas refunds for custom precompiles

### Layer 2

* Sunnyside Labs [privacy boost](https://www.privacyboost.io/resources/blog/introducing-privacy-boost): private transfers, live on OP Mainnet  
* Optimism: [op-geth](https://docs.optimism.io/notices/op-geth-deprecation) being deprecated May 31  
* L2Beat [interoperability](https://l2beat.com/interop/summary): view volume, routes & transfers between chains

### Regulation

* [US CFTC](https://www.cftc.gov/PressRoom/PressReleases/9217-26) charged Army service member with insider trading on Polymarket  
* [UK Financial Conduct Authority](https://www.fca.org.uk/news/press-releases/fca-leads-first-crackdown-illegal-crypto-trading) (FCA): 8 premises suspected of peer-to-peer crypto trading issued with cease & desist letters

### General

* Security Alliance (SEAL): [malicious Google Ads](https://radar.securityalliance.org/malicious-google-ads-targeting-crypto/) targeting crypto  
* [Vercel security incident](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident), unauthorized access to internal systems  
* Firefox: [271 vulnerabilities fixed](https://blog.mozilla.org/en/firefox/ai-security-zero-day-vulnerabilities/), identified using Claude Mythos preview, no bugs that a human couldn’t have found  
* Succinct [ZCAM](https://blog.succinct.xyz/introducing-zcam/): iPhone camera app, photos can be checked to show no pixels changed

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-20/](https://ethereal.news/ethereal-news-weekly-20/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-20.md](https://ethereal.news/ethereal-news-weekly-20.md)*  

---
