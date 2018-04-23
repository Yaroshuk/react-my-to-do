function isTruthy(value) {
  if (!value) return false;
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "import/no-unresolved": OFF,
    "import/extensions": OFF,
    "no-trailing-spaces": OFF,
    "no-cond-assign": OFF,
    "no-return-assign": OFF,
    "no-param-reassign": OFF,
    "import/prefer-default-export": OFF,
    "jsx-a11y/anchor-is-valid": OFF,
    "arrow-body-style": OFF,
    "react/prefer-stateless-function": OFF,
    "linebreak-style": OFF,
    "jsx-a11y/no-static-element-interactions": OFF,
    "jsx-a11y/click-events-have-key-events": OFF,
    "jsx-a11y/no-noninteractive-element-interactions": OFF,
    "react/jsx-filename-extension": OFF,
    "function-paren-newline": OFF,
    "import/no-extraneous-dependencies": OFF,
    "comma-dangle": OFF,
    "eol-last": OFF,
    "eqeqeq": [WARNING, "allow-null"],
    // "import/imports-first": OFF,
    "indent": [WARNING, 2, {"SwitchCase": 1}],
    "max-len": [ERROR, {
      "ignorePattern": "^import|^export",
      "code": 120,
      "tabWidth": 2
    }],
    // "no-console": [WARNING, {"allow": ["warn", "error"]}],
    // "no-debugger": WARNING,
    // "no-fallthrough": WARNING,
    // "no-unreachable": WARNING,
    // "no-unused-vars": [WARNING, {"vars": "all", "args": "none"}],
    // "no-var": ERROR,
    "prefer-const": WARNING,
    // "react/prop-types": [WARNING, {"ignore": ["className"]}],
    "react/prop-types": [OFF],
    "semi": [ERROR, "always", { "omitLastInOneLineBlock": false}],
  },
};
