# eslint-plugin-react-svg

SVG specific rules for react

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-svg`:

```
$ npm install eslint-plugin-react-svg --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-svg` globally.

## Configuration

### Using the preset

```json
  "extends": [
    "eslint:recommended",
    "plugin:react-svg/recommended"
  ]
```

### Using manual configuration

Add `react-svg` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "react-svg"
    ]
}
```

Enable JSX support

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "react-svg/no-unused-ids-in-svg": 2,
        "react-svg/no-unused-empty-tag-in-svg": 2,
        "react-svg/no-metadata-in-svg": 2
    }
}
```

## Supported Rules

* [react-svg/no-unused-ids-in-svg](docs/rules/no-unused-ids-in-svg.md): Forbid ids not referenced in the svg
* [react-svg/no-unused-empty-tag-in-svg](docs/rules/no-unused-empty-tag-in-svg): Forbids empty elements that doesn't render anything
* [react-svg/no-metadata-in-svg](docs/rules/no-metadata-in-svg): Forbids metadata like "title" / "desc"
