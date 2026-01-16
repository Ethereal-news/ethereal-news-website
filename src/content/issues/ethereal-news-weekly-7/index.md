---
title: 'Ethereal news weekly #7'
description: 'Ethereum must pass walkaway test, Base app focuses on trading, Trail of Bits Claude Code skills'
date: 'January 16, 2026'
---

Ethereum must pass walkaway test, Base app focuses on trading, Trail of Bits Claude Code skills

### Ecosystem

* Vitalik: [Ethereum must pass walkaway test](https://www.reddit.com/r/ethereum/comments/1qbj1wd/ethereum_itself_must_pass_the_walkaway_test/), add features (not halfway fixes) so we can ossify (if we want to), future innovation via client optimization & parameter changes (by validator voting) rather than network upgrades  
  * Features include: quantum-resistance, scaling (via ZK-EVM validation & data sampling), partial statelessness & state expiry, account abstraction, gas pricing free of DoS vulnerabilities, PoS economic model decentralized for decades and censorship & centralization resistant block building  
* PSE: [privacy experience quantitative survey results](https://pse.dev/blog/px-user-survey-2025) (75 users), gap in adoption not from lack of interest but experience failures  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.9 (12.3 for zero net issuance)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $3,066 \- $3,380 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.035 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask Developer](./metamaskdeveloper.jpg) 
Weekends are for building and you shouldn't be hunting for docs.

We’ve consolidated everything you need to build on MetaMask, from quickstarts and video tutorials to advanced architecture guides, all in one place. 🦊  

[MetaMask developer documentation](https://docs.metamask.io/). 

---

### Enterprise

* [Ingenico](https://ingenico.com/us-en/newsroom/press-releases/ingenico-launches-digital-currency-solution-enabling-stablecoin-payments): merchant payment terminals can accept stablecoins via WalletConnect Pay

### Applications

* Vitalik calls for [decentralized applications](https://www.reddit.com/r/ethereum/comments/1qcg3jc/the_web3_vision_of_decentralized_applications/) & [better decentralized stablecoins](https://www.reddit.com/r/ethereum/comments/1qbj1jg/we_need_better_decentralized_stablecoins/)  
* [Base app](https://x.com/jessepollak/status/2011518342616793184) (wallet \+ Farcaster based social) switches focus to trading first  
* Hinkal [private send](https://x.com/hinkal_protocol/status/2011171294318838092), split across multiple recipients & time windows  
* Ethereum Foundation dAI team: [ERC8004 explainer](https://x.com/VittoStack/status/2009637427397193765), discovery & trust layer for AI agents via onchain registries for identity, reputation & validation  
* YO (yield aggregator) [automated swap created $3.7M shortfall](https://www.yo.xyz/blog/post/youusd-incident-postmortem-automated-harvest-swap-jan-12-2026), covered by treasury

### Developers

* Argot [roadmap](https://www.argot.org/blog/2026-01-15-argot-roadmap-update-2026-1): milestones & priorities for Solidity, Fe, Sourcify, ethdebug, Act & hevm  
* Hardhat [v3.1.4](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.1.4) (dev framework): adds HTML coverage report & fixes code coverage calculation  
* Slither [0.11.4](https://github.com/crytic/slither/releases/tag/0.11.4) (static analyzer): adds CLZ opcode support, Solidity custom storage layouts & unindexed event address detector  
* [Browser RPC](https://github.com/gskril/browser-rpc#readme) (proxy server): sign transactions from scripts (Foundry, Hardhat & viem) via browser wallet  
* [Quixote](https://github.com/bilinearlabs/quixote#readme) (indexer): index events (requires RPC) & then query (SQL); inbuilt front end  
* Optimism [actions](https://actions.optimism.io/) (TypeScript SDK): modules to integrate DeFi into applications; developer preview  
* x402 hackathon: [winning projects](https://x.com/austingriffith/status/2011108282648445294) (selected by Austin Griffith)  
* Ethereum Community Foundation:   
  * [Ethereum MCP](https://github.com/ETHCF/ethereum-mcp#readme) (Model Context Protocol) query Ethereum using Claude; data sources: Etherscan, DeFiLlama, CoinGecko, growthepie, Blobscan & Dune    
* Application layer standards (ERCs):  
  * [ERC8124](https://github.com/ethereum/ERCs/pull/1465/files): ERC20 alias metadata extension  
  * [ERC8126](https://github.com/ethereum/ERCs/pull/1475/files): AI agent registration & verification  
  * [ERC8127](https://github.com/ethereum/ERCs/pull/1476/files): Human readable token identifiers

### Security

* Futureswap [\~$470k over two exploits](https://x.com/Phalcon_xyz/status/2011404828115866061) on Arbitrum  
* Sigma Prime: [Fusaka upgrade impact on contract security](https://blog.sigmaprime.io/fusaka-contract-security.html)  
* Trail of Bits: [Claude Code skills](https://github.com/trailofbits/skills#readme) for security research, vulnerability detection & audit workflows  
* Security Alliance (SEAL): [DPRK group Contagious Interview](https://radar.securityalliance.org/vs-code-tasks-abuse-by-contagious-interview-dprk/) use VS Code tasks as attack vector; disable allow automatic tasks in VS Code settings

### All core devs (main protocol calls)

[Tim Beiko](https://x.com/i/status/2009625017554772107) moving on from L1 R\&D to explore frontier use cases

#### All core devs \- execution (ACDE) [\#228](https://forkcast.org/calls/acde/228)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting June 2026):  
  * [Bal-devnet-2](https://notes.ethereum.org/@ethpandaops/bal-devnet-2): spec clarification discussions for non-headliner EIPs  
  * Non-headliner scoping: [categorized shortlist](https://notes.ethereum.org/@ansgar/glamsterdam-el-pfi-eips) (from last ACDE)  
  * [Considered for Inclusion](https://forkcast.org/upgrade/glamsterdam/#considered-for-inclusion):  
    * [EIP7954](https://forkcast.org/eips/7954/) increase maximum contract size (32KiB)  
  * Still to be decided at next ACDT:  
    * [EIP8037](https://forkcast.org/eips/8037/) state creation gas cost increase:   
      * Marius van der Wijden: [EIP8037 presentation](https://docs.google.com/presentation/d/1zRVR-tziS0Z0IACiDlcOPOUmkPdaBvjE-b10yH35iOY/edit)  
  * Declined for Inclusion:  
    * [EIP7793](https://forkcast.org/eips/7793/) conditional transactions, [EIP5920](https://forkcast.org/eips/5920/) PAY opcode, [EIP8051](https://forkcast.org/eips/8051/) precompile for ML-DSA signature verification, [EIP7971](https://forkcast.org/eips/7971/) hard limits for transient storage, [EIP8032](https://forkcast.org/eips/8032/) size-based storage gas pricing, [EIP7907](https://forkcast.org/eips/7907/) meter contract code size & increase limit and [EIP7903](https://forkcast.org/eips/7903/) remove initcode size limit  
  * Remaining [Proposed for Inclusion](https://forkcast.org/upgrade/glamsterdam/#proposed-for-inclusion) EIPs don’t change the protocol

#### All core devs \- testing (ACDT) [\#65](https://forkcast.org/calls/acdt/065)

* BPO3 (blob parameter only upgrade):   
  * not urgent based on current usage, getBlobV3 \+ partial cell messages would need to be implemented by all consensus layer clients  
* Glamsterdam upgrade:  
  * [Bal-devnet-2](https://notes.ethereum.org/@ethpandaops/bal-devnet-2): targeting late January, will add non-headliners: [EIP8024](https://forkcast.org/eips/8024/) SWAPN, DUPN & EXCHANGE, [EIP7708](https://forkcast.org/eips/7708/) ETH transfers emit a log, [EIP7778](https://forkcast.org/eips/7778/) block gas accounting without refunds and potentially [EIP7843](https://forkcast.org/eips/7843) SLOTNUM opcode (requires consensus layer change)  
  * Bal-devnet-3: plan to add four more non-headliner EIPs  
  * ePBS: spec discussions on new bid minimum increase (DoS mitigation), withdrawals & builder onboarding at fork

### Layer 1

* ethPandaOps:  
  * [2026 roadmap](https://ethpandaops.io/posts/ethpandaops-in-2026/): Glamsterdam & Hegotá upgrades, tooling, Xatu, the Lab, ZKVMs & hardening  
  * [Blob analysis](https://ethpandaops.io/posts/fusaka-more-blobs-less-votes/): timing games main driver of attestation degradation rather than blob counts  
  * The Lab [slot timelines](https://x.com/samcmAU/status/2012079872135585908): includes MEV bids, block arrival, execution times & data availability time  
* Consensus-specs [v1.7.0-alpha.1](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.1): reverts withdrawals change  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade:  
  * EIP7928 Block-level Access Lists breakout [\#10](https://forkcast.org/calls/bal/010/)  
  * Forkcast dashboards: [client priority](https://forkcast.org/priority) (non-headliner EIP preferences), [test complexity](https://forkcast.org/complexity) (EF STEEL scores) & [devnet tracker](https://forkcast.org/devnets)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade:  
  * EIP7805 FOCIL breakout [\#26](https://forkcast.org/calls/focil/026)  
* [75M gas limit benchmarking](https://docs.google.com/spreadsheets/d/137wrHKGXG4Hb4a3G1zICGl1U34AiNT3W9iEimrzxpXQ/edit?gid=301537091#gid=301537091): opcode performance by client  
* [zkEVM security overview](https://zkevm.ethereum.foundation/blog/zkevm-security-overview): level of concern & mitigations for 18 potential issues  
* Ethereum improvement proposals (EIPs):  
  * [EIP8123](https://eips.ethereum.org/EIPS/eip-8123): JSON-RPC method for transaction gas limit cap  
  * [EIP8125](https://github.com/ethereum/EIPs/pull/11081/files): Temporary contract storage

### Research

* Vitalik:   
  * [Recursive STARK based transaction pool](https://ethresear.ch/t/recursive-stark-based-bandwidth-efficient-mempool/23838)  
  * [Combining preconfirmations with based rollups](https://ethresear.ch/t/combining-preconfirmations-with-based-rollups-for-synchronous-composability/23863) for synchronous composability

### Staking

* ethStaker [staker console](https://paragraph.com/@ethstaker/introducing-the-staker-console): deposit, top up, upgrade to 0x02, consolidate, withdraw, exit & batch actions; Hoodi testnet only, mainnet pending audit  
* Lodestar (consensus layer client): [multi-layered defense strategy](https://blog.chainsafe.io/defending-lodestar) against npm supply chain attacks  
* Toni Wahrstätter: [MEV builder bids](https://bids.pics/) adds proposer to live view of auction  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~38% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 976k active  
* Client releases:  
  * Execution layer:  
    * Erigon [v3.3.3](https://github.com/erigontech/erigon/releases/tag/v3.3.3) (recommended): Discovery v5 enabled by default, fixes for committee counts, syncing, Shutter, half block execution stability & p2p vulnerability   
    * Geth [v1.16.8](https://github.com/ethereum/go-ethereum/releases/tag/v1.16.8) (security fix): resolves two p2p vulnerabilities that can impact liveness reported via Ethereum Foundation bug bounty program  
    * Nethermind [1.36.0](https://github.com/NethermindEth/nethermind/releases/tag/1.36.0): operator ergonomics & RPC/execution correctness hardening improvements, estimateGas aligned with Geth behavior, .NET 10 migration and obsolete config & analytics removed  
    * Reth [v1.10.0](https://github.com/paradigmxyz/reth/releases/tag/v1.10.0) (medium): performance improvements, new RPC endpoints (including getBlobsV3), CLI enhancements & extended OP Stack flashblock support

### Layer 2

* Taiko (rollup) [proof dashboard](https://proofs.taiko.xyz/): ZK coverage & proof time across batches and proof latency

### Regulation

* US crypto market structure legislation (Clarity act):  
  * Senate banking committee: [draft](https://www.banking.senate.gov/imo/media/doc/market_structure_draft.pdf), markup [postponed](https://www.banking.senate.gov/newsroom/majority/scott-statement-on-market-structure-markup)  
    * [Coinbase withdrew support](https://x.com/brian_armstrong/status/2011545247105355865) due to tokenized equities defacto ban, DeFi prohibitions, CFTC authority eroded & restricting stablecoin rewards (allowing banks to ban their competition)  
  * Senate agriculture committee: [schedule](https://www.agriculture.senate.gov/newsroom/rep/press/release/chairman-boozman-announces-timeline-for-crypto-market-structure-legislation), release January 21 & markup January 27

### General

* X [revoked API access for InfoFi](https://x.com/nikitabier/status/2011825522817270230)  
* Banteg [takopi](https://banteg.xyz/posts/takopi/) (Telegram bridge): message coding agents from anywhere 

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-7](https://ethereal.news/ethereal-news-weekly-7)*  

---




