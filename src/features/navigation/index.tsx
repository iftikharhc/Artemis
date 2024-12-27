import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from "../home/home";
import Professional from "../professional";
import { NavigationContainer } from "@react-navigation/native";
import Family from "../family/containers";
import Inbox from "../inbox";
import Careers from "../careers";
import { SafeAreaView } from "react-native-safe-area-context";
function BottomTabs(){
    const Tab = createBottomTabNavigator();
    return(
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>ARTEMIS</Text>
                <Image
                source={require('../../../assets/profile.png')}
                style={styles.headerImage}
                />
            </View>
            <Tab.Navigator
                id={undefined}
                initialRouteName="Family"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#7C001F',
                    tabBarInactiveTintColor: '#888',
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconSource;
                      // Define icons for each tab
                      if (route.name === 'Home') {
                        iconSource = require('../../../assets/House_02.png')
                      } else if (route.name === 'Professional') {
                        iconSource = require('../../../assets/professional.png')
                      } else if (route.name === 'Family') {
                        iconSource = require('../../../assets/family.png');
                      } else if (route.name === 'Inbox') {
                        iconSource = require('../../../assets/inbox.png')
                      } else if (route.name === 'Careers') {
                        iconSource = require('../../../assets/careers.png')
                      }
          
                      return (
                        <Image
                          source={iconSource}
                          style={{ width: size, height: size, tintColor: color }}
                        />
                      );
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Professional" component={Professional} />
                <Tab.Screen name="Family" component={Family} />
                <Tab.Screen name="Inbox" component={Inbox} />
                <Tab.Screen name="Careers" component={Careers} />
            </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    )
}

export default BottomTabs;

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f8f9fa', // Optional background color
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
    headerTitle: {
      fontFamily: 'Nunito Sans',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7C001F',
    },
    headerImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
    },
  });
  



