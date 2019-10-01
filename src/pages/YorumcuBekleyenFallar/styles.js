const React = require("react-native");

const { StyleSheet } = React;

const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    container1: {
        marginTop: 0,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',

    },
    mb: {
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 5,
    },
    mb1: {
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 5,
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    buttonIco: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    buttonLoginIconorta: {
        marginBottom: 20,
        height: 90,
        width: 150,
        resizeMode: "contain",
    },
    labelFalci: {
        color: 'black',

        fontSize: 14,
        marginBottom: 0,
        marginTop: 10,
        fontFamily: 'Fondamento-Regular',
    },
    labelFalci2: {
        color: 'black',
        fontSize: 10,
        marginBottom: 0,
        marginTop: 10,
        marginLeft: 5,
        fontFamily: 'Fondamento-Regular',
    },
    labelGenelIstaistikler: {
        // color: '#999',
        fontSize: 20,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    labelFalciSiyah: {
        //color: '#b7417e',

        fontSize: 18,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },

    labelFalcinote: {
        color: '#454444',

        fontSize: 12,
        marginBottom: 15,
        marginLeft: 10,
        marginTop: 5,
        fontFamily: 'Roboto-Light',
    },
    labelFalcinote2: {
        color: '#b8437f',
        fontSize: 10,
        marginBottom: 12,
        marginLeft: 170,
        marginRight: 5,
        fontFamily: 'Roboto-Regular',
    },
    labelthin: {
        color: 'white',

        fontSize: 9,
        marginBottom: 0,
        marginLeft: 90,
        marginTop: -80,
        fontFamily: 'Roboto-Light',
    },
    labelthin2: {
        color: 'white',

        fontSize: 9,
        marginBottom: 0,
        marginLeft: 5,
        marginTop: 0,
        fontFamily: 'Roboto-Light',
    },
    labelthin3: {
        color: '#999',

        fontSize: 10,
        marginBottom: 0,
        marginLeft: 0,
        marginTop: 0,
        fontFamily: 'Roboto-Lightitalic',
    },
    labelthin4: {
        color: 'white',

        fontSize: 9,
        marginBottom: 0,
        marginLeft: 5,
        marginTop: 0,
        fontFamily: 'Roboto-Light',
    },
    labelFiyat: {

        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
    },
    labelAciklama: {
        color: '#8b8b8b',
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'Roboto-Lightitalic',
        marginLeft: 10,
    },
    labelAciklama2: {
        color: '#605f5f',
        fontSize: 14,
        marginBottom: 8,
        fontFamily: 'Roboto-Light',
        marginLeft: 10,
    },
    labelFiyat2: {

        fontSize: 13,
        marginBottom: 5,
        fontFamily: 'Roboto-Bold',
        marginLeft: -130,
    },
    imageContainer: {
        flex: 1,

        width: null,
        height: null,
        resizeMode: 'contain',
    },
    imageContainer2: {
        alignContent: 'center',
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: -10,
    },
    imageContainer3: {
        alignContent: 'center',
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    labelDakika: {
        fontFamily: 'Roboto-Medium',
        fontSize: 10,
        color: '#b8437f',
        marginLeft: 20,
        marginTop: 13,
    },
    labelDakika1: {
        fontFamily: 'Roboto-Medium',
        fontSize: 9,
        color: '#b8437f',
        marginLeft: 19,
        marginTop: -2,
    },
    labelDakika2: {
        fontFamily: 'Roboto-Medium',
        fontSize: 9,
        // color: '#b8437f',
        marginLeft: 11,
        marginTop: 5,
    },
    labelDakika3: {
        fontFamily: 'Roboto-Medium',
        fontSize: 8,
        //  color: '#b8437f',
        marginLeft: 13,
        marginTop: -2,
    },
    logoContainer: {
        alignSelf: 'center',
        width: null,
        height: null,
        flex: 1,
    },
    labelFalcibeyaz: {
        color: 'white',
        fontSize: 22,
        marginBottom: 0,
        fontFamily: 'Fondamento-Regular',
        marginLeft: 90,
        marginTop: 0,

    },
    labelFalcibeyazthin: {
        color: 'white',
        fontSize: 12,
        marginBottom: 0,
        fontFamily: 'Fondamento-Regular',
        marginLeft: 90,
        marginTop: -10,
    },
    labelFalcibeyazthin2: {
        color: 'white',
        fontSize: 12,
        marginBottom: 0,
        fontFamily: 'Fondamento-Regular',
        marginLeft: 190,
        marginTop: -18,
    },
}