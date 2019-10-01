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
} from "native-base";

import styles from "./styles";
import { getRequest } from '../../../service/services';


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
const gorusmeBaslat = require("../../../assets/Yorumcu/GorusmeBaslat.png");
const goruntu = require("../../../assets/Yorumcu/BgKare1.png");
const sesliGorusme = require("../../../assets/Yorumcu/BgKare2.png");
const sesliCevapAl = require("../../../assets/Yorumcu/BgKare3.png");
const canliSohbetbg = require("../../../assets/Yorumcu/BgCanliSohbet.png");
const BgYaziliCevapAl = require("../../../assets/Yorumcu/BgYaziliCevapAl.png");
const toplamKazanc = require("../../../assets/Yorumcu/BgToplamKazanc.png");
const bekleyenkazanc = require("../../../assets/Yorumcu/BgBekleyenKazanc.png");



const datas = [
    {
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
        img: yildizname,
        img2: msgTxt,
        text: "Medyum Doruk",
        note: "One needs courage to be happy and smiling all time . . ",
        time: "21 Ağu 2018, Perşembe - 15:15",
        Fiyat: "70",
        Zaman: "-70",
    },
    {
        img: katina,
        img2: WebcamChat,
        text: "Cansu Umay",
        note: " Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor. Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.Deneme Notları Buraya Gelecek açıklamaları buradan okumalısınız, kişi hakkında açıklamalar başlıyor.",
        time: "10:03 am",
        Fiyat: "20",
        Zaman: "-30",
    },
    {
        img: su,
        img2: voicechat,
        text: "Atul Ranjan",
        note: "Failure is temporary, giving up makes it permanent",
        time: "18 Ağu 2018, Çarşamba - 21:12",
        Fiyat: "90",
        Zaman: "-60",
    },
    {
        img: tarot,
        img2: msgTxt,
        text: "Saurabh Sahu",
        note: "The biggest risk is a missed opportunity !!",
        time: "1 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "60",
        Zaman: "-1",
    },
    {
        img: tarot,
        img2: onlinechat,
        text: "Varun Sahu",
        note: "Wish I had a Time machine . .",
        time: "15 Ağu 2018, Çarşamba - 18:13",
        Fiyat: "30",
        Zaman: "-102",
    }
];
export default  class YorumcuAnaSayfa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 2,
            falCount:[],
            
        };
    }

    async componentWillMount()
    {
        let kullaniciBilgiler = this.props.kullaniciBilgiler;
        let falBakmaYontemleri = await getRequest("fortune-method");
        falBakmaYontemleri = falBakmaYontemleri.data.data;
        
        let falCount = [];
        let i = 0;
       
        falBakmaYontemleri.map((methoditem,methodindex)=>{
             
            if(methodindex==0)
            {
                falCount.push({id:methoditem.id,count:0,name:methoditem.name});
            }
            kullaniciBilgiler.comment.map((item,index)=>{
                if(methoditem.id===item.fortune_method_id)
                {
                    falCount[i].count++;
                    console.log('girid',falCount);
                    
                }
            })
            if(0!=methodindex)
            {
                falCount.push({id:methoditem.id,count:0,name:methoditem.name});
                i++;
            }
        });

        this.setState({
            falCount:falCount,
        })
        
    }
     
    
    render(){
        
        return(
            <Content style={styles.contentWrap}>
                <View style={{ backgroundColor: '#e1e1e1', }}>
                    <Card style={styles.mb}>
                        <CardItem style={{ marginTop: 0 }}>
                            <List
                                dataArray={datas}
                                renderRow={data =>
                                    <ListItem avatar>
                                        <Left style={{ marginTop: -10 }}>
                                            <ImageBackground source={border} style={styles.imageContainer3}>
                                                <Text style={styles.labelDakika2}>{data.Zaman} </Text>
                                                <Text style={styles.labelDakika3}>Gün</Text>
                                            </ImageBackground>
                                            <Text style={styles.labelFalci2}>{data.text}</Text>
                                            <Body>
                                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                                    <Image style={{ width: 17, marginTop: 5, marginRight: 5, resizeMode: 'contain' }} source={WebcamChat}></Image>
                                                    <Image style={{ width: 17, marginTop: -30, resizeMode: 'contain' }} source={tarot}></Image>
                                                    <TouchableOpacity onPress={this.onPress} >
                                                        <Image style={{ width: 75, marginLeft: 5, marginTop: -10, resizeMode: 'contain' }} source={gorusmeBaslat}></Image>
                                                    </TouchableOpacity>

                                                </View>
                                            </Body>
                                        </Left>
                                    </ListItem>}
                            />
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem style={{ marginTop: 5, flex: 1, flexDirection: 'column', alignContent: 'space-between'}}>
                            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between' }}>
                           <View style={{flex:1, flexDirection:'row', alignContent:'space-between'}}>
                             <Text style={styles.labelthina}>Fal Yorumlama</Text>
                             
                           </View>
                            <View style={{ marginRight:5, flexDirection: 'row', alignContent: 'space-between' }}>
                                <TouchableOpacity style={{marginRight:10}} onPress={this.onPress} >
                                    <Text style={styles.labelthina}>Ay</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginRight: 10 }}  onPress={this.onPress} >
                                    <Text style={styles.labelthinb}>Hafta</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={this.onPress} >
                                    <Text style={styles.labelthinb}>Gün</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                               {
                                   this.state.falCount.map((item,index)=>{
                                    return(
                                        <ImageBackground source={goruntu} style={{ width: '100%', height: 75, resizeMode: 'contain', marginLeft: 0, marginRight: 10, flex: 1, }}>
                                            <Text style={styles.labelFalcinote}>{item.name}</Text>
                                            <Text style={styles.labelFalciSiyah}>{item.count}</Text>
                                        </ImageBackground>
                                       )
                                   })
                               }
                                
                            </View>
                            
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem style={{ marginTop: 5, flex: 1, flexDirection: 'column', alignContent: 'space-between' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignContent: 'space-between' }}>
                                    <Text style={styles.labelthina}>Raporlar</Text>

                                </View>
                                <View style={{ marginRight: 5, flexDirection: 'row', alignContent: 'space-between' }}>
                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={this.onPress} >
                                        <Text style={styles.labelthina}>Ay</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginRight: 10 }} onPress={this.onPress} >
                                        <Text style={styles.labelthinb}>Hafta</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Text style={styles.labelthinb}>Gün</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                           
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <ImageBackground source={toplamKazanc} style={{ width: '100%', height: 75, resizeMode: 'contain', marginLeft: 0, marginRight: 10, flex: 1, }}>
                                    <Text style={styles.labelFalcinote}>Toplam Kazanç</Text>
                                    <Text style={styles.labelFalciSiyah}>45</Text>
                                </ImageBackground>
                                <ImageBackground source={bekleyenkazanc} style={{ width: '100%', height: 75, resizeMode: 'contain', marginRight: 0, flex: 1, }}>
                                    <Text style={styles.labelFalcinote}>Bekleyen Kazanç</Text>
                                    <Text style={styles.labelFalciSiyah}>35</Text>
                                </ImageBackground>

                            </View>
                        </CardItem>
                    </Card>
                </View>
            </Content>
        );
    }
}