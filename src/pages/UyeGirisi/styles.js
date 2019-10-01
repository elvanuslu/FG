const React = require("react-native");

const { StyleSheet } = React;

const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    container1: {
        flex: 1,
        marginBottom:10,
    },
    container2: {
        flex: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
       
    },
    container3: {
        flex: 6,
        marginLeft:25,
        marginRight:25,
        // backgroundColor:'red',
    },
    container4: {
        flex: 1,
        alignItems: 'center',
       // backgroundColor: 'red',
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    btnContent: {
        marginLeft: 20,
        resizeMode: 'contain',
        width: 75,
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

        backgroundColor: '#fff',
        marginTop: Platform.OS === "android" ? 5 : 5,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
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
        alignSelf: 'center',
       // justifyContent: 'space-between',
        flexDirection: 'row',
    },
    checkBoxWrap: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 0,
        alignItems: 'flex-start',
    },
    button: {
        marginTop: 10,
    },
    buttonLgn: {
        padding: 0,
        marginBottom: 35,
        marginTop: 15,

    },
    checkWrap: {
        marginTop: 0,
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
    buttonLoginIcon: {
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 0,
        width: 250,
        resizeMode: "contain"
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

        flex: 1,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 5,

    },
    inputGroup: {

        marginTop: 30,
        marginLeft:10,
        marginRight:10,

    },
    label: {
        color: 'black',
       // fontWeight: 'bold',
        fontSize: 9,
        marginBottom: 10
    },
    note: {
        marginTop: 5,
        fontSize: 15,
        color: '#999'
    },
    textInput: {
        height: 35,
        fontSize: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius:1,
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
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
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

};

