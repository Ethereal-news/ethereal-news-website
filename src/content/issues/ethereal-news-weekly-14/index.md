---
title: 'Ethereal news weekly #14'
description: 'ePBS first devnet live, Aave Labs temp check passed, Synthesis AI \+ human hackathon'
date: 'March 6, 2026'
draft: true
---

ePBS first devnet live, Aave Labs temp check passed, Synthesis AI \+ human hackathon

### Ecosystem

* [Strawmap](https://strawmap.org/faq) (strawman roadmap):  
  * James Smith: [strawmap explainer](https://x.com/Snapcrackle/status/2029174289379811594)  
  * Vitalik explainers: [scaling](https://x.com/VitalikButerin/status/2027403360484430122), [account abstraction](https://x.com/VitalikButerin/status/2027774090627715377), [execution layer changes](https://x.com/VitalikButerin/status/2028158949720252574) & [block building pipeline](https://x.com/VitalikButerin/status/2028524112868708616)  
* Vitalik:   
  * Ethereum part of ecosystem building [sanctuary technologies](https://www.reddit.com/r/ethereum/comments/1rjyqnx/sanctuary_technologies/)  
  * [Call for more bold and open mindset](https://x.com/VitalikButerin/status/2029662920318275935) particularly for application layer without compromising censorship resistance, open source, privacy & security  
* [Ethereum Foundation org chart](https://ethereum.foundation/assets/ef-org-chart.png) updated ([text](https://ethereal.news/resources/ef-people/) version)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.0 (12.5 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,816 \- $2,099 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![][image1]

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Applications

* Aave: [Aave Labs temp check](https://x.com/StaniKulechov/status/2027898881594327159) passed & [ACI leaving](https://governance.aave.com/t/aci-is-leaving-aave/24205)  
* Ethereum Community Foundation [blobdrop](https://blobdrop.org/): file sharing via blobspace  
* Privacy Pools [self-report compromised address](https://x.com/0xprivacypools/status/2028591684024500286)  
* Toni Wahrstätter: [Nachtara](https://x.com/nero_eth/status/2028413616660083112) (stealth addresses) optimized for agents  
* Bordel hackerspace (Prague) [funded via crowdloaning](https://x.com/TMIYChao/status/2028939629987061809)

### Developers

* Reminder: [Solidity developer survey](https://www.soliditylang.org/blog/2026/02/10/solidity-developer-survey-2025-announcement/), takes \~5 minutes to complete  
* [Scopr](https://tintinweb.github.io/scopr/) (Solidity codebase visualizer): treemaps, call graphs, scope selection & NSLOC  
* [Solidity testing handbook](https://www.soliditytestingbook.com/): basic & advanced testing and testing practices  
* [Edge](https://github.com/refcell/edge-rs#readme) (language): statically-typed, Rust-inspired language for the EVM, alpha  
* Hardhat [v3.1.11](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.1.11) (dev framework): improved autocomplete, improved errors when failing to compile with configured compilers & upgrades EDR  
* [Remix v2](https://ethereumremix.substack.com/p/beta-testers-needed-for-remix-v2) (dev framework): private beta testers wanted  
* [Eth.zig](https://github.com/StrobeLabs/eth.zig#readme) (client library): supports ABI encoding, RLP serialization, secp256k1 signing, Keccak-256 hashing, HD wallets, ERC20/721, JSON-RPC & ENS  
* revm [v104](https://github.com/bluealloy/revm/releases/tag/v104): Glamsterdam support (EIP7708, EIP7843, EIP8024 & EIP7928)  
* Patrick Collins: [AI development tips](https://www.cyfrin.io/blog/how-to-not-accidentally-shoot-yourself-in-the-foot-with-ai-development) to avoid shooting yourself in the foot  
* Application layer standards (ERCs):  
  * [ERC8179](https://github.com/ethereum/ERCs/pull/1577/changes): Blob space segments  
  * [ERC8180](https://github.com/ethereum/ERCs/pull/1578/changes): Blob authenticated messaging  
  * [ERC8181](https://github.com/ethereum/ERCs/pull/1579/changes): Self-sovereign agent NFTs  
  * [ERC8183](https://github.com/ethereum/ERCs/pull/1581/changes): Agentic commerce  
  * [ERC8185](https://github.com/ethereum/ERCs/pull/1580/changes): Offchain entity registry  
  * [ERC8186](https://github.com/ethereum/ERCs/pull/1582/changes): Claimable escrow

### Agents

* [Synthesis](https://synthesis.md/) ([skill](https://synthesis.devfolio.co/skill.md)): AI \+ human hackathon, March 13-22  
* [OpenZeppelin skills](https://github.com/OpenZeppelin/openzeppelin-skills#readme): develop using OpenZeppelin Contracts, setup a Hardhat/Foundry project & create upgradeable contracts  
* Pashov Audit Group [skills](https://github.com/pashov/skills#readme): Solidity security review

### Security

* Foom [$2.26M exploit](https://x.com/Foomclub_/status/2028231845788188747) on mainnet & Base due to [Groth16 verifier incorrect setup](https://blog.zksecurity.xyz/posts/groth16-setup-exploit/), $1.8M recovered  
* Solv protocol [$2.7M exploit](https://x.com/SolvProtocol/status/2029612210490933697)  
* [Lindy score](https://x.com/z0r0zzz/status/2029810955232932142) (contract metric): calculated on age, value, complexity & penalties  
  * Lindy security review NFT: reviewers mint soulbound record of security review

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#176](https://ethereum-magicians.org/t/all-core-devs-consensus-acdc-176-mar-19-2026/27798/4) (async)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * epbs-devnet-1 needs scoping & is there a need for an epbs-devnet-2 prior to glamsterdam-devnet-0  
* SSZ in the Engine API proposals

#### All core devs \- testing (ACDT) [\#72](https://forkcast.org/calls/acdt/072/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-3 ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-3)) launch waiting on client readiness

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [epbs-devnet-0](https://epbs-devnet-0.ethpandaops.io/) ([Dora](https://dora.epbs-devnet-0.ethpandaops.io/) the explorer) live  
  * Glamsterdam repricings breakout [\#3](https://forkcast.org/calls/price/003/)  
  * Franco Victorio: [Block-Level Access Lists explainer](https://paragraph.com/@cethology/understanding-block-level-access-lists)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * Proposed execution layer headliners:  
    * EIP8141 Frame transaction [\#1](https://forkcast.org/calls/one-off-1954/001/)  
    * Encrypt transaction pool [\#1](https://forkcast.org/calls/etm/001/)  
* [Lodestar](https://x.com/nicoflaig/status/2028462385313251595) 6 second slots proof of concept  
* Post-quantum transaction signatures [\#3](https://x.com/asanso/status/2029639516265533700)  
* ethPandaOps [EthIQ](https://ethpandaops.io/posts/introducing-ethiq/): benchmark for AI model understanding of protocol internals  
* Ethereum improvement proposals (EIPs):  
  * [EIP8177](https://github.com/ethereum/EIPs/pull/11360/changes): Engine API communication channels  
  * [EIP8178](https://github.com/ethereum/EIPs/pull/11365/changes): SSZ-REST Engine API transport  
  * [EIP8182](https://github.com/ethereum/EIPs/pull/11373/changes): Protocol-enshrined privacy pool  
  * [EIP8184](https://github.com/ethereum/EIPs/pull/11376/changes): LUCID encrypted transaction pool (proposed Hegotá headliner)

### Staking

* [Beaconcha.in](https://x.com/beaconcha_in/status/2029566432443285832) website updated with search first home page  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 954k active (target 128k)  
* Client releases:  
  * Consensus layer:  
    * Grandine [2.0.2](https://github.com/grandinetech/grandine/releases/tag/2.0.2) (high): security fixes & performance optimizations  
    * Nimbus [v26.3.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.3.0) (low): improves blob & column handling performance  
    * Teku [26.3.0](https://github.com/Consensys/teku/releases/tag/26.3.0) (mandatory): fixes beacon state serialization issue & adds performance improvements  
  * Execution layer:  
    * Besu [26.2.0](https://github.com/hyperledger/besu/releases/tag/26.2.0) (recommended): performance improvements & fixes  
    * Geth [v1.17.1](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.1) (recommended): resolves regression in snap sync & several security issues

### Regulation

* US Fed, OCC & FDIC: [capital treatment of tokenized securities](https://www.federalreserve.gov/newsevents/pressreleases/bcreg20260305a.htm) should be the same as non-tokenized securities   
* [Class action against Uniswap dismissed](https://x.com/N0th1n3/status/2028552988894310535), not liable for third-party token issuers misconduct  
* [Kraken Financial](https://blog.kraken.com/news/federal-reserve-master-account) (Wyoming-chartered bank) granted Federal Reserve master account  
* [John Daghita arrested](https://x.com/fbidirectorkash/status/2029574256959389933), allegedly stole $46M in crypto from US Marshals Service, exposed via [ZachXBT investigation](https://x.com/zachxbt/status/2029577374057296175)

### General

* South Korea: [$4M stolen after tax service shared seed phrase](https://www.bleepingcomputer.com/news/security/48m-in-crypto-stolen-after-korean-tax-agency-exposes-wallet-seed/) in seizure announcement  
* [Coruna](https://cloud.google.com/blog/topics/threat-intelligence/coruna-powerful-ios-exploit-kit/): iOS exploit kit, iOS 13.0 \- 17.2.1, five full exploit chains & 23 exploits  
* [Jolt zkVM](https://a16zcrypto.com/posts/article/zkvm-jolt-zero-knowledge/) adds zero-knowledge support via NovaBlindFold  
* Privacy Stewards of Ethereum (PSE) [tor-js](https://pse.dev/projects/tor-js): npm module for http requests over Tor  
* The Red Guild: [https & VPNs](https://blog.theredguild.org/are-vpns-really-necessary-is-https-enough/), https protects content & VPNs protect metadata

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-14/](https://ethereal.news/ethereal-news-weekly-14/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-14.md](https://ethereal.news/ethereal-news-weekly-14.md)*  
---

### Upcoming calendar

* Mar 12-15: [ETHMumbai](https://www.ethmumbai.in/) (conference & hackathon), Mumbai, India  
* Mar 13-22: [Synthesis](https://synthesis.md/) (hackathon), online  
* Mar 24-26: [EY Global blockchain summit](https://web.cvent.com/event/52099248-ee76-46aa-a579-a707420821f3/websitePage:34e89f81-7647-4dff-b5f8-cd05d75a1ea7) (conference), New York, USA  
* Mar 30 \- Apr 2: [EthCC](https://ethcc.io/) (conference), Cannes, France  
* Apr 3-5: [ETHGlobal Cannes](https://ethglobal.com/events/cannes2026) (hackathon), Cannes, France  
* Jun 8-10: [ETHConf](https://ethconf.com/) (conference), New York, USA  
* Nov 3-6: [Devcon 8](https://devcon.org/) (conference), Mumbai, India

[*Full calendar*](https://ethereal.news/calendar/)  