import { StyleSheet } from "react-native";
import { BUTTON_COLOR, INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: PRIMARY_COLOR

    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 30,
        color: SECONDARY_COLOR
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        width: 200,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: SECONDARY_COLOR,
        color: 'black'
        
    },
    result: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        color: SECONDARY_COLOR
    },
    formConatainer: {
        marginVertical: 10
    },
    buttonForm: {
        backgroundColor: BUTTON_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        width: 200
    },
    buttonFormText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
});