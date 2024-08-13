import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Pressable} from 'react-native';
import ButtonLine from "./components/ButtonLine";

const App = () => {
    const [value, setValue] = useState('');

    function display(stuff) {
        if(stuff == 'Res') {
            setValue('');
        } else {
            if(isNaN(stuff)) {
                if(value == '') return;
                if(isNaN(value[value.length - 1])) return;
            }
            setValue(value + stuff);
        }
    }

    function result() {
        try {
            if(isNaN(value[value.length - 1])) return;
            let result = eval(value);
            setValue(result);
        } 
        catch (error) {
            setValue('Err');
        }
    }

    function removeLast() {
        let asd = value.slice(0, -1);
        setValue(asd);
    }

    return(
        <View style={styles.main}>
            <View style={styles.calculator}>
                <SafeAreaView style={styles.display}>
                    <TextInput value={value} style={styles.dis}></TextInput>
                </SafeAreaView>
                <View>
                    <ButtonLine 
                        first={7}
                        second={8}
                        third={9}
                        fourth={'+'}

                        style1={styles.numButton}
                        style2={styles.numButton}
                        style3={styles.numButton}
                        style4={styles.operButton}

                        press1={() => display(7)}
                        press2={() => display(8)}
                        press3={() => display(9)}
                        press4={() => display('+')}
                    />
                    <ButtonLine 
                        first={4}
                        second={5}
                        third={6}
                        fourth={'-'}

                        style1={styles.numButton}
                        style2={styles.numButton}
                        style3={styles.numButton}
                        style4={styles.operButton}

                        press1={() => display(4)}
                        press2={() => display(5)}
                        press3={() => display(6)}
                        press4={() => display('-')}
                    />
                    <ButtonLine 
                        first={1}
                        second={2}
                        third={3}
                        fourth={'*'}

                        style1={styles.numButton}
                        style2={styles.numButton}
                        style3={styles.numButton}
                        style4={styles.operButton}

                        press1={() => display(1)}
                        press2={() => display(2)}
                        press3={() => display(3)}
                        press4={() => display('*')}
                    />
                    <ButtonLine 
                        first={'='}
                        second={0}
                        third={'Res'}
                        fourth={'/'}

                        style1={styles.operButton}
                        style2={styles.numButton}
                        style3={styles.operButton}
                        style4={styles.operButton}

                        press1={() => result()}
                        press2={() => display(0)}
                        press3={() => display('Res')}
                        press4={() => display('/')}
                    />

                    <ButtonLine 
                        first={'.'}
                        second={'CE'}

                        style1={styles.operButton}
                        style2={styles.operButton}

                        press1={() => display('.')}
                        press2={() => removeLast()}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#222',
        flex: 1
    },
    calculator: {
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        borderRadius: 20
    },
    display: {
        backgroundColor: '#fff',
        marginBottom: 40,
        width: 300,
        height: 60,
    },
    dis: {
        fontSize: 30
    },  
    view: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        marginBottom: 20
    },
    numButton: {
        height: 60,
        width: 60,
        backgroundColor: '#5E5F64',
    },
    operButton: {
        height: 60,
        width: 60,
        backgroundColor: '#FBE24C'
    }
})

export default App;