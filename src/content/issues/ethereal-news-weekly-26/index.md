---
title: 'Ethereal news weekly #26'
description: 'Justin Drake qday odds: 10% by 2030 & 50% by 2032, Aave rsETH post mortem, glamsterdam-devnet-5 launched'
date: 'June 5, 2026'
---

Justin Drake qday odds: 10% by 2030 & 50% by 2032, Aave rsETH post mortem, glamsterdam-devnet-5 launched

### Ecosystem

* Justin Drake [qday odds](https://x.com/drakefjustin/status/2061793725299224676): 10% by 2030 & 50% by 2032 (day when a quantum computer breaks first piece of cryptography in production)  
  * 2029 is good target for migration, selected by Google, Cloudflare & EF  
  * Google's Shor optimization (published only as ZK proof) rediscovered by André Schrottenloher  
  * [ECDSA.fail](https://www.ecdsa.fail/): circuit improvement leaderboard, measured by qubit count multiplied by Toffoli-gate count  
* Ethereum Foundation:  
  * EF app relations: [RFP for DeFi risk intelligence aggregator](https://esp.ethereum.foundation/applicants/rfp/defi_risk_intel_agg), June 15 deadline  
  * Aya Miyaguchi (EF President): [EF mandate & clearer mission](https://x.com/AyaMiyagotchi/status/2061476758122295757), management to share new structure & strategy in coming weeks  
* Tom Lee (Bitmine Chair): [Ethereum too big to be coordinated by single foundation](https://x.com/Etherealize_io/status/2061817535708725416), digital asset treasury companies can fund grants from \~$500M in staking rewards  
* Joseph Chalom (Sharplink CEO): [Ethereum going back on offense](https://x.com/joechalom/status/2060417168655732885), digital asset treasury companies & core stewards playing large role in filling gap in go-to-market leadership  
* Devcon 8 [volunteer applications](https://devcon.org/en/form/volunteer/)  
* [ETHCluj](https://www.youtube.com/playlist?list=PLJb8oeJ4LPI-wPE0VCGeSj_WNCJwheV6H) conference videos  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.4 average, 0.1 \-12.7 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum):$1,655 \- $2,038 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.027 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![MetaMask Builder Nights NYC](./metamask-builder-nights-nyc.png)

​MetaMask Builder Nights NYC \- Agentic Frontier

📅 Monday, June 8   
🕕 6:00 PM EDT   
🗽 New York, NY  
🎟️ FREE registration

[MetaMask Builder Nights NYC registration](https://luma.com/bnny).

---

### Enterprise

* [Mastercard](https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-expands-settlement-capabilities-to-include-stablecoin.html) will support stablecoin settlement with Circle USDC, Paxos PYUSD, USDG & USDP and SoFi SoFiUSD across 8 chains including mainnet, Arbitrum & Base  
* Checkout.com: enables merchants to [accept stablecoins](https://www.checkout.com/newsroom/checkout-com-enables-stablecoin-acceptance-for-merchants-in-partnership-with-coinbase) via Coinbase Payments & US merchants to [receive stablecoin settlement](https://www.checkout.com/newsroom/checkout-com-scales-stablecoin-settlement-for-us-merchants-in-partnership-with-fireblocks) via Fireblocks

### Applications

* DeFi United (effort to restore rsETH backing): [Aave post mortem](https://x.com/aave/status/2060901386611499378)  
* Zama [cUSDC freeze lifted](https://x.com/randhindi/status/2061528858336342176), US court reversed order that forced Circle to freeze entire pooled cUSDC contract over unaffiliated protocol civil dispute  
* [Symphony](https://www.symphony.io/blog/symphony-is-live-get-rewarded-for-saving-not-spending) (savings app) live, fixed 5% APY \+ points for flights, hotels, dining & experiences  
* [KPK ETH yield term vault](https://kpk.io/blog/kpk-eth-yield-term): fixed rate ETH lending on Euler over monthly cycles  
* Vitalik: proposal for [index-tracking assets on top of options](https://ethresear.ch/t/building-index-tracking-assets-on-top-of-options-instead-of-debt/25036) instead of debt, requires regular rebalancing  
* Augur [fork phase 2](https://x.com/AugurProject/status/2062602583634546902): test of dispute mechanism, REP holders must migrate by August 3  
* [Radiant Capital DAO](https://medium.com/@RadiantCapital/sunsetting-radiant-capital-dao-entering-recovery-phase-and-lessons-for-the-future-of-defi-c47837ffa499) winding down after exploits in 2024  
* [Poidh](https://words.poidh.xyz/poidh-ethereum-mainnet) (pics or it didn't happen) open bounties expand to mainnet

### Developers

* Vyper (language):  
  * [v0.5.0a2](https://github.com/vyperlang/vyper/releases/tag/v0.5.0a2) (alpha): adds unbounded types & doc on deep verification  
  * Banteg [vyupgrade](https://github.com/banteg/vyupgrade/#readme) (tool): rewrite 0.1.0b+ contracts in modern Vyper, compiles source & result and compares ABI, method identifiers & storage layout  
    * [Vyper syntax history](https://github.com/banteg/vyupgrade/blob/master/docs/vyper-syntax-history.md) from v0.1.0-beta prereleases to v0.5.0a2  
* Nomic Foundation Hardhat (dev framework):   
  * [Hardhat v3.8.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.8.0): warning for imported but not included plugins and cleaner Solidity error display  
  * [OpenZeppelin upgrades plugin](https://github.com/OpenZeppelin/openzeppelin-upgrades/releases/tag/%40openzeppelin%2Fhardhat-upgrades%404.0.0): supports Hardhat 3  
* EthereumJS [v10.1.2](https://x.com/EFJavaScript/status/2061404472161554922) (TypeScript libraries): experimental Glamsterdam upgrade support  
* Adrian Sutton [exec-rest-api](https://www.symphonious.net/2026/05/30/a-rest-api-for-ethereum-execution-clients/): REST API proxy for execution layer clients JSON-RPC  
* MetaMask [embedded wallets](https://metamask.io/news/embedded-wallets-developer-platform): adds developer dashboard, smart account support & access controls  
* EF Institutional Privacy Task Force (IPTF): resilience series, [plural identity](https://iptf.ethereum.org/blog/resilient-plural-identity/), [disbursement rails](https://iptf.ethereum.org/blog/resilient-disbursement-rails/) & [civic participation](https://iptf.ethereum.org/blog/resilient-civic-participation/)  
* Application layer standards (ERCs):  
  * [ERC8280](https://github.com/ethereum/ERCs/pull/1786/changes): Contract runtime apps  
  * [ERC8281](https://github.com/ethereum/ERCs/pull/1788/changes): Observation commitment protocol  
  * [ERC8283](https://github.com/ethereum/ERCs/pull/1789/changes): Clear signing descriptors onchain registry  
  * [ERC8284](https://github.com/ethereum/ERCs/pull/1790/changes): Wallet scoped token pull execution  
  * [ERC8285](https://github.com/ethereum/ERCs/pull/1792/changes): Wallet scoped NFT pull execution  
  * [ERC8286](https://github.com/ethereum/ERCs/pull/1794/changes): Modular accounts for frame transactions  
  * [ERC8287](https://github.com/ethereum/ERCs/pull/1796/changes): Privacy native fungible tokens

### Agents

* [Veil MCP](https://x.com/Veildotcash/status/2062085065690255400): agents can make private x402 payments via shielded USDC pool on Base

### Security

* [Zodiac modules vulnerability](https://x.com/zodiaceco/status/2061862711206502902): Roles Modifier v2 & Delay Modifier v1.1.0  
  * [Gnosis Pay](https://x.com/gnosispay/status/2061831214273564986) incident contained, users to receive a new card Safe linked to existing cards & identity  
* Artificial Financial Intelligence (AFI) [\~$480k afiUSD vault exploit](https://x.com/afiprotocol_xyz/status/2061395851986247795)  
* Fluid [\~$200k rewards distribution exploit](https://x.com/0xfluid/status/2061637830091157678) via remote code execution in offchain monitoring dashboard  
* [SEAL certifications](https://radar.securityalliance.org/seal-certifications-auditor-accreditations-protocol-assessments/): security reviewers assess projects over 6 domains (multisig ops, treasury ops, incident response, DNS & registrar, DevOps & infrastructure and identity & accounts)

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#238](https://forkcast.org/calls/acde/238)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [glamsterdam-devnet-5](https://glamsterdam-devnet-5.ethpandaops.io/) launched, glamsterdam-devnet-4 spec \+ [EIP8045](https://forkcast.org/eips/8045) exclude slashed validators from proposing  
  * [bal-devnet-7](https://bal-devnet-7.ethpandaops.io/) was last execution layer focused devnet  
  * glamsterdam-devnet-6 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-6)): targeting \~2 weeks with remaining execution layer EIPs ([EIP7997](https://forkcast.org/eips/7997) deterministic factory predeploy & [EIP8246](https://forkcast.org/eips/8246) remove SELFDESTRUCT burn) and preliminary repricing numbers  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * Non-headliners proposed for inclusion:  
    * Data repricing [presentation](https://nerolation.github.io/hegota-eip-presentations/eip-8131_eip-8279.html): [EIP8131](https://forkcast.org/eips/8131) add auth data to EIP7623 floor \+ [EIP8279](https://github.com/ethereum/EIPs/pull/11739/changes) block access list byte floor  
    * [EIP7979](https://forkcast.org/eips/7979) call & return opcodes  
    * EOA migration to smart accounts: [EIP7851](https://forkcast.org/eips/7851) code controlled EOA delegation \+ [EIP8151](https://forkcast.org/eips/8151) ECDSA authority deactivation aware ecRecover; discussed set code as broader alternative  
* [EIP8222](https://github.com/ethereum/EIPs/pull/11500/changes) lean staking [presentation](https://docs.google.com/presentation/d/1RwAwNkC21oGBYy_VHFahiHT4kvjxx67uOL2arWTwuiY/edit), staking deposits & withdrawals via privacy pool

#### All core devs \- testing (ACDT) [\#81](https://forkcast.org/calls/acdt/081)

### Layer 1

* Consensus-specs [v1.7.0-alpha.10](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.10)   
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * FOCIL breakout [\#35](https://x.com/jih2nn/status/2062197921018528220): preparing devnet-0 based on stable Glamsterdam devnet  
* ethPandaOps [Panda](https://ethpandaops.io/posts/panda/) (CLI, MCP & Python sandbox): single interface for data stack (ClickHouse, Prometheus, Loki, Dora and beacon & execution nodes)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8282](https://github.com/ethereum/EIPs/pull/11760/changes): Builder execution requests

### Research

* [Post-quantum public key registry for validators](https://ethresear.ch/t/exploring-the-design-space-for-a-post-quantum-public-key-registry-for-ethereum-validators/25040): phased approach for migrating from BLS, first upgrade enables validators to register PQ keys, with signature switch several upgrades later

### Staking

* [Eth-validator-stats](https://github.com/Workharu/eth-validator-stats#readme) (CLI): self hosted validator monitoring, talks to local beacon node (no third-party telemetry), phone push notifications via ntfy  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~54% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 22% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 890k active (target 128k), 14k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Besu 26.6.0](https://github.com/besu-eth/besu/releases/tag/26.6.0) (recommended): requires Java 25+, block number & hash parameters in RPCs changed to hex only for compatibility  
    * [Erigon v3.4.3](https://github.com/erigontech/erigon/releases/tag/v3.4.3) (recommended): fix post-reorg state leak & improves Engine API performance by failing fast on backward downloads beyond reorg limit  
    * Lambda [ethrex v15.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v15.0.0): adds Kademlia implementation, improves network scalability & resilience against peer churn  
    * [Nethermind 1.38.0](https://github.com/NethermindEth/nethermind/releases/tag/1.38.0): Glamsterdam upgrade work, performance improvements, EraE support for historical data pruning & backfill from archive and P2P rewritten

### Regulation

* US CFTC [rescinds no-deny policy](https://www.cftc.gov/PressRoom/PressReleases/9247-26) which prevented denials of allegations in order to settle  
* [Defend Developers PAC](https://defenddeveloperspac.org/blog-ddpac-launch): hybrid PAC supporting incumbent US Congress members championing developer protections & crypto builders  
  * [Free Roman Storm](https://freeromanstorm.com/) campaign

### General

* Alephium (alt L1) [bridge exploit](https://alephium.org/news/post/the-alephium-bridge-exploit-on-chain-report/) via forged Wormhole message, \~$305k in collateral stolen \+ 500k unbacked wALPH realized  
* Dankrad Feist: [passkey explainer](https://dankradfeist.de/blockchain/2026/05/31/passkeys-hardware-wallets.html), treat passkeys on phones or password managers as hot wallets

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-26/](https://ethereal.news/ethereal-news-weekly-26/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-26.md](https://ethereal.news/ethereal-news-weekly-26.md)*  

---



