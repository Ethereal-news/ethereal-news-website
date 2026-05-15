---
title: 'Ethereal news weekly #23'
description: 'Clear signing, CLARITY Act advanced out of Senate Banking committee, Ben Edgington fast finality plan'
date: 'May 15, 2026'
---

Clear signing, CLARITY Act advanced out of Senate Banking committee, Ben Edgington fast finality plan

### Ecosystem

* [Clear signing](https://clearsigning.org/), display human readable descriptions of what a transaction will do:  
  * [Working group](https://blog.ethereum.org/2026/05/12/clear-signing-announcement) of wallet devs, security firms & EF trillion dollar security initiative  
  * Ongoing work: [registry](https://github.com/ethereum/clear-signing-erc7730-registry#readme) of [ERC7730](https://eips.ethereum.org/EIPS/eip-7730) descriptors, [ERC8176](https://github.com/ethereum/ERCs/pull/1576/changes) attestation framework for security reviewers to verify descriptors & developer tooling  
  * Sourcify: [clear signing playground](https://clear-signing.sourcify.dev/)  
  * Guide to [add clear signing for a protocol](https://ethereum.org/developers/tutorials/clear-signing)  
  * Cyfrin [ERC8213](https://erc8213.eth.limo/): single 32-byte hash of calldata for protocols not yet in clear signing registry and air gapped hardware wallets  
* Ethereum Foundation:  
  * [Protocol cluster](https://blog.ethereum.org/en/2026/05/11/protocol-update-may-26) new leads: Will Corcoran, Kev Wedderburn & Fredrik  
    * Former leads: [Barnabé](https://x.com/barnabemonnot/status/2053914533211558331) leaving EF & Alex Stokes on sabbatical  
* [Devcon 8 tickets](https://x.com/EFDevcon/status/2054202225560273305): student ticket applications open now, $349 early bird (ETH payment only) from May 20 & community discounts open in June   
* ETHPrague:  
  * Conference [videos](https://www.youtube.com/playlist?list=PLkCRcxMT8qhYK3Lk_VCNnFkO-GJGxDkRJ)  
  * Hackathon [winners](https://ethprague2026.devfolio.co/projects?prizes=d020a7b9596d449d8808ecb0368109a7&prizes=83fdee2a433f485aae72305f78eb6fd0&prizes=4f60db55a4c840b6bc7bd7899a8359a8&prizes=602444fedb9f4166976c29080002c467&prizes=e027ad87b12f46809c956a68aa962fb6&prizes=bdefc407869c43dc9b7dbe46464fcf84&show_winners=false) from [64 projects](https://ethprague2026.devfolio.co/projects)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.5 average, 0.1 \- 11.7 (12.8 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,238 \- $2,374 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.028 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* JPMorgan launched second [tokenized money market fund](https://am.jpmorgan.com/us/en/asset-management/institutional/about-us/media/press-releases/jp-morgan-asset-management-launches-second-tokenized-fund-on-ethereum/) (JLTXX) live on [mainnet](https://etherscan.io/address/0x09864f52B035AE22eE739dFa5c748fA080D07bD8)  
* BlackRock filed for two tokenized funds: [BlackRock select Treasury based liquidity fund](https://www.sec.gov/Archives/edgar/data/97098/000119312526214958/d45978d485apos.htm) (mainnet) & [BlackRock daily reinvestment stablecoin reserve](https://www.sec.gov/Archives/edgar/data/844779/000119312526214946/d283147d485apos.htm) (multichain)  
* Enterprise Ethereum Alliance:   
  * EEA privacy working group: [state of privacy for enterprise](https://entethalliance.github.io/wg-privacy/privacy-report.html)  
  * [EEA staking portion of treasury](https://entethalliance.org/eea-treasury-deployment-ethereum-native-staking-infrastructure/) via Lido  
* Cyfrin Updraft [Ethereum enterprise](https://updraft.cyfrin.io/courses/ethereum-enterprise) course, 38 lessons, 4 hours, beginner friendly

### Applications

* DeFi United (effort to restore rsETH backing):   
  * [Kelp](https://x.com/KelpDAO/status/2054977337264144768) rsETH withdrawals live & [Aave](https://x.com/aave/status/2054989148159873499) rsETH unpaused enabling withdrawals  
  * [Restraining notice modified](https://x.com/aave/status/2053929783944192327) to permit transfer of frozen ETH to Aave LLC  
  * [LayerZero](https://x.com/LayerZero_Core/status/2052876712653013173): apology, recommendations, trust & liveness assumptions and past instance of multi sig signer used for personal trade  
* Fileverse [ddocs](https://x.com/fileverse/status/2052767141611327505): adds suggestion mode  
* [Gitcoin](https://gitcoin.co/case-studies/from-one-off-rounds-to-ongoing-impact-gitcoin-s-new-sustainable-funding-model) deploying $1M into Octant v2 vault, matched by Octant, yield to be used to fund campaign  
* Privacy Stewards of Ethereum (PSE): [private transfers user research](https://pse.dev/blog/private-transfers-engineering-user-research)

### Developers

* Vyper (language):  
  * [v0.5.0a1](https://github.com/vyperlang/vyper/releases/tag/v0.5.0a1) (alpha): adds abstract methods  
  * [Vyper-HOL](https://github.com/verifereum/vyper-hol#readme): machine-checked formal semantics for Vyper in HOL4  
* Plank [v0.1.1](https://github.com/plankevm/plank-monorepo/releases/tag/v0.1.1) (language): adds ecrecover, sha256, ripemd160 & modexp precompiles, addr & bytes32 types and experimental optional Sonatina backend (used by Fe)  
* [Tamago](https://github.com/Bacon-labs/tamago#readme) (Verity contract library): formally verified sqrt, cbrt, log10 & log256 and ERC4626 vault  
* Ape [v0.8.50](https://github.com/ApeWorX/ape/releases/tag/v0.8.50) (dev framework): adds improved cache control for contract types, Aragon proxy detection & Ape to Brownie guide  
* Leo Alt: [provably safe optimizations](https://leonardoalt.github.io/provably-safe-optimizations), Claude optimized assembly proved in Lean  
* Application layer standards (ERCs):  
  * [ERC8260](https://github.com/ethereum/ERCs/pull/1735/changes): Dive log 

### Agents

* x402 [batch settlement](https://www.x402.org/writing/x402-batch-settlement): escrow funds, pay with vouchers & settle onchain in bulk  
* [Circle agent stack](https://www.circle.com/blog/introducing-circle-agent-stack-financial-infrastructure-for-the-agentic-economy): wallets, marketplace, CLI, nanopayments & skills

### Security

* [Punk 5032 stolen](https://x.com/0xQuit/status/2054361635486318627) via open approval  
* Josselin Feist: [security is a leadership problem](https://seceureka.com/blog/leadership)  
* [Code4rena](https://x.com/code4rena/status/2054492081876324458) winding down

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#178](https://forkcast.org/calls/acdc/178)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-7 ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-7)) & glamsterdam-devnet-4 targeting next week  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * Non-headliners proposed for inclusion:  
    * Attestation propagation redesign  
    * [EIP8025](https://forkcast.org/eips/8025) optional execution proofs; [presentation](https://frisitano.github.io/slides/presentations/eip8025-acdc-proposal-2026-05-14/index.html); enshrine in future upgrade

#### All Core Devs \- Testing (ACDT) [\#79](https://forkcast.org/calls/acdt/079)

### Layer 1

* Ben Edgington: [upgrading finality \#1](https://consensus.ethereum.foundation/blog/upgrading-finality-edition-1)  
  * Challenge: reduce time to finality from \~1000s to \~10s (100x speedup)  
  * Fast finality plan: decouple finality from slot by slot fork choice (potentially as headliner for upgrade after Hegotá), then incrementally speedup, ideally without excluding home stakers & staking from remote locations  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * Glamsterdam repricings [\#7](https://forkcast.org/calls/price/007)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8261](https://github.com/ethereum/EIPs/pull/11644/changes): Gas limit schedule

### Research

* [Adversarial procurement in blockchains](https://arxiv.org/abs/2605.05559), optimal mechanism is single random node as primary worker, with a committee as a fallback

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~54% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.7% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 899k active (target 128k), 13k accumulating (0x02 withdrawal credentials)  
  * Lido [consolidating curated validators on Hoodi testnet](https://x.com/d_gusakov/status/2054956970575118462), targeting mainnet in August, consolidating \~240k 0x01 validators to \~4k 0x02 validators  
* Client releases:  
  * Consensus layer:  
    * Status [Nimbus v26.5.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.5.0) (medium): improves performance & execution client compatibility  
  * Execution layer:  
    * LF Decentralized Trust [Besu 26.5.0](https://github.com/besu-eth/besu/releases/tag/26.5.0): Glamsterdam upgrade prep, log4j CVEs patched & Bonsai archive users will need full resync  
    * [Erigon v3.4.1](https://github.com/erigontech/erigon/releases/tag/v3.4.1): segfault fix  
    * Ethereum Foundation [Geth v1.17.3](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.3) (maintenance): eth/70 (partial block receipt lists) live, Glamsterdam upgrade prep & debug\_trace structLog (opcode) tracer follows client-wide spec  
    * Lambda [ethrex v12.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v12.0.0) (recommended): faster snap-sync ingest & adds debug\_trace prestateTracer

### Layer 2

* [Ronin](https://blog.roninchain.com/p/ronin-is-home) (game focused chain) migrated to a Layer 2 (OP Stack)  
* Optimism [stake based transaction ordering experiment](https://x.com/Optimism/status/2052809949093449960) on Sepolia testnet phase 2: adds stake-weighted multiplier

### Regulation

* US crypto market structure legislation (CLARITY Act): [advanced out of Senate Banking committee](https://www.banking.senate.gov/newsroom/majority/chairman-scott-senate-banking-committee-advance-clarity-act-in-historic-bipartisan-vote) by 15-9 vote  
* US DOJ: [three indicted on robbery, kidnapping & conspiracy charges](https://www.justice.gov/usao-ndca/pr/three-tennessee-men-indicted-robbery-kidnapping-and-conspiracy-charges-related-6) related to $6M crypto robberies in Bay Area & LA

### General

* pcaversaccio: [zipped repo attack](https://x.com/pcaversaccio/status/2054150512635953505), once unzipped, git checkout/commit executes malicious hooks  
* [TanStack](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem) npm supply chain attack via pull\_request\_target \+ GitHub Actions cache poisoning \+ OIDC token extraction  
* Claude [recovered encrypted wallet](https://x.com/cprkrn/status/2054586810475364536) using previous backup \+ password on old computer, after attempting brute force & password searches on multiple devices

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-23/](https://ethereal.news/ethereal-news-weekly-23/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-23.md](https://ethereal.news/ethereal-news-weekly-23.md)*  

---
