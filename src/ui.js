'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { Text } = require('ink');
const { HELLO_LABELS } = require('../assets/en.json');
const Poem = importJsx('./poem');
const getRandomProperty = require('../utils/getRandomProperty');


const App = () => {

	return (
		<Text>
			{getRandomProperty(HELLO_LABELS)}
			<Poem />
		</Text>
	);
};

module.exports = App;
