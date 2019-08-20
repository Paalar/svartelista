module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  "parser": "babel-eslint",
    "extends": "airbnb",
    "rules":{
        "indent": 2,
        "no-tabs": 0,
        "jsx-quotes": [2, "prefer-single"],
    },
    "overrides": [
      {
        "files": ["*"],
        "rules": {
          "jsx-a11y/label-has-for": "off",
          "jsx-a11y/click-events-have-key-events": "off",
          "jsx-a11y/no-noninteractive-element-interactions": "off",
          "jsx-a11y/no-static-element-interactions": "off",
        }
      }
    ]
};
