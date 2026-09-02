import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';

const Input = (props) => <TextInput placeholderTextColor={colors.muted} style={styles.input} {...props} />;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.white
  }
});

export default Input;
