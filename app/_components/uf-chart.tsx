'use client'
import { ChartContainer, ChartTooltip } from '@/components/ui/chart'
import type { TooltipProps } from 'recharts'
import { Bar, BarChart, Cell, LabelList, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type UfChartProps = {
  year: number
  data: { year: string; data: { uf: string; total_expenses: number }[] }[]
}

export default function UfChart({ data, year = 2024 }: UfChartProps) {
  let chartData = data.find(item => Number(item.year) === year)?.data
  if (!chartData) return null

  // Adiciona Média
  if (!chartData.some(item => item.uf === 'Brasil')) {
    const average = {
      uf: 'Brasil',
      total_expenses:
        chartData.reduce((acc, item) => acc + item.total_expenses, 0) /
        chartData.length,
    }
    chartData.push(average)
  }

  chartData = chartData?.sort((a, b) => b.total_expenses - a.total_expenses)

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const value = payload[0].value ?? 0

      return (
        <div className="bg-white rounded p-2">
          <p className="label">
            <span className="text-violet-500 font-bold">{label}: </span>
            <span>{new Intl.NumberFormat('pt-BR').format(value)}</span>
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Gastos por UF</CardTitle>
        <CardDescription>Dados de {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[600px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 70,
            }}
          >
            <YAxis
              dataKey="uf"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
            />
            <XAxis type="number" dataKey="total_expenses" hide />
            <ChartTooltip content={CustomTooltip} />
            <Bar
              dataKey="total_expenses"
              layout="vertical"
              radius={[7, 7, 7, 7]}
            >
              <LabelList
                dataKey="uf"
                position="insideLeft"
                className="fill-white font-bold"
              />
              <LabelList
                dataKey="total_expenses"
                position="right"
                fontSize={10}
                className="fill-slate-600"
                formatter={(value: number) =>
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(value)
                }
              />
              {chartData.map(entry => (
                <Cell
                  key={entry.uf}
                  className={cn(
                    'fill-current',
                    entry.uf === 'Brasil'
                      ? 'fill-violet-400'
                      : 'fill-violet-500'
                  )}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
