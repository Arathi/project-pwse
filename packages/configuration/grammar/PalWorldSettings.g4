grammar PalWorldSettings;

settings: pair (EOL pair)* EOF;

pair: key EQ value;

literal: bool | enums | fixed | integer | string;
array: PL literal (CM literal)* PR;
object: PL pair (CM pair)* PR;
value: literal | array | object;

key: IDENTIFIER;
bool: TRUE | FALSE;
enums: IDENTIFIER;
fixed: FIXED;
integer: INTEGER;
string: STRING;

COMMENT: SC (~[\n])+ EOL -> skip;
GROUP: BL .*? BR -> skip;

TRUE: 'True';
FALSE: 'False';
IDENTIFIER: [A-Za-z][0-9A-Za-z_]+;
INTEGER: [0-9]+;
FIXED: [0-9]+ DT [0-9]+;
STRING: QT (.)*? QT;

DIGIT: [0-9];

EQ: '=';
CM: ',';
DT: '.';
QT: '"';
SC: ';';
CL: ':';
PL: '(';
PR: ')';
BL: '[';
BR: ']';

EOL: (CR? LF) -> skip;
CR: '\r';
LF: '\n';
