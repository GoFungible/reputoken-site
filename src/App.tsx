import { useState } from 'react'
import {
  Coins,
  Code2,
  Globe,
  Layers,
  Rocket,
  Shield,
  Settings2,
  Wallet,
  Zap,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-700">
      <nav className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="h-8 w-8 text-violet-600" />
              <span className="text-xl font-semibold text-gray-900">RepToken</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How it works</a>
              <a href="#for-teams" className="text-sm font-medium text-gray-600 hover:text-gray-900">For Teams</a>
              <a href="#extensions" className="text-sm font-medium text-gray-600 hover:text-gray-900">Extensions</a>
              <a href="#cta" className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                Launch Token <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">About</a>
              <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">How it works</a>
              <a href="#for-teams" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">For Teams</a>
              <a href="#extensions" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">Extensions</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-white" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 mb-8">
                <Zap className="h-4 w-4" />
                Fair launch, always
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                Fund your project<br />
                with <span className="text-violet-600">reputation</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Reputation Tokens are ERC-20 tokens that let your community invest in your project. 
                Fair launch. Multichain. No ICO required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-violet-700 shadow-sm">
                  Get Started <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50">
                  Learn More <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is a Reputation Token?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A Reputation Token is an ERC-20 token that represents your project. 
                Unlike traditional tokens, it is designed to be added directly to your project website, 
                allowing visitors and users to invest in your project as it grows.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-gray-200 p-8 hover:border-violet-200 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ERC-20 Standard</h3>
                <p className="text-gray-600">
                  Built on the proven ERC-20 standard, ensuring compatibility with all major wallets and exchanges.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8 hover:border-violet-200 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multichain</h3>
                <p className="text-gray-600">
                  Deploy across multiple EVM networks. Manage your presence on Ethereum, Polygon, Arbitrum, and more.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8 hover:border-violet-200 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-lg bg-violet-50 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fair Launch</h3>
                <p className="text-gray-600">
                  No Initial Coin Offering. Every Reputation Token launches fairly, giving everyone an equal opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting started with Reputation Tokens is simple. Add a script to your website and start accepting investments in minutes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                  <Code2 className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Insert Script</h3>
                <p className="text-gray-600">
                  Add a single script tag to your project website source code. No complex integration required.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                  <Settings2 className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Customize</h3>
                <p className="text-gray-600">
                  Easily customize the look and feel of visual elements to match your brand identity.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                  <Wallet className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Get Funded</h3>
                <p className="text-gray-600">
                  Visitors can now invest in your project directly from your website as you grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="for-teams" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Project Teams</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Manage every aspect of your Reputation Token lifecycle with powerful tools designed for project teams.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Layers className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multichain Management</h3>
                    <p className="text-gray-600">
                      Manage your Reputation Token presence across different EVM networks. Deploy, update, and monitor from a single dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Settings2 className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Supply Management</h3>
                    <p className="text-gray-600">
                      Control the supply of your Reputation Token on each EVM network. Mint, burn, and allocate tokens according to your project needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Description</h3>
                    <p className="text-gray-600">
                      Clearly describe how your project will use the Reputation Token. Transparency builds trust with your community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proxy Pattern</h3>
                    <p className="text-gray-600">
                      Extend your Reputation Token with multiple external extensions using a proxy pattern. Upgrade functionality without changing the token address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="extensions" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Extend with<br />
                  <span className="text-violet-600">external extensions</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Reputation Tokens can be extended with multiple external extensions by using a proxy pattern. 
                  This means you can add new features and capabilities to your token without changing its address.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Add governance, staking, or vesting modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Upgrade functionality without changing the token address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Compatible with existing ERC-20 infrastructure</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="font-mono text-sm text-gray-700 space-y-2">
                    <p><span className="text-violet-600">contract</span> RepToken is ERC20, Proxy</p>
                    <p className="text-gray-400">// Core token functionality</p>
                    <p><span className="text-violet-600">contract</span> GovernanceExtension {`{`}</p>
                    <p className="pl-4">addGovernance()</p>
                    <p className="pl-4">vote(tokenId, proposal)</p>
                    <p>{`}`}</p>
                    <p><span className="text-violet-600">contract</span> StakingExtension {`{`}</p>
                    <p className="pl-4">stake(amount)</p>
                    <p className="pl-4">claimRewards()</p>
                    <p>{`}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-violet-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The RepToken Project Token
            </h2>
            <p className="text-lg text-violet-100 max-w-2xl mx-auto mb-10">
              The Reputation Token Marketing Website will also have its own Reputation Token to fund the Reputation Token project. 
              Be part of the ecosystem from the start.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-violet-700 hover:bg-violet-50">
                Get RepToken <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-violet-700 px-8 py-3.5 text-base font-semibold text-white border border-violet-500 hover:bg-violet-800">
                View on Explorer <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="cta" className="py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <Coins className="h-12 w-12 text-violet-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to launch your Reputation Token?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Join the future of project funding. Add reputation to your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-violet-700 shadow-sm">
                Launch Your Token <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50">
                Read Documentation <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Coins className="h-6 w-6 text-violet-600" />
              <span className="text-lg font-semibold text-gray-900">RepToken</span>
            </div>
            <p className="text-sm text-gray-500">
              Reputation Token Marketing Website. Fair launch. Multichain. Community-driven.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
