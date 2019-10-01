import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
} from 'react-native';

import {
    Body,
    Container,
    Right,
    Left,
} from "native-base";

import {connect} from 'react-redux';
import styles from "./styles";
import { getRequest, getStorage } from '../../../service/services';
import {settingsChanged,kartBilgileriChanged} from '../../actions';
import { Actions } from 'react-native-router-flux';
import TarotFooter from '../../components/TarotFooter';

const screenBg = require("../../../assets/AnaSayfa/HomePage.png");
const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktirimg = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");
const notification = require("../../../assets/Notification-Icon.png");
const adwords = require("../../../assets/AnaSayfa/Adwords.png");

console.disableYellowBox = true;
class AnaSayfa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            KullaniciAdi: 'sdfs',
            Sifre: 'sfsf',
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
            kartTipler: [],
            kullaniciBilgiler: [],
            kullaniciTipi: "KullaniciPanel",
            tarot: undefined,
            kahve: undefined,
            iskambil: undefined,
            su: undefined,
            data: [],
        };

    }
    toggleTab1() {
        this.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false
        });
    }
    toggleTab2() {
        this.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false
        });
    }
    toggleTab3() {
        this.setState({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,

        });
    }
    async componentWillMount() {
        let kartTipler = await getRequest("fortune-type");
        let id = await getStorage("Id");
        let kullaniciBilgiler = await getRequest("user?includes=comment,fortune_teller&id=" + id);
        let kullaniciTipi = kullaniciBilgiler.role_id == 1 ? 'KullaniciPanel' : 'YorumcuPanel';
        kullaniciBilgiler = kullaniciBilgiler.data.data[0];
        // console.log('Kullanıcı Bilgileri= ' + JSON.stringify(kullaniciBilgiler));
        kartTipler = kartTipler.data.data;
       // console.log('Kartlar= ' + JSON.stringify(kartTipler));
        this.setState({
            kartTipler: kartTipler,
            kullaniciBilgiler: kullaniciBilgiler,
            kullaniciTipi: kullaniciTipi
        });

        let data = {kullaniciBilgiler:kullaniciBilgiler,kullaniciTipi:kullaniciTipi}
        this.props.settingsChanged(data);
    }

    onPress = () => {
         
    }
    onFalcilar = () => {
        Actions.FalciDetayListe();
    }
    onRegister = () => {
        Actions.Register();
    }

    onPressKart(val) {
        
        if(this.state.kartTipler.length==0)
        {alert('Kart bilgileri çekiliyor tekrar dene');return;}
        
        if (val == 'tarot') {
            let data = {
                kartTipi:this.state.kartTipler[0],
                falTipi:val,
            };
            this.props.kartBilgileriChanged(data);
            Actions.FalciDetayListe();
        }
        else if (val == 'kahve') {
            let data = {
                kartTipi:this.state.kartTipler[1],
                falTipi:val,
            };
            this.props.kartBilgileriChanged(data);
            Actions.FalciDetayListe();
        }
        else {
            // To Do kart tipleri yapılacak
             let data = {
                kartTipi:[],
                falTipi:val,
            };
            this.props.kartBilgileriChanged(data);
            Actions.FalciDetayListe();
        }
            
    }

    render() {
        console.log('render1');
        return (
            <Container style={styles.container}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />

                <ImageBackground source={screenBg} style={styles.imageContainer}>
                    <View style={{ flex: 4, backgroundColor: 'transparent' }}>

                        <View style={{ flex: 3, flexDirection: 'row', marginTop: 20, backgroundColor: 'transparent' }}>
                            <Left>
                                <TouchableOpacity onPress={() => this.onPressKart('iskambil')}>
                                    <Image style={{
                                        width: 80,
                                        height: 80,
                                        resizeMode: "contain",
                                    }} source={require("../../../assets/AnaSayfa/IskambilBtn.png")} />
                                </TouchableOpacity>
                            </Left>
                            <Body></Body>
                            <Right>
                                <TouchableOpacity onPress={()=>this.onPressKart('su')} >
                                    <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require("../../../assets/AnaSayfa/SuBtn.png")} />
                                </TouchableOpacity>
                            </Right>
                        </View>


                        <View style={{ flex: 6, flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <Left>
                                <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => this.onPressKart('ruya')} >
                                    <Image style={{
                                        width: 80,
                                        height: 80, resizeMode: 'contain'
                                    }} source={require("../../../assets/AnaSayfa/RuyaYorum.png")} />
                                </TouchableOpacity>
                            </Left>
                            <Body></Body>
                            <Right>
                                <TouchableOpacity style={{ marginRight: -20 }} onPress={() => this.onPressKart('katina')} >
                                    <Image style={{
                                        width: 80,
                                        height: 80,
                                        resizeMode: "contain"
                                    }} source={require("../../../assets/AnaSayfa/KatinaBtn.png")} />
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <Left>
                                <TouchableOpacity onPress={() => this.onPressKart('kahve')} >
                                    <Image style={{ width: 80, height: 80, resizeMode: 'contain' }} source={require("../../../assets/AnaSayfa/KahveBtn.png")} />
                                </TouchableOpacity>
                            </Left>
                            <Body></Body>
                            <Right>
                                <TouchableOpacity onPress={() => this.onPressKart('yildizname')} >
                                    <Image style={{
                                        width: 80,
                                        height: 80,
                                        resizeMode: "contain"
                                    }} source={require("../../../assets/AnaSayfa/YildizName.png")} />
                                </TouchableOpacity>
                            </Right>
                        </View>
                        <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'transparent' }}>
                            <Left>

                            </Left>
                            <Body>
                                <TouchableOpacity style={{ marginTop: -50 }} onPress={() => this.onPressKart('tarot')} >
                                    <Image style={{
                                        width: 80,
                                        height: 80,
                                        resizeMode: "contain",
                                    }} source={require("../../../assets/AnaSayfa/Tarot.png")} />
                                </TouchableOpacity>
                            </Body>
                            <Right>

                            </Right>
                        </View>
                    </View>

                    <View style={{ flex: 3, backgroundColor: 'transparent', alignSelf: 'center', }}>
                            <Image style={{ width: 250, height: 250, resizeMode: 'contain' }} source={adwords} />
                    </View>


                    <TarotFooter/>
                </ImageBackground>
            </Container>
        )
    }
}

const mapStateToProps = ({ IslemResponse }) => {
    return {
        settings:IslemResponse.settings,
        kartBilgileri:IslemResponse.kartBilgileri,
        };
    };
    
    const mapDispatchToProps = {
        settingsChanged,
        kartBilgileriChanged,
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(AnaSayfa);