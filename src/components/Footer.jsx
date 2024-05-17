import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import IsoLogo from '@/images/logos/Iso-Color.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTelegramPlane, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image className="w-[60px]" src={IsoLogo}></Image>
              <div className="ml-4">
                <p className="text-base font-semibold">paydece</p>
                <p className="mt-1 text-sm">Decentralized P2P.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="ml-8 lg:w-64">
            </div>
          <div className="mt-6 space-x-6 md:mt-0">
            <a
              href="https://discord.gg/9RT2CzeGxp"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a
              href="https://twitter.com/paydece"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://t.me/paydece"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
            <a
              href="https://www.youtube.com/@paydece"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="cyan" className="ml-4 flex-none">
              <span className="lg:inline">Join our newsletter</span>
            </Button>
          </form>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}



