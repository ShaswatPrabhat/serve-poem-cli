const getRandomProperty = (obj) => {
	const keys = Object.keys(obj);
	return obj[keys[keys.length ** Math.random() << 0]];
};

module.exports = getRandomProperty;
