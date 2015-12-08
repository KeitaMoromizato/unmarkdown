# unmarkedown

un markdown

## Installation

```
$ npm install unmarkedown
```

## Usage

```
import unmarkedown form 'unmarkedown';

const text = `
# header
contents

> quote

## header2

* list1
* list2
`;

const result = unmarkedown(text);
// result = `
header
contents

quote

header2

list1
list2
`;
```

## Tests

```
$ npm test
```

## License
MIT
