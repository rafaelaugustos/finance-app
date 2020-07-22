import React from 'react'
import { Modal } from 'react-native'
import { ButtonEntry, ContainerEntry, ContentEntry } from './styles'

const AddEntry = () => {
	return (
		<ButtonEntry>
			<Modal>
				<ContainerEntry>
					<ContentEntry></ContentEntry>
				</ContainerEntry>
			</Modal>
		</ButtonEntry>
	)
}

export { AddEntry }
