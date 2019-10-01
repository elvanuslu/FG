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
    Input,
    DatePicker,
    CheckBox,
} from "native-base";

import styles from "./styles";
import Icons from 'react-native-vector-icons/AntDesign';
import { getStorage,getRequest, postRequest } from '../../../service/services';
const Items = Picker.Item;

const BgHeader = require("../../../assets/Login.png");
const FooterBg = require("../../../assets/AnaSayfa/Bg.png");
const LoginBg = require("../../../assets/Login.png");
const icon = require("../../../assets/YorumcuDetay/Icon.png");
const icon2 = require("../../../assets/YorumcuDetay/Icon2.png");
const icon3 = require("../../../assets/YorumcuDetay/Icon3.png");
const icon4 = require("../../../assets/YorumcuDetay/Icon4.png");
const Title1 = require("../../../assets/YorumcuPanelGuncelle/Title.png");
const Title2 = require("../../../assets/YorumcuPanelGuncelle/Title2.png");
const KahveFalBaktirBtn = require("../../../assets/KahveFali/Next-Btn.png");
const aciklama = require("../../../assets/YorumcuPanelGuncelle/checkAciklama.png");

export default class YorumcuPanelGuncelle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            seg: 2,
            chosenDate: new Date(),
            api_token:0,
            name:"",
            surname:"",
            second_name:"",
            gender:"",
            birth_day:"",
            job:"",
            short_info:"",
            long_info:"",

        };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1
        });
    }

    async componentDidMount()
    {
        let api_token = await getStorage("id_token");
        let id = await getStorage("Id");
        let kullaniciBilgiler = await getRequest("user?includes=comment,fortune_teller&id="+id);
        kullaniciBilgiler = kullaniciBilgiler.data.data[0];
        
        this.setState({
            api_token:api_token,
            name:kullaniciBilgiler.name,
            surname:kullaniciBilgiler.surname,
            second_name:kullaniciBilgiler.second_name,
            gender:kullaniciBilgiler.gender,
            birth_day:kullaniciBilgiler.birth_day,
            job:kullaniciBilgiler.job,
            short_info:kullaniciBilgiler.fortune_teller.short_info,
            long_info:kullaniciBilgiler.fortune_teller.long_info,
        });

        console.log(this.state);
    }

    async onPressKaydet()
    {
       let body = {
           api_token:this.state.api_token,
           name:this.state.name,
           short_info:this.state.short_info,
       }

       const res = await postRequest(body,"fortune-teller-update");
       console.log(res);
       if(res.success)
       {
            Alert.alert('','Profil güncelleme başarılı');
       }
       
    }


    //  <TarotHeader/>
    render(){
        return(
            <ImageBackground source={BgHeader} style={{ flex: 1, width: '100%', height: '100%' }}>
                <Container style={styles.container}>
                  
                    <Content style={{ backgroundColor: '#E8E5E5', marginTop: 0 }}>
                        <Card style={styles.mb}>


                            <CardItem cardBody>
                                <Body style={{ marginTop: -20, marginLeft: 82 }}>


                                </Body>
                            </CardItem>

                            <CardItem style={{ paddingVertical: 0, }}>
                                <Content>
                                    <Image style={{ width: 135, marginLeft: 0, marginTop: 5, resizeMode: 'contain' }} source={Title1} />
                                    <Form style={{marginLeft:30,marginRight:0}}>
                                        <Text style={{fontSize:10,marginBottom:2,placeHolderTextStyle:'green'}}>Ad</Text>
                                        <Item regular>
                                            <Input placeholder="Adınız" onChangeText={(data)=>this.setState({name:data})} value={this.state.name} />
                                        </Item>
                                        <Text style={{ fontSize: 10, marginBottom: 2, marginTop:10}}>Soyad</Text>
                                        <Item regular>
                                            <Input  placeholder="Soyadınız"  onChangeText={(data)=>this.setState({surname:data})} value={this.state.surname}/>
                                        </Item>
                                        <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Rumuz</Text>
                                        <Item regular>
                                            <Input placeholder="Rumuzunuz"  onChangeText={(data)=>this.setState({second_name:data})} value={this.state.second_name} />
                                        </Item>
                                       
                                        <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Cinsiyet</Text>
                                        <View style={{
                                            borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 0, margnRight: 0, marginTop: 0, marginBottom: 0
                                        }}>
                                            <Item picker>
                                                <Picker
                                                    mode="dropdown" 
                                                    iosIcon={<Icon name="ios-arrow-down" />}
                                                    style={{ width: undefined }}
                                                    placeholder="Seçiniz"
                                                    placeholderStyle={{ color: "#bfc6ea" }}
                                                    placeholderIconColor="#007aff"
                                                    selectedValue={this.state.selected2}
                                                    onValueChange={this.onValueChange2.bind(this)}
                                                >
                                                    <Items label="Erkek" value="key0" />
                                                    <Items label="Kadın" value="key1" />
                                                </Picker>
                                            </Item>
                                        </View>
                                        <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Doğum Tarihi</Text>
                                        <View style={{
                                            borderWidth: 1, borderColor: 'rgb(204, 204, 204)', width: undefined, marginLeft: 0, margnRight: 0, marginTop: 0, marginBottom: 0
                                        }}>
                                            <DatePicker
                                                defaultDate={new Date(2018, 4, 4)}
                                                minimumDate={new Date(1900, 1, 1)}
                                                maximumDate={new Date(2050, 12, 31)}
                                                locale={"tr"}
                                                timeZoneOffsetInMinutes={undefined}
                                                modalTransparent={false}
                                                animationType={"fade"}
                                                androidMode={"default"}
                                                placeHolderText="Seçiniz"
                                                textStyle={{ color: "green" }}
                                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                onDateChange={this.setDate}
                                            />
                                        </View>
                                        <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Meslek</Text>
                                        <Item regular>
                                            <Input placeholder="Mesleğiniz" onChangeText={(data)=>this.setState({job:data})} value={this.state.job} />
                                        </Item>
                                    </Form>
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
                                    <Image style={{ width: 120, marginLeft: 0, marginTop: 5, resizeMode: 'contain' }} source={Title2} />

                                    
                                    <View>
                                        

                                        <Form style={{ marginLeft: 30, margnRight: 30,}}>
                                            <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Kısa Özgeçmiş</Text>
                                            <Textarea rowSpan={5} bordered placeholder="Kısa özgeçmiş" onChangeText={(data)=>this.setState({short_info:data})} value={this.state.short_info} />

                                            <Text style={{ fontSize: 10, marginBottom: 2, marginTop: 10 }}>Özgeçmiş</Text>
                                              <Textarea rowSpan={5} bordered placeholder="Özgeçmişiniz"  onChangeText={(data)=>this.setState({long_info:data})} value={this.state.long_info} />
                                        </Form>
                                    </View>
                                    <TouchableOpacity onPress={()=>this.onPressKaydet()}>
                                        <Image style={{ width: undefined, height: 60, resizeMode: 'contain', marginLeft: 30 }} source={KahveFalBaktirBtn} />
                                    </TouchableOpacity>

                                </Content>
                            </CardItem>
                        </Card>
                    </Content>
                 
                </Container>
            </ImageBackground>
        );
    }

}
//export default YorumcuPanelGuncelle
//<TarotFooter />