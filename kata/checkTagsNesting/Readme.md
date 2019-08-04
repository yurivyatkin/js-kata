# Check HTML Tags nesting

Write a program that given a string will output a message that indicates whether all the tags are correctly nested, or a mismatch occurred.

Assume that all tags for this problem are presented by **one** upper case letter (e.g. A, B, C, ...), and an **opening tag** is such a letter enclosed by angle brackets (e.g. ``<A>, <B>, <C>, ...``), whereas the corresponding **closing tag** will be the same letter preceded by the symbol ``/`` (e.g. ``</A>, </B>, </C>, ...``).

If the paragraph is correctly tagged then output the line ``“Correctly tagged paragraph”``, otherwise output a line of the form ``“Expected <expected> found <unexpected>”`` where ``<expected>`` is the _closing_ tag matching the most recent unmatched tag and ``<unexpected>`` is the closing tag encountered. If either of these is the end of paragraph, i.e. there is either an unmatched opening tag or no matching closing tag at the end of the paragraph, then replace the tag or closing tag with ``#``.

**Examples.**

1. For the string ``The following text<C><B>is centred and in boldface</B></C>`` the output should be ``Correctly tagged paragraph``.

1. For the string ``<B>This <\g>is <B>boldface</B> in <<*> a</B> <\6> <<d>sentence`` the output should be ``Correctly tagged paragraph``.

1. For the string ``<B><C> This should be centred and in boldface, but the tags are wrongly nested </B></C>`` the output should be ``Expected </C> found </B>``.

1. For the string ``<B>This should be in boldface, but there is an extra closing tag</B></C>`` the output should be ``Expected # found </C>``.

1. For the string ``<B><C>This should be centred and in boldface, but there is a missing closing tag</C>`` the output should be ``Expected </B> found #``.
