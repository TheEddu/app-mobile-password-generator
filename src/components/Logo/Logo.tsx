import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './LogoStyles';
// import Logo from '../../../assets/logo.jpg';
const logoImg = require('../../../assets/logo.jpg');


export function Logo() {
  return (
    <>
      <Text style={styles.title}>
        PASS GENERATOR
      </Text>
      <Image
        source={logoImg}
        style={{
          resizeMode:'contain',
          height:180
        }}
      />
    </>
  );
}