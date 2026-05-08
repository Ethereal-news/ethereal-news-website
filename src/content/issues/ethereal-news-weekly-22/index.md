---
title: 'Ethereal news weekly #22'
description: '200M+ gas limit target post-Glamsterdam, 25M blocks on mainnet, Arbitrum DAO voted to release frozen ETH'
date: 'May 8, 2026'
---

200M+ gas limit target post-Glamsterdam, 25M blocks on mainnet, Arbitrum DAO voted to release frozen ETH

### Ecosystem

* [Soldøgn interop](https://blog.ethereum.org/2026/05/02/soldogn-interop-recap) recap, core protocol contributors met in Svalbard for a week focused on Glamsterdam upgrade:  
  * 200M+ gas limit target post-Glamsterdam upgrade  
  * ePBS implementations running with external builders  
  * [EIP8037](https://forkcast.org/eips/8037) state creation gas cost increase: changed from being dynamic to a fixed cost per state byte  
  * [Tim Beiko](https://hackmd.io/@nixorokish/svalbard-closing-summary#8-Closing-Remarks) finished work on L1 R\&D  
  * Alex Stokes on 3 month sabbatical, Pari covering ACDC moderation   
* [25M blocks](https://etherscan.io/block/25000000) on mainnet  
* Ethereum Foundation:  
  * Ethereum Protocol Fellowship [cohort 7 intro town hall](https://www.youtube.com/watch?v=nDBWizEOCE4&t=13s) (video), apply by May 13  
  * [EF sold 10k ETH to Bitmine](https://x.com/ethereumfndn/status/2050260388046836177) for average price of $2,292.15  
* ETHGlobal [Open Agents finalists](https://x.com/ETHGlobal/status/2052071600389071049) from [468 hackathon projects](https://ethglobal.com/showcase?events=openagents)  
* Thomas Jay Rush: [you say you want a revolution](https://revolution.stonylanepress.com/) (book), collection of 75 essays  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.5 average, 0.1 \- 22 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,274 \- $2,411 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* Morgan Stanley [E\*Trade](https://x.com/etrade/status/2052186628622328106) ETH trading rolling out  
* [Bitwise Asset Management](https://superstate.com/newsroom/bitwise-to-manage-uscc-as-superstate-fundos-grows) to manage USCC (formerly Superstate’s crypto carry fund)

### Applications

* DeFi United (effort to restore rsETH backing):   
  * [Arbitrum DAO voted](https://snapshot.org/#/s:arbitrumfoundation.eth/proposal/0xb32581468bece42245fa267ea86156a621ae77f61bb866118189b5d50155b051) to release frozen ETH  
  * Aave LLC filed to [vacate restraining notice](https://x.com/aave/status/2051329772190347560) that attempts to seize frozen ETH  
  * Aave: [attacker rsETH positions liquidated](https://x.com/aave/status/2052100832834036187) on mainnet & Arbitrum  
* Alchemix [v3](https://alchemixfi.medium.com/introducing-alchemix-v3-037a2ed26ab6) caps raised  
* [Slow](https://x.com/src_co_/status/2050231747623915793): reversible payments (during time delay) for ETH/ERC20, live on mainnet   
* BasePaint (daily shared NFT canvas): [1000 days](https://x.com/basepaint_xyz/status/2051707796626845971) of painting

### Developers

* Solidity (language): [pattern matching over algebraic data types](https://www.soliditylang.org/blog/2026/05/05/pattern-matching-in-core-solidity/) planned for Core Solidity  
* Fe (language) [Bountiful](https://bountiful.fe-lang.org/) (bug bounty platform): 0.25 ETH claimable per challenge for finding a bug in the compiler, challenge contract or registry  
* Growthepie (dashboard): [total value secured by language](https://www.growthepie.com/quick-bites/compiler-tvs) in top 1000 contracts  
* Sourcify (verification) [migrate to v2](https://x.com/SourcifyEth/status/2051982425169731932) before July 7, legacy v1 API brownouts  
* [ApeShift](https://github.com/vinod820/apeshift#readme) (tool): migrate projects from Brownie to Ape  
* [Tama](https://x.com/boredGenius/status/2051829627413582319) (dev framework): Verity contracts consist of formal specification, implementation & proof (implementation matches specification)  
* Leo Alt [evm-smith](https://leonardoalt.github.io/evm-smith): Claude written assembly & Lean proofs, minimal wrapped-ETH clone  
* Optimism [actions](https://x.com/Optimism/status/2050236891245461605) (TypeScript SDK): modules to integrate DeFi into applications, adds lend, swap & wallet support  
* Application layer standards (ERCs):  
  * [ERC8248](https://github.com/ethereum/ERCs/pull/1715/changes): Keyed transfer with authorization  
  * [ERC8249](https://github.com/ethereum/ERCs/pull/1716/changes): Generic relayer architecture for smart accounts  
  * [ERC8251](https://github.com/ethereum/ERCs/pull/1719/changes): Agent compliance  
  * [ERC8255](https://eips.ethereum.org/EIPS/eip-8255): Expiring token approvals  
  * [ERC8257](https://github.com/ethereum/ERCs/pull/1723/changes): Agent tool registry  
  * [ERC8258](https://github.com/ethereum/ERCs/pull/1729/changes): Token safety score  
  * [ERC8259](https://github.com/ethereum/ERCs/pull/1730/changes): AI agent identity & threat registry

### Agents

* [Amazon Bedrock AgentCore payments](https://aws.amazon.com/blogs/machine-learning/agents-that-transact-introducing-amazon-bedrock-agentcore-payments-built-with-coinbase-and-stripe/) preview, uses Coinbase or Stripe Privy wallets and x402  
* PSE: [anonymous credentials for trustless agents](https://ethresear.ch/t/anonymous-credentials-for-trustless-agents-acta/24797), proposal for composable privacy layer above ERC8004

### Security

* TrustedVolumes (liquidity provider) [\~$6.7M exploit](https://x.com/trustedvolumes/status/2052235435292910005)  
* Ekubo (DEX) [swap router contract exploit](https://x.com/EkuboProtocol/status/2051754481465856038) on mainnet & Arbitrum  
* SmartCredit (lending) [26 ETH exploit](https://x.com/smartcredit_io/status/2051361795789496337)  
* Chaos Labs [operational wallets attacked](https://x.com/omeragoldberg/status/2052500464370123195), keys rotated  
* Rekt security summit [war room report](https://github.com/RektHQ/Reports/blob/main/Rekt_Security_Summit_War_Room_Report.pdf) 

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#236](https://forkcast.org/calls/acde/236)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-7 targeting next week, last planned execution layer devnet  
  * [glamsterdam-devnet-3](https://glamsterdam-devnet-3.ethpandaops.io/) launched  
  * Proposed for inclusion:  
    * [EIP8252](https://github.com/ethereum/EIPs/pull/11601/changes) execution layer reorg state retention window  
    * [EIP8254](https://forkcast.org/eips/8254) cap deposit requests per block  
  * Considered for inclusion:  
    * [EIP8246](https://forkcast.org/eips/8246) remove SELFDESTRUCT burn; [usage analysis](https://ethereum-magicians.org/t/can-we-completely-remove-selfdestruct/28464)  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * Non-headliners proposed for inclusion:  
    * [EIP7709](https://forkcast.org/eips/7709) read BLOCKHASH from storage & update cost; [presentation](https://docs.google.com/presentation/d/1raEGijf92cUBeCGeTzQusItvIVUAjRcLzzlXtgL9jcU/edit?slide=id.g3d4d691568a_0_0#slide=id.g3d4d691568a_0_0)  
    * [EIP8253](https://github.com/ethereum/EIPs/pull/11605) remove pre-Spurious-Dragon accounts

### Layer 1

* [Ethspectoor](https://ethspectoor.com/): spec data explorer (consensus, execution, builder, relay, beacon APIs, execution APIs & remote signing); static explorer & MCP  
* Ethereum improvement proposals (EIPs):  
  * [EIP8246](https://eips.ethereum.org/EIPS/eip-8246): Remove SELFDESTRUCT burn  
  * [EIP8247](https://github.com/ethereum/EIPs/pull/11595/changes): Ancestor-indexed BALs  
  * [EIP8250](https://github.com/ethereum/EIPs/pull/11598/changes): Keyed nonces for Frame transactions (Vitalik [explainer](https://x.com/VitalikButerin/status/2051675198068330996))  
  * [EIP8252](https://github.com/ethereum/EIPs/pull/11601/changes): Execution-layer reorg state retention window  
  * [EIP8253](https://github.com/ethereum/EIPs/pull/11605/changes): Remove pre-Spurious-Dragon accounts  
  * [EIP8254](https://github.com/ethereum/EIPs/pull/11607/changes): Cap deposit requests per block  
  * [EIP8256](https://github.com/ethereum/EIPs/pull/11610/changes): Blob streaming

### Staking

* ethStaker [deposit CLI v1.3.0](https://github.com/ethstaker/ethstaker-deposit-cli/releases/tag/v1.3.0): adds easier mnemonic creation, improved keystore validation and support for partial deposits, Hoodi testnet & Python 3.14  
* Lido: [optimizing validator exits](https://blog.lido.fi/exiting-7k-validators-a-case-study-in-optimizing-ethereum-validator-exits/) (7k validator case study), minimize staking reward loss via coordinated voluntary exits, batch execution & sweep-cycle-aware timing  
* Serenita [Vero v1.4.0](https://github.com/serenita-org/vero/releases/tag/v1.4.0) (multi-node validator client): block proposal improvements (using Rust & SSZ encoding) and new CLI flags  
* Sigma Prime [Anchor](https://research.lido.fi/t/ssv-anchor-client-on-hoodi-testnet-performance-update/11537) (SSV client): considered viable option for Lido SSV-based setups  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.8% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 898k active (target 128k), 12k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * Lambda [ethrex v11.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v11.0.0): 12-15% sync-throughput improvement on full sync  
    * [Nethermind 1.37.2](https://github.com/NethermindEth/nethermind/releases/tag/1.37.2) (recommended): fixes healthcheck & archive invalid block issues in 1.37.1

### Layer 2

* Linux Foundation Decentralized Trust [Lineth](https://www.lfdecentralizedtrust.org/blog/announcing-lineth-a-production-grade-zk-rollup-stack-joins-linux-foundation-decentralized-trust) (Linea Stack): joining as incubating project  
* [ZKsync Lite](https://x.com/zksync/status/2051210912141295768) sunset, block production stopped  
* L2Beat [Stages for Validiums & Optimiums](https://x.com/l2beat/status/2051984164161827188), all currently at Stage 0  
* Luca Donno (L2Beat) [native proof verification](https://ethresear.ch/t/native-proof-verification/24798), proposal to derisk & simplify L2 bridges

### Regulation

* US crypto market structure legislation (Clarity act): [bipartisan compromise on yield](https://x.com/SenThomTillis/status/2051464145384489270), prohibits stablecoin rewards from resembling deposit interest but allows other forms of rewards

### General

* a16z crypto [fund 5](https://a16zcrypto.com/posts/article/fund-5) raised $2.2B  
* Coinbase [downsizing by \~14%](https://www.coinbase.com/blog/building-a-leaner-and-faster-coinbase) due to the market & AI  
* [DL News](https://www.dlnews.com/articles/people-culture/dl-news-is-closing/) closing

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-22/](https://ethereal.news/ethereal-news-weekly-22/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-22.md](https://ethereal.news/ethereal-news-weekly-22.md)*  

---
