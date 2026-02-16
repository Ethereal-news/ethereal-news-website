---
title: 'Ethereal news weekly #6'
description: 'BPO2 upgrade increased blobs, write Roman Storm a letter of support, Octant epoch 10'
date: 'January 9, 2026'
---

BPO2 upgrade increased blobs, write Roman Storm a letter of support, Octant epoch 10

### Ecosystem

* [BPO2](https://x.com/ethereum/status/2008958120035283285) live (blob parameter only upgrade): increased blobs per block to target 14 & max 21 (up from target 10 & max 15\)  
* Vitalik:   
  * [Resilience](https://x.com/VitalikButerin/status/2008174642066845778) is the game Ethereum is suited to win, block space must be decentralized, permissionless & resilient and then abundant  
  * [Increasing bandwidth](https://x.com/VitalikButerin/status/2009158272943599877) is safer than reducing latency, fast chains must be L2s  
  * [Trilemma is solved](https://x.com/VitalikButerin/status/2007559523528233041) via data availability sampling & ZK-EVMs (primary way to validate blocks by 2027-2030)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 3.0 (12.2 for zero net issuance)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $3,045 – $3,293 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.034 (0.165 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io/)  

---

### Enterprise

* [Morgan Stanley](https://www.sec.gov/Archives/edgar/data/2103976/000110465926001436/tm2534146d1_s1.htm) filed for Ether ETF, includes staking  
* Wyoming [Frontier stablecoin](https://governor.wyo.gov/news-releases/wyoming-ushers-in-new-era-launches-first-of-its-kind-frontier-stable-token-for-public-purchase): purchasable on Kraken, supported chains include mainnet, Arbitrum, Base & Optimism

### Applications

* Octant [epoch 10](https://x.com/OctantApp/status/2008614595741806678) (public goods funding): 24 of the top projects from previous 9 epochs, allocation open until January 20  
* Zak Cole: [Fair launch handbook](https://fairlaunch.org/), guide to equitable token distribution  
* [HuddlePad](https://x.com/huddle01com/status/2009302713377673704) (token launchpad) live on Arbitrum, uses Uniswap continuous clearing auctions (CCA)  
* [Allora](https://www.allora.network/blog/allora-network-launches-on-base-unlocking-a-new-era-of-intelligent-applications) (AI-powered inference feeds) live on Base  
* Fluent [Prints](https://x.com/fluentxyz/status/2009287800475287700) (reputation aggregator): humanity & influence status  
* [Blobstein](https://www.blobstein.com/): US DoJ Epstein files temporarily stored in blobs; using [\~20%](https://x.com/hildobby/status/2009057028594078203) of blobs

### Developers

* Foundry (dev framework):  
  * Forge-std [v1.14.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.14.0) (helpers): Solidity 0.8.13+ support; [v1.13.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.13.0): Solidity 0.6.2 \- 0.8.13 support  
* Hardhat [v3.1.3](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.1.3) (dev framework): Solidity 0.8.31+ support for ARM Linux, adds Mocha to unified test output  
* [Voltaire](https://x.com/tevmtools/status/2006993286645559709) (client library): designed for AI-assisted development, supports TypeScript, Zig, C & Swift; MCP server; in browser playground; beta  
* Hevm [v0.57.0](https://github.com/argotorg/hevm/releases/tag/release%2F0.57.0) (symbolic analysis): detects infeasible paths earlier, less likely to exhaust system resources analyzing complex contracts & supports symbolic powers of 2  
* EVMole [0.8.2](https://github.com/cdump/evmole/releases/tag/0.8.2) (function selector extractor): adds Go implementation & Fusaka EIP7939 CLZ opcode support  
* Sourcify (code verification) [Parquet export format v2](https://x.com/SourcifyEth/status/2008856171621540086): append-only exports, S3 compatible API, file metadata from Google Cloud Storage API & \~85% compression  
* [OnboardMe](https://github.com/infosec-us-team/onboardme#readme) (contract navigator): requires Etherscan API key, experimental  
* Application layer standards (ERCs):  
  * ERC8004 [v1](https://x.com/yq_acc/status/2009150787478540491): Trustless agents  
  * [ERC8118](https://github.com/ethereum/ERCs/pull/1450/files): Agent authorization  
  * [ERC8119](https://github.com/ethereum/ERCs/pull/1455/files): Key parameters  
  * [ERC8121](https://github.com/ethereum/ERCs/pull/1456/files): Delegated metadata resolution via hooks  
  * [ERC8122](https://github.com/ethereum/ERCs/pull/1463/files): Minimal agent registry

### Security

* Truebit [$26M exploit](https://x.com/pashov/status/2009334293798244626); contract deployed in 2021  
* TMX [$1.4M exploit](https://rekt.news/tmztribe-rekt) on Arbitrum  
* IPOR Fusion [$300k exploit](https://blog.ipor.io/post-mortem-ipor-usdc-optimizer-arbitrum-vault-exploit-aff11fd01b62) on Arbitrum  
* PRXVT [exploit](https://x.com/PRXVTai/status/2008438800523915307) on Base

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#172](https://forkcast.org/calls/acdc/172)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade:  
  * [Headliner proposals](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876): deadline February 4, requires Eth Magicians post & presentation at ACD  
* Proposed [EIP champion guide](https://github.com/ethereum/pm/pull/1864)

#### All core devs \- execution (ACDE) [\#227](https://forkcast.org/calls/acde/227)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting June 2026):  
  * Non-headliner scoping: [categorized shortlist](https://notes.ethereum.org/@ansgar/glamsterdam-el-pfi-eips) (from last ACDE)  
  * [Considered for Inclusion](https://forkcast.org/upgrade/glamsterdam/#considered-for-inclusion):  
    * [EIP7997](https://forkcast.org/eips/7997/) deterministic factory predeploy  
  * Execution layer non-headliner candidates still to be decided at next ACDE:  
    * Contract size limit: [EIP7907](https://forkcast.org/eips/7907/) meter contract code size & increase limit vs [EIP7954](https://eips.ethereum.org/EIPS/eip-7954) simple increase to 32 kilobytes (without changing data structures); [EIP7903](https://forkcast.org/eips/7903/) remove initcode size limit  
    * [EIP8037](https://forkcast.org/eips/8037/) state creation gas cost increase  
    * Remaining [Proposed for Inclusion](https://forkcast.org/upgrade/glamsterdam/#proposed-for-inclusion) EIPs  
  * Declined for Inclusion:  
    * [EIP8058](https://forkcast.org/eips/8058/) contract bytecode deduplication discount; [EIP7668](https://forkcast.org/eips/7668/) remove bloom filters; [EIP7745](https://forkcast.org/eips/7745/) trustless log index

### Layer 1

* Consensus specs [v1.7.0-alpha.0](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.0): epbs-devnet-0 target, builders separated from validators & don’t perform validator duties  
* Ethereum improvement proposals (EIPs):  
  * [EIP8120](https://github.com/ethereum/EIPs/pull/11038/files): MLOAD8 & CALLDATALOAD8 opcodes 

### Research

* [Single execution environment](https://ethresear.ch/t/solving-ethereum-s-fragmentation-problem-with-sync-composability/23814): unify rollups via synchronous composability so they behave as if part of unified execution environment

### Staking

* Toni Wahrstätter:   
  * [MEV builder bids](https://bids.pics): view live auction with bids & timing  
  * [Transaction pool analytics](https://xof.pics): block explorer showing transactions via private order flow  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer:   
    * Lighthouse \~35% (data may not be accurate)  
    * Flashbots relay [diversity stats](https://x.com/dataalways/status/2008246604810350813): Lighthouse 47% exclusively, 57% including multi-client setups  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24.2% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 973k active  
* Client releases:  
  * Consensus layer:  
    * Prysm [v7.1.2](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.2) (patch): improves management of pending attestation aggregation 

### Layer 2

* Arbitrum [Dia upgrade](https://blog.arbitrum.io/arbos-dia/) live, smoother gas prices during demand spikes, default base fee increased to 0.02 gwei, Fusaka support (secp256r1 update, CLZ opcode & ModExp repricing) & Arbitrum chains can use mint/burn native gas tokens  
* Optimism Foundation [OP token buy back proposal](https://www.optimism.io/blog/op-token-buybacks), using 50% of Superchain revenue for 12 months, starting in February, Foundation would directly manage ETH treasury   
* Starknet [outage](https://www.starknet.io/blog/starknet-incident-report-january-5-2026/) on January 5 due to incorrect processing of a transaction, 18 minutes of activity reverted  
* Matter Labs [Boojum](https://x.com/donnoh_eth/status/2008223741084577906): L2Beat reproduced zk verifiers & host programs for zkSync elastic chains

### Regulation

* Write Roman Storm a [letter of support](https://freeromanstorm.com/write-letter)  
  * Vitalik’s [letter](https://x.com/VitalikButerin/status/2009518473173512379)

### General

* [Wrench attack analysis](https://x.com/hosseeb/status/2007759365432803803): attacks increasing & more violent but risk per user only moderately increased and significantly lower than pre-2019  
* [Ledger](https://support.ledger.com/article/Global-e-Incident-to-Order-Data---January-2026) (hardware wallet) e-commerce partner Global-e data breach includes name, postal address, email, telephone & order details   
* [AI trading agent fairness risks](https://x.com/0xfishylosopher/status/2008664154576744612): public algorithms get copytraded, sandwiched & often lose money; private algorithms can be rugged by insiders

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-6](https://ethereal.news/ethereal-news-weekly-6)*
*Markdown: [ethereal.news/ethereal-news-weekly-6.md](https://ethereal.news/ethereal-news-weekly-6.md)*

---

