import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Image,
    ImageBackground,
    StatusBar,
    FlatList,

} from 'react-native';

import {
    Body,
    Container,
    Content,
    Right,
    Badge,
    Left,
    Thumbnail,
    Card,
    CardItem,
    Toast,

} from "native-base";

import {connect} from 'react-redux';
import {settingsChanged,kartBilgileriChanged} from '../../actions';
 
import styles from "./styles";
import { getStorage, postRequest, getRequest, config } from '../../../service/services';


const BgHeader = require("../../../assets/Login.png");
const Falcilar = require("../../../assets/AnaSayfa/Falcilar.png");
const FalBaktirimg = require("../../../assets/AnaSayfa/FalBaktir.png");
const fmenu = require("../../../assets/AnaSayfa/Mnu.png");
const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const notification = require("../../../assets/Notification-Icon.png");
const adwords = require("../../../assets/AnaSayfa/Adwords.png");
const cardImages = require("../../../assets/drawer-cover.png");
const FilterBar = require("../../../assets/FalciListe/FilterBar.png");


const pratik = require("../../../assets/contacts/pratik.png");
const sanket = require("../../../assets/contacts/sanket.png");
const megha = require("../../../assets/contacts/megha.png");
const atul = require("../../../assets/contacts/atul.png");
const saurabh = require("../../../assets/contacts/saurabh.png");
const varun = require("../../../assets/contacts/varun.png");
import { FalciListeleme } from '../../../service/services';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../../components/CustomHeader';
import TarotFooter from '../../components/TarotFooter';
import FiltreMenu from '../../components/FiltreMenu';

class FalciDetayListe extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {

            falciList: [],
            apiToken: 0,
            kartTipi: [],
            fortuneMethodId: 0,
            falTipi: '',
        };

    }
   
    componentDidMount() {

        this.onLoad();
    }

    async onLoad()
    {
        const apiToken = await getStorage('id_token');
        let id = await getStorage("Id");
        const conf = await config();
        let kartBilgileri = this.props.kartBilgileri;
        let kullaniciBilgiler = (await getRequest("user?includes=comment,fortune_teller&id=" + id)).data.data[0];
        let kullaniciTipi = kullaniciBilgiler.role_id == 1 ? 'KullaniciPanel' : 'YorumcuPanel';
        let falciList = (await FalciListeleme()).data.data;
    
        this.setState({
            apiToken: apiToken,
            falciList: falciList,
            kullaniciTipi: kullaniciTipi,
            kullaniciBilgiler: kullaniciBilgiler,
            photo_base_url: conf.photo_base_url,
            falTipi:kartBilgileri.falTipi,
            kartTipi:kartBilgileri.kartTipi,
        });
    }

  



    onPress = () => {
       
    }
    
    async onPressFav(_fortune_teller_id) {
       

        const apiToken = this.state.apiToken;
        const fortune_teller_id = _fortune_teller_id;

        const body = {
            apiToken: apiToken,
            fortune_teller_id: fortune_teller_id,
        };

        const res = await postRequest(body, "add-favorite").catch((error) => {
            Alert.alert('Favorilere eklenemedi', error);
        });

        if (res.success) {
            Alert.alert("Başarılı", "Favorilere eklendi");
        } else {
            Alert.alert("", res.errors.fortune_teller_id);
        }
    }

    onTarotFalBaktir(fortune_teller_item) {
       
        let kartBilgileri = this.props.kartBilgileri;
        kartBilgileri.fortune_teller = fortune_teller_item;
        kartBilgileri.fortuneMethodId = this.state.fortuneMethodId;
        this.props.kartBilgileriChanged(kartBilgileri);

        Actions.YorumcuDetayFalCesitleri();
    }

    onPressFalMetot(methoditem) {
        this.setState({
            fortuneMethodId: methoditem.id,
        });
        Toast.show({
            text: methoditem.name + ' metodu seçildi.',
        })

    }

    async onPressTest() {
        console.log(this.state.falciList);
    }
    
    render() {

        return (
            <ImageBackground source={BgHeader} style={{ flex: 1, width: '100%', height: '100%' }}>
                <StatusBar backgroundColor="transparent"  barStyle="dark-content" />
                <CustomHeader Left Right/>
               
                <Container style={styles.container}>
                    <FiltreMenu/>
                  
                    <Content>
                        <FlatList
                            style={{marginTop:60}}
                            data={this.state.falciList}
                            renderItem={({ item }) =>
                                <Card key={item.id} style={styles.mb}>
                                    <CardItem >
                                        <Left>
                                            <Thumbnail source={{ uri: this.state.photo_base_url + '' + item.avatar }} />
                                            <Body>
                                                <Text style={styles.labelthin}>{item.point == null ? "0" : item.point} Puan | {item.comment != null ? item.comment.length : 0} Yorum</Text>
                                                <Text style={styles.labelFalci}>{item.name==undefined? '':item.name}</Text>
                                            </Body>
                                        </Left>

                                        <Right>
                                            <TouchableOpacity onPress={() => this.onPressFav(item.id)} >
                                                <Image style={{ width: 25, resizeMode: 'contain' }} source={require("../../../assets/FalciListe/Favorite-Icon.png")} />
                                            </TouchableOpacity>
                                        </Right>

                                    </CardItem>
                                    <CardItem cardBody>
                                        <Body style={{ marginTop: -20, marginLeft: 82 }}>
                                            <Text note style={styles.label}>
                                                {item.long_info}
                                            </Text>
                                            <TouchableOpacity onPress={() => this.onPressFalMetot(methoditem)} >
                                                <Image style={{ width: 25, resizeMode: 'contain' }} source={require("../../../assets/FalciListe/Webcam-Chat.png")} />
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={() => this.onPressFalMetot(methoditem)} >
                                                <Image style={{ width: 25, resizeMode: 'contain', marginTop: -49, marginLeft: 35 }} source={require("../../../assets/FalciListe/Online-Chat.png")} />
                                            </TouchableOpacity>


                                            <TouchableOpacity onPress={() => this.onPressFalMetot(methoditem)} >
                                                <Image style={{ width: 25, resizeMode: 'contain', marginTop: -49, marginLeft: 70 }} source={require("../../../assets/FalciListe/Voice-chat.png")} />
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => this.onPressFalMetot(methoditem)} >
                                                <Image style={{ width: 25, resizeMode: 'contain', marginTop: -49, marginLeft: 105 }} source={require("../../../assets/FalciListe/Voice-Msg.png")} />
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => this.onPressFalMetot(methoditem)} >
                                                <Image style={{ width: 25, resizeMode: 'contain', marginTop: -49, marginLeft: 140 }} source={require("../../../assets/FalciListe/Msg-Txt.png")} />
                                            </TouchableOpacity>

                                        </Body>
                                    </CardItem>

                                    <CardItem style={{ paddingVertical: 0 }}>
                                        <Left>
                                            <Text style={styles.labelFiyat}>{item.fortune_teller_price.slice(0, 1).map((res) => { return (res.price) })}₺ </Text>
                                            <Text style={styles.labelFiyat2}>’den başlayan fiyatlarla </Text>
                                        </Left>

                                        <Right>
                                            <TouchableOpacity onPress={() => this.onTarotFalBaktir(item)} >
                                                <Image style={{ width: 90, resizeMode: 'contain' }} source={require("../../../assets/FalciListe/Fortune-Btn.png")} />
                                            </TouchableOpacity>
                                        </Right>
                                    </CardItem>
                                </Card>
                            }
                        />
                    </Content>
                  <TarotFooter/>


                </Container>
            </ImageBackground>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FalciDetayListe);
  