import { StyleSheet } from "react-native";

export default StyleSheet.create({
    line: {
        height: 1,
        backgroundColor: '#000',
        opacity: 0.1,
        marginVertical: 35,
    },
    friend_container: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        alignItems: 'center'
    },
    name: {
        fontWeight: '500',
        fontSize: 14,
    },
    status: {
        fontWeight: '400',
        fontSize: 12,
    }
})