'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { Text, Box } = require('ink');
const { HELLO_LABELS } = require('../assets/en.json');
const PoemFetch = importJsx('./poemFetch');
const getRandomProperty = require('../utils/getRandomProperty');


const App = () => {

	return (
		<Box margin={1} flexGrow={1} flexBasis={3} width='50%' borderStyle='round' flexDirection='column'>
			<Text bold>
				{getRandomProperty(HELLO_LABELS)}
			</Text>
			<PoemFetch />
		</Box>
	);
};

module.exports = App;
