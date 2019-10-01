import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,

} from 'react-native';

import {
    Body,
    Right,
    Left,
} from "native-base";



import styles from "./styles";
import { Actions } from 'react-native-router-flux';

const FooterBg = require("../../../assets/AnaSayfa/Bg.png");

const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");



class TarotFooter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1",
            selected5: "key2",
            seg: 2,
        };
    }
    render(){
        return(
            <View style={styles.container1}>
                <View>
                    <ImageBackground style={{ height: 60 }} source={FooterBg}>
                        <View style={styles.container2}>
                            <Left>
                                <TouchableOpacity onPress={this.onFalcilar} >
                                    <Image style={styles.buttonIco} source={Falcilar} />
                                </TouchableOpacity>
                            </Left>
                            <Body>
                                <TouchableOpacity onPress={() => Actions.popTo('AnaSayfa')}  >
                                    <Image style={styles.buttonLoginIconorta} source={FalBaktir} />
                                </TouchableOpacity>
                            </Body>
                            <Right>
                                <TouchableOpacity onPress={()=> Actions.YorumcuPanel()} >
                                    <Image style={styles.buttonIco} source={fmenu} />
                                </TouchableOpacity>
                            </Right>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
 }
}
export default TarotFooter;