---
title: 'Ethereal news mini #0'
description: 'Solidity developer survey results, ether.fi migrated to OP Mainnet, X $ETH cashtag'
date: 'April 17, 2026'
---

Solidity developer survey results, ether.fi migrated to OP Mainnet, X $ETH cashtag

### Ecosystem

* Ethereum Foundation:  
  * [Josh Stark](https://x.com/0xstark/status/2044757694389670239) leaving at end of April & [Trent Van Epps](https://x.com/trent_vanepps/status/2044412517313556786) already left  
* [EthCC](https://ethcc.io/archives?event=EthCC[9]) videos  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 4.9 (12.8 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,179 \- $2,392 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.1% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* Charles Schwab [Schwab Crypto](https://pressroom.aboutschwab.com/press-releases/press-release/2026/Charles-Schwab-Announces-Details-of-Spot-Crypto-Trading-Launch/default.aspx) spot Ether trading

### Applications

* [ether.fi](https://etherfi.medium.com/ether-fi-is-now-on-op-mainnet-37bbb301845e) migrated to OP Mainnet  
* [ENSv2 price increase temp check](https://discuss.ens.domains/t/temp-check-ens-v2-pricing-5-character-name-price-adjustment-multi-year-discounts/22038), $12 per year for 5+ char names & multi-year discounts  
* [Lattice](https://x.com/latticexyz/status/2044103611072835744) winding down, withdraw funds from Redstone by May 15  
* Etherscan (block explorer) [token holders overview](https://x.com/etherscan/status/2044374916607463868), concentration, tier distribution & Gini score; beta  
* EVM Now (block explorer) [open source](https://x.com/evmnow/status/2044400042589511848): contract metadata standard, SDK & dapp UI 

### Developers

* [Solidity developer survey results](https://www.soliditylang.org/blog/2026/04/15/solidity-developer-survey-2025-results/) (1095 responses from 87 countries):  
  * Pain points: 47% stack-too-deep, 33% bytecode size limits & 33% debugging  
  * Dev framework usage: 57% Foundry & 33% Hardhat  
  * Client library usage: 70% ethers.js, 39% viem & 33% wagmi  
  * AI usage: 88% monthly & 58% daily  
* Hardhat [v3.4.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.4.0) (dev framework): NetworkManager new create methods, unified contract & Solidity test compilation, gas stats proxy support and smaller build info output  
* Jtriley [Lattice account hierarchies](https://x.com/jtriley2p/status/2044856486225150186) (Solidity library): composable role authority, composable roles with two-step authority transitions; AGPL-3 license  
* [Uniswap developer platform](https://x.com/Uniswap/status/2044801774809227294): docs site & API dashboard  
* [Speedrun Ethereum](https://x.com/buidlguidl/status/2044836179540131942): Foundry support added for challenges 0 to 4  
* Application layer standards (ERCs):  
  * [ERC8226](https://github.com/ethereum/ERCs/pull/1679/changes): Regulated agent mandate  
  * [ERC8227](https://github.com/ethereum/ERCs/pull/1680/changes): Encrypted token  
  * [ERC8228](https://github.com/ethereum/ERCs/pull/1681/changes): Cryptographic amnesia (provable key destruction)  
  * [ERC8229](https://github.com/ethereum/ERCs/pull/1682/changes): FHE computation verification  
  * [ERC8230](https://github.com/ethereum/ERCs/pull/1683/changes): Self-explanatory contract instruction  
  * [ERC8231](https://github.com/ethereum/ERCs/pull/1684/changes): Post-quantum key registry  
  * [ERC8232](https://github.com/ethereum/ERCs/pull/1685/changes): Onchain agency for represented RWAs  
  * [ERC8233](https://github.com/ethereum/ERCs/pull/1687/changes): Warden \- secure token custody contract  
  * [ERC8234](https://github.com/ethereum/ERCs/pull/1688/changes): Referable NFTs authorization

### Security

* [EF security review subsidy program](https://x.com/ethereumfndn/status/2044071448663244931), $1M in subsidies for mainnet builders  
* [ETH Rangers program](https://blog.ethereum.org/2026/04/16/eth-rangers-recap) recap (funding security public goods): $5.8M recovered, 785 vulnerabilities reported & \~100 state sponsored operatives identified  
* SubQuery [$134k exploit](https://subquery.network/blog/subquery-network-security-incident-report) on Base via missing access control modifier  
* CoW Swap [domain hijack](https://x.com/CoWSwap/status/2044924940886163780) post-mortem  
* Steakhouse [attempted DNS attack](https://x.com/SteakhouseFi/status/2042649690420724030) post-mortem

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#177](https://forkcast.org/calls/acdc/177)

* [Christine D. Kim](https://christinedkim.substack.com/p/acd-after-hours-acdc-177): notes

#### All core devs \- testing (ACDT) [\#77](https://forkcast.org/calls/acdt/077)

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * Glamsterdam repricings [\#6](https://forkcast.org/calls/price/006/)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * EIP8141 Frame transaction:  
    * [Frame transaction](https://eip8141.io/) info website  
    * Toni Wahrstätter: [Frame transactions & three gates to privacy](https://ethresear.ch/t/frame-transactions-and-the-three-gates-to-privacy/24666)  
  * [Native account abstraction breakout](https://github.com/ethereum/pm/issues/2018) April 22  
* EF Protocol Support team: Checkpoint [\#9](https://blog.ethereum.org/2026/04/10/checkpoint-9), periodic high level update of ACD calls  
* Ethereum improvement proposals (EIPs):  
  * [EIP8223](https://github.com/ethereum/EIPs/pull/11509/changes): Contract payer transaction  
  * [EIP8224](https://github.com/ethereum/EIPs/pull/11518/changes): Counterfactual transaction  
  * [EIP8225](https://github.com/ethereum/EIPs/pull/11515/changes): ECRECOVER native key awareness

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.2% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 921k active (target 128k), 12k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.42.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.42.0) (recommend): QUIC transport enabled by default

### Layer 2

* Optimism [stake based priority ordering](https://www.optimism.io/blog/stake-based-transaction-ordering-a-new-experiment-on-op-mainnet) experiment, live on Sepolia testnet  
* Scroll [proposal to dissolve security council](https://forum.scroll.io/t/governance-update-security-council-transition-contributor-roles-operational-adjustments/1470) & transition protocol admin control to multisig

### Regulation

* US SEC: [user interface providers don’t require broker-dealer registration](https://www.sec.gov/newsroom/speeches-statements/staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized-prepare-staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized)

### General

* [X launches cashtags](https://x.com/nikitabier/status/2044187672969879654) in US & Canada on iOS  
* Hyperbridge token gateway [$2.5M exploit](https://blog.hyperbridge.network/recovery-and-next-steps/)  
* Zerion [$100K stolen](https://x.com/zerion/status/2044167535231414727) from internal hot wallets via social engineering  
* [Kraken being extorted](https://x.com/c7five/status/2043720915330969743), threat to release videos of internal systems showing client data

---

*Vacation mini issue*  
*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-mini-0/](https://ethereal.news/ethereal-news-mini-0/)*  
*Markdown: [ethereal.news/ethereal-news-mini-0.md](https://ethereal.news/ethereal-news-mini-0.md)*

--- 