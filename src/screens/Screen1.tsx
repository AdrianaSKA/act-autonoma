import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Screen1 = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Bienvenido</Text>
            
            <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/6470/6470993.png" }}
                style={styles.image}
            />
            
            <TouchableOpacity style= {styles.buttonForm}
                onPress={()=> navigation.dispatch(CommonActions.navigate({name: 'Screen2'}))}
            >
                <Text style={styles.buttonFormText}>Acceder</Text>
            
            </TouchableOpacity>
        </View>
    );
    };
