import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FamilyRoute from './family-route';
import InsertNewRoute from './insert-route';


// const renderScene = SceneMap({
//   family: FamilyRoute,
//   insertNew1: InsertNewRoute,
//   // insertNew2: InsertNewRoute,
//   // insertNew3: InsertNewRoute,
//   // more: InsertNewRoute
// });

const routes = [
    { key: 'family', title: 'Family' },
    { key: 'insertNew1', title: 'Insert New' },
    { key: 'insertNew2', title: 'Insert New' },
    { key: 'insertNew3', title: 'Insert New' },
    { key: 'more', title: 'More' },
]
const Tabbar = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  // const [routes] = useState();

  // const renderScene = ({ route }) => {
  //   console.log('Rendering Route:', route.key); // Debug log
  //   switch (route.key) {
  //     case 'family':
  //       return <FamilyRoute />;
  //     case 'insertNew1':
  //     case 'insertNew2':
  //     case 'insertNew3':
  //     case 'more':
  //       return <InsertNewRoute />;
  //     default:
  //       return null;
  //   }
  // };

  const renderScene = ({route}) => {
    console.log('index = ' + index + ' and key == '+ route.key)
    if(route.key == "family" && index == 0) {
      return <FamilyRoute />
    }
    else if(route.key == "insertNew1" && index == 1) {
      return <InsertNewRoute />
    }
    else if(route.key == "insertNew2" && index == 2) {
      return <InsertNewRoute />
    }
    else if(route.key == "insertNew3" && index == 3) {
      return <InsertNewRoute />
    }
    else if(route.key == "more" && index == 4) {
      return <InsertNewRoute />
    }
  }

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      tabStyle={{ width: 90 }}
      activeColor="#7C001F"
      inactiveColor="#332F2F"
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      scrollEnabled
      renderLabel={({ route, focused }) => (
        <View style={styles.tabLabelContainer}>
          <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
            {route.title}
          </Text>
        </View>
      )}
    />
  );

  return (
    <TabView
      swipeEnabled={false}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      lazy={true}
    />
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#B71C1C',
    height: 3,
  },
  tabLabelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  tabLabel: {
    color: '#332F2F',
  },
  tabLabelFocused: {
    color: '#B71C1C',
  },
});
