import React, {Component} from 'react';
import {View} from 'react-native';
/*Components*/
 
import { Router, Scene,Stack,Drawer} from 'react-native-router-flux';
 
////

import {connect} from 'react-redux';
import {settingsChanged} from './actions';
/*Pages*/
import AnaEkran from './pages/AnaEkran';
import UyeGirisi from './pages/UyeGirisi';
import Register from './pages/Register';
import AnaSayfa from './pages/AnaSayfa';
import FalciDetayListe from './pages/FalciDetayListe';
import YorumcuDetayFalCesitleri from './pages/YorumcuDetayFalCesitleri';
import YorumcuDetay from './pages/YorumcuDetay';
import YorumcuDetayMedya from './pages/YorumcuDetayMedya';
import YorumcuDetayComment from './pages/YorumcuDetayComment';
import Ruya from './pages/Fallar/Ruya';
import YildizName from './pages/Fallar/YildizName';
import Katina from './pages/Fallar/Katina';
import SuFali from './pages/Fallar/SuFali';
import TarotFalBaktir from './pages/TarotFalBaktir';
import KahveFaliBaktirAsama1 from './pages/KahveFaliAsama1';
import YorumcuPanel from './pages/YorumcuPanel';
 
 class RouterPage extends Component{

 	constructor(props)
 	{
 		super(props);
	 }
 

  render() {

    return (

	        <Router>
	          <Scene key="root">
					<Scene key="AnaEkran"  initial  type="reset"  component={AnaEkran} hideNavBar={true} />
					<Scene key="UyeGirisi" type="reset" component={UyeGirisi} hideNavBar={true} />
					<Scene key="Register" type="reset" component={Register} hideNavBar={true} />
					<Scene key="AnaSayfa" type="reset" component={AnaSayfa} hideNavBar={true} />
					<Scene key="FalciDetayListe"   component={FalciDetayListe} hideNavBar={true} />
					<Scene key="YorumcuDetayFalCesitleri"   component={YorumcuDetayFalCesitleri} hideNavBar={true} />
					<Scene key="YorumcuDetay"   component={YorumcuDetay} hideNavBar={true} />
					<Scene key="YorumcuDetayMedya"   component={YorumcuDetayMedya} hideNavBar={true} />
					<Scene key="YorumcuDetayComment"   component={YorumcuDetayComment} hideNavBar={true} />
					<Scene key="Ruya"   component={Ruya} hideNavBar={true} />
					<Scene key="YildizName"   component={YildizName} hideNavBar={true} />
					<Scene key="Katina"   component={Katina} hideNavBar={true} />
					<Scene key="SuFali"   component={SuFali} hideNavBar={true} />
					<Scene key="TarotFalBaktir"   component={TarotFalBaktir} hideNavBar={true} />
					<Scene key="KahveFaliBaktirAsama1"   component={KahveFaliBaktirAsama1} hideNavBar={true} />
					<Scene key="YorumcuPanel" component={YorumcuPanel} hideNavBar={true} />

	         </Scene>
	       </Router>
    );
  }
}
 

export default (RouterPage);

// ------ kartBilgileriChanged  // kartBilgileri  //----
// kartTipi
// falTipi
// fortuneMethodId;
// fortune_teller;
