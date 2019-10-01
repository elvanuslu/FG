import {AsyncStorage} from 'react-native';

const define_api_url = "http://admin.falguru.com/api/v1/";

export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
  //  const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
        .then((res) => res.json());
    
}

export const userLogin =(email,password)=>{
    let mail= email.toLowerCase().trim();
    let pass = password.trim();
    const URL = `http://admin.falguru.com/api/v1/login`;
    return fetch(URL,{
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: mail,
            password: pass,
        })
    })
        .then((res) => res.json());
}

export const KayitOL=(ad,soyad,ePosta,sifre)=>{
    let Ad = ad.trim();
    let Soyad=soyad.trim();
    let EPosta = ePosta.trim();
    let Sifre = sifre.trim();
    return fetch('http://admin.falguru.com/api/v1/user', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: Ad,
            surname: Soyad,
            username: EPosta,
            email: EPosta,
            password: Sifre,
        })
    })
        .then((response) => response.json())
}

export const FalciListeleme=() =>{
    return fetch('http://admin.falguru.com/api/v1/fortune-teller?includes=fortune_method,user,comment,fortune_type,fortune_teller_price&price_order=desc')
    .then((response)=> response.json())
}



export const postRequest = async (body,url) => {

    let api_url = await getStorage("api_url");
    if(api_url == undefined || api_url=="")
    {
        api_url = define_api_url;
    }
    const ApiUrl = api_url+url;
    
    //console.log(body,ApiUrl);
    let data =  await fetch(ApiUrl, {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify( body ),
    }).then(resp => resp.json());

    if(data.success===undefined)
    {
        data.success=false;
        data.errors="Hatalı api url";
        data.data=[];
    }
    return data;

}
  
  export const getRequest = async (url) => {
  
    let api_url = await getStorage("api_url");
    if(api_url == undefined || api_url=="")
    {
        api_url = define_api_url;
    }
    const ApiUrl = api_url+url;

    
    let data =  await fetch(ApiUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json());
    return data;
}

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


 // Loginde config değerleri çekilerek storage ye atılıyor burdan sonrası için storageden çek devam et
 export const config = async () => {
  
    const ApiUrl = "http://admin.falguru.com/api/v1/config";
    let data =  await fetch(ApiUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json());
    return data;
}
 export const KartTipleri = async () => {
  
    const url = await getStorage("api_url");
    const ApiUrl = url+"fortune-type";

    let data =  await fetch(ApiUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json());
    return data;
}



 