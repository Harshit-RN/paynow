import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';
import {color} from '../../constant/color';
import {px} from '../../utils/dimension';

type HeaderProps = {
  showForwardIcon?: boolean;
  onPressForward?: () => void;
  showDrawerIcon?:boolean,
  onPressDrawer?: () => void;
  title?: string; // Optional centered title
};

const Header: React.FC<HeaderProps> = ({
  showForwardIcon = false,
  onPressForward,
  showDrawerIcon = false,
  onPressDrawer,
  title,
}) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.left}>
        <Image
          source={require('../../assets/images/header/group.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.center}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>

      <View style={styles.side}>
        {showForwardIcon && onPressForward ? (
          <TouchableOpacity onPress={onPressForward}>
            <Image
              source={require('../../assets/images/header/back.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) :  null}
          {showDrawerIcon  ? (
          <TouchableOpacity onPress={onPressDrawer}>
            <Image
              source={require('../../assets/images/header/drawer.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) :  null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: color.white,
    padding: px(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: px(5),
  },

  side: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: px(10),
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: px(100),
    height: Platform.OS === 'ios' ? px(50) : px(40),
    resizeMode: 'contain',
  },
  icon: {
    width: px(20),
    height: px(20),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: px(14),
    fontWeight: '600',
    color: color.black,
    textAlign: 'center',
  },
});

export default Header;
