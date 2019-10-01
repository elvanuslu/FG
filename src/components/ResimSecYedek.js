import React, { Component } from 'react';
import { View, Image,StyleSheet } from 'react-native';
import {Button,Text, Icon,Card} from 'native-base';
var ImagePicker = require('react-native-image-picker');
import {resimChanged} from '../actions'
import {connect} from 'react-redux';

class ResimSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

  camera = () => {
    var options = {

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality:0.2256,
      maxWidth:1000,
      maxHeight:1000,
    };
    ImagePicker.launchCamera(options, response => {

      this.resim(response);

    });
  };

  async resim(response)
  {
    this.props.resimChanged(response);
  }

  gallery = async() => {
    var options = {

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality:0.2256,
      maxWidth:1000,
      maxHeight:1000,
    };
    ImagePicker.launchImageLibrary(options, response => {

      this.resim(response);

    });
  };

  remove()
  {
    this.props.resimChanged({});
  }

  render() {
    console.log('render',this.props.resim);
    
    const image = this.props.resim.uri!==undefined? (
    <Card style={{padding:10,backgroundColor:'white',}}>
      <Image
        source={{ uri: this.props.resim.uri }}
        style={{ width: 250, height: 250 ,alignSelf:'center'}}
      />
    </Card>
    ) : null;

    return (
      <View>
         {image}
    <View style={styles.buttonBox}>
      <Button style={styles.button}  onPress={this.camera.bind(this)}>
      <Icon name="camera" />
      </Button>
      <Button style={styles.button} warning onPress={this.gallery.bind(this)}>
      <Icon name="images" />
      </Button>
      <Button  danger style={styles.button} onPress={()=>this.remove()}>
      <Icon name="close" />
      </Button>
    </View>
      </View>
    );
  }
}

const mapStateToProps = ({ IslemResponse }) => {
  return {
    resim:IslemResponse.resim,
  };
};

const mapDispatchToProps = {
  resimChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(ResimSec);


const styles = StyleSheet.create({
  buttonBox:{
    flexDirection:'row',
    alignSelf:'center'
  },
  button:{
    justifyContent: 'center',
    width:55,
    margin: 5,
    flexDirection: 'column',
  },  
});
