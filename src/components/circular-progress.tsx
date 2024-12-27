import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface CircularProgressProps {
  size: number;
  width: number;
  completed: number;
  total: number;
  tintColor?: string;
  backgroundColor?: string;
  textStyle?: object;
}

const CircularProgress:React.FC<CircularProgressProps> = ({
  size,
  width,
  completed,
  total,
  tintColor = '#3498db',
  backgroundColor = '#ecf0f1',
  textStyle = {},
}) => {
  const fillPercentage = (completed / total) * 100;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={size}
        width={width}
        fill={fillPercentage}
        tintColor={tintColor}
        backgroundColor={backgroundColor}
      >
        {() => (
          <View style={styles.container}>
            <Text style={[styles.progressText, textStyle]}>
              {`${completed} of ${total}`}
            </Text>
            <Text style={styles.subText}>Completed</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  subText: {
    fontSize: 8,
    color: 'gray',
  }
});

export default CircularProgress;
