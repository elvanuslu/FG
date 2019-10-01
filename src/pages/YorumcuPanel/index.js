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
    ListItem,
    ScrollableTab,
    Tab,
    Tabs,
    StyleProvider,
} from "native-base";

import styles from "./styles";


const notification = require("../../../assets/Notification-Icon.png");
const BgHeader = require("../../../assets/TarotFal/Bg.png");
const FilterBar = require("../../../assets/KahveFali/Bg1.png");
const megha = require("../../../assets/contacts/megha.png");


const logo = require("../../../assets/TarotFal/Logo.png");


const optionIcon = require("../../../assets/YorumcuDetay/Option-Icon.png");
const timeIcon = require("../../../assets/YorumcuDetay/Time-Icon.png");
const online = require("../../../assets/YorumcuDetay/Online.png");
const onlineChat = require("../../../assets/YorumcuDetay/Online-Bar.png");
const bgbeyaz = require("../../../assets/YorumcuDetay/Bgbeyaz.png");


const yorumlar = require("../../../assets/YorumcuDetay/04.png");

const medya = require("../../../assets/Medya/medyaDis.png");
const hakkinda = require("../../../assets/Medya/Hakkinda.png");
const falcesit = require("../../../assets/Medya/FalCesit.png");

const goruntulukonusma = require("../../../assets/Medya/goruntulugorusme.png");
const sesligorusme = require("../../../assets/Medya/sesligorusme.png");
const seslicevapal = require("../../../assets/Medya/seslicevapal.png");
const canliSohbet = require("../../../assets/Medya/canliSohbet.png");
const yaziliCevapAl = require("../../../assets/Medya/yaziliCevapAl.png");

const tarot = require("../../../assets/Medya/Tarot.png");
const yildizname = require("../../../assets/Medya/Yildizname.png");
const katina = require("../../../assets/Medya/Katina.png");
const su = require("../../../assets/Medya/Tarot.png");
const LoginBg = require("../../../assets/Login.png");


const kahve = require("../../../assets/Medya/Kahve.png");
const zeminbg = require("../../../assets/Kullanici/ZeminBg.png");
const likebutton = require("../../../assets/Kullanici/Like-Btn.png");
const commentBg = require("../../../assets/Kullanici/commentBg.png");
const onlinechat = require("../../../assets/Medya/OnlineChat.png");
const border = require("../../../assets/Kullanici/Border.png");
const msgTxt = require("../../../assets/Medya/MsgTxt.png");
const WebcamChat = require("../../../assets/Medya/WebcamChat.png");
const voicechat = require("../../../assets/Medya/Voicechat.png");
const faldetay = require("../../../assets/Kullanici/Detail-Btn.png");

const YorumcuBg = require("../../../assets/Yorumcu/Bg.png");
const media = require("../../../assets/Yorumcu/Media-Btn.png");
const profile = require("../../../assets/Yorumcu/Profile-Btn.png");


const datas = [
    {
        Id: "1",
        img: tarot,
        img2: onlinechat,
        img3: border,
        text: "Ecem Sultan",
        note: "Bugün ay boşlukta kova burcunda ilerliyor ve akşama kadar bazı belirsizliklerin sürmesi oldukça olası olabilir. Akşam saatlerinde Ay’ın balık burcuna geçmesi ve Mars gezegeni ile stresli bir kare açı yapması gelişen olaylara dürtüsel tepki vermeye açık olabileceğimizi göstermektedir. Bunu doğru yönetmek ve sağduyulu olmamız gereken bir zaman dilimi içindeyiz.",
        time: "26 Ağu 2019, Salı - 12:16",
        Fiyat: "20",
        Zaman: "-35",
    },
    {
        Id: "2",
        img: yildizname,
        img2: msgTxt,
        text: "Medyum Doruk",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "21 Ağu 2018, Perşembe - 15:15",
        Fiyat: "70",
        Zaman: "-70",
    },
    {
        Id: "3",
        img: katina,
        img2: WebcamChat,
        text: "Cansu Umay",
        note: " Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor. Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.",
        time: "10:03 am",
        Fiyat: "20",
        Zaman: "-30",
    },
    {
        Id: "4",
        img: su,
        img2: voicechat,
        text: "Atul Ranjan",
        note: "Failure is temporary, giving up makes it permanent",
        time: "18 Ağu 2018, Çarşamba - 21:12",
        Fiyat: "90",
        Zaman: "-60",
    },
    {
        Id: "5",
        img: tarot,
        img2: msgTxt,
        text: "Saurabh Sahu",
        note: "The biggest risk is a missed opportunity !!",
        time: "1 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "60",
        Zaman: "-1",
    },
    {
        Id: "6",
        img: tarot,
        img2: onlinechat,
        text: "Varun Sahu",
        note: "Wish I had a Time machine . .",
        time: "15 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "30",
        Zaman: "-102",
    }
];

import YorumcuAnaSayfa from "./AnaSayfa";
import YorumcuPanelGuncelle from "../YorumcuPanelGuncelle";
import YorumcuPanelMedya from "../YorumcuPanelMedya";
import BekleyenFallar from "../YorumcuBekleyenFallar";
import YorumcuAldigimYorumlarim from "../YorumcuAldigimYorumlar";
import { getStorage,config } from '../../../service/services';
import {connect} from 'react-redux';
import CustomHeader from '../../components/CustomHeader';
const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");

const customTheme = {
    'NativeBase.Button': {
        customStyleProp: {
            fontFamily: 'Fondamento-Regular',
            color: '#fff',
        },
    }
};

class YorumcuPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 2,
            kullaniciBilgiler:[],
        };
    }


    componentWillMount()
    {
        this.onLoad();
    }
    async onLoad()
    {
        const kullaniciBilgiler  = this.props.settings.kullaniciBilgiler;
        const conf =  await config();
        this.setState({
            photo_base_url:conf.photo_base_url,
            kullaniciBilgiler:kullaniciBilgiler,
        });

        
    }
    
    render() {
        if(this.state.kullaniciBilgiler.length==0)
            return(<View/>);
        return (
           
                <Container style={styles.container}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />
                
                    <ImageBackground source={LoginBg} style={styles.imageContainer}>
                        <CustomHeader Left Right/>

                        <View>
                            <ImageBackground source={YorumcuBg} style={{ width: '100%', height: 200, resizeMode: 'contain', marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>

                                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 150, height: 150, flex: 1 }}>
                                    <Thumbnail style={{ resizeMode: 'contain', alignSelf: 'center', marginTop: 30, height: 75, width: 75 }} source={{uri: this.state.photo_base_url+this.state.kullaniciBilgiler.avatar}} />
                                
                                    <Text style={styles.labelFalcibeyaz}>{this.state.kullaniciBilgiler.fortune_teller.name}</Text>

                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={{ width: 40, marginLeft: -110, marginTop: -120, resizeMode: 'contain' }} source={profile}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={{ width: 40, marginLeft: 175, marginTop: -120, resizeMode: 'contain' }} source={media}></Image>
                                    </TouchableOpacity>
                                </View>

                            </ImageBackground>
                        </View>
                        <View style={styles.contentTabs}>
                            <Tabs tabBarUnderlineStyle='#b7417e' renderTabBar={() => <ScrollableTab underlineStyle="#b7417e" />}>
                                <Tab heading="Ana Sayfa">
                                    <YorumcuAnaSayfa kullaniciBilgiler={this.state.kullaniciBilgiler} />
                                </Tab>
                                <Tab heading="Profil">
                                    <YorumcuPanelGuncelle kullaniciBilgiler={this.state.kullaniciBilgiler} />
                                </Tab>
                                <Tab heading="Medya">
                                    <YorumcuPanelMedya kullaniciBilgiler={this.state.kullaniciBilgiler} />
                                </Tab>
                                <Tab heading="Bekleyen Fallar">
                                    <BekleyenFallar kullaniciBilgiler={this.state.kullaniciBilgiler} />
                                </Tab>
                                <Tab heading="Aldığım Yorumlar">
                                    <YorumcuAldigimYorumlarim kullaniciBilgiler={this.state.kullaniciBilgiler}/>
                                </Tab>
                            </Tabs>
                        </View>


                        <View style={styles.container1}>
                            <View>
                                <ImageBackground style={{ height: 50 }} source={FooterBg}>
                                    <View style={styles.container2}>
                                        <Left>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('FalciDetayListe')} >
                                                <Image style={styles.buttonIco} source={Falcilar} />
                                            </TouchableOpacity>
                                        </Left>
                                        <Body>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('AnaSayfa')} >
                                                <Image style={styles.buttonLoginIconorta} source={FalBaktir} />
                                            </TouchableOpacity>
                                        </Body>
                                        <Right>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('KullaniciPanel')}  >
                                                <Image style={styles.buttonIco} source={fmenu} />
                                            </TouchableOpacity>
                                        </Right>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    </ImageBackground>
                </Container>
          
        );
    }
}
const mapStateToProps = ({ IslemResponse }) => {
    return {
        settings:IslemResponse.settings,
        };
    };
    
    const mapDispatchToProps = {
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(YorumcuPanel);

