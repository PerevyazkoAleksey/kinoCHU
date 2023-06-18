import { StyleSheet } from "react-native";

export default StyleSheet.create({
    profile: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    profile_info: {
        marginLeft: 15,
    },
    name: {
        fontWeight: '700',
        fontSize: 24,
    },
    progress: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: 'row',
        borderColor : '#E7E7E7',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        marginVertical: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 7,
    },
    statistic: {
        paddingVertical: 20,
        paddingHorizontal: 48,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    rank: {
        alignItems: 'center',
    },
    film_stat: {
        alignItems: 'center',
    }
})