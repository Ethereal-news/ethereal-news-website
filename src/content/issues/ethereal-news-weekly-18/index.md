---
title: 'Ethereal news weekly #18'
description: 'Quantum breakthrough papers, Aave v4, Aztec alpha'
date: 'April 3, 2026'
---

Quantum breakthrough papers, Aave v4, Aztec alpha

### Ecosystem

* Justin Drake: [quantum breakthrough papers](https://x.com/drakefjustin/status/2038847732152996108) improve Shor's algorithm, \~10% chance of q-day by 2032  
  * [Google Quantum AI](https://arxiv.org/abs/2603.28846): estimates breaking secp256k1 curve with \~1.5k logical qubits, circuits can execute in minutes on \~500k physical qubits, zk proof used to validate results without disclosing attack vectors  
  * [Oratomic](https://arxiv.org/abs/2603.28627): execute with 10k reconfigurable atomic qubits  
* [Ethereum UX map](https://ethux.design/): user experience pain points, solutions & adoption  
* Road to Devcon 8 [ecosystem program](https://devcon.org/en/ecosystem-program/), up to $500 grants for meetups, activations, bootcamps, roundtables & academic collabs, wave 1 application deadline April 30  
* Synthesis AI \+ human [hackathon winners](https://x.com/synthesis_md/status/2039980188323488054)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.9 (12.7 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,973 \- $2,159 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.1% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* [BNP Paribas](https://group.bnpparibas/en/press-release/bnp-paribas-expands-its-stock-exchange-offering-to-crypto-asset-etns) exchange offering in France expands to include ETH ETFs  
* [Franklin Templeton](https://investors.franklinresources.com/news-center/press-releases/press-release-details/2026/Franklin-Templeton-Agrees-to-Acquire-Liquid-Strategies-from-CoinFund-Spinoff-Launches-Franklin-Crypto/default.aspx) launching Franklin Crypto, institutional-grade crypto investment management unit, acquires team & liquid crypto strategies from CoinFund spinoff

### Applications

* [Aave v4](https://aave.com/blog/aave-v4-live-ethereum) live on mainnet with 3 liquidity hubs & Aave Pro dedicated interface  
  * [DeFi Saver](https://blog.defisaver.com/aave-v4-is-now-live-on-defi-saver/) integrated Aave v4  
* OpenCover [covered vaults](https://x.com/OpenCover/status/2039721567169483046): vault-native risk transfer primitive, fixed rate premiums streamed from yield while coverage is active  
* Safe [Safenet](https://safefoundation.org/blog/safe-launches-safenet-beta): guard verifies validators have attested that a transaction satisfies a set of security rules before execution, beta  
* [Ante Vaults](https://ante.org/blog/ante-vaults-is-live) live on mainnet & Base, time-based social recovery & inheritance, built on Safe  
* ScopeLift taking over operation of [Tally governance platform](https://x.com/ScopeLift/status/2039102450410434820)  
* Paragraph [publish.new](https://paragraph.com/@blog/your-work-paid-for-by-agents): digital goods marketplace

### Developers

* Argot Collective [Fe 26](https://blog.fe-lang.org/posts/fe26-a-fresh-start/) (Rust-like language): rewrite with new compiler & type system, Sourcify support, not production ready  
* Nomic Foundation [Hardhat v3.3.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.3.0) (dev framework): execution tracing support for JavaScript integration tests & inline configuration per test for Solidity tests  
* Trail of Bits:   
  * [Echidna v2.3.2](https://github.com/crytic/echidna/releases/tag/v2.3.2) (fuzzer): improved Foundry test support, coverage for contracts with immutables & factory contracts  
  * [Mewt](https://blog.trailofbits.com/2026/04/01/mutation-testing-for-the-agentic-era/) (mutation testing): language-agnostic, Solidity support, optimized for agents  
* [Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol) launching x402 Foundation  
* Privacy Stewards of Ethereum (PSE) [OpenAC Studio](https://openac-flow-builder.vercel.app/): design tool for anonymous credential presentation flows, work in progress  
* Paul Miller noble-post-quantum [0.6.0](https://github.com/paulmillr/noble-post-quantum/releases/tag/0.6.0) (JavaScript library): adds Falcon support  
* Application layer standards (ERCs):  
  * [ERC8210](https://github.com/ethereum/ERCs/pull/1632/changes): Agent assurance  
  * [ERC8211](https://github.com/ethereum/ERCs/pull/1638/changes): Smart batching  
  * [ERC8213](https://github.com/ethereum/ERCs/pull/1639/changes): Wallet signature & calldata digest display  
  * [ERC8214](https://github.com/ethereum/ERCs/pull/1643/changes): Buy now pay later

### Agents

* SpeedRun Ethereum [build prompts](https://speedrunethereum.com/build-prompts): project specs to scaffold apps using Scaffold-ETH 2  
* Nethermind [DeFi skills](https://defi-skills.nethermind.io/): intent-based transaction builder, outputs unsigned transaction

### Security

* Security Alliance (SEAL): [incident response template](https://frameworks.securityalliance.org/incident-management/incident-response-template/overview/)  
* CD Security [skills](https://github.com/CDSecurity/cdsecurity-skills#readme) (Claude Code): security review readiness check, scores test coverage, test quality, NatSpec, code hygiene, dependencies, best practices, deployment & docs

### All core devs (main protocol calls)

#### All core devs \- testing (ACDT) [\#76](https://forkcast.org/calls/acdt/076)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-3 ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-3)): targeting next week  
  * glamsterdam-devnet-0 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-0)): targeting April 15, includes block-level access lists & ePBS 

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * epbs-devnet-1 ([Dora](https://dora.epbs-devnet-1.ethpandaops.io/) explorer) launched  
  * Glamsterdam repricings [\#5](https://forkcast.org/calls/price/005)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * [EIP8198 Quick Slots](https://quickslots.info/) info website  
* Consensus-specs [v1.7.0-alpha.4](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.4): PTC changes  
* Lightclient: [account abstraction link tree](https://hackmd.io/@matt/aa-link-tree), history of major contributions   
* Ethereum improvement proposals (EIPs):  
  * [EIP8208](https://github.com/ethereum/EIPs/pull/11462/changes): Increase maximum contract size to 64KiB  
  * [EIP8209](https://eips.ethereum.org/EIPS/eip-8209): Commit-reveal transaction frames  
  * [EIP8212](https://github.com/ethereum/EIPs/pull/11467/changes): Block-scoped transient storage opcodes  
  * [EIP8215](https://github.com/ethereum/EIPs/pull/11480/changes): Hash-committed account 

### Research

* [Decoupled consensus with Goldfish](https://ethresear.ch/t/unblocking-faster-finality-with-decoupled-consensus/24527), small randomly sampled committee for block production, finality pipeline runs in parallel, both pipelines can be optimized  
* [Sharded private information retrieval (PIR) design](https://ethresear.ch/t/sharded-pir-design-for-the-ethereum-state/24552): shard data & pair with PIR schemes

### Staking

* Sigma Prime [Bombora](https://bombora.build/docs/getting-started) (builder) live  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~52% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.2% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 922k active (target 128k), 11k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * Consensys [Teku 26.4.0](https://github.com/Consensys/teku/releases/tag/26.4.0) (optional)  
    * [Grandine 2.0.4](https://github.com/grandinetech/grandine/releases/tag/2.0.4) (high): security fixes & performance optimizations  
    * Status [Nimbus v26.3.1](https://github.com/status-im/nimbus-eth2/releases/tag/v26.3.1) (medium): implements fast confirmation rule & improves column handling performance  
  * Execution layer:  
    * EF [Geth v1.17.2](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.2) (maintenance): critical fix for debug\_executionWitness data corruption & pre-Prague history pruning (reduce storage to \~500 GB)

### Layer 2

* [Aztec](https://aztec.network/blog/announcing-the-alpha-network) (privacy L2) live, alpha; [L2Beat](https://x.com/l2beat/status/2039332243680731188) Stage 1; Santiago Palladino: [first transaction](https://x.com/smpalladino/status/2038984084186161403)  
* Linea:   
  * [yield boost](https://linea.build/blog/yield-boost-is-activated) rolling out, up to 60% of bridged ETH staked on mainnet via Lido v3  
  * [moving to RISC-V](https://linea.build/blog/linea-proved-the-evm-the-hard-way-heres-what-comes-next)  
* Luca Donno (L2Beat): [dispute explorer](https://disputes.slopo.net/), view fault dispute games, 121 contested so far  
* [Ethereum economic zone](https://x.com/etheconomiczone/status/2038271122907578375) (L1\<\>L2 framework): synchronous composable rollups, enables atomic crosschain execution

### Regulation

* US CFTC [asserts prediction market jurisdiction](https://www.cftc.gov/PressRoom/PressReleases/9206-26), sues Arizona, Connecticut & Illinois   
* US Attorneys Office: [ten charged for alleged pump & dump schemes](https://www.justice.gov/usao-ndca/pr/ten-foreign-nationals-charged-international-operation-targeting-cryptocurrency-market) 

### General

* [Axios](https://github.com/axios/axios/issues/10636) npm supply chain attack via social engineering, two malicious versions published with remote access trojan  
* Vitalik: [self sovereign LLM setup](https://vitalik.eth.limo/general/2026/04/02/secure_llms.html), llama-server on NixOS Linux, pi as a wrapper, folders for personal notes & world knowledge and bubblewrap sandbox

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-18/](https://ethereal.news/ethereal-news-weekly-18/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-18.md](https://ethereal.news/ethereal-news-weekly-18.md)*  

---
