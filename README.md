# eslint-plugin-no-map-parseint

Don&#39;t use .map(parseInt) and complain afterwards

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-map-parseint`:

```
$ npm install eslint-plugin-no-map-parseint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-map-parseint` globally.

## Usage

Add `no-map-parseint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-map-parseint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-map-parseint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





