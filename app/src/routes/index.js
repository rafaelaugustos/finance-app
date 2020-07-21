import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/Auth/SignIn'
import Overview from '../pages/App/Overview'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes = () => (
	<Navigator screenOptions={{ headerShown: false }}>
		<Screen name="Overview" component={Overview} />
		<Screen name="SignIn" component={SignIn} />
	</Navigator>
)

export default AuthRoutes
