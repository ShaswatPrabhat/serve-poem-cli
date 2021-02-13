'use strict';
const React = require('react');
const { Text } = require('ink');
const { default: Spinner } = require('ink-spinner');
const { FETCHING_POEMS_LABELS } = require('../assets/en.json');
const getRandomProperty = require('../utils/getRandomProperty');

const Loader = () => {
		return (
			<Text color='green'>
				<Spinner type='dots' />
				<Text color='green'>
					{getRandomProperty(FETCHING_POEMS_LABELS)}
				</Text>
			</Text>
		);
	}
;

module.exports = Loader;
