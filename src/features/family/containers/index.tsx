import { StyleSheet, Text, View } from "react-native";
import Tabbar from "../navigation/tabbar";

function Family(){
    return(
        <View style={styles.container}>
            <Tabbar/>
        </View>
    )
}
export default Family;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})