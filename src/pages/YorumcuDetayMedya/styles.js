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
        marginTop: 10,
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
        color: '#b7417e',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    labelGenelIstaistikler: {
        // color: '#999',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    labelFalciSiyah: {
        //color: '#b7417e',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },

    labelFalcinote: {
        color: '#454444',
        // fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 15,
        marginLeft: 30,
        marginTop: -32,
        fontFamily: 'Roboto-Light',
    },
    labelFalcinote2: {
        color: '#c05a8e',
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 12,
        marginLeft: 30,
        fontFamily: 'ROBOTO-REGULAR',
    },
    labelthin: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 9,
        marginBottom: 0,
        marginLeft: 90,
        marginTop: -80,
        fontFamily: 'Roboto-Light',
    },
    labelthin2: {
        color: 'white',
        // fontWeight: 'bold',
        fontSize: 9,
        marginBottom: 0,
        marginLeft: 5,
        marginTop: 0,
        fontFamily: 'Roboto-Light',
    },
    labelFiyat: {
        //  fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
    },
    labelAciklama: {
        color: '#8b8b8b',
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'Roboto-LightITALIC',
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
        //  fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 5,
        fontFamily: 'Roboto-Bold',
        marginLeft: -130,
    },
    imageContainer: {
        flex: 1,

        width: null,
        height: null
    },
    logoContainer: {
        alignSelf: 'center',
        width: null,
        height: null,
        flex: 1,
    },
    labelFalcibeyaz: {
        color: 'white',
        fontWeight: 'bold',
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