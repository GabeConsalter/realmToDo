import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

export default class Task extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { color, description, createdAt, onPress } = this.props;

		return (
			<TouchableOpacity style={styles.container}
				onPress={() => onPress()}>
				<View style={[styles.color, {backgroundColor: color}]} />
				<Text style={styles.description}>{description}</Text>
				<Text style={styles.createdAt}>{moment(createdAt).from()}</Text>
			</TouchableOpacity>
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
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5
	},

	createdAt: {
		position: 'absolute',
		bottom: 4,
		right: 8,
		fontSize: 12,
		color: '#CDCDCD'
	}
});