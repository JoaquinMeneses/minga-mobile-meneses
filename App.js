import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Index from './src/navigation/Index';
import Home from './src/navigation/Home';
import Mangas from './src/navigation/Mangas';
import UserRegistred from './src/navigation/UserRegistred.jsx';
import SignIn from './src/components/SignIn';
import Register from './src/components/Register';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Drawer.Screen name="Mangas" component={Mangas} options={{ headerShown: false }} />
                <Drawer.Screen name="UserRegistred" component={UserRegistred} options={{ headerShown: false }} />
                
                <Drawer.Screen name="Index" component={Index} options={{ headerShown: false }} />
                <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
                <Drawer.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
