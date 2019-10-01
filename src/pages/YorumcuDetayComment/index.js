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
    List,
} from "native-base";

import styles from "./styles";
import TarotFooter from '../../components/TarotFooter';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../../components/CustomHeader';
import CustomTabs from '../../components/CustomTabs';

const notification = require("../../../assets/Notification-Icon.png");

// const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
// const BgHeader = require("../../../assets/TarotFal/Bg.png");
const FilterBar = require("../../../assets/KahveFali/Bg1.png");
const megha = require("../../../assets/contacts/megha.png");

// const goruntulubtn = require("../../../assets/TarotFal/SesliCevap.png");
// const kahvefalibtn = require("../../../assets/TarotFal/TarotFali.png");
// const divider = require("../../../assets/KahveFali/Divider.png");

// const logo = require("../../../assets/TarotFal/Logo.png");
// const genel = require("../../../assets/TarotFal/01.png");
// const iliski = require("../../../assets/TarotFal/02.png");
// const karar = require("../../../assets/TarotFal/03.png");
// const title = require("../../../assets/TarotFal/Title.png");
// const kartsec = require("../../../assets/TarotFal/kartsec.png");
// const kart = require("../../../assets/TarotFal/card.png");

// const KahveFaliBg = require("../../../assets/KahveFali/KahveFalBg.png");
// const CoffeeIcon = require("../../../assets/KahveFali/Coffee-Icon.png");
// const KahveFalBaktirBtn = require("../../../assets/KahveFali/kahvefalibaktirBtn.png");

const optionIcon = require("../../../assets/YorumcuDetay/Option-Icon.png");
const timeIcon = require("../../../assets/YorumcuDetay/Time-Icon.png");
const online = require("../../../assets/YorumcuDetay/Online.png");
const onlineChat = require("../../../assets/YorumcuDetay/Online-Bar.png");
const bgbeyaz = require("../../../assets/YorumcuDetay/Bgbeyaz.png");

const medya = require("../../../assets/YorumcuDetay/02.png");

// const ilgi = require("../../../assets/YorumcuDetay/Areas-of-Interest.png");
// const assement = require("../../../assets/YorumcuDetay/Assessments.png");
// const icon = require("../../../assets/YorumcuDetay/Icon.png");
// const icon2 = require("../../../assets/YorumcuDetay/Icon2.png");
// const icon3 = require("../../../assets/YorumcuDetay/Icon3.png");
// const icon4 = require("../../../assets/YorumcuDetay/Icon4.png");

// const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
// const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
// const fmenu = require("../../../assets/AnaSayfa/Mnu.png");

const tarot = require("../../../assets/Medya/Tarot.png");
const yildizname = require("../../../assets/Medya/Yildizname.png");
const katina = require("../../../assets/Medya/Katina.png");
const su = require("../../../assets/Medya/Tarot.png");
const LoginBg = require("../../../assets/Login.png");

const falcesit = require("../../../assets/Medya/FalCesitleri.png");
const yorumlar = require("../../../assets/Medya/yorumlar.png");
const hakkinda = require("../../../assets/Medya/Hakkinda.png");

const stars = require("../../../assets/Medya/Stars.png");
const onlinechat = require("../../../assets/Medya/OnlineChat.png");
const msgTxt = require("../../../assets/Medya/MsgTxt.png");
const voicechat = require("../../../assets/Medya/Voicechat.png");
const WebcamChat = require("../../../assets/Medya/WebcamChat.png");

const datas = [
    {
        img: tarot,
        img2: onlinechat,
        text: "U*** A***",
        note: "Bugün ay boşlukta kova burcunda ilerliyor ve akşama kadar bazı belirsizliklerin sürmesi oldukça olası olabilir. Akşam saatlerinde Ay’ın balık burcuna geçmesi ve Mars gezegeni ile stresli bir kare açı yapması gelişen olaylara dürtüsel tepki vermeye açık olabileceğimizi göstermektedir. Bunu doğru yönetmek ve sağduyulu olmamız gereken bir zaman dilimi içindeyiz.",
        time: "26 Ağu 2019, Salı - 12:16",
        Fiyat: "120",
    },
    {
        img: yildizname,
        img2:msgTxt,
        text: "A*** E***",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "21 Ağu 2018, Perşembe - 15:15",
        Fiyat: "170",
    },
    {
        img: katina,
        img2:WebcamChat,
        text: "C*** U***",
        note: " Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor. Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.",
        time: "10:03 am",
        Fiyat: "20",
    },
    {
        img: su,
        img2:voicechat,
        text: "A*** R***",
        note: "Failure is temporary, giving up makes it permanent",
        time: "18 Ağu 2018, Çarşamba - 21:12",
        Fiyat: "90",
    },
    {
        img: tarot,
        img2: msgTxt,
        text: "S*** S***",
        note: "The biggest risk is a missed opportunity !!",
        time: "1 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "160",
    },
    {
        img: tarot,
        img2: onlinechat,
        text: "V*** A***",
        note: "Wish I had a Time machine . .",
        time: "15 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "130",
    }
];

class YorumcuDetayComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1",
            selected5: "key2",
            seg: 2,
        };
    }
    onPress = () => {
        Actions.KahveFaliBaktirAsama1();
    }
    onMedya = () => {
        Actions.YorumcuDetayMedya();
    }
    onHakkimda = () => {
        Actions.YorumcuDetay();
    }
    onFalCesitleri = () => {
        Actions.YorumcuDetayFalCesitleri();
    }
    onFalCesitleriYorumcu = () => {
        Actions.YorumcuDetayComment();
    }

 
    render() {
        console.log('detay commment');
        
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
                            <CustomTabs activeIndex={3}/>
                            <Content>

                                <List
                                    dataArray={datas}
                                    renderRow={data =>
                                        <Card style={styles.mb}>
                                            <CardItem>
                                                <Left>
                                                    <Thumbnail source={data.img} />
                                                    <Body>  
                                                        <Text style={styles.labelFalci}>{data.text}</Text>
                                                        <View style={{flexDirection:'row'}}>
                                                            <Thumbnail style={{width:15,resizeMode:'contain',marginTop:-34,marginRight:3}} source={data.img2} />
                                                            <Text style={styles.labelthin3}>Canlı Sohbet</Text>
                                                        </View>
                                                    </Body>
                                                </Left>

                                                <Right>
                                                    <TouchableOpacity onPress={this.onPress} >
                                                        <Image style={{ width: 50, resizeMode: 'contain',marginTop:-30 }} source={stars} />
                                                    </TouchableOpacity>
                                                </Right>

                                            </CardItem>

                                            <CardItem cardBody>
                                                <Body style={{ marginTop: -20, marginLeft: 82 }}>
                                                    <Text note style={styles.labelFalcinote}>
                                                        {data.note}
                                                    </Text>
                                                </Body>
                                               
                                            </CardItem>
                                            <CardItem>
                                                <View style={{alignItems:'flex-end'}}>
                                                    <Text note style={styles.labelFalcinote2}>
                                                        {data.time}
                                                    </Text>
                                                </View>
                                            </CardItem>
                                        </Card>
                                    }
                                />

                            </Content>
                        </View>
                    </Content>
                    <TarotFooter />
                </ImageBackground>
            </Container>
        );
    }

}
export default YorumcuDetayComment;
