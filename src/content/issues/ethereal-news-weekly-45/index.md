---
title: 'Ethereal news weekly #45'
description: 'Devcon 8 app, ENSv2 live on mainnet, Gattaca Silver consensus layer client'
date: 'October 30, 2026'
---

*Devcon 8 app, ENSv2 live on mainnet, Gattaca Silver consensus layer client*

### Ecosystem

* Devcon 8 [app](https://app.devcon.org): schedule (plan with your AI), speakers & map  
* Ethlabs:  
  * Derek Chiang (week 18 update): [agents scanned for affected projects](https://ethlabs.org/updates/week-18.html) by Glamsterdam EIP8037 gas repricing & Hegotá EIP8198 quick slots   
  * [Funding](https://x.com/ethlabs_org/status/2115549643505291274): Mihai Alisie (Ethereum cofounder) joins as additional anchor funder  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 1.3 average, 0 \- 252.8 (13.6 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122.2M, 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): \$2,179 \- \$2,414 (all time high \$4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.com)

![MetaMask Agent Wallet + Grok Bot](./metamask-agent-wallet-grok-bot.avif) 

**MetaMask Agent Wallet is now live on Grok Bot**

Every trade Grok Bot sends through Agent Wallet is simulated and threat-scanned first, and Guard Mode adds a 24-hour outflow limit you set.

[MetaMask Agent Wallet live on Grok Bot](https://metamask.com/news/metamask-agent-wallet-grok-bot)  

---

### Enterprise

* Depository Trust & Clearing Corporation [tokenization service](https://www.dtcc.com/press-releases/2026/dtcc-tokenization-service-goes-live) live, integrations include DTCC private Besu network, additional networks to be added in 2027  
* Google Cloud [multiparty compute](https://x.com/nalin/status/2115524632694694181) for crypto custody, preview

### Applications

* [ENSv2](https://ens.domains/blog/post/ensv2-live-on-mainnet) live on mainnet, adds hierarchical registries & more precise permissions  
  * [ENS App](https://app.ens.domains): register, renew & upgrade names and customize profile  
  * [ENS Explorer](https://explorer.ens.domains): view history, manage config (resolution, records, resolver, ownership, roles, subnames & registry)  
  * [Mint commemorative NFT](https://ens.domains/blog/post/ensv2-commemorative-nft-collection) after upgrading all eligible names  
* Gwei names: [default site](https://x.com/donnoh_eth/status/2114351817156931979) for each name, publish blogs in blobs  
* Splits [pro & premium tiers](https://splits.org/blog/launching-splits-pro-premium/), minimum deposit in Splits Earn or pay annual subscription  
* Uniswap Labs [TJAR](https://blog.uniswap.org/tjar-onchain-fee-conversion-for-any-app) (Token Jar): convert fees into selected token

### Developers

* Argot Collective Fe (language):  
  * [Fe 26.5.0](https://blog.fe-lang.org/posts/release-26-5/): borrow checker replaced with mutable value semantics, adds closures, tuple structs, unsafe blocks, const where predicates, typed ETH amounts & timestamps, Solidity compatible storage layouts and expands standard library  
  * [Fe builders challenge](https://blog.fe-lang.org/posts/fe-builders-challenge/): \$5k in prizes, November 3 \- 24  
* Remix (IDE) [collaborative workspaces](https://ethereumremix.substack.com/p/collaborative-workspaces-now-in-remix) using Swarm, beta  
* [EthLib](https://github.com/ethereum/EthLib#readme): formally verified primitives, written in Lean, BLS12-381 signatures, KZG polynomial commitments, XMSS signatures & MODEXP precompile  
* EthSystems: [formally verifying a shielded pool](https://ethsystems.org/writeups/formally-verifying-a-shielded-pool-from-spec-to-bytecode/)  
* Aztec [Noir 1.0](https://aztec.network/blog/noir-1-0-is-live) (language): stable language, versioned toolchain, stable intermediate representation, security reviewed compiler & clearer safety boundaries  
* BuidlGuidl [Solidity CTF](https://ctf-mumbai.buidlguidl.com) at Devcon November 3, 12 challenges in 1 hour, BYO agent  
* Application layer standards (ERCs):  
  * [ERC8458](https://github.com/ethereum/ERCs/pull/2102/changes): Agent income statements  
  * [ERC8459](https://github.com/ethereum/ERCs/pull/2103/changes): Creator fee rights  
  * [ERC8460](https://github.com/ethereum/ERCs/pull/2104/changes): Agent credit lines  
  * [ERC8461](https://github.com/ethereum/ERCs/pull/2105/changes): Agent default registry  
  * [ERC8462](https://github.com/ethereum/ERCs/pull/2106/changes): Token launch declarations  
  * [ERC8463](https://github.com/ethereum/ERCs/pull/2107/changes): Pool liquidity locks  
  * [ERC8464](https://github.com/ethereum/ERCs/pull/2108/changes): Agent repay first payees  
  * [ERC8465](https://github.com/ethereum/ERCs/pull/2109/changes): Credit matched liquidity  
  * [ERC8466](https://github.com/ethereum/ERCs/pull/2110/changes): Agent credit history  
  * [ERC8467](https://github.com/ethereum/ERCs/pull/2111/changes): Agent credit backers  
  * [ERC8468](https://github.com/ethereum/ERCs/pull/2113/changes): Agent safety framework  
  * [ERC8469](https://github.com/ethereum/ERCs/pull/2114/changes): Sealed bid award mechanism for task tenders  
  * [ERC8470](https://github.com/ethereum/ERCs/pull/2121/changes): Token launch observations  
  * [ERC8471](https://github.com/ethereum/ERCs/pull/2123/changes): AI dispute resolution framework  
  * [ERC8472](https://github.com/ethereum/ERCs/pull/2126/changes): Stock locates  
  * [ERC8473](https://github.com/ethereum/ERCs/pull/2128/changes): uRWA policy  
  * [ERC8474](https://github.com/ethereum/ERCs/pull/2129/changes): ERC20 delayed unlock  
  * [ERC8475](https://github.com/ethereum/ERCs/pull/2130/changes): ERC20 outgoing window limits

### Security

* Swell [swETH & rswETH incident](https://x.com/swellnetworkio/status/2115793864460304610), compromised bot key inflated exchange rates  
* zkLink Nova (Layer 3\) [arbitrator contract exploit](https://x.com/zkLink_Official/status/2115792847098216545) on mainnet & Optimism, block production suspended

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#190](https://forkcast.org/calls/acdc/190/)

* ACDC facilitator: Alex Stokes stepping down, Ben Edgington taking over as lead, Will Corcoran as deputy  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Scoping finished for consensus layer  
  * 1 EIP [Scheduled for Inclusion](https://forkcast.org/upgrade/hegota/#scheduled-for-inclusion) (SFI):  
    * [EIP8015](https://forkcast.org/eips/8015/) remove deposit & eth1data fields  
  * 4 EIPs [Considered for Inclusion](https://forkcast.org/upgrade/hegota/#considered-for-inclusion) (CFI):  
    * [EIP8334](https://forkcast.org/eips/8334/) bundled attestation propagation  
    * [EIP8383](https://forkcast.org/eips/8383/) reduce CL block retention window  
    * [EIP8148](https://forkcast.org/eips/8148/) custom sweep threshold for validators; [presentation](https://pitch.com/v/eip-8148-vrvenv)  
    * [EIP8411](https://forkcast.org/eips/8411/) fast execution payload broadcast; [presentation](https://drive.proton.me/urls/KNNERK7C8M#1MqkrWx94LGg)  
  * 1 EIP [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * [EIP8205](https://forkcast.org/eips/8205/) withdrawal credentials preregistration, solve via post quantum deposit contract

#### All core devs \- testing (ACDT) [\#102](https://forkcast.org/calls/acdt/102/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade:  
  * Gas repricing investigation: ChainSecurity & Dedaub due to report in 2 weeks  
  * Builder onboarding race condition: fix approved  
* Next ACDT in 2 weeks due to Devcon

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota/) (Heze \+ Bogotá) upgrade (targeting 2027):  
  * [bogota-devnet-2](https://forkcast.org/networks/bogota-devnet-2/) live, adds [EIP8298](https://forkcast.org/eips/8298/) SETCODEFROM, [EIP8151](https://forkcast.org/eips/8151/) account code restricted ecRecover, [EIP4758](https://forkcast.org/eips/4758/) deactivate SELFDESTRUCT & [EIP8253](https://forkcast.org/eips/8253/) bump nonce of zero nonce storage accounts  
  * FOCIL breakout [\#45](https://forkcast.org/calls/focil/045/): hegota-devnet-0 likely after Devcon with FOCIL x Frame transaction interaction  
* Charles Plant St Louis (EF): [staking & oracle feedback](https://ethereum-magicians.org/t/app-layer-input-on-eips-and-the-roadmap-staking-and-oracles/30104) on themes & EIPs that would reduce trust assumptions  
* Ethereum improvement proposals (EIPs):  
  * [EIP8455](https://forkcast.org/eips/8455/): RESERVOIR opcode  
  * [EIP8456](https://forkcast.org/eips/8456/): CALLSTATUS instruction  
  * Informational [EIP8457](https://forkcast.org/eips/8457/): Batched KZG point evaluation via EIP2537

### Staking

* Gattaca [Silver](https://x.com/gattacahq/status/2115835196360569086) consensus layer client, security reviews & final testing remain to be completed, alpha  
* Obol [ValidatorBeat](https://blog.obol.org/validator-beat/): self assess key custody, client diversity, provider diversity, OS diversity, CPU architecture & geographic diversity, placed into Stages 0 \- 2  
* [Lido 0x02 CSM](https://blog.lido.fi/introducing-0x02-csm-a-permissionless-path-to-running-higher-balance-validators/) live, adds accumulating (0x02 withdrawal credentials) validator support to community staking module  
* [Client diversity](https://clientdiversity.org/#distribution): Consensus layer: Lighthouse \~49% (data may not be accurate)  
* [Validators](https://pectrified.com/mainnet): 815k active (target 128k), 24k accumulating (43% of active ETH)  
* Client releases:  
  * Consensus layer:  
    * Consensys [Teku 26.10.3](https://github.com/Consensys-Incorporated/teku/releases/tag/26.10.3) (recommended): mitigates eMudhra certificate authority compromise on Docker ([security advisory](https://hackmd.io/@teku/S1DCreh2Ge)), default mainnet nodes (no https in config) need no action  
  * Execution layer:  
    * [Besu 26.10.2](https://github.com/besu-eth/besu/releases/tag/26.10.2): mitigates eMudhra certificate authority compromise on Docker ([incident report](https://github.com/besu-eth/besu/wiki/Incident-Report-2026-10-26-eMudhra-CA-Compromise)), default nodes (no TLS options or https in config) need no action, check/remediate if using own distribution or vendor JDK  
    * [Erigon v3.8.1](https://github.com/erigontech/erigon/releases/tag/v3.8.1) (recommended): improves block validation, validator reliability & block production  
    * [Nethermind 2.2.2](https://github.com/NethermindEth/nethermind/releases/tag/2.2.2): adds [Microsoft .NET security updates](https://devblogs.microsoft.com/dotnet/dotnet-october-2026-oob-security-updates/)  
    * Paradigm [Reth v2.9.0](https://github.com/paradigmxyz/reth/releases/tag/v2.9.0) (medium priority): replaces revm with evm2 for \~10% faster block execution, no config change for node operators, breaking change for SDK users

### Layer 2

* Miden [partner mainnet](https://www.miden.xyz/blog/practical-privacy-goes-live-miden-partner-mainnet-opens), invite only, temporary network (reset before public mainnet)

### Regulation

* Canada Department of Finance: [proposed stablecoin regulations](https://x.com/FinanceCanada/status/2113697307346534813), reserves at least one to one, redemption fees capped at 1%, no yield for holding, 60 day comment period

### General

* Binance (CEX) [\$6.3B security incident](https://www.binance.com/en/support/announcement/detail/c5a8729a97ac486d963784d96c5642d7), will cover losses, \~\$3B frozen so far, investigation ongoing  
  * [Arbitrum security council](https://x.com/arbitrum/status/2115961730920841644) froze \~\$30M in ARB & ETH, [Circle](https://x.com/jerallaire/status/2115916207463481846) froze \~\$800M USDC & [Tether](https://x.com/paoloardoino/status/2115918000373346709) froze \~\$1.6B USDT  
* Hardware wallets:  
  * [Keystone](https://x.com/KeystoneWallet/status/2114719318722404578): 26k buyer records, 13k unpaid checkout records & device authentication key exposed; devices received using old authentication key after October 20 should follow instructions for additional verification  
  * [Trezor](https://trezor.io/blog/news/implant-reported-in-a-trezor-sold-by-cryptobilis): implant reported in Trezor Safe 5 purchased from CryptoBilis; purchasers from CryptoBilis since March should secure funds as a precaution  
* OpenAI [Exponential Time Hypothesis proved false](https://openai.com/index/building-scientific-understanding-with-academic-communities/)

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-45/](https://ethereal.news/ethereal-news-weekly-45/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-45.md](https://ethereal.news/ethereal-news-weekly-45.md)*  

---
