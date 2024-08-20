import React from "react";
import { useState } from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
import Buttons from "./components/buttons";
import Input from "./components/input";

const App = () => {
    const [total, setTotal] = useState(7320.92);
    const [val, setVal] = useState(0);
    
    function less() {
        const percent = 0.025;
        const val2 = parseFloat(val);
        let first = parseFloat(total) - val2
        let multa = first * percent;
        let newval = first - multa;
        if(newval < 0) {
            return;
        } 
        setTotal(newval.toFixed(2));
    }

    function add() {
        const percent = 0.01;
        const val2 = parseFloat(val);
        let bonus = val2 * percent;
        let newval = parseFloat(total) + (val2 + bonus);
        if(newval < 0) {
            return;
        } 
        setTotal(newval.toFixed(2));
    }


    return(
       <View>
            <View style={style.container}>
                <Image source={require('../../assets/santander.png')}/>
                <Text style={style.txt}>Saldo Atual na Conta</Text>
                <Text style={style.valor}>R$ {total}</Text>
                <Text style={style.txtNormal}>Digite o valor abaixo e escolha uma das operações bancárias</Text>
                <Input 
                    onchange={setVal}
                />
                <Buttons 
                    btn1={"Sacar"}
                    btn2={"Depositar"}
                    press1={() => {less()}}
                    press2={() => {add()}}
                />
            </View>
       </View> 
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    },
    valor: {
        fontSize: 40,
        fontWeight: 700
    },
    txt: {
        fontSize: 18,
        color: 'grey',
    },
})

export default App