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

const transactions = [
  {
    id: '1',
    amount: '₪388',
    name: 'FOX',
    date: '15.3.2023',
    installments: '1/4',
    logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '2',
    amount: '₪300',
    name: 'GOLAN',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '3',
    amount: '₪499',
    name: 'Nature Castel',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '4',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '5',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '6',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '7',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '8',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
  {
    id: '9',
    amount: '₪450',
    name: 'SuperPharm',
    date: '15.3.2023',
    installments: '1/4',
     logo: require('../../assets/images/registerUserId/group25.png'),
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const renderItem = ({item}: {item: (typeof transactions)[0]}) => (
    <View style={styles.transactionItem}>
      <Text style={styles.amount}>{item.amount}</Text>
      <View style={styles.details}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.meta}>
          {item.installments} | {item.date}
        </Text>
      </View>
      <Image source={item.logo} style={styles.logo} />
    </View>
  );

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
                <Text style={styles.cardAmount}>₪ 3,688</Text>
              </View>
            </View>
          </View>
          <View style={styles.transactionSection}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <FlatList
              data={transactions}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              scrollEnabled={false} // Since it's inside ScrollView
              removeClippedSubviews={false}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default DashboardScreen;
