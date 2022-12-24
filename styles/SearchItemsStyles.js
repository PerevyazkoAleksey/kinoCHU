import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginLeft: 20,
        width:'100%',
    },
    card_container: {
        alignItems: 'left', 
        marginBottom: 20,
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    card_content_container: {
        width: '50%',
        marginLeft: 10,
    },
    card_content: {
        textAlign: 'left',
        marginTop: 10,
    },
    favorite: {
        marginLeft: '10%', 
        marginTop: 20,
    },
})