---
title: 'Ethereal news weekly #31'
description: 'glamsterdam-devnet-7 open for app developer testing, EthSystems launched, Devcon 8 tickets'
date: 'July 17, 2026'
---

*glamsterdam-devnet-7 open for app developer testing, EthSystems launched, Devcon 8 tickets*

### Ecosystem

* [EthSystems](https://ethsystems.org/blog/introducing-ethsystems/) launched, for profit, building confidential systems for institutions:  
  * Founding team (ex-EF Institutional Privacy Task Force): Mo Jalil, Oskar Thorén & Aaryamann Challani  
  * [Anchor funding](https://www.globenewswire.com/news-release/2026/07/14/3326790/0/en/ethsystems-launches-to-build-privacy-solutions-for-institutions-on-ethereum.html) includes Bitmine, Sharplink & Joe Lubin  
* [Ethlabs](https://x.com/ethlabs_org/status/2077739868025762252) (R\&D lab): Francesco (researcher) moving from EF  
* Cambridge Centre for Alternative Finance [Ethereum environmental footprint](https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/publications/ethereum-after-the-merge-a-change-in-power/): \~7.87 GWh annually, \~8,522 nodes at \~105 W each & \~2.37 ktCO₂e annual emissions  
* Devcon 8 [tickets](https://blog.ethereum.org/en/2026/07/14/devcon8-tickets): general admission first wave $499 ETH or $999 fiat; self claim community discounts; student, youth & builder applications (reviewed in rolling batches)  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 2.9 (13.1 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money/): 19.9k net issuance (7 days)  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,751 \- $1,943 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.029 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io/)

![MetaMask 10th anniversary](./metamask-10-year-anniversary.avif)

**MetaMask celebrates 10 years** as the world's leading self-custodial crypto wallet, names Gal Eldar as CPO, and unveils its Open Money vision for finance.  

[MetaMask 10th anniversary](https://metamask.io/news/metamask-10th-anniversary).

---

### Enterprise

* [Visa stablecoin platform](https://corporate.visa.com/en/sites/visa-perspectives/newsroom/visa-stablecoin-platform.html): wallet as a service (includes Ethereum); institutions can mint, burn & manage stablecoins, starting with Open USD, beta 

### Applications

* Revoke [paid plans](https://revoke.cash/blog/2026/introducing-revoke-premium-and-ultimate): multichain dashboard with exploit checker & unlimited batch revokes; ultimate adds [auto revoking](https://revoke.cash/premium/automated-revoking) for wallets supporting ERC7715 permissions, e.g. MetaMask, requires upgrading to ERC7702 smart account  
* Splits [shared engineering wallet use case](https://splits.org/blog/shared-eng-team-wallets/) via subaccounts or separate workspaces, 1 of n account, top up as needed, workspace admins can require memos on outgoing transactions  
* [Sablier Labs](https://blog.sablier.com/sablier-labs-is-entering-maintenance-mode) maintenance mode, interface stopped accepting vesting streams & airdrops with end dates beyond June 2028 and blocks open ended payment streams  
* [Summer.fi](https://blog.summer.fi/sunsetting-summer-fi-and-the-labs-company/) winding down after Lazy Summer Protocol exploit on July 6  
* pcaversaccio [draft proposal to disable Tornado Cash DAO governance](https://x.com/pcaversaccio/status/2076945231271113031)

### Developers

* Nomic Foundation [Hardhat v3.10.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.10.0) (dev framework): adds initial experimental Glamsterdam upgrade support starting with [EIP7708](https://hardhat.org/docs/reference/amsterdam-support#eip-7708-eth-transfers-emit-logs) ETH transfers emit a log  
* Ape (dev framework):  
  * [Ape Sourcify](https://github.com/ApeWorX/ape-sourcify#readme) (plugin): verify Solidity & Vyper contracts and fetch verified source & ABIs  
* Certora [AutoProver](https://www.certora.com/blog/autoprover-agentic-formal-verification): agent generates formal specifications and runs tests & proofs, Solidity only beta  
* Speedrun Ethereum [AI teaching assistant](https://x.com/buidlguidl/status/2077770323156668897) for challenges, live for registered builders  
* Application layer standards (ERCs):  
  * [ERC8336](https://github.com/ethereum/ERCs/pull/1874/changes): Fractional batch auction token  
  * [ERC8338](https://github.com/ethereum/ERCs/pull/1879/changes): Token bound executable skills  
  * [ERC8339](https://github.com/ethereum/ERCs/pull/1882/changes): Two phase asset transfers  
  * [ERC8340](https://github.com/ethereum/ERCs/pull/1883/changes): Transaction metadata encoding

### Agents

* [Uniswap trading tools](https://blog.uniswap.org/introducing-uniswap-trading-tools) (skills): dca-bot (recurring buys), index-bot (build & rebalance a weighted basket) and copy-trade (mirror a target wallet)  
* OpenZeppelin Contracts: [Claude Code skills for contributing to contracts library](https://x.com/OpenZeppelin/status/2076637800150323289), Solidity style, testing, API design & changesets

### Security

* Ostium [exploit](https://x.com/kaledora/status/2077525044733837736) on Arbitrum, loss of funds from OLP vault, [trading paused](https://x.com/Ostium/status/2077628150054281700)  
* BarnBridge DAO [ongoing governance attacks](https://x.com/blockful_io/status/2077823647855825319), \~$860k drained via token approvals, revoke approvals  
* Sigma Prime: [accelerating security review cycles](https://sigmaprime.io/blog/collapsing-security-review-cycle/) via commit reviews & integrated security engineers, to keep up with AI accelerated development cycles

### All core devs (main protocol calls)

#### All core devs \- execution (ACDE) [\#241](https://forkcast.org/calls/acde/241/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * [glamsterdam-devnet-7](https://forkcast.org/devnets/glamsterdam-devnet-7/): open for app developer testing; faucet & RPC available, 300M gas limit  
  * glamsterdam-devnet-8 likely last devnet before upgrading public testnets  
  * Minimum 3 months before mainnet (30 day security review, 2 weeks between each testnet, 30 day notice period for mainnet upgrade)  
  * Upgrade mascot: [runoff vote](https://ethereum-magicians.org/t/mascot-needed-for-glamsterdam-upgrade/26008) between flamingo & polar bear  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Reminder: Headliner is [EIP7805](https://forkcast.org/eips/7805/) FOCIL; native account abstraction (via [EIP8141](https://forkcast.org/eips/8141/) Frame transaction) is Considered for Inclusion  
  * Non-headliner proposed for inclusion (deadline for proposing is August 6):  
    * [EIP8268](https://forkcast.org/eips/8268/) Storage roots in block access lists

#### All core devs \- testing (ACDT) [\#87](https://forkcast.org/calls/acdt/087/) \+ [consensus layer](https://forkcast.org/calls/acdt/087/?breakout=cl) breakout

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * glamsterdam-devnet-8: repricing EIPs to be updated with minor changes

### Layer 1

* Ben Edgington: [fast finality stakeholder research](https://consensus.ethereum.foundation/blog/upgrading-finality-edition-2), finality in tens of seconds would improve bridges, interop, solver economics, L2 deposits & transaction pricing  
* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Terence: [how ePBS resolves payload ambiguity](https://terencechain.com/writing/how-epbs-resolves-payload-ambiguity)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8337](https://forkcast.org/eips/8337/): Validated EVM code  
  * [EIP8341](https://github.com/ethereum/EIPs/pull/11936/changes): Partial execution payload commitments  

### Staking

* TheDAO Security Fund: [\~70k ETH staking infrastructure explainer](https://paragraph.com/@thedao.fund/staking-70000-eth-without-a-single-point-of-failure), distributed validators with threshold signing using Vouch & Dirk  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Manu Nalepa (Prysm): [client diversity dashboard](https://clients-diversity.nalepa.org/) with client versions, using block proposer client info from graffiti (where set)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 881k active (target 128k), 16k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * Consensys [Teku 26.7.1](https://github.com/Consensys/teku/releases/tag/26.7.1) (strongly recommended): updated third party libraries & security fixes  
    * Offchain [Prysm v7.1.7](https://github.com/OffchainLabs/prysm/releases/tag/v7.1.7) (patch): Beacon API interoperability, validator client resilience & Glamsterdam upgrade work  
    * Status [Nimbus v26.7.0](https://github.com/status-im/nimbus-eth2/releases/tag/v26.7.0) (medium): CPU & memory usage optimizations  
  * Execution layer:  
    * [Besu 26.7.0](https://github.com/besu-eth/besu/releases/tag/26.7.0): Proof of Work sunset complete (Ethash, mining RPC, PoW classes removed) & adds health check service plugin API  
    * Erigon [v3.5.2](https://github.com/erigontech/erigon/releases/tag/v3.5.2) (recommended): fixes sync halting trie root regression;  [v3.5.1](https://github.com/erigontech/erigon/releases/tag/v3.5.1) (recommended): fixes parallel exec commitment issues, restores WebSocket notifications, Engine API latency reduced, dynamic IP support & pruning fixed  
    * Lambda [ethrex v21.0.0](https://github.com/lambdaclass/ethrex/releases/tag/v21.0.0): \~15% block execution speedup with transaction pool based state prewarming, shared HTTP/WS port, improved graceful shutdown, Glamsterdam & Hegotá upgrade work  
    * [Nethermind 1.39.1](https://github.com/NethermindEth/nethermind/releases/tag/1.39.1) (patch): fixes & reliability improvements across snap sync, networking, JSON RPC & experimental Flat DB  
    * Paradigm [Reth v2.4.0](https://github.com/paradigmxyz/reth/releases/tag/v2.4.0) (high): 6.2% reduction in mean newPayload latency, experimental revmc JIT EVM support, throughput improvements, RPC compatibility improved & Glamsterdam upgrade work

### Layer 2

* Jesse Pollak: [Base focusing on global finance](https://x.com/jessepollak/status/2077427261586997745) (trading, payments & agents) after betting on social, Base app handed back to Coinbase under Cobie  
* L2Beat [native rollups page](https://x.com/l2beat/status/2077764769436553272), track progress of ongoing research

### Regulation

* US & UK [transatlantic taskforce recommendations](https://home.treasury.gov/news/press-releases/sb0560): cross border tokenization working group & joint statement supporting dynamic cross border stablecoin activity  
* UK HMRC [crypto loans & liquidity pools draft legislation](https://www.gov.uk/government/publications/cryptoasset-loans-and-liquidity-pools), treats deposits as no gain no loss, defers capital gains tax until economic disposal

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-31/](https://ethereal.news/ethereal-news-weekly-31/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-31.md](https://ethereal.news/ethereal-news-weekly-31.md)*  

---
