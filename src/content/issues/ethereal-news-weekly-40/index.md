---
title: 'Ethereal news weekly #40'
description: 'US SEC innovation exemption for trading tokenized stocks on permissioned AMMs, S\&P Global acquiring OpenZeppelin, Blockspace Forum multi party block construction live'
date: 'September 18, 2026'
---

*US SEC innovation exemption for trading tokenized stocks on permissioned AMMs, S\&P Global acquiring OpenZeppelin, Blockspace Forum multi party block construction live*

### Ecosystem

* Ethereum Foundation:  
  * Protocol cluster [AMA on r/ethereum](https://www.reddit.com/r/ethereum/comments/1wf48x3/ama_we_are_ef_protocol_pt_15_16_september_2026/): included questions on [unbounded staking ratio](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l4kgj), [client team funding](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l68lw), [Frame transactions post quantum unlock](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l5nug), [org chart](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9ogoyc), [client diversity](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9pjej8), [protocol simplification](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9pw63t), [single slot finality](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l4nc0), [formal verification usage](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l59jb), [shielded transactions](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l5pvg), [quick slots prioritization](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l5s5u) & [post quantum migration](https://www.reddit.com/r/ethereum/comments/1wf48x3/comment/p9l4q5v)  
  * Workshop on privacy preserving technologies (Asiacrypt, Hong Kong): [call for presentations](https://privacypreserving.tech), 3 page abstract, deadline extended to October 11  
* Hegotá upgrade consensus layer preferences:  
  * Client teams: Consensys [Teku](https://forkcast.org/rank/#r=S:8198,8365;A:8148,8205;B:8015,8025,8237,8334,8359;C:7716,8142,8321,8333,8341,8367;D:8243,8371,8379), [Grandine](https://forkcast.org/rank/#r=A:8015;D:7716,8025,8142,8146,8148,8198,8205,8237,8243,8321,8333,8334,8341,8359,8363,8365,8367,8371,8375,8379), ChainSafe [Lodestar](https://blog.chainsafe.io/lodestars-position-on-hegota/), Offchain [Prysm](https://hackmd.io/@ttsao/prysm-view-hegota), Sigma Prime [Lighthouse](https://x.com/sigp_io/status/2100314060088918079) & Status [Nimbus](https://github.com/ethereum/pm/issues/2222#issuecomment-5700405295)  
  * [Lido](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876/16) & [Gattaca](https://x.com/gattacahq/status/2100585824299692260)  
  * Ethlabs: [call for faster Ethereum](https://ethlabs.org/writings/quick-slots-ecosystem.html) via EIP8198 quick slots  
* ETHOnline hackathon [finalists](https://x.com/ETHGlobal/status/2100256690042249467) from [812 projects](https://ethglobal.com/showcase?events=ethonline2026)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 6.3 (13.5 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122M, 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,361 \- $2,648 (all time high $4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.032 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask Added Protection](./metamask-added-protection.avif)
**MetaMask now prevents red pill attacks with new Added Protection security feature**

The first self-custody wallet to guarantee an Ethereum or EVM app transaction matches its preview, or it reverts, and your funds stay put.

[MetaMask Added Protection](https://metamask.io/news/added-protection-prevents-red-pill-attacks) 

---

### Enterprise

* S\&P Global [acquiring OpenZeppelin](https://press.spglobal.com/2026-09-17-S-P-Global-Announces-Agreement-to-Acquire-OpenZeppelin), will continue as its own business unit under the OpenZeppelin name, [OpenZeppelin Contracts to remain open source](https://www.openzeppelin.com/news/spglobal-enters-agreement-to-acquire-openzeppelin)  
* Deutsche Bank [digital asset custody](https://www.db.com/news/detail/20260916-deutsche-bank-to-launch-digital-asset-custody-solution-for-institutional-and-corporate-clients) for European institutional & corporate clients, includes ETH & selected stablecoins (USDC, EURC & EURAU), targeting this year

### Applications

* Aave [custodied collateral lending proposal](https://governance.aave.com/t/arfc-custodied-collateral-lending-aave-v4-isolated-hub-spoke/25639), allow institutions to borrow stablecoins against assets held in custody at Anchorage, new isolated hub & spoke  
* Balancer [wind down proposal](https://forum.balancer.fi/t/bip-xxx-orderly-winddown-of-balancer-and-distribution-of-the-treasury/7107), v3 revenue hasn’t replaced v2, withdrawals only from October 30, distribute treasury (\~$9M) to BAL token holders after costs starting May 2027

### Developers

* Argot Collective [Fe 26.3](https://blog.fe-lang.org/posts/release-26-3/) (language): adds first class memory pointers, array & ERC20 helpers, rebuilding from contract metadata (for source verification) and source level debugging foundations (bytecode to source attribution & export to Fe ethdebug view)  
* [Foundry v1.8.3](https://github.com/foundry-rs/foundry/releases/tag/v1.8.3) (dev framework):  
  * Glamsterdam upgrade support expanded (adds EIP8037 state gas reporting, getSlotNumber & rollSlot for EIP7843 block slot number and EIP7928 block access list hash in eth\_simulateV1 block headers)  
  * Adds Safe & ERC4626 vault commands to cast  
* Taek Lee (ZeroDev) [FrameTx toolkit](https://github.com/leekt/FrameTx-toolkit#readme): write & test Frame transactions with Foundry, uses patched solc, Foundry & revm, account & paymaster examples, experimental  
  * [vFrame](https://github.com/leekt/FrameTx-toolkit/blob/main/vframe/README.md) (Solidity entry point): test Frame style transactions on stock EVM using ERC4337 style flow, [demo](https://vframes.taek.tech) on Sepolia testnet  
* Solidity Labs [Forge proposal simulator v1](https://github.com/solidity-labs-io/forge-proposal-simulator#readme) (tool): records proposal actions from Solidity calls, encodes, simulates & validates; supports Safe, OpenZeppelin timelock, Governor Bravo & OpenZeppelin Governor  
* WINTΞR: [EVM from scratch](https://evmfromscratch.com) (course), $99 ($39.60 with early bird discount)  
* Colosseum [crypto world’s fair](https://colosseum.com/worldsfair) (hackathon), tracks for Ethereum, Arbitrum, Base & Robinhood Chain, submissions due October 12  
* Application layer standards (ERCs):  
  * [ERC8416](https://github.com/ethereum/ERCs/pull/2009/changes): Epoch based fixed rate vault  
  * [ERC8418](https://github.com/ethereum/ERCs/pull/2010/changes): Itemized non fungible token

### Security

* Nostra [\~$3.5M money market exploit](https://x.com/nostrafinance/status/2100577538053493076) on Starknet via NSTR price oracle manipulation  
* Cozy [\~$170k exploit](https://x.com/cozyfinance/article/2099604126417965216) of two v2 protection market Sets on Optimism, false oracle proposals went unchallenged for 5 days  
* Monad [Ultrafuzz](https://monad.xyz/blog/open-sourcing-ultrafuzz) (orchestrator): contract fuzzing & threat hunting  
* TheDAO Security Fund [ETHSecurity initiatives](https://paragraph.com/@thedao.fund/round-two-starts-today-ethsecurity-initiatives) (grants & RFPs): propose an initiative, fund an initiative or bid to build an RFP, third of each budget must go to adoption milestones, round finishes at end of January  
  * Grants include: formally verified Vyper compiler & privacy preserving EDR  
  * RFPs include: provider independent client verified ENS resolution & local first Safe UI

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#187](https://forkcast.org/calls/acdc/187/)

* [Alex Stokes](https://x.com/ralexstokes) is back facilitating ACDC  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * mplex deprecation: enable QUIC by default then deprecate after Glamsterdam  
  * Sepolia testnet: upgrade October 6, client release by September 29  
  * Hoodi testnet: targeting October 27, dependent on Sepolia upgrade  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non headliner scoping used [EIPs by average client rating](https://forkcast.org/upgrade/hegota/client-priority/?quick=cl)  
  * 1 EIP [Considered for Inclusion](https://forkcast.org/upgrade/hegota/#considered-for-inclusion) (CFI):  
    * [EIP8015](https://forkcast.org/eips/8015/) remove deposit & eth1data fields  
  * 7 EIPs [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * [EIP8146](https://forkcast.org/eips/8146/) block access list sidecars, [EIP8237](https://forkcast.org/eips/8237/) independent CL/EL sync, [EIP8243](https://forkcast.org/eips/8243/) batching attestations at source, [EIP8321](https://forkcast.org/eips/8321/) hash chain RANDAO, [EIP8341](https://forkcast.org/eips/8341/) partial execution payload commitments, [EIP8367](https://forkcast.org/eips/8367/) balance sunset for retired BLS validators & [EIP8375](https://forkcast.org/eips/8375/) ePBS mandatory burn of execution rewards  
  * 1 new EIP [Proposed for Inclusion](https://forkcast.org/upgrade/hegota/#proposed-for-inclusion) (PFI):  
    * [EIP8411](https://forkcast.org/eips/8411/) fast execution payload broadcast, subset of [EIP8142](https://forkcast.org/eips/8142/) block in blobs  
  * Next ACDC to review:  
    * [EIP8365](https://forkcast.org/eips/8365/) BLS withdrawal credential retirement, client teams likely to CFI once scope reduced to deprecation  
    * Remaining EIPs to CFI & DFI  
  * Process needed for deciding on [EIP8363](https://forkcast.org/eips/8363/) tapered issuance burn

#### All core devs \- testing (ACDT) [\#96](https://forkcast.org/calls/acdt/096/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/096/?breakout=cl)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * [glamsterdam-devnet-11](https://dora.glamsterdam-devnet-11.ethpandaops.io): upgraded with no issues, Lido & Optimism tested transition  
  * Sepolia testnet shadow fork: targeting next week

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * FOCIL breakout [\#42](https://forkcast.org/calls/focil/042/): focil-devnet-0 launch once interop issue resolved, in parallel work on FOCIL & Frame transactions interaction  
  * Terence (Prysm): [primitives that help shorter slots](https://terencechain.com/writing/things-that-help-shorter-slots/), faster broadcast, make nodes do less work, pipeline broadcast, state preparation & execution and reduce validator work on critical path  
* Blockspace Forum [multi party block construction](https://x.com/blockspaceforum/status/2100205968311148676) (MPBC) live, most valuable block is expanded with transactions from multiple builders, initially append only, [dashboard](https://docs.blockspace.forum/mpbc/live-metrics/#overview)

### Staking

* Lido [first validator consolidation](https://x.com/LidoFinance/status/2100519865593270744), migration started for 260k validators to 0x02 credentials  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~52% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.6% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 911k active (target 128k), 19k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.48.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.48.0) (strongly recommended): adds flat file storage for PeerDAS data columns & faster block processing  
    * Consensys [Teku 26.9.0](https://github.com/Consensys-Incorporated/teku/releases/tag/26.9.0) (recommended): external signer concurrent limit flag promoted (maximum 1024), removes deposit snapshot CLI options & adds Platåberget devnet support  
  * Execution layer:  
    * Lambda [ethrex v27.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v27.0.0): bootnodes updated, state & block overrides in RPC simulation, simulated calls no longer refused, clearer RPC errors and stateless validator guests upgraded to ERE v0.17  
    * Paradigm [Reth v2.6.0](https://github.com/paradigmxyz/reth/releases/tag/v2.6.0) (low): expands Glamsterdam & Hegotá support, REST-SSZ Engine API installed by default, advances EIP8189 snap sync and partial persistence enabled by default

### Layer 2

* Base [plans to ship EIP8130 keystore accounts](https://x.com/0xlsr/status/2099571105799258362) (native account abstraction) later this year, doesn’t block enabling EIP8141 Frame transactions in future  
  * Derek Chiang (Ethlabs): [account abstraction collaboration broke down](https://x.com/decentrek/status/2099490351337902392)  
* Robinhood Chain [RobinScan](https://robin.etherscan.io) (Etherscan block explorer)  
* L2Beat [ossification score](https://forum.l2beat.com/t/ossification-announcement-and-call-for-feedback/445): proposed metric for how code matures as it secures value over time, feedback wanted

### Regulation

* US Senate [Clarity Act cloture on motion to proceed rejected](https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_00234.htm), 49 \- 50 (60 needed)  
* US SEC five year [innovation exemption](https://www.sec.gov/newsroom/press-releases/2026-90-sec-issues-innovation-exemption-facilitate-trading-tokenized-nms-stock-request-comment) for onchain trading of tokenized stocks on permissioned AMMs, requires same rights/privileges as traditional stock, underlying issuer can object, public auditable contracts on permissionless blockchains, halts with primary exchange, comments requested  
  * [Commissioner Hester Peirce](https://www.sec.gov/newsroom/speeches-statements/peirce-slumber-number-innovation-exemption-statement-091726): order is not about decentralized finance, investor doesn’t need exemption to use permissionless contracts for peer to peer trading  
* US CFTC [no action position to providers of passive software](https://www.cftc.gov/PressRoom/PressReleases/9300-26)  
* US House Ways & Means committee [advances Digital Asset Tax Certainty Act](https://waysandmeans.house.gov/2026/09/16/historic-digital-asset-tax-legislation-advances-to-keep-america-the-crypto-capital-of-the-world/), excludes gains/losses on regulated stablecoins & transaction fees below $10, parity with traditional financial assets and clarifies treatment of staking  
* UK FCA [continues crackdown on peer to peer crypto trading](https://www.fca.org.uk/news/press-releases/fca-and-partners-continues-crackdown-illegal-crypto-trading)

### General

* Austin Griffith (EF) [Picowallet](https://github.com/austintgriffith/picowallet#readme): DIY hardware wallet for USDS stablecoin, uses three off the shelf parts, no soldering required, proof of concept

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-40/](https://ethereal.news/ethereal-news-weekly-40/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-40.md](https://ethereal.news/ethereal-news-weekly-40.md)* 

---
