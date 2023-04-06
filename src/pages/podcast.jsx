import Head from 'next/head'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Newsletter from '@/components/Newsletter'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Podcast - Daniel Larkin</title>
        <meta
          name="description"
          content="Podcast"
        />
      </Head>


      <SimpleLayout
        title="Gotcha! LOL."
        intro="Definitely don't have a podcast. Subcribe to the newsletter tho..."
      >
        <Container>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </Container>
      </SimpleLayout>

    </>
  )
}
