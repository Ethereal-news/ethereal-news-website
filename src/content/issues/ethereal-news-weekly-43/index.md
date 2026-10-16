---
title: 'Ethereal news weekly #43'
description: 'ZKsync Airbender Prime: real time proving on single GPU, Barnabé Monnot: faster finality coming, Ethereum Community Foundation: Swapboard v2'
date: 'October 16, 2026'
---

*ZKsync Airbender Prime: real time proving on single GPU, Barnabé Monnot: faster finality coming, Ethereum Community Foundation: Swapboard v2*

### Ecosystem

* Barnabé Monnot (Ethlabs): [Cambridge workshops takeaways](https://x.com/barnabemonnot/status/2110973963572535303), faster finality coming (research mature), post quantum finality performance improving & networking biggest opportunity  
* Devcon 8 [creator fellows](https://x.com/EFDevcon/status/2110341599519789490), 10 creators will share stories & spotlight people shaping Ethereum over next 3 weeks  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.2 average, 0 \- 2.2 (13.6 for zero net issuance)  
  * [ETH supply](https://ethsupply.fyi/): 122.1M, 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): \$2,325 \- \$2,575 (all time high \$4,946, August 24, 2025\)  
  * [ETHBTC](https://ratiogang.com/): 0.03 (0.165 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![MetaMask Agent Wallet](./metamask-agent-wallet.jpeg) 

**MetaMask Agent Wallet**

The agentic wallet that automates trades while staying inside your rules \- powered by MetaMask’s trusted security, backed by Transaction Protection.

MetaMask Agent Wallet now plugs into: Grok Bot, Cursor and OpenClaw (via ClawHub).

[MetaMask Agent Wallet](https://metamask.io/agent-wallet)

---

### Applications

* Ethereum Community Foundation: [Swapboard v2](https://x.com/ethcforg/status/2110392241638555891), bulletin board for peer to peer token trading, adds support for native ETH, partial fills & batch orders  
* Uniswap [VolatilePair hook](https://blog.uniswap.org/volatilepair-hook-pricing-both-sides-of-the-trade) live on mainnet starting with ETH/USDC, separate dynamic fees for buying/selling, recalculated on every swap  
* ENS Labs: [ENSv2 activation draft proposal](https://discuss.ens.domains/t/executable-activate-ensv2/22483), freezes v1 registrations prior to migration  
* Blur (NFT marketplace) [deprecating frontend](https://x.com/blur_io/status/2109735810857861203) November 12  
* [Network School acquired Farcaster](https://farcaster.xyz/rish/0x5d479754), becoming Network State Protocol, users vote to stay & accept AI moderated rules (includes past posts), otherwise account is read only, can use alternate client  
* Reminder: Octant [Epoch 13](https://octant.build/blog/allocate-to-epoch-13-support-the) (privacy round): 13 projects, 100 ETH matching, allocation closes October 21

### Developers

* Argot Collective:  
  * Solidity (language): Core Solidity (new solc frontend) [status update](https://www.soliditylang.org/blog/2026/10/14/the-state-of-core-solidity/): prototype, syntax reworked to be closer to Classic Solidity, uses composition instead of inheritance; [playground](https://playground.solcore.soliditylang.org) with examples  
  * Sourcify [Onay](https://docs.sourcify.dev/blog/onay-local-signing-companion/) (app): prototype, view only signing companion, displays transaction info, uses local Helios light client  
* Nomic Foundation [Hardhat v3.20.0](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%403.20.0) (dev framework): expands experimental [Glamsterdam upgrade support](https://hardhat.org/docs/reference/amsterdam-support) (adds EIP2780 resource based intrinsic transaction gas & EIP8246 remove SELFDESTRUCT burn) and speeds up compilation  
* [Remix v2.6.6](https://ethereumremix.substack.com/p/remix-release-v266) (IDE): security review workflow revamped & adds new Solidity templates  
* Taek Lee [skim](https://github.com/leekt/skim#readme): app specific state client, follows chain via block level access lists, doesn’t require full node or RPC provider  
* L2Beat privacy treasure hunt [solutions](https://x.com/l2beat/status/2110021892149256561): trace funds sent via privacy protocols  
* Application layer standards (ERCs):  
  * [ERC8443](https://github.com/ethereum/ERCs/pull/2071/changes): Quantum bridge shield  
  * [ERC8444](https://eips.ethereum.org/EIPS/eip-8444): Agentic resource discovery (ARD) onchain

### Security

* UNCX Vesting V2 [incident](https://x.com/UNCX_token/status/2110683296115966234) included mainnet, Base & Robinhood Chain  
* [SEAL Labs](https://radar.securityalliance.org/introducing-seal-labs/): test ideas in time boxed collaborations with outside experts, first is with BlockThreat to improve SEAL Intel

### Agents

* [new eden](https://neweden.wei.limo/): metaverse for agents

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#189](https://forkcast.org/calls/acdc/189/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * glamsterdam-devnet-12 successfully tested builder deposits prior to upgrade  
  * Builder onboarding race condition should be handled at app layer  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * 4 EIPs [Declined for Inclusion](https://forkcast.org/upgrade/hegota/#declined-for-inclusion) (DFI):  
    * [EIP8025](https://forkcast.org/eips/8025/) optional execution proofs  
    * [EIP8371](https://forkcast.org/eips/8371/) RowDAS  
    * [EIP8359](https://forkcast.org/eips/8359/) beacon block reporting field  
    * [EIP7716](https://forkcast.org/eips/7716/) anti correlation attestation penalties

#### All core devs \- testing (ACDT) [\#100](https://forkcast.org/calls/acdt/100/) \+ [consensus layer breakout](https://forkcast.org/calls/acdt/100/?breakout=cl)

* [Hegotá](https://forkcast.org/upgrade/hegota/) (Heze \+ Bogotá) upgrade (targeting 2027):  
  * Devnets being renamed from headliner to layer names  
  * heze-devnet-2 ([spec](https://forkcast.org/networks/heze-devnet-2/)): adds EIP8015 remove deposit & eth1data fields, EIP8365 disallow new 0x00 validators & EIP8198 quick slots (set to 12 seconds)

### Layer 1

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):  
  * Reminder: [Hoodi testnet activates Glamsterdam October 26](https://github.com/ethereum/pm/blob/master/glamsterdam-pm.md)  
  * Chase Wright (EF): ENRScout (crawler) [Hoodi testnet readiness](https://enrscout.ethnodeops.xyz/forks?network=hoodi)  
* [Hegotá](https://forkcast.org/upgrade/hegota/) (Heze \+ Bogotá) upgrade (targeting 2027):  
  * [bogota-devnet-1](https://forkcast.org/networks/bogota-devnet-1/) live, added EIP8250 keyed nonces, EIP8272 recent roots & EIP7906 transaction assertions  
  * FOCIL breakout [\#44](https://forkcast.org/calls/focil/044/): FOCIL EIP rebased to Heze but doesn’t yet include Frame transaction interaction  
* Daisugi [v0.3](https://x.com/asanso/status/2110726152192983148) (post quantum testnet): adds SPHINCS signature aggregation  
* Ethereum improvement proposals (EIPs):  
  * [EIP8442](https://github.com/ethereum/EIPs/pull/12504/changes): 64 bit opcodes for the EVM

### Staking

* [Client diversity](https://clientdiversity.org/#distribution): Consensus layer: Lighthouse \~51% (data may not be accurate)  
  * Data Always (Flashbots): [no meaningful improvement](https://x.com/dataalways/status/2108990416246972763) in consensus layer client diversity over past quarter  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21.5% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 834k active (target 128k), 24k accumulating (0x02 withdrawal credentials)  
  * Validators with [0x02 withdrawal credentials passed 40%](https://x.com/LidoFinance/status/2110039471940915490) of staked ETH  
* Client releases:  
  * Consensus layer:  
    * ChainSafe [Lodestar v1.50.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.50.0) (recommended): Glamsterdam on Hoodi  
    * Consensys [Teku 26.10.1](https://github.com/Consensys-Incorporated/teku/releases/tag/26.10.1) (recommended): Glamsterdam on Hoodi & bug fixes  
    * Status [Nimbus v26.10.1](https://github.com/status-im/nimbus-eth2/releases/tag/v26.10.1) (medium): Glamsterdam on Hoodi, Glamsterdam improvements & fixes  
  * Execution layer:  
    * [Besu 26.10.0](https://github.com/besu-eth/besu/releases/tag/26.10.0) (upgrade promptly): security fixes, Bonsai database auto upgrades on first start, DiscV4 & DiscV5 concurrent discovery mode by default & Glamsterdam on Hoodi

### Layer 2

* ZKsync [Airbender Prime](https://www.zksync.io/blog/introducing-airbender-prime): real time proving on single GPU (NVIDIA RTX PRO 6000 Blackwell), proved 99% of 7,200 mainnet blocks in under 10 seconds each  
  * Vitalik: [zkEVM priority should shift to security](https://x.com/VitalikButerin/status/2110576209658548683) now that speed has been won  
* Aztec [post quantum roadmap](https://aztec.network/blog/post-quantum-aztec), protect against harvest now decrypt later attacks via hardening libraries & better contract development patterns by February 2027, select signature scheme by March 2027, public key encryption scheme by July 2027 & proving system by November 2027 and post quantum migration by 2030  
* L2Beat [blobs dashboard](https://l2beat.com/blobs) replaces [data availability section](https://x.com/l2beat/status/2109631374843904431), most alt DA projects never implemented DA verifier

### Regulation

* European Banking Authority (EBA): [USDC classified as first significant emoney token under MiCA](https://www.eba.europa.eu/publications-and-media/press-releases/eba-classifies-usdc-first-significant-e-money-token-european-union)  
* European Securities and Markets Authority (ESMA): [cease services for non MiCA compliant stablecoins](https://www.esma.europa.eu/press-news/esma-news/esma-sets-out-supervisory-expectations-services-related-unauthorised), wind down within 3 months  
* US Office of the Comptroller of the Currency (OCC): [debanking report on 9 largest banks](https://www.occ.gov/news-issuances/news-releases/2026/nr-occ-2026-90.html), policies restricted financial services access for certain industries including crypto

### General

* Ledger [hardware implant attack](https://www.ledger.com/blog-response-hardware-implant-attack) via resellers in Southeast Asia, implant read seed phrase from screen during setup, sent over LTE using eSIM  
  * How to [check Ledger hardware integrity](https://support.ledger.com/article/4404382029329-zd)  
  * Trezor: [reducing number of resellers](https://x.com/Trezor/status/2110000774314873020) as preventive step  
* Microsoft Research [Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/) (zkVM): general purpose, hash based security  
* OpenAI: [model used account derived from common dev seed phrase](https://alignment.openai.com/misalignment-reports/using-a-funded-test-cryptocurrency-wallet-without-authorization/) without authorization to fund deployment on Sepolia testnet  
  * Apoorv: [dev seed phrase from 2016 blog post](https://x.com/apoorveth/status/2111033271106609242)  
* Anthropic: [small AI models may be months away from self replicating](https://www.anthropic.com/research/self-replicating-ai) using IoT devices

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-43/](https://ethereal.news/ethereal-news-weekly-43/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-43.md](https://ethereal.news/ethereal-news-weekly-43.md)*

---
