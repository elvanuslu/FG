import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
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
    Input,
    Segment,
    Toast,

} from "native-base";

import { postRequest, getStorage, config } from '../../../service/services';
import TarotFooter from '../../components/TarotFooter';
import CustomHeader from '../../components/CustomHeader';

import {connect} from 'react-redux';
import {kartBilgileriChanged} from '../../actions';
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
const kartSelected = require("../../../assets/TarotFal/cardSelect.png");

const KahveFaliBg = require("../../../assets/KahveFali/KahveFalBg.png");
const CoffeeIcon = require("../../../assets/KahveFali/Coffee-Icon.png");
const KahveFalBaktirBtn = require("../../../assets/KahveFali/kahvefalibaktirBtn.png");

const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktir = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");

const Title2 = require("../../../assets/KahveFali/Title2.png");
const NextBtn = require("../../../assets/NextBtn.png");
const FalBaktirimg = require("../../../assets/AnaSayfa/FalBaktir.png");

class YildizName extends Component{
    constructor(props){
        super(props);
        this.state = {
            selected2: "bekar",
            selected3: "istanbul",
            seg: 2,
            genelAcilimKartData: [],
            iliskiAcilimKartData: [],
            kararAcilimKartData: [],
            tabIndex: 0,
            kisiselBilgiler: "",
            kartData: [],
            fortune_teller: [],
            fortune_method_id: 0,
            soru: "",
            FalTipleri: undefined,
            oldFalTipi: undefined,
            cinsiyet: '',
            Ruya: '',
            KisiselBilgiler: '',
            Sehir: '',

        };
    }
    onCinsiyet(value) {

        this.setState({
            cinsiyet: value
        });
    }
    onValueChange2(value) {
        console.log(value);
        this.setState({
            selected2: value
        });
    }
    onValueChange3(value) {
        this.setState({
            Sehir: value
        });
    }
    _handleClick() {
        this.props.navigation.navigate("YorumcuDetayFalCesitleri");
    }
    _FalGonder = async () => {
        const api_token = await getStorage('id_token');
        let body = {
            api_token: api_token,
            fortune_teller_id: fortune_teller.id,
            fortune_type_id: kartData.id,
            fortune_method_id: fortune_method_id,
            fal_icin_istenilen: {
                genelAcilimKartNumara: genelAcilimKartNumara,
                iliskiAcilimKartNumara: iliskiAcilimKartNumara,
                kararAcilimKartNumara: kararAcilimKartNumara,
            },
            diger_bilgiler: {
                kisiselBilgiler: kisiselBilgiler,
                soru: soru,
            },
        }

        let res = await postRequest(body, 'add-fortune');
        alert(res.message);
        console.log(res);
    }
   
