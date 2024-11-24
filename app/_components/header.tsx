'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import logo from '../_assets/logo.svg'
import CalendarIcon from './icons/calendar-icon'
import FlagIcon from './icons/flag-icon'
import MapIcon from './icons/map-icon'

export default function Header() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <header className="mb-12 flex flex-col gap-10 lg:flex-row lg:justify-between justify-center items-center">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Logo do projeto" width={70} height={70} />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-1">
            Gastos dos Senadores Brasileiros
          </h1>
          <p>Gastos dos senadores brasileiros total por estado (UF) - CEAPS</p>
        </div>
      </div>
      <nav className="flex gap-6">
        <div className="border-r-2 pr-6 border-black/10">
          <button
            type="button"
            className="flex flex-col items-center justify-center text-xs gap-2 border-black/10 border-2 px-4 py-3 rounded-lg fill-slate-500"
          >
            <CalendarIcon />
            Calendário
          </button>
        </div>
        <div className="flex gap-4">
          <NavButton
            expenseType="uf"
            onClick={() =>
              router.push(`${pathname}?${createQueryString('type', 'uf')}`)
            }
          >
            <MapIcon />
            Gastos por UF
          </NavButton>
          <NavButton
            expenseType="party"
            onClick={() =>
              router.push(`${pathname}?${createQueryString('type', 'party')}`)
            }
          >
            <FlagIcon />
            Gastos por Partido
          </NavButton>
        </div>
      </nav>
    </header>
  )
}

type NavButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  expenseType: 'uf' | 'party'
}

function NavButton({ expenseType, children, ...props }: NavButtonProps) {
  const searchParams = useSearchParams()
  const selectedExpenseType = searchParams.get('type') || 'uf'

  return (
    <button
      type="button"
      className={cn(
        'flex flex-col items-center justify-center text-xs gap-2 border-black/10 border-2 px-4 py-3 rounded-lg hover:border-violet-500 transition-colors hover:fill-violet-500 fill-slate-500',
        selectedExpenseType === expenseType &&
          'border-violet-500 fill-violet-500'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
