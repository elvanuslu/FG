import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
} from 'react-native';

import {
    Container,
} from "native-base";
 
import styles from "./styles";
import { Actions } from 'react-native-router-flux';
const BgHeader = require("../../../assets/Welcome.png");

class AnaEkran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isRadioSelected: true,
        };

    }
 
    onPress = () => {
         
    }
    onLogin = () => {
        Actions.UyeGirisi();
    }
    onRegister = () => {
        Actions.Register();
    }
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />
                <View style={styles.container}>
                    <ImageBackground source={BgHeader} style={styles.imageContainer} >
                       
                        <View style={styles.container3}>

                        </View>
                        <View style={styles.container2}>
                            <View style={styles.ustContetn}>
                                <TouchableOpacity style={{ marginRight: 10, marginLeft: 5, }} onPress={this.onLogin} >
                                    <Image style={{ width: 110, resizeMode: 'contain' }} source={require("../../../assets/GirisYap.png")} />
                                </TouchableOpacity>
                                <Image style={{ width: 30, resizeMode: 'contain', alignSelf: 'center', marginTop: 5, }} source={require("../../../assets/yada.png")} />
                                <TouchableOpacity style={{ marginLeft: 10, }} onPress={this.onRegister}>
                                    <Image style={{ width: 110, resizeMode: 'contain' }} source={require("../../../assets/SignUp-Btn.png")} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContent}>
                                <TouchableOpacity onPress={this.onPress} >
                                    <Image style={styles.buttonLoginIcon} source={require("../../../assets/FB-Button.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onPress} >
                                    <Image style={styles.buttonLoginIcon} source={require("../../../assets/G-Button.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onPress} style={styles.buttonContent} >
                                    <Image style={styles.buttonLoginIcon} source={require("../../../assets/Guest-Button.png")} />
                                </TouchableOpacity>
                                
                           </View>
                            <View style={styles.container1}>

                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Container>
        );
    }
}
export default AnaEkran