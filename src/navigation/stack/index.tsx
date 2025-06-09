import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import SplashScreen from '../../screens/splash';
import TutorialScreen from '../../screens/tutorial';

import DisconnectScreen from '../../screens/disconnect';
import LoginScreen from '../../screens/login';
import RegisterUserNameScreen from '../../screens/registerUserName';
import RegisterUserNumberScreen from '../../screens/registerUserNumber';
import RegisterUserOtpScreen from '../../screens/registerUserOtp';
import RegisterUserIdScreen from '../../screens/registerUserId';
import RegisterUserGenderScreen from '../../screens/registerUserGender';
import RegisterUserBirthdayScreen from '../../screens/registerUserBirthday';
import RegisterUserSelectBankScreen from '../../screens/registerUserSelectBank';
import RegisterUserSelectBranchScreen from '../../screens/registerUserSelectBranch';
import RegisterUserAccountNumberScreen from '../../screens/registerUserAccountNumber';
import RegisterUserAccountHolderScreen from '../../screens/registerUserAccountHolder';
import RegisterUserApprovalScreen from '../../screens/registerUserApproval';
import RegisterUserAgreementScreen from '../../screens/registerUserAgreement';
import RegisterUserDescriptionScreen from '../../screens/registerUserDescription';
import RegisterUserPaymentScreen from '../../screens/registerUserPayment';
import DashboardScreen from '../../screens/dashboard';
import HomeScreen from '../../screens/home';
import RegisterBusinessNameScreen from '../../screens/registerBusinessName';
import RegisterBusinessIdScreen from '../../screens/registerBusinessId';
import RegisterBusinessNumberScreen from '../../screens/registerBusinessNumber';
import RegisterBusinessOtpScreen from '../../screens/registerBusinessOtp';
import RegisterBusinessEmailScreen from '../../screens/registerBusinessEmail';
import RegisterBusinessContactScreen from '../../screens/registerBusinessContact';







const Stack = createNativeStackNavigator();
export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Disconnect" component={DisconnectScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="RegisterUserName"
        component={RegisterUserNameScreen}
      />
      <Stack.Screen
        name="RegisterUserNumber"
        component={RegisterUserNumberScreen}
      />
      <Stack.Screen name="RegisterUserOtp" component={RegisterUserOtpScreen} />
      <Stack.Screen name="RegisterUserId" component={RegisterUserIdScreen} />
      <Stack.Screen
        name="RegisterUserGender"
        component={RegisterUserGenderScreen}
      />
      <Stack.Screen
        name="RegisterUserBirthday"
        component={RegisterUserBirthdayScreen}
      />
      <Stack.Screen
        name="RegisterUserSelectBank"
        component={RegisterUserSelectBankScreen}
      />
      <Stack.Screen
        name="RegisterUserSelectBranch"
        component={RegisterUserSelectBranchScreen}
      />
      <Stack.Screen
        name="RegisterUserAccountNumber"
        component={RegisterUserAccountNumberScreen}
      />
      <Stack.Screen
        name="RegisterUserAccountHolder"
        component={RegisterUserAccountHolderScreen}
      />
      <Stack.Screen
        name="RegisterUserApproval"
        component={RegisterUserApprovalScreen}
      />
      <Stack.Screen
        name="RegisterUserAgreement"
        component={RegisterUserAgreementScreen}
      />
      <Stack.Screen
        name="RegisterUserDescription"
        component={RegisterUserDescriptionScreen}
      />
      <Stack.Screen
        name="RegisterUserPayment"
        component={RegisterUserPaymentScreen}
      />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="RegisterBusinessName"
        component={RegisterBusinessNameScreen}
      />
       <Stack.Screen
        name="RegisterBusinessId"
        component={RegisterBusinessIdScreen}
      />
      <Stack.Screen
        name="RegisterBusinessNumber"
        component={RegisterBusinessNumberScreen}
      />
       <Stack.Screen
        name="RegisterBusinessOtp"
        component={RegisterBusinessOtpScreen}
      />
       <Stack.Screen
        name="RegisterBusinessEmail"
        component={RegisterBusinessEmailScreen}
      />
       <Stack.Screen
        name="RegisterBusinessContact"
        component={RegisterBusinessContactScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
