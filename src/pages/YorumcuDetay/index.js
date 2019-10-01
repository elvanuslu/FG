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
} from "native-base";

import styles from "./styles";
import TarotFooter from '../../components/TarotFooter';

import {Actions} from 'react-native-router-flux';
import CustomHeader from '../../components/CustomHeader';
import CustomTabs from '../../components/CustomTabs';


//const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const notification = require("../../../assets/Notification-Icon.png");
//const BgHeader = require("../../../assets/TarotFal/Bg.png");
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
const hakkinda = require("../../../assets/YorumcuDetay/01.png");
const medya = require("../../../assets/YorumcuDetay/02.png");
const falcesit = require("../../../assets/YorumcuDetay/03.png");
const yorumlar = require("../../../assets/YorumcuDetay/04.png");
const ilgi = require("../../../assets/YorumcuDetay/Areas-of-Interest.png");
const assement = require("../../../assets/YorumcuDetay/Assessments.png");
const icon = require("../../../assets/YorumcuDetay/Icon.png");
const icon2 = require("../../../assets/YorumcuDetay/Icon2.png");
const icon3 = require("../../../assets/YorumcuDetay/Icon3.png");
const icon4 = require("../../../assets/YorumcuDetay/Icon4.png");

const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");
const LoginBg = require("../../../assets/Login.png");


class YorumcuDetay extends Component{
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
    onMedya=()=>{
        Actions.YorumcuDetayMedya();
    }
    onHakkimda=()=>{
        Actions.YorumcuDetay();
    }
    onFalCesitleri = () => {
        Actions.YorumcuDetayFalCesitleri();
    }
    onFalCesitleriYorumcu = () => {
        Actions.YorumcuDetayComment();
    }
    render(){
        console.log('yorumcu detay');
        
        return(
            <Container style={styles.container}>
                <ImageBackground source={LoginBg} style={styles.imageContainer}>
                    <CustomHeader Left Right/>
                  
                    <Content style={{  marginTop: 5 }}>
                        <ImageBackground source={FilterBar} style={{ width: '100%', height: 100, resizeMode: 'contain', marginTop: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                           <View style={{flexDirection:'column'}}>
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

                            <View style={{ marginLeft:-150 }}>
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
                                <Image style={{ width: 15, resizeMode: 'contain',marginTop:5, marginRight:5}} source={optionIcon} />
                            </TouchableOpacity>
                           </View>
                         
                         
                        </ImageBackground>
                        <View style={{ backgroundColor: '#E8E5E5',}}>
                         <ImageBackground source={bgbeyaz} style={{ width: '100%', height: 50, resizeMode: 'contain', marginTop: 0, flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Left>
                                    <Text style={styles.labelFiyat}>120₺ </Text>
                                 
                                </Left>
                                <Body>
                                    <Text style={styles.labelFiyat2}>’den başlayan fiyatlarla </Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={{ width: 100,marginRight:5, resizeMode: 'contain' }} source={require("../../../assets/FalciListe/Fortune-Btn.png")} />
                                    </TouchableOpacity>
                                </Right>
                        </ImageBackground>
                        <CustomTabs activeIndex={0}/>
                                <Card style={styles.mb}>
                                    <CardItem>
                                        <Text style={styles.labelAciklama}>"Merhaba ben Ecem Sultan. Uzun yıllardır birçok kişiye fal deneyimlerim ile manevi bir destek vermeye çalıştım."</Text> 
                                    </CardItem>
                                    <CardItem style={{ paddingVertical: 0 }}>
                                        <Body >
                                        <Text style={styles.labelAciklama2}>Umarım bugünden sonra Fal Guru üzerinden siz değerli takipçilerime de hizmet vermeyi isterim. Hislerimin kuvvetli olduğuna inanan biriyim ve bu alanda daha önce kafelerde ve özel olarak davet edildiğim bir çok yerde fal baktım.</Text>
                                        </Body>
                                    </CardItem>

                                    <CardItem style={{ paddingVertical: 0 }}>
                                        <Content>
                                                <Image style={{ width: 110, marginLeft: 5, marginTop: -50, resizeMode: 'contain' }} source={ilgi} />
                                        
                                        </Content>
                                    </CardItem>
                                </Card>
                            <Card style={{paddingVertical:0,marginLeft:10,marginRight:10}}>
                                 <CardItem style={{ paddingVertical: 0,height:150 }}>
                                    <Content>
                                        <Image style={{ width: '100%', marginLeft: 0, marginTop: -90, resizeMode: 'contain' }} source={assement} />

                                    </Content>
                                 </CardItem>
                            </Card>
                            <Card style={{ paddingVertical: 0, marginLeft: 10, marginRight: 10 }}>
                                <CardItem style={{ paddingVertical: 0, }}>
                                    <Content>
                                        <Text style={styles.labelGenelIstaistikler}>Genel İstatistikler</Text> 
                                    </Content>
                                </CardItem>
                                <CardItem >
                                    <View style={{ flexDirection: 'column' }}>
                                        <View>
                                        <Image style={{ width:20, marginLeft: 0, marginTop: -30, resizeMode: 'contain' }} source={icon} />
                                            <Text style={styles.labelFalcinote}>Bugüne kadar Toplam <Text style={styles.labelFalcinote2}>203 Fal</Text> Baktı</Text>
                                        </View>
                                        <View>
                                            <Image style={{ width: 20, marginLeft: 0, marginTop: -20, resizeMode: 'contain' }} source={icon2} />
                                            <Text style={styles.labelFalcinote}>Müşterilerinden <Text style={styles.labelFalcinote2}>84 yorum</Text> aldı.</Text>
                                        </View>
                                        <View>
                                            <Image style={{ width: 20, marginLeft: 0, marginTop: -20, resizeMode: 'contain' }} source={icon3} />
                                            <Text style={styles.labelFalcinote}>Değerlendirmelerinin ortalaması <Text style={styles.labelFalcinote2}>5 üzerinden 4.8</Text></Text>
                                        </View>
                                        <View>
                                                <Image style={{ width: 20, marginLeft: 0, marginTop: -20, resizeMode: 'contain' }} source={icon4} />
                                            <Text style={styles.labelFalcinote}>49 üye <Text style={styles.labelFalcinote2}>favorilerine</Text> ekledi.</Text>
                                        </View>
                                        
                                    </View>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                    <TarotFooter/>
                </ImageBackground>
            </Container>
        );
    }

}
export default YorumcuDetay;
