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
    List,
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

const medya = require("../../../assets/YorumcuDetay/02.png");

const ilgi = require("../../../assets/YorumcuDetay/Areas-of-Interest.png");
const assement = require("../../../assets/YorumcuDetay/Assessments.png");
const icon = require("../../../assets/YorumcuDetay/Icon.png");
const icon2 = require("../../../assets/YorumcuDetay/Icon2.png");
const icon3 = require("../../../assets/YorumcuDetay/Icon3.png");
const icon4 = require("../../../assets/YorumcuDetay/Icon4.png");

const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");

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
        img2: msgTxt,
        text: "A*** E***",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "21 Ağu 2018, Perşembe - 15:15",
        Fiyat: "170",
    },
    {
        img: katina,
        img2: WebcamChat,
        text: "C*** U***",
        note: " Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor. Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.",
        time: "10:03 am",
        Fiyat: "20",
    },
    {
        img: su,
        img2: voicechat,
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

class YorumcuAldigimYorumlarim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1",
            selected5: "key2",
            seg: 2,
            datas:[],
        };
    }
    onPress = () => {
        this.props.navigation.navigate("KahveFaliBaktirAsama1");
    }

    componentWillMount()
    {
        const kullaniciBilgiler = this.props.kullaniciBilgiler;
        let datas=[];
        kullaniciBilgiler.comment.map((data,index)=>{
            datas.push({img:tarot,img2:tarot,text:'V*** A***',note:data.comment,time:data.create_at,Fiyat:'0'});
        });

        this.setState({
            datas:datas,
        })
    }

    
    render() {
        return (
            <Container style={styles.container}>
                <ImageBackground source={LoginBg} style={styles.imageContainer}>
                    
                    <Content style={{ marginTop: 0 }}>

                        <View style={{ backgroundColor: '#E8E5E5', }}>

                            <Content style={{ marginTop: 5 }}>

                                <List
                                    dataArray={this.state.datas}
                                    renderRow={data =>
                                        <Card style={styles.mb}>
                                            <CardItem>
                                                <Left>
                                                    <Thumbnail source={data.img} />
                                                    <Body>
                                                        <Text style={styles.labelFalci}>{data.text}</Text>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Thumbnail style={{ width: 15, resizeMode: 'contain', marginTop: -25, marginRight: 3 }} source={data.img2} />
                                                            <Text style={styles.labelthin3}>Canlı Sohbet</Text>
                                                        </View>
                                                    </Body>
                                                </Left>

                                                <Right>
                                                    <TouchableOpacity onPress={this.onPress} >
                                                        <Image style={{ width: 50, resizeMode: 'contain', marginTop: -30 }} source={stars} />
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
                                                <View style={{ alignItems: 'flex-end' }}>
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
                    <View style={{ marginBottom: 1 }}>

                    </View>


                   


                </ImageBackground>
            </Container>
        );
    }

}
export default YorumcuAldigimYorumlarim;
// <TarotFooter />