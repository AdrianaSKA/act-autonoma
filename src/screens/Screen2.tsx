import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

interface DivisionForm{
    num1: string;
    num2: string;
}



export const Screen2 = () => {

    const [divisionForm, setDivisionForm] = useState<DivisionForm>({ num1: '', num2: '' });

    const [result, setResult] = useState<string>('');


    const handleChange = (name: string, value: string): void => {
        setDivisionForm({ ...divisionForm, [name]: value });
    }

    const handleDivision = () => {
        const { num1, num2 } = divisionForm;
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if(num1 === '' || num2 === ''){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }

        if (number1 === 0 && number2 === 0) {
            setResult('INDETERMINACIÓN');
        } else if (number2 === 0) {
            setResult('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            setResult(`El resultado es: ${number1 / number2}`);
        
        }
    };


    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Formulario</Text>
            
            <View>
                <InputComponent text='Numero 1' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num1'
                />
                
                <InputComponent text='Numero 2' 
                keyboard='number-pad' 
                handleChange={handleChange}
                name='num2'
                />
                <ButtonComponent title='Dividir'
                    handleDivision={handleDivision}
                />
            </View>
            
            <Text style={styles.result}>{result}</Text>
        </View>
    );
}
