import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { outcomes } from '../../../data/fake-data';
import CircularProgress from '../../../components/circular-progress';

const renderItem = (item: any) => {
    return(
        <View style={[styles.outcomeContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}> 
            <Text style={styles.outcomeText}>{item.text}</Text>
            <View style={{ flexDirection: 'row' }}> 
                <Image style={styles.imageStyle} source={require('../../../../assets/Checkbox.png')} />
                <Image style={styles.imageStyle} source={require('../../../../assets/video-circle.png')} /> 
            </View> 
        </View>
    )
}
const StageOutcomes = () => {
    const [showFlatList, setShowFlatList] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;
    const toggleFlatList = () => {
        setShowFlatList(!showFlatList);
        Animated.timing(heightAnim, {
          toValue: showFlatList ? 0 : 300,
          duration: 300,
          useNativeDriver: false,
        }).start();
    };
    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <CircularProgress
                    size={64}
                    width={8}
                    completed={4}
                    total={12}
                    tintColor="white"
                    backgroundColor="#7C001F"
                    textStyle={{ color: 'darkgray', fontSize: 12 }}
                />
                <View style={styles.progressText}>
                    <Text style={styles.headerText}>LEARN TO SWIM STAGE 1 OUTCOMES</Text>
                    <Text style={styles.subHeaderText}>You are 25% better than other members</Text>
                </View>
            </View>
            <Animated.View style={{ height: heightAnim }}>
            {showFlatList && (
                <View>
                    <View style={styles.stageContainer}>
                            <Text style={styles.stageText}>LEARN TO SWIM STAGE 1 OUTCOMES</Text>
                            <Image style={{alignSelf: 'flex-start'}} source={require('../../../../assets/video-circle.png')} />
                    </View>
                    <View style={styles.flatListContainer}>
                    
                    <FlatList
                            nestedScrollEnabled={true}
                            data={outcomes}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => renderItem(item)}
                    />
                    </View>
                </View>
                )}
            </Animated.View>
            <TouchableOpacity onPress={toggleFlatList} style={styles.arrowButton}>
                <AntDesign name={showFlatList ? "up" : "down"} size={12} color="gray" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 15,
    color: '#4F5466',
  },
  subHeaderText: {
    fontSize: 12,
    color: '#4F5466',
  },
  stageContainer : {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stageText : {
    width: '90%',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#4F5466',
  },
  progressText: {
    marginLeft: 30,
    marginTop: 10,
  },
  outcomeContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  outcomeText: {
    fontSize: 12,
    width: '80%',
    color: '#4F5466',
  },
  imageStyle : {
    marginLeft: 10,
  },
  flatListContainer: {
    height: 250,
  },
  arrowButton: {
    alignItems: 'center',
  },
});

export default StageOutcomes;
``