grammar PalWorldSettings;

sections: section* EOF;
section: sectionHeader sectionValues;
sectionHeader: SECTION_HEADER;
sectionValues: pair (NL pair)*;

pair: key EQ (literal | list | map);
key: IDENTIFIER;
literal: bool | enums | numeric | text;
bool: BOOL;
enums: IDENTIFIER;
numeric: NUMBER;
text: STRING;
list: PL literal (CM literal)* PR;
map: PL pair (CM pair)* PR;

COMMENT: SC (~[\n])* NL -> skip;
SECTION_HEADER: BL (~[\n])+ BR;

BOOL: 'True' | 'False';
IDENTIFIER: [A-Za-z][0-9A-Za-z_]*;
NUMBER: [0-9]+ (DT [0-9]+)?;
STRING: QT (.)*? QT;

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

NL: ('\r'? '\n')+;
WS: [ \t\r\n]+ -> skip;
