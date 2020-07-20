import React from 'react'
import { ContainerHeader, ContainerStatistics, StatisticsItem, StatisticsTitle, StatisticsSubtitle, StatisticsSpan, Content } from './styles'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const Header = () => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 700
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1200
    },
    {
      month: new Date(2015, 2, 1),
      apples: 1000,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 1820,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 1720,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 2320,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 2520,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 2320,
    },
]

const colors = ['#DBE4F5', '#aa00ff', '#cc66ff', '#eeccff']
const keys = ['apples']
const svgs = [
    { onPress: () => console.log('apples') },
    { onPress: () => console.log('bananas') },
    { onPress: () => console.log('cherries') },
    { onPress: () => console.log('dates') },
]

  return (
    <ContainerHeader>
      <StackedAreaChart
        style={{ height: 200, paddingVertical: 0, justifyContent: 'flex-end' }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={false}
        svgs={svgs}
      >
        <Content align="flex-end" pb="20px">
          <StatisticsTitle>R$ 118.000</StatisticsTitle>
          <ContainerStatistics>
            <StatisticsItem>
              <StatisticsSpan>Incomes</StatisticsSpan>
              <StatisticsSubtitle>
                R$ 39.000
              </StatisticsSubtitle>
            </StatisticsItem>

            <StatisticsItem>
              <StatisticsSpan>Expences</StatisticsSpan>
              <StatisticsSubtitle>
                R$ 4.550
              </StatisticsSubtitle>
            </StatisticsItem>

            <StatisticsItem>
              <StatisticsSpan>Balance</StatisticsSpan>
              <StatisticsSubtitle>
                R$ 1.050
              </StatisticsSubtitle>
            </StatisticsItem>
          </ContainerStatistics>
        </Content>
      </StackedAreaChart>
    </ContainerHeader>
  )
}

export { Header }