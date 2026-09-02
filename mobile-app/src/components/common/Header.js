import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import typography from '../../styles/typography';

const Header = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: spacing.md },
  title: { ...typography.title, color: colors.text },
  subtitle: { ...typography.body, color: colors.muted, marginTop: spacing.xs }
});

export default Header;
