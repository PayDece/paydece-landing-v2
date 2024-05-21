'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../images/logos/Logo-Negro.png"
import { PaydeceWidget } from 'paydece-widget';
import { useEffect } from 'react';
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Widget() {

  useEffect(() => { 
    PaydeceWidget.init({
      containerId: 'widget-container',
      width: 900,
      height: 600,
      apiKey: '7ab2e9334177fb99aa09aefdd37cd3d5',
    });
  }, [])

  return (
    <>
      <Header/>
      <Container>
        <div className="">
          <div className="relative mt-12 sm:mt-16">
            <div className="flex justify-between">
              <h1 className="text-2xl font-medium tracking-tight text-gray-900">
                Connect our Widget P2P as fiat on/off ramp in your Wallet or Dex.
              </h1>
            </div>
          </div>
          <div className="w-[900px] mx-4 flex-auto bg-white shadow-2xl shadow-gray-900/10 sm:rounded-5xl ">
            <div className="mt-12 items-center justify-center" id="widget-container"></div>
          </div>
          <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Paydece Widget Library</h2>
            <p className="mb-4">This is a library to integrate the Paydece widget into your application.</p>
            <h3 className="text-lg font-medium mb-2">Installation</h3>
            <pre className="bg-gray-200 p-4 rounded mb-4"><code>npm install paydece-widget</code></pre>
            <h3 className="text-lg font-medium mb-2">Usage</h3>
            <ol className="list-decimal list-inside mb-4">
              <li className="mb-2">Import the <code className="bg-gray-200 px-1 rounded">PaydeceWidget</code> component into your application.
                <pre className="bg-gray-200 p-4 rounded"><code>import &#123; PaydeceWidget &#125; from 'paydece-widget';</code></pre>
              </li>
              <li className="mb-2">Initialize the widget with the necessary parameters:
                <pre className="bg-gray-200 p-4 rounded"><code>{`useEffect(() => {
  PaydeceWidget.init({
    containerId: 'widget-container',
    width: 900,
    height: 600,
    apiKey: 'YOUR_API_KEY_HERE'
  });
}, []);`}</code></pre>
              </li>
              <li className="mb-2">Create a container element in your HTML with the same ID specified in <code className="bg-gray-200 px-1 rounded">containerId</code>.
                <pre className="bg-gray-200 p-4 rounded"><code>{`<div id="widget-container"></div>`}</code></pre>
              </li>
            </ol>
            <h3 className="text-lg font-medium mb-2">Customization</h3>
            <p>You can customize the size of the widget by adjusting the <code className="bg-gray-200 px-1 rounded">width</code> and <code className="bg-gray-200 px-1 rounded">height</code> values during initialization.</p>
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  )
}



