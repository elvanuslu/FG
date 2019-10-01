import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
    Alert,
    TouchableHighlight,
    ScrollView,
    
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
} from "native-base";


import styles from "./styles";
import {connect} from 'react-redux';
import {kartBilgileriChanged} from '../../actions';
import { config } from '../../../service/services';
import TarotFooter from '../../components/TarotFooter';
import CustomHeader from '../../components/CustomHeader';
import KahveFaliResimSec from '../../components/KahveFaliResimSec';

const BgHeader = require("../../../assets/Login.png");
const notification = require("../../../assets/Notification-Icon.png");
const FilterBar = require("../../../assets/KahveFali/Bg1.png");
const megha = require("../../../assets/contacts/megha.png");

const goruntulubtn = require("../../../assets/KahveFali/goruntulukonusma.png");
const kahvefalibtn = require("../../../assets/KahveFali/kahvefali.png");
const divider = require("../../../assets/KahveFali/Divider.png");

const KahveFalBaktirBtn = require("../../../assets/KahveFali/Next-Btn.png");
const Title1 = require("../../../assets/KahveFali/Title1.png");
const Title2 = require("../../../assets/KahveFali/Title2.png");
const Leftimg = require("../../../assets/KahveFali/Left.png");
const Rightimg = require("../../../assets/KahveFali/Right.png");

const fincan = require("../../../assets/KahveFali/Fincankahve.png");
const tabak = require("../../../assets/KahveFali/Tabak.png");

// import ImagePicker from 'react-native-image-picker';



class KahveFaliBaktirAsama1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected1: "key1",
            selected5: "key2",
            selected2: undefined,
            selected3: undefined,
            isHidden: false,
            photos:[],
        };
    }

   
   async componentWillMount() {

    const conf = await config();

    this.setState({
        fortune_teller: this.props.kartBilgileri.fortune_teller,
        fortune_method_id: this.props.kartBilgileri.fortune_method_id,
        photo_base_url: conf.photo_base_url,
    });

    }

    onPress = () => {

    }
    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }
    onValueChange5(value) {
        this.setState({
            selected5: value
        });
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }
    onValueChange3(value) {
        this.setState({
            selected3: value
        });
    }

    render() {
        if(this.state.fortune_teller===undefined)
            return(<View/>);


        return (
            <ImageBackground source={BgHeader} style={styles.imageContainer}>

                <Container style={styles.container}>
                    <CustomHeader Left Right/>
                    <View style={{ marginBottom: 70,  }}>
                        <ImageBackground source={FilterBar} style={{ width: '100%', height: 75, flex: 1, flexDirection: 'row' }}>

                            <Thumbnail style={{ resizeMode: 'contain', marginLeft: 10, marginTop: 10 }} source={{uri:this.state.photo_base_url+''+this.state.fortune_teller.avatar}} />
                            <TouchableOpacity onPress={this.onPress} >
                                <Image style={{ width: 75, marginLeft: 10, marginTop: 45, resizeMode: 'contain' }} source={kahvefalibtn} />
                            </TouchableOpacity>
                            <Image style={{ height: 15, marginLeft: 10, marginTop: 45, resizeMode: 'contain' }} source={divider} />
                            <TouchableOpacity onPress={()=>{
                                
                            }} >
                                <Image style={{ width: 115, marginLeft: 10, marginTop: 45, resizeMode: 'contain' }} source={goruntulubtn} />
                            </TouchableOpacity>

                        </ImageBackground>
                        <View><Text style={styles.labelFalcibeyaz}>{this.state.fortune_teller.name}</Text></View>
                    </View>
                    <Content style={{ backgroundColor: '#E8E5E5', marginTop: -38 }}>
                        <Card style={styles.mb}>


                            <CardItem cardBody>
                                <Body style={{ marginTop: -20, marginLeft: 82 }}>


                                </Body>
                            </CardItem>

                            <CardItem style={{ paddingVertical: 0, }}>
                                <KahveFaliResimSec/>
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
                                        <Text style={styles.labelFalcinote2}>İlişki Durumu</Text>

                                        <Form>
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
                                                    <Item label="Evli" value="key0" />
                                                    <Item label="Bekar" value="key1" />

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
                                                    <Item label="Adana" value="key0" />
                                                    <Item label="Ankara" value="key1" />
                                                    <Item label="Istanbul" value="key2" />
                                                    <Item label="İzmir" value="key3" />

                                                </Picker>
                                            </View>
                                            <Text style={styles.labelFalcinote2}>Sormak İstediğiniz Soru?</Text>
                                            <View style={{ marginLeft: 30, marginRight: 0, marginTop: -7, marginBottom: 15 }}>

                                                <Textarea rowSpan={5} bordered placeholder="Örn. İlişki, Aşk, vb" />
                                            </View>
                                        </Form>
                                    </View>
                                   
                                    <TouchableOpacity>
                                        <Image style={{ width: undefined, height: 60, resizeMode: 'contain', marginLeft: 30 }} source={KahveFalBaktirBtn} />
                                    </TouchableOpacity>

                                </Content>
                            </CardItem>
                        </Card>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(KahveFaliBaktirAsama1);
