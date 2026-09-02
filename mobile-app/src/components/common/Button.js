import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const Button = ({ title, onPress, style, disabled }) => (
  <Pressable disabled={disabled} onPress={onPress} style={[styles.button, disabled && styles.disabled, style]}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: 'center'
  },
  disabled: { opacity: 0.6 },
  text: { color: colors.white, fontWeight: '600' }
});

export default Button;
