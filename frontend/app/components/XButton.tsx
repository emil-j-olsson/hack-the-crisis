import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const XButton = (props:any) => {
	return (
		<TouchableOpacity
			style={[styles.button, {top: props.top | 0, left: props.left | 0}]}
			onPress={props.onPress}
		>
			<Text style={styles.text}>{props.text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
	color: '#000',
	textAlign: 'center'
  },
  button: {
	padding: 10,
	paddingHorizontal: 30,
	backgroundColor: '#fff',
	borderRadius: 70,
	position: 'absolute'
  }
});