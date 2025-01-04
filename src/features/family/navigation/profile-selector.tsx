import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import CoachProfileCard from '../components/coach';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StageOutcomes from '../components/stage-outcomes';
import { useSelector } from 'react-redux';
import { fakeImages } from '../../../data/fake-data';

interface Profile {
  _id: number;
  name: string;
  specialization: string;
  image: string;
}


const ProfileSelector = () => {
  const images = fakeImages;
  const [profiles , setProfiles ] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState<Profile>();
  const scrollViewRef = useRef<ScrollView>(null);

  const { data = [], error, isLoading } = useSelector((state: any) =>  state.family )  

  useEffect(()=> {
    if (Array.isArray(data)) {
      setProfiles(data);
      setSelectedProfile(data[0]);
    } else {
      setProfiles([]); // Fallback to an empty array
    }
  }, [data])

  const handleProfileSelect = (profile: Profile, index: number) => {
    setSelectedProfile(profile);

    const offset = index * 80 - 150; // Adjust the offset to center the profile
    scrollViewRef.current?.scrollTo({ x: offset, animated: true });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>All members details are available here</Text>
        <View style={styles.profilesContainer}>
          <ScrollView
            horizontal
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
          >
            {profiles && profiles?.map((profile, index) => (
              <TouchableOpacity
                key={profile?._id}
                style={styles.profileWrapper}
                onPress={() => handleProfileSelect(profile, index)}
              >
                <View
                  style={[
                    styles.profileImageWrapper,
                    profile?._id === selectedProfile?._id && styles.selectedProfile,
                  ]}
                >
                  <Image
                    source={images[profile.name]}
                    style={
                      profile?._id === selectedProfile?._id
                        ? styles.selectedProfileImage
                        : styles.profileImage
                    }
                  />
                  {profile?._id === selectedProfile?._id && (
                    <View style={styles.checkmarkContainer}>
                      <Icon name="check" size={12} color="white" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{selectedProfile?.name}</Text>
          <Text style={styles.description}>{selectedProfile?.specialization}</Text>
          <StageOutcomes />
          <CoachProfileCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#FFEBEB', // Bottom color
    opacity: 1,
  },
  headerText: {
    color: '#6E6969',
    fontFamily: 'Manrope',
    paddingVertical: 12,
    marginVertical: 16
  },
  profilesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  profileWrapper: {
    marginHorizontal: 8, // Reduced margin for closer profiles
  },
  profileImageWrapper: {
    position: 'relative',
    borderRadius: 50,
  },
  selectedProfile: {
    
  },
  profileImage: {
    width: 60,
    height: 60,
  },
  selectedProfileImage: {
    width: 70, // Larger size for selected profile
    height: 70,
  },
  checkmarkContainer: {
    position: 'absolute',
    bottom: -0.2, // Floating at the bottom
    alignSelf: 'center',
    backgroundColor: '#7C001F',
    borderRadius: 50,
    padding: 2,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
