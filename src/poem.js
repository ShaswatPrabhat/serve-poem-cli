'use strict';
const React = require('react');
const { Text } = require('ink');
const fetch = require('node-fetch');
const { FETCHING_POEMS_LABEL } = require('../assets/en.json');
const getRandomProperty = require('../utils/getRandomProperty');

const Poem = ({ poemObject }) => {
		const [poem, setPoem] = React.useState('');
		const [error, setErrorState] = React.useState(false);
		const [fetchingPoem, setFetchingPoem] = React.useState(true);

		React.useEffect(() => {
			if (!poem) {
				fetch('https://poetrydb.org/random,linecount/3;4').then((body) => {
					body.json().then((res) => {
						setFetchingPoem(false);
						setPoem(res[Math.floor(Math.random() * res.length)]);
					});
				}).catch(() => {
					setErrorState(true);
				});
			}
		}, [poem, error, fetchingPoem]);

		return (
			<Text>
				{fetchingPoem && <Text color='blue'>{getRandomProperty(FETCHING_POEMS_LABEL)}</Text>}
				{/*{poem && <Text color='blue'>{JSON.stringify(poem)}</Text>}*/}
			</Text>
		);
	}
;

module.exports = Poem;
