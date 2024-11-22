import Header from './_components/header'
import UfChart from './_components/uf-chart'

export default async function Home() {
  const res = await fetch(
    'https://apis.codante.io/senator-expenses/summary/by-uf'
  )
  const ufData = await res.json()

  return (
    <main className="container mx-auto py-16">
      <Header />
      <UfChart data={ufData} />
    </main>
  )
}
