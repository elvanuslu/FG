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
import TarotFooter from '../../components/TarotFooter';
// import TarotHeader from '../FalHeader';
// import FalHeader from '../FalHeader';


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

import {Actions} from 'react-native-router-flux';
import CustomTabs from '../../components/CustomTabs';
import CustomHeader from '../../components/CustomHeader';
class YorumcuDetayMedya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 2,
        };
    }
    onHakkimda = () => {
        Actions.YorumcuDetay();
    }
    onMedya = () => {
        Actions.YorumcuDetayMedya();
    }
    onFalCesitleri = () => {
        Actions.YorumcuDetayFalCesitleri();
    }
    onFalCesitleriYorumcu = () => {
        Actions.YorumcuDetayComment();
    }
    //<FalHeader/>
    render() {
        
        return (
            <Container style={styles.container}>
                <ImageBackground source={LoginBg} style={styles.imageContainer}>
                <CustomHeader Left Right/>
                    
                    <Content style={{ marginTop: 5 }}>
                    <ImageBackground source={FilterBar} style={{ width: '100%', height: 100, resizeMode: 'contain', marginTop: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Thumbnail style={{ resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} source={megha} />
                                <Image style={{ width: 125, marginLeft: 0, marginTop: -50, resizeMode: 'contain' }} source={online} />
                                <Image style={{ width: 40, marginLeft: 15, marginTop: 35, resizeMode: 'contain' }} source={onlineChat} />
                                <Text style={styles.labelthin}>62 Puan | 25 Yorum</Text>
                                <View><Text style={styles.labelFalcibeyaz}>Ecem Sultan</Text></View>

                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image style={{ width: 12, marginLeft: 90, marginTop: -10, resizeMode: 'contain' }} source={timeIcon} />
                                    <Text style={styles.labelthin2}>Bekleyen Kişi Sayısı <Text style={{ fontWeight: 'bold' }}> 14</Text> </Text>
                                </View>

                            </View>

                            <View style={{ marginLeft: -150 }}>
                                <TouchableOpacity onPress={this.onPress} >
                                    <Image style={{ width: 25, marginLeft: 0, marginTop: 60, resizeMode: 'contain', }} source={require("../../../assets/YorumcuDetay/Webcam-Chat.png")} />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 25, marginLeft: -40, marginTop: 60, resizeMode: 'contain' }} source={require("../../../assets/YorumcuDetay/Online-Chat.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 25, marginLeft: -50, marginTop: 60, resizeMode: 'contain' }} source={require("../../../assets/YorumcuDetay/Voice-chat.png")} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 25, marginLeft: -60, marginTop: 60, resizeMode: 'contain' }} source={require("../../../assets/YorumcuDetay/Voice-Msg.png")} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 25, marginLeft: -70, marginTop: 60, resizeMode: 'contain' }} source={require("../../../assets/YorumcuDetay/Msg-Txt.png")} />
                            </TouchableOpacity>

                            <View>
                                <TouchableOpacity onPress={this.onPress} >
                                    <Image style={{ width: 15, resizeMode: 'contain', marginTop: 5, marginRight: 5 }} source={optionIcon} />
                                </TouchableOpacity>
                            </View>


                        </ImageBackground>
                       
                        <View style={{ backgroundColor: '#E8E5E5', }}>
                        <ImageBackground source={bgbeyaz} style={{ width: '100%', height: 50, resizeMode: 'contain', marginTop: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Left>
                                    <Text style={styles.labelFiyat}>120₺ </Text>

                                </Left>
                                <Body>
                                    <Text style={styles.labelFiyat2}>’den başlayan fiyatlarla </Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={{ width: 100, marginRight: 5, resizeMode: 'contain' }} source={require("../../../assets/FalciListe/Fortune-Btn.png")} />
                                    </TouchableOpacity>
                                </Right>
                            </ImageBackground>
                        <CustomTabs activeIndex={1}/>
                          
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
                    <TarotFooter />
    
                </ImageBackground>
            </Container>
        );
    }

}
export default YorumcuDetayMedya;

