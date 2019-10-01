import {AsyncStorage,NetInfo} from 'react-native';
import { TIKLANAN_FORM } from './types';
import { SETTINGS,KART,RESIM} from './types';


 


export const getStorage = async (key) =>{
   try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
          return value;
      }else{
        return '';
      }
    } catch (error) {
      console.log('Hata oluştu',error);
    }
};

export const setStorage = async (key,value) => {
  try {
  await AsyncStorage.setItem(key, value+'');
  } catch (error) {
  console.log('Hata oluştu',error);
  }
};

 

export const settingsChanged = (type) => (dispatch) => {

  dispatch({
    type: SETTINGS,
    payload: type
  });
};

export const kartBilgileriChanged = (type) => (dispatch) => {

  dispatch({
    type: KART,
    payload: type
  });
};
export const resimChanged = (type) => (dispatch) => {

  dispatch({
    type: RESIM,
    payload: type
  });
};

 

export const tiklananFormChanged = (type) => (dispatch) => {

  dispatch({
    type: TIKLANAN_FORM,
    payload: type
  });
};
 

export const postRequest = async (body,url) => {
 
  try{
    NetInfo.isConnected.fetch().then(async (isConnected) => {
      if(!isConnected)
        {
          Alert.alert('Bağlantı hatası','İnternet bağlantısını kontrol ediniz!');
          return false;
        }

    });

    const data =  await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body ),
    }).then(resp => resp.json());
    if(data.Message!==undefined)
    {

      if(data.Message=="Bu masa boş değildir kontrol ediniz" || data.Message=="Bu masa zaten kapatılmıştır kontrol ediniz")
      {
        Alert.alert('Uyarı',data.Message);
        return false;
      }

    }
    return data;
  }catch(err)
  {
    console.log('HATA2:',err);
    return false;
  }
  }
