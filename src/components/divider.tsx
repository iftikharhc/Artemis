import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface DividerProps {
  color?: string; 
  thickness?: number; 
  style?: StyleProp<ViewStyle>; 
}

const Divider: React.FC<DividerProps> = ({ color = '#E0E0E0', thickness = 0.4, style }) => {
  return <View style={[styles.divider, { backgroundColor: color, height: thickness }, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
  },
});

export default Divider;
