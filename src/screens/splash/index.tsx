import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {color} from '../../constant/color';
import ProgressBar from './components/progressbar';
import {Text} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';
// import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setAppData} from '../../redux/slice/splash';
import {styles} from './styles';



const SplashScreen = () => {
  const animationRef = useRef(null);
  const navigation = useNavigation<RootNavigationProp>();
  const dispatch = useDispatch();

  const [progressBarValue, setProgressBarValue] = useState(0);
  const LABEL_VERSION_NUMBER = 'גרסה';
  const CREATED_BY = 'Created by inManage';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.post(
  //         'http://161.35.153.183/api/v1/initializeApp',
  //       );
  //       // console.log('res =====>', res.data);

  //       dispatch(setAppData(res.data));
  //     } catch (error) {
  //       console.error('API error:', error);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBarValue(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigation.navigate('Tutorial');
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={color.secondary} barStyle='light-content' />
      <LottieView
        ref={animationRef}
        source={require('../../assets/animations/pcs_splash.json')}
        loop
        autoPlay
        resizeMode='cover'
        style={styles.animation}
      />

      <View style={styles.footer}>
        <ProgressBar progress={progressBarValue} />
        <View style={styles.creditsContainer}>
          <Text style={styles.credits}>{CREATED_BY}</Text>

          <Text style={styles.version}>{LABEL_VERSION_NUMBER}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
