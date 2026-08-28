---
title: 'Ethereal news weekly #37'
description: 'Glamsterdam upgrade repricing impact for contract developers, Revolut euro stablecoin rolling out, native account abstraction scheduled for inclusion in Hegotá upgrade'
date: 'August 28, 2026'
---

*Glamsterdam upgrade repricing impact for contract developers, Revolut euro stablecoin rolling out, native account abstraction scheduled for inclusion in Hegotá upgrade*

### Ecosystem

* Ethereum Foundation:  
  * EF Academic Secretariat hiring [project manager (academic engagements)](https://jobs.ashbyhq.com/ethereum-foundation/aa57649b-4d03-4b48-80c4-ec5a58f5abb0)  
  * Workshop on privacy preserving technologies (Asiacrypt, Hong Kong): [call for presentations](https://privacypreserving.tech/call), 3 page abstract, deadline September 25  
* Ethlabs (R\&D lab): [Mislav Javor](https://x.com/ox_shaman/status/2091885798069072355) joined  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.3 average, 0 \- 9.3 (13.4 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money): 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,361 \- $2,558 (all time high $4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io/)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io)  

---

### Enterprise

* Revolut [euro stablecoin](https://x.com/Revolut/status/2092512154603663441) (EURR) rolling out, launch includes [mainnet](https://etherscan.io/token/0x8e9c32A536Ab623a2e0e9961BcE6F5fe7504e084), issued by Bridge (Stripe)

### Applications

* [Coinbase tokenized stocks](https://blog.base.org/tokenized-stocks) live on Base as B20 tokens, not available in US  
* [Ethena Foundation](https://ethena.fi/blog/ethena-ecosystem-update) bought out locked tokens, released VC unvested tokens, agreement for protocol value to be assigned to Foundation & fee switch proposal to use 95% net revenue for token buybacks once USDe supply passes $7.5B  
* DefiLlama [universal token ratings dashboard](https://x.com/DefiLlama/status/2092631933557625092), built with Forgd

### Developers

* [Glamsterdam upgrade repricing impact](https://blog.ethereum.org/2026/08/24/glamsterdam-repricing-testing):   
  * Small set of contracts may break or degrade without preventative updates  
  * [EIP8037](https://forkcast.org/eips/8037/) increases state creation gas cost & [EIP8038](https://forkcast.org/eips/8038/) increases state access gas cost   
  * Contract developers: [check if address in affected mainnet contracts](https://ethereum.github.io/repricing-impact/affected-contracts.html) & test fixes on [Platåberget testnet](https://forkcast.org/networks/glamsterdam-devnet-8/) (glamsterdam-devnet-8)  
  * Wallet, RPC & node tooling developers: update gas estimation for new schedule  
* [Foundry v1.8.0](https://github.com/foundry-rs/foundry/releases/tag/v1.8.0) (dev framework): opt in preview of native symbolic & mutation testing, isolate mode & dynamic test linking by default, embedded Solar language server and forge lint expanded with security & gas detectors (nearing Slither/Aderyn parity)   
* Nomic Foundation [Hardhat v3.15.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.15.0) (dev framework): faster Solidity test compilation (via porting inline config parsing to Rust) & default templates bumped to Solidity v0.8.34   
* [Remix v2.5.4](https://ethereumremix.substack.com/p/remix-release-v254) (IDE): LLM management moved to OpenRouter & AWS Bedrock; API keys from other services (such as Anthropic) will no longer work  
* revm [v43.0.0](https://github.com/bluealloy/revm/releases/tag/v116): additional Glamsterdam support (glamsterdam-devnet-8) & adds asynchronous database execution  
* Kassandra [kohaku-cli v0.0.4](https://x.com/kassandraETH/status/2092620102130630662) (privacy focused terminal wallet): faster first sync of privacy protocols over Tor, tail calls on ERC20 unshields for Tornado & Railgun  
* Kaan Uzdoğan (Sourcify): [ERC7730 clear signing](https://docs.sourcify.dev/blog/intro-to-erc7730/) explainer, wallet developer input wanted  
* [IPFS ipfs.io & dweb.link gateways](https://blog.ipfs.tech/2026-08-beyond-sponsored-gateways/) redirect to service worker that makes peer to peer connections & verifies content; rate limiting started for hotlinked & backend traffic  
* Dune (data platform): [free plan](https://x.com/hagaetc/status/2092614752333685177) moving to view only, queries will require paid plan  
* Farcaster [mobile & web clients open sourced](https://farcaster.xyz/manan/0xd058045c), MIT license, weekly snapshots, excludes wallet implementation  
* Application layer standards (ERCs):  
  * [ERC8391](https://github.com/ethereum/ERCs/pull/1962/changes): Execution delegation framework  
  * [ERC8392](https://github.com/ethereum/ERCs/pull/1964/changes): Asset status for tokenized assets  
  * [ERC8393](https://github.com/ethereum/ERCs/pull/1965/changes): Tokenized carbon credits with retirement  
  * [ERC8395](https://github.com/ethereum/ERCs/pull/1967/changes): Delegated signed HTTP requests

### Security

* Term Finance [governance incident](https://x.com/term_labs/status/2091667425129304215), $8.5M drained from 6 vaults via governance proposals, meta vaults shut down (withdrawals open); [post mortem by RockawayX](https://x.com/RockawayX/status/2091503724795474387) (curator of Tori ecosystem vault USDC)  
* The Sandbox [\~$1.5M bridge exploit](https://x.com/TheSandboxGame/status/2092905959723045174), unbacked SAND minted on Base & BSC via token convenience feature allowing calls on behalf of users  
* Ledger [clear signing flow bug](https://x.com/P3b7_/status/2091585430030344262), [fixed in Ethereum app 1.22.2](https://x.com/P3b7_/status/2092988392477016321) (released August 13), update app to 1.22.3+, app version updates separately to firmware

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#244](https://forkcast.org/calls/acde/244/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * [Platåberget](https://blog.ethereum.org/en/2026/08/17/plataberget-testnet) (glamsterdam-devnet-8): testing (spamming) ongoing  
  * glamsterdam-devnet-9 (non-finality devnet): launch when client trunk branches available  
  * Public testnets: proposal to upgrade Sepolia September 28 & Hoodi October 26 to be confirmed at ACDC next week  
  * mainnet: potentially early December, tight timeline, depends on testing & security reviews  
  * History expiry: [EIP4444](https://forkcast.org/eips/4444/) bound historical data in execution clients to be [updated](https://github.com/ethereum/EIPs/pull/12257) to prune at 33,024 epochs  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * [Native account abstraction scheduled for inclusion](https://x.com/nixorokish/status/2093021853036228665), weekly breakout to attempt to converge [EIP8141](https://forkcast.org/eips/8141/) Frame transaction & Base (L2) proposed [EIP8130](https://forkcast.org/eips/8130/) account abstraction by account configuration  
    * Derek Chiang (Ethlabs): [EIP8141 vs EIP8130 explainer](https://ethlabs.org/writings/new-aa-debate.html)  
  * Non-headliners proposed for inclusion (execution layer client preferences due September 9):  
    * [EIP8360](https://forkcast.org/eips/8360/) TCREATE opcode, placeholder for ephemeral contract solution replacing SELFDESTRUCT refill (requested change to [EIP8037](https://forkcast.org/eips/8037/) in Glamsterdam rejected as too late)  
  * Non-headliners declined for inclusion as no champion present:  
    * [EIP7609](https://forkcast.org/eips/7609/) decrease base cost of TLOAD/TSTORE  
    * [EIP8058](https://forkcast.org/eips/8058/) contract bytecode deduplication discount (superseded by [EIP8298](https://forkcast.org/eips/8298/) SETCODEFROM code reuse instruction)  
  * [Update](https://github.com/zsfelfoldi/tli#readme) on [EIP8304](https://forkcast.org/eips/8304/) trustless log & transaction index  
* Deposit contract: discussion on post quantum options

#### All core devs \- testing (ACDT) [\#93](https://forkcast.org/calls/acdt/093/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/093/?breakout=cl)

### Layer 1

* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Account abstraction breakout [\#2](https://forkcast.org/calls/aa/002)  
  * Mike Neuder: [ePBS distilled](https://ethresear.ch/t/epbs-distilled/25800) & impact on MEV market  
* Chase Wright (EF): [ENRScout](https://enrscout.ethnodeops.xyz) node crawler, over DiscV4 & DiscV5 and IPv4 & IPv6 for mainnet, Hoodi testnet & Sepolia testnet  
* Protocol Guild [Q3 membership update](https://www.protocolguild.org/blog/20260826-q3-quarterly-audit): 190 members, 9 new & 15 alumni  
* Ethereum improvement proposals (EIPs):  
  * [EIP8390](https://forkcast.org/eips/8390/): Remove the sync committee  
  * [EIP8394](https://github.com/ethereum/EIPs/pull/12235/changes): Post quantum ready deposit contract  
  * [EIP8396](https://github.com/ethereum/EIPs/pull/12240/changes): Keystore expired actor pruning  
  * [EIP8397](https://forkcast.org/eips/8397/): Frame authenticator signatures  
  * Composable native account abstraction:  
    * [EIP8398](https://github.com/ethereum/EIPs/pull/12248/changes): Native account abstraction transactions  
    * [EIP8401](https://github.com/ethereum/EIPs/pull/12248/changes): Portable account keystore  
    * [EIP8402](https://github.com/ethereum/EIPs/pull/12248/changes): Advanced account controls  
  * Proposal to [create EIP Coordinator role](https://github.com/ethereum/EIPs/pull/12243/changes)

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 903k active (target 128k), 18k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Execution layer:  
    * [Erigon v3.6](https://erigon.tech/blog/erigon-3-6-upstream-underbelly/): Caplin block production reliability increased, pruned nodes reclaim old state snapshots, plain commitment snapshots, faster state access & snapshot maintenance; receipts cache off by default  
    * Lambda [ethrex v25.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v25.0.0): [EIP8079](https://forkcast.org/eips/8079/) native rollups initial implementation, optional historical chain backfill & signed stateless validator artifacts; transaction pool requires non zero priority fee & replacing a pooled transaction requires a fee bump

### Layer 2

* Lighter (ZK rollup) [block proving time reduced](https://x.com/Lighter_xyz/status/2092356573049860259) from \~5.3 minutes to \~1 minute

### Regulation

* [Roman Storm update](https://x.com/rstormsf/status/2092378867784974437): acquittal motion still undecided, retrial pushed to April 26, 2027

### General

* OpenAI [Hugging Face July incident](https://openai.com/index/hugging-face-incident-and-the-road-ahead/): swarm of models coordinated via message boards they created, gained internet access & chained security exploits to access Hugging Face systems

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-37/](https://ethereal.news/ethereal-news-weekly-37/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-37.md](https://ethereal.news/ethereal-news-weekly-37.md)*  

---