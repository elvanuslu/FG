const React = require("react-native");
const { Platform } = React;

export default {

    imageContainer: {
        flex: 1,
        width: null,
        height: null
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
    container: {
        flex: 1,
        // backgroundColor: 'transparent'
    },
    container1: {
        flex: 1,
      //   backgroundColor:'red',
    },
    container2: {
        flex: 6,
      //  justifyContent: 'center',
        alignItems: 'center',
      //   backgroundColor:'yellow'
    },
    container3: {
        flex: 6,
       // backgroundColor: 'lightblue'
    },
    ustContetn:{
     flexDirection:'row',
      marginTop: Platform.OS === "android" ? 2 : 5,
    },
    buttonContent: {
        marginBottom: Platform.OS === "android" ? 1 : 0,
        marginTop: Platform.OS === "android" ? 0 : 0,
    },
   
    contentWrap: {
        //  marginTop: Platform.OS === "android" ? '82%' : '120%',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 5,
        marginTop: 5,
        //   height:78,
        //  backgroundColor: 'red',
        flexDirection: 'column',
        resizeMode: 'contain',
        alignSelf: 'center',
        zIndex: 10,
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
        flex: 20,
        marginTop: Platform.OS === "android" ? -20 : '50%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'column',
        marginLeft: 30,
        //marginRight: 5,
        width: '100%',
        resizeMode: "contain",


    },
    checkBoxWrap: {
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        marginTop: 10,
    },
    buttonLgn: {
        marginTop: Platform.OS === "android" ? 20 : -70,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,

    },
    checkWrap: {
        marginTop: -15,
        marginLeft: 15,
        marginRight: 7,
        width: '90%',
        resizeMode: "contain"
    },
    buttonUye: {
        marginLeft: 1,
        marginRight: 10,
        width: '10%',
        resizeMode: "contain"
    },
    buttonLoginIcon: {
        alignSelf: 'center',
        width: 280,
        height: 50,
        resizeMode: "contain",
        marginBottom: Platform.OS === "android" ? 5 : 10,
        marginLeft: 0,
        marginRight: 0,

    },
    buttonLoginText: {
        flex: 1,
        paddingRight: 30,
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#ffffff'
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
        // flex: 1,
        marginTop: 10
    },
    inputGroup: {
        flex: 1,
        marginTop: 30
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
    mb: {
        backgroundColor: 'transparent',
        marginTop: 100,
        marginBottom: 15
    }
};

