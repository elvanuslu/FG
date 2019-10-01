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
    Thumbnail,
    Accordion,
} from "native-base";
import {connect} from 'react-redux';
import {settingsChanged,kartBilgileriChanged} from '../../actions';


import styles from "./styles";
import { getStorage, postRequest, getRequest, config } from '../../../service/services';

const fmenu = require("../../../assets/AnaSayfa/Mnu.png");
const notification = require("../../../assets/Notification-Icon.png");
const BgHeader = require("../../../assets/TarotFal/Bg.png");
const FilterBar = require("../../../assets/KahveFali/Bg1.png");
const megha = require("../../../assets/contacts/megha.png");
const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktirimg = require("../../../assets/AnaSayfa/FalBaktir.png");
const logo = require("../../../assets/TarotFal/Logo.png");


const optionIcon = require("../../../assets/YorumcuDetay/Option-Icon.png");
const timeIcon = require("../../../assets/YorumcuDetay/Time-Icon.png");
const online = require("../../../assets/YorumcuDetay/Online.png");
const onlineChat = require("../../../assets/YorumcuDetay/Online-Bar.png");
const bgbeyaz = require("../../../assets/YorumcuDetay/Bgbeyaz.png");




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

import Icons from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../../components/CustomHeader';
import CustomTabs from '../../components/CustomTabs';
import TarotFooter from '../../components/TarotFooter';


const dataArray = [
    {
        title: "Kahve",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur sunt itaque adipisci quisquam pariatur qui, reiciendis architecto quod sint incidunt labore nisi totam illum numquam non magnam praesentium, maxime quaerat!"
    }


];

class YorumcuDetayFalCesitleri extends Component {
    constructor(props) {
        super(props);
        this.onSecim = this.onSecim.bind(this);
        this.state = {
            seg: 2,
            selected2: "bekar",
            selected3: "istanbul",
            tabIndex: 0,
            kisiselBilgiler: "",
           
            fortune_teller: [],
            fortune_method_id: 0,
            soru: "",
            falTipleri: '',
            oldFalTipleri: '',
        };
    }

    async componentWillMount()
    {
        
        let fortune_teller = this.props.kartBilgileri.fortune_teller;
        let fortune_method_id =  this.props.kartBilgileri.fortuneMethodId;
        let falTipleri =  this.props.kartBilgileri.falTipi;

        const conf = await config();
        this.setState({
            fortune_teller: fortune_teller,
            fortune_method_id: fortune_method_id,
            photo_base_url: conf.photo_base_url,
            falTipleri: falTipleri,
        });
    }
    
    onSecim = async (secim) => {

        let fortune_method_id = this.state.fortune_method_id;
        let falTipleri = this.state.falTipleri;

        if (secim == 'goruntulukonusma')
            fortune_method_id = 3;
        if (secim == 'sesligorusme')
            fortune_method_id = 4;
        if (secim == 'canliSohbet')
            fortune_method_id = 5;
        if (secim == 'seslicevapal')
            fortune_method_id = 6;
        if (secim == 'yaziliCevapAl')
            fortune_method_id = 7;
        
        if (falTipleri == 'kahve')
            Actions.KahveFaliBaktirAsama1();

        if (falTipleri == 'ruya')
            Actions.Ruya();
        if (falTipleri == 'tarot') {

            Actions.TarotFalBaktir();
        }
        if (falTipleri == 'su') {
            Actions.SuFali();
        }
        if (falTipleri =='katina')
            Actions.Katina();
        if (falTipleri == 'yildizname')
            Actions.YildizName();
    }
    
