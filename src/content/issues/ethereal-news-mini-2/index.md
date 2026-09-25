---
title: 'Ethereal news mini #2'
description: 'Hegotá upgrade frames-devnet-0 live, Nethermind 2.0.0, Daisugi post quantum testnet'
date: 'September 25, 2026'
---

*Hegotá upgrade frames-devnet-0 live, Nethermind 2.0.0, Daisugi post quantum testnet*

### Ecosystem

* [Linux Foundation Decentralized Trust](https://www.lfdecentralizedtrust.org/announcements/lf-decentralized-trust-adds-swift-wells-fargo-and-13-additional-new-members) adds EthSystems (general member) & Ethereum Institutional (associate member)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.4 average, 0 \- 24.9 (13.5 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122.1M, 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): \$2,552 \- \$2,804 (all time high \$4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.032 (0.165 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io)

![Consensys](./consensys-hiring.jpg)
We are massively hiring to support our growth across several roles. 

If you are interested in joining the team, check out our open positions and apply directly via our [careers page](https://jobs.ashbyhq.com/consensys). 

---

### Enterprise

* [ARK Venture Fund](https://securitize.io/learn/press/ark-invest-tokenizes-arkvx-with-securitize) (ARKVX) tokenizing through Securitize on mainnet, US investors only

### Applications

* [Alchemix](https://x.com/AlchemixFi/status/2103152470700769415) expands to Base  
* Ondo [Intelligent Portfolios](https://ondo.finance/blog/introducing-ondo-intelligent-portfolios) starting with portfolio strategies developed by BlackRock, not available in US  
* cp0x [defi-dna](https://defi-dna.xyz) (DeFi risk aggregator): being built using EF grant  
* [Kelp filed lawsuit](https://x.com/KelpDAO/status/2103332910128599327) against LayerZero over rsETH bridge exploit  
* [Trueo](https://x.com/Trueo_/status/2102123554162561272) (prediction market) migrating to mainnet from Base  
* [Nymis](https://nymis.io) (privacy scanner): analyzes onchain activity for an address

### Developers

* Nomic Foundation [Hardhat v3.18.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.18.0) (dev framework): adds Solidity test profiles & faster signing via native secp256k1 for ethers test suites  
* OKcontract Labs [oksolc](https://github.com/okcontract/oksolc#readme) (Solidity compiler): implemented in Zig, aims for byte compatibility with Solidity 0.8.36, usable with Foundry, not production ready  
* EthSystems:  
  * [Specifications](https://specs.ethsystems.org): drafts for shielded pool & attestation gated profile  
  * [Chainfold](https://ethsystems.org/writeups/building-blocks-chainfold/) (Rust library): fold engine for ordered chain events with reorg recovery & durable snapshots  
* Application layer standards (ERCs):  
  * [ERC8419](https://github.com/ethereum/ERCs/pull/2012/changes): Know your agent framework  
  * [ERC8420](https://github.com/ethereum/ERCs/pull/2026/changes): AA compatible solver  
  * [ERC8421](https://github.com/ethereum/ERCs/pull/2028/changes): Frame transaction alternative transaction pools  
  * [ERC8423](https://github.com/ethereum/ERCs/pull/2032/changes): ERC721 burn record extension  
  * [ERC8424](https://github.com/ethereum/ERCs/pull/2034/changes): Confidential real world asset token

### Security

* Payy [bridge exploit](https://x.com/payy_link/status/2103182268806373645), non custodial deposits stolen  
* Limit Break [Payment Processor V2 & V3 exploit](https://x.com/0xQuit/status/2103410682368512505), 23k NFTs rescued, revoke approvals  
* Pashov Audit Group [solidity-auditor v4](https://www.pashov.com/solidity-auditor-v4): adds loop mode to run N times with shared memory of findings, combined in one report  
* Etherscan [SOC 2 Type II compliance](https://info.etherscan.com/etherscan-soc-2-type-ii-compliance/)  
* Security Alliance (SEAL) Frameworks [LLM support](https://x.com/_SEAL_Org/status/2102053592437780965)

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#246](https://forkcast.org/calls/acde/246/)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Nixo (EthCoordinate) [ACDE summary](https://x.com/nixorokish/status/2103164113841250376)  
  * Non headliner scoping used [EIPs by average client rating](https://forkcast.org/upgrade/hegota/client-priority/?quick=el)  
  * 10 EIPs [Considered for Inclusion](https://forkcast.org/upgrade/hegota/#considered-for-inclusion) (CFI):  
    * Account abstraction (Frame transactions): [EIP7906](https://forkcast.org/eips/7906/) transaction assertions via state diff opcode, [EIP8250](https://forkcast.org/eips/8250/) keyed nonces & [EIP8272](https://forkcast.org/eips/8272/) recent roots  
    * EVM features: [EIP8253](https://forkcast.org/eips/8253/) bump nonce of zero nonce storage accounts, [EIP8163](https://forkcast.org/eips/8163/) reserve extension opcode and [EIP7979](https://forkcast.org/eips/7979/) call & return opcodes  
    * EVM pricing: [EIP3298](https://forkcast.org/eips/3298/) remove storage clear refund & refund cap  
    * Data repricing: [EIP8131](https://forkcast.org/eips/8131/) unified transaction content floor & [EIP8279](https://forkcast.org/eips/8279/) block access list byte floor  
    * Miscellaneous: [EIP7668](https://forkcast.org/eips/7668/) remove bloom filters  
  * 1 EIP [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * [EIP8304](https://forkcast.org/eips/8304/) trustless log & transaction index  
  * Review post Glamsterdam upgrade:  
    * [EIP8368](https://forkcast.org/eips/8368/) cost per state byte (CPSB) recalibration & [EIP8372](https://forkcast.org/eips/8372/) normalized state gas limit

#### All core devs \- testing (ACDT) [\#97](https://forkcast.org/calls/acdt/097/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/097/?breakout=cl)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Separate devnets for headliners FOCIL & Frame transactions before combining  
  * Proposed [EIP8142](https://forkcast.org/eips/8142/) block in blobs withdrawn & replaced by proposed [EIP8411](https://forkcast.org/eips/8411/) fast execution payload broadcast

### Layer 1

* consensus specs [v1.7.0-beta.1](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-beta.1) & [v1.7.0-beta.2](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-beta.2)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * [frames-devnet-0](https://forkcast.org/networks/frames-devnet-0/) live  
  * Frame transactions breakout [\#5](https://x.com/wolovim/status/2103156937005134181)  
    * Anders Elowsson (EF) [Frame transactions & a multidimensional fee market](https://docs.google.com/presentation/d/e/2PACX-1vRCsl3N275_WZnVfN09ahcNg9p28o4JKEtwrdaRKWIoXOMNwBhdGWGBJI9qecnTA7Xn4azLeVQBl4lE/pub)  
  * Barnabé Monnot (Ethlabs) [EIP8198 quick slots merged as feature spec in consensus specs](https://x.com/barnabemonnot/status/2103237576496681227) (Proposed for Inclusion)  
  * Potuz (Prysm) [quick blocks without quick slots](https://www.potuz.net/posts/quick-blocks/) proposal, slots remain at 12 seconds & builder reveals a block every 4 seconds  
* [Daisugi 0.1](https://daisugi.fyi): post quantum testnet using hash based SPHINCS signatures with non native account abstraction  
* Ethereum improvement proposals (EIPs):  
  * [EIP8422](https://github.com/ethereum/EIPs/pull/12372/changes): Deferred payload verification

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~52% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.7% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 895k active (target 128k), 23k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Erigon v3.7.0](https://github.com/erigontech/erigon/releases/tag/v3.7.0): parallel commitment by default, RPC performance improvements, persisted receipts by default & Glamsterdam upgrade on Sepolia testnet  
    * EF [Geth v1.17.6](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.6) (recommended): block processing & initial sync performance improvements and Glamsterdam upgrade on Sepolia testnet  
    * [Nethermind 2.0.0](https://github.com/NethermindEth/nethermind/releases/tag/2.0.0): flat state database (archive nodes drop from \~30 TB to \~2 TB), blocks process 2-3× faster than previous release on fresh node & Glamsterdam upgrade on Sepolia testnet

### Research

* Csaba Király [hardening the transaction pool](https://ethresear.ch/t/champ-hardening-the-mempool-with-chain-anchored-multi-dimensional-peer-protection/26074) with chain anchored multidimensional peer protection  
* Dmitry Khovratovich [hash function candidates](https://ethresear.ch/t/post-poseidon-hash-function-variants-for-ethereum/26071) for post quantum

### Layer 2

* [Arbitrum One](https://x.com/arbitrum/status/2103122976384368927) priority gas auctions (transaction ordering policy) & fast feed (paid data feed) live, replaces Timeboost

### Regulation

* US CFTC [registrant crypto FAQs updated](https://www.cftc.gov/PressRoom/PressReleases/9303-26), customer funds may be invested in tokenized forms of permitted investments & blockchains can be used for record keeping without needing offchain versions

### General

* Bitget (exchange) [\~\$351.6M unauthorized transfers](https://x.com/bitget/status/2103236552482848927) from hot wallets  
* SingularityNET [bridge incident](https://x.com/SingularityNET/status/2102221596752482469), tokens minted & assets withdrawn via unauthorized access to cloud infrastructure

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-mini-2/](https://ethereal.news/ethereal-news-mini-2/)*  
*Markdown: [ethereal.news/ethereal-news-mini-2.md](https://ethereal.news/ethereal-news-mini-2.md)*  

---
