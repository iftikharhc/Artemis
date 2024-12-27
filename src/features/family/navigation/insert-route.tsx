import { StyleSheet, Text, View } from "react-native";

function InsertNewRoute (){
    return(
        <View style={styles.scene}>
            <Text>Insert New Screen</Text>
        </View>
    )
}
export default InsertNewRoute;
const styles = StyleSheet.create({
    scene: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
})