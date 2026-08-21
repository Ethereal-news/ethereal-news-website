---
title: 'Ethereal news weekly #36'
description: 'US SEC Regulation Crypto Assets proposed rules, Glamsterdam upgrade on public testnets proposed for late September & October, focil-devnet-0 targeting August 31'
date: 'August 21, 2026'
---

*US SEC Regulation Crypto Assets proposed rules, Glamsterdam upgrade on public testnets proposed for late September & October, focil-devnet-0 targeting August 31*

### Ecosystem

* Ethereum Foundation:  
  * EF Formal Verification [better.codes](https://blog.ethereum.org/en/2026/08/20/better-codes-challenge): autoresearch challenge raising proven lower bound for koalaIRS12 to 128 bits, to advance hash based SNARKs  
  * EF Ecosystem Support Program [Q2 allocations](https://blog.ethereum.org/en/2026/08/18/allocation-q2-26), 70 projects shared $5.5M; ZK proofs, client diversity, formal verification, tooling & internship program  
* Ethlabs (R\&D lab): [Binji](https://x.com/binji_x/status/2090112863746642176) (ex-EF) joined as founding member  
* Devcon 8:  
  * Reminder: [community hub applications](https://forum.devcon.org/t/rfp-13-devcon-8-india-community-hubs/8657) deadline August 26  
  * [Student discounted ticket applications](https://x.com/EFDevcon/status/2088469227040624921) extended to September 30  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0 \- 11.0 (13.3 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money): 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,868 \- $2,444 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Enterprise

* [Neuberger Securitize high income tokenized fund](https://securitize.io/learn/press/securitize-and-neuberger-launch-hinc) (HINC): investing in high yield bonds, collateralized loan obligations & leveraged loans; launch includes Ethereum

### Applications

* [Osero app](https://x.com/OseroHQ/status/2089713996836598017) live: stablecoin yield via Sky Savings Rate  
* Joseph Delong [Deepstate](https://deepstate.sh/docs) (central limit order book) live on Robinhood Chain, launch market NVDA/USDG, experimental  
* Ross [zSwap](https://x.com/z0r0zzz/status/2088272306623975506) (meta DEX) live on mainnet  
* The Interfold (formerly Enclave) [Network Alpha](https://blog.theinterfold.com/network-alpha-mainnet/) (confidential coordination), committees support up to 19 ciphernodes with threshold of 9  
* [Farcaster, Clanker & Neynar](https://x.com/rish_neynar/status/2089417144861688052) seek new home

### Developers

* EthereumJS [10.1.3](https://github.com/ethereumjs/ethereumjs-monorepo/releases/tag/%40ethereumjs/common%4010.1.3) (libraries): experimental Glamsterdam support updated to glamsterdam-devnet-8 spec  
* Ronan Sandford [webevm](https://github.com/wighawag/webevm/#readme) (execution only browser node): EthereumJS (default) or revm (optional)  
* Kassandra kohaku-cli (privacy focused terminal wallet) [onboarding guide](https://kohaku.gwei.domains)  
* Poidh (pics or it didn’t happen) [POIDHverse React app](https://www.acgk.dev/blog/ethereum-render-this) stored onchain over 24 contracts  
* Wintermute [Alpha Challenge](https://alpha.wintermute.com): 8 self paced case studies, no 2026 leaderboard due to LLMs brute forcing solutions & trained on historical incidents  
* Remix AI bootcamp [top projects](https://x.com/EthereumRemix/status/2090482009214775551)  
* Application layer standards (ERCs):  
  * [ERC8380](https://github.com/ethereum/ERCs/pull/1953/changes): Unclonable agent execution credentials  
  * [ERC8381](https://github.com/ethereum/ERCs/pull/1954/changes): AI agent security framework for DeFi  
  * [ERC8382](https://github.com/ethereum/ERCs/pull/1955/changes): Private referable NFTs

### Security

* AI:  
  * Sherlock [Audit Engine](https://sherlock.xyz/post/why-we-built-sherlock-audit-engine) (orchestration) live; combines LLMs, purpose built AI security researchers & AI assisted human security researchers; findings verified & deduplicated  
  * V12 (security agent) used to find [Rabby wallet unlock resolved approval](https://x.com/v12sec/status/2090114226320977931), vulnerability patched, no exploits detected  
  * yAudit yAgent (security agent) used to find [NFT marketplace pricing model vulnerability](https://x.com/yAuditDAO/status/2089689292331184579)  
* Coinspect Security [Unlukey](https://unlukey.org), check public address for seed generation vulnerabilities, Coldcard (firmware used software PRNG) & Ill Bloom (CryptoJS)

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#185](https://forkcast.org/calls/acdc/185)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * [Platåberget](https://blog.ethereum.org/en/2026/08/17/plataberget-testnet) (glamsterdam-devnet-8): Glamsterdam upgrade activated, builder deposit caching issue at upgrade transition caused non-finality  
  * Non-finality devnet: targeting week after next, \~1000 nodes  
  * Public testnets: proposal to upgrade Sepolia September 28 & Hoodi October 26  
  * Declined for Inclusion: [EIP7610](https://forkcast.org/eips/7610/) revert creation in case of non empty storage, superseded by [EIP8253](https://forkcast.org/eips/8253/) bump nonce of zero nonce storage accounts (already Proposed for Inclusion in Hegotá)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (client preferences due mid September):  
    * Cayman Nava (Lodestar): [presentation](https://gist.github.com/lodekeeper/ab3164dc62c81f2d172ae7ce0f0d2c55) for [EIP8333](https://forkcast.org/eips/8333/) align checkpoint with epoch boundary block  
    * Dustin Brody (Nimbus): [EIP8379](https://forkcast.org/eips/8379/) top up sync  
    * Kev Wedderburn (EF): [EIP8383](https://forkcast.org/eips/8383/) reduce CL block retention window

#### All core devs \- testing (ACDT) [\#92](https://forkcast.org/calls/acdt/092/)

### Layer 1

* consensus-specs [v1.7.0-alpha.14](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.14)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (67 EIPs):  
    * EF Protocol Architecture: [Hegotá preferences](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876/7)  
    * Ethlabs (R\&D lab): [Hegotá preferences](https://ethlabs.org/writings/hegota-view.html)  
    * [Forkcast tier maker](https://forkcast.org/rank/): create EIP ranking, share on [Eth Magicians](https://ethereum-magicians.org/t/eip-8081-hegota-network-upgrade-meta-thread/26876)  
  * FOCIL breakout [\#40](https://x.com/jih2nn/status/2090027687343694203), focil-devnet-0 ([spec](https://notes.ethereum.org/@ethpandaops/focil-devnet-0)) targeting August 31  
* [ZisK v1.1.0-alpha](https://x.com/ziskvm/status/2089645436806078570) (proving): 4 x 5090 GPUs with p99 of 9.62s  
* Ethproofs call [\#10](https://www.youtube.com/watch?v=m2Jf2lLHfG0): focused on binary fields  
* Ethereum improvement proposals (EIPs):  
  * [EIP8383](https://forkcast.org/eips/8383/): Reduce CL block retention window  
  * [EIP8384](https://github.com/ethereum/EIPs/pull/12207/changes): Deterministic sync committee aggregators  
  * [EIP8386](https://github.com/ethereum/EIPs/pull/12218/changes): Transaction events view  
  * [EIP8387](https://github.com/ethereum/EIPs/pull/12221/changes): Stateless accounts  
  * [EIP8389](https://github.com/ethereum/EIPs/pull/12222/changes): Keystore signatures for execution txs

### Research

* Benedikt Wagner (EF): [formally verified security for PQ DAS](https://ethresear.ch/t/formally-verified-security-for-pq-das-leanda/25746) (leanDA)

### Staking

* EthCoordinate [staker console](https://x.com/EthCoordinate/status/2089382998353612847) live on Hoodi testnet, mid security review, adds batch deposits & top ups, simpler consolidation & withdrawal flow and support for WalletConnect & offline wallets  
* [Obol Charon & Nethermind Pluto](https://blog.obol.org/two-dv-clients/), 4 node Distributed Validator cluster running on Hoodi testnet  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 902k active (target 128k), 18k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * Sigma Prime [Lighthouse v8.2.2](https://github.com/sigp/lighthouse/releases/tag/v8.2.2) (high): fixes security vulnerabilities  
  * Execution layer:  
    * LF Decentralized Trust [Besu 26.8.0](https://github.com/besu-eth/besu/releases/tag/26.8.0): fixes security vulnerabilities, adds cap for snap requests & cap for DiscV4 inbound packets  
    * Paradigm [Reth v2.5.1](https://github.com/paradigmxyz/reth/releases/tag/v2.5.1) (medium): finalizes pending payload builds when resolved early & handles whole storage trie wipes during batched persistence

### Layer 2

* Arbitrum [ArbOS 61 Elara](https://blog.arbitrum.io/arbos-elara/) upgrade live:  
  * Arbitrum One: base fee tuning (Offchain can adjust within 0.01 \- 0.10 gwei) & Stylus contract capacity increased to 96KB   
  * Dedicated blockchains: protocol level compliance filtering, priority fee support & alternative data API  
* GnosisDAO [voted to transition Gnosis Chain from L1 to Ethereum Economic Zone](https://x.com/gnosis_/status/2090066285510217779) (ZK rollup), sunsetting validator set & targeting genesis late 2026/early 2027

### Regulation

* US SEC [Regulation Crypto Assets](https://www.sec.gov/newsroom/press-releases/2026-76-sec-proposes-new-regulation-crypto-assets) proposed rules, 60 day comment period: startup exemption (offerings up to $5M over 4 years), fundraising exemption (offerings up to $75M a year, requires financial statements & ongoing reporting), investment contract safe harbor (promised managerial efforts completed/ceased) & qualified purchaser definition (preempt state registration & qualification requirements)

### General

* Vitalik: cryptographic obfuscation protocols (part 3\) [local mixing](https://vitalik.eth.limo/general/2026/08/21/obfuscation_part_iii_local_mixing.html)  
* SafePal (hardware wallet) [order info unauthorized access](https://www.safepal.com/en/blog/security-update) (name, email, address & phone) for orders between March 2 2025 & April 11 2026, 39,798 customers affected  
* [arrayref](https://blog.rust-lang.org/2026/08/20/supply-chain-attack-on-arrayref/) (Rust crate) supply chain attack; [Paradigm open source Rust repos not affected](https://x.com/gakonst/status/2090448987824541864) (Alloy, Foundry, Reth & revm)

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-36/](https://ethereal.news/ethereal-news-weekly-36/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-36.md](https://ethereal.news/ethereal-news-weekly-36.md)*  

---
