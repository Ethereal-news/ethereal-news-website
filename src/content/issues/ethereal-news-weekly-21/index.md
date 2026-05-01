---
title: 'Ethereal news weekly #21'
description: 'DeFi United technical implementation plan to restore rsETH backing, Solidity 0.8.35, Status Network merging into Linea stack'
date: 'May 1, 2026'
---

DeFi United technical implementation plan to restore rsETH backing, Solidity 0.8.35, Status Network merging into Linea stack

### Ecosystem

* Ethereum Foundation:  
  * Ethereum Protocol Fellowship [cohort 7](https://blog.ethereum.org/en/2026/04/30/epf-7): for developers aspiring to work on the protocol, clients, research & tooling; June \- mid November, apply by May 13  
  * EF Ecosystem Support Program [Q1 allocations](https://blog.ethereum.org/2026/04/29/allocation-q1-26), 57 projects shared $9.9M  
  * [EF sold 10k ETH to Bitmine](https://x.com/ethereumfndn/status/2047685166966161659) for average price of $2,387  
* William Mougayar: [Ethereum page](https://ethereumpage.com/), covers EF resources, community knowledge bases, white papers & teams building  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 1 average, 0.1 \- 15 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 18k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,232 \- $2,395 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.030 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* [Visa global stablecoin settlement pilot](https://investor.visa.com/news/news-details/2026/Visa-Accelerates-Stablecoin-Momentum-Adding-Five-Blockchains-for-Settlement/default.aspx) adding Base  
* [Coinbase Asset Management](https://www.coinbase.com/en-au/blog/coinbase-asset-management-launches-digital-credit-strategy-with-tokenized-shareclass) launching digital credit strategy on mainnet & Base

### Applications

* DeFi United (effort to restore rsETH backing): [technical implementation plan](https://x.com/aave/status/2048958367658332413)  
  * Kelp [bridging changes](https://x.com/KelpDAO/status/2049499708406800777): 4/4 DVN (Decentralized Verifier Networks) setup, block confirmations raised to 64 (from 42\) & L2 to L2 routes deprecated  
* [Synthetix](https://x.com/synthetix/status/2048902511386636778) open to the public, live on mainnet  
* Etherscan [hide low value transactions](https://x.com/etherscan/status/2049090067717865689) (under $0.01), beta  
* [NeoMist](https://neomist.eth.link) (desktop app): browse .eth/.wei sites, macOS & Linux, uses Helios light client & local IPFS node/proxy  
* Reminder: [check when your ENS names expire](https://x.com/katherinewu/status/2048934957901300011)  
* [Forgotten ETH](https://forgotteneth.com/): check for reclaimable ETH on old DEXes, NFTs, ICO escrows, ENS deed deposits & DAO refunds   
* [Ethereum Applications Guild](https://x.com/EthAppsGuild/status/2049386706403725749): organization to support application ecosystem, funded by membership & staking reward contributions

### Developers

* Solidity [0.8.35](https://www.soliditylang.org/blog/2026/04/29/solidity-0.8.35-release-announcement/) (language): adds erc7201 (first comptime builtin), experimental flag to enable in-development features, experimental SSA-form control-flow graph code generator (address stack too deep & compilation speed in IR pipeline long term) and deprecation warnings for upcoming Solidity 0.9.0 keywords  
* Fe [v26.1.0](https://github.com/argotorg/fe/releases/tag/v26.1.0) (language): adds compile-time assertions, Solidity compatible errors & panics and expands const fn evaluation  
* Plank [v0.1](https://github.com/plankevm/plank-monorepo/releases/tag/v0.1.0) (language): compiler, if/while control flow, variables/functions, modules/imports, compile time evaluation, reflection/type introspection and Sensei IR  
* Foundry (dev framework):  
  * Foundry [v1.7.0](https://github.com/foundry-rs/foundry/releases/tag/v1.7.0): parallelized stateless fuzzing, invariant optimization mode, Osaka default EVM version, browser wallet support for forge & cast and immutable releases  
  * forge-std [v1.16.1](https://github.com/foundry-rs/forge-std/releases/tag/v1.16.1) (helpers): supports Solidity 0.8.35, changed error to err to avoid compiler warnings for upcoming keywords   
* [Extruder](https://github.com/stompgg/extruder#readme) (transpiler): convert Solidity into TypeScript, experimental  
* [Recursive calldata decoder](https://recdec.eth.limo): supports multicalls, batched transactions & nested calls  
* Walletbeat: [wallet test playground](https://beta.walletbeat.eth.limo/test/)  
* Application layer standards (ERCs):  
  * [ERC8241](https://github.com/ethereum/ERCs/pull/1706/changes): Protocol control disclosure  
  * [ERC8242](https://github.com/ethereum/ERCs/pull/1634/changes): H3 spatial identity extension for onchain agents  
  * [ERC8244](https://github.com/ethereum/ERCs/pull/1712/changes): Contract-hosted application HTML  
  * [ERC8245](https://github.com/ethereum/ERCs/pull/1713/changes): Permissioned vault registrar

### Agents

* Circle Gateway [nanopayments](https://www.circle.com/blog/nanopayments-powered-by-circle-gateway-is-now-live-on-mainnet): gas free USDC transfers, live on mainnet & select L2s  
* OKX [agent payments protocol](https://x.com/okx/status/2049488929448218760): quoting, escrow, metering, settlement & dispute handling

### Security

* Wasabi Protocol \~[$5.5M exploit](https://x.com/peckshield/status/2049808660033892813) via compromised deployer key  
* Syndicate \~[$380k exploit](https://x.com/syndicateio/status/2049866027106963905), two bridge contracts upgraded via compromised private key

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [bal-devnet-6](https://bal-devnet-6.ethpandaops.io/): launched  
* Ethereum improvement proposals (EIPs):  
  * [EIP8243](https://github.com/ethereum/EIPs/pull/11589/changes): Batching attestations at source

### Staking

* [ethsync](https://ethsync.wtf/): sync committee visualization & light client verification  
* [eth-valctl](https://github.com/telekom-mms/eth-valctl#readme): CLI for managing validators via execution layer requests   
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 22.4% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 905k active ([target 128k](https://x.com/EFprotocol/status/2048763852771168379)), 12k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Erigon v3.4.0](https://erigon.tech/blog/erigon-3-4-built-for-production-stability/): chaindata 4x smaller, faster startup, new RPC methods, more resilient consensus layer & native MCP server  
    * [Nethermind 1.37.1](https://github.com/NethermindEth/nethermind/releases/tag/1.37.1): Flat DB opt-in, RocksDB snapshots, Block-level Access Lists, zkEVM groundwork, eth/69 default & eth/70  
    * Paradigm [Reth v2.2.0](https://github.com/paradigmxyz/reth/releases/tag/v2.2.0) (medium): Block-level Access Lists groundwork, Discv5 enabled by default, adds snap/2 wire helpers & bounds P2P transaction manager memory footprint

### Layer 2

* [Status Network](https://x.com/StatusL2/status/2049919772846944420) merging into Linea stack, not launching as standalone L2, gasless execution planned as optional feature on Linea stack  
* Sunnyside Labs [privacy boost](https://www.privacyboost.io/resources/blog/privacy-boost-startale-soneium) live on Soneium (OP Stack), Startale app integration targeting June  
* L2Beat [Stage 1 minimum challenge period](https://forum.l2beat.com/t/stage-1-update-minimum-challenge-period-reduction-from-7d-to-5d/425) for optimistic rollups changing to 5 days (previously 7 days)

### Regulation

* [SBF](https://storage.courtlistener.com/recap/gov.uscourts.nysd.590939/gov.uscourts.nysd.590939.595.0.pdf) motion for a new trial denied

### General

* Security Alliance (SEAL): [beware cold reachouts](https://radar.securityalliance.org/beware-of-cold-reachouts-infostealer-malware-campaigns-targeting-crypto/), malware campaigns targeting crypto   
* [Protocol Institute](https://protocolized.summerofprotocols.com/p/introducing-the-protocol-institute): successor to Summer of Protocols

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-21/](https://ethereal.news/ethereal-news-weekly-21/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-21.md](https://ethereal.news/ethereal-news-weekly-21.md)*  

---
 