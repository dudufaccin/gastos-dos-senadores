import { Separator } from '@/components/ui/separator'
import Header from './_components/header'
import PartyChart from './_components/party-chart'
import UfChart from './_components/uf-chart'

export default async function Home() {
  const ufRes = await fetch(
    'https://apis.codante.io/senator-expenses/summary/by-uf'
  )
  const ufData = await ufRes.json()

  const partyRes = await fetch(
    'https://apis.codante.io/senator-expenses/summary/by-party'
  )
  const partyData = await partyRes.json()

  return (
    <main className="container mx-auto py-16">
      <Header />
      <UfChart year={2024} data={ufData} />
      <Separator className="py-3" />
      <PartyChart year={2024} data={partyData} />
    </main>
  )
}
