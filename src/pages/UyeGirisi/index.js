import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Image,
    TextInput,
    ImageBackground,
    StatusBar,
    AsyncStorage,
} from 'react-native';

import {
    Container,
    Content,
} from "native-base";

import styles from "./styles";
 
import { userLogin,config,setStorage } from '../../../service/services';
import { Actions } from 'react-native-router-flux';

const screenBg = require("../../../assets/Login2.png");

class UyeGirisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kullaniciId:'',
            KullaniciAdi: '',
            Sifre: '',
            emailAddress: 'admin@admin.com',
            password: 'password',
            info: [],
            loading: false,
        };

    }

    
    async saveItem(item, selectedValue) {
        try {
            selectedValue = JSON.stringify(selectedValue)
            if (selectedValue)
                await AsyncStorage.setItem(item, selectedValue);
            else
                console.log('AsyncStorage null error: ', item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }
    closeActivityIndicator() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }
    
    async getConfig()
    {
        const conf =  await config();
        setStorage("site_url",conf.site_url);
        setStorage("api_url",conf.api_url);
        setStorage("photo_base_url",conf.photo_base_url);
         
        
        setStorage("image_stream_prefix",conf.image_stream_prefix);
        setStorage("image_upload_prefix",conf.image_upload_prefix);
    }
// Burası Çalışıyor...
    _login=()=>{
       userLogin(this.state.emailAddress,this.state.password)
       .then((res)=>{        
            if(res.success ===true){
              
                this.saveItem('id_token', res.data.api_token);
                this.saveItem('Id', res.data.id);
                this.getConfig();

                Actions.AnaSayfa();
            }
            else
            {
                Alert.alert('Hatalı Giriş', res.errors.toString());
            }
        })
    }
    _userSignup = () => {
        if (!this.state.email || !this.state.password) return;
        // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
        fetch('http://192.168.XXX.XXX:3001/users', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.emailAddress,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.saveItem('id_token', responseData.api_token),
                    Alert.alert('Signup Success!', 'Click the button to get !'),
                    Actions.AnaSayfa();
            })
            .done();
    }
    _userLogin = () => {
        this.setState({
            loading: true
        })
        fetch('http://admin.falguru.com/api/v1/login', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.emailAddress,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                let data = JSON.stringify(responseData);
                let basarilimi = JSON.parse(data);
               
                if (basarilimi.success === false) {
                    Alert.alert('Kullanıcı Giriş', 'Kullanici Adı yada Şifre yanlış');
                }
                else {
                    this.saveItem('id_token', responseData.data.api_token);
                    Actions.AnaSayfa();
                    
                }

            })
            .catch(err => { Alert.alert('Fetch Error: ' + err) })
            .done(this.setState({
                loading: false
            }))
    }
    async userLogout() {
        try {

            await AsyncStorage.removeItem('id_token');
            Alert.alert('Logout Success!');
            
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }
    onPress = () => {
        
        Actions.AnaSayfa();
        
    }
    onRegister = () => {
        Actions.Register();
    }
    onYorumcuPanel = () => {
       this._login();
    
    }
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />
                <ImageBackground source={screenBg} style={styles.imageContainer}>
                    <View style={styles.container1}>
                        <View style={styles.container4}>

                        </View>
                        <View style={styles.container2}>
                            <View style={styles.buttonLoginWrap}>
                                <TouchableOpacity onPress={this.onPress} style={{ marginRight: 15 }}>
                                    <Image style={styles.btnContent} source={require("../../../assets/UyeGiris.png")} />
                                    <Image style={{ marginLeft: 15, marginTop: 0, resizeMode: 'contain', width: 80 }} source={require("../../../assets/Hover-Line.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onRegister}>
                                    <Image style={{ marginRight: 50, marginTop: 2, resizeMode: 'contain', width: 65 }} source={require("../../../assets/KayitOlDisabled.png")} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.container3}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>
                                        E-Posta ya da Telefon Numarası
                                    </Text>
                                    <TextInput style={styles.textInput} onChangeText={(emailAddress) => this.setState({ emailAddress })}
                                        value={this.state.emailAddress}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType='email-address'
                                        returnKeyType="next"
                                        placeholder='Email yada Telefon numarası'
                                        placeholderTextColor='rgba(225,225,225,0.7)'
                                    />
                                    <View style={{ marginBottom: 10 }}></View>
                                    <Text style={styles.label}>
                                        Şifre
                                    </Text>
                                    <TextInput style={styles.textInput} onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        returnKeyType="go"
                                        placeholder='Password'
                                        placeholderTextColor='rgba(225,225,225,0.7)'
                                        secureTextEntry
                                    />
                                </View>

                                <View style={styles.checkBoxWrap} >
                                    <TouchableOpacity style={styles.checkWrap} onPress={this.onPress} >
                                        <Image style={styles.checkWrap} source={require("../../../assets/ForgotBtn.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.container4}>
                                <Content>
                                    <TouchableOpacity onPress={this.onYorumcuPanel} >
                                        <Image style={styles.buttonLoginIcon} source={require("../../../assets/LoginBtn.png")} />
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: '800', fontSize: 16, alignSelf: 'center' }}>ya da</Text>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={styles.buttonLoginIcon} source={require("../../../assets/FB-Button.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={styles.buttonLoginIcon} source={require("../../../assets/G-Button.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.onPress} >
                                        <Image style={styles.buttonLoginIcon} source={require("../../../assets/Guest-Button.png")} />
                                    </TouchableOpacity>
                                    </Content>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        )
    }
}
export default UyeGirisi;