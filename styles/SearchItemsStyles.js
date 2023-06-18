import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    card_content: {
        width: '48%', 
        margin: '1%', 
        aspectRatio: 2,
    },
})