---
title: 'Ethereal news weekly #19'
description: 'Roman Storm acquittal hearing, ETHGlobal Cannes hackathon finalists, EVM Now block explorer'
date: 'April 10, 2026'
---

Roman Storm acquittal hearing, ETHGlobal Cannes hackathon finalists, EVM Now block explorer

### Ecosystem

* Ethereum Foundation:  
  * Thomas Coratger (PQ team): [quantum threat & Ethereum roadmap](https://x.com/tcoratger/status/2040847594323100110) explainer  
  * [EF swapped 5k ETH for stablecoins](https://x.com/ethereumfndn/status/2041878615625728167) to fund R\&D, grants & donations  
* ETHGlobal Cannes hackathon [finalists](https://x.com/ETHGlobal/status/2040805013937877297) from [266 projects](https://ethglobal.com/showcase?events=cannes2026)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.3 (12.8 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,028 \- $2,256 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.1% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![MetaMask Advanced Permissions][./metamask-advanced-permissions.png]

[Advanced Permissions](https://metamask.io/news/introducing-advanced-permissions) allow users to grant scoped, time-bound access to a dapp or agent once.  Built on ERC-7715 and enforced by the ERC-7710 Delegation Framework contracts.

What does Advanced Permissions unlock for builders? 

* Subscriptions and recurring payments that work natively onchain  
* DCA strategies that execute without requiring a signature each time  
* AI agents that operate within user-defined scoped limits  
* Smoother dapp experiences with fewer interruptions for users

Start building today with [MetaMask Smart Accounts Kit](https://docs.metamask.io/smart-accounts-kit).

---

### Applications

* [Aave](https://x.com/StaniKulechov/status/2041219266972926195) risk management: [Chaos Labs](https://governance.aave.com/t/chaos-labs-is-leaving-aave/24386) leaving & [LlamaRisk](https://governance.aave.com/t/llamarisk-ensuring-continuity-of-aaves-risk-management/24397) continuing  
* [Grove app](https://www.grove.finance/blog/introducing-the-grove-app): deposit USDS or USDC into Sky savings rate  
* [Augur](https://x.com/AugurProject/status/2041944884932719000) fork mechanism triggered, phase 1 (April \- June) REP can be staked on competing outcomes, phase 2 (June \- August) REP holders must migrate  
* Candide [Safe OpenSig](https://www.candide.dev/blog/opensig) (signer verification): local simulation & hardware screen emulation  
* [EVM Now](https://evm.now/about) (block explorer) on mainnet

### Developers

* Etherscan [contract tab](https://x.com/etherscan/status/2042215592640565650): IDE-style code browser, open & edit in Blockscan/Remix  
* Hardhat-deploy (plugin) [contract deployment survey](https://tally.so/r/kdWRdZ)  
* revm [v106](https://github.com/bluealloy/revm/releases/tag/v106): additional Glamsterdam support (EIP8037 & bal-devnet-3)  
* [x402 upto](https://x.com/0xyoussea/status/2042286187956879447): authorize max amount & server settles actual amount at end of request  
* ERC8211 smart batching [info website](https://www.erc8211.com/) & [demo](https://demo.erc8211.com/)  
* Application layer standards (ERCs):  
  * [ERC8216](https://github.com/ethereum/ERCs/pull/1645/changes): Slot-based equipment for ERC6551 accounts  
  * [ERC8217](https://github.com/ethereum/ERCs/pull/1648/changes): Agent NFT identity bindings  
  * [ERC8218](https://github.com/ethereum/ERCs/pull/1650/changes): Builder discovery  
  * [ERC8220](https://github.com/ethereum/ERCs/pull/1656/changes): Onchain AI governance  
  * [ERC8221](https://github.com/ethereum/ERCs/pull/1658/changes): Wallet title deeds

### Agents

* Austin Griffith [ETHSkills](https://x.com/austingriffith/status/2042404028039250418): adds feedback mechanism

### Security

* Denaria [$165k exploit](https://x.com/DenariaFinance/status/2042589690415427933) on Linea

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#234](https://forkcast.org/calls/acde/234)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [bal-devnet-3](https://bal-devnet-3.ethpandaops.io/) launched  
  * [epbs-devnet-1](https://epbs-devnet-1.ethpandaops.io/) multiple issues under investigation  
  * glamsterdam-devnet-0 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-0)) targeting next week if epbs-devnet-1 stable otherwise continue with separate execution & consensus layer devnets  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * Non-headliner EIP proposals open  
  * Account abstraction:  
    * Native account abstraction discussions & breakout planned  
    * [ERC8221 wallet title deeds](https://docs.google.com/presentation/d/1YtKSHpSE8lUDDLOFyA6_c9sVxyBYavMPv-MrW6uFEOw/edit) presentation (NFT controlled smart account)  
* History pruning: minimum history retention period discussion (2 weeks \- 1 year)  
* Network upgrade [Scheduled for Inclusion clarification](https://github.com/ethereum/EIPs/pull/11475) proposal

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * Potuz: [finalized checkpoint guarantee in Gloas](https://www.potuz.net/posts/gloas-finalized/)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * FOCIL breakout [\#32](https://x.com/jih2nn/status/2041862068140437559)  
* Toni Wahrstätter: [txdelay](https://txdelay.xyz/), view how long transactions take to be included  
* Proximity prize: [open problems in list decoding & correlated agreement](https://x.com/GiacomoFenzi/status/2042257154535531008)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8219](https://github.com/ethereum/EIPs/pull/11495/changes): Checked arithmetic opcodes  
  * [EIP8222](https://github.com/ethereum/EIPs/pull/11500/changes): Lean staking

### Research

* Toni Wahrstätter: [EIP8142 Block-in-Blobs overview](https://ethresear.ch/t/blocks-are-dead-long-live-blobs/24611)

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.2% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 921k active (target 128k), 12k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * Paradigm [Reth v2](https://www.paradigm.xyz/2026/04/releasing-reth-2-0): 1.7 Gigagas/s performance, sparse trie cache, partial proofs, tiered storage & minimal mode; [Snapshot tool](https://snapshots.reth.rs): parallel streams, automatic resume & config generation

### Layer 2

* Reminder: Public Goods Network (PGN) shutting down, [claim funds](https://pgnclaim.vercel.app/) before April 20

### Regulation

* Roman Storm: [acquittal hearing](https://x.com/theragetech/status/2042295965487444304)  
  * [Free Roman Storm](https://freeromanstorm.com/) campaign  
* White House Council of Economic Advisers: [stablecoin yield prohibition](https://www.whitehouse.gov/research/2026/04/effects-of-stablecoin-yield-prohibition-on-bank-lending/) would do little to protect bank lending, while forgoing consumer benefits  
* Paradigm [GENIUS Act rulemaking tracker](https://www.paradigm.xyz/2026/04/an-interactive-guide-to-genius-implementation)  
* Bank of Canada: [DeFi lending report](https://www.bankofcanada.ca/2026/04/staff-analytical-paper-2026-13/), study of lending on Aave v3  
* [Hong Kong Monetary Authority](https://www.hkma.gov.hk/eng/news-and-media/press-releases/2026/04/20260410-4/): Anchorpoint (Standard Chartered joint venture) & HSBC granted stablecoin issuer licences

### General

* Drift (Solana) [$285M exploit background](https://x.com/DriftProtocol/status/2040611161121370409), attackers met team in person at conferences over 6 months & deposited $1M  
* Awaken Tax (crypto tax tool) [unauthorized activity](https://accrue.notion.site/awaken-security-april), be alert for social engineering  
* Security Alliance (SEAL): [DPRK fake Microsoft Teams & Zoom calls](https://radar.securityalliance.org/advisory-on-dprk-unc1069-fake-microsoft-teams-and-zoom-calls/)  
* Anthropic [Claude Mythos preview cybersecurity capabilities](https://red.anthropic.com/2026/mythos-preview/)

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-19/](https://ethereal.news/ethereal-news-weekly-19/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-19.md](https://ethereal.news/ethereal-news-weekly-19.md)*  

---
