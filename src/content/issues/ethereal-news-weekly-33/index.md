---
title: 'Ethereal news weekly #33'
description: 'Ethereum 11 years since genesis, pcaversaccio joined EF board, Polar bear selected as Glamsterdam mascot'
date: 'July 31, 2026'
---

*Ethereum 11 years since genesis, pcaversaccio joined EF board, Polar bear selected as Glamsterdam mascot*

### Ecosystem

* Ethereum Foundation: [pcaversaccio joined board](https://blog.ethereum.org/2026/07/29/ef-board-update) for initial one year term on voluntary basis; co-founder & lead of SEAL 911 and member of EF Silviculture Society  
* Ethereum [11 years since genesis](https://x.com/ethereum/status/2082850621296673042)  
  * Ethlabs (R\&D lab): [11x11 pixel artwork](https://x.com/ethlabs_org/status/2082835818130063360) using 11 colors for onchain canvas  
* Devcon 8 [infinite garden exhibition](https://infinitegarden.art), 2 month online artist cohort, apply by August 25  
* ETHGlobal Lisbon [hackathon finalists](https://x.com/ETHGlobal/status/2081396442720346241) from [173 projects](https://ethglobal.com/showcase?events=lisbon2026)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0 \- 13.2 (13.2 for zero net issuance)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,851 \- $1,974 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.03 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Enterprise

* [Morgan Stanley Ethereum Trust](https://www.morganstanley.com/press-releases/morgan-stanley-investment-management-launches-ethereum-and-solana-etps) (MSSE) ETP, portion of ETH to be staked  
* Open Standard Open USD (consortium stablecoin) [launching on Ethereum](https://x.com/ethereuminsti/status/2082857863668457797) day one  
* Ethereum Institutional (accelerating adoption): [ecosystem funding round closed](https://www.ethereuminstitutional.org/blog/ecosystem-supporters/), 100+ supporters, anchored by BitMine, Sharplink, Joe Lubin & Mihai Alisie

### Applications

* ENS DAO: [Foundation expansion updated proposal](https://discuss.ens.domains/t/draft-executable-next-era-of-ens-dao-empowering-the-ens-foundation/22329), DAO controls ENS tokens & operational wallet, Foundation controls endowment (timelocked with Security Council cancellation right) & 1M ENS grant for Foundation employee compensation  
* Uniswap [Launches](https://blog.uniswap.org/launch-aggregator-explore-top-uniswap-launchpads-in-one-place) (launchpad aggregator); live on Robinhood Chain, beta  
* 1inch [Aqua](https://1inch.com/blog/post/1inch-aqua-launch) shared liquidity layer  
* Freedom Factory [PQ1](https://freedomfactory.io/learn/freedom-factory-launches-pq1-post-quantum-hardware-wallet) (hardware wallet), post quantum signatures (SPHINCS+C10) for ERC4337 smart accounts, dual secure enclaves, open source hardware & software, clear signing, $179 preorder, shipping Q4 2026

### Developers

* [OpenZeppelin Contracts v5.7.0](https://www.openzeppelin.com/news/introducing-openzeppelin-contract-5-7) (Solidity library): adds modular ERC4337 paymaster framework (sponsor gas via ERC20, signature or NFT), crosschain ERC721 & ERC1155 bridges, Create3, ERC1967Clones, RateLimiter, SimulateCall and BlockHeader  
* Yearn [Vesting Escrow v0.4.0](https://github.com/yearn/yearn-vesting-escrow/releases/tag/v0.4.0) (Vyper): adds ERC4626 vault vesting, live on mainnet, not externally reviewed yet  
* Nomic Foundation [Hardhat v3.12.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.12.0) (dev framework): adds negative test filtering Solidity tests & Mocha test suite and experimental Glamsterdam upgrade support for [EIP7843](https://hardhat.org/docs/reference/amsterdam-support#eip-7843-slotnum-opcode) SLOTNUM opcode  
* Trail of Bits:  
  * [Slither 0.11.6](https://github.com/crytic/slither/releases/tag/0.11.6) (static analyzer): Hardhat v3 & Sourcify support, performance improvements and reduced false positives for some detectors  
  * [Echidna 2.3.3](https://github.com/crytic/echidna/releases/tag/v2.3.3) (fuzzer): symbolic & verification modes handle bytes, string & dynamic array arguments; console.log in traces; vm.expectRevert support (via hevm), property mode excludeViewPure option; two memory leaks fixed  
* Paradigm: [formally verifying Solidus](https://www.paradigm.xyz/writing/solidus) (Solidity compiler in Lean, pre alpha) using automated research; challenges to [break formal semantics](https://www.paradigm.xyz/puzzles/spec-hunt) & [optimize compiler](https://www.paradigm.xyz/puzzles/verified-compiler)   
* Argot Collective [EquiVM 0.1.0](https://github.com/argotorg/EquiVM/releases/tag/0.1.0) (Lean 4 framework): formally prove EVM bytecode refines high level program in Sol⁻ (Solidity inspired imperative language), experimental  
* Application layer standards (ERCs):  
  * [ERC8349](https://github.com/ethereum/ERCs/pull/1909/changes): Index based multi facet proxy  
  * [ERC8350](https://github.com/ethereum/ERCs/pull/1910/changes): Agent memory state registry  
  * [ERC8351](https://github.com/ethereum/ERCs/pull/1913/changes): Prediction market CTF wrapper  
  * [ERC8352](https://github.com/ethereum/ERCs/pull/1914/changes): Crosschain event archive  
  * [ERC8353](https://github.com/ethereum/ERCs/pull/1920/changes): Staked weighted verification gate  
  * [ERC8354](https://github.com/ethereum/ERCs/pull/1919/changes): Confidential agent policy verdicts  
  * [ERC8356](https://github.com/ethereum/ERCs/pull/1921/changes): Purpose bound third party data consent

### Security

* Guru Fund [\~$100k exploit](https://guru.fund/post-mortem) via unsafe adapter enabled on mainnet, shutting down  
* QuillAudits [Multisig Inspector](https://multisiginspector.quillaudits.com/): Safe configuration scan, read only  
* OpenAI [Codex Security](https://github.com/openai/codex-security#readme) (CLI & TypeScript SDK): find, validate & fix vulnerabilities

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#242](https://forkcast.org/calls/acde/242/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * Platåberget ([spec](https://forkcast.org/devnets/glamsterdam-devnet-8/)): short lived permissionless public testnet, targeting early August, updated repricing numbers based on benchmarks & discv5 only   
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (deadline for proposing is August 6):  
    * Etan Kissling (Nimbus): [EIP8115](https://forkcast.org/eips/8115/) Batch priority fees at end of block, [EIP8116](https://forkcast.org/eips/8116/) Replace cumulative receipt fields & [EIP7807](https://forkcast.org/eips/7807/) SSZ execution blocks (scaled down headliner proposal)  
    * Derek Chiang (ZeroDev): [EIP7819](https://forkcast.org/eips/7819/) SETDELEGATE instruction  
    * Alex Forshtat: [EIP7906](https://forkcast.org/eips/7906/) Transaction assertions via state diff opcode, [architecture overview](https://forshtat.com/posts/trustless-clear-signing-architecture/)  
    * Jochem Brouwer: [EIP7668](https://forkcast.org/eips/7668/) Remove bloom filters  
    * Kev Wedderburn: [EIP8200](https://forkcast.org/eips/8200/) EVMification & [EIP7666](https://forkcast.org/eips/7666/) EVM-ify identity precompile; [precompile usage](https://eth-act.github.io/evmification-data/index.html)

#### All core devs \- testing (ACDT) [\#89](https://forkcast.org/calls/acdt/089/) \+ [consensus layer](https://forkcast.org/calls/acdt/089/?breakout=cl) breakout

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Potuz (Prysm) [Glamsterdam circuit breaker](https://www.potuz.net/posts/gloas-circuit-breaker/) proposed design  
  * 🐻‍❄️ [Polar bear selected](https://ethereum-magicians.org/t/polar-bear-selected-as-mascot-for-glamsterdam-upgrade/26008) as Glamsterdam mascot over Flamingo  
* Ethereum improvement proposals (EIPs):  
  * [EIP8355](https://github.com/ethereum/EIPs/pull/12048/changes): Precompiles for ML-DSA verification  
  * [EIP8357](https://github.com/ethereum/EIPs/pull/12055/changes): EVM verification key registry

### Staking

* Lido [Core upgrade](https://blog.lido.fi/a-new-lido-core-upgrade-for-protocol-sustainability-and-a-leaner-ethereum/): Curated Module v2 adds 0x02 withdrawal credentials support, 265k+ validators can be migrated  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Data always: [client info in graffiti cross checked with Flashbots relay](https://hackmd.io/@dataalways/SyfmA1uSzg), doesn’t capture multi client setups  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 890k active (target 128k), 17k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.45.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.45.0) (highly recommended): security fixes, graffiti includes client info by default & Glamsterdam upgrade work  
    * Offchain [Prysm v7.1.8](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.8) (highly recommended): bug fixes improving early attestation handling  
  * Execution layer:  
    * [Besu 26.7.1](https://github.com/besu-eth/besu/releases/tag/26.7.1) (ASAP): fixes security vulnerabilities  
    * [Erigon v3.5.4](https://github.com/erigontech/erigon/releases/tag/v3.5.4): fixes critical memory leak in RPC gzip path & better path handling  
    * EF [Geth v1.17.5](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.5) (recommended): Pebble v2 support, performance improvements and Glamsterdam upgrade work  
    * Lambda [ethrex v23.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v23.0.0): networking, RPC & transaction pool hardening

### General

* Vitalik: cryptographic obfuscation protocols (part 2\) [diamond iO](https://vitalik.eth.limo/general/2026/07/28/obfuscation_part_ii_diamond_io.html)  
* Anthropic: [attacking cryptography using Claude Mythos preview](https://www.anthropic.com/research/discovering-cryptographic-weaknesses), improved key recovery attack on HAWK (post quantum signature scheme)  
  * [HAWK candidate withdrawn](https://groups.google.com/a/list.nist.gov/g/pqc-forum/c/2r2u6SbHun4/m/0_I2KOZ_CQAJ) from NIST standardization process

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-33/](https://ethereal.news/ethereal-news-weekly-33/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-33.md](https://ethereal.news/ethereal-news-weekly-33.md)*  

---
