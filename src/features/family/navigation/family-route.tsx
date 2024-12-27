import { StyleSheet, View } from "react-native";
import ProfileSelector from "./profile-selector";

function FamilyRoute (){
    return(
        <View style={styles.scene}>
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


