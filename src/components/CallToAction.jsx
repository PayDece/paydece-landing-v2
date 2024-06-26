import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Contact support to connect the widget to your website or for any questions or inquiries.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=benancio@paydece.io" color="cyan" target="_blank">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
