---
title: 'Ethereal news weekly #39'
description: 'Frame transactions added as Hegotá upgrade headliner, Nomic Foundation slang-solx, Consensys splitting into two companies'
date: 'September 11, 2026'
---

*Frame transactions added as Hegotá upgrade headliner, Nomic Foundation slang-solx, Consensys splitting into two companies*

### Ecosystem

* Ethereum Foundation Protocol cluster:   
  * [Priorities](https://blog.ethereum.org/2026/09/07/protocol-priorities): quantum resistant by December 2029, minimum viable post quantum in J\* upgrade, Strawmap may swap K\* & L\* upgrades with full post quantum readiness in K\* upgrade  
  * [AMA on r/ethereum](https://blog.ethereum.org/2026/09/09/reddit-ama) September 16 2pm UTC, submit questions in advance  
* Hegotá upgrade preferences:  
  * EF: [Protocol cluster](https://blog.ethereum.org/2026/09/07/protocol-hegota-eips) & [Protocol architecture team](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876/7)  
  * Execution layer client teams: EF [Geth](https://notes.ethereum.org/@lightclient/geth-hegota-tiers), Lambda [ethrex](https://x.com/ethrex_client/status/2098035569431384211), [Besu](https://github.com/besu-eth/besu/wiki/hegota-eip-selection-explainer), [Nethermind](https://gist.github.com/LukaszRozmej/9fc6b743bb82e363e16a0337bfc0bbc9), Paradigm [Reth](https://forkcast.org/rank/#r=S:3298;A:8253;B:7668,8131,8368;C:5920,7666,7819,7906,7923,7979,8115,8116,8200,8219,8250,8279,8358,8374;D:2488,4758,7645,7709,7807,7851,7862,8077,8094,8151,8163,8182,8188,8272,8298,8304,8355,8372) & Status [Nimbus EL](https://forkcast.org/rank/#r=S:7807,8115,8116;A:7668;B:7666,7709,8200)  
  * Consensus layer client teams: ChainSafe [Lodestar](https://hackmd.io/@matthewkeil/HkcMqKQdfg)  
  * [Ethlabs](https://ethlabs.org/writings/hegota-view.html) (updated), [Lido](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876/9), [Serenita](https://serenita.io/blog/2026/hegota-tier-list) & [L2Beat research team](https://forum.l2beat.com/t/l2beats-research-team-hegota-ranking/439)  
* Devcon 8:  
  * [Devcon travel guide](https://devcon.org/en/travel-guide/)  
  * [Community hubs](https://x.com/EFDevcon/status/2097721361770701294): privacy, security, EIP, P2P networking, token rights, prediction markets, open source builders, onchain art, DeSci, resilient networks, katta (India) developers, fragmentation, agentic & ZuZone  
  * [Creator fellowship](https://paragraph.com/@efevents/introducing-the-devcon-8-creator-fellowship): 10 fellows will complete storytelling missions (September 28 to November 2), free Devcon ticket, apply by September 20  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 2.1 (13.4 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122M, 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,410 \- $2,533 (all time high $4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.032 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask's next chapter](./metamask-next-chapter.avif)
MetaMask’s Chairman and CEO Joseph Lubin maps out our Open Money future.  
[MetaMask's next chapter](https://metamask.io/news/metamask-next-chapter).

---

### Applications

* Morpho [Midnight](https://x.com/Morpho/status/2097309026052899186) expands to mainnet, fixed term & fixed rate credit  
* Uniswap [StablePair hook](https://blog.uniswap.org/stablepair-hook-a-fee-that-moves-with-the-market) (v4 dynamic fee) live on mainnet with USDC/USDG & USDC/USDT pools

### Developers

* Argot Collective [Solidity 0.8.37](https://www.soliditylang.org/blog/2026/09/10/solidity-0.8.37-release-announcement/) (language):   
  * Amsterdam EVM version support for [EIP7843](https://forkcast.org/eips/7843/) SLOTNUM opcode  
  * Experimental features: SSA CFG code generator greedy stack shuffler replaced with planning shuffler; removed: language server protocol mode & generic Solidity prototype  
  * Fixes for low/medium severity bugs ([memory byte array element delete clears 32 bytes](https://www.soliditylang.org/blog/2026/09/10/memory-byte-array-element-delete-clears-whole-word-bug/) & [spill slot collision across mutual recursion](https://www.soliditylang.org/blog/2026/09/10/spill-slot-collision-across-mutual-recursion-bug/)), fix for very low severity bug ([misordered named parameters in require with custom errors](https://www.soliditylang.org/blog/2026/09/10/misordered-named-parameters-in-require-with-custom-errors-bug/)) and fixes for miscompilations (uninitialized function pointers in packed storage & constants read in checked/unchecked contexts)  
* Nomic Foundation [slang-solx](https://blog.nomic.foundation/announcing-slang-solx-a-solidity-compiler-thats-up-to-5x-faster/) (Solidity compiler backend):  
  * LLVM based backend, enables parallel multithreaded compilation, \~1.7x faster than solc (legacy mode) & \~5x faster than solc (via-IR mode) & no stack too deep errors in 99.85% of test cases  
  * [hardhat-slang-solx](https://hardhat.org/docs/cookbook/compiling-with-slang-solx) (Hardhat plugin): uses solc frontend, supports Solidity 0.8.34 only, not ready for mainnet deployments  
* banteg [EVM compiler bench](https://evm.banteg.xyz): adds Nomic Foundation solx & Paradigm Solar  
* EthSystems [sealring](https://ethsystems.org/writeups/building-blocks-sealring/) (library): generic sealed note envelope for shielded pools  
* Application layer standards (ERCs):  
  * [ERC8412](https://github.com/ethereum/ERCs/pull/2002/changes): Preregistered acceptance criteria  
  * [ERC8414](https://github.com/ethereum/ERCs/pull/2005/changes): Token bound task tenders  
  * [ERC8415](https://github.com/ethereum/ERCs/pull/2006/changes): Asynchronous register projection for NFTs 

### Agents

* Aave [MCP server](https://aave.com/blog/introducing-aave-mcp-server): read live data, simulate actions & prepare transactions for users to sign, supports V3 & V4, built on Aave Kit

### Security

* Notional [\~$1.7M exploit of legacy V1 contract](https://blog.notional.finance/notional-v1-exploit-post-mortem/) (deprecated January 2022\) via integer overflow  
* yAudit [yBorg](https://x.com/yAuditDAO/status/2098139539294327105): 4 week AI \+ blockchain security fellowship, applications open September 14 (short window)

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#245](https://forkcast.org/calls/acde/245/)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * [EIP8141](https://forkcast.org/eips/8141/) Frame transactions set as headliner  
  * Non-headliner scoping used [EIPs by category & average client rating](https://forkcast.org/upgrade/hegota/client-priority/?layer=EL&team=Besu%2CErigon%2CEthrex%2CGeth%2CNethermind%2CReth&only=1&group=category)  
  * 14 EIPs [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * Account abstraction: [EIP7819](https://forkcast.org/eips/7819/) SETDELEGATE instruction & [EIP7851](https://forkcast.org/eips/7851/) code controlled EOA delegation  
    * EVM features: [EIP2488](https://forkcast.org/eips/2488/) deprecate CALLCODE opcode, [EIP8219](https://forkcast.org/eips/8219/) checked arithmetic opcodes, [EIP8182](https://forkcast.org/eips/8182/) private ETH & ERC20 transfers, [EIP7645](https://forkcast.org/eips/7645/) alias ORIGIN to SENDER & [EIP7923](https://forkcast.org/eips/7923/) linear page based memory costing  
    * EVM pricing: [EIP8115](https://forkcast.org/eips/8115/) batch priority fees at end of block, [EIP8188](https://forkcast.org/eips/8188/) last written block for accounts & slots, [EIP8358](https://forkcast.org/eips/8358/) net gas metering for account changes & [EIP8200](https://forkcast.org/eips/8200/) EVMification  
    * Performance engineering: [EIP7862](https://forkcast.org/eips/7862/) delayed state root  
    * Miscellaneous: [EIP7807](https://forkcast.org/eips/7807/) SSZ execution blocks & [EIP8094](https://forkcast.org/eips/8094/) eth/vhash \- blob aware transaction pool   
  * Next ACDE to review:  
    * Highest rated EIPs as Considered for Inclusion (CFI)  
    * Declined for Inclusion delayed decisions (default to DFI): [EIP7979](https://forkcast.org/eips/7979/) call & return opcodes (will Solidity/Vyper integrate), [EIP8163](https://forkcast.org/eips/8163/) reserve EXTENSION opcode (need L2 input), [EIP8372](https://forkcast.org/eips/8372/) normalized state gas limit and [EIP8304](https://forkcast.org/eips/8304/) trustless log & transaction index

#### All core devs \- testing (ACDT) [\#95](https://forkcast.org/calls/acdt/095/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/095/?breakout=cl)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * glamsterdam-devnet-10: [decoupled consensus networking benchmarks](https://x.com/yannvon/status/2096066596716380585) (I\* upgrade candidate)  
  * [glamsterdam-devnet-11](https://dora.glamsterdam-devnet-11.ethpandaops.io): test successful upgrade transition

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Maria Inês Silva (EF): [simulating fee market first day](https://ethresear.ch/t/from-60m-to-200m-simulating-glamsterdam-s-fee-market/25957) as gas limit increases to 200M  
  * Feel Your Protocol: [EIP8037 state creation gas cost increase](https://feelyourprotocol.org/eip-8037-state-creation-gas) interactive explainer  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * EIP8141 Frame transactions:  
    * Account abstraction breakout [\#4](https://x.com/forkcast_eth/status/2097397546750521614): test specs v0.3.0, 3 clients ready for frames-devnet-0  
    * lightclient (Geth) [Frames are all you need](https://lightclient.io/blog/frames-are-all-you-need/): extensibility & observability, extensions without new transaction types: expiry, recent roots, transaction assertions, account sweeping & signature aggregation  
    * soispoke (EF) [transaction pool account transaction capacity from historical activity](https://ethresear.ch/t/mempool-account-transaction-capacity-from-historical-activity-matcha/25949): bound DoS risk so users can share one sender without needing allow list for applications, paymasters or proof systems  
* I\* upgrade (targeting 2027/2028):  
  * Vitalik: [recursive STARK transaction pools explainer](https://x.com/VitalikButerin/status/2097711433073172837) (EIP8288), unlocks quantum safe signatures (SPHINCS-), quantum safe privacy protocols, new signature & proof scheme support without EVM changes and private account abstraction  
  * Vitalik: [partitioned binary trees can simplify code delegation](https://ethereum-magicians.org/t/partitioned-binary-trees-and-the-future-of-code-delegation/29638) using codehash as canonical identifier  
* Ethereum improvement proposals (EIPs):  
  * [EIP8411](https://github.com/ethereum/EIPs/pull/12299/changes): Fast execution payload broadcast   
  * [EIP8413](https://github.com/ethereum/EIPs/pull/12306/changes): Decouple stake from validator registration

### Research

* Csaba Király: [fast payload broadcast by splitting into fixed size segments](https://ethresear.ch/t/wen-fast-payload-broadcast-segment-code-push-pull-and-everything-in-between/25913), reduces median receiver completion time from 4.9s to 0.73s & cuts payload bytes each node receives from 4.4 copies to 1.4

### Staking

* ChainSafe Lodestar: [Lodekeeper](https://lodekeeper.github.io/2026/09/07/how-the-lodestar-team-uses-me.html) (AI contributor)  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.6% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 910k active (target 128k), 18k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Erigon v3.6.1](https://github.com/erigontech/erigon/releases/tag/v3.6.1) (recommended): fixes downloader regression, peer ban bypass, index build defect & bumps grpc dependency for two high severity CVEs  
    * Lambda [ethrex v26.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v26.0.0): adds Platåberget devnet, eth/72 sparse blobpool (EIP8070), sync robustness fixes, RPC correctness fixes & bumps database schema to v4 (no rollback)

### Regulation

* US Senator Lummis: [Clarity Act updated text](https://www.lummis.senate.gov/press-releases/lummis-releases-updated-clarity-act-text-ahead-of-historic-tuesday-vote-2/), ahead of September 15 Senate vote

### General

* Hardware wallets:  
  * Trezor adds [clear signing](https://trezor.io/blog/news/clear-signing-comes-to-trezor-our-flagship-security-feature-of-2026)  
  * Ledger [Device Management Kit](https://www.ledger.com/blog-dmk-rollout) (DMK) replaces LedgerJS, supports clear signing, multiple Ledgers & more reliable connections  
  * Austin Griffith (EF) [CELL prototype](https://x.com/austingriffith/status/2097229532424212934) (requires pulse or blood to sign) based on Ross [specs](https://github.com/z0r0z/cell#readme)  
* [Consensys splitting into two companies](https://consensys.io/blog/consensys-software-inc-to-become-two-independent-companies-metamask-the-consumer-platform-and-consensys-the-protocols-and-institutional-infrastructure-company), MetaMask (consumer platform, Joe Lubin CEO) & Consensys (protocols & institutional infrastructure, includes Linea L2, Besu execution layer client & Teku consensus layer client, Mike Kriak CEO), separation expected by end of 2026  
* a16z crypto [Lattice Jolt](https://a16zcrypto.com/posts/article/lattice-snarks-jolt-post-quantum-faster/) (zkVM): Jolt changed from elliptic curves to lattices, post quantum and 2x \- 3x faster prover & verifier  
* [Brevo](https://status.brevo.com/incidents/01M266V1CZKJQNGZRNEGFD5CQE/write-up) (email provider) breach used for phishing attempts: [Trezor](https://trezor.io/blog/news/security-incident-at-brevo-our-third-party-email-provider) & [CoinTracking](https://cointracking.info/blog/security-notice-phishing-email)   
* Freedom [0.8.5](https://freedom.baby/freedom-0-8-5-daily-driver.html) (browser): includes experimental Ethereum light client, Chromium based, now usable as daily browser

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-39/](https://ethereal.news/ethereal-news-weekly-39/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-39.md](https://ethereal.news/ethereal-news-weekly-39.md)*  

---
