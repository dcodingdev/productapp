
// import { useContext } from "react";
import { useContext } from "react-native";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";

``
import { Context } from "../../context";
import ProductListItem from "../../components/productListItem";
import { useNavigation } from "@react-navigation/native";




// function createRandomColor() {
//     let letters = "0123456789ABCDEF"
//     let color = "#"

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }


// }
function createRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

const navigation= useNavigation()

export default function ProductListing() {
  
    const { loading, products } = useContext(Context);
  
    if (loading) {
      return <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />;
    }

    const handleOnPress =()=>{
      navigation.navigate('productDetails')

    }; 
  
    return (
      <View>
        <FlatList
          data={products}
          renderItem={(itemData) => (
            <ProductListItem title={itemData.item.title} bgColor={createRandomColor()}
            onPress ={handleOnPress}
            /> 
          )}
          keyExtractor={(itemData) => itemData.id.toString()} 
          numColumns={2}
        />
        <Text>ProductListing</Text>
      </View>
    );
  }
  

// export default function ProductListing() {
//     const { loading, products } = useContext(Context)

//     if (loading) {
//         return <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />
//     }

//     return (
//         <View>
//             <FlatList
//                 data={products}
//                 renderItem={(itemData) => (
//                     <ProductListItem title={itemData.item.title} bgColor={createRandomColor} />
//                 )}
//                 keyExtractor={(itemData) => itemData.id}
//                 numColumns={2} />
//             <Text>ProductListing</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    loader: {
        flex: 1,
    }

})