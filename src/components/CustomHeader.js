import React, { Component } from 'react';
import { Image,TouchableOpacity,StatusBar} from 'react-native';
import { Body, Right,Text, Left, Header, Button ,Icon,Badge, View} from 'native-base';
import { Actions } from 'react-native-router-flux';

const notification = require("../../assets/Notification-Icon.png");

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header transparent>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />
        <View style={{justifyContent: 'center',}}>
            {
              this.props.Left!==undefined?
                this.props.Left?(
                  <Button transparent onPress={()=>Actions.pop()} >
                      <Icon name='arrow-back'  style={{color:'white'}}/>
                  </Button>
                ):null:null
            }
        </View>
        <Body style={{}}>
            <Image source={require('../../assets/logo3.png')} style={{ height:40,width:140,alignSelf:'center', }} />
        </Body>
        <View style={{justifyContent: 'center',}}>
            {
              this.props.Right!==undefined?
                this.props.Right?(
                  <TouchableOpacity style={{width:30, }}>
                          <Image style={{width: 20, height: 20,  }} source={notification}></Image>
                          <Badge
                              style={{ backgroundColor: "purple", width: 25, height: 25, marginLeft:5, marginTop: -40 }}
                              textStyle={{ color: "white" }}
                          >
                              <Text style={{ color: 'white' }}>6</Text>
                          </Badge>
                  </TouchableOpacity>
                ):null:null
            }
        </View>
      </Header>
    );
  }
}

export default CustomHeader;
