---
title: 'Ethereal news weekly #28'
description: 'Hsiao-Wei Wang stepped down, 1M lifetime developers, Glamsterdam upgrade adds separate builder deposit & exit contracts'
date: 'June 19, 2026'
---

*Hsiao-Wei Wang stepped down, 1M lifetime developers, Glamsterdam upgrade adds separate builder deposit & exit contracts*

### Ecosystem

* Ethereum Foundation:   
  * [Hsiao-Wei Wang stepped down](https://x.com/hwwonx/status/2067612537550729327) as EF co-executive director & board member  
* Joseph Chalom (Sharplink CEO): [1M lifetime developers](https://x.com/joechalom/status/2066512370495557908), \~232k active in last year  
* [DappCon](https://www.youtube.com/playlist?list=PLIGOZNhKDeuY) videos  
* ETHGlobal New York [finalists](https://x.com/ETHGlobal/status/2066247659661545564) from [232 hackathon projects](https://ethglobal.com/showcase?events=newyork2026)  
* Devcon 8 [programming requests](https://forum.devcon.org/t/rfp-14-programming-requests-for-devcon-8/8667), suggest themes, tracks, talks & speakers  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0.0 \- 11.8 (12.9 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19.5k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,656 \- $1,843 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.027 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Enterprise

* [AWS WAF adds AI traffic monetization](https://aws.amazon.com/blogs/aws/aws-waf-adds-ai-traffic-monetization-capability-to-help-content-owners-charge-ai-bots-for-content-access/), settlement via Coinbase x402 Facilitator, chains include Base

### Applications

* [LlamaLend v2](https://x.com/CurveFinance/status/2067525762240987566) live on OP Mainnet, non-crvUSD markets & Curve LP tokens as collateral  
* Zama [Morpho integration](https://x.com/randhindi/status/2067188437015314586), deposit Confidential USDC (cUSDC) into Steakhouse USDC Prime vault  
* ScopeLift [Cactus](https://scopelift.co/blog/tally-is-now-cactus) (formerly Tally) governance platform  
* MetaMask [address poisoning detection](https://metamask.io/news/address-poisoning-detection): warns when pasting lookalike address  
* Safe [Workspace](https://safe.global/blog/introducing-workspace-the-onchain-operating-environment-for-treasury-teams): security hub, passwordless email login & shared address book  
* pcaversaccio [Etherveil](https://ethresear.ch/t/etherveil-an-ethereum-privacy-browser/25224): proposal for privacy browser with embedded Kohaku wallet  
* Octant [Epoch 12](https://x.com/OctantApp/status/2066912429561217132) (quadratic funding): 25 projects, 200 ETH matching pool, closes June 30

### Developers

* Walnut x Argot Collective [Solidity debugging effort](https://walnut.dev/blog/argot-announcement): implementing ethdebug into Solidity compiler, phased approach, Argot funding groundwork, seeking co-sponsors  
* [ethers.js v6.17.0](https://github.com/ethers-io/ethers.js/releases/tag/v6.17.0) (client library): ENSv2 support & rate limiting for a provider  
* Protofire [solhint v6.2.2](https://github.com/protofire/solhint/releases/tag/v6.2.2) (Solidity linter): adds no-unchecked-calls  
* Paul Miller [micro-eth-signer 0.19.0](https://github.com/paulmillr/micro-eth-signer/releases/tag/0.19.0) (library): adds ERC7730 clear signing support  
* Application layer standards (ERCs):  
  * [ERC8300](https://github.com/ethereum/ERCs/pull/1813/changes): Invariant first reserve receipt token  
  * [ERC8301](https://github.com/ethereum/ERCs/pull/1815/changes): AI agent execution & orchestration  
  * [ERC8302](https://github.com/ethereum/ERCs/pull/1817/changes): Private fungible tokens  
  * [ERC8303](https://github.com/ethereum/ERCs/pull/1819/changes): Contract version  
  * [ERC8305](https://github.com/ethereum/ERCs/pull/1821/changes): Time delayed access control  
  * [ERC8306](https://github.com/ethereum/ERCs/pull/1823/changes): Role based timelock operation  
  * [ERC8307](https://github.com/ethereum/ERCs/pull/1824/changes): Contract emergency state  
  * [ERC8308](https://github.com/ethereum/ERCs/pull/1825/changes): Contract emergency response  
  * [ERC8309](https://github.com/ethereum/ERCs/pull/1826/changes): Gateway mesh sync protocol for CCIP Read

### Security

* Deprecated contracts exploited:  
  * Aztec Connect [\~$2.19M exploit](https://aztec-labs.com/blog/aztec-connect-incident.html) & Aztec 2.0 Rollup [\~$2.2M exploit](https://aztec-labs.com/blog/aztec-2-incident.html); unrelated to Aztec Network  
  * Thetanuts Finance legacy ETH vault [$105k exploit](https://x.com/ThetanutsFi/status/2066795181123543070)  
* Aragon [EVM Mirror](https://blog.aragon.org/evm-mirror-mind-the-gap-between-audit-and-deployment/): compare source using verify (deployed contract against local), diff (compare deployed contracts) or clone (deployed contract); multi-chain & proxy support  
* Sigma Prime: [AI as force multiplier for security engineers](https://sigmaprime.io/blog/ai-as-a-force-multiplier-for-security-engineers/), overview of what AI is good at & where it currently struggles

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#239](https://forkcast.org/calls/acde/239/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * Considered for inclusion:  
    * [EIP8282](https://forkcast.org/eips/8282/) Builder execution requests  
  * glamsterdam-devnet-6 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-6)): targeting mid next week, adds EIP8282 & remaining execution layer EIPs   
  * Repricing: [EIP7904](https://forkcast.org/eips/7904/) compute gas cost, converted to informational as clients exceed 100Mgas/sec target so no compute repricing needed  
* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion:  
    * [EIP8304](https://github.com/ethereum/EIPs/pull/11811/changes) Trustless log & transaction index  
    * [EIP7645](https://forkcast.org/eips/7645/) Alias ORIGIN to SENDER

#### All core devs \- testing (ACDT) [\#83](https://forkcast.org/calls/acdt/083/) \+ [execution layer](https://forkcast.org/calls/acdt/083/?breakout=el) & [consensus layer](https://forkcast.org/calls/acdt/083/?breakout=cl) breakouts

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * Separate builder deposit & exit contracts correct design ([EIP8282](https://forkcast.org/eips/8282/) Builder execution requests), estimated 1-2 months for security review of new system contracts

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota) upgrade (targeting 2027):  
  * FOCIL breakout [\#36](https://github.com/ethereum/pm/issues/2121#issuecomment-4732268993): Lodestar & Lighthouse rebased on top of glamsterdam-devnet-5, IL bitlists being removed as can be faked  
  * Maria Inês Silva: [Hegotá proposed repricing](https://ethresear.ch/t/scaling-in-hegota-using-the-eth-transfer-to-anchor-execution-and-bandwidth/25232) for gas limit scaling  
* Encrypted transaction pools:  
  * [3 ETH bounty](https://poidh.xyz/mainnet/bounty/11) to provide feedback on EIP8105 & EIP8184  
* Ethereum improvement proposals (EIPs):  
  * [Forkcast EIP directory](https://x.com/wolovim/status/2065485837643510145): adds FAQ section (piloting with [EIP8025](https://forkcast.org/eips/8025/?tab=faq))  
  * [EIP8304](https://github.com/ethereum/EIPs/pull/11811/changes): Trustless log & transaction index 

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~54% (data may not be accurate)  
  * Data Always: [Flashbots relay data](https://x.com/dataalways/status/2067377562876055932), Lighthouse increasing (\~50% exclusively), Prysm trending down and Nimbus & Lodestar upticks in multi client setups   
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.7% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 889k active (target 128k), 15k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * Consensys [Teku 26.6.0](https://github.com/Consensys/teku/releases/tag/26.6.0) (recommended): requires Java 25+, security fixes; [26.6.1](https://github.com/Consensys/teku/releases/tag/26.6.1) (optional): fixes issue with Snappy native libraries  
    * Offchain [Prysm v7.1.5](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.5): Glamsterdam upgrade work, performance & memory optimizations, additional Beacon API event & endpoint support and gossip validation & concurrency hardening  
  * Execution layer:  
    * [Besu 26.6.1](https://github.com/besu-eth/besu/releases/tag/26.6.1) (optional): bug fixes and adds RPC to look up transaction by sender & nonce   
    * [Erigon v3.4.4](https://github.com/erigontech/erigon/releases/tag/v3.4.4) (recommended): fixes for post-reorg gas used mismatch and Caplin Beacon API responses  
    * Lambda [ethrex v17.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v17.0.0) (maintenance): improvements to logs, hardening decode paths & minor performance improvements  
    * [Nethermind 1.38.1](https://github.com/NethermindEth/nethermind/releases/tag/1.38.1) (patch): OP Karst upgrade, OP Superchain registry refresh & removes Base from chain config & node profiles

### Research

* [SPHINCS-](https://ethresear.ch/t/sphincs-minus-efficient-stateless-post-quantum-signature-verification-on-the-evm/25165): EVM optimized variants derived from SPHINCS+ (replaces SHAKE256 with KECCAK256), Solidity implementation can verify post-quantum signature for \~150K gas

### Layer 2

* Base [B20 native token](https://blog.base.dev/introducing-base-beryl), Rust precompile, ERC20 compatible, asset & stablecoin variants, in upcoming Beryl upgrade

### Regulation

* [Roman Storm](https://x.com/rstormsf/status/2066871298656256413): SDNY pretrial schedule for retrial before acquittal motion ruled on  
  * [Free Roman Storm](https://freeromanstorm.com/) campaign  
* [SBF](https://www.courtlistener.com/docket/69143697/73/1/united-states-of-america-v-bankman-fried/): 2nd Circuit Court of Appeals upheld conviction & 25-year sentence

### General

* Paradigm [Kryptos](https://www.paradigm.xyz/2026/06/kryptos), fourth encrypted message from Jim Sanborn sculpture available to solve, alongside ten capture the flag style puzzles

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-28/](https://ethereal.news/ethereal-news-weekly-28/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-28.md](https://ethereal.news/ethereal-news-weekly-28.md)*  

---



