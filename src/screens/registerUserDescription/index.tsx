import React, { useRef, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import { RootNavigationProp } from '../../navigation/stack';

import { styles } from './styles';



const RegisterUserDescriptionScreen = () => {
    const navigation = useNavigation<RootNavigationProp>();


    const handleNext = () => {
        navigation.navigate('RegisterUserPayment');
    };



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                    <Header
                        showForwardIcon={true}
                        onPressForward={() => navigation.goBack()}
                        title="Enrollment"
                    />
                    <View style={styles.form}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>Description Title</Text>
                            <Text style={styles.subtitle}>Description Subtitle</Text>
                        </View>


                        {/* Instruction */}
                        <Text style={styles.instruction}>
                            In order to attach the authorization form, please transfer the account details
                            to receive the authorization form.
                        </Text>

                        {/* Blue Box with Account Info */}
                        <View style={styles.infoCard}>
                            <View style={styles.rowTop}>
                                <TouchableOpacity>
                                    <Text style={styles.underline}>Show account number</Text>
                                </TouchableOpacity>
                                <Text style={styles.entityName}>PCS GLOBAL</Text>
                            </View>

                            {/* Account Info */}
                            <View style={styles.row}>
                                <View style={styles.col}>
                                    <Text style={styles.label}>Branch Number</Text>
                                    <Text style={styles.value}>345</Text>
                                </View>
                                <View style={styles.col}>
                                    <Text style={styles.label}>Account Number</Text>
                                    <Text style={styles.value}>3333444555</Text>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.col}>
                                    <Text style={styles.label}>Bank Code</Text>
                                    <Text style={styles.value}>1122334455</Text>
                                </View>
                                <View style={styles.col}>
                                    <Text style={styles.label}>Bank Name</Text>
                                    <Text style={styles.value}>Hapoalim</Text>
                                </View>
                            </View>
                        </View>

                        {/* Dropdown & Button Section */}
                        <View style={styles.dropdownWrapper}>
                            <Text style={styles.label}>There is already an existing debit authorization?</Text>
                            <TouchableOpacity
                                style={styles.touchContainer}>
                                <Image
                                    source={require('../../assets/images/registerUserId/path.png')}
                                    style={styles.logo}
                                />
                                <Text style={styles.touchText}>To View and upload image</Text>
                                <Image
                                    source={require('../../assets/images/registerUserId/group25.png')}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Continue Button */}
                        <TouchableOpacity 
                        onPress={handleNext}
                        style={styles.button}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </KeyboardAvoidingView>
    );
};

export default RegisterUserDescriptionScreen;
