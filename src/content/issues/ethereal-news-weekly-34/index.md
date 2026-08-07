---
title: 'Ethereal news weekly #34'
description: 'EIP8363 tapered issuance burn proposal, Dark Forest Aztec, MetaMask Agent Wallet'
date: 'August 7, 2026'
---

*EIP8363 tapered issuance burn proposal, Dark Forest Aztec, MetaMask Agent Wallet*

### Ecosystem

* Issuance change proposal for Hegotá: [EIP8363 tapered issuance burn](https://x.com/jdetychey/status/2084638778677751889), burn fraction of validator idealized duty reward, net staking yield tapers linearly to zero at 50% staking ratio, phased in over 18 months (after the upgrade)  
  * Governance discussion on [Eth Magicians](https://ethereum-magicians.org/t/eip-8363-tapered-issuance-burn/29263) & technical discussion (specs, implementation & alternatives) on [Eth R\&D](https://discordapp.com/channels/595666850260713488/1534394630131683409)  
* Ethereum Foundation:  
  * Will Corcoran [Protocol cluster update](https://x.com/corcoranwill/status/2083313409744130449): highlights & plans per team  
  * EF Trillion Dollar Security [grant for WEBCAT](https://blog.ethereum.org/en/2026/08/05/1ts-grant) (web based code assurance & transparency), fund development of verification library, Chromium browser support research, help devs integrate, external security review & create ERC  
* Devcon 8 [speaker application deadline extended](https://x.com/EFDevcon/status/2085345099852988927) to August 12  
* ETH metrics:  
  * [Gas](https://ultrasound.money/#gas) (gwei): 0.1 average, 0 \- 2.8 (13.3 for zero net issuance)  
  * [ETH supply change](https://ultrasound.money): 20k net issuance  
  * [ETHUSD](https://www.coingecko.com/en/coins/ethereum): $1,823 \-$1,935 (all time high $4,946, August 24, 2025\)  
  * [ETH ETFs](https://dune.com/hildobby/eth-etfs): 5.2% of ETH supply  
  * [ETHBTC](https://ratiogang.com/): 0.03 (0.166 for the Flippening)

---

### Sponsor: [MetaMask](https://metamask.io)

![Crypto Security Report](./crypto-security-report-july-2026.avif)

**MetaMask Crypto Security Report: July 2026**

Featuring MetaMask's 10th anniversary security milestones, global law enforcement operations dismantling crypto crime infrastructure across 97 countries, threat reports from SlowMist and TRM Labs, and more.

[MetaMask Crypto Security Report: July 2026](https://metamask.io/news/crypto-security-report-july-2026)

---

### Enterprise

* [BlackRock launched two tokenized funds](https://www.businesswire.com/news/home/20260803468591/en/BlackRock-Expands-Tokenized-Cash-Platform-with-BSTBL-OnChain-Shares-and-BRSRV): select Treasury based liquidity (mainnet) & daily reinvestment stablecoin reserve (multichain)  
* Cloudflare [Wallets](https://blog.cloudflare.com/wallets/): claim handle for upcoming account wallet, which can create virtual wallets for agents to buy APIs & content via x402

### Applications

* DeFi Saver:  
  * [Aave V3 to V4 migrator](https://x.com/DeFiSaver/status/2084688245703753955)  
  * [Token Saver](https://blog.defisaver.com/we-found-50m-forgotten-on-smart-wallets-and-created-token-saver/): scan for recoverable balances, rewards & airdrops from smart wallets  
* Uniswap [Pools](https://blog.uniswap.org/pools-trade-a-new-way-to-launch-on-robinhood-chain) (token launchpad) live on Robinhood Chain (L2), autocompounding liquidity, snipe mitigation, permanent locked liquidity, optional creator fee & 0.25% LP fee  
* Augur [Moon fork](https://www.augur.net/blog/post-fork-announcements/) completed, \~60% of REP token migrated  
* [POAP](https://x.com/izonline/status/2084273977938080092) (Proof of Attendance Protocol) winding down  
* [Dark Forest Aztec](https://aztec.network/blog/dark-forest-aztec-game-goes-live) (game): port of Dark Forest 0.6 to Aztec (privacy L2); alpha

### Developers

* Application layer standards (ERCs):  
  * [ERC8362](https://github.com/ethereum/ERCs/pull/1925/changes): Custom encoding layout for ERC7730  
  * [ERC8366](https://github.com/ethereum/ERCs/pull/1929/changes): Zero knowledge spending policies  
  * [ERC8370](https://github.com/ethereum/ERCs/pull/1930/changes): Inheritable agent mandates  
  * [ERC8373](https://github.com/ethereum/ERCs/pull/1932/changes): Post quantum anchored key binding

### Agents

* MetaMask [Agent Wallet](https://metamask.io/news/introducing-metamask-agent-wallet): self custodial wallet, live on mainnet & select L2s, connect agent frameworks, set spend limits, allowlisted protocols & risk preferences

### Security

* Marius van der Wijden (Geth): [challenges for responsible disclosure](https://mariusvanderwijden.github.io/blog/2026/08/04/Security/) with advent of AI  
* Ethereum Foundation Protocol Security team hiring a [protocol security researcher](https://jobs.ashbyhq.com/ethereum-foundation/f1b908d7-691e-4df7-b6ac-aa92578c922e)

### All core devs (main protocol calls)

#### All core devs \- consensus (ACDC) [\#184](https://forkcast.org/calls/acdc/184/)

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * [glamsterdam-devnet-7](https://forkcast.org/devnets/glamsterdam-devnet-7/): testing ongoing  
  * [Platåberget](https://forkcast.org/devnets/glamsterdam-devnet-8/) (glamsterdam-devnet-8): short lived permissionless public testnet, targeting next week, upgrade \~1 week after genesis  
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * Non-headliners proposed for inclusion:  
    * hanniabu: [EIP8359](https://forkcast.org/eips/8359/) beacon block reporting field (validator client & setup)  
    * Barnabé Monnot (Ethlabs): [presentation](https://docs.google.com/presentation/d/1TF6AAh7sLIQ2TlT9hVrO6Rgl9-aSyuBzyfz_2fAJwjc/) for [EIP8198](https://forkcast.org/eips/8198/) quick slots (decrease from 12s to 10s)  
    * Thomas Thiery (EF): [EIP8369](https://forkcast.org/eips/8369/) VOPS profiles for FOCIL eligibility  
    * Kamil Salakhiev (EF): [presentation](https://drive.proton.me/urls/QZ61WTNTWC#xVOes007TAWQ) for [EIP8142](https://forkcast.org/eips/8142/) block in blobs   
    * Csaba Király: [EIP8371](https://forkcast.org/eips/8371/) RowDAS  
    * Jérôme de Tychey: [presentation](https://docs.google.com/presentation/d/1BBlYjhzVibXTigHKhrOk59PvFG9AmdVhFKsf-MTN8WM/edit?slide=id.g3f67cec93ee_0_7) for [EIP8363](https://forkcast.org/eips/8363/) tapered issuance burn  
    * NC (Lodestar): [EIP8365](https://forkcast.org/eips/8365/) BLS withdrawal credential retirement & [EIP8367](https://forkcast.org/eips/8367/) balance sunset for retired BLS validators  
  * Oisin Kyne (Obol): [presentation](https://docs.google.com/presentation/d/1h6K8Z2cX_WsEqOTi40EJeoLSMvvJtYzPZJVu6Zwd3mU/edit?slide=id.g17e7e92e38c_0_0) for updated [EIP7716](https://forkcast.org/eips/7716/) anti correlation attestation penalties

#### All core devs \- testing (ACDT) [\#90](https://forkcast.org/calls/acdt/090/) \+ [consensus layer](https://forkcast.org/calls/acdt/090/?breakout=cl) breakout

* [Glamsterdam](https://forkcast.org/upgrade/glamsterdam/) upgrade (targeting 2026):   
  * Maria Inês Silva (EF): [repricing update](https://htmlpreview.github.io/?https://gist.githubusercontent.com/misilva73/1211e2f88c6961d61c9bca5646c488fb/raw/910120adf4b49799abecf11aea336a3377050c88/repricing_update_2026_08_03.html), anchor reduced from 100 to 75 Mgas/s, 200M gas limit possible  
  * Attestation deadline kept at 3s, investigate lowering to 2s after upgrade

### Layer 1

* consensus-specs [v1.7.0-alpha.13](https://github.com/ethereum/consensus-specs/releases/tag/v1.7.0-alpha.13)   
* [Hegotá](https://forkcast.org/upgrade/hegota/) upgrade (targeting 2027):  
  * EIP7805 FOCIL breakout [\#39](https://x.com/jih2nn/status/2084930522145591804): engine API merged & spec maturing  
* [BlobArchive](https://blobarchive.net/): blobs stored as raw IPFS block, indexed by immutable DAG & distributed over libp2p/Bitswap  
* Alex Kuzmin (EF) [client side proving benchmarks](https://ethproofs.org/blog/client-side-proving-benchmarks-crops-post-quantum-and-the-missing-middle)  
* Ethereum improvement proposals (EIPs):  
  * [EIP8358](https://forkcast.org/eips/8358/): Net gas metering for account changes  
  * [EIP8359](https://forkcast.org/eips/8359/): Beacon block reporting field  
  * [EIP8360](https://forkcast.org/eips/8360/): TCREATE opcode  
  * [EIP8361](https://forkcast.org/eips/8361/): Transaction validity proofs   
  * [EIP8363](https://forkcast.org/eips/8363/): Tapered issuance burn  
  * [EIP8364](https://github.com/ethereum/EIPs/pull/12093/changes): SSZ compact multiproofs  
  * [EIP8365](https://forkcast.org/eips/8365/): BLS withdrawal credential retirement  
  * [EIP8367](https://forkcast.org/eips/8367/): Balance sunset for retired BLS validators  
  * [EIP8368](https://forkcast.org/eips/8368/): CPSB (cost per state byte) recalibration for new gas limit  
  * [EIP8369](https://forkcast.org/eips/8369/): VOPS (validity only partial statelessness) profiles for FOCIL eligibility  
  * [EIP8371](https://forkcast.org/eips/8371/): RowDAS \- distributed blob reconstruction  
  * [EIP8372](https://forkcast.org/eips/8372/): Normalized state gas limit  
  * [EIP8374](https://github.com/ethereum/EIPs/pull/12128/changes): Persist warm access sets across reverts

### Research

* [LeanDA](https://ethresear.ch/t/leanda-design-and-benchmark/25642): design for post quantum DAS with hash based commitments & LeanVM proofs

### Staking

* [ethstaker.tax](https://ethstaker.tax) shut down  
* [Client diversity](https://clientdiversity.org/#distribution):  
  * Consensus layer: Lighthouse \~51% (data may not be accurate)  
* [Staking market share](https://dune.com/hildobby/eth2-staking): Lido 21% \[Note: [dual governance](https://dg.lido.fi/)\]  
* [Validators](https://pectrified.com/mainnet): 896k active (target 128k), 17k accumulating (0x02 withdrawal credentials)  
* Client releases:  
  * Consensus layer:  
    * [Grandine 2.0.6](https://github.com/grandinetech/grandine/releases/tag/2.0.6) (high): security fixes & performance optimizations  
  * Execution layer:  
    * [Nethermind 1.39.3](https://github.com/NethermindEth/nethermind/releases/tag/1.39.3) (mandatory): reliability & hardening fixes for block processing, networking & request decoding

### General

* Camila Russo writing a [history of DeFi](https://x.com/CamiRusso/status/2084756111438344667) book

---

*Editor: [@abcoathup](https://x.com/abcoathup)*  
*Permalink: [ethereal.news/ethereal-news-weekly-34/](https://ethereal.news/ethereal-news-weekly-34/)*  
*Markdown: [ethereal.news/ethereal-news-weekly-34.md](https://ethereal.news/ethereal-news-weekly-34.md)*  

---