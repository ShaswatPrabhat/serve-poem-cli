#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const meow = require('meow');

const ui = importJsx('./src/ui');

const cli = meow(`
	Usage
	  $ serve-poem-cli

	Options
		--nol  Number of lines in the poem to be fetched

	Examples
	  $ serve-poem-cli --nol=10
`);

render(React.createElement(ui, cli.flags));
