import React from 'react'
import { FlatList } from 'react-native'
import ListItem from './ListItem'

const data = [
	{ id: 1, icon: require('../../assets/icons/food.png'), title: 'Food & Drinks', transactions: 45 },
	{ id: 2, icon: require('../../assets/icons/heart.png'), title: 'Health', transactions: 18 },
	{ id: 3, icon: require('../../assets/icons/car.png'), title: 'Transportation', transactions: 10 },
	{ id: 4, icon: require('../../assets/icons/gym.png'), title: 'Fitness', transactions: 2 },
	{ id: 5, icon: require('../../assets/icons/graduate.png'), title: 'Education', transactions: 4 },
]

const List = () => {
	return <FlatList data={data} renderItem={({ item }) => <ListItem item={item} />} />
}

export { List }
