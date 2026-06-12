---
title: 'Ethereal news weekly #27'
description: 'LG Electronics built L2 for advertising, Aave risk framework proposed, history of account abstraction'
date: 'June 12, 2026'
---

LG Electronics built L2 for advertising, Aave risk framework proposed, history of account abstraction

### Ecosystem

* Ethereum Foundation:  
  * EF Ecosystem Support Program: [ETH default payment method](https://x.com/EF_ESP/status/2062897232635195871) for new grants  
* Devcon 8 [community hub applications](https://forum.devcon.org/t/rfp-13-devcon-8-india-community-hubs/8657) open, August 12 deadline  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.3 average, 0.0 \- 13.0 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,523 \- $1,706 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.026 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* [LG Electronics](https://x.com/arbitrum/status/2065145040775598235) built L2 for advertising, piloted with Japanese ad agency  
* Türkiye [Directorate of Communications](https://cbiletisim.eth.limo/) publishing to IPFS \+ ENS

### Applications

* Aave [risk framework](https://governance.aave.com/t/arfc-aave-risk-framework/25114) proposed by LlamaRisk  
* Circle [cirBTC](https://www.circle.com/blog/cirbtc-is-now-live-on-ethereum) live on mainnet  
* Fileverse [dDocs](https://x.com/fileverse/status/2065083366790095311): adds markdown split view

### Developers

* Vyper (language):  
  * Banteg [vysort](https://banteg.xyz/posts/vysort/) (tool): rewrite Vyper 0.3.4-0.3.7 source to match nondeterministic deployed bytecode so it can be verified  
* Nomic Foundation [Hardhat v3.9.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.9.0) (dev framework): exclude files from coverage instrumentation & reporting  
* EF Institutional Privacy Task Force (IPTF): [shielded pools extension](https://iptf.ethereum.org/blog/exploring-hardened-shielded-pools/) with private information retrieval (PIR) \+ epoch nullifiers, proof of concept  
* Reminder: [Remix AI bootcamp](https://ethereumremix.substack.com/p/join-the-remix-ai-bootcamp-for-real) for real world impact, 5 weeks online, starts June 15  
* Application layer standards (ERCs):  
  * [ERC8290](https://eips.ethereum.org/EIPS/eip-8290): Shielded note teleportation  
  * [ERC8291](https://github.com/ethereum/ERCs/pull/1801/changes): SIWE gated NFT media URI  
  * [ERC8293](https://github.com/ethereum/ERCs/pull/1806/changes): Counterfactual rejection event log  
  * [ERC8294](https://github.com/ethereum/ERCs/pull/1808/changes): Validation network for ERC8004  
  * [ERC8299](https://github.com/ethereum/ERCs/pull/1810/changes): Input provenance for AI inference

### Agents

* [ENS8004](https://thomasclowes.com/turning-ens-names-into-discoverable-ai-agents/): register ENS as ERC8004 agent & create agent identity  
* Pashov Audit Group skills [v3](https://www.pashov.com/solidity-auditor-v3) (security review): adds flow-gap, numerical-gap & trust-gap agents

### Security

* Humanity Protocol [\~$36M exploit](https://humanityprotocol.notion.site/H-Token-Incident-Update-37ab0ec467a781d7af06e7dcedd66852) via private key compromise, developer machine compromised containing year old backups of 7 private keys (admin hot wallet, 3 of 6 mainnet & 3 of 5 BSC Safe signers)  
* Yuga Labs: [NFTs rescued from FloorProtocol v2](https://x.com/mfigge/status/2063782936399544740)

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#180](https://forkcast.org/calls/acdc/180)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * [glamsterdam-devnet-5](https://glamsterdam-devnet-5.ethpandaops.io/): bugs being fixed  
  * Separate builder deposit & exit contracts proposal: [EIP8282](https://github.com/ethereum/EIPs/pull/11760) Builder execution requests, could delay upgrade by months, potentially consider splitting upgrade  
  * QUIC transport support discussion, proposal to disable Mplex before Glamsterdam  
  * [Update validator states](https://www.migalabs.io/blog/validator-states) in Beacon API proposal  
  * [Mascot needed](https://ethereum-magicians.org/t/mascot-needed-for-glamsterdam-upgrade/26008), vote on Eth Magicians  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade:  
  * Non-headliners proposed for inclusion:  
    * [EIP8243](https://github.com/ethereum/EIPs/pull/11589/changes) Batching attestations at source

#### All core devs \- testing (ACDT) [\#82](https://forkcast.org/calls/acdt/082/) \+ [execution layer breakout](https://forkcast.org/calls/acdt/082?breakout=el) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/082?breakout=cl)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * [EIP7997](https://forkcast.org/eips/7997/) deterministic factory, switched from predeploy to enshrined Arachnid factory

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * Feel Your Protocol: [EIP8024 SWAPN, DUPN, EXCHANGE](https://feelyourprotocol.org/eip-8024-stack-opcodes-dupn-swapn-exchange) opcode explorer  
* Franco Victorio: [history of account abstraction](https://paragraph.com/@cethology/account-abstraction-the-story-so-far)  
* Protocol Guild [Q2 membership update](https://www.protocolguild.org/blog/20260604-Q2-quarterly-audit): 12 new members & 3 alumni  
* Ethereum improvement proposals (EIPs):  
  * [EIP8288](https://github.com/ethereum/EIPs/pull/11772/changes): Frame type for PQ sig & STARK aggregation  
  * [EIP8289](https://github.com/ethereum/EIPs/pull/11776/changes): Multi-block access list warming  
  * [EIP8292](https://github.com/ethereum/EIPs/pull/11777/changes): PQ attestation aggregators  
  * [EIP8295](https://github.com/ethereum/EIPs/pull/11788/changes): State tiering by periods  
  * [EIP8296](https://github.com/ethereum/EIPs/pull/11790/changes): Fixed cutoff state tiering  
  * [EIP8297](https://github.com/ethereum/EIPs/pull/11799/changes): Partitioned binary tree  
  * [EIP8298](https://github.com/ethereum/EIPs/pull/11800/changes): SETCODEFROM code reuse instruction

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~55% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 22% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 888k active (target 128k), 15k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * Lambda [ethrex v16.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v16.0.0) (recommended): security critical fixes across consensus, txpool & p2p; DB schema changes (no resync required but can’t roll back)  
    * Paradigm [Reth v2.3.0](https://github.com/paradigmxyz/reth/releases/tag/v2.3.0) (medium): Glamsterdam upgrade work & performance improvements

### Layer 2

* [Starknet proof system reproducible](https://x.com/l2beat/status/2064335355717853388) from source, verified by L2Beat  
* Scroll [9 of 12 security council replaced](https://x.com/l2beat/status/2062894639477104830) with 3 of 4 team admin multisig, drops to Stage 0  
* [Arbitrum Nova](https://forum.arbitrum.foundation/t/minimizing-arbitrum-nova-faqs/30955) (Optimium) transitioning to maintenance, migrate before September 2

### Regulation

* US SEC Commissioner Hester Peirce: [reminiscences of soon-to-be former regulator](https://www.sec.gov/newsroom/speeches-statements/peirce-remarks-chamber-commerce-capital-markets-summit-060926)

### General

* IC3 [intersection of crypto & AI](https://x.com/initc3org/status/2063991036242706743)  
* [npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/): npm install changes to improve supply chain security targeting July, allow scripts defaults to off and allow git & allow remote both default to none  
* [Loupe](https://github.com/mysk-research/loupe#readme): iOS app to view device fingerprinting surface via iOS APIs

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-27/](https://ethereal.news/ethereal-news-weekly-27/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-27.md](https://ethereal.news/ethereal-news-weekly-27.md)*  

---

