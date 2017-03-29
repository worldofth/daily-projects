module.exports = {
	"env": {
		"es6": true,
		"browser": true,
		"node": true
	},
    "extends": "eslint:recommended",
	"parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
	"rules": {
		"no-console": 0,
		"indent": [
			2,
			"tab"
		],
		"linebreak-style": [
			2,
			"unix"
		],
		"quotes": [
			2,
			"single"
		],
		"semi": [
			2,
			"always"
		]
	}
};
