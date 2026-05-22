---
title: 'Ethereal news weekly #24'
description: 'Devcon 8 early bird tickets, ApeWorX collective: nonprofit for Python dev tooling, glamsterdam-devnet-4 launched'
date: 'May 22, 2026'
---

Devcon 8 early bird tickets, ApeWorX collective: nonprofit for Python dev tooling, glamsterdam-devnet-4 launched

### Ecosystem

* [Devcon 8 tickets](https://tickets.devcon.org/): $349 early bird (ETH payment only)   
* Ethereum Foundation:  
  * Researchers [Carl Beekhuizen](https://x.com/CarlBeek/status/2056379557889143042) & [Julian Ma](https://x.com/_julianma/status/2056391635731128763) leaving EF  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.3 average, 0.1 \- 12.1 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,081 \- $2,253 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.028 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* [Blocknative joined Deloitte](https://www.blocknative.com/), API services & Gas Network winding down June 19

### Applications

* DeFi United (effort to restore rsETH backing):   
  * [Aave](https://x.com/aave/status/2056049190841594179) WETH LTVs restored  
  * Kelp: [rsETH protocol operations resumed](https://x.com/KelpDAO/status/2055307283647844495) & [consolidating supported networks](https://x.com/KelpDAO/status/2056054156306301425), bridge to mainnet before June 15  
* [PunksMarket](https://punksmarket.app/about): CryptoPunks v1 tradable without wrapping via workaround  
* ETH.sh [migrate tokens](https://migrate.eth.sh/): batch migrate multiple tokens to a new address  
* [ENSvolution](https://www.ensvolution.xyz): view change history for an ENS name

### Developers

* [ApeWorX collective](https://paragraph.com/@apeworx/introducing-the-apeworx-collective): nonprofit for Python dev tooling, web3.py & other Ethereum Foundation Python packages being moved to collective, ApeWorX LTD wound down and Ape (dev framework) & Silverback (bots) actively maintained  
* Nomic Foundation [Hardhat v3.5.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.5.0) (dev framework): adds EIP712 cheatcode support in Solidity Test, initialize projects by named template & templates updated to TypeScript 6  
* revm [v108](https://github.com/bluealloy/revm/releases/tag/v108): additional Glamsterdam support (bal-devnet-7)  
* ETHGlobal hackathon [continuity track](https://x.com/kartiktalwar/status/2056398837552730256): hack on existing code, either extend open source or ship a new feature  
* Application layer standards (ERCs):  
  * Revived [ERC1643](https://github.com/ethereum/ERCs/pull/1754/changes): Document management for security tokens  
  * [ERC8262](https://github.com/ethereum/ERCs/pull/1747/changes): Zero-knowledge compliance oracle  
  * [ERC8263](https://github.com/ethereum/ERCs/pull/1748/changes): Onchain proof layer for AI agents  
  * [ERC8264](https://github.com/ethereum/ERCs/pull/1752/changes): AI agent memory access rights  
  * [ERC8265](https://github.com/ethereum/ERCs/pull/1753/changes): Prepared transaction envelope  
  * [ERC8267](https://github.com/ethereum/ERCs/pull/1757/changes): Agent identity, capability & reputation

### Security

* LayerZero [Kelp $292M exploit post-mortem](https://layerzero.network/blog/layerzero-labs-kelpdao-incident-report): Kelp used 1/1 DVN, LayerZero Labs developer socially engineered into cloning malicious repo, session keys harvested, two internal RPC nodes poisoned & DoS attack on external RPC  
* Blockchain security standards council [contract security standard v1](https://specs.blockchainssc.org/scs/v1.html): chain agnostic guidance for developers & framework to evaluate security posture

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#237](https://forkcast.org/calls/acde/237)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [EIP7904](https://forkcast.org/eips/7904) compute gas cost increase, likely not needed once benchmarks confirmed as clients performing at 100M gas/sec target  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * Non-headliners proposed for inclusion:  
    * [EIP8188](https://forkcast.org/eips/8188) state tiering by write age; [presentation](https://weiihann.github.io/20260521-eip8188-acd/)  
    * [EIP8182](https://forkcast.org/eips/8182) private ETH & ERC20 transfers; [presentation](https://github.com/0xFacet/eip-8182-reference-implementation/blob/main/EIP-8182-ACDE.pdf)  
    * [EIP4758](https://forkcast.org/eips/4758) deactivate SELFDESTRUCT

#### All Core Devs \- Testing (ACDT) [\#80](https://forkcast.org/calls/acdt/080)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [EIP7954](https://forkcast.org/eips/7954) increase maximum contract size, updated to 64KiB  
  * Engine API SSZ proposals discussion

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [bal-devnet-7](https://bal-devnet-7.ethpandaops.io/) & [glamsterdam-devnet-4](https://glamsterdam-devnet-4.ethpandaops.io/) launched  
  * Terence: [ePBS scaling impact](https://terencechain.com/writing/epbs-changes-how-ethereum-scales/), separates deadlines giving execution payload & blobs more time to propagate and be verified  
  * Toni Wahrstätter: [Block-level Access Lists explainer](https://x.com/nero_eth/status/2057027628788269457)  
* Consensus-specs [v1.7.0-alpha.8](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.8)  
* [Consensus-specs implementations](https://stefanbratanov.github.io/consensus-specs-browser/): maps specs to client code, based on ethspecify maintained by clients  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting late-2026):  
  * FOCIL breakout [\#34](https://x.com/jih2nn/status/2057381877615583508): agreed to disable enforcement during non-finality, hegotá-devnet-0 tentatively planned after glamsterdam-devnet-4 stable  
* Ethereum improvement proposals (EIPs):  
  * [EIP8266](https://github.com/ethereum/EIPs/pull/11692/changes): Expiring nonces for frame transactions  
  * [EIP8268](https://github.com/ethereum/EIPs/pull/11716/changes): Storage roots in block access lists

### Staking

* ethPandaOps [The Lab: validator report](https://ethpandaops.io/posts/validator-report/), analyze validator performance including attestation correctness, sync committee participation & balance history  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~54% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.7% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 896k active (target 128k), 13k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.43.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.43.0) (recommended): fixes for self rate-limiting &  block-import performance, Glamsterdam upgrade prep and tools changed to pnpm v11  
  * Execution layer:  
    * Lambda [Ethrex v13.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v13.0.0): hardens RPC defaults and Glamsterdam upgrade prep (bal-devnet-6 & eth/71)

### Layer 2

* L2Beat:  
  * [Token frameworks](https://x.com/l2beat/status/2057474397477220419) (dashboard): cross-chain transfers by volume, quantity & tokens by volume  
  * [Lighter](https://x.com/l2beat/status/2056731750378684898) (perp DEX L2) ZK circuits regenerated from sources  
* Winding down: [Zero Network](https://x.com/zerodotnetwork/status/2057529610628128917?s=20) (bridge off by July 31), [Everclear](https://x.com/EverclearOrg/status/2057488000003477886) (formerly Connext) and [Syndicate Labs](https://x.com/syndicateio/status/2057291537860706672)

### Regulation

* President Trump [fintech executive order](https://www.whitehouse.gov/fact-sheets/2026/05/fact-sheet-president-donald-j-trump-integrates-financial-technology-innovation-into-regulatory-frameworks/) directs regulators to review non-bank access to Reserve Bank payment accounts  
* US Fed [payment accounts](https://www.federalreserve.gov/newsevents/pressreleases/other20260520a.htm) proposal for non-banks to clear & settle, but without intraday credit, discount window or interest  
* US SEC [rescinds no-deny policy](https://www.sec.gov/newsroom/press-releases/2026-45-sec-rescinds-policy-regarding-denials-settlements-enforcement-actions) which prevented denials of allegations in order to settle

### General

* Privacy Stewards of Ethereum (PSE) [private transfers dashboard](https://pse.dev/blog/announcing-private-transfers-dashboard), 11 protocols compared across privacy, cost, UX, decentralization, compliance, verifiability, state & composability  
* Vitalik: [formal verification](https://vitalik.eth.limo/general/2026/05/18/fv.html) explainer  
* THORChain [$10.7M exploit](https://thorchain.org/blog/thorchain-exploit-report-1), node operator reconstructed private key via vulnerability in GG20 implementation  
* Verus [\~$11M bridge exploit](https://x.com/VerusCoin/status/2056829444124213652), exploiter returned 75% & kept [25% as a bounty](https://x.com/VerusCoin/status/2057465214975492358)  
* MAP Protocol [unauthorized MAPO minting](https://medium.com/@mapprotocolofficial/official-statement-regarding-the-mapo-security-incident-c80f6002593f) via Butter Bridge abi.encodePacked hash collision

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-24/](https://ethereal.news/ethereal-news-weekly-24/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-24.md](https://ethereal.news/ethereal-news-weekly-24.md)*  

---