    async componentWillMount() {
        
        let falTipi = this.props.kartBilgileri.falTipi;
        console.log(this.props.kartBilgileri);
        
        this.setState({
            FalTipleri: falTipi,
        })
        
    }
    render(){
        return(
            <ImageBackground source={BgHeader} style={{ flex: 8, resizeMode: 'contain' }}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" />
                <CustomHeader Left Right/>

                <ImageBackground source={BgHeader} style={{ flex: 8, resizeMode: 'contain' }}>
                    <StatusBar barStyle="light-content" />

                    <View style={{ flex: 1, marginTop: 5, backgroundColor: 'transparent' }}>
                        <ImageBackground source={FilterBar} style={{ width: '100%', height: 60, flexDirection: 'row', }}>
                            <Left>

                            </Left>
                            <Body>
                                <Text style={styles.labelFalci}> {this.state.FalTipleri}</Text>
                            </Body>
                            <Right>

                            </Right>

                        </ImageBackground>
                        <Content style={{ backgroundColor: '#E8E5E5', flex: 6, }}>
                            <Card style={styles.mb}>

                                <CardItem style={{ paddingVertical: 0 }}>
                                    <Content>
                                        <Text style={styles.labelFalcinote}>Lütfen aşağıdaki bilgiler doldurunuz.</Text>
                                        <View>
                                            <Form>
                                                <Text style={styles.labelFalcinote2}>Kişisel Bilgiler</Text>
                                                <View style={{
                                                    borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 30, margnRight: 30, marginTop: -5, marginBottom: 10
                                                }}>
                                                    <Input placeholder='Örn: Ad,Soyad,Doğum Tarihi' value={this.state.kisiselBilgiler} onChangeText={(data) => this.setState({ kisiselBilgiler: data })} />
                                                </View>
                                                <Text style={styles.labelFalcinote2}>Kimse Baktırmak İstiyorsunuz ?</Text>
                                                <View style={{
                                                    borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 30, margnRight: 30, marginTop: -5, marginBottom: 10
                                                }}>
                                                    <Picker
                                                        mode="dropdown"
                                                        iosIcon={<Icon name="arrow-dropdown-circle" />}
                                                        // Icon ={<Icon name="down"/>}
                                                        style={{ width: undefined }}
                                                        placeholder="Cinsiyetiniz..."
                                                        placeholderStyle={{ color: "#bfc6ea" }}
                                                        borderColor="black"
                                                        placeholderIconColor="#007aff"
                                                        selectedValue={this.state.cinsiyet}
                                                        onValueChange={this.onCinsiyet.bind(this)}
                                                    >
                                                        <Item label="Kendime" value="0" />
                                                        <Item label="Başka Birine" value="1" />
                                                    </Picker>
                                                </View>
                                                <Text style={styles.labelFalcinote2}>Baktırılacak kişinin</Text>
                                                <View style={{ marginLeft: 30, marginRight: 0, marginTop: -7, marginBottom: 15 }}>
                                                    <Textarea rowSpan={5} bordered placeholder="Örn.  Anne Adı,  Baba Adı,Doğum Tarihi, vb" value={this.state.soru} onChangeText={(data) => this.setState({ soru: data })} />
                                                </View>

                                                <Text style={styles.labelFalcinote2}>Sormak İstediğiniz Soru?</Text>
                                                <View style={{ marginLeft: 30, marginRight: 0, marginTop: -7, marginBottom: 15 }}>

                                                    <Textarea rowSpan={5} bordered placeholder="Örn. İlişki, Aşk, vb" value={this.state.soru} onChangeText={(data) => this.setState({ soru: data })} />
                                                </View>
                                            </Form>
                                        </View>
                                        <TouchableOpacity onPress={() => { this.onPressFalGonder() }}>
                                            <Image style={{ width: undefined, height: 60, resizeMode: 'contain', marginLeft: 30 }} source={NextBtn} />
                                        </TouchableOpacity>

                                    </Content>
                                </CardItem>

                            </Card>
                        </Content>

                    </View>

                   <TarotFooter/>
                </ImageBackground>

            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    containerOrta: {
        flex: 6,
        backgroundColor: "transparent",
    },
    containerBottom: {
        flex: 1,
        backgroundColor: "transparent",
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,

    },
    labelFalcinote: {
        color: '#454444',

        fontSize: 9,
        marginBottom: 5,
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
    },
    labelFalcinote2: {
        //color: '#454444',

        fontSize: 12,
        marginBottom: 12,
        marginLeft: 30,
        fontFamily: 'Roboto-Light',
    },
    container3: {
        flex: 6,
        backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    container1: {
        marginTop: 0,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',

    },
    buttonIco: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    buttonLoginIconorta: {
        marginBottom: 5,
        height: 140,
        width: 110,
        resizeMode: "contain",
    },
    labelFalci: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    label: {
        color: '#999',
        //  fontWeight: 'bold',
        marginTop: 10,
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'Roboto-Light',
    },
    labelthin: {
        color: '#999',
        //  fontWeight: 'bold',
        fontSize: 8,
        marginBottom: 8,
        fontFamily: 'Roboto-Light',
        marginLeft: 0,
    },
    labelFiyat: {
        //  fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
    },
    labelFiyat2: {
        //  fontWeight: 'bold',
        fontSize: 8,
        marginBottom: 6,
        fontFamily: 'Roboto-Bold',
        marginLeft: 1,
    },

})

const mapStateToProps = ({ IslemResponse }) => {
    return {
        kartBilgileri:IslemResponse.kartBilgileri,
    };
  };
  
  const mapDispatchToProps = {
      kartBilgileriChanged
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(YildizName);