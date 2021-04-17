import React, {useState} from 'react';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import {Image, StatusBar} from 'react-native';
import {styles} from './styles';

function Navbar({navigation}) {
  const tabs = [
    {
      key: 'Home',
      icon: require('../../assets/Vector.png'),
      label: 'Home',
      barColor: '#000000',
    },
    {
      key: 'Search',
      icon: require('../../assets/Search.png'),
      label: 'Search',
    },
    {
      key: 'Library',
      icon: require('../../assets/Library.png'),
      label: 'Saved',
    },
    {
      key: 'Settings',
      icon: require('../../assets/Gear.png'),
      label: 'Settings',
    },
  ];

  const [activeTab, setActiveTab] = useState('Home');

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
      onTabPress={(newTab) => {navigation.push(newTab.key); setActiveTab(newTab.key)}}
      renderTab={renderTab}
      tabs={tabs}
    />
  );
}

export default Navbar;
