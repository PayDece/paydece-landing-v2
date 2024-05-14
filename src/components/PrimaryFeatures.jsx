'use client'


import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function PrimaryFeatures() {

  
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mb-12 lg:mx-0 w-full text-center items-center justify-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Connect our Widget P2P as fiat on/off ramp in your Wallet or Dex.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
          We have developed a widget to integrate our decentralized P2P solution across various wallets, DEXs, and websites as a fiat on/off ramp.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <Button href="widget" color="cyan" target="_blank">Test our Widget</Button>
            <Button href="widget" color="white" target="_blank">Documentation</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
