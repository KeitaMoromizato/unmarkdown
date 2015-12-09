"use strict";

import assert from 'power-assert';
import unmarked from '../lib/index';

describe('unmarkdown', function() {

  context('un marked text', () => {

    it('should delete header', () => {
      const test = `
# header1
contents

## header2
contents
`;
      const result = unmarked(test);
      assert(result === '\nheader1\ncontents\n\nheader2\ncontents\n');
    });

    it('should delete blockquote', () => {
      const test = `
>quote1

> quote2
> quote3

not quote
`;
      const result = unmarked(test);
      assert(result === '\nquote1\n\nquote2\nquote3\n\nnot quote\n');
    });

    it('should delete link', () => {
      const test = `
text

![image](http://example.com/image.png)

[link](http://example/com)
`;
      const result = unmarked(test);
      assert(result === '\ntext\n\n\n');
    });

    it('should delete list', () => {
      const test = `
* list1
    * nested
* list2

1. number list1
2. number list2
`;
      const result = unmarked(test);
      assert(result === '\nlist1\nnested\nlist2\n\nnumber list1\nnumber list2\n');
    });

    it('should delete horizon', () => {
      const test = `
a
***
b
*****
c
* * *
d
---
e
-----
f
- - -
`;
      const result = unmarked(test);
      assert(result === '\na\nb\nc\nd\ne\nf\n');
    });
  });
});