    _renderHeaderAtes(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={tarot}></Image>
                    <Text style={styles.labelFalSiyah}>Ateş</Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderHeadersu(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={katina}></Image>
                    <Text style={styles.labelFalSiyah}>Su </Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderHeaderkatina(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={katina}></Image>
                    <Text style={styles.labelFalSiyah}>Katina Aşk </Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderHeaderyildizname(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={yildizname}></Image>
                    <Text style={styles.labelFalSiyah}>Yıldızname </Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderHeaderTarot(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={tarot}></Image>
                    <Text style={styles.labelFalSiyah}>Tarot </Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderHeader(expanded) {
        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    height: 50,
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ width: 35, resizeMode: 'contain' }} source={kahve}></Image>
                    <Text style={styles.labelFalSiyah}>Kahve </Text>
                </View>
                {expanded
                    ? <Icons style={{ fontSize: 18 }} name="down" />
                    : <Icons style={{ fontSize: 18 }} name="up" />}
            </View>
        );
    }
    _renderContent = (item) => {
        return (
            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 0, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() =>
                        this.onSecim('goruntulukonusma')
                    } >
                        <ImageBackground source={goruntulukonusma} style={{ height: 240, width: 115, marginLeft: 5, resizeMode: 'contain', borderRadius: 5, }}>
                            <Text style={styles.labelthinBlack}>95 Puan | 48 Yorum</Text>
                            <Text style={styles.labelFalcinote3}>24.284</Text>
                            <Text style={styles.labelthinBlack2}>Fal Yorumlandı.</Text>
                            <Text style={styles.labelPara}>450₺</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        this.onSecim('sesligorusme')
                    } >
                        <ImageBackground source={sesligorusme} style={{ height: 240, width: 115, marginLeft: 5, resizeMode: 'contain', borderRadius: 5, }}>
                            <Text style={styles.labelthinBlack}>95 Puan | 48 Yorum</Text>
                            <Text style={styles.labelFalcinote3}>24.584</Text>
                            <Text style={styles.labelthinBlack2}>Fal Yorumlandı.</Text>
                            <Text style={styles.labelPara2}>350₺</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        this.onSecim('canliSohbet')
                    } >
                        <ImageBackground source={canliSohbet} style={{ height: 240, width: 115, marginLeft: 5, resizeMode: 'contain', borderRadius: 5, marginRight: 5, }}>
                            <Text style={styles.labelthinBlack}>95 Puan | 48 Yorum</Text>
                            <Text style={styles.labelFalcinote3}>24.584</Text>
                            <Text style={styles.labelthinBlack2}>Fal Yorumlandı.</Text>
                            <Text style={styles.labelPara3}>250₺</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', marginLeft: -110, marginTop: 10, marginBottom: 10 }}>
                    <TouchableOpacity onPress={() =>
                        this.onSecim('seslicevapal')
                    } >
                        <ImageBackground source={seslicevapal} style={{ height: 240, width: 108, marginLeft: 0, resizeMode: 'contain', borderRadius: 5, }}>
                            <Text style={styles.labelthinBlack}>95 Puan | 48 Yorum</Text>
                            <Text style={styles.labelFalcinote3}>24.584</Text>
                            <Text style={styles.labelthinBlack2}>Fal Yorumlandı.</Text>
                            <Text style={styles.labelPara5}>150₺</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        this.onSecim('yaziliCevapAl')
                    } >
                        <ImageBackground source={yaziliCevapAl} style={{ height: 240, width: 120, marginLeft: 5, resizeMode: 'contain', borderRadius: 5, }}>
                            <Text style={styles.labelthinBlack}>95 Puan | 48 Yorum</Text>
                            <Text style={styles.labelFalcinote3}>24.584</Text>
                            <Text style={styles.labelthinBlack2}>Fal Yorumlandı.</Text>
                            <Text style={styles.labelPara4}>50₺</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

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
                                <View><Text style={styles.labelFalcibeyaz}>{this.state.fortune_teller.name}</Text></View>

                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image style={{ width: 12, marginLeft: 90, marginTop: -10, resizeMode: 'contain' }} source={timeIcon} />
                                    <Text style={styles.labelthin2}>Bekleyen Kişi Sayısı <Text style={{ fontWeight: 'bold' }}> 14</Text> </Text>
                                </View>

                            </View>

                            <View style={{ marginLeft: -150 }}>
                                <TouchableOpacity onPress={() => this.onSecim()} >
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
                            <CustomTabs activeIndex={2}/>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={true}
                                    renderHeader={this._renderHeader}
                                    renderContent={this._renderContent}
                                />
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={false}
                                    renderHeader={this._renderHeaderTarot}
                                    renderContent={this._renderContent}
                                />
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={false}
                                    renderHeader={this._renderHeaderyildizname}
                                    renderContent={this._renderContent}
                                />
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={false}
                                    renderHeader={this._renderHeaderkatina}
                                    renderContent={this._renderContent}
                                />
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={false}
                                    renderHeader={this._renderHeadersu}
                                    renderContent={this._renderContent}
                                />
                            </View>
                            <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                                <Accordion
                                    dataArray={dataArray}
                                    animation={true}
                                    expanded={false}
                                    renderHeader={this._renderHeaderAtes}
                                    renderContent={this._renderContent}
                                />
                            </View>
                        </View>
                    </Content>
                   <TarotFooter/>
                </ImageBackground>
            </Container>
        );
    }
}
const mapStateToProps = ({ IslemResponse }) => {
    return {
        kartBilgileri:IslemResponse.kartBilgileri,
    };
  };
  
  const mapDispatchToProps = {
      kartBilgileriChanged
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(YorumcuDetayFalCesitleri);