---
title: 'Ethereal news weekly #47'
description: 'Post quantum & post AI urgency at DEFCON 2-3, Ethlabs proposed pqai27 & withdrew quick slots from Hegotá upgrade, Glamsterdam gas repricing findings due November 16'
date: 'November 13, 2026'
---

*Post quantum & post AI urgency at DEFCON 2-3, Ethlabs proposed pqai27 & withdrew quick slots from Hegotá upgrade, Glamsterdam gas repricing findings due November 16*

### Ecosystem

* Post quantum & post AI:  
  * Potuz (Prysm): [commit to post quantum as priority](https://www.potuz.net/posts/pq/)  
  * Ethlabs [pqai27](https://ethlabs.org/writings/pqai27.html): proposal for post quantum & post AI Ethereum in 2027  
    * Ship execution layer upgrade (Bogotá) as soon as ready, with Frame transactions, post quantum signature scheme & account EIPs  
    * Ship consensus layer upgrade (Heze) separately with post quantum consensus (Gasper or decoupled consensus), potentially without FOCIL  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * Marius van der Wijden (EF) [EIP8037/EIP8038 update](https://blog.ethereum.org/2026/11/06/glamsterdam-8037-8038):  
    * Dedaub, ChainSecurity & EF present findings with Q\&A at [ACDT \#103](https://github.com/ethereum/pm/issues/2299) November 16, app developers encouraged to join  
    * Findings discussion & possible next steps (spec changes or Hoodi testnet scheduling) at [ACDE \#249](https://forkcast.org/calls/acde/249/) November 19  
* Vitalik: [ETH as store of value](https://x.com/VitalikButerin/status/2119401255919604064) (SoV) better to focus on than ETH as fee burning token due to decentralization & CROPS and fee burning never as strong as it seemed  
* ETHGlobal:  
  * ETHGlobal Mumbai [hackathon finalists](https://x.com/ETHGlobal/status/2119051995428577790) from [622 projects](https://ethglobal.com/showcase?events=mumbai)  
  * IRL 2027 hackathons: [Cannes](https://ethglobal.com/events/cannes2027) (April 14-16), [New York](https://ethglobal.com/events/newyork2027) (June 14-16), [Tokyo](https://ethglobal.com/events/tokyo2027) (August 23-25) & [Lisbon](https://ethglobal.com/events/lisbon2027) (October 13-15)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0 \- 4.5 (13.7 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122.2M, 21k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): \$1,905 \- \$2,249 (all time high \$4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.028 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.com)

![Pay for APIs with x402 using MetaMask Agent Wallet](./x402_agent_wallet.avif) 

**How to pay for APIs with x402 using MetaMask Agent Wallet: 8 tips**

Your agent can pay for paywalled APIs, data, and MCP tools in USDC over x402. Here's how MetaMask Agent Wallet inspects, approves, and signs each.

[Pay for APIs with x402 using MetaMask Agent Wallet](https://metamask.com/news/x402-payments-metamask-agent-wallet)

---

### Enterprise

* Deutsche Bank [digital asset custody](https://digitalassets.db.com/) live for European corporate & institutional clients, includes ETH & selected stablecoins (USDC, EURC & EURAU)  
* PNC [incoming USDC payments](https://pnc.mediaroom.com/2026-11-09-PNC-Bank-Launches-Incoming-Stablecoin-Payments-for-Corporate-and-Institutional-Banking-Clients) pilot for eligible corporate & institutional clients, auto converted into USD, powered by Coinbase Payment products

### Applications

* Aave: [LlamaRisk proposal](https://governance.aave.com/t/arfc-repositioning-aave-v3-core-around-established-liquid-collateral/26191) to focus Aave V3 Core on liquid, blue chip collateral  
* Phylax [circuit breakers](https://phylax.systems/blog/phylax-and-titan-bring-circuit-breakers-to-ethereum/) on mainnet, applications define rules (outcomes they don’t want) & Titan Builder won’t include transactions that violate rules in blocks they build  
* [RollingChat](https://aztec.network/blog/rolling-chat-private-messaging-board): private messaging board on Aztec Network

### Developers

* Argot Collective Fe (language):  
  * [Fe 26.6.0](https://blog.fe-lang.org/posts/release-26-6/): adds I/O as effects for native programs, destructors, HashMap, improved text processing, packed contract fields (breaking storage layout change), Solidity panic codes & experimental WebAssembly backend  
  * Reminder: [Fe builders challenge](https://fe-lang.org/contest/), \$5k in prizes, register by November 17  
* Nomic Foundation [Hardhat v3.22.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.22.0) (dev framework): expands & improves experimental Glamsterdam upgrade support (adds [EIP8038](https://hardhat.org/docs/reference/amsterdam-support#eip-8038-state-access-gas-cost-update) state access repricing)  
* Application layer standards (ERCs):  
  * [ERC8489](https://github.com/ethereum/ERCs/pull/2152/changes): Agent information flow paradigm  
  * [ERC8490](https://github.com/ethereum/ERCs/pull/2155/changes): Agent meditation mechanism  
  * [ERC8492](https://github.com/ethereum/ERCs/pull/2157/changes): Settlement deductions for task escrows  
  * [ERC8493](https://github.com/ethereum/ERCs/pull/2158/changes): Onchain URI scheme  
  * [ERC8494](https://github.com/ethereum/ERCs/pull/2159/changes): Institution managed user payment ledger  
  * [ERC8495](https://github.com/ethereum/ERCs/pull/2163/changes): Token metadata JSON schema  
  * [ERC8498](https://github.com/ethereum/ERCs/pull/2171/changes): Namespaced state transitions for soulbound tokens  
  * [ERC8499](https://github.com/ethereum/ERCs/pull/2172/changes): Hash based key derivation from BIP-39

### Security

* Reminder: TheDAO Security Fund ETHSecurity [initiatives round](https://initiatives.thedao.fund), \$915k+ pledged so far, [initiatives need 25% of budget raised & \$200k or less funding gap to qualify](https://paragraph.com/@thedao.fund/400-eth-for-ethereum-security-how-initiatives-get-funded-by-thedao) for share of up to 400 ETH (all or nothing) allocation voted by badge holders starting mid November

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#191](https://forkcast.org/calls/acdc/191/)

* Post quantum & post AI:  
  * [Recap of Mumbai L1 R\&D workshops & working sessions](https://github.com/ethereum/pm/issues/2291#issuecomment-6852481705): what could aggressive roadmap look like, Q day estimate now 2029 down from 2032 just 12 months ago  
  * [DEFCON](https://docs.google.com/presentation/d/1ACw10HrWT9FF-FZk1PhJgbzIorv3DbL6jpWKiynxbe0/edit): urgency between 2 & 3  
  * Justin Drake (EF): investigating if cryptographic breaks already found & withheld  
  * FOCIL: potentially postpone depending on post quantum impact & Frame transactions interaction  
  * Decoupled consensus: can only be post quantum, BLS decoupled consensus is dead  
  * LeanVM: targeting production readiness in January for security reviews in February  
  * Post quantum TLS: \~80% of consensus layer network already using it  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * 1 EIP [Proposed for Inclusion](https://forkcast.org/upgrade/hegota/#proposed-for-inclusion) (PFI) out of band:  
    * [EIP8483](https://forkcast.org/eips/8483/) post quantum material registration, can start accepting registrations prior to upgrade  
  * 1 EIP [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * [EIP8198](https://forkcast.org/eips/8198/) quick slots, withdrawn by Ethlabs due to post quantum focus  
* I\* upgrade:  
  * Naming: signal preferences for [I\* name](https://ethereum-magicians.org/t/i-star-name-for-consensus-layer-upgrade-after-heze/26717)  
* Ben Edgington first call as ACDC facilitator

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * Verity Labs: [EIP8282 builder deposit & exit contracts bytecode formally verified](https://veritylabs.dev/our-work/eip-8282)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8487](https://forkcast.org/eips/8487/): Separate execution credits & billing credits  
  * [EIP8488](https://forkcast.org/eips/8488/): Versioned opcodes for gas repricing  
  * [EIP8491](https://forkcast.org/eips/8491/): LUCID key publisher priority lists  
  * [EIP8496](https://github.com/ethereum/EIPs/pull/12658/changes): Code reads in block level access lists  
  * [EIP8497](https://github.com/ethereum/EIPs/pull/12663/changes): FOCIL omission witnesses for Frame transactions

### Staking

* Ethereum Validators Association (EVA) issuance change debate: [Jérôme de Tychey for](https://x.com/ethvaorg/status/2120232421559767191) & [Pol Lanski against](https://x.com/ethvaorg/status/2120198681425252439)  
* [Client diversity](https://lab.ethpandaops.io/ethereum/clients?t=7d) (proposed blocks over 7 days based on graffiti):  
  * Consensus layer: Prysm 37%, Lighthouse 36%  
  * Execution layer: Geth 60%  
* [Validators](https://pectrified.com/mainnet): 804k active (target 128k), 25k accumulating (44% of active ETH)  
* Client releases:  
  * Consensus layer:  
    * Sigma Prime [Lighthouse v8.3.3](https://github.com/sigp/lighthouse/releases/tag/v8.3.3) (high priority): security fixes; [bug reports behind the scenes](https://sigmaprime.io/blog/bug-reports/)  
  * Execution layer:  
    * Paradigm [Reth v2.11.0](https://github.com/paradigmxyz/reth/releases/tag/v2.11.0) (high priority): unbounded RPC calls can be capped or cancelled, parallelized EIP7702 authorization recovery, P2P skips decoding unrequested responses, cheaper overlay provider setup & correctness fixes

### Regulation

* US Department of Justice: [coordinated actions against North Korean crypto theft schemes](https://www.justice.gov/opa/pr/justice-department-announces-actions-disrupt-north-koreas-massive-theft-cryptocurrency), includes seizure of [FaceStealer](https://www.fbi.gov/investigate/cyber/facestealer-cryptocurrency-theft-scheme) infrastructure & court authorization to seize/restrain \$1.2B+ stolen from Binance  
* US FinCEN: [prohibits transmitting funds involving MEXC Global](https://www.federalregister.gov/documents/2026/11/10/2026-22962/imposition-of-special-measure-prohibiting-the-transmittal-of-funds-involving-mexc-global) (CEX), effective December 10

### General

* Gnosis Pay [data breach](https://gnosispay.com/blog/data-breach-legacy-system-gnosis-pay-branded-cards) of legacy system powering Gnosis Pay branded cards  
* Across [domain compromise](https://x.com/AcrossProtocol/status/2120324818385912082) via Namecheap (domain registrar)  
* [Ledger](https://x.com/Ledger/status/2120804817840849327): signing SDK sends transaction details to Ledger servers for Clear Signing lookup, transaction data isn’t stored  
* Trezor (hardware wallet) [CryptoBilis investigation](https://x.com/Trezor/status/2120880182173073421), 3 Trezor Safe 5s bought between August 20 & September 23 found with implant, no customer funds reported lost, firmware update stops implant from capturing data, reseller network cut by \~80%

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-47/](https://ethereal.news/ethereal-news-weekly-47/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-47.md](https://ethereal.news/ethereal-news-weekly-47.md)*

---

