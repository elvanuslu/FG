import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,

} from 'react-native';

import {
    Body,
    Container,
    Content,
    Button,
    Icon,
    Right,
    Badge,
    Left,
    Header,
    Card,
    CardItem,
    Thumbnail,
    Form,
    Picker,
    Item,
    Textarea,
    Segment,
} from "native-base";

import styles from "./styles";
 


const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const notification = require("../../../assets/Notification-Icon.png");
const BgHeader = require("../../../assets/TarotFal/Bg.png");
const FilterBar = require("../../../assets/KahveFali/Bg1.png");
const megha = require("../../../assets/contacts/megha.png");

const goruntulubtn = require("../../../assets/TarotFal/SesliCevap.png");
const kahvefalibtn = require("../../../assets/TarotFal/TarotFali.png");
const divider = require("../../../assets/KahveFali/Divider.png");

const logo = require("../../../assets/TarotFal/Logo.png");
const genel = require("../../../assets/TarotFal/01.png");
const iliski = require("../../../assets/TarotFal/02.png");
const karar = require("../../../assets/TarotFal/03.png");
const title = require("../../../assets/TarotFal/Title.png");
const kartsec = require("../../../assets/TarotFal/kartsec.png");
const kart = require("../../../assets/TarotFal/card.png");

const KahveFaliBg = require("../../../assets/KahveFali/KahveFalBg.png");
const CoffeeIcon = require("../../../assets/KahveFali/Coffee-Icon.png");
const KahveFalBaktirBtn = require("../../../assets/KahveFali/kahvefalibaktirBtn.png");

const optionIcon = require("../../../assets/YorumcuDetay/Option-Icon.png");
const timeIcon = require("../../../assets/YorumcuDetay/Time-Icon.png");
const online = require("../../../assets/YorumcuDetay/Online.png");
const onlineChat = require("../../../assets/YorumcuDetay/Online-Bar.png");
const bgbeyaz = require("../../../assets/YorumcuDetay/Bgbeyaz.png");

//const medya = require("../../../assets/YorumcuDetay/02.png");
const falcesit = require("../../../assets/YorumcuDetay/03.png");
const yorumlar = require("../../../assets/YorumcuDetay/04.png");
const ilgi = require("../../../assets/YorumcuDetay/Areas-of-Interest.png");
const assement = require("../../../assets/YorumcuDetay/Assessments.png");
const icon = require("../../../assets/YorumcuDetay/Icon.png");
const icon2 = require("../../../assets/YorumcuDetay/Icon2.png");
const icon3 = require("../../../assets/YorumcuDetay/Icon3.png");
const icon4 = require("../../../assets/YorumcuDetay/Icon4.png");

const m1 = require("../../../assets/Medya/01.png");
const m2 = require("../../../assets/Medya/02.png");
const m3 = require("../../../assets/Medya/03.png");
const m4 = require("../../../assets/Medya/04.png");
const m5 = require("../../../assets/Medya/05.png");
const medya = require("../../../assets/Medya/Medya.png");
const hakkinda = require("../../../assets/Medya/Hakkinda.png");

const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");
const LoginBg = require("../../../assets/Login.png");


class YorumcuPanelMedya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 2,
        };
    }
    onHakkimda = () => {
        this.props.navigation.navigate("YorumcuDetay");
    }
    onMedya = () => {
        this.props.navigation.navigate("YorumcuDetayMedya");
    }
    onFalCesitleri = () => {
        this.props.navigation.navigate("YorumcuDetayFalCesitleri");
    }
    onFalCesitleriYorumcu = () => {
        this.props.navigation.navigate("YorumcuDetayComment");
    }
    //<FalHeader/>
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={LoginBg} style={styles.imageContainer}>
                    
                    
                    <Content style={{ marginTop: 0 }}>
                        <View style={{ backgroundColor: '#E8E5E5', }}>
                        
                          
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Image style={{ height: 225, marginLeft: -70, marginTop: 0, resizeMode: 'contain' }} source={m1} />
                                <Image style={{ height: 130, marginLeft: -140, marginTop: 0, resizeMode: 'contain' }} source={m2} />
                                <Image style={{ height: 130, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={m3} />


                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Image style={{ height: 130, marginLeft: -70, marginTop: 10, resizeMode: 'contain' }} source={m4} />
                                <Image style={{ height: 220, marginLeft: -135, marginTop: -80, resizeMode: 'contain' }} source={m3} />


                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginBottom: 20 }}>
                                <Image style={{ height: 268, marginLeft: -5, marginTop: 10, resizeMode: 'contain' }} source={m5} />
                            </View>
                        
                        </View>
                      </Content>
    
                </ImageBackground>
            </Container>
        );
    }

}
export default YorumcuPanelMedya;

//<TarotFooter />
