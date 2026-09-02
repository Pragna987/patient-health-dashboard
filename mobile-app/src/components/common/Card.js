import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const Card = ({ children, style }) => <View style={[styles.card, style]}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md
  }
});

export default Card;
