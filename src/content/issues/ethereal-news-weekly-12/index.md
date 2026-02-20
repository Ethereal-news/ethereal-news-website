---
title: 'Ethereal news weekly #12'
description: 'FOCIL is Hegotá consensus layer headliner, EF protocol priorities: Scale, Improve UX & Harden the L1, Base moving to own stack'
date: 'February 20, 2026'
draft: true
---

FOCIL is Hegotá consensus layer headliner, EF protocol priorities: Scale, Improve UX & Harden the L1, Base moving to own stack

### Ecosystem

* Ethereum Foundation:  
  * [Protocol priorities](https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026):   
    * Scale: unify scale L1 & scale blobs efforts  
    * Improve UX: native account abstraction & interoperability  
    * Harden the L1: security, censorship resistance and network resilience & testing  
  * [Tomasz Stańczak stepping down](https://blog.ethereum.org/2026/02/13/tomasz-update) as co-Executive Director at end of February  
    * [Bastian Aue stepping in](https://x.com/aerugoettinea/status/2022318885047779576) as interim co-Executive Director (previously co-steward in [management team](https://blog.ethereum.org/2025/04/28/ef-mgmt-board))  
  * Tomasz Stańczak: [5 steps to make Ethereum driven by LLMs](https://x.com/tkstanczak/status/2023096942650376343)  
  * [Platform team](https://blog.ethereum.org/2026/02/17/platform): new EF team to deliver cohesive platform (L1 \+ L2s)  
  * [Ethereum protocol studies](https://blog.ethereum.org/2026/02/17/ethereum-protocol-studies-26): study group starts February 23, adds self-paced learning platform and tracks on cryptography & lean consensus/zkEVM  
* Conference videos: [EthDenver](https://www.youtube.com/playlist?list=PLAy4HNUNlzRlahJg-0I_f-Aqbxht0UFlM) & [EthBoulder](https://www.youtube.com/playlist?list=PLCAL60uIpJYMrz0uuC3RP5C9o4TQnsCg2)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0.0 \- 0.8 (12.4 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,919 \- $2,098 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [MetaMask Developer](https://metamask.io/developer)

![MetaMask Builder Hub](./metamaskbuilderhub.png)
Building on MetaMask for the first time?  
Check out our Builder Hub for tutorials, code samples, and best practices:  
[builder.metamask.io](https://builder.metamask.io/)

---

### Enterprise

* [Apollo x Morpho](https://morpho.org/blog/morpho-association-announces-cooperation-agreement-with-apollo/), Apollo may acquire up to 90M Morpho tokens over 4 years  
* [Harvard Management Company](https://www.sec.gov/Archives/edgar/data/1082621/000119312526051702/0001193125-26-051702-index.htm) (university endowment) purchased $87M worth of Blackrock iShares ETH ETF

### Applications

* [DefiLlama search](https://search.defillama.com/): search for DeFi websites, curated by DefiLlama  
* [Privacy Pools](https://x.com/0xprivacypools/status/2024137428857163967) adds Liquity BOLD stablecoin  
* [Supernova](https://paragraph.com/@supernovadex/announcing-supernova-mainnet) ve(3,3) DEX live on mainnet  
* [EY Nightfall](https://starkware.co/blog/institutional-privacy-is-moving-onchain-nightfall-deploys-on-starknet/) (zk privacy protocol) deployed on Starknet  
* Octant [epoch 11](https://x.com/OctantApp/status/2024201516266275007) (public goods funding): allocate to Protocol Guild or yourself & migrate to v2  
* Vitalik: [prediction markets \+ LLMs](https://www.reddit.com/r/ethereum/comments/1r4k0gy/a_better_path_forward_for_prediction_markets_pms/) as replacement for fiat currency

### Developers

* Solidity [v0.8.34](https://www.soliditylang.org/blog/2026/02/18/solidity-0.8.34-release-announcement/) (language): patch for high severity [transient storage clearing helper collision bug](https://www.soliditylang.org/blog/2026/02/18/transient-storage-clearing-helper-collision-bug/), impacts contracts that used delete on a transient state variable & compiled with IR pipeline, 3 deployed contracts found  
  * Hexens [discovered & reported the bug](https://hexens.io/research/solidity-compiler-bug-tstore-poison)   
* Foundry (dev framework):  
  * Forge-std [v1.15.0](https://github.com/foundry-rs/forge-std/releases/tag/v1.15.0) (helpers): adds cheatcodes to get recorded logs as JSON &  execute RLP-encoded signed transaction  
* Hardhat (dev framework):  
  * Hardhat-deploy [2.0](https://x.com/wighawag/status/2024118005475467529) (plugin): write deploy scripts in TypeScript/JavaScript, hot reload, reproducible deployments & easy export; rewritten for Hardhat v3   
* Sol2uml [v2.5.25](https://github.com/naddison36/sol2uml/releases/tag/v2.5.25): (tool) class diagrams show which functions are called on dependencies  
* Uniswap [developer portal](https://api-docs.uniswap.org/introduction): API & Agent skill to integrate swap & LP functionality, beta  
* [ERC7984](https://eips.ethereum.org/EIPS/eip-7984) confidential fungible token:  
  * [Zama implementation](https://www.zama.org/post/erc-7984-the-confidential-token-standard-explained) explainer & create via [OpenZeppelin Contracts Wizard](https://wizard.openzeppelin.com/confidential)  
* [Anet](https://github.com/murrlincoln/anet#readme): build an agent that is discoverable (ERC8004), callable (ERC8128 auth & x402 payments), messageable (XMTP) & reputable (calls submit reputation feedback)  
* Application layer standards (ERCs):  
  * [ERC8161](https://github.com/ethereum/ERCs/pull/1544/changes): Transferable tokenized vault requests  
  * [ERC8162](https://github.com/ethereum/ERCs/pull/1545/changes): Agent subscription  
  * [ERC8165](https://github.com/ethereum/ERCs/pull/1549/changes): Agentic onchain operations  
  * [ERC8166](https://github.com/ethereum/ERCs/pull/1550/changes): Shared sequencer interface for agent L2s

### Agents

* Austin Griffith [ETHSkills](https://github.com/austintgriffith/ethskills#readme) ([skill](https://ethskills.com/SKILL.md)): Ethereum knowledge for agents  
* Cyfrin [Solskill](https://github.com/Cyfrin/solskill#readme) ([skill](https://raw.githubusercontent.com/Cyfrin/solskill/refs/heads/main/skills/solidity/SKILL.md)): write production grade Solidity  
* QuillShield [security skills](https://github.com/quillai-network/qs_skills#readme): 10 skills for contract security  
* Fileverse [API & Agent skill](https://x.com/fileverse/status/2023788802582380809): collaborate on dDocs, generate a key pair, multisig & content hash registry isolated from main account

### Security

* OpenAI & Paradigm [EVMbench](https://openai.com/index/introducing-evmbench/): benchmark on agent ability to detect, patch & exploit contract vulnerabilities  
* Moonwell [cbETH $1.8M bad debt](https://forum.moonwell.fi/t/mip-x43-cbeth-oracle-incident-summary/2068), oracle config error, change [coauthored by Claude](https://x.com/pashov/status/2023872510077616223)   
* OWASP [top 10 vulnerabilities](https://owasp.org/www-project-smart-contract-top-10/) found in contracts

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#175](https://forkcast.org/calls/acdc/175)

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026)  
  * Consensus layer headliner selected: [EIP7805](https://forkcast.org/eips/7805/) Fork-choice enforced Inclusion Lists (FOCIL)

#### All core devs \- testing (ACDT) [\#70](https://forkcast.org/calls/acdt/070/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-3 ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-3)): planned for March 4

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * EIP7928 Block-level Access Lists [annotated execution specs](https://blockaccesslist.xyz/annotated-specs.html)  
  * Gas repricing:  
    * [Gas repricing](https://gasrepricing.com/) info site & [stakeholder survey](https://docs.google.com/forms/d/e/1FAIpQLScmhDCX1I8-RPFL-AEEBJkBkAtbCq_M9quXHspF_OltTbGCGw/viewform) (takes 10 minutes)  
    * Glamsterdam repricings [\#2](https://forkcast.org/calls/price/002/)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * Ethstaker [Hegotá proposed headliners](https://www.youtube.com/live/s3FZk51h41g?t=506s) community call  
  * Vitalik: [FOCIL & EIP8141 frame transactions](https://www.reddit.com/r/ethereum/comments/1r980ut/on_focil_and_native_aa_synergies/) synergies; EIP8141 is proposed execution layer headliner  
  * Encrypt the transaction pool [\#0](https://forkcast.org/calls/etm/000/)  
* ethPandaOps [consensoor](https://github.com/ethpandaops/consensoor#readme): Python consensus layer client for local testing & prototyping  
* Ben Edgington: [fast finality input wanted](https://x.com/benjaminion_xyz/status/2023776842910462248)  
* Flashbots:   
  * [Decentralized block building](https://writings.flashbots.net/decentralized-building-wat-do) update  
  * [Flashnet](https://writings.flashbots.net/network-anonymized-mempools): anonymous broadcast using TEEs for liveness & cryptography for anonymity  
* L1-zkEVM:  
  * zkVM standards [v0](https://zkevm.ethereum.foundation/blog/zkevm-standards-v0-release): RV64IM+Zicclsm common ISA, C interface for precompiles & C interface for guest IO  
* [Ethereum protocol intelligence](https://github.com/raulk/eth-protocol-expert?tab=readme-ov-file#readme): agentic RAG system, data sources: EIPs, ERCs, consensus/execution specs, client code, research papers, Eth research & Eth Magicians  
* Ethereum improvement proposals (EIPs):  
  * [EIP8163](https://github.com/ethereum/EIPs/pull/11327/changes): Reserve 0xAE EXTENSION opcode  
  * [EIP8164](https://github.com/ethereum/EIPs/pull/11330/changes): Native key delegation for EOAs

### Staking

* Rocket Pool [Saturn One](https://x.com/Rocket_Pool/status/2023913306499784898) upgrade live, 4 ETH validators, megapools & RPL fee switch  
* Vibe coded clients:  
  * Dapplion [vibehouse](https://github.com/dapplion/vibehouse): consensus layer client, Lighthouse v8 fork  
  * Fucory [XVI](https://github.com/evmts/xvi#readme): execution layer clients in Zig & Effect-TS   
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.2% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 965k active (target 128k)  
* Client releases:  
  * Consensus layer:  
    * Nimbus: [v26.2.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.2.0) (medium) improved network stability, fix for false rejection of mainnet block; [v26.2.1](https://github.com/status-im/nimbus-eth2/releases/tag/v26.2.1) (low) fix for ARM & multiarch Docker images  
  * Execution layer:  
    * Geth:   
      * [v1.16.9](https://github.com/ethereum/go-ethereum/releases/tag/v1.16.9) (security): recreate p2p node key after installing, fixes for DoS via malicious p2p message & improper ECIES public key validation in RLPx handshake  
      * [v1.17.0](https://github.com/ethereum/go-ethereum/releases/tag/v1.17.0) (feature): eth\_getProof support for path-based archive node, EraE post merge history support & OpenTelemetry tracing   
    * Reth [v1.11.0](https://github.com/paradigmxyz/reth/releases/tag/v1.11.0) (high): sparse trie as cache, state root performance improvements & experimental hot/cold storage saves 23-50%; [OP-Reth moved](https://x.com/Optimism/status/2019093628841590965)

### Layer 2

* [Base moving to own stack](https://blog.base.dev/next-chapter-for-base-chain-1); objectives: faster shipping (6 upgrades a year), simpler design & deploy features ahead of L1 \+ transition to TEE/ZK proofs for faster finality  
  * Response from [Jing](https://x.com/jinglejamOP/status/2024235407953535254) (OP Labs)  
* L2Beat [new stage 1 requirements](https://x.com/l2beat/status/2023427759393956186), proving systems must be fully reproducible within 6 months or L2s will be downgraded to stage 0  
* [Polynomial](https://x.com/PolynomialFi/status/2022344918111494169) shutting down, withdraw funds before February 24

### Regulation

* US CFTC asserts [jurisdiction over prediction markets](https://www.cftc.gov/PressRoom/PressReleases/9183-26) in amicus brief

### General

* Nexus Mutual [crypto kidnap & ransom cover](https://nexusmutual.io/blog/introducing-crypto-kidnap-ransom-cover-from-nexus-mutual-inshare-samphire-and-merrill-herzog)  
* [Skipping class](https://x.com/AlexRdgzG/status/2024242658265211372): algebraic attacks on Poseidon2 & Poseidon2b hash functions  
* [Pinnacle architecture](https://arxiv.org/abs/2602.11457): 2048-bit RSA integers can be factored with less than 100k physical qubits

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-12/](https://ethereal.news/ethereal-news-weekly-12/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-12.md](https://ethereal.news/ethereal-news-weekly-12.md)*  

---