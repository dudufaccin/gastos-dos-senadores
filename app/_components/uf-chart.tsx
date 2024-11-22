'use client'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { TooltipProps } from 'recharts'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type UfChartProps = {
  year: number
  data: { year: string; data: { uf: string; total_expenses: number }[] }[]
}

export default function UfChart({ data, year = 2024 }: UfChartProps) {
  let chartData = data.find(item => Number(item.year) === year)?.data
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
        <CardDescription>Dados de 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="min-h-[600px] w-full">
          <BarChart accessibilityLayer data={chartData} layout="vertical">
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
              className="fill-violet-500"
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
                position="insideRight"
                fontSize={10}
                className="fill-white"
                formatter={(value: number) =>
                  new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(value)
                }
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
