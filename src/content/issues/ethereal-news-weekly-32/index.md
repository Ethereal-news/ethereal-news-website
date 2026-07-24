---
title: 'Ethereal news weekly #32'
description: 'Glamsterdam upgrade targeting first testnet in September, Uniswap v4 Permissioned Pools, Aztec Alpha V5 live'
date: 'July 24, 2026'
---

*Glamsterdam upgrade targeting first testnet in September, Uniswap v4 Permissioned Pools, Aztec Alpha V5 live*

### Ecosystem

* Reminder: [Devcon 8 speaker application](https://mum.speakat.xyz/devcon8/cfp) deadline August 6   
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 1.0 (13.1 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 13k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,804 \- $1,954 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Applications

* Uniswap v4 [Permissioned Pools](https://blog.uniswap.org/introducing-permissioned-pools-on-uniswap-v4): allowlist checked by v4 hooks on swaps & LP mints  
* Morpho [Midnight](https://morpho.org/blog/now-live-morpho-midnight): fixed rate & term credit markets, live on Base with cbBTC/USDC  
* Aave [governance process v2](https://governance.aave.com/t/arfc-governance-framework-v2/25348) proposal: streamlined to 13 days, starts with business case & removes temp check  
* ENS DAO [new security council](https://ens.domains/blog/post/introducing-the-newest-ens-security-council): 5/8, limited veto power & 2 year term  
* [Odos](https://x.com/odosprotocol/status/2080337624922018014) (DEX aggregator) read only from July 27, shutting down July 30, wallets created via social/email login should transfer assets or export key  
* Agora [holders.vote](https://www.agora.xyz/blogs/20-holders-vote): Reddit style communities, voting power per community based on coin balance or token holding  
* TokenWorks [Fake World Assets](https://www.fwa.fun/docs/overview) (NFTs): random purchase (weighted toward lightly backed items), choose NFT or most of ETH backing, depositors earn share of fees

### Developers

* Nomic Foundation [Hardhat v3.11.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.11.0) (dev framework): adds experimental Glamsterdam upgrade support for [EIP7928](https://hardhat.org/docs/reference/amsterdam-support#eip-7928-block-level-access-lists) block level access lists & [EIP7778](https://hardhat.org/docs/reference/amsterdam-support#eip-7778-block-gas-accounting-without-refunds) block gas accounting without refunds  
* OpenZeppelin [Community Contracts](https://www.openzeppelin.com/news/tokenized-vault-foundation-and-openzeppelin-bring-erc-7540-asynchronous-vaults-to-onchain-funds) (Solidity library): adds ERC7540 asynchronous ERC4626 tokenized vaults   
* [revm v42](https://github.com/bluealloy/revm/releases/tag/v114): additional Glamsterdam support (glamsterdam-devnet-7)  
* ChainSafe [open creator rails](https://blog.chainsafe.io/open-creator-rails/) (subscription gated content stack): asset \+ registry contracts, indexer, TypeScript & Unity SDKs, x402 adapter, MCP server and demo  
* Kassandra [kohaku-cli privacy demo](https://x.com/kassandraETH/status/2079238186018931113) (terminal wallet): unshield & swap in single ERC4337 operation funded from Tornado Cash; work in progress, not security reviewed  
* Application layer standards (ERCs):  
  * [ERC8342](https://github.com/ethereum/ERCs/pull/1890/changes): Verifiable invoice commitment  
  * [ERC8343](https://github.com/ethereum/ERCs/pull/1900/changes): Contract deactivation  
  * [ERC8345](https://github.com/ethereum/ERCs/pull/1904/changes): Relational agent registry  
  * [ERC8346](https://github.com/ethereum/ERCs/pull/1906/changes): Translation files for ERC7730 descriptors  
  * [ERC8348](https://github.com/ethereum/ERCs/pull/1907/changes): Financial lease

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#183](https://forkcast.org/calls/acdc/183/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * [glamsterdam-devnet-7](https://forkcast.org/devnets/glamsterdam-devnet-7/): ratified devnet EIPs are scheduled for inclusion  
  * glamsterdam-devnet-8 ([spec](https://forkcast.org/devnets/glamsterdam-devnet-8/)): targeting early August, minor changes to repricing EIPs & discv5 only execution layer discovery  
  * glamsterdam-devnet-9: targeting August for non-finality testing  
  * Public testnets: targeting first testnet in September  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (deadline for proposing is August 6):  
    * Sukun Tarachandani: [EIP8334](https://github.com/ethereum/EIPs/pull/11905/changes) Bundled attestation propagation, backwards compatible  
    * Toni Wahrstätter: [EIP8341](https://forkcast.org/eips/8341/) Partial execution payload commitments, alternative to [EIP7862](https://forkcast.org/eips/7862/) Delayed state root  
    * Kev Wedderburn: [EIP8321](https://github.com/ethereum/EIPs/pull/11861/changes) Hash chain RANDAO  
    * Etan Kissling: [EIP8015](https://forkcast.org/eips/8015/) Remove deposit & eth1data fields

#### All core devs \- testing (ACDT) [\#88](https://forkcast.org/calls/acdt/088/) \+ [consensus layer](https://forkcast.org/calls/acdt/088/?breakout=cl) breakout

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * [glamsterdam-devnet-7](https://forkcast.org/devnets/glamsterdam-devnet-7/): ongoing chaos testing & stable containers need optimization, \~10-20% slower

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Terence (Prysm): [ePBS changes builder selection](https://terencechain.com/writing/how-epbs-changes-builder-selection/)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * EIP7805 FOCIL breakout [\#38](https://x.com/jih2nn/status/2080173455836946776): targeting local interop based on next consensus layer spec  
* Ethereum improvement proposals (EIPs):  
  * [EIP8347](https://github.com/ethereum/EIPs/pull/12006/changes): Offline state migration to the Partitioned Binary Tree (PBT)

### Staking

* Lambda: [ethrex execution layer client in production for 6 months](https://blog.lambdaclass.com/six-months-of-ethrex-in-production/)  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~50% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 888k active (target 128k), 17k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * Sigma Prime [Lighthouse v8.2.1](https://github.com/sigp/lighthouse/releases/tag/v8.2.1) (high): security fixes & optimizations and fixes for EIP8136 partial data columns (enabled by default on testnets)  
  * Execution layer:  
    * [Erigon v3.5.3](https://github.com/erigontech/erigon/releases/tag/v3.5.3) (bugfix): improved RPC reliability & subscription behavior  
    * Lambda [ethrex v22.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v22.0.0): adds debug\_getBadBlocks, hardens transaction pool under heavy load & adds Grafana dashboard for comparing execution clients  
    * [Nethermind 1.39.2](https://github.com/NethermindEth/nethermind/releases/tag/1.39.2) (mandatory): updated .NET to 10.0.10 (17 CVE security fixes) and makes eth\_getLogs block range explicit & configurable  
    * Paradigm [Reth v2.4.1](https://github.com/paradigmxyz/reth/releases/tag/v2.4.1) (high): alloy dependency updates

### Layer 2

* Aztec [Alpha V5](https://aztec.network/blog/introducing-alpha-v5) live, halves private transaction proving time & private transaction cost, resolves critical issues found in V4 and first apps live  
* Base [native account abstraction](https://blog.base.dev/native-account-abstraction) (EIP8130): 2x cheaper than ERC4337 smart accounts, live on [vibenet](https://vibes.base.org), targeting Cobalt upgrade in September & OP Stack chains later this year  
* Gnosis Chain [proposal to transition from L1 to Ethereum Economic Zone](https://forum.gnosis.io/t/gip-153-should-gnosis-chain-transition-into-the-ethereum-economic-zone/12397) (ZK rollup), sunsetting validator set & targeting genesis late 2026/early 2027  
* Taiko [June 21 security incident post mortem](https://paragraph.com/@taiko-labs/taiko-security-incident-a-postmortem-and-next-steps), attacker forged proofs via exposed signing key & attestation check that failed to reject prover running in debug mode  
* L2Beat [security councils](https://l2beat.com/publications/security-councils-in-practice): review of how they work, positives & areas for improvement, covering Arbitrum, Optimism, Celo, Taiko & Scroll

### Regulation

* US Senator Cynthia Lummis: [Clarity Act updated draft text](https://www.lummis.senate.gov/press-releases/lummis-releases-updated-clarity-act-text/)  
* US SEC:   
  * Commissioner Hester Peirce [crypto vaults & lending strategies](https://www.sec.gov/newsroom/speeches-statements/peirce-statement-crypto-vaults-lending-strategies-072226) may be within scope of securities laws depending on structure & activities; welcomes inquiries & feedback  
  * [SEC settled with Coinbase](https://x.com/iampaulgrewal/status/2079902214823505950) for record retention policy fixes & $150k, over Freedom of Information requests for former Chair Gary Gensler text messages, which were automatically wiped

### General

* AFX [USDC custody bridge exploit](https://x.com/AFX_XYZ/status/2080126901205770734) on Arbitrum, [30% bounty](https://x.com/AFX_XYZ/status/2080167517130289362) offered  
* [OpenAI models escaped sandbox](https://openai.com/index/hugging-face-model-evaluation-security-incident/) & compromised Hugging Face to obtain solutions for cyber capabilities benchmark they were being tested on  
* Vitalik: [AI capabilities & humans](https://x.com/VitalikButerin/status/2079157844817990035)

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-32/](https://ethereal.news/ethereal-news-weekly-32/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-32.md](https://ethereal.news/ethereal-news-weekly-32.md)*  

---
