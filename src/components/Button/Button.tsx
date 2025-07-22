import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';
import generatePass from '../../services/passwordService';
import { TextInput } from '../TextInput/TextInput';

import * as Clipboard from 'expo-clipboard';

import { styles } from './ButtonStyles';

export function Button() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken  = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <TextInput pass={pass}/>
      
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

    </>
  );
}