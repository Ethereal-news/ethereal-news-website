---
title: 'Ethereal news weekly #12'
description: 'Base moving to unified stack, Solidity v0.8.34 patches transient storage bug, EF leadership update'
date: 'February 20, 2026'
draft: true
---

Base moving to unified stack, Solidity v0.8.34 patches transient storage bug, EF leadership update

### Ecosystem

* Ethereum Foundation:
  * [Tomasz Stańczak stepping down](https://blog.ethereum.org/2026/02/13/tomasz-update) as co-Executive Director at end of February, less than 1 year into a 2 year term
    * [Bastian Aue](https://x.com/aerugoettinea/status/2022318885047779576) interim co-Executive Director (Bastian was on management team)
  * [Protocol priorities](https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026): scale, improve UX & harden the L1
  * [Platform team](https://blog.ethereum.org/en/2026/02/17/platform)
  * [Ethereum protocol studies](https://blog.ethereum.org/2026/02/17/ethereum-protocol-studies-26): tracks on cryptography & lean consensus/zkEVM, starts February 23
  * Tomasz Stańczak: [5 steps to make Ethereum driven by LLMs](https://x.com/tkstanczak/status/2023096942650376343)
* Videos: [EthDenver](https://www.youtube.com/playlist?list=PLAy4HNUNlzRlahJg-0I_f-Aqbxht0UFlM) & [EthBoulder](https://www.youtube.com/playlist?list=PLCAL60uIpJYMrz0uuC3RP5C9o4TQnsCg2)
* ETH metrics:
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0.0 \- 4.0 (12.4 for zero net issuance)
  * [ETH supply change](https://ultrasound.money/): 18.7k net issuance
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,907 \- $2,131 (all time high $4,946, August 24, 2025\)
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [MetaMask Developer](https://metamask.io/developer)

Check out our Builder Hub for tutorials, code samples, and best practices:
[builder.metamask.io](https://builder.metamask.io/)

---

### Enterprise

* [Apollo x Morpho](https://morpho.org/blog/morpho-association-announces-cooperation-agreement-with-apollo/): Apollo may acquire up to 90M MORPHO tokens over 4 years
* [Grayscale](https://www.theblock.co/post/389943/grayscale-files-convert-aave-token-trust-etf-list-nyse-arca) files to convert Aave Trust into ETF on NYSE Arca, Coinbase as custodian, 2.5% fee
* Harvard Management Company [purchased 3.87M shares](https://dailyhodl.com/2026/02/17/harvard-endowment-slashes-bitcoin-investment-buys-86824287-worth-of-ethereum-etf-shares/) of BlackRock iShares Ethereum Trust ETF (ETHA), valued at $86.8M, first Ethereum ETF position

### Applications

* [Safe Labs adopting Functional Source License](https://safe.global/blog/providing-the-infrastructure-for-self-custody-for-the-next-generation) (FSL) for new releases of service-layer components: Transaction Service, Decoder Service, Events Service, Config Service & Client Gateway
* [Privacy Pools](https://x.com/0xprivacypools/status/2024137428857163967) adds Liquity BOLD stablecoin
* [Supernova](https://paragraph.com/@supernovadex/announcing-supernova-mainnet?referrer=0xBaA59eebBb50d322EAE8540e021FfE5015633d70) (ve(3,3) DEX) live on mainnet
* [zOrg](https://x.com/z0r0zzz/status/2023870882687713406) building [zFi](https://x.com/z0r0zzz/status/2022772928878907420)
* DefiLlama [safe search](https://search.defillama.com/): search 5k+ whitelisted domains, avoids scam sites
* Wei names:
  * [Adds subdomains](https://x.com/z0r0zzz/status/2022409313730596990) & [ENS subdomain support](https://x.com/z0r0zzz/status/2022436800602739042)
  * [MegaName](https://x.com/bread_/status/2022737952825291226): ENS-style naming for MegaETH .mega TLD with ERC7828 cross-chain interop
* Vitalik: [prediction markets \+ LLMs as next-gen replacement for fiat currency](https://www.reddit.com/r/ethereum/comments/1r4k0gy/a_better_path_forward_for_prediction_markets_pms/)
* [The Automation Web4](https://x.com/0xSigil/status/2023877649475731671)
* [EY Nightfall](https://starkware.co/blog/institutional-privacy-is-moving-onchain-nightfall-deploys-on-starknet/) live on Starknet: institutional privacy for confidential transactions, selective disclosure & compliance features
* Octant [Epoch 11](https://x.com/OctantApp/status/2024201516266275007): allocate to Protocol Guild (or yourself) & migrate to v2

### Developers

* Solidity [v0.8.34](https://www.soliditylang.org/blog/2026/02/18/solidity-0.8.34-release-announcement/) (language): patches high severity [transient storage clearing helper collision bug](https://www.soliditylang.org/blog/2026/02/18/transient-storage-clearing-helper-collision-bug/), [3 impacted contracts found](https://hexens.io/research/solidity-compiler-bug-tstore-poison)
* Foundry forge-std [v1.15.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.15.0): get recorded logs as JSON string & execute RLP-encoded signed tx with full EVM semantics (isolate mode)
* [hardhat-deploy 2.0](https://x.com/wighawag/status/2024118005475467529): rewrite for Hardhat v3
* Zama: [ERC7984 confidential token standard explained](https://www.zama.org/post/erc-7984-the-confidential-token-standard-explained); OpenZeppelin [Confidential Contracts Wizard](https://wizard.openzeppelin.com/confidential)
* [Sol2uml](https://github.com/naddison36/sol2uml): visualize what functions are called on contract dependencies
* [AllWalletDevs](https://allwallet.dev/): forum for wallet developers & designers to collaborate on open standards
* [Deep Funding jury duty](https://deepfundingjury.com/juror-roll)
* Application layer standards (ERCs):
  * [ERC8161](https://github.com/ethereum/ERCs/pull/1544/changes): Transferable asynchronous tokenized vault requests
  * [ERC8162](https://github.com/ethereum/ERCs/pull/1545/changes): Agent subscription

### Agents

* Austin Griffith [ethskills](https://github.com/austintgriffith/ethskills#readme): give AI agents Ethereum knowledge via skill URLs, no install needed
* Cyfrin [solskill](https://github.com/Cyfrin/solskill#readme): Solidity & smart contract security agent skill
* Conway: [agents can buy domains](https://docs.conway.tech/domains)
* Fileverse [API and agent skill](https://x.com/fileverse/status/2023788802582380809?s=20)
* Lincoln Murr [anet](https://github.com/murrlincoln/anet#readme): agent framework for onchain interactions
* [Workflow for agentic engineering in crypto](https://mteam.space/posts/my-workflow-for-agentic-engineering-in-crypto/)

### Security

* Moonwell [cbETH $1.8M bad debt](https://forum.moonwell.fi/t/mip-x43-cbeth-oracle-incident-summary/2068), oracle config error, change [coauthored by Claude](https://x.com/pashov/status/2023872510077616223)
* OWASP [Smart Contract Top 10](https://scs.owasp.org/sctop10/) 2026: risk ranking derived from 2025 exploit data, governance & access control failures top the list
* [Contagious Interview](https://sp4rk.medium.com/beyond-the-backdoor-how-contagious-interview-is-surgically-tampering-with-metamask-wallets-0314ae901d85): DPRK-linked campaign surgically tampers with MetaMask wallets, trojanized coding tasks deploy backdoor & fake extension that captures unlock passwords
* OpenAI & Paradigm [EVMbench](https://openai.com/index/introducing-evmbench/): benchmark AI agent ability to detect, patch & exploit smart contract vulnerabilities, 120 curated vulnerabilities from 40 audits

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#175](https://forkcast.org/calls/acdc/175)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):
  *
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026)
  *
  * [Quick slots](https://ethereum-magicians.org/t/the-case-for-quick-slots-in-hegota/27708) proposed as non-headliner: remove 12 second slot assumption, find bottlenecks & iteratively reduce slot time

#### All core devs \- testing (ACDT) [\#70](https://forkcast.org/calls/acdt/070/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):
  * [bal-devnet-3 spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-3): planned for March 4
  *
  *

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):
  * [EIP7928 Block-level Access Lists](https://blockaccesslist.xyz/annotated-specs.html) annotated execution specs
  * Gas repricing:
    * [gasrepricing.com](https://gasrepricing.com/) (website)
    * [Stakeholder survey](https://docs.google.com/forms/d/e/1FAIpQLScmhDCX1I8-RPFL-AEEBJkBkAtbCq_M9quXHspF_OltTbGCGw/viewform)
    * Gas repricing breakout [\#2](https://forkcast.org/calls/price/002/)
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):
  * Encrypt the transaction pool [\#0](https://forkcast.org/calls/etm/000/)
  *
* ethPandaOps [consensoor](https://github.com/ethpandaops/consensoor#readme): lightweight Python consensus layer client for local testing & prototyping
* [PRSpec](https://github.com/Fosurero/PRSpec): protocol requirements specification
* Flashbots [SUAVE update](https://writings.flashbots.net/decentralized-building-wat-do): phased roadmap for block building market; [network anonymised transaction pools](https://writings.flashbots.net/network-anonymized-mempools)
* [JSON-RPC API versioning](https://ethereum-magicians.org/t/repo-endpoint-level-versioning-for-the-json-rpc-api-seeking-community/27765): proposal for repo & endpoint-level versioning, seeking community input
* [zkVM standards v0](https://zkevm.ethereum.foundation/blog/zkevm-standards-v0-release): RV64IM+Zicclsm common ISA, C interface for precompiles & C interface for guest IO
* Token-level Inclusion [\#3](https://forkcast.org/calls/tli/003/)
* Ben Edgington: [fast finality input wanted](https://x.com/benjaminion_xyz/status/2023776842910462248)
* [eth-protocol-expert](https://github.com/raulk/eth-protocol-expert): LLM agent skill for Ethereum protocol knowledge
* Ethereum improvement proposals (EIPs):
  * [EIP8163](https://github.com/ethereum/EIPs/pull/11327/changes): Reserve 0xAE EXTENSION opcode (for use by L2s & alt-L1s)
  * [EIP8164](https://github.com/ethereum/EIPs/pull/11330/changes): Native key delegation for EOAs

### Research

*

### Staking

* Ethstaker [Hegotá proposed headliners](https://www.youtube.com/live/s3FZk51h41g?t=506s) community call
* Rocket Pool [Saturn One](https://x.com/Rocket_Pool/status/2023913306499784898) upgrade live: RPL fee switch, 4 ETH validators & mega pools
* Vibe coded clients:
  * Dapplion [vibehouse](https://github.com/dapplion/vibehouse): consensus layer client, Lighthouse v8 fork
  * Fucory [XVI](https://github.com/evmts/xvi#readme): execution layer client in Zig & Effect
* [Client diversity](https://clientdiversity.org/#distribution):
  * Consensus layer: Lighthouse \~51% (data may not be accurate)
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.5% \[Note: [dual governance](https://dg.lido.fi/)\]
* [Validators](https://pectrified.com/mainnet): 966k active (target 128k)
* Client releases:
  * Consensus layer:
    * Nimbus [v26.2.1](https://github.com/status-im/nimbus-eth2/releases/tag/v26.2.1); [v26.2.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.2.0)
  * Execution layer:
    * Geth [v1.17.0](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.0): eth\_getProof support for lightweight PBSS archive mode; [v1.16.9](https://github.com/ethereum/go-ethereum/releases/tag/v1.16.9)
    * Reth [v1.11.0](https://github.com/paradigmxyz/reth/releases/tag/v1.11.0): sparse trie as cache, state root performance improvements, experimental hot/cold storage architecture saves 23-50%; [OP-Reth moved](https://x.com/Optimism/status/2019093628841590965)

### Layer 2

* [Base moving to unified stack](https://blog.base.dev/next-chapter-for-base-chain-1): faster shipping (6 upgrades a year), simpler design & deploy features ahead of L1; transition to TEE/ZK proofs for faster finality
  * [Jing (Optimism)](https://x.com/jinglejamOP/status/2024235407953535254) response
* L2Beat [Stage 1 requirements countdown](https://x.com/l2beat/status/2023427759393956186)
* World ID [v4 trusted setup](https://github.com/worldcoin/world-id-protocol/tree/main/docs/world-id-4-trusted-setup)

### Regulation

* [CFTC asserts jurisdiction over prediction markets](https://www.cftc.gov/PressRoom/PressReleases/9183-26) in amicus brief

### General

* Figure Technology [data breach](https://techcrunch.com/2026/02/18/data-breach-at-fintech-giant-figure-affects-close-to-a-million-customers/): \~1M accounts affected via social engineering, ShinyHunters leaked 2.5GB of customer data
* Nexus Mutual [crypto kidnap & ransom cover](https://nexusmutual.io/blog/introducing-crypto-kidnap-ransom-cover-from-nexus-mutual-inshare-samphire-and-merrill-herzog)
* [Ethereum's energy footprint](https://x.com/apruden08/status/2022352290888454457): [research paper](https://www.preprints.org/manuscript/202510.1649)
* [eth24](https://github.com/ETHCF/eth24#readme): Ethereum Community Fund recap

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-12/](https://ethereal.news/ethereal-news-weekly-12/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-12.md](https://ethereal.news/ethereal-news-weekly-12.md)*

---

### Upcoming calendar

* Mar 12-15: [ETHMumbai](https://www.ethmumbai.in/) (conference & hackathon), Mumbai, India
* Mar 24-26: [EY Global blockchain summit](https://web.cvent.com/event/52099248-ee76-46aa-a579-a707420821f3/websitePage:34e89f81-7647-4dff-b5f8-cd05d75a1ea7) (conference), New York, USA
* Mar 30 \- Apr 2: [EthCC](https://ethcc.io/) (conference), Cannes, France
* Apr 1: [ETH Seoul](https://www.ethseoul.org/) (conference), Seoul, Korea
* Jun 8-10: [ETHConf](https://ethconf.com/) (conference), New York, USA
* Nov 3-6: [Devcon 8](https://devcon.org/) (conference), Mumbai, India

[*Full calendar*](https://ethereal.news/calendar/)
