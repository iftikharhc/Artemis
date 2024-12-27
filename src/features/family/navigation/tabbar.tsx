import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import FamilyRoute from './family-route';
import InsertNewRoute from './insert-route';
import { tabbbarData } from '../../../data/fake-data';

const renderScene = SceneMap({
  family: FamilyRoute,
  insertNew1: InsertNewRoute,
  insertNew2: InsertNewRoute,
  insertNew3: InsertNewRoute,
  more: InsertNewRoute,
});

const Tabbar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(tabbbarData);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      tabStyle={{width: 90}}
      activeColor='#7C001F'
      inactiveColor='#332F2F'
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      scrollEnabled={true}  // Enable horizontal scrolling
      renderLabel={({ route, focused }) => (
        <View style={styles.tabLabelContainer}>
          <Text style={[styles.tabLabel, focused ? styles.tabLabelFocused : null]}>
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
      initialLayout={{ width: 400 }}
      renderTabBar={renderTabBar}
    />
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  indicator: {
    backgroundColor: '#B71C1C', // Dark red color for the indicator
    height: 3,
  },
  tabLabelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // To position the badge
    width: 100,  // Set width of each tab to 100
  },
  tabLabel: {
    
  },
  tabLabelFocused: {
    color: '#B71C1C', // Dark red for the active tab
  },
});



