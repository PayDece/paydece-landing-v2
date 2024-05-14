import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How can I connect my wallet?',
      answer:
        'If you are on PC, go to the button “Connect Wallet” select your wallet and sign de connection that pops up. If you are on mobile, enter to your wallet’s app navigator and go to app.paydece.io. There, select “connect wallet” and sign the connection when the window pops up.',
    },
    {
      question: 'Where can a I check if someone took my order?',
      answer:
        'After connecting your wallet, go to the left panel and select the “transactions” tab. This will open the option to see the “active transactions”. Remember that you can also configure a telegram bot to receive notifications when an order is taken. To configure this bot, click on the settings button in the up-right corner (after wallet connection) and select the “profile” option. There, add your telegram username and, finally, go to the “settings” option visible on that same page and turn the notifications on.',
    },
  ],
  [
    {
      question: 'Why can not I create an ad?',
      answer:
        'The most common problem when failing to create an add is because of insufficient gas. paydece operates with a smart contract, so you need a gas token to operate it on the network selected, the amount needed may vary, usually being between 0,1 to 5 USDT equivalent to the gas token from that network.',
    },
    {
      question: 'Why does an "insufficient funds" message appears when putting crypto in escrow?',
      answer:
        'This means that you don’t have enough crypto to block in the smart contract and pay paydece’s commission. When beginning a transaction, your funds must be equal or higher than the amount you are selling + paydece’s commission (1%) + a 0.6% extra.',
    },
  ],
  [
    {
      question: 'What do I do if the seller does not release crypto?',
      answer:
        'If this happens, 45 minutes after cryptos were blocked, a “start a claim” button will become available to contact a paydece staff member. Our staff will gather all the necessary information, and if everything is okay, cryptos will be released from the contract by paydece.',
    },
    {
      question: 'Which is the time limit for an order to be completed?',
      answer:
        'On paydece, orders have no time limit, buyer and seller decides when to complete or cancel the operation.',
    },
  ],
  
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            FAQs
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask, {''}
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=benancio@paydece.io"
              className="text-gray-900 underline"
              target="_blank"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
