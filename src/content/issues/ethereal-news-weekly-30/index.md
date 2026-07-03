---
title: 'Ethereal news weekly #30'
description: 'Ethereum basics for governments & institutions, Ethereum Institutional launched, Robinhood Chain live'
date: 'July 3, 2026'
---

*Ethereum basics for governments & institutions, Ethereum Institutional launched, Robinhood Chain live*

### Ecosystem

* EF Global Policy Strategy team: [Ethereum basics for governments & institutions](https://blog.ethereum.org/2026/07/01/ethereum-for-institutions), non-technical primer covering foundations, governance, comparison with permissioned & permissionless chains, economic implications and environmental considerations  
* [Ethereum Institutional](https://www.ethereuminstitutional.org/) (non-profit to accelerate institutional adoption) launched:  
  * Founding team (ex-EF Enterprise): David Walsh, Marius Smith & Matthew Dawson  
  * Focus areas: engagement, research, marketing, discovery & events  
  * [Anchor funding](https://www.globenewswire.com/news-release/2026/07/01/3320659/0/en/ethereum-institutional-launches-as-independent-non-profit-to-bring-institutional-finance-onchain-at-scale.html) by Bitmine, Sharplink & Joe Lubin  
* Ethlabs (non-profit R\&D lab) [FAQ](https://x.com/ethlabs_org/status/2071543303741309181):  
  * Work domains: chain (execution scaling, blob scaling & faster Ethereum), platform (interop, block construction market & EVM) and growth (go to market for Fast Confirmation Rule)  
  * 2-3 years of runway including hiring  
* [ETH.sh Ethereum orgs](https://eth.sh/orgs): directory of foundations, labs, guilds, collectives & treasury companies  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0 \- 5.2 (13 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19.6k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,524 \- $1,746 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.028 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![Crypto Security Report](./crypto-security-report-june-2026.avif)

**Crypto Security Report: June 2026**

Featuring MetaMask's new security-first agentic wallet, live address poisoning detection, Consensys Diligence's AI-augmented Chonky auditing methodology, a reminder on fake recovery service scams, and the malware spreading via USB drives.

[Crypto Security Report: June 2026](https://metamask.io/news/crypto-security-report-june-2026)  

---

### Enterprise

* Open Standard [Open USD](https://joinopenstandard.com/blog/introducing-open-usd) (OUSD consortium stablecoin): no cost to mint/redeem, partners share earnings from reserves (less management fee) & board made up of partners; live later this year  
* Crédit Agricole [EURO eXchange Token](https://presse.credit-agricole.com/credit-agricole-launches-eurxt-its-euro-denominated-stablecoin/?lang=eng) (EURXT euro stablecoin): MiCA compliant ERC20, used to settle a subscription to Amundi money market fund  
* [Cloudflare monetization gateway](https://blog.cloudflare.com/monetization-gateway/): charge callers for assets protected by Cloudflare (web pages, datasets, APIs or MCP tools) in stablecoins over x402; early access waitlist

### Applications

* ENS DAO:   
  * [Security council renewal](https://discuss.ens.domains/t/6-45-renewal-of-the-security-council/22145) likely to be rejected after Nick Johnson (ENS founder) [voted against](https://vote.ensdao.org/#/onchain/45402179622316441394139979097514597399865468312011562941203078514615705423505/votes)  
  * [New security council](https://discuss.ens.domains/t/draft-social-proposal-for-a-new-security-council/22219) proposed with tighter public mandate, 5/8 (up from 4/8 to reduce subset veto), removal mechanism & appointment agreement with Foundation  
  * [ENS delegation incentives program](https://incentives.ens.blockful.io/): delegate to active voter  
* [Gwei](https://gwei.domains/) (name service): ownerless [fork of wei](https://diff.gwei.domains/), buy/renew fees burnt, names start from less than $1 & .id.gwei names are free  
  * [Guide to host gwei website](https://gwei.domains/guide/) on IPFS  
* Octant [Epoch 12](https://epoch.octant.app/rounds/0xf9de7a09aebbbacba9a9f4a32874463b2ddc1b8e6b4f6b65014febacbfff13f5) (quadratic funding): 25 projects shared 87.98 ETH allocation

### Developers

* Argot Collective:  
  * [Roadmap update](https://www.argot.org/blog/2026-07-01-argot-roadmap-update-2026-2): Q1/Q2 review & Q3/Q4 focus for Solidity (classic & core), ethdebug, Fe, Sonatina, Sourcify, act & hevm  
  * [Five year funding from Ethereum Foundation finalized](https://www.argot.org/blog/2026-06-30-ef-funding-final-part): 4,938 stETH for last two years  
  * Fe (language) added to banteg [EVM compiler benchmark](https://evm.banteg.xyz/)  
  * [hevm 0.58.0](https://github.com/argotorg/hevm/releases/tag/release%2F0.58.0) (symbolic analysis): adds cheat codes, state merging, concurrent solving, calldata concretization & improved Fusaka upgrade support  
* Foundry (dev framework) [symbolic testing](https://www.getfoundry.sh/forge/testing#symbolic-testing): MVP for early use  
* Nomic Foundation Hardhat (dev framework):   
  * [Hardhat v3.9.1](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.9.1): configurable transaction gas caps, safer gas snapshot checks in Solidity tests & faster start  
  * [Hardhat 2 to 3 migration skill](https://hardhat.org/docs/migrate-from-hardhat2/guides/migration-skill) for AI agents  
* Remix [Pro](https://ethereumremix.substack.com/p/introducing-remix-pro) (dev framework): paid tiers with Claude Sonnet & Opus; Pro adds security & gas agents, connectors and unlimited dapp hosting  
* Viem [tokens](https://viem.sh/tokens/tokens) (TypeScript) token actions & utilities  
* Pashov [Fizz](https://www.pashov.com/fizz) (fuzzing): generates invariants, writes stateful fuzz tests, reports on coverage & vulnerabilities; works with Foundry/Hardhat projects on Echidna & Medusa  
* [ETH.sh testnet faucets](https://faucet.eth.sh/): aggregated list, track cooldown & vote on non-working faucets  
* Application layer standards (ERCs):  
  * [ERC8318](https://github.com/ethereum/ERCs/pull/1845/changes): Tokenized fund lifecycle metadata  
  * [ERC8319](https://github.com/ethereum/ERCs/pull/1848/changes): Regulatory compliance protocol  
  * [ERC8320](https://github.com/ethereum/ERCs/pull/1849/changes): Regulated asset claim

### Security

* Artificial Financial Intelligence (AFI) [May 30 exploit post mortem](https://x.com/afiprotocol_xyz/status/2072324266679259356), vulnerability report submitted by impersonator with trojan Foundry test suite (ffi \= true \+ malicious ERC20 constructor) to gain remote access  
* Elliott Alexander (Ethereum Foundation): [Solidity security skill benchmark](https://escottalexander.github.io/solidity-skill-benchmark/) of 6 AI security review skills, plain prompting beat skills; use best model plus second pass, treat output as triage list (due to false positives)

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#240](https://forkcast.org/calls/acde/240/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * glamsterdam-devnet-7 ([spec](https://notes.ethereum.org/@ethpandaops/glamsterdam-devnet-7)): targeting next week; disable/re-enable functionality being added to EIP8282 builder execution requests contracts; repricing numbers stable (pending benchmarking); ePBS payload deadline set to 6 seconds  
  * Reminder: [Mascot needed](https://ethereum-magicians.org/t/mascot-needed-for-glamsterdam-upgrade/26008), vote on Eth Magicians, closes July 8  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion (deadline for proposing is August 6):  
    * Thomas Thiery [presentation](https://docs.google.com/presentation/d/12HAIc8F0u5Rt3XGG9l_C-JK8h_BuSoERvOLXIGPLu9c/edit): [EIP8250](https://forkcast.org/eips/8250/) Keyed nonces & [EIP8272](https://forkcast.org/eips/8272/) Recent roots  
    * Toni Wahrstätter [presentation](https://nerolation.github.io/hegota-eip-presentations/hegota-pfi-proposal.html): [EIP7862](https://forkcast.org/eips/7862/) Delayed state root & [EIP8146](https://forkcast.org/eips/8146/) Block access list sidecars  
    * Ben Adams: [EIP8298](https://forkcast.org/eips/8298/) SETCODEFROM code reuse instruction

#### All core devs \- testing (ACDT) [\#85](https://forkcast.org/calls/acdt/085/)

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting 2026):  
  * Carlos Perez: [attestation deadline selection in Glamsterdam](https://ethresear.ch/t/is-the-slot-0-reorg-cost-fixable-epbs-attestation-deadline-study/25338), recommends \~3 seconds, fixing concentrated slow path, remeasure after the upgrade & deadline change may not require network upgrade  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * FOCIL breakout [\#37](https://github.com/ethereum/pm/issues/2142#issuecomment-4852788322), spec getting closer  
* execution-specs [tests v20](https://github.com/ethereum/execution-specs/releases/tag/tests@v20.0.0): first mainnet release after execution spec tests migrated, covers Osaka \+ BPO1 \+ BPO2 (BPO2 is 20th mainnet upgrade, hence v20)  
* EIP8142 Block in Blobs: [prototype](https://hackmd.io/@peter-scroll/eip-8142-block-in-blobs) on ethrex & Lighthouse

### Staking

* EthStaker [staking survey results](https://ethstaker.org/staking-landscape-analysis-2026/), \~78% stake majority of their ETH, consensus layer client diversity a concern  
* [Bitcoin Suisse](https://bitcoinsuisse.com/news/bitcoin-suisse-migrates-its-ethereum-staking-to-obol-distributed-validators) migrating to Obol Distributed Validators  
* EtherFi [spillover withdrawals](https://x.com/ether_fi/status/2070539557024526828): exit queue bypassed via consolidating into validators at 2,048 ETH ceiling; \~543k ETH (\~20% of TVL) processed in 33 days  
* [beaconcha.in MEV analysis](https://beaconcha.in/mev): timing breakdown & distribution and network average  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~53% (data may not be accurate)  
  * hanniabu: [proposal for client data reporting](https://ethresear.ch/t/in-protocol-client-data-reporting/25353) using 32 byte beacon block body data field  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 882k active (target 128k), 15k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.44.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.44.0) (recommended): fast confirmation rule (experimental, performance intensive), performance improvements, v1 beacon API endpoints removed & Glamsterdam upgrade work   
    * Consensys [Teku 26.7.0](https://github.com/Consensys/teku/releases/tag/26.7.0) (recommended): QUIC p2p enabled by default & Windows no longer supported   
    * Offchain [Prysm v7.1.6](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.6) (patch): targeted gossip validation, sync & operator facing improvements and Glamsterdam upgrade work  
    * [Grandine 2.0.5](https://github.com/grandinetech/grandine/releases/tag/2.0.5) (high): security fixes & performance optimizations  
    * Status [Nimbus v26.6.2](https://github.com/status-im/nimbus-eth2/releases/tag/v26.6.2) (medium): mitigates regressions in attestation performance & bandwidth usage in v26.6.0  
  * Execution layer:  
    * [Erigon v3.5](https://erigon.tech/blog/erigon-3-5-tidal-tails/): parallel block execution enabled by default, Glamsterdam upgrade work, leaner full nodes by default, faster RPC & adds GraphQL  
    * Lambda [ethrex v19.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v19.0.0) (recommended): fixes memory leak for long running nodes, hardens P2P stack & zkEVM related performance improvements

### Research

* Wei Han: [state access & creation analysis](https://ethresear.ch/t/the-anatomy-of-ethereum-s-state-access/25317), most state is write once & forgotten, active state is small & bounded  
* [Secure P2P relay for efficient anonymous dissemination](https://ethresear.ch/t/spread-extending-gossipsub-with-efficient-anonymous-dissemination/25343) (SPREAD), GossipSub extension for sender anonymity & improving dissemination efficiency

### Layer 2

* [Robinhood Chain](https://robinhood.com/us/en/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/) (Arbitrum based) live  
* Base [outages post mortem](https://blog.base.dev/postmortem-june-25th-block-production-outage), June 25 (116 minutes) & June 26 (20 minutes); bug in sequencer allowed stale journal state to persist after transaction validation failure, then race condition in engine restart prevented sequencers catching up to the tip  
* Taiko [back online](https://x.com/taikoxyz/status/2072533556224548918) after June 21 security incident  
* Maurelian [OP Stack predeploy upgrades](https://optimism.io/blog/unlocking-predeploy-upgrades-for-the-op-stack-with-nuts) using network upgrade transaction bundles  
* [Loopring](https://x.com/loopringorg/status/2071253250725322987) (ZK rollup) sunset, relayer offline, final balances to be returned centrally

### Regulation

* UK Financial Conduct Authority (FCA) [crypto rules](https://www.fca.org.uk/news/press-releases/fca-sets-landmark-crypto-rules-cement-uks-place-global-hub) in force from October 25, 2027, firms (exchanges, custodians, stablecoin issuers & staking providers) must obtain authorization to operate in UK

### General

* Vitalik [obfuscation part 1](https://vitalik.eth.limo/general/2026/06/29/obfuscation1.html), tech tree behind indistinguishability obfuscation (iO) protocols  
* Nicholas Fett [Unstoppable Markets](https://unstoppable.market/) book, examines market failures through short stories & historical examples via fictional narrative of a crypto founder

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-30/](https://ethereal.news/ethereal-news-weekly-30/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-30.md](https://ethereal.news/ethereal-news-weekly-30.md)*  

---