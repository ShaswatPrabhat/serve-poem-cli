'use strict';
const React = require('react');
const { Text, Box } = require('ink');

const Poem = ({ poemObject: { title, author, lines } }) => (
	<Box flexDirection='column'>
		<Box>
			<Text bold color='blue' marginBottom={0.5}>Title: {title}</Text>
		</Box>
		<Box>
			<Text color='blue'>By: {author}</Text>
		</Box>
		<Box flexDirection='column' marginTop={1}>
			{lines.map((line, index) => <Text key={`${author}${index}`}>{line}</Text>)}
		</Box>

	</Box>
);


module.exports = Poem;
