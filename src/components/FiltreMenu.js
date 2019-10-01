import React, { Component } from 'react';
import { View,ImageBackground,TouchableOpacity,Image,Dimensions } from 'react-native';
import {Left,Text,Body,Right, Button,ListItem,Radio, CheckBox} from 'native-base';
const FilterBar = require("../../assets/FalciListe/FilterBar.png");
const notification = require("../../assets/Notification-Icon.png");
class FiltreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        menuFiltreState:false,
        menuSortState:false,
        menu1:false,
        menu2:false,
        menu3:false,
    };
  }

  menuOnPress(index)
  {
      switch (index) {
        case 0:
            this.setState({menu1:!this.state.menu1,menu2:false,menu3:false});
            break;
        case 1:
            this.setState({menu1:false,menu2:!this.state.menu2,menu3:false});
            break;
        case 2:
            this.setState({menu1:false,menu2:false,menu3:!this.state.menu3});
            break;
        
      }
    

  }

  render() {
    return (
        <ImageBackground source={FilterBar} style={styles.container}>
        <View style={{flex:1,marginLeft:20}}>
            <TouchableOpacity onPress={()=> this.menuOnPress(2)} >
                <Image style={{ width: 90, resizeMode: 'contain', }} source={require("../../assets/FalciListe/Filter.png")} />
            </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() =>this.menuOnPress(0)} >
                <Image style={{ width: 90, resizeMode: 'contain', }} source={require("../../assets/FalciListe/Filter.png")} />
            </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
            <TouchableOpacity onPress={() =>this.menuOnPress(1)} >
                <Image style={{ width: 90, resizeMode: 'contain', }} source={require("../../assets/FalciListe/Sort.png")} />
            </TouchableOpacity>
        </View>
        {this.state.menu1?
                (
                <View style={styles.rightMenu}> 
                   
                   <TouchableOpacity style={styles.btnStyle}>
                        <CheckBox style={styles.checkStyle} checked={true} />
                        <Text style={styles.menuText}>Görüntülü Konuşma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <CheckBox style={styles.checkStyle} checked={true} />
                        <Text style={styles.menuText}>Sesli Konuşma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <CheckBox style={styles.checkStyle} checked={true} />
                        <Text style={styles.menuText}>Sesli Cevap Al</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <CheckBox style={styles.checkStyle} checked={true} />
                        <Text style={styles.menuText}>Canlı Sohbet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <CheckBox style={styles.checkStyle} checked={true} />
                        <Text style={styles.menuText}>Yazılı Cevap Al</Text>
                    </TouchableOpacity>

                </View>
                ):null
            }

            {this.state.menu2?
                (
                <View style={styles.rightMenu}> 
                   
                    <TouchableOpacity style={styles.btnStyle}>
                        <Radio selected={true} />
                        <Text style={styles.menuText}>Fiyata Göre En Yüksek</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <Radio selected={true} />
                        <Text style={styles.menuText}>Fiyata Göre En Düşük</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <Radio selected={true} />
                        <Text style={styles.menuText}>Puana Göre En Düşük</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}>
                        <Radio selected={true} />
                        <Text style={styles.menuText}>Puana Göre En Yüksek</Text>
                    </TouchableOpacity>
                    
                </View>
                ):null
            }

            {this.state.menu3?
                (
                <View style={styles.leftMenu}> 
                   
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Kahve Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Tarot Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Yıldızname Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Katina Aşk Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Su Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Ateş Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Melek Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>İskanbil Falı</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle2}>
                    <Image style={{
                                        width: 60,
                                        height: 60, resizeMode: 'contain'
                                    }} source={require("../../assets/AnaSayfa/RuyaYorum.png")} />
                        <Text style={styles.menuText}>Rüya Yorum</Text>
                        <Radio selected={true} />
                    </TouchableOpacity>
                    
                </View>
                ):null
            }
    </ImageBackground>
    );
  }
}

export default FiltreMenu;

var styles = {
    container:{
        width: '100%', height: 60, flexDirection: 'row', alignItems:'center',position: 'absolute',zIndex: 1,
    },
    btnStyle:{
        flexDirection:'row',padding:10,paddingTop:15,paddingBottom: 15,alignItems:'center'
    },
    btnStyle2:{
        flexDirection:'row',alignItems:'center'
    },
    rightMenu:{
        backgroundColor: '#fff',width:'60%',position:'absolute',right: 0,top:48,borderWidth:2,borderColor: '#eee',borderTopWidth: 0,
    },
    leftMenu:{
        backgroundColor: '#fff',width:'60%',position:'absolute',Left: 0,top:48,borderWidth:2,borderColor: '#eee',borderTopWidth: 0,
    },
    menuText:{
        marginLeft:10,marginRight:10,fontSize:15
    },
    checkStyle:{
        marginRight:10
    }
}