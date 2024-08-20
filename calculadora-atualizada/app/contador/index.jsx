import React from "react";
import { useState } from "react";
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Buttons from "./components/buttons";
import Input from "./components/input";
import Modal from "react-native-modal";

const App = () => {
    const [total, setTotal] = useState(7320.92);
    const [val, setVal] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    
    function less() {
        const percent = 0.025;
        const val2 = parseFloat(val);
        let first = parseFloat(total) - val2
        let multa = first * percent;
        let newval = first - multa;
        if(newval < 0) {
            setIsModalVisible(() => !isModalVisible);
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
                <Modal isVisible={isModalVisible}>
                    <View style={style.container2}>
                        <Text style={style.title2}>Você não tem dinheiro suficiente</Text>
                        <Button title="Ok" onPress={handleModal} />
                    </View>
                </Modal>
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
        justifyContent: "center",
        alignItems: "center"
    },
    valor: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    txt: {
        fontSize: 18,
        color: 'grey',
    },
    container2: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: 100
    },
    title2: {
        fontSize: 20,
        fontWeight: "bold",
      },
})

export default App