---
title: 'Ethereal news weekly #11'
description: 'BlackRock BUIDL tradeable via UniswapX, ENS staying on mainnet, Solidity developer survey'
date: 'February 13, 2026'
---

BlackRock BUIDL tradeable via UniswapX, ENS staying on mainnet, Solidity developer survey

### Ecosystem

* Vitalik’s [updated view of Ethereum x AI](https://x.com/VitalikButerin/status/2020963864175657102): build trustless/private AI tooling, Ethereum as AI economic layer, make cypherpunk vision reality & make better markets/governance  
* Devcon: [propose country/city for next location](https://x.com/EFDevcon/status/2021984650437259561), deadline March 15  
* EF Offstage (builder stories): [Danny Ryan interview](https://www.youtube.com/watch?v=GZPLTF5ds2A) \[video\]  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0.0 \- 4.0 (12.4 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 18.7k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,907 \- $2,131 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [Consensys](https://consensys.io)

![Consensys](./consensys.jpg)

A complete suite of trusted products to build anything in web3.  
[consensys.io](https://consensys.io/)  

---

### Enterprise

* [BlackRock](https://blog.uniswap.org/unlocking-defi-liquidity-for-buidl) BUIDL tradeable via UniswapX (through Securitize), alongside strategic investment in Uniswap ecosystem  
* [Robinhood Chain](https://robinhood.com/us/en/newsroom/robinhood-chain-launches-public-testnet/) (Arbitrum L2) public testnet  
* Stripe [machine payments](https://x.com/jeff_weinstein/status/2021331763960873058) (preview): x402 support using USDC on Base

### Applications

* [ENS staying on mainnet](https://ens.domains/blog/post/ens-staying-on-ethereum) due to L1 scaling, ENSv2 to be deployed on mainnet & Namechain (L2) development stopped   
* [Aave Labs proposal](https://governance.aave.com/t/temp-check-aave-will-win-framework/24055): ratify v4, Aave branded product revenue goes to DAO treasury, new foundation to hold Aave trademarks & requests ongoing funding for Labs  
* [Spark Prime](https://paragraph.com/@spark-11/spark-prime-cedefi-margin-lending): CeDeFi margin lending for institutional borrowers  
* [Ondo Finance](https://ondo.finance/blog/defi-adoption-of-ondo-tokenized-stocks-live) tokenized stocks available for use as collateral in DeFi  
* MetaLeX [cyberSign](https://x.com/MetaLeX_Labs/status/2021884894507340113): sign legal agreements on mainnet, Base & Arbitrum  
* Base app:   
  * [Leaderboards](https://www.base.dev/leaderboard): mini apps by weekly transacting users  
  * [Talk feed](https://x.com/baseapp/status/2020949108849246249) removed & creator rewards sunset

### Developers

* [Solidity developer survey](https://www.soliditylang.org/blog/2026/02/10/solidity-developer-survey-2025-announcement/), takes \~5 minutes to complete, opt in to win Devcon ticket  
* [EVM storage chronicle](https://x.com/evmchronicle_io/status/2021623149226577993) (web tool): adds Vyper support to transaction & storage explorer  
* Optimism [liveness module](https://www.optimism.io/blog/liveness-module) for Safe, ownership transfers to fallback owner if multisig fails challenge  
* Base [builder codes](https://blog.base.dev/builder-codes-and-erc-8021-fixing-onchain-attribution): transaction attribution using ERC8021 (data suffix appended to transaction calldata)   
* Agents & wallets:  
  * [Sign In With Agent](https://siwa.id/) (SIWA): sign via keyring proxy, agent doesn’t see private key, implements ERC8004 & ERC8128   
  * Coinbase [agentic wallets](https://www.coinbase.com/en-au/developer-platform/discover/launches/agentic-wallets): session caps & transaction limits, private key remains in Coinbase infrastructure  
  * [BankrWallet](https://bankrwallet.app/) (browser wallet): agents have separate password & can’t export private key  
* EF dAI team: [register MCP server using ERC8004](https://ai.ethereum.foundation/blog/how-to-register-an-mcp-server-using-erc-8004)  
* RareSkills: [formal verification with Certora](https://rareskills.io/tutorials/certora-book)  
* CTF:  
  * Certora Capture the Funds [endless edition](https://www.certora.com/blog/capture-the-funds), $1k prize for beating current score by 25 ETH  
* Application layer standards (ERCs):  
  * [ERC8152](https://github.com/ethereum/ERCs/pull/1521/changes): Content-addressable logic modules  
  * [ERC8153](https://github.com/ethereum/ERCs/pull/1524/changes): Facet-based diamonds  
  * [ERC8154](https://github.com/ethereum/ERCs/pull/1525/changes): Multichain agents & agent relationships  
  * [ERC8155](https://github.com/ethereum/ERCs/pull/1528/changes): Kernel-orchestrated modular contracts  
  * [ERC8156](https://github.com/ethereum/ERCs/pull/1532/changes): Agent onchain metadata (for ERC8004)  
  * [ERC8157](https://github.com/ethereum/ERCs/pull/1534/changes): Accept pre-approved tip amounts  
  * [ERC8160](https://github.com/ethereum/ERCs/pull/1536/changes): Primary agent registry 

### Security

* Security Alliance (SEAL):  
  * SEAL Safe Harbor [v3.0](https://x.com/_SEAL_Org/status/2021938041120546963): enhanced clarity on good faith actions, clearer protections, updated adoption guidance & independently reviewed by Cyfrin  
  * [TheDAO Security Fund](https://paragraph.com/@thedao.fund/our-first-action-supporting-seal-911-and-seal) allocating 133.7 ETH \+ 0.1337 ETH per day to SEAL 911 & 69 ETH \+ 0.069 ETH per day to SEAL  
  * [EF](https://radar.securityalliance.org/protecting-ethereum-users-with-the-ef/) sponsoring SEAL Intel security engineer to track & neutralize drainers   
* [SolidityGuard](https://github.com/alt-research/SolidityGuard#readme): contract security scanner (Solidity & Vyper); CLI, desktop or web; integrates Slither, Mythril, Echidna, Aderyn, Foundry, Medusa, Halmos & Certora

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#230](https://forkcast.org/calls/acde/230)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * bal-devnet-3 scope: eth\_simulateV1, [EIP8037](https://forkcast.org/eips/8037/) state creation cost, [EIP7954](https://forkcast.org/eips/7954/) contract size & [EIP7975](https://eips.ethereum.org/EIPS/eip-7975) eth/70 \- partial block receipt lists (testing on separate [devnet](https://nft-devnet-10.ethpandaops.io/). needed for 83M+ gas limit)  
  * [EIP8159](https://github.com/ethereum/EIPs/pull/11307/changes) eth/71 \- Block access list exchange (add to future devnet)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026)  
  * Proposed headliners (execution layer):  
    * [LUCID encrypted transaction pool](https://ethereum-magicians.org/t/hegota-headliner-lucid-encrypted-mempool/27658): presented, breakout February 18  
    * [EIP8141](https://ethereum-magicians.org/t/hegota-headliner-proposal-frame-transaction/27618) frame transaction: execution spec implementation & tests in progress  
    * [EIP8105](https://ethereum-magicians.org/t/hegota-headliner-proposal-eip-8105-universal-enshrined-encrypted-mempool-eem/27448) encrypted transaction pool  
    * [EIP7807](https://ethereum-magicians.org/t/hegota-headliner-proposal-ssz-execution-blocks/27619) SSZ execution blocks  
    * Client teams to writeup headliner preferences (including option of no execution layer headliner) for next ACDE with decision at ACDE after that

#### All core devs \- testing (ACDT) [\#69](https://forkcast.org/calls/acdt/069/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * [bal-devnet-2](https://bal-devnet-2.ethpandaops.io/) ([spec](https://notes.ethereum.org/@ethpandaops/bal-devnet-2)) live  
  * Gas repricing final numbers expected end of March  
* ethPandaOps [Benchmarkoor](https://github.com/ethpandaops/benchmarkoor#readme): tool for benchmarking execution layer clients

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam) upgrade (targeting mid-2026):  
  * EIP7928 Block-level Access Lists breakout [\#12](https://forkcast.org/calls/bal/012)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting late-2026):  
  * EIP7805 FOCIL breakout [\#28](https://forkcast.org/calls/focil/028/)  
  * [Quick slots](https://ethereum-magicians.org/t/the-case-for-quick-slots-in-hegota/27708) proposed as non-headliner: remove 12 second slot assumption, find bottlenecks & iteratively reduce slot time  
* ethPandaOps [EVM gas profiling](https://ethpandaops.io/posts/evm-gas-profiling/): The Lab (website) adds [gas profiler](https://lab.ethpandaops.io/ethereum/execution/gas-profiler) & [gas repricing simulator](https://lab.ethpandaops.io/ethereum/execution/gas-profiler/simulate); execution trace data added to Xatu dataset  
* L1-zkEVM:  
  * L1-zkEVM breakout [\#1](https://forkcast.org/calls/zkevm/001/): [notes](https://x.com/ladislaus0x/status/2021961042348163181)  
  * zkEVM security sprint [update](https://zkevm.ethereum.foundation/blog/cryptography-research-update)  
* Stateless implementers call [\#48](https://x.com/StatelessEth/status/2021677884574970072)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8151](https://github.com/ethereum/EIPs/pull/11288/changes): Private key deactivation aware ecrecover  
  * [EIP8158](https://github.com/ethereum/EIPs/pull/11303/changes): Invariant layout guard opcode  
  * [EIP8159](https://github.com/ethereum/EIPs/pull/11307/changes): eth/71 \- Block access list exchange

### Research

* [ZK API usage credits](https://ethresear.ch/t/zk-api-usage-credits-llms-and-beyond/24104): deposit once & make API calls without linking identity, double-signaling can have stake claimed and policy abusers stake can be slashed  
* [Linearly-homomorphic signatures for RLNC](https://ethresear.ch/t/linearly-homomorphic-signatures-for-rlnc/24072), avoid sending full blocks during propagation

### Staking

* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~50% (data may not be accurate)  
  * Execution layer: Geth \~41%, Nethermind \~38% (estimated from self reports)  
* [Staking marketshare](https://dune.com/hildobby/eth2-staking): Lido 23.5% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 966k active (target 128k)  
  * EF Protocol Support: [validator consolidation progress](https://x.com/EFprotocol/status/2020861045678502178)  
    * 0x02 credentials: \~1% of validators, \~17% of staked ETH, \~700 ETH average balance  
    * Barriers to adoption: reward liquidity concerns, batch consolidation increased withdrawal key exposure, migration downtime & prioritization  
* Client releases:  
  * Consensus layer:  
    * Lodestar [v1.40.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.40.0) (recommended): memory & performance improvements, supernode stability improved; Node v22 no longer supported  
    * Teku [26.2.0](https://github.com/Consensys/teku/releases/tag/26.2.0) (recommended): RocksDB default database & blob custody backfilling improved

### Layer 2

* [MegaETH](https://x.com/megaeth/status/2020876108342927670) (OP Kailua \+ EigenDA) open to the public  
* OP Stack [upgrade 18](https://x.com/OPLabsPBC/status/2020883246238564743): adds Cannon \+ Kona fault dispute game type, custom gas token v2 & creator pattern dispute game refactor  
* [Optimism selects Succinct](https://www.optimism.io/blog/optimism-partners-with-succinct-as-preferred-provider-to-accelerate-zk-proving-on-the-superchain) as first preferred provider for ZK proving on the Superchain, ultimate goal is instant withdrawals

### Regulation

* US CFTC [Innovation Advisory Committee members](https://www.cftc.gov/PressRoom/PressReleases/9182-26), includes Hayden Adams (Uniswap), Brian Armstrong (Coinbase) & Vivek Raman (Etherealize)  
* Bprotocol Foundation & Localcoin [patent infringement case](https://x.com/jolieyang/status/2021428593075925275) against Uniswap dismissed

### General

* Discord [teen-by-default](https://discord.com/press-releases/discord-launches-teen-by-default-settings-globally) rolling out globally in March, access to age-restricted content may require age verification via video selfie or ID scan  
* Péter Szilágyi: [extracting a secret from an LLM](https://blog.dark.bio/2026/02/09/leaky-llms-accident-or-nature/)  
* [AMM challenge](https://www.ammchallenge.com/amm): submit custom AMM design

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-11](https://ethereal.news/ethereal-news-weekly-11/)*
*Markdown: [ethereal.news/ethereal-news-weekly-11.md](https://ethereal.news/ethereal-news-weekly-11.md)*

---

