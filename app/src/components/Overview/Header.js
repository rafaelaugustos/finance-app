import React from 'react'
import { ContainerHeader, ContainerStatistics, StatisticsItem, StatisticsTitle, StatisticsSubtitle, StatisticsSpan, Content } from './styles'

const Header = () => {
  return (
    <ContainerHeader>
      <Content>
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
    </ContainerHeader>
  )
}

export { Header }