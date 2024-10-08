import {useState, useRef} from "react";
import {View, StyleSheet, Text, Image, Button, TouchableOpacity, Linking} from "react-native";
import {CameraView, useCameraPermissions} from "expo-camera";
import CameraManager from "expo-camera/build/legacy/ExpoCameraManager";
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default Camera = () => {
    const [permissions, askPermission] = useCameraPermissions();
    const [picture, setPicture] = useState(null);
    const cameraRef = useRef(null);
    const [facing, setFacing] = useState("front");
    const [scanner, setScanner] = useState(false);
    const [scanned, setScanned] = useState(false);

    if(!permissions) {
        return (
            <View style={styles.container}></View>
        )
    }
    if (!permissions.granted){
        return(
            <View style={styles.container}>
                <Text style={styles.alert}>Você precisa da permissão para utilizar a câmera</Text>
                <Button title={"Pedir permissão"} onPress={askPermission}/>
            </View>
        )
    }

    const savePic = async () => {
        await MediaLibrary.saveToLibraryAsync(picture.uri);
        setPicture(null);
    };

    const takePic = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setPicture(foto);
    }

    const changeCam = () => {
        if(facing === "front"){
            setFacing("back");
        } else {
            setFacing("front");
        }
    }

    const readQr = async ({ type, data }) => {
        setScanned(true);
        await Linking.openURL(data);
        setScanned(false);
    };

    return (
        <View style={styles.container}>
        {picture ? (
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: picture.uri }} />
                    <View style={styles.cambtn}>
                        <TouchableOpacity onPress={() => setPicture(null)}>
                            <Image
                                style={styles.img2}
                                source={require('../../assets/trashcan.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {savePic()}}>
                            <Image
                                style={styles.img2}
                                source={require('../../assets/diskette.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                {scanner ? (
                        <View style={styles.camera}>
                            <BarCodeScanner
                                onBarCodeScanned={scanned ? undefined : readQr}
                                style={StyleSheet.absoluteFillObject}
                            />
                            <View style={styles.cambtn}>
                                <TouchableOpacity style={styles.button} onPress={() => setScanner(!scanner)}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../../assets/qr-code.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : (
                        <CameraView facing={facing} style={styles.camera} ref={cameraRef}>
                            <View style={styles.cambtn}>
                                <TouchableOpacity style={styles.button} onPress={() => takePic()}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../../assets/camera.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => changeCam()}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../../assets/switch-camera.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => setScanner(!scanner)}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../../assets/qr-code.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    )}
                </View>
                )}
        </View>

    )
}

const styles = StyleSheet.create({
    cambtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'flex-end',
        marginBottom: 20,
        width: 300
    },
    alert: {
        color: "red",
        textAlign: "center",
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#CCC",
    },
    img: {
        width: 500,
        height: 500,
        padding: 30,
        alignSelf: 'center'
    },
    img2: {
        width: 50,
        height: 50
    }
})