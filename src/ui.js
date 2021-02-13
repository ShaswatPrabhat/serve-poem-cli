'use strict';
const React = require('react');
const { Text } = require('ink');

const App = ({ name = 'Stranger' }) => (
	<Text>
		Hello, <Text color='blue'>{name}</Text>
	</Text>
);

module.exports = App;
