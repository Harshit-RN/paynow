import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../../navigation/stack';
import { styles } from './styles';
import Header from '../../components/header';

const tutorialSlides = [
  {
    buttonText: 'בואו נתחיל!',
    image: 'https://pcs.diego300.co.il/_media/media/37/693.png?t=1629359363',
    orderNum: '3',
  },
  {
    buttonText: 'הבא',
    image: 'https://pcs.diego300.co.il/_media/media/37/692.png?t=1629359348',
    orderNum: '2',
  },
  {
    buttonText: 'הבא',
    image: 'https://pcs.diego300.co.il/_media/media/37/691.png?t=1629359332',
    orderNum: '1',
  },
];

const sortedSlides = [...tutorialSlides].sort(
  (a, b) => Number(a.orderNum) - Number(b.orderNum)
);

const TutorialScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide === sortedSlides.length - 1) {
      navigation.navigate('Disconnect');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    navigation.navigate('Disconnect');
  };


  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <Header />
      <ImageBackground
        source={{ uri: sortedSlides[currentSlide].image }}
        style={styles.slide}
        resizeMode="cover"
      >
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {sortedSlides[currentSlide].buttonText}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skip} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default TutorialScreen;
