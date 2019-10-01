const React = require("react-native");

const { StyleSheet } = React;

const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    stretchx: {
        marginTop:40,
        marginLeft: 330,
        width: 20,
        height: 20,
    },
    badgex: {
        marginTop: 0,
        marginLeft: 330,
        width: 20,
        height: 20, 
        backgroundColor: "purple",
    },
    badgem: {
        marginTop: 40,
        marginLeft: 330,
        width: 20,
        height: 20,
    },
    stretch: {
        width: 40,
        height: 40
    },
    stretch1: {
        width: 40,
        height: 40
    },
    stretch2: {
        width: 150,
        height: 70
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    TextItem: {
        marginTop: 120,
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#ffffff'
    },
    mb: {
        marginBottom: 15
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    container1: {
        
        marginTop:-75,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',

    },
    container: {
        flex: 1,
        backgroundColor: '#0e2f44'
    },
    contentWrap: {
        flex: 1,
        padding: 15,
        marginTop: 100,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 25,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    contentWraps: {
        flex: 1,
        marginTop: 10,
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 15,
        backgroundColor: '#fff'
    },
    buttonLoginWrap: {
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    checkBoxWrap: {
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
        alignItems: 'flex-start',
    },
    button: {
        marginTop: 10,
    },
    buttonLgn: {
        padding: 0,
        marginBottom: 5,
        marginTop: 20,

    },
    checkWrap: {
        marginTop: -11,
        marginLeft: 0,
        marginRight: 7,
        width: '60%',
        resizeMode: "contain"
    },
    buttonUye: {
        marginLeft: 1,
        marginRight: 10,
        width: '10%',
        resizeMode: "contain"
    },
    buttonIco: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    buttonLoginIcon: {
        marginTop:280,
        marginLeft: 20,
        marginRight: 20,
        width: 150,
        height:200,
        resizeMode: "contain"
    },
  
    buttonLoginIconsag: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    buttonLoginIconorta: {
        marginBottom: 5, 
        height: 140,
        width: 110, 
        resizeMode: "contain",
    },
    buttonLoginText: {
        flex: 1,
        paddingRight: 30,
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#ffffff'
    },
    imageContainers: {
        flex: 1,
        width: null,
        height: null,

    },
  
    title: {
        marginTop: 10,
        color: "#000000",
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        color: "#000000",
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'center',
    },
    emailSignUpWrap: {
        flex: 1,
        marginTop: 20,
        // height:50,
        marginLeft: 20,
        marginRight: 20,

    },
    inputGroup: {
        flex: 1,
        marginTop: 15
    },
    label: {
        color: '#999',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    note: {
        marginTop: 5,
        fontSize: 15,
        color: '#999'
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#ccc'
    },

    preferencesWrap: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    preferencesTitle: {
        color: '#777',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10
    },
    checkboxGroup: {
        flex: 1,
        marginTop: 10
    },
    checkboxLabel: {
        fontSize: 15
    },
    buttonJoin: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#222222',
        color: '#ffffff'
    },
    buttonRegister: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 45,
        borderWidth: 2,
        borderColor: '#bbbbbb'
    },
    sectionListViewStyle: {
        height: 5
    },
    itemListViewWrap: {
        marginTop: 25
    },
    itemListViewStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        color: '#000',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 55,
        backgroundColor: '#fff',
        borderWidth: 0.3,
        borderColor: '#eeeeee'
    },
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 8,
        marginBottom: 30
    },
    logo: {
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 50,
        top: Platform.OS === "android" ? 35 : 60,
        width: 280,
        height: 100
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    },
    Adwords: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    tarot:{
        marginVertical: Platform.OS === "android" ? 10: 20,
        width: 100,
        height: 130,
        resizeMode: "contain",
        alignSelf:'center',
        backgroundColor:'transparent',
        justifyContent:'center',
    },
   
    buttoniskambil: {
        marginTop: Platform.OS === "android" ? 6 : 70,
        marginLeft: Platform.OS === "android" ? 15 : 20,
        marginRight: 0,
        width: 90,
        height: 95,
        resizeMode: "contain",

    },
    buttonSu: {
        marginTop: Platform.OS === "android" ? -90 : -100,
        marginLeft: Platform.OS === "android" ? 300 : 280,
        marginRight: 0,
        width: 90,
        height: 100,
        resizeMode: "contain"
    },
    buttonRuya: {
        flex:1,
        marginVertical: Platform.OS === "android" ? '10%' : '13%',
        marginTop: 10,
        marginLeft: -26,
        marginRight: 20,
        width: 110,
        height: 115,
        resizeMode: "contain"
    },
    buttonKahve: {
        marginVertical: Platform.OS === "android" ? 0 : 0,
        marginTop: Platform.OS === "android" ? -50 : -40,
        marginLeft: 10,
        marginRight: 20,
        width: 100,
        height: 105,
        resizeMode: "contain"
    },
    buttonKatina: {
        marginVertical: Platform.OS === "android" ? 0 : 0,
        marginTop: Platform.OS === "android" ? '-40%' : '-50%',
        marginLeft: '80%',
        marginRight: 5,
        width: 110,
        height: 115,
    },
    buttonYildizName: {
        marginTop: Platform.OS === "android" ? 40 : '10%',
        marginLeft: 300,
        marginRight: 0,
        width: 90,
        height: 100,
        resizeMode: "contain"
    },

};

