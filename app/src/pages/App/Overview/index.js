import React from 'react'
import { Header, List } from 'src/components/Overview'
import { AddEntry } from 'src/components/common'
import { Container } from './styles'

const Overview = () => {
	return (
		<Container>
			<Header />
			<List />
			<AddEntry />
		</Container>
	)
}

export default Overview
