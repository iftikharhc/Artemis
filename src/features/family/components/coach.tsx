import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Divider from '../../../components/divider';
// import { Surface } from 'react-native-paper';

interface CoachProfile {
  name: string;
  title: string;
  yearsOfExperience: number;
  qualification: string;
  email: string;
  academy: string;
  profileImage: string;
  description: string,
}

const coachData: CoachProfile = {
  name: 'Leslie Alexander',
  title: 'Head of Swimming',
  yearsOfExperience: 8,
  qualification: 'Level 2 Swimming Teacher',
  email: 'lesliealexander@trojan.com',
  academy: 'Trojan Sports Academy',
  profileImage: 'https://via.placeholder.com/60', // Replace with actual image URL
  description: 'A dedicated swimming coach who recently joined Trojan Sports academy from 2022-23 season1. She primarily assists the Vampire Squid and other LHS groups1. Leslie began her competitive swimming journey in Florida and swam varsity in high school.'
};

const CoachProfileCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>COACH</Text>
      <Divider style={styles.divider}/>
      <View style={styles.profileContainer}>
        <Image source={require('../../../../assets/User.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{coachData.name}</Text>
          <Text style={styles.title}>{coachData.title}</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Image
            source={require('../../../../assets/Chat_Circle_Dots.png')}
            style={styles.chatIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Years Of Experience</Text>
        <Text style={styles.detailValue}>{coachData.yearsOfExperience}</Text>
        <Divider style={styles.divider}/>

        <Text style={styles.detailLabel}>Qualification</Text>
        <Text style={styles.detailValue}>{coachData.qualification}</Text>
        <Divider style={styles.divider}/>

        <Text style={styles.detailLabel}>Email</Text>
        <Text style={styles.detailValue}>{coachData.email}</Text>
        <Divider style={styles.divider}/>

        <Text style={styles.detailLabel}>Academy</Text>
        <Text style={styles.detailValue}>{coachData.academy}</Text>
        <Divider style={styles.divider}/>

        <Text style={styles.detailLabel}>{coachData.description}</Text>

      </View>
    </View>
  );
};

export default CoachProfileCard;

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 12,
    color: '#6B7280', // Gray
    fontWeight: '600',
    marginBottom: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151', // Darker Gray
  },
  title: {
    fontSize: 14,
    color: '#909090',

  },
  chatButton: {
    padding: 8,
    borderRadius: 30,
    backgroundColor: '#F3F4F6', // Light Gray
  },
  chatIcon: {
    width: 24,
    height: 24,
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailLabel: {
    fontSize: 12,
    color: '#9CA3AF', // Lighter Gray
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  divider: {
    marginBottom: 16,
  }
});
