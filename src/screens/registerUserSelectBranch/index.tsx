import {
    FlatList,
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

import {px} from '../../utils/dimension';
import {styles} from './styles';
import CenterTextField from '../../components/centerTextfield';

const RegisterUserSelectBranchScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [branchDetails, setBranchDetails] = useState('');
 const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const handleNext = () => {
    navigation.navigate('RegisterUserAccountNumber');
  };

  const branches = [
    {id: '123', name: 'Central Branch', address: 'Main St, Tel Aviv 123'},
    {id: '124', name: 'North Branch', address: 'Elm St, Tel Aviv 456'},
    {id: '125', name: 'South Branch', address: 'Oak St, Tel Aviv 789'},
    {id: '126', name: 'East Branch', address: 'Pine St, Tel Aviv 321'},
    {id: '127', name: 'West Branch', address: 'Cedar St, Tel Aviv 654'},
  ];

  const renderItem = ({item}: {item: (typeof branches)[0]}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={handleNext}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.branchName}>{item.name}</Text>
        <Text style={styles.branchAddress}>{item.address}</Text>
      </View>
      <View style={styles.idContainer}>
      <Text style={styles.branchId}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
          <Header
            showForwardIcon={true}
            onPressForward={() => navigation.goBack()}
            title="Enrollment"
          />
          <View style={styles.form}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Branch Screen Title</Text>
              <Text style={styles.subtitle}>Branch Screen Subtitle</Text>
            </View>
            <View style={{marginTop: px(100)}}>
              <CenterTextField
                label="Enter Branch Name"
                value={branchDetails}
                onChangeText={setBranchDetails}
                keyboardType={'default'}
                maxLength={10}
              />
            </View>
            <FlatList
              data={branches}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              contentContainerStyle={{paddingBottom: 20}}
              removeClippedSubviews={false}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterUserSelectBranchScreen;
