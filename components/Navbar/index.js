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
      key: 'Logout',
      icon: require('../../assets/Gear.png'),
      label: 'Logout',
    },
  ];

  const [activeTab, setActiveTab] = useState('Home');

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
      onTabPress={newTab => {
        navigation.push(newTab.key);
        setActiveTab(newTab.key);
      }}
      renderTab={renderTab}
      tabs={tabs}
    />
  );
}

export default Navbar;
