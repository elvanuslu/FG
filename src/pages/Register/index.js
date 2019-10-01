import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Alert,
    Image,
    TextInput,
    ImageBackground,
    Modal,
    TouchableHighlight,
} from 'react-native';

import {
    CheckBox,
} from "native-base";

 
import styles from "./styles";

import { KayitOL } from '../../../service/services';

const BgHeader = require("../../../assets/Login.png");
class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isRadioSelected: true,
            Ad: '',
            Soyad: '',
            EPosta: '',
            Sifre: '',
            loading: false,
            modalVisible: false,
        };

    }
    componentDidMount()
    {
    }
    kayitOl() {
        try {
            this.setState({
                loading: true
            })
            fetch('http://admin.falguru.com/api/v1/user', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.Ad,
                    surname: this.state.Soyad,
                    username: this.state.Ad,
                    email: this.state.EPosta,
                    password: this.state.Sifre,
                })
            })
                .then((response) => response.json())
                .then((response => {
                    let data = JSON.stringify(response);
                    let basarilimi = JSON.parse(data);
                    if (basarilimi.success === false) {
                        if (response.errors.email) {
                            // this.setModalVisible(true);
                            alert(response.errors.email)

                        } else if (response.errors.name)
                            alert(response.errors.name)
                        else if (response.errors.surname)
                            alert(response.errors.surname)
                        else if (response.errors.password)
                            alert(response.errors.password)

                        /*    for (let prop in response) {
                                if(response[prop]=== 'email')
                                    Alert.alert('email', response[prop] )
                               // console.log('Dönen Değer',response[prop]);
                            }
                            */

                        /*   this.response.errors.map((item,index)=>{
                               Alert.alert('email', item)
                                    if(item.name)
                                        Alert.alert('Hata!', basarilimi.name);
                            })
                        
                         */
                        if (basarilimi.name)
                            Alert.alert('Hata!', basarilimi.name);
                    }
                    else {
                        Alert.alert('Kayıt !', 'Başarılı.');
                    }
                    console.log('data ', response);
                }))
                .catch(err => { Alert.alert('Fetch Error: ' + err) })
                .done(this.setState({
                    loading: false
                }))
        } catch (error) {

        }
    }
    componentWillMount() {
    }

    handlePressCheckedBox = (checked) => {
        this.setState({
            isChecked: checked,
        });
    }
    toggleSwitch1() {
        this.setState({
            checkbox1: !this.state.checkbox1
        });
    }
    handleSelectedRadionButton = (checked) => {
        this.setState({
            isRadioSelected: checked,
        });
    }

    onPress = () => {
        Actions.AnaEkran();
        
    }
    onLogin = () => {
        Actions.UyeGirisi();
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    _KayitOL = () => {
        KayitOL(this.state.Ad, this.state.Soyad, this.state.EPosta, this.state.Sifre)
            .then((res) => {
                if (res.success === true) {
                    Alert.alert('Kullanıcı Kaydı!', 'Kullanıcı Kaydınız Başarılı bir şekilde oluşturuldu.',
                        [
                            { text: 'Tamam', onPress: () => Actions.UyeGirisi() },
                        ],
                        { cancelable: false },
                    );
                    
                }
                else {
                    console.log('hata : '+ JSON.stringify(res));
                    if (res.errors.password !== undefined)
                        Alert.alert('Kullanıcı Oluşturulamadı', res.errors.password.toString());
                    else if (res.errors.username !== undefined)
                    {
                        Alert.alert('Kullanıcı Oluşturulamadı', res.errors.username.toString());
                    }
                    else if (res.errors.email !== undefined) {
                        Alert.alert('Kullanıcı Oluşturulamadı', res.errors.email.toString());
                    }
                    else
                    {
                        Alert.alert('Kullanıcı Oluşturulamadı', res.errors[0]);
                    }
                }
            })
    }
    render() {
        
        return (
            <ImageBackground source={BgHeader} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <ScrollView >
                    <View style={styles.contentWrap}>

                        <View style={styles.buttonLoginWrap}>
                            <TouchableOpacity onPress={this.onLogin} >
                                <Image style={{ marginLeft: 50, resizeMode: 'contain', width: 75 }} source={require("../../../assets/UyeGirisi.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity sonPress={this.onPress}>
                                <Image style={{ marginRight: 50, marginTop: 2, resizeMode: 'contain', width: 75 }} source={require("../../../assets/KayitOl.png")} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image style={{ marginLeft: 185, marginTop: 2, resizeMode: 'contain', width: 80 }} source={require("../../../assets/Hover-Line.png")} />
                        </View>
                        <View style={styles.emailSignUpWrap}>

                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>
                                    Ad
                            </Text>
                                <TextInput style={styles.textInput} onChangeText={(Ad) => this.setState({ Ad })}
                                    value={this.state.Ad}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    placeholder='Adınızı giriniz...'
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(225,225,225,0.7)'

                                />

                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>
                                    Soyad
                            </Text>
                                <TextInput style={styles.textInput} onChangeText={(Soyad) => this.setState({ Soyad })}
                                    value={this.state.Soyad}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    placeholder='Soyadınızı giriniz...'
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(225,225,225,0.7)'
                                />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>
                                    E-Posta
                            </Text>
                                <TextInput style={styles.textInput} onChangeText={(EPosta) => this.setState({ EPosta })}
                                    value={this.state.EPosta}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType='email-address'
                                    returnKeyType="next"
                                    placeholder='Email giriniz...'
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(225,225,225,0.7)' />
                            </View>
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>
                                    Şifre
                            </Text>
                                <TextInput style={styles.textInput} onChangeText={(Sifre) => this.setState({ Sifre })}
                                    value={this.state.Sifre}
                                    returnKeyType="go"
                                    placeholder='Şifrenizi giriniz...'
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor='rgba(225,225,225,0.7)'
                                    secureTextEntry
                                />

                            </View>
                            <View style={styles.checkBoxWrap} >
                                <CheckBox
                                    checked={this.state.checkbox1}
                                    onPress={() => this.toggleSwitch1()}
                                />
                                <Image style={styles.checkWrap} source={require("../../../assets/Check.png")} />
                            </View>

                        </View>
                        <View style={styles.buttonLgn}>
                            <TouchableOpacity onPress={() => this._KayitOL()} >
                                <Image style={styles.buttonLoginIcon} source={require("../../../assets/Login-Btn.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        )
    }
}

export default Register 
