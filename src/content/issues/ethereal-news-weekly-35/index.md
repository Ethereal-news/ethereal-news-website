---
title: 'Ethereal news weekly #35'
description: 'Justin Drake: Poseidon abandoned, EthCoordinate evolved from EthStaker, Platåberget (Glamsterdam public testnet) live'
date: 'August 14, 2026'
---

*Justin Drake: Poseidon abandoned, EthCoordinate evolved from EthStaker, Platåberget (Glamsterdam public testnet) live*

### Ecosystem

* Justin Drake (EF): [Poseidon abandoned](https://x.com/drakefjustin/status/2087905684180418733), SNARK friendly hashes not necessary, pivoting to SHA or BLAKE  
  * Strawmap (L1 roadmap): production grade leanVM in 2027 and consensus layer, data layer & execution layer deployments in 2028  
* Vitalik: [2023 roadmap diagram overlaid with Strawmap](https://x.com/VitalikButerin/status/2086824673556467938) (L1 roadmap), quantum safety & privacy prioritized  
* [EthCoordinate](https://x.com/EthCoordinate/status/2087163391282708641) (facilitate stakeholder interaction), evolved from EthStaker:  
  * Team: Nixo, Butta, Patricio Worthalter, Yorick, Jérôme de Tychey, Marc Garreau & Franco Balzani  
  * Nixo [All Core Devs facilitator role](https://x.com/nixorokish/status/2087164297306595557) jointly funded with Protocol Guild [ACD Fund](https://www.protocolguild.org/blog/20260810-announcing-ACD-Fund-and-Nixo-Support)  
  * [Forkcast](https://x.com/wolovim/status/2087173693151588496) (built by Marc Garreau) new home  
* Ethlabs (R\&D lab): [Derek Chiang](https://x.com/decentrek/status/2087585101261725854) (ZeroDev founder) joined  
* Berlin Ethereum day (June 15\) [videos](https://www.youtube.com/playlist?list=PLZldrTINNNNM)  
* Science of Blockchain Conference (July 27-29) [videos](https://www.sbc-conference.com/2026/)  
* Devcon 8 [music performance applications](https://docs.google.com/forms/d/e/1FAIpQLSck9I3Tu0lZqCBt9FsE9VG4UjGM71gbY86aDDlC9jb_akPMmg/viewform) open for live music & DJs   
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 0.7 (13.3 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money): 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,855 \- $1,934 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.03 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Enterprise

* [Sharplink staking ETH](https://www.globenewswire.com/news-release/2026/08/13/3344459/0/en/sharplink-to-deploy-200m-eth-staking-allocation-with-lido.html) ($200M) through Lido  
* [Fidelity filed to add staking](https://www.sec.gov/Archives/edgar/data/2000046/000119312526342985/d335091ds3a.htm) to ETH ETF

### Applications

* ENS:   
  * [ENS Foundation expanded](https://ens.domains/blog/post/introducing-the-evolved-ens-foundation) with 5 member board   
  * [ENSv2 beta](https://ens.domains/blog/post/ensv2-beta-public-testing) on Sepolia testnet  
* [BaiBai](https://x.com/baibai_cx/status/2087662158012457226) (PropAMM \+ aggregator): live on Base  
* [Privacy Boost App](https://www.privacyboost.io/resources/blog/introducing-privacy-boost-app) live on OP Mainnet & Soneium  
* Octant [Epoch 13](https://x.com/OctantApp/status/2087221773016105341) privacy round (public goods funding): 100 ETH matching pool, application deadline September 10

### Developers

* Nomic Foundation [Hardhat v3.13.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.13.0) (dev framework): adds tolerance option for gas snapshot check to allow for drift & default values for config variables  
* [Remix v2.5.3](https://ethereumremix.substack.com/p/remix-release-v253) (dev framework): adds ENS contract naming, QuickDapp documentation generation & front end generation for Circom circuits  
* EthSystems [compliant shielded pools](https://ethsystems.org/blog/building-compliant-shielded-pools-on-ethereum/), prove payments were screened, proof of concept  
* Paul Miller [micro-eth-signer 0.20.0](https://github.com/paulmillr/micro-eth-signer/releases/tag/0.20.0) (library): adds GNS (Gwei Name Service), price quoter, APIs for block explorer like functionality (with demo) and faster RLP, KZG & SSZ  
* Application layer standards (ERCs):  
  * [ERC8376](https://github.com/ethereum/ERCs/pull/1942/changes): Token launch abuse detection & remediation  
  * [ERC8377](https://github.com/ethereum/ERCs/pull/1935/changes): Reference relative slippage bounds  
  * [ERC8378](https://github.com/ethereum/ERCs/pull/1937/changes): Parametric token

### Agents

* OpenZeppelin Contracts Wizard [MCP App](https://x.com/OpenZeppelin/status/2086786098093863227): generate Solidity contracts

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#243](https://forkcast.org/calls/acde/243)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * [Platåberget](https://forkcast.org/devnets/glamsterdam-devnet-8/) (glamsterdam-devnet-8): short lived permissionless public testnet live; test validators, builders & apps; Glamsterdam upgrade in \~1 week  
  * [Gas repricing numbers finalized](https://github.com/ethereum/pm/issues/2178#issuecomment-5282024624): 200M gas limit safe after Glamsterdam  
  * Optional [EIP8261](https://forkcast.org/eips/8261/) gas limit schedule  
  * History expiry: mix of strategies, \~5 months or previous upgrade  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (client preferences due September 10):  
    * Jochem Brouwer (EF): [presentation](https://github.com/ethereum/pm/issues/2178#issuecomment-5281987617) for [EIP7923](https://forkcast.org/eips/7923/) Linear page based memory costing, [EIP3298](https://forkcast.org/eips/3298/) Removal of refunds & [EIP5920](https://forkcast.org/eips/5920/) PAY opcode  
    * Dragan Rakita (Reth): [EIP8358](https://forkcast.org/eips/8358/) Net gas metering for account changes & [EIP8374](https://forkcast.org/eips/8374/) Persist warm access sets across reverts  
    * Toni Wahrstätter (EF): [EIP8368](https://forkcast.org/eips/8368/): cost per state byte (CPSB) recalibration for new gas limit  
    * Csaba Király: [EIP8094](https://forkcast.org/eips/8094/) eth/vhash blob aware transaction pool & [EIP8077](https://forkcast.org/eips/8077/) eth/XX \- announce transactions with nonce  
    * Danno Ferrin: [presentation](https://docs.google.com/presentation/d/1N9GLJNsPYF1Q_yXWQJnOKo0bADSZT2mSIZ-1pu1I-Ks) for [EIP8355](https://forkcast.org/eips/8355/) Precompiles for ML-DSA verification  
    * Anders Elowsson (EF): [presentation](https://docs.google.com/presentation/d/e/2PACX-1vTknCXZVwerqe0NUcqWNsZ4DeXLBHNQS-KwETEnphPzhelgE9tnI7jaSzRBdT2QrK2yuU05jyFnHDoa/pub) for [EIP8372](https://forkcast.org/eips/8372/) Normalized state gas limit  
    * Ben Adams (Nethermind): [EIP8375](https://forkcast.org/eips/8375/) ePBS mandatory burn of execution rewards (eMBER)  
    * Hubert Ritzdorf: [EIP8219](https://forkcast.org/eips/8219/) Checked arithmetic opcodes  
  * Native account abstraction: client team rough consensus for [EIP8141](https://forkcast.org/eips/8141/) Frame transaction, address L2 concerns in breakout prior to decision at next ACDE on making headliner 

#### All core devs \- testing (ACDT) [\#91](https://forkcast.org/calls/acdt/091/)

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * EIP8198 quick slots, preliminary analysis of [potentially impacted contracts](https://x.com/SourcifyEth/status/2086740760008012030), 20.6K of 7.7M on mainnet using Sourcify dataset  
* Ethereum improvement proposals (EIPs):  
  * [EIP8375](https://forkcast.org/eips/8375/): ePBS mandatory burn of execution rewards  
  * [EIP8379](https://github.com/ethereum/EIPs/pull/12154/changes): Top up sync

### Research

* Anders Elowsson (EF): [designs for gas accounting in EIP7999](https://ethresear.ch/t/designs-for-evm-gas-accounting-in-eip-7999/25696) (unified multidimensional fee market)

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 898k active (target 128k), 18k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.46.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.46.0) (recommended): smoother shutdowns & restarts, safer validator behavior and Glamsterdam & Hegotá upgrade work  
    * Consensys [Teku 26.8.0](https://github.com/Consensys/teku/releases/tag/26.8.0) (recommended): bug fixes & breaking changes, removed legacy & non-production web3j dependencies  
  * Execution layer:  
    * [Erigon v3.5.5](https://github.com/erigontech/erigon/releases/tag/v3.5.5) (recommended): fixes panic on Fusaka blinded block submission, payload timing under external consensus layer & logIndex regression for archive nodes  
    * Lambda [ethrex v24.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v24.0.0): deep reorg support groundwork, performance improvements, spec conformance & robustness fixes    
    * Paradigm [Reth v2.5.0](https://github.com/paradigmxyz/reth/releases/tag/v2.5.0) (medium): improved execution performance (5-10% lower mean block processing latency than v2.4.1)

### Layer 2

* Aztec [Alpha V5 proving system vulnerability](https://aztec.network/blog/alpha-v5-proving-system-vulnerability), identified through internal AI assisted security review  
* [base/nitro-validator](https://blog.base.dev/making-aws-nitro-validation-feasible-onchain) (library): redesign makes EVM Nitro Enclave attestations feasible onchain again post Fusaka upgrade using hinted P-384 signature verification

### General

* Trezor (hardware wallet) [customer data exposed](https://trezor.io/blog/news/recent-customer-data-exposed-in-shipping-provider-incident) in ShipMonk (shipping provider) data breach, \~12k (name, email, phone & shipping address) and \~2k (name, city & email)  
* Anthropic [Claude marks AI generated content](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) with watermarked text & signed provenance metadata (for supported file types), implementation of EU AI Act

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-35/](https://ethereal.news/ethereal-news-weekly-35/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-35.md](https://ethereal.news/ethereal-news-weekly-35.md)*  

---

