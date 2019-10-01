import React, { Component } from 'react';
import { View, Image,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import {Button,Text, Icon,Card,Content, Badge} from 'native-base';
import  ImagePicker from 'react-native-image-picker';
import {resimChanged} from '../actions';
import {connect} from 'react-redux';
import ModalSelector from 'react-native-modal-selector'


const Title1 = require("../../assets/KahveFali/Title1.png");
const Leftimg = require("../../assets/KahveFali/Left.png");
const Rightimg = require("../../assets/KahveFali/Right.png");
const fincan = require("../../assets/KahveFali/Fincankahve.png");
const tabak = require("../../assets/KahveFali/Tabak.png");

class KahveFaliResimSec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };

    this.camera = this.camera.bind(this);
    this.gallery = this.gallery.bind(this);
    this.fotoSec = this.fotoSec.bind(this);
  }

  camera(imageType) // imageType = [fincan,tabak] 
  {
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

      this.resim(response,imageType); 

    });
  };

  async resim(response,imageType) // imageType = [fincan,tabak] 
  {
    let data = {
      resim:response,
      imageType:imageType,
    };

    let say = 0;
    this.props.resim.map((item,index)=>{
      if(imageType == item.imageType)
      {
        say++;
      }
    });

    if((imageType == "fincan" && say == 4) || imageType == "tabak" && say == 1)
    {
      for (let index = 0; index < this.props.resim.length; index++) {
        const item = this.props.resim[index];
        if(imageType == item.imageType)
        {
          this.props.resim[index] = data;
          this.setState({refresh:true});
          return;
        }
      }
    } 
    
    this.props.resim.push(data);
    this.props.resimChanged(this.props.resim);
    this.setState({refresh:true});

  }

  async gallery(imageType) // imageType = [fincan,tabak] 
  {
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
      this.resim(response,imageType);
    });
    
  };

  remove(imageIndex)
  {
    // this.props.resimChanged([]);
    // return;
    let resim = [];
    for (let index = 0; index < this.props.resim.length; index++) {
      const item = this.props.resim[index];
      if(imageIndex != index)
      resim.push(item);
    };
    this.props.resimChanged(resim);
  }

image()
{
  if(this.props.resim.uri !==undefined)
  {
    return(
        <Card style={{padding:10,backgroundColor:'white',}}>
        <Image
          source={{ uri: this.props.resim.uri }}
          style={{ width: 250, height: 250 ,alignSelf:'center'}}
        />
        </Card>
    );
  }
  return(null);
  }

fotoSec(option,imageType) // imageType = ["fincan","tabak"]
{
  
  let [gallery,camera] = [0,1];
  if(option.key == gallery)
  {
    this.gallery(imageType);
  }else if(option.key == camera)
  {
    this.camera(imageType);
  }

}

  render() {
    console.log('render',this.props.resim);
    const data = [
      { key: 0, label: 'Galeri' },
      { key: 1, label: 'Kamera' },
    ];

    return (
      <View>
         
        <Content>
            <Image style={{ width: 135, marginLeft: 0, marginTop: 5, resizeMode: 'contain' }} source={Title1} />

            <Text style={styles.labelFalcinote}>Falınıza bakabilmemiz için, 4 adet fincan 1 adet de tabağın fotoğrafı gerekiyor.</Text>
            <Text style={styles.labelFalcinote}>İşte medyumluğumuzda bu kadar :)</Text>

             <View style={{flexDirection:'row',alignSelf:'center'}}>
             <ModalSelector
              data={data}
              initValue="Fotoğraf Seç"
              cancelButtonAccessibilityLabel={'Geri'}
              onChange={(option)=>this.fotoSec(option,"fincan")}>
                <Image style={{height: 110,width:110, resizeMode: 'contain',marginRight: 10, }} source={Leftimg} />
              </ModalSelector>
              <ModalSelector
              data={data}
              initValue="Fotoğraf Seç"
              cancelButtonAccessibilityLabel={'Geri'}
              onChange={(option)=>this.fotoSec(option,"tabak")}>
                <Image style={{  height: 110,width:110, resizeMode: 'contain',}} source={Rightimg} />
              </ModalSelector>
             </View>
            <View style={{flexDirection:'row',alignSelf: 'center' }}>
              {this.props.resim.map((item,index)=>{
              if(item.imageType == "fincan")
              {
                return(
                  <TouchableOpacity key={index} onPress={()=>this.remove(index)} >
                    <Badge style={{position: 'absolute',zIndex: 1,alignSelf:'flex-end',right: -8,top:8}}><Text>X</Text></Badge>
                    <Image style={{height:80,width:80,resizeMode:'contain',marginLeft:5,borderRadius:5}} source={{ uri: item.resim.uri }} />
                  </TouchableOpacity>
                  )
              } 
              })}
            </View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
             { this.props.resim.map((item,index)=>{
               if(item.imageType == "tabak")
               {
                 return(
                  <TouchableOpacity key={index} onPress={()=>this.remove(index)} >
                      <Badge style={{position: 'absolute',zIndex: 1,alignSelf:'flex-end',right: -8,top:8,}}><Text>X</Text></Badge>
                      <Image style={{height:80,width:80,resizeMode:'contain'}} source={{ uri: item.resim.uri }} />
                  </TouchableOpacity>
                 )
               }
             })
             }
            </View>
        </Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(KahveFaliResimSec);

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
