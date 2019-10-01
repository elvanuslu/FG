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
    Input,
    Segment,
    Toast,
} from "native-base";

import {connect} from 'react-redux';
import {settingsChanged,kartBilgileriChanged} from '../../actions';

import styles from "./styles";
import { postRequest, getStorage, config } from '../../../service/services';
import TarotFooter from '../../components/TarotFooter';
import CustomHeader from '../../components/CustomHeader';


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

class TarotFalBaktir extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selected2: "bekar",
            selected3: "istanbul",
            seg: 2,
            satir: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            sutun: [0, 1, 2, 3, 4, 5],
            genelAcilimKartData: [],
            iliskiAcilimKartData: [],
            kararAcilimKartData: [],
            tabIndex: 0,
            kisiselBilgiler: "",
            kartData: [],
            fortune_teller: [],
            fortune_method_id: 0,
            soru: "",
            FalTipleri: '',

        };
    }
    _handleClick() {
       
        this.props.navigation.navigate("FalciDetayListe");
    }


    async componentWillMount() {
        
        let kartData = this.props.kartBilgileri.kartTipi;
        let fortune_teller = this.props.kartBilgileri.fortune_teller;
        let fortune_method_id = this.props.kartBilgileri.fortuneMethodId;
        let falTipi = this.props.kartBilgileri.falTipi;

        const conf = await config();
        this.setState({
            kartData: kartData,
            fortune_teller: fortune_teller,
            fortune_method_id: fortune_method_id,
            photo_base_url: conf.photo_base_url,
            FalTipleri: falTipi,
        });

        this.genelAcilimiKart();
        this.iliskiAcilimKart();
        this.kararAcilimKart();
    }


    genelAcilimiKart() {
        let count = (this.state.satir.length * this.state.sutun.length);
        let data = [];
        for (let index = 0; index < count; index++) {
            data.push(false);
        };

        this.setState({ genelAcilimKartData: data });
    }
    iliskiAcilimKart() {
        let count = (this.state.satir.length * this.state.sutun.length);
        let data = [];
        for (let index = 0; index < count; index++) {
            data.push(false);
        };

        this.setState({ iliskiAcilimKartData: data });
    }
    kararAcilimKart() {
        let count = (this.state.satir.length * this.state.sutun.length);
        let data = [];
        for (let index = 0; index < count; index++) {
            data.push(false);
        };

        this.setState({ kararAcilimKartData: data });
    }

    onValueChange2(value) {
        console.log(value);
        this.setState({
            selected2: value
        });
    }
    onValueChange3(value) {
        this.setState({
            selected3: value
        });
    }

    onPressGenelAcilimCard(index) {
        this.state.genelAcilimKartData[index] = this.state.genelAcilimKartData[index] ? false : true;
        this.setState({
            genelAcilimKartData: this.state.genelAcilimKartData,
        });

    }

    onPressIliskiAcilimCard(index) {
        this.state.iliskiAcilimKartData[index] = this.state.iliskiAcilimKartData[index] ? false : true;
        this.setState({
            iliskiAcilimKartData: this.state.iliskiAcilimKartData,
        });

    }

    onPressKararAcilimCard(index) {
        this.state.kararAcilimKartData[index] = this.state.kararAcilimKartData[index] ? false : true;
        this.setState({
            kararAcilimKartData: this.state.kararAcilimKartData,
        });

    }

    onPressTabChange(tabIndex) {
        this.setState({ tabIndex: tabIndex });
    }

    async onPressFalGonder() {


        const api_token = await getStorage('id_token');
        const {
            kartData,
            fortune_teller,
            fortune_method_id,
            genelAcilimKartData,
            iliskiAcilimKartData,
            kararAcilimKartData,
            kisiselBilgiler,
            soru,


        } = this.state;

        let count = 0;
        let genelAcilimKartNumara = [];
        genelAcilimKartData.map((item, index) => {
            if (item) {
                count++;
                genelAcilimKartNumara.push(index + 1);
            }
        })
        console.log('Fal Tipi = '+ this.state.FalTipleri);
        if (this.state.FalTipleri == 'katina') {
            if (count < 4) {
                Toast.show({
                    text: (4 - count) + " adet daha Genel Açılım kartı seçiniz",
                })
                return;
            };
        }
        else {
            if (count < 10) {
                Toast.show({
                    text: (10 - count) + " adet daha Genel Açılım kartı seçiniz",
                })
                return;
            };
        }

        count = 0;
        let iliskiAcilimKartNumara = [];
        iliskiAcilimKartData.map((item, index) => {
            if (item) {
                count++;
                iliskiAcilimKartNumara.push(index + 1);
            }
        })
        if (this.state.FalTipleri == 'katina') {
            if (count < 10) {
                Toast.show({
                    text: (10 - count) + " adet daha İlişki Açılımı kartı seçiniz",
                })
                return;
            };
        } else { // Tarot Falı
            if (count < 7) {
                Toast.show({
                    text: (7 - count) + " adet daha İlişki Açılımı kartı seçiniz",
                })
                return;
            };
        }
        count = 0;
        let kararAcilimKartNumara = [];
        kararAcilimKartData.map((item, index) => {
            if (item) {
                count++;
                kararAcilimKartNumara.push(index + 1);
            }
        })
        if (this.state.FalTipleri == 'Iskambil')
        {

        }
        else if (this.state.FalTipleri == 'katina'){

        }
        else {
        if (count < 7) {
            Toast.show({
                text: (7 - count) + " adet daha Karar Açılımı kartı seçiniz",
            })
            return;
        };
    }

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


    render() {

        let cardAll = (<View />);
        if (this.state.tabIndex == 0) {
            cardAll = this.state.satir.map((item, index) => {
                return (

                    <View style={{ marginLeft: 0, marginTop: 0, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 0)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 0)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 1)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 1)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 2)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 2)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 3)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 3)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 4)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 4)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressGenelAcilimCard((index * 6) + 5)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.genelAcilimKartData[((index * 6) + 5)] ? kartSelected : kart} />
                        </TouchableOpacity>
                    </View>
                )
            })
        } else if (this.state.tabIndex == 1) {
            cardAll = this.state.satir.map((item, index) => {
                return (

                    <View style={{ marginLeft: 0, marginTop: 0, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 0)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 0)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 1)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 1)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 2)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 2)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 3)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 3)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 4)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 4)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressIliskiAcilimCard((index * 6) + 5)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.iliskiAcilimKartData[((index * 6) + 5)] ? kartSelected : kart} />
                        </TouchableOpacity>
                    </View>
                )
            })
        } else if (this.state.tabIndex == 2) {
            cardAll = this.state.satir.map((item, index) => {
                return (

                    <View style={{ marginLeft: 0, marginTop: 0, alignSelf: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 0)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 0)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 1)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 1)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 2)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 2)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 3)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 3)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 4)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 4)] ? kartSelected : kart} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.onPressKararAcilimCard((index * 6) + 5)} >
                            <Image style={{ width: 45, marginRight: 5, marginTop: -30, resizeMode: 'contain' }} source={this.state.kararAcilimKartData[((index * 6) + 5)] ? kartSelected : kart} />
                        </TouchableOpacity>
                    </View>
                )
            })
        }
        return (

            <Container style={styles.container}>
                <ImageBackground source={BgHeader} style={styles.imageContainer}>
                    <CustomHeader Left Right/>
                    <View style={{ marginBottom: 70, marginTop: 10 }}>
                        <ImageBackground source={FilterBar} style={{ width: '100%', height: 75, flex: 1, flexDirection: 'row' }}>

                            <Thumbnail style={{ resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} source={{ uri: this.state.photo_base_url + '' + this.state.fortune_teller.avatar }} />
                            {

                                <Text style={styles.falNote}>{
                                    this.state.FalTipleri

                                }</Text>
                            }
                            <Image style={{ height: 15, marginLeft: 10, marginTop: 45, resizeMode: 'contain' }} source={divider} />
                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 90, marginLeft: 10, marginTop: 45, resizeMode: 'contain' }} source={goruntulubtn} />
                            </TouchableOpacity>

                        </ImageBackground>
                        <View><Text style={styles.labelFalcibeyaz}>{this.state.fortune_teller.name}</Text></View>
                    </View>
                    <Content style={{ backgroundColor: '#E8E5E5', marginTop: -40 }}>
                        <Card style={styles.mb}>
                            <CardItem>
                                <Left>
                                    <View style={{ marginLeft: 0, marginTop: -70, }}>
                                        <Image style={{ width: 110, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={title} />
                                    </View>
                                </Left>

                                <View style={{ marginTop: 35, marginLeft: 0, }}>
                                    <Text style={styles.labelFalcinote}>Falınıza bakabilmemiz için, 10 adet genel açılım, 7 adet ilişki açılımı ve son olarak da 7 adet karar açılımı kartı seçmeniz gerekiyor, işte medyumluğumuz da bu kadar :)</Text>
                                </View>
                            </CardItem>
                            <CardItem cardBody>
                                <Body style={{ marginTop: -20, marginLeft: 0 }}>

                                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', }}>
                                        <TouchableOpacity onPress={() => this.onPressTabChange(0)} >
                                            <Image style={{ width: 90, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={genel} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.onPressTabChange(1)} >
                                            <Image style={{ width: 90, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={iliski} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.onPressTabChange(2)} >
                                            <Image style={{ width: 90, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={karar} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 0, marginTop: 0, marginBottom: 30, alignSelf: 'center' }}>
                                        <Image style={{ width: 110, marginLeft: 0, marginTop: 0, resizeMode: 'contain' }} source={kartsec} />
                                    </View>

                                    {cardAll}

                                </Body>
                            </CardItem>

                            <CardItem style={{ paddingVertical: 0 }}>
                                <Content>


                                </Content>
                            </CardItem>
                        </Card>
                        <Card style={styles.mb}>


                            <CardItem cardBody>
                                <Body style={{ marginTop: -20, marginLeft: 82 }}>


                                </Body>
                            </CardItem>

                            <CardItem style={{ paddingVertical: 0 }}>
                                <Content>
                                    <Image style={{ width: 135, marginLeft: 0, marginTop: 5, resizeMode: 'contain' }} source={Title2} />

                                    <Text style={styles.labelFalcinote}>Lütfen aşağıdaki bilgiler doldurunuz.</Text>
                                    <View>

                                        <Form>

                                            <Text style={styles.labelFalcinote2}>Kişisel Bilgiler</Text>
                                            <View style={{
                                                borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 30, margnRight: 30, marginTop: -5, marginBottom: 10
                                            }}>
                                                <Input placeholder='Örn: Ad,Soyad,Doğum Tarihi' value={this.state.kisiselBilgiler} onChangeText={(data) => this.setState({ kisiselBilgiler: data })} />
                                            </View>

                                            <Text style={styles.labelFalcinote2}>İlişki Durumu</Text>
                                            <View style={{
                                                borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 30, margnRight: 30, marginTop: -5, marginBottom: 10
                                            }}>

                                                <Picker
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="arrow-dropdown-circle" />}
                                                    // Icon ={<Icon name="down"/>}
                                                    style={{ width: undefined }}
                                                    placeholder="İlişki Durumu..."
                                                    placeholderStyle={{ color: "#bfc6ea" }}
                                                    borderColor="black"
                                                    placeholderIconColor="#007aff"
                                                    selectedValue={this.state.selected2}
                                                    onValueChange={this.onValueChange2.bind(this)}
                                                >
                                                    <Item label="Evli" value="evli" />
                                                    <Item label="Bekar" value="bekar" />

                                                </Picker>
                                            </View>



                                            <Text style={styles.labelFalcinote2}>Genel Yaşadığı Şehir</Text>
                                            <View style={{
                                                borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 30, margnRight: 30, marginTop: -5, marginBottom: 10
                                            }}>
                                                <Picker
                                                    mode="dropdown"
                                                    iosIcon={<Icon name="arrow-dropdown-circle" />}
                                                    // Icon={<Icon name="down" />}
                                                    style={{ width: undefined }}
                                                    placeholder="Seçiniz..."
                                                    placeholderStyle={{ color: "#bfc6ea" }}
                                                    borderColor="black"
                                                    placeholderIconColor="#007aff"
                                                    selectedValue={this.state.selected3}
                                                    onValueChange={this.onValueChange3.bind(this)}
                                                >
                                                    <Item label="Adana" value="adana" />
                                                    <Item label="Ankara" value="ankara" />
                                                    <Item label="Istanbul" value="istanbul" />
                                                    <Item label="İzmir" value="izmir" />

                                                </Picker>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(TarotFalBaktir);