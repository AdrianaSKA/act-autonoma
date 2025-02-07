import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    title: string,
    handleDivision: () => void;
}


export const ButtonComponent = ({title, handleDivision} : Props) => {
    return (
        <TouchableOpacity style= {styles.buttonForm}
            onPress={handleDivision}
        >
            <Text style={styles.buttonFormText}>{title}</Text>
            
        </TouchableOpacity>
    )
}