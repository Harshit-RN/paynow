import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationProp} from '../../navigation/stack';

import {styles} from './styles';

const HomeScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Header showDrawerIcon={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
             <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../assets/images/dashboard/background.png')}
            style={styles.background}
            resizeMode='cover'>
            <View style={styles.initialContainer}>
              <Text style={styles.initialText}>Good Morning</Text>
              <Text style={styles.initialText}>Test Developer</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Payment transfer</Text>
            </TouchableOpacity>
          </ImageBackground>
          </View>
          <View style={styles.balanceCard}>
            <Text style={styles.cardTitle}>Your Balance</Text>

            <View style={styles.cardContent}>
              {/* Available Balance */}
              <View style={styles.cardItem}>
                <Image
                  source={require('../../assets/images/dashboard/groupleft.png')} // Your custom icon
                  style={styles.cardIcon}
                />
                <Text style={styles.cardLabel}>Available Balance</Text>
                <Text style={styles.cardAmount}>₪ 5,600</Text>
              </View>

              <View style={styles.cardDivider} />

              {/* Future Charges */}
              <View style={styles.cardItem}>
                <Image
                  source={require('../../assets/images/dashboard/groupright.png')} // Your custom icon
                  style={styles.cardIcon}
                />
                <Text style={styles.cardLabel}>Future Charges</Text>
                <Text style={styles.cardAmount}>₪ 0</Text>
              </View>
            </View>
          </View>
          <View style={styles.transactionSection}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <View style={styles.emptyItem}>
                <Image
                  source={require('../../assets/images/dashboard/empty.png')} // Your custom icon
                  style={styles.emptyIcon}
                />
              <Text style={styles.emptyTitle}>No payment have been made yet</Text>
              </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
