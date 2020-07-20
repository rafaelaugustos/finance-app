import React from 'react'
import { FlatList } from 'react-native'
import ListItem from './ListItem'
import { Content } from './styles'

const data = [
	{ id: 1, icon: require('icons/food.png'), title: 'Food & Drinks', transactions: 45 },
	{ id: 2, icon: require('icons/heart.png'), title: 'Health', transactions: 18 },
	{ id: 3, icon: require('icons/car.png'), title: 'Transportation', transactions: 10 },
	{ id: 4, icon: require('icons/gym.png'), title: 'Fitness', transactions: 2 },
	{ id: 5, icon: require('icons/graduate.png'), title: 'Education', transactions: 4 },
]

const List = () => {
	return (
		<Content>
			<FlatList data={data} renderItem={({ item }) => <ListItem item={item} />} />
		</Content>
	)
}

export { List }
