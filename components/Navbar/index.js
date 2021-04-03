import React, {useState} from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {Image, StatusBar} from 'react-native';
import {styles} from './styles';

function Navbar() {
  const tabs = [
    {
      key: 'home',
      icon: require('../../assets/Vector.png'),
      label: 'Home',
    },
    {
      key: 'search',
      icon: require('../../assets/Search.png'),
      label: 'Search',
    },
    {
      key: 'library',
      icon: require('../../assets/Library.png'),
      label: 'Saved',
    },
    {
      key: 'settings',
      icon: require('../../assets/Gear.png'),
      label: 'Settings',
    },
  ];

  const [activeTab, setActiveTab] = useState('home');

  const renderIcon = (icon) => ({isActive}) => (
    <Image style={styles.banner} source={icon} />
  );

  const renderTab = ({tab, isActive}) => (
    <FullTab
      style={{alignSelf: 'center', height: 55, marginTop: 5}}
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  );
  return (
    <BottomNavigation
      style={{height: 55, paddingBottom: 5}}
      activeTab={activeTab}
      onTabPress={(newTab) => setActiveTab(newTab.key)}
      renderTab={renderTab}
      tabs={tabs}
    />
  );
}

export default Navbar;
