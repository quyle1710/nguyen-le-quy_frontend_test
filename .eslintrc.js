const path = require("path");

module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "eslint:recommended", 
        "plugin:react/recommended", 
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    },
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    }
};