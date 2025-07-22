import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

import { styles } from './TextInputStyles';

interface TextInputProps {
  pass: string;
}

export function TextInput(props: TextInputProps) {
  return (
    <RNTextInput
      style={styles.inputer}
      placeholder='pass'
      value={props.pass}
    />
  );
}

