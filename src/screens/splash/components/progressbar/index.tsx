import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { px } from '../../../../utils/dimension';
import { color } from '../../../../constant/color';




interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animated.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            width,
            backgroundColor: color.white,
            borderRadius: px(5),
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    height: px(7),
    backgroundColor: '#333', 
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: px(30),
    overflow: 'hidden',
    
  },
});
