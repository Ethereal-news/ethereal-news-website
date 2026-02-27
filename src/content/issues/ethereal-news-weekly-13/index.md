---
title: 'Ethereal news weekly #13'
description: 'Strawmap (strawman roadmap), EF staking 70k ETH, BNP Paribas tokenized fund'
date: 'February 27, 2026'
draft: true
---

Strawmap (strawman roadmap), EF staking 70k ETH, BNP Paribas tokenized fund

### Ecosystem

* [Strawmap](https://strawmap.org/faq) (strawman roadmap): 7 network upgrades (every 6 months) through to 2029, work-in-progress  
  * Justin Drake [overview](https://x.com/drakefjustin/status/2026755969540108659)  
  * North stars:   
    * L1: fast (finality in seconds), gigagas (1 gigagas/sec), post quantum (hash based) & private (shielded transfers)  
    * L2: teragas (1 gigabyte/sec)  
  * Vitalik: [fast slots & fast finality](https://x.com/VitalikButerin/status/2026779557479723418), [quantum resistance roadmap](https://x.com/VitalikButerin/status/2027075026378543132)  
* Ethereum Foundation:  
  * [Staking 70k ETH from treasury](https://blog.ethereum.org/2026/02/24/staking): type 2 withdrawal credentials, uses Dirk (distributed signer) & Vouch (multiclient) and local block building  
  * [Commitment to DeFi](https://blog.ethereum.org/2026/02/23/commitment-to-defi): App Relations team includes DeFi protocol specialist: Charles St. Louis (previously led DELV) & DeFi coordinator: ivangbi (previously co-founded Gearbox protocol)  
  * [Protocol support](https://ps.ethereum.foundation/) website & blog  
  * Ecosystem Support Program:   
    * Wishlist: [developer tooling](https://esp.ethereum.foundation/applicants/wishlist/existing-devtool), proposals wanted to sustain, improve & extend existing dev tools, applications close April 15  
    * RFP: [RFP hub](https://esp.ethereum.foundation/applicants/rfp/rfp_hub), standardize RFP data, create API & reference front end and maintain dataset, applications close April 23  
* ETHDenver hackathon [winners](https://x.com/devfolio/status/2026010775270334739) from [186 projects](https://ethdenver2026.devfolio.co/projects)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 1.0 (12.4 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,816 \- $2,099 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.030 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)

---

### Enterprise

* Enterprise Ethereum Alliance [privacy working group](https://x.com/EntEthAlliance/status/2026336069277643261) announced  
* [BNP Paribas Asset Management](https://group.bnpparibas/en/press-release/bnp-paribas-explores-public-blockchain-infrastructure-for-money-market-fund-tokenisation) tokenized money market fund

### Applications

* [Bungee Incognito](https://blog.bungee.exchange/bungee-incognito-privacy-simple-enough-113ab8b59265) live, no onchain link between sender & receiver, no KYC  
* [zFI](https://zfi.wei.is/about/) (super dapp): swaps, token launchpad, prediction market, limit orders & .wei names   
* [ENS resolver](https://ens-sheets.namespace.ninja/) for Google Sheets  
* [Andyclaw](https://x.com/FreedomFactory/status/2026753108911476775) (AI assistant): OpenClaw Kotlin port, included on dGEN1 phone

### Developers

* Solidity (language): [revertStrings strip inconsistency](https://x.com/solidity_lang/status/2026349594691645537), IR pipeline removes strings & custom errors from require statements whilst legacy pipeline only removes strings  
* Foundry (dev framework):  
  * scopelint [v0.1.0](https://scopelift.co/blog/scopelint-v.0.1.0) (linter): adds checks, commands & flags, config & compatibility  
* OpenZeppelin Contracts [v5.6.0](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v5.6.0) (Solidity library): adds TrieProof to verify Merkle-Patricia trie inclusion proofs, crosschain token bridge (ERC20 only) based on [ERC7786](https://eips.ethereum.org/EIPS/eip-7786) and account contracts updated to use ERC4337 entrypoint 0.9  
* Franco Victorio: deterministic deployments [managed private key, Nicks method & pre-signed transactions](https://paragraph.com/@cethology/deterministic-deployments-part-1-the-basics), [CREATE2-based](https://paragraph.com/@cethology/deterministic-deployments-part-2-create2-based-approaches) & [other approaches](https://paragraph.com/@cethology/deterministic-deployments-part-3-other-approaches)  
* Optimism [timelock guard](https://www.optimism.io/blog/timelock-guard) (Safe multisig plugin): schedule, execute & cancel, visible transaction queue, dynamic cancellation threshold and clear timelock queue mechanism  
* [Evmresearch](https://evmresearch.io/): knowledge graph of EVM  
* Application layer standards (ERCs):  
  * [ERC8167](https://github.com/ethereum/ERCs/pull/1554/changes): Modular dispatch proxies  
  * [ERC8168](https://github.com/ethereum/ERCs/pull/1555/changes): Payer web service capability  
  * [ERC8169](https://github.com/ethereum/ERCs/pull/1556/changes): Historical ownership extension for ERC721  
  * [ERC8170](https://github.com/ethereum/ERCs/pull/1558/changes): AI-native NFT  
  * [ERC8171](https://github.com/ethereum/ERCs/pull/1559/changes): Token bound account (agent registry)   
  * [ERC8172](https://github.com/ethereum/ERCs/pull/1561/changes): Delayed metadata update extension  
  * [ERC8174](https://github.com/ethereum/ERCs/pull/1557/changes): Intent spec for contracts  
  * [ERC8176](https://github.com/ethereum/ERCs/pull/1576/changes): Integrity verification for [ERC7730](https://eips.ethereum.org/EIPS/eip-7730)

### Agents

* [Alchemy](https://www.alchemy.com/blog/ai-agents-can-now-sign-up-for-alchemy): access real-time blockchain data, purchase credits via x402 on Base  
* Base [skills](https://github.com/base/skills#readme): connect, deploy contracts, integrate Base Accounts SDK & run nodes  
* Uniswap [skills](https://github.com/Uniswap/uniswap-ai#readme): v4 hooks, trading, Continuous Clearing Auction, driver & viem/wagmi  
* [Flow](https://x.com/mjc716/status/2026759104367308987) ([skill](https://www.flow.bid/skill/skill.md)): auction launchpad, uses Uniswap Continuous Clearing Auction  
* Veil cash [SDK v0.4.0](https://x.com/Veildotcash/status/2026599358897226122): execute deposits, private transfers & withdrawals on Base  
* [Herd MCP](https://x.com/andrewhong5297/status/2025973649212088721): search contract & transaction relationships

### Security

* Anthropic [Claude code security](https://www.anthropic.com/news/claude-code-security), limited research preview for enterprise & team customers, open source maintainers can apply for access  
* Peter Kacherginsky (BlockThreat): [defending DeFi in age of AI offensive tooling](https://blockthreat.com/blockthreat-defending-defi-in-the-age-of-ai-offensive-tooling/)  
* TheDAO Security Fund [ETHSecurity badge](https://giveth.typeform.com/ethsecbadge) application

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#231](https://forkcast.org/calls/acde/231)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026)  
  * Headliner (execution layer) discussions:  
    * Leading candidates: [EIP8141](https://forkcast.org/eips/8141/) Frame transactions or no headliner  
    * Client team preferences: [Geth](https://notes.ethereum.org/@lightclient/h-is-for-hardness), [Erigon](https://github.com/ethereum/pm/issues/1931#issuecomment-3961108850), [Besu](https://hackmd.io/@YwTR7izNSrCEQYKWdzdy_Q/Syutq86OZe) & [Nimbus](https://github.com/ethereum/pm/issues/1931#issuecomment-3966735519)  
    * Decide at next ACDE  
    * Encrypted transaction pool: [LUCID](https://ethereum-magicians.org/t/hegota-headliner-proposal-eip-8105-universal-enshrined-encrypted-mempool-eem/27448/3) sole proposal after [EIP8105](https://forkcast.org/eips/8105/) withdrawn  
  * [EraE](https://notes.ethereum.org/j65MUa-KTB-hZ2kDrijS9A) (execution layer history archive format): supersedes Era1

#### All core devs \- testing (ACDT) [\#71](https://forkcast.org/calls/acdt/071/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-3 ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-3)): planned for March 4, EIP8037 hardcoded to 100M gas due to complexity of implementing dynamic cost in testing framework  
  * epbs-devnet-0 ([spec](https://notes.ethereum.org/@ethpandaops/epbs-devnet-0)): planned for March 4

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * EIP7928 Block-level Access Lists breakout [\#13](https://forkcast.org/calls/bal/013)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * EIP7805 FOCIL breakout [\#29](https://forkcast.org/calls/focil/029)  
* Vibe coding:  
  * [ETH2030](https://x.com/yq_acc/status/2026250003577209173): execution layer client targeting strawmap features  
  * [Gevm](https://x.com/GiulioRebuffo/status/2024846869734576314): Go implementation of EVM  
* Protocol Guild [Q1 membership update](https://www.protocolguild.org/blog/20260224-Q1-quarterly-audit): 11 new members & 8 alumni  
* Ethereum improvement proposals (EIPs):  
  * Informational [EIP8173](https://github.com/ethereum/EIPs/pull/11353/changes): Static control flow for the EVM  
  * [EIP8175](https://github.com/ethereum/EIPs/pull/11355/changes): Amsterdam transaction

### Research

* [Blob streaming](https://ethresear.ch/t/scaling-the-da-layer-with-blob-streaming/24202): sampled pre-propagation of blob data, rate limited via tickets, mitigates free option problem & enables blob transaction censorship resistance

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.1% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 959k active (target 128k)  
* Client releases:  
  * Consensus layer:  
    * Lighthouse [v8.1.1](https://github.com/sigp/lighthouse/releases/tag/v8.1.1) (security): upgrade ASAP, also fixes VC head monitor timeouts, DataColumnsByRange duplicate bug & slow memory leak  
  * Execution layer:  
    * Erigon [v3.3.8](https://github.com/erigontech/erigon/releases/tag/v3.3.8): eth\_getLogs improved accuracy on pruned nodes, Shutter transaction decryption more reliable when keys arrive out of order  
    * Reth [v1.11.1](https://github.com/paradigmxyz/reth/releases/tag/v1.11.1) (high): replaces v1.11.0, fix to properly reveal trie nodes

### Layer 2

* [Linea](https://linea.build/blog/linea-achieves-100-mgas-s-throughput) 100MGas/s throughput  
* [ZKsync Lite](https://x.com/zksync/status/2027161869124067400) (formerly ZKsync 1.0) deprecated, block production stops May 4  
* L2Beat [Interop](https://l2beat.com/interop/summary): view flows for any pair of chains

### Regulation

* US SEC: [stablecoin FAQ](https://www.sec.gov/newsroom/speeches-statements/peirce-stablecoin-021926-cutting-two-would-do): 2% haircut (rather than 100%) on broker-dealer payment stablecoin positions  
* Office of the Comptroller of the Currency (OCC): [GENIUS (stablecoin) act proposed rulemaking](https://occ.gov/news-issuances/news-releases/2026/nr-occ-2026-9.html), comment within 60 days

### General

* [LLMs enable deanonymization](https://arxiv.org/abs/2602.16800) at scale  
* Book: [How crypto actually works](https://github.com/lawmaster10/howcryptoworksbook#readme), pre-first edition  
* Anthropic [Claude for open source](https://www.anthropic.com/claude-for-oss-terms): maintainers can apply for 6 months of Max 20x

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-13/](https://ethereal.news/ethereal-news-weekly-13/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-13.md](https://ethereal.news/ethereal-news-weekly-13.md)*  
---

### Upcoming calendar

* Mar 12-15: [ETHMumbai](https://www.ethmumbai.in/) (conference & hackathon), Mumbai, India  
* Mar 24-26: [EY Global blockchain summit](https://web.cvent.com/event/52099248-ee76-46aa-a579-a707420821f3/websitePage:34e89f81-7647-4dff-b5f8-cd05d75a1ea7) (conference), New York, USA  
* Mar 30 \- Apr 2: [EthCC](https://ethcc.io/) (conference), Cannes, France  
* Apr 3-5: [ETHGlobal Cannes](https://ethglobal.com/events/cannes2026) (hackathon), Cannes, France  
* Jun 8-10: [ETHConf](https://ethconf.com/) (conference), New York, USA  
* Nov 3-6: [Devcon 8](https://devcon.org/) (conference), Mumbai, India

[*Full calendar*](https://ethereal.news/calendar/)  