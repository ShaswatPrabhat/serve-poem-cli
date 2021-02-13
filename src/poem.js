'use strict';
const React = require('react');
const { Text, Box, Spacer } = require('ink');

const Poem = ({ poemObject }) => (
	<Box flexDirection='column'>
		<Box>
			<Text bold color='blue' marginBottom={0.5}>Title: {poemObject.title}</Text>
		</Box>
		<Box>
			<Text color='blue'>By: {poemObject.author}</Text>
		</Box>
		<Box flexDirection='column' marginTop={1}>
			{poemObject.lines.map((line) => <Text key={line.replace(/ /g, '')}>{line}</Text>)}
		</Box>

	</Box>
);


module.exports = Poem;
