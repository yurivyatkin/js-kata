const testExamples = [
  {
    input: 'The following text<C><B>is centred and in boldface</B></C>',
    tagTokens: [
      {
        tag: 'C',
        closing: false,
      },
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'B',
        closing: true,
      },
      {
        tag: 'C',
        closing: true,
      },
    ],
    output: 'Correctly tagged paragraph',
  },
  {
    input: '<B>This <\\g>is <B>boldface</B> in <<*> a</B> <\\6> <<d>sentence',
    tagTokens: [
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'B',
        closing: true,
      },
      {
        tag: 'B',
        closing: true,
      },
    ],
    output: 'Correctly tagged paragraph',
  },
  {
    input:
      '<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>',
    tagTokens: [
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'C',
        closing: false,
      },
      {
        tag: 'B',
        closing: true,
      },
      {
        tag: 'C',
        closing: true,
      },
    ],
    output: 'Expected </C> found </B>',
  },
  {
    input:
      '<B>This should be in boldface, but there is an extra closing tag</B></C>',
    tagTokens: [
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'B',
        closing: true,
      },
      {
        tag: 'C',
        closing: true,
      },
    ],
    output: 'Expected # found </C>',
  },
  {
    input:
      '<B><C>This should be centred and in boldface, but there is a missing closing tag</C>',
    tagTokens: [
      {
        tag: 'B',
        closing: false,
      },
      {
        tag: 'C',
        closing: false,
      },
      {
        tag: 'C',
        closing: true,
      },
    ],
    output: 'Expected </B> found #',
  },
];

module.exports = {
  testExamples,
};
