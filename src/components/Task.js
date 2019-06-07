import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.color} />
				<Text style={styles.description}>Hello!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '80%',
		height: 64,
		backgroundColor: '#FFF',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: .25,
		shadowRadius: 3.84,
		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16,
		alignSelf: 'center'
	},

	description: {
		textAlign: 'center'
	},

	color: {
		width: 5,
		height: '100%',
		position: 'absolute',
		left: 0,
		backgroundColor: '#256',
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5
	}
});