---
title: 'Ethereal news mini #1'
description: 'Vitalik: updated Strawmap explainer, Ethlabs & Ethereum Institutional hiring, Devcon 8 speaker applications open'
date: 'July 10, 2026'
---

*Vitalik: updated Strawmap explainer, Ethlabs & Ethereum Institutional hiring, Devcon 8 speaker applications open*

### Ecosystem

* Vitalik: [updated Strawmap explainer](https://x.com/VitalikButerin/status/2073459000398463446)  
  * Lean Ethereum is collection of improvements replacing almost every piece of the protocol over 3-4 years, Hegotá likely last pre-Lean upgrade  
  * Includes privacy as first class goal, formal verification for security, quantum safety, medium scaling of current dynamic state, large scaling of new types of state, gas limit increases, blob increases & slot time decreases  
* EF Protocol Support team [dissolved](https://x.com/TMIYChao/status/2074907379930440014)  
* Hiring: [Ethlabs](https://x.com/barnabemonnot/status/2073691519492489354) (R\&D lab) \~10 near term, \~20 medium term & [Ethereum Institutional](https://www.ethereuminstitutional.org/careers/) (accelerate institutional adoption)  
* Devcon 8 [speaker applications open](https://devcon.org/en/speaker-applications/), August 6 deadline  
* ETHConf [videos](https://ethconf.com/talks)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 1.1 (13 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19.8k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,714 \- $1,827 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.028 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Applications

* Aave [stable vaults](https://aave.com/blog/introducing-stable-vaults): embed fixed rate stablecoin yield into a product, converts variable lending rates to fixed, integrate any ERC4626 strategy, powers Aave mobile savings app  
* [Rysk v12](https://x.com/ryskfinance/status/2074849876462932337) (covered calls & cash secured puts) expands to mainnet  
* [Ammalgam](https://x.com/ammalgam/status/2074613065824514103) (oracleless lending) live on mainnet  
* [Zapper](https://x.com/sebaudet26/status/2074918469376856150) shutting down August 3  
* Privacy pools v2 [trusted setup ceremony](https://x.com/0xprivacypools/status/2074928232533483720), contribute entropy, sign in with GitHub  
* [ETH.sh privacy](https://privacy.eth.sh/) (dashboard): tracks privacy protocol fees, wait times & supported chains  
* Name services:  
  * Wei [DAO](https://x.com/z0r0zzz/status/2073930719517417690): owned by name holders, onchain voting, weighted by ETH cost  
  * Gwei [zkpassport subdomains](https://x.com/donnoh_eth/status/2074096961691480506): free name per passport, gated by ZKPassport  
* Paragraph (publishing) [AI agent](https://paragraph.com/@blog/the-new-paragraph): helps with editing, social & SEO

### Developers

* Argot Collective [Solidity 0.8.36](https://www.soliditylang.org/blog/2026/07/09/solidity-0.8.36-release-announcement/) (language): Amsterdam EVM version support, fixes for medium severity bugs ([unsound spill in mutual recursion](https://www.soliditylang.org/blog/2026/07/09/unsound-spill-in-mutual-recursion-bug/) & [inheritance order reversal on storage end warning](https://www.soliditylang.org/blog/2026/07/09/inheritance-order-reversal-on-storage-end-warning-bug/)), experimental SSA CFG stack to memory spilling (mitigate stack too deep) & experimental EOF backend removed  
* Paradigm [Solar v0.2.0](https://github.com/paradigmxyz/solar/releases/tag/v0.2.0) (Solidity compiler): adds unstable implementations of type checking, LSP & codegen  
* Christoph Burgdorf [deposit contract rewritten in Fe](https://x.com/cburgdorf/status/2074187044545286311), lower bytecode size, deployment cost & call gas than optimized Solidity  
* [Ethereum-names](https://github.com/1001-digital/ethereum-names#readme) (library): resolve ENS, .wei (WNS) & .gwei (GNS)  
* Joseph Delong [Bash version of EVM](https://github.com/dangerousfood/bash-evm)  
* Application layer standards (ERCs):  
  * [ERC8322](https://github.com/ethereum/ERCs/pull/1850/changes): Notary backed confidential token  
  * [ERC8323](https://github.com/ethereum/ERCs/pull/1851/changes): Source token agent binding for ERC8004  
  * [ERC8324](https://github.com/ethereum/ERCs/pull/1852/changes): Priority update registry  
  * [ERC8325](https://github.com/ethereum/ERCs/pull/1853/changes): Asset anchor registry  
  * [ERC8326](https://github.com/ethereum/ERCs/pull/1854/changes): Canonical document bundle anchor  
  * [ERC8327](https://github.com/ethereum/ERCs/pull/1855/changes): Directional transfer domain registry  
  * [ERC8328](https://github.com/ethereum/ERCs/pull/1856/changes): Subject linked compliance event log  
  * [ERC8329](https://github.com/ethereum/ERCs/pull/1857/changes): Subject linked impact snapshot log  
  * [ERC8330](https://github.com/ethereum/ERCs/pull/1858/changes): Subject linked NAV snapshot oracle  
  * [ERC8331](https://github.com/ethereum/ERCs/pull/1861/changes): Role grouped operation restriction policy  
  * [ERC8332](https://github.com/ethereum/ERCs/pull/1864/changes): Physical reserve registry  
  * [ERC8335](https://github.com/ethereum/ERCs/pull/1869/changes): Account level transfer with authorization

### Agents

* [ETH.sh skills](https://skills.eth.sh/): directory of skills, MCP servers, CLIs, wallets, models, plugins & APIs

### Security

* Lazy Summer [\~$6M exploit](https://blog.summer.fi/lazy-summer-usdc-vault-exploit-post-mortem-what-happened-and-what-comes-next/) of two USDC vaults via NAV manipulation  
* Hinkal [\~$800k exploit](https://x.com/hinkal_protocol/status/2073136163880149417)  
* Gnosis Pay [post mortem of June 1 exploit](https://www.gnosis.io/blog/post-mortem-gnosis-pay-vulnerability-exploit) via Zodiac modules vulnerability  
* Austin Griffith [one dollar security review](https://www.onedollaraudit.com/), AI first pass (not a replacement for external security reviews), reports on vulnerabilities, logic errors, access control & gas notes

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#182](https://forkcast.org/calls/acdc/182/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * glamsterdam-devnet-7 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-7)): targeting early next week  
  * Public Glamsterdam devnet: targeting early August  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Deadline for proposing non-headliner EIPs is August 6

#### All core devs \- testing (ACDT) [\#86](https://forkcast.org/calls/acdt/086/)

### Layer 1

* EF Protocol Security team [running AI agents on protocol code](https://blog.ethereum.org/2026/07/09/triage-is-the-product), triage is the hard part, found remotely triggerable panic in libp2p gossipsub (CVE-2026-34219)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8321](https://github.com/ethereum/EIPs/pull/11861/changes): Hash chain RANDAO  
  * [EIP8333](https://github.com/ethereum/EIPs/pull/11871/changes): Align checkpoint with epoch boundary block  
  * [EIP8334](https://github.com/ethereum/EIPs/pull/11905/changes): Bundled attestation propagation

### Staking

* Lodestar [Fast Confirmation Rule implementation](https://blog.chainsafe.io/fast-confirmation-in-lodestar/), experimental & performance intensive  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~52% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 880k active (target 128k), 16k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * Lambda [ethrex v20.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v20.0.0): performance improvements via block data persistence deferral, improvements to transaction pool admission process & Glamsterdam upgrade block level access lists optimizations  
    * [Nethermind 1.39.0](https://github.com/NethermindEth/nethermind/releases/tag/1.39.0): node robustness, Flat DB durability, eth/71 wire protocol, reworked discovery stack, JSON RPC improvements, Glamsterdam upgrade block level access lists improvements & broad round of performance work

### Research

* Vitalik: [minimize state requirements in Lean consensus](https://ethresear.ch/t/the-extremely-lean-chain/25369), move responsibility to stakers to manage & occasionally ZK prove their state, removes end of epoch processing and may allow scaling to millions of validators  
* Toni Wahrstätter: [native UTXOs](https://ethresear.ch/t/native-utxos-on-ethereum/25368), one shot payments with minimal state, could reduce permanent state usage for payments by \~99.8%

### Layer 2

* Base [Beryl upgrade](https://x.com/base/status/2074978236820521370) live, adds [B20 native tokens](https://x.com/buildonbase/status/2074978436553298168)  
* L2Beat: [Ronin now Stage 0 Optimium](https://x.com/l2beat/status/2075196193760510105)  
* Lighter [latency improvements](https://x.com/Lighter_xyz/status/2074905536122789917), 55ms end to end p99, under 1ms transaction processing p99 & 100-250µs hot path apply time

### Regulation

* Paradigm [amicus brief in Lewellen v Blanche appeal](https://www.paradigm.xyz/writing/paradigm-backs-michael-lewellen-on-appeal-to-the-fifth-circuit) on use of money transmission laws against non custodial software developers

### General

* Vitalik: [challenge to find document completed](https://farcaster.xyz/vitalik.eth/0xd844d651), identified by style of math & algorithm explanation, EIP7503 update written in Chinese then translated to English by local LLM  
* [npm v12](https://github.blog/changelog/2026-07-08-npm-install-time-security-and-gat-bypass2fa-deprecation/): install defaults changed to improve supply chain security, allow scripts defaults to off and allow git & allow remote both default to none

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-mini-1/](https://ethereal.news/ethereal-news-mini-1/)*  
*Markdown: [ethereal.news/ethereal-news-mini-1.md](https://ethereal.news/ethereal-news-mini-1.md)*  

---