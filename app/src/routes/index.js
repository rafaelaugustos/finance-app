import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes = () => (
	<Navigator>
		<Screen name="SignIn" component={SignIn} />
	</Navigator>
)

export default AuthRoutes
