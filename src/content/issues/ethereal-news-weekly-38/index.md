---
title: 'Ethereal news weekly #38'
description: 'Sepolia testnet Glamsterdam upgrade targeting October 6, Privacy Boost V2 live, BuidlGuidl Learning Lab Ethereum 101'
date: 'September 4, 2026'
---

*Sepolia testnet Glamsterdam upgrade targeting October 6, Privacy Boost V2 live, BuidlGuidl Learning Lab Ethereum 101*

### Ecosystem

* Ethereum Foundation:  
  * Will Corcoran [Protocol cluster monthly update](https://x.com/corcoranwill/status/2093430419349766546):  
    * Glamsterdam upgrade retro: wins include selecting ePBS & BALs as headliners early & running as separate tracks; misses include not treating gas repricing (particularly [EIP8037](https://forkcast.org/eips/8037/)) as a headliner  
    * Hegotá upgrade planning: north star is quantum resistance  
* Devcon 8:  
  * Pari Jayanthi (EF) [Devcon travel guide](https://parithosh.com/2026-08-26-devcon-india-travel-guide/)  
  * [Dev3pack career fair](https://www.dev3pack.xyz/programs/career-fair) for women & students, November 6  
* Yukon [precompile.fast](https://www.yukon.org/precompile): autoresearch challenge for [EIP8200](https://forkcast.org/eips/8200/) EVMification (replace precompiles with bytecode, lowers barrier for zkEVMs), reduce gas of MODEXP & RIPEMD bytecode  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 2.1 (13.4 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122M, 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $2,357 \- $2,544 (all time high $4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.031 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![Crypto Security Report](./crypto-security-report-august-2026.avif)

**MetaMask Crypto Security Report: August 2026**

Featuring the Coldcard hardware wallet exploit traced to a five-year-old firmware flaw, Bybit's precedent-setting civil lawsuit against the Lazarus Group, Ethereum Foundation's post-quantum migration plans, and Trezor's shipping provider data breach.

[MetaMask Crypto Security Report: August 2026](https://metamask.io/news/crypto-security-report-august-2026).

---

### Applications

* [Privacy Boost V2](https://www.privacyboost.io/resources/blog/privacy-boost-v2-end-to-end-onchain-privacy) live on Base, OP Mainnet & Soneium; adds support for MPC wallets & Safe multisigs, DeFi (Morpho, Aave & 1inch) and Portal deposit addresses (shield incoming funds)  
* Inco [Confidential Token](https://www.inco.org/blog/confidential-token-live-on-base-mainnet) (cToken) app & SDK live on Base, wraps ERC20s to shield balances & transfers

### Developers

* Remix (IDE) [moving from remix.ethereum.org to app.remix.live](https://ethereumremix.substack.com/p/taking-the-next-step-remix-ides-new), existing users need to migrate workspaces (browser storage can’t be shared by URLs)  
* ApeWorX Collective: [Python libraries](https://x.com/ApeFramework/status/2094936296774861057) (includes web3.py) major releases, upgraded to uv (package manager) & Ruff (linter & formatter), supports active Python versions  
* BuidlGuidl:   
  * Learning Lab [Ethereum 101](https://lab.buidlguidl.com/labs/ethereum-101) (beginners): browser based lab with AI tutor, create & deploy crowdfunding contract, alpha  
  * [Agents arena](https://agentsarena.buidlguidl.com/): 10 agents raced to complete a dozen Solidity challenges, top 3 all Codex CLI \+ GPT-5.5  
* World [ProveKit](https://world.org/blog/engineering/provekit-privacy-for-the-real-world) v1 (toolkit): client side zero knowledge proving  
* EthSystems [rotortree](https://ethsystems.org/writeups/building-blocks-rotortree/) (library): durable append only Merkle tree for note commitments in shielded pools  
* Paul Miller [noble cryptography](https://paulmillr.com/noble/) website: adds interactive demos  
* Application layer standards (ERCs):  
  * [ERC8403](https://github.com/ethereum/ERCs/pull/1979/changes): Account authority lifecycle  
  * [ERC8404](https://github.com/ethereum/ERCs/pull/1980/changes): Recomputable verification receipts  
  * [ERC8406](https://github.com/ethereum/ERCs/pull/1984/changes): Fungible agent tokens  
  * [ERC8407](https://github.com/ethereum/ERCs/pull/1987/changes): Extensible contract metadata  
  * [ERC8409](https://github.com/ethereum/ERCs/pull/1990/changes): Signed service payment quotes  
  * [ERC8410](https://github.com/ethereum/ERCs/pull/1992/changes): Portable execution plan artifact

### Agents

* Etherscan API [MCP, CLI & Skills](https://docs.etherscan.io/build-with-ai) (orchestrator, contract review, transaction debugger & money flow tracing)

### Security

* Moonwell [MAMO market exploit](https://forum.moonwell.fi/t/post-mortem-mamo-market-incident-on-base/2208) on Base via collateral accounting inflation & oracle price manipulation, \~$6.8M net drain & \~$9.1M shortfall  
* Balancer [legacy v1 contract bug](https://x.com/Balancer/status/2094415909481861533) allows draining LP funds, pools are deprecated & non pausable  
* Security Alliance (SEAL): [developer targeted intrusions](https://frameworks.securityalliance.org/devsecops/developer-targeted-intrusions/overview/)

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#186](https://forkcast.org/calls/acdc/186/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * [Platåberget](https://forkcast.org/networks/glamsterdam-devnet-8/) (glamsterdam-devnet-8): block hash with same parent block hash caused halt; consensus-specs [v1.7.0-beta.0](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-beta.0): adds reject bids with block hash equal to parent  
  * [glamsterdam-devnet-9](https://forkcast.org/networks/glamsterdam-devnet-9/): non finality devnet launched, issues & edge cases found  
  * glamsterdam-devnet-10: targeting next week, test for clean upgrade transition  
  * Public testnets: Sepolia targeting October 6  
  * [EIP8037](https://forkcast.org/eips/8037/): agreed cross frame state gas fix  
  * Engine API SSZ spec merged  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Consensus layer client preferences due before next ACDC

#### All core devs \- testing (ACDT) [\#94](https://forkcast.org/calls/acdt/094/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/094/?breakout=cl)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Sepolia testnet shadow fork: planned to test snap/2  
  * [EIP8037](https://forkcast.org/eips/8037/): rejected proposed state gas refill for ephemeral contracts via self destruct

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Feel Your Protocol: [EIP7708 ETH transfers emit a log](https://feelyourprotocol.org/eip-7708-eth-transfer-logs/) interactive explainer  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Account abstraction breakout [\#3](https://forkcast.org/calls/aa/003/): weekly calls, [ethrex Frames devnet](https://faucet.frames.ethrex.xyz) live, frames-devnet-0 targeting \~1 week  
  * FOCIL breakout [\#41](https://x.com/jih2nn/status/2095086697935712415): focil-devnet-0 launch after successful local interop  
  * Potuz (Prysm): [faster blocks via chunked broadcast](https://www.potuz.net/posts/hegota-faster-blocks/)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8408](https://github.com/ethereum/EIPs/pull/12287/changes): eth/73 \- indexed cell requests

### Research

* pcaversaccio (EF board): [discussion on formally verifying clients](https://ethresear.ch/t/formal-verification-of-execution-and-consensus-clients/25894), long term goal to formally verify client changes before network upgrades

### Staking

* EthStaker [ethstaker-deposit-cli v1.3.1](https://github.com/ethstaker/ethstaker-deposit-cli/releases/tag/v1.3.1) prerelease: adds Platåberget devnet  
* [Validator operations standard](https://blog.lido.fi/strengthening-ethereum-validator-operations-with-valos/) (ValOS), best practices to identify, assess & mitigate risks  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 906k active (target 128k), 18k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.47.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.47.0) (recommended): BLS operations moved to Zig & fixes libp2p bug that prevented graceful shutdown  
    * Status [Nimbus v26.8.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.8.0) (medium): additional beacon API support, QUIC gossip enabled (default UDP port 9001\) & adds Platåberget devnet  
  * Execution layer:  
    * [Besu 26.8.1](https://github.com/besu-eth/besu/releases/tag/26.8.1) (ASAP): 6 security fixes  
    * Paradigm [Reth v2.5.2](https://github.com/paradigmxyz/reth/releases/tag/v2.5.2) (high): maintenance release

### Layer 2

* ZKsync [EraVM security measures](https://www.zksync.io/blog/eravm-security-update): recommends chains increase execution delay & run independent second node; delays publication of Era code by 3 months, renames emergency upgrades to instant upgrades & adds second proving system; EraVM execution environment to be retired; funds in contracts will require action  
* Arbitrum Nova [90 day migration window concluded](https://x.com/ArbitrumDevs/status/2095134917495755219), transitioning to minimized state, migration still possible but with fewer bridging solutions

### Regulation

* US SEC [transfer agent rule proposal](https://www.sec.gov/newsroom/press-releases/2026-81-sec-proposes-modernize-rules-registered-transfer-agents): modernize rules, includes use of blockchain based recordkeeping, 60 day comment period

### General

* Trezor (hardware wallet) [additional \~67k US customers data exposed](https://x.com/Trezor/status/2095807665603584085) in ShipMonk (shipping provider) data breach, orders between November 2019 & August 2021  
* [KrebsOnSecurity](https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/): 153M US & Canadian drivers licences for sale, allegedly sourced from ID verification vendor  
* X [password recovery attack disrupted](https://x.com/AGToddBlanche/status/2095249494401237242)

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-38/](https://ethereal.news/ethereal-news-weekly-38/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-38.md](https://ethereal.news/ethereal-news-weekly-38.md)*  

---