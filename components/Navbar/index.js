import React, {useState} from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {Image, StatusBar} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Navbar({ activeRoute }) {
  const navigation = useNavigation();
  const tabs = [
    {
      key: 'Home',
      icon: require('../../assets/Vector.png'),
      label: 'Home',
      barColor: 'rgba(0,0,0,0.5)',
    },
    {
      key: 'Search',
      icon: require('../../assets/Search.png'),
      label: 'Search',
      barColor: 'rgba(0,0,0,0.5)',
    },
    {
      key: 'Library',
      icon: require('../../assets/Library.png'),
      label: 'Saved',
      barColor: 'rgba(0,0,0,0.5)',
    },
    {
      key: 'Logout',
      icon: require('../../assets/Gear.png'),
      label: 'Logout',
      barColor: 'rgba(0,0,0,0.5)',
    },
  ];

  const [activeTab, setActiveTab] = useState(activeRoute);

  const renderIcon = icon => ({isActive}) => (
    <Image style={styles.banner} source={icon} />
  );

  const renderTab = ({tab, isActive}) => (
    <FullTab
      style={{
        alignSelf: 'center',
        marginTop: 5,
        opacity: isActive ? 0.7 : 0.6,
      }}
      animationDuration={500}
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  );
  return (
    <BottomNavigation
      style={{
        height: 60,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#1B0536',
      }}
      activeTab={activeTab}
      onTabPress={async newTab => {
        if(newTab.key === activeRoute) return;

        if(newTab.key === 'Logout') {
          await AsyncStorage.removeItem('user_id');
          navigation.reset({
            index: 0,
            routes: [{name: 'About'}],
          });
          return;
        }

        navigation.push(newTab.key);
        setActiveTab(newTab.key);
      }}
      renderTab={renderTab}
      tabs={tabs}
    />
  );
}

export default Navbar;
