import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginLeft: 20, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        width:'100%',
    },
    card_container: {
        width: '50%', 
        height: 300,
        alignItems: 'left', 
        marginBottom: 20,
    },
    card_title: {
      marginTop: 9,
      fontWeight: '500',
      fontSize: 14,
      width: '50%',
    },
    card_content: {
        fontWeight: '400',
        fontSize: 11,
        width: '80%', 
        textAlign: 'left', 
        marginTop: 10,
    },
    redRating: {
        width: 35,
        height: 35,
        position: 'absolute',
        zIndex: 1,
        left: 5,
        top: '2%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      },
      orangeRating: {
        width: 35,
        height: 35,
        position: 'absolute',
        zIndex: 1,
        left: 5,
        top: '2%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      },
      greenRating: {
        width: 35,
        height: 35,
        position: 'absolute',
        zIndex: 1,
        left: 5,
        top: '2%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      },
      rating_text: {
        color: '#fff',
      }
})