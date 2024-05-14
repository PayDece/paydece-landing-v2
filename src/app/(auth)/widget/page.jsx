'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../images/logos/Logo-Negro.png"
import { PaydeceWidget } from 'paydece-widget';
import { useEffect } from 'react';
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export default function Widget() {

  useEffect(() => { PaydeceWidget.init({
    containerId: 'widget-container',
    width: 900,
    height: 600,
    apiKey: '7ab2e9334177fb99aa09aefdd37cd3d5',
  });}, [])

  return (
    <Container>
      <div className="">
        <Link href="/" aria-label="Home">
          <Image src={Logo} width={200}/>
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <div className="flex justify-between">
            <h1 className="text-2xl font-medium tracking-tight text-gray-900">
            Connect our Widget P2P as fiat on/off ramp in your Wallet or Dex.
            </h1>
            <Button href="https://www.npmjs.com/package/paydece-widget" target="_blank">
              Documentation
            </Button>
          </div>
        </div>
        <div className="w-[900px] mx-4 flex-auto bg-white shadow-2xl shadow-gray-900/10 sm:rounded-5xl ">
          <div className="mt-12 items-center justify-center" id="widget-container"></div>
        </div>
      </div>
    </Container>
  )
}
