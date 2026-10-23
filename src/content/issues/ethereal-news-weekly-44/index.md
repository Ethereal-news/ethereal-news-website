---
title: 'Ethereal news weekly #44'
description: 'Glamsterdam on Hoodi testnet postponed, Privacy Pools v2 live, EIP8453: Decoupled consensus'
date: 'October 23, 2026'
---

*Glamsterdam on Hoodi testnet postponed, Privacy Pools v2 live, EIP8453: Decoupled consensus*

### Ecosystem

* [Glamsterdam on Hoodi testnet postponed](https://blog.ethereum.org/2026/10/22/glamsterdam-hoodi-delay) to further investigate gas repricing interactions with mainnet contracts  
  * Update Hoodi nodes to releases that don’t schedule Glamsterdam  
  * ENRScout (crawler): [Hoodi postponement dashboard](https://enrscout.ethnodeops.xyz/forks?network=hoodi)  
* Josh Rudolf (Ethlabs): [ETH is programmable store of value](https://ethlabs.org/updates/week-17.html) (Ethlabs week 17 update)  
* Yukon [CurveSmash](https://www.yukon.org/curvesmash): autoresearch challenge to find attacks on elliptic curves (secp256k1, P-256 & BLS12-381)  
* EthCC (Cannes, April 12-15): [speaker applications open](https://ethcc.io/forms/speakers)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 5.2 (13.6 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122.2M, 21k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): \$2,330 \- \$2,519 (all time high \$4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.03 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask Agent Wallet](./metamask-agent-wallet.jpeg) 

**MetaMask Agent Wallet**

The agentic wallet that automates trades while staying inside your rules \- powered by MetaMask’s trusted security, backed by Transaction Protection.

MetaMask Agent Wallet now plugs into: Grok Bot, Cursor and OpenClaw (via ClawHub).

[MetaMask Agent Wallet](https://metamask.io/agent-wallet) 

---

### Enterprise

* JPMorgan [JPM Coin](https://www.jpmorgan.com/payments/newsroom/jpm-coin-live-on-ethereum) (JPMD deposit token) expands to mainnet for institutional clients  
* EthSystems: [Glamsterdam & Hegotá upgrades](https://ethsystems.org/writeups/ethereum-upgrades-past-future-and-coming-soon/), impact for bank treasuries, financial market infrastructure, custodians, transfer agents, stablecoin issuers & staking providers

### Applications

* [Privacy Pools v2](https://0xbow.io/blog/privacy-pools-v2-is-live) live on mainnet, Arbitrum, Base, OP Mainnet & Robinhood Chain, adds private transfers, swaps, payment requests & earn yield  
* Uniswap [Aggregator hooks](https://blog.uniswap.org/aggregator-hooks-are-now-live) live on mainnet, Base & Robinhood Chain, wrap external liquidity sources as v4 pools  
* [Aero](https://www.aero.xyz/articles/aero-launches-today/) (DEX): Aerodrome (Base) & Velodrome (OP Mainnet) merged, expansion includes mainnet, Arbitrum, Robinhood Chain & Ink  
* Etherscan [lookalike address warning](https://x.com/etherscan/status/2113596577797619715) to flag address poisoning scams, beta

### Developers

* Argot Collective [Solidity 0.8.38](https://www.soliditylang.org/blog/2026/10/22/solidity-0.8.38-release-announcement/) (language): fixes low severity [Yul optimizer knowledge base stale bookkeeping](https://www.soliditylang.org/blog/2026/10/22/yul-optimizer-knowledge-base-stale-bookkeeping-bug/) bug (affects 0.8.19 \- 0.8.37), faster compilation with Yul optimizer enabled & compiler warning for using swapn, dupn or exchange as identifiers in Yul or inline assembly ahead of Amsterdam EVM version  
* Nomic Foundation [Hardhat v3.21.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.21.0) (dev framework): expands experimental [Glamsterdam upgrade support](https://hardhat.org/docs/reference/amsterdam-support) (adds EIP7954 increase maximum contract size); \[Note: uses Amsterdam EVM version on (postponed) Hoodi testnet forks\]  
* Nikita Kolmogorov [plain](https://getplain.org) (dev framework): fast compile, test & deploy loop; recompiles & reruns only edited tests, large test files compiled in parallel; supports Foundry projects  
* [OpenZeppelin x Chainlink](https://www.openzeppelin.com/news/openzeppelin-partners-with-chainlink-to-advance-onchain-finance): adds crosschain interoperability protocol (CCIP) & automated compliance engine (ACE) to OpenZeppelin Contracts Wizard, MCP server & skills  
* EthSystems: [private money market fund](https://ethsystems.org/writeups/building-private-money-market-funds-on-ethereum/), shielded pool holds token, each position is encrypted note visible to transfer agent, proof of concept  
* Wei Han Ng [chibi](https://github.com/weiihann/chibi#readme) (partial stateful node): local RPC, syncs & proves state used, updates via block level access lists, supports Sepolia testnet  
* Application layer standards (ERCs):  
  * [ERC8446](https://github.com/ethereum/ERCs/pull/2078/changes): Crosschain client gateway for CCIP-Read  
  * [ERC8447](https://github.com/ethereum/ERCs/pull/2081/changes): Swarm AI framework  
  * [ERC8448](https://github.com/ethereum/ERCs/pull/2082/changes): Agent service order amendments  
  * [ERC8451](https://github.com/ethereum/ERCs/pull/2084/changes): Permanent locks for lockable tokens  
  * [ERC8454](https://github.com/ethereum/ERCs/pull/2095/changes): AIFi unit framework

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#248](https://forkcast.org/calls/acde/248/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * ChainSecurity: [potential security issues](https://docs.google.com/presentation/d/1HWEKDTWvdXImTs8kkjfpfkwGByDlpxgjCdvXPfjOYJk/edit) presentation, [gas repricing changes assumptions](https://www.chainsecurity.com/blog/glamsterdam-gas/), 13 DeFi projects identified  
  * Impact to be analyzed & decide if spec changes required  
  * Glamsterdam on Hoodi testnet postponed & mainnet likely delayed until 2027  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Nixo (EthCoordinate): [execution layer Considered for Inclusion EIP priority list](https://gist.github.com/nixorokish/1f17a8527d18fcc8d10370c9c1b5583e)  
  * Discussed Considered for Inclusion (CFI) doesn’t guarantee shipping  
  * bogota-devnet-2: planned for next week, adds [EIP8253](https://forkcast.org/eips/8253/) bump nonce of zero nonce storage accounts, [EIP4758](https://forkcast.org/eips/4758/) deactivate SELFDESTRUCT, [EIP8298](https://forkcast.org/eips/8298/) SETCODEFROM & [EIP8151](https://forkcast.org/eips/8151/) account code restricted ecRecover  
  * hegota-devnet-0 (combined execution & consensus layer devnet): planned for after Devcon  
  * Next ACDE in 4 weeks due to Devcon

#### All core devs \- testing (ACDT) [\#101](https://forkcast.org/calls/acdt/101/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/101/?breakout=cl)

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * [Ephemery testnet](https://x.com/TMIYChao/status/2113391523328827399) activated Glamsterdam  
  * Terence (Prysm): [Glamsterdam scaling results on Sepolia](https://terencechain.com/writing/glamsterdam-scaling-results-ten-days-in/) testnet  
* [Hegotá](https://forkcast.org/upgrade/hegota/) (Heze \+ Bogotá) upgrade (targeting 2027):  
  * [heze-devnet-2](https://forkcast.org/networks/heze-devnet-2/) live, adds EIP8015 remove deposit & eth1data fields and EIP8365 disallow new 0x00 validators  
  * [heze-devnet-3](https://forkcast.org/networks/heze-devnet-3/) live, adds EIP8198 quick slots (9 seconds)  
  * Frame transaction breakout [\#7](https://forkcast.org/calls/aa/007/)  
* I\* upgrade:  
  * Carlos Perez (EF): [partitioned binary tree migration tested](https://x.com/CPerezz19/status/2113273924494504222) on devnet with 2TB disk & 16GB RAM  
* Francesco (Ethlabs): [fast confirmation rule (FCR) formally verified](https://x.com/fradamt/status/2111125999836348498) in Lean, model used to find & fix Glamsterdam fork choice spec bug  
* Derek Chiang (Ethlabs): [visualization of EIP8288](https://x.com/decentrek/status/2112535053188145367) (in transaction pool signature & proof aggregation)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8445](https://forkcast.org/eips/8445/): Common computational gas scaling factor  
  * [EIP8449](https://forkcast.org/eips/8449/): Engine API proposal lookahead  
  * [EIP8450](https://forkcast.org/eips/8450/): Post quantum validator key registry  
  * [EIP8452](https://forkcast.org/eips/8452/): Jump & call tables for the EVM  
  * [EIP8453](https://forkcast.org/eips/8453/): Decoupled consensus

### Research

* Csaba Király (EF): [SEACAST](https://ethresear.ch/t/seacast-fast-lean-broadcast-for-ethereum-with-an-executable-spec-and-a-formal-model/26167) (segmented encoded availability sampled broadcast), faster & lighter than gossipsub & ECBroadcast  
* Pierre (EF): [Tornado Cash ported to Flock](https://ethresear.ch/t/faster-aggregatable-and-quantum-safe-privacy-pools/26163) (post quantum binary field SNARK) with 30ms proving time & recovery protocol that lets existing pools survive discrete log break

### Staking

* [Client diversity](https://clientdiversity.org/#distribution): Consensus layer: Lighthouse \~50% (data may not be accurate)  
* [Validators](https://pectrified.com/mainnet): 820k active (target 128k), 24k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.50.1](https://github.com/ChainSafe/lodestar/releases/tag/v1.50.1) (critical): postpones Glamsterdam on Hoodi, mitigates eMudhra certificate authority compromise  
    * Consensys [Teku 26.10.2](https://github.com/Consensys-Incorporated/teku/releases/tag/26.10.2) (Hoodi operators): postpones Glamsterdam  
    * Offchain [Prysm v7.3.1](https://github.com/OffchainLabs/prysm/releases/tag/v7.3.1) (Hoodi operators): postpones Glamsterdam  
    * Sigma Prime [Lighthouse v8.3.2](https://github.com/sigp/lighthouse/releases/tag/v8.3.2) (Hoodi operators): postpones Glamsterdam; [Lighthouse v8.3.1](https://github.com/sigp/lighthouse/releases/tag/v8.3.1) (high): mitigates eMudhra certificate authority compromise; [Lighthouse v8.3.0](https://github.com/sigp/lighthouse/releases/tag/v8.3.0) (recommended): adds fast confirmation rule (FCR) & partial data columns by default  
    * Status [Nimbus v26.10.2](https://github.com/status-im/nimbus-eth2/releases/tag/v26.10.2) (Hoodi operators): postpones Glamsterdam & mitigates eMudhra certificate authority compromise  
  * Execution layer:  
    * [Besu 26.10.1](https://github.com/besu-eth/besu/releases/tag/26.10.1) (Hoodi operators): postpones Glamsterdam  
    * EF [Geth v1.17.10](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.10) (Hoodi operators): postpones Glamsterdam  
    * Lambda [ethrex v30.0.1](https://github.com/lambdaclass/ethrex/releases/tag/v30.0.1) (Hoodi operators): postpones Glamsterdam  
    * [Nethermind 2.2.1](https://github.com/NethermindEth/nethermind/releases/tag/2.2.1) (Hoodi operators): postpones Glamsterdam  
    * Paradigm [Reth v2.8.1](https://github.com/paradigmxyz/reth/releases/tag/v2.8.1) (Hoodi operators): postpones Glamsterdam

### Regulation

* US Office of the Comptroller of the Currency (OCC): [GENIUS Act final rule](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-92.html), drops proposed presumption against stablecoin rewards via third parties  
* Türkiye Minister of Justice: [Richard Heart (Hex founder) detained in Istanbul](https://x.com/abakingurlek/status/2111340326115831858)

### General

* Security disclosures: [eMudhra intermediate certificate authority](https://emudhra.com/en/post/certificate-security-incident) weak keys ([test if trusting](https://emudhra.we-have-a-problem.com)), [PHP](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) remote code execution vulnerabilities patched, [Node.js](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) security releases, [GitLab](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/) critical patch & [Railway](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) environment variables potentially accessed  
* Anthropic:  
  * [LLMs can produce formal proofs at large scale](https://www.anthropic.com/research/formal-verification) at assembly code level  
  * [NIST P-curve seeds origin found](https://www.anthropic.com/research/ecdsa-curve-origins), output of random number generator seeded with Unix timestamp, increases confidence curves don’t have deliberate backdoors  
* Austin Griffith: [Wedgie](https://wedgie.dev) (hardware wallet), Safe signer, consists of Pico, screen hat, secure chip & 3D printed case; build your own or buy

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-44/](https://ethereal.news/ethereal-news-weekly-44/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-44.md](https://ethereal.news/ethereal-news-weekly-44.md)*  

---