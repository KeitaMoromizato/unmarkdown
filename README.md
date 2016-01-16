# unmarkedown

un markdown

## Installation

```
$ npm install unmarkdown
```

## Usage

```
import unmarkdown form 'unmarkdown';

const text = `
# header
contents

> quote

## header2

* list1
* list2
`;

const result = unmarkdown(text);
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
