'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { Text, Box } = require('ink');
const fetch = require('node-fetch');
const Loader = importJsx('./loader');
const Poem = importJsx('./poem');
const getRandomProperty = require('../utils/getRandomProperty');
const { ERROR_FETCHING_LABELS } = require('../assets/en.json');

const PoemFetch = () => {
		const [poem, setPoem] = React.useState('');
		const [error, setErrorState] = React.useState(false);
		const [fetchingPoem, setFetchingPoem] = React.useState(true);

		React.useEffect(() => {
			if (!poem) {
				fetch('https://poetrydb.org/random,linecount/3;4').then((body) => {
					body.json().then((res) => {
						setPoem(res[Math.floor(Math.random() * res.length)]);
					});
				}).catch(() => {
					setErrorState(true);
				}).finally(() => {
					setFetchingPoem(false);
				});
			}
		}, []);

		return (
			<Box flexDirection='column' marginTop={1} marginBottom={1}>
				<Text>
					{fetchingPoem && <Loader />}
					{error && <Text color='red'>{getRandomProperty(ERROR_FETCHING_LABELS)}</Text>}
				</Text>
				{!!poem && <Poem poemObject={poem} />}
			</Box>
		);
	}
;

module.exports = PoemFetch;
