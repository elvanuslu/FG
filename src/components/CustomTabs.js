import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native';


const yorumlar = require("../../assets/YorumcuDetay/04.png");

const medya = require("../../assets/Medya/medyaDis.png");
const hakkinda = require("../../assets/Medya/Hakkinda.png");
const falcesit = require("../../assets/Medya/FalCesit.png");
import {Actions} from 'react-native-router-flux';


class CustomTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  
onHakkimda = () => {
    Actions.replace('YorumcuDetay');
}
onMedya = () => {
    Actions.replace('YorumcuDetayMedya');
}
onFalCesitleri = () => {
    Actions.replace('YorumcuDetayFalCesitleri');
}
onFalCesitleriYorumcu = () => {
    Actions.replace('YorumcuDetayComment');
}
  render() {
    return (
    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', margin:20, }}>
        <TouchableOpacity onPress={this.onHakkimda} style={this.props.activeIndex==0?styles.active:styles.pasive} >
            <Text style={this.props.activeIndex==0?styles.activeTxt:styles.pasiveTxt}>Hakkımda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onMedya} style={this.props.activeIndex==1?styles.active:styles.pasive} >
            <Text style={this.props.activeIndex==1?styles.activeTxt:styles.pasiveTxt} >Medya</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFalCesitleri} style={this.props.activeIndex==2?styles.active:styles.pasive} >
            <Text style={this.props.activeIndex==2?styles.activeTxt:styles.pasiveTxt} >Fal Çeşitleri</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onFalCesitleriYorumcu} style={this.props.activeIndex==3?styles.active:styles.pasive} >
            <Text style={this.props.activeIndex==3?styles.activeTxt:styles.pasiveTxt} >Yorumlar</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

var styles = StyleSheet.create({
    pasive:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        borderWidth:1,
        marginLeft:-1,
        borderRadius:2,
        borderColor:'#E5C1D4',
        backgroundColor: '#FAF3F7',
       
    },
    active:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        borderWidth:1,
        marginLeft:-1,
        borderRadius:2,
        backgroundColor: '#B7417E',
        borderColor:'#B7417E',
       
    },
    activeTxt:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
    },
    pasiveTxt:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
    }
})

export default CustomTabs;
