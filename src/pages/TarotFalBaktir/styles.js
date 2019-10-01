const React = require("react-native");

const { StyleSheet } = React;

const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    labelFalcinote: {
        color: '#454444',
        // fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 12,
        marginLeft:5,
        fontFamily: 'Roboto-Light',
    },
    container: {
        //flex: 1,
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
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    buttonIco: {
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
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
    labelFalci: {
        color: '#b7417e',

        fontSize: 18,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    labelFalciSiyah: {
        //color: '#b7417e',

        fontSize: 18,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    falNote: {
        color: 'yellow',
        fontSize: 10,
        
        fontFamily: 'Roboto-Light',
    },
    labelFalcinote2: {
        //color: '#454444',
 
        fontSize: 12,
        marginBottom: 12,
        marginLeft: 30,
        fontFamily: 'Roboto-Light',
    },
    labelthin: {
        color: '#b7417e',
   
        fontSize: 9,
        marginBottom: 0,
        marginLeft: 0,
        fontFamily: 'Roboto-Light',
    },
    imageContainer: {
        flex: 1,

        width: null,
        height: null
    },
    labelFalcibeyaz: {
        color: 'white',
 
        fontSize: 16,
        marginBottom: 0,
        fontFamily: 'Fondamento-Regular',
        marginLeft: 75,
        marginTop: 15,

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