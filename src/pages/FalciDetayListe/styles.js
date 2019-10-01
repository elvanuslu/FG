const React = require("react-native");

const { StyleSheet } = React;

export default {
    container: {
        backgroundColor: "#E8E5E5",
    },
    text: {
        alignSelf: "center",
        marginBottom: 7
    },
    mb: {
        marginBottom: 15,
        marginLeft:15,
        marginRight:15,
    }, 
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    container1: {
        marginTop: 0,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',

    },
    buttonIco: {
        marginTop: 10,
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
       // color: '#999',
        fontSize: 12,
        marginBottom: 12,
        fontFamily: 'Fondamento-Regular',
    },
    label: {
        color: '#999',
      //  fontWeight: 'bold',
      marginTop:10,
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'Roboto-Light',
    },
    labelthin: {
        color: '#999',
        //  fontWeight: 'bold',
        fontSize: 8,
        marginBottom: 8,
        fontFamily: 'Roboto-Light',
        marginLeft:0,
    },
    labelFiyat: {
        //  fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Roboto-Bold',
        marginLeft: 10,
    },
    labelFiyat2: {
        //  fontWeight: 'bold',
        fontSize: 8,
        marginBottom: 6,
        fontFamily: 'Roboto-Bold',
        marginLeft: 1,
    },
    
};
