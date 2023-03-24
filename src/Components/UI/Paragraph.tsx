import { StyleSheet, Text, TextStyle } from 'react-native';
import React, { memo } from 'react';
import { fontTypes,fonts } from '../contexts/fonts';

type fontSize = 8 | 10 | 12 | 14 | 16 | 18 | 20 | number;

type Props = {
  size?: fontSize;
  children?: any;
  type?: fontTypes;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
};

const Paragraph: React.FC<Props> = ({
  size = 16,
  children = '',
  type = 'regular',
  color = '#000000',
  textAlign = 'left',
  style,
  ...props
}) => {
  const propStyling = StyleSheet.create({
    prop: {
      fontSize: size,
      color,
      textAlign,
      fontFamily: fonts(type) || undefined,
    },
  });
  return (
    <Text style={[styles.font, propStyling.prop, style]} {...props}>
      {children}
    </Text>
  );
};

export default memo(Paragraph);

const styles = StyleSheet.create({
  font: {
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});