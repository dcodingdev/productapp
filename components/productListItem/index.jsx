
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from 'react-native';



export default function ProductListItem(title, onPress, bgColor) {

    return (
        <View style={styles.productItemOuterContainer}>
            <Pressable style={{...styles.pressableView, backgroundColor:bgColor}}>
                <View style={styles.productItemOuterContainer}>
                    <Text style={styles.title} />
                    {title}
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create()({
    productItemOuterContainer: {
        flex: 1,
        margin: 16,
        height: 160,
        borderRadius: 8

    },
    pressableView: {
        flex: 1,

    },
    productItemInnerContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontweight: 'bold',
        fontSize: 20,
        color: '#000000',

    }

})
