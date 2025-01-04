import { StyleSheet, Text, View } from "react-native";
import ProfileSelector from "./profile-selector";

function FamilyRoute (){
    return(
        <View style={styles.scene}>
            {/* <Text>Family Route</Text> */}
            <ProfileSelector />
        </View>
    )
}
export default FamilyRoute;
const styles = StyleSheet.create({
    scene: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})


