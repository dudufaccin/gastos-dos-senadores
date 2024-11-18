export default function Header() {
  return (
    <header>
      <div>
        <img src="" alt="" />
        <div className="flex">
          <h1>Gastos dos Senadores Brasileiros</h1>
          <p>Gastos dos senadores brasileiros total por estado (UF) - CEAPS</p>
        </div>
      </div>
      <nav>
        <div>
          <button type="button">Calendário</button>
        </div>
        <div>
          <button type="button">Gastos por UF</button>
          <button type="button">Gastos por Partido</button>
        </div>
      </nav>
    </header>
  )
}
