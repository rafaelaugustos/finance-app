import React from 'react'
import { FlatList } from 'react-native'
import ListItem from './ListItem'
import { Content } from './styles'

const data = [
	{
		id: 1,
		icon: require('icons/food.png'),
		title: 'Food & Drinks',
		transactions: 45,
		color: '#4CD95F',
		percentual: 0.9,
	},
	{
		id: 2,
		icon: require('icons/heart.png'),
		title: 'Health',
		transactions: 18,
		color: '#2E7AFF',
		percentual: 0.8,
	},
	{
		id: 3,
		icon: require('icons/car.png'),
		title: 'Transportation',
		transactions: 10,
		color: '#FAC677',
		percentual: 0.6,
	},
	{
		id: 4,
		icon: require('icons/gym.png'),
		title: 'Fitness',
		transactions: 2,
		color: '#F6729D',
		percentual: 0.3,
	},
	{
		id: 5,
		icon: require('icons/graduate.png'),
		title: 'Education',
		transactions: 4,
		color: '#7C5DFF',
		percentual: 0.2,
	},
]

const List = () => {
	return (
		<Content>
			<FlatList
				data={data}
				renderItem={({ item }) => <ListItem item={item} />}
			/>
		</Content>
	)
}

export { List }
