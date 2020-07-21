import React from 'react'
import { Item, Title, SubTitle, Column, Icon, ContainerIcon } from './styles'
import { ProgressCircle } from 'react-native-svg-charts'

const ListItem = ({ item }) => {
	return (
		<Item>
			<ProgressCircle
				style={{ height: 50, width: 50 }}
				progress={item.percentual}
				progressColor={item.color}
				strokeWidth={3}
				width={60}
			>
				<ContainerIcon>
					<Icon source={item.icon} resizeMode="contain" />
				</ContainerIcon>
			</ProgressCircle>
			<Column ml="20px">
				<Title>{item.title}</Title>
				<SubTitle>{item.transactions} Transactions</SubTitle>
			</Column>
		</Item>
	)
}

export default ListItem
