---
title: 'Ethereal news weekly #3'
description: 'J.P. Morgan tokenized fund, Privacy Pools on Arbitrum & Optimism, SEC talks privacy'
date: 'December 19, 2025'
---

J.P. Morgan tokenized fund, Privacy Pools on Arbitrum & Optimism, SEC talks privacy

### Ecosystem

* US SEC: [crypto custody basics](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/crypto-asset-custody-basics-retail-investors-investor-bulletin-0), hot/cold wallets & self custody explained  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.8 (12.1 for zero net issuance)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,782 \- $3,250 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.034 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask Snaps](./metamask-snaps.png) 
Snaps are apps that customize your wallet experience and let you add new features and functionalities to MetaMask.

[Get started with Snaps](https://metamask.io/snaps).

---

### Enterprise

* J.P. Morgan [tokenized money market fund](https://am.jpmorgan.com/us/en/asset-management/institutional/about-us/media/press-releases/jp-morgan-asset-management-launches-its-first-tokenized-money-market-fund/) on [mainnet](https://etherscan.io/token/0x6a7c6aa2b8b8a6A891dE552bDEFFa87c3F53bD46)  
* SoFi Bank issued [SoFiUSD stablecoin](https://investors.sofi.com/news/news-details/2025/SoFi-Launches-Fully-Reserved-Stablecoin-to-Power-Financial-Infrastructure-for-Banks-Fintechs-and-Enterprise-Partners/default.aspx), initially for internal settlements  
* Visa [stablecoins advisory practice](https://corporate.visa.com/en/sites/visa-perspectives/newsroom/vca-stablecoins-advisory-practice.html)

### Applications

* Privacy Pools live on [Arbitrum](https://x.com/0xprivacypools/status/2001047640042054119) with support for [Nerite yUSND](https://www.nerite.org/writing/privacy-pools) yield bearing stablecoin & live on [Optimism](https://x.com/0xprivacypools/status/2001717606152315074)  
* [Base app](https://www.coinbase.com/en-au/blog/system-update-the-future-of-finance-is-on-coinbase) (wallet \+ Farcaster based social) open to public  
* [Synthetix](https://blog.synthetix.io/synthetix-perps-on-ethereum-mainnet/) returns to mainnet, perp DEX live, initially capped at 500 users  
* [gasPM](https://gaspm.eth.limo/): gas price prediction market  
* ENS.tools [public profiles](https://medium.com/@enstools/your-ens-name-deserves-more-than-a-resolver-record-2718947df4a7): shareable ENS profile  
* [Sound](https://x.com/soundxyz_/status/2001340636616888442) (music NFTs) shutting down January 16, 2026  
* Octant [StreamVote](https://x.com/OctantApp/status/1999558961624965309): pilot, 25 ETH streamed via quadratic voting to 17 public goods

### Developers

* Solidity [v0.8.32](https://github.com/argotorg/solidity/releases/tag/v0.8.32) (language): code generator fix for clearing/copying arrays straddling end of storage  
* Echidna [v2.3.0](https://github.com/crytic/echidna/releases/tag/v2.3.0) (fuzzer): verification mode for analyzing stateless functions, Foundry test case generation for failed assertions, clearer HTML coverage reports & failures display all events  
* Feelyourprotocol [ModExp precompile](https://feelyourprotocol.org/eip-7883-modexp-gas-cost-increase) (widget): view Fusaka upgrade gas increases  
* ENS:  
  * [Enscribe Foundry plugin](https://www.enscribe.xyz/blog/foundry): name contracts in deployment scripts, forward & reverse resolution  
  * [Decentralized website guide](https://ens.domains/blog/post/decentralized-websites): deploy a static website to IPFS using Omnipin  
* Deep funding [jurors wanted](https://x.com/devanshmehta/status/2001332858271780897) for infrastructure & dev tools round: volunteers compare repositories, comparisons used to select AI models which distribute funding  
* Application layer standards (ERCs):  
  * [ERC8104](https://github.com/ethereum/ERCs/pull/1409/files): RWA disclosure URI (ERC20 extension)  
  * [ERC8106](https://github.com/ethereum/ERCs/pull/1411/files): RWA event-based compliance framework (ERC20 extension)  
  * [ERC8107](https://github.com/ethereum/ERCs/pull/1412/files): ENS trust registry for agent coordination

### Security

* Ribbon Finance DeFi options vaults [$2.7M exploit](https://rekt.news/aevo-rekt)  
* iEarn yUSDT [$250k exploit](https://x.com/banteg/status/2001178316817002873)

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#226](https://forkcast.org/calls/acde/226)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting June 2026):  
  * Non-headliner [categorized shortlist](https://notes.ethereum.org/@ansgar/glamsterdam-el-pfi-eips)  
  * Considered for Inclusion:   
    * Repricing (targeting 60 MGas/s): [EIP7904](https://forkcast.org/upgrade/glamsterdam/#eip-7904) general repricing (increases only), [EIP7976](https://forkcast.org/upgrade/glamsterdam/#eip-7976) increase calldata floor cost, [EIP7981](https://forkcast.org/upgrade/glamsterdam/#eip-7981) increase access list cost, [EIP8038](https://forkcast.org/upgrade/glamsterdam/#eip-8038) state-access gas cost increase & [EIP2780](https://forkcast.org/upgrade/glamsterdam/#eip-2780) reduce intrinsic transaction gas  
  * Declined for Inclusion:  
    * [EIP2926](https://eips.ethereum.org/EIPS/eip-2926) chunk-based code merkleization, [EIP7686](https://eips.ethereum.org/EIPS/eip-7686) linear EVM memory limits, [EIP7923](https://eips.ethereum.org/EIPS/eip-7923) linear page-based memory costing & [EIP7973](https://eips.ethereum.org/EIPS/eip-7973) warm account write metering  
  * Remaining proposed non-headliner EIPs to be decided at ACDE January 5  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade:  
  * Portmanteau chosen as Hegotá (Heze \+ Bogotá)

#### All core devs \- testing (ACDT) [\#64](https://forkcast.org/calls/acdt/064)

* Gas limit increase:   
  * 75M: getBlobsV3 & max blobs flag need to be implemented & tested before clients can update default gas limit, ready for BPO3 releases  
  * Proposal for clients to set gas limit rather than validators  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade: ePBS block builders to be non-validating with 1 ETH staked  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade: consensus layer upgrade renamed to Heze (Heka not in IAU star catalog)  
* Erigon [RPC integration testing](https://github.com/ethereum/pm/issues/1842#issuecomment-3661200876) used alongside Hive rpc-compat 

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:   
  * Block-level Access Lists: [bal-devnet-1](https://dora.bal-devnet-1.ethpandaops.io/) launched with 5 execution layer clients  
* Forkcast: [upgrade planning sandbox](https://forkcast.org/schedule/), view timeline scenarios  
* Nethermind: [gas benchmarking](https://www.nethermind.io/blog/getting-ethereum-ready-for-gigagas) using historic mainnet blocks & mainnet transactions in a merged payload, Nethermind leads in these benchmark tests  
* [Blockspace market](https://ethresear.ch/t/an-observation-on-ethereum-s-blockspace-market/23669): PBS leaves gaps in pricing, incentives, concentration, latency & openness; principles to address proposed  
* [L1 zkEVM security sprint](https://blog.ethereum.org/2025/12/18/zkevm-security-foundations), milestones: soundcalc integration by end of February 2026, 100-bit provable security by Glamsterdam & 128-bit provable security by Hegotá  
* Protocol Guild: [sponsor a core dev](https://www.protocolguild.org/blog/20251218-sponsor-core-devs), funding gap for members is $160k  
* Ethereum improvement proposals (EIPs):  
  * [EIP8105](https://github.com/ethereum/EIPs/pull/10943/files): Encrypted transaction pool 

### Research

* [Future of state](https://blog.ethereum.org/2025/12/16/future-of-state): broad directions of expiry (mark inactive or era based), archive (hot/cold) & making it easier to hold/serve (partial statelessness & low cost infrastructure) to tackle challenges of state growth & centralization

### Staking

* Prysm [post mortem](https://prysm.offchainlabs.com/docs/misc/mainnet-postmortems/#fusaka-mainnet-prysm-incident) for attestation processing issue on December 4  
  * Potuz: [technical writeup](https://www.potuz.net/posts/fulu-bug/)  
  * Data Always: [MEV supply chain reaction to circuit breakers](https://collective.flashbots.net/t/how-the-mev-supply-chain-reacts-to-circuit-breakers/5439)   
    * Local block building: Geth 46%, Nethermind 31%  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer:   
    * ⚠️ Lighthouse \~54% (data may not be 100% accurate)  
    * Data Always: [snapshot](https://collective.flashbots.net/t/a-consensus-layer-client-diversity-snapshot/5431) via Flashbots relay  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 24% \[Note: [dual governance](https://dg.lido.fi/)\]  
* Client releases:  
  * Consensus layer:  
    * Lodestar [v1.38.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.38.0) (highly recommended): performance improvements & node 24 by default   
    * Nimbus [v25.12.0](https://github.com/status-im/nimbus-eth2/releases/tag/v25.12.0) (medium-urgency): network stability improvements  
    * Prysm [v7.1.1](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.1): fixes potential deadlock in data column batch verification and improved processing & metrics for cells & proofs  
    * Teku [25.12.0](https://github.com/Consensys/teku/releases/tag/25.12.0) (recommended): late block reorg enabled by default & improved proposal scheduling  
  * Execution layer  
    * Erigon [v3.3.2](https://github.com/erigontech/erigon/releases/tag/v3.3.2): single attestation event support and RPC fixes

### Layer 2

* Matter Labs: [ZKsync managed services](https://www.zksync.io/blog/zksync-managed-services-raas)  
* Gelato [Turbo](https://gelato.cloud/blog/turbo-sequencer): custom sequencer, compatible with OP Stack & Arbitrum

### Regulation

* Roman Storm: [status update](https://x.com/rstormsf/status/2001162811775574476)  
* US SEC:  
  * Crypto task force [privacy roundtable](https://www.sec.gov/newsroom/speeches-statements/atkins-121525-remarks-crypto-task-force-roundtable-financial-surveillance-privacy)  
  * Clarity on [broker-dealer custody](https://www.sec.gov/newsroom/speeches-statements/trading-markets-121725-statement-custody-crypto-asset-securities-broker-dealers)  
  * [Aave investigation closed](https://x.com/StaniKulechov/status/2000963157150388267) in August

### General

* Reminder: [stolen Telegram accounts](https://x.com/tayvano_/status/1999942459368104073) used to setup fake Zoom/Teams to steal crypto & Telegram accounts on repeat  
* Vitalik: [tribes & zones](https://vitalik.eth.limo/general/2025/12/17/societies.html), tribes innovate culture, zones innovate rules

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-3](https://ethereal.news/ethereal-news-weekly-3)*  

---

### Upcoming calendar

* Jan 7: [BPO2](https://lab.ethpandaops.io/ethereum/forks/bpo2) upgrade  
* Feb 17 \- 21: [ETHDenver](https://www.ethdenver.com) (conference & hackathon)  
* Mar 30 \- Apr 2: [EthCC](https://ethcc.io) (conference), Cannes, France

[*Full calendar*](https://ethereal.news/calendar/)
