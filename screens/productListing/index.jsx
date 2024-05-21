
import { useContext } from "react";
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";

// import { Context } from "../../context";
import { Context } from "../../context"; // Assuming the path is correct

import ProductListItem from "../../components/productListItem";




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
    return color; // Added return statement
}



export default function ProductListing() {
    const { loading, products } = useContext(Context);
  
    if (loading) {
      return <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />;
    }
  
    return (
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => ( // Destructured item from itemData
            <ProductListItem title={item.title} bgColor={createRandomColor()} /> // Called function with parentheses
          )}
          keyExtractor={(item) => item.id.toString()} // Corrected keyExtractor and converted id to string
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