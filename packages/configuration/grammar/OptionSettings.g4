grammar OptionSettings;

properties: '(' property (',' property)* ')';
property: key '=' value;
key: ID | ENUM;
value: enums | text | bool | numeric | list;
enums: ENUM;
text: TEXT;
bool: BOOL;
numeric: NUMERIC;
list: '(' enums (',' enums)* ')';

BOOL: 'True' | 'False';
ENUM: UPPERCASE (UPPERCASE | LOWERCASE | DIGIT)*;
ID: LETTER (LETTER | DIGIT | '_')*;
NUMERIC: DIGIT+ ('.' DIGIT+)?;

fragment LETTER: UPPERCASE | LOWERCASE;
fragment UPPERCASE: [A-Z];
fragment LOWERCASE: [a-z];
fragment DIGIT: [0-9];

TEXT: '"' (~["])* '"';

WS: [ \t\r\n]+ -> skip;
