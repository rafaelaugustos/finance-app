import React from 'react'
import { Item, Title, SubTitle, Column, Icon, ContainerIcon } from './styles'

const ListItem = ({ item }) => {
  return(
    <Item>
      <ContainerIcon>
        <Icon 
          source={item.icon}
          resizeMode="contain"
        />
      </ContainerIcon>

      <Column>
        <Title>{ item.title }</Title>
        <SubTitle>{ item.transactions } Transactions</SubTitle>
      </Column>
    </Item>
  )
}

export default ListItem