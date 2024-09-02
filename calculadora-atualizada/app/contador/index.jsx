import React from "react";
import { useState } from "react";
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Buttons from "./components/buttons";
import LittleBtn from "./components/littleBtn";
import Input from "./components/input";
import Modal from "react-native-modal";

const App = () => {
    const [total, setTotal] = useState(7320.92);
    const [val, setVal] = useState(0);
    const [newVal, setNewVal] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const handleModal2 = () => setIsModalVisible2(() => !isModalVisible2);
    
    function less() {
        const percent = 0.025;
        const val2 = parseFloat(val);
        if(val2 <= 0) return;
        let first = parseFloat(total) - val2
        let multa = first * percent;
        let newvall = first - multa;
        if(newvall < 0) {
            setIsModalVisible(() => !isModalVisible);
            return;
        }
        setNewVal(newvall);
        //setTotal(newval.toFixed(2));
        handleModal2();
    }

    function add() {
        const percent = 0.01;
        const val2 = parseFloat(val);
        if(val2 <= 0) return;
        let bonus = val2 * percent;
        let newvall = parseFloat(total) + (val2 + bonus);
        setNewVal(newvall);
        //setTotal(newval.toFixed(2));
        handleModal2();
    }


    return(
       <View>
            <View style={style.container}>
                <Modal isVisible={isModalVisible} style={style.modal}>
                    <View style={style.container2}>
                        <Text style={style.title2}>Você não tem dinheiro suficiente</Text>
                        <Button title="Ok" onPress={handleModal} color="red"/>
                    </View>
                </Modal>
                <Modal isVisible={isModalVisible2}>
                    <View style={style.container2}>
                        <Text style={style.title2}>Tem certeza que quer realizar essa transação?</Text>
                        <Text>Saldo Atual: {total}</Text>
                        <Text>Saldo Final: {newVal.toFixed(2)}</Text>
                        <View style={style.btns}>
                            <LittleBtn  
                                btn1={"Cancelar"}
                                btn2={"Confirmar"}
                                press1={() => {handleModal2()}}
                                press2={() => {setTotal(newVal.toFixed(2)); handleModal2();}}
                            />
                        </View>
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
        justifyContent: "space-evenly",
        backgroundColor: "white",
        height: 200
    },
    title2: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    btns: {
        flexDirection: "row",
        rowGap: 20,
        alignItems: "center",
    },
})

export default App