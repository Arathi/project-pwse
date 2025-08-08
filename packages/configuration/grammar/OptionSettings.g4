grammar OptionSettings;

optionSettings: OPTION_SETTINGS EQ PL property (CM property)* PR;
property: key EQ value;
key: IDENTIFIER | ENUM;
value: enumText | quotedText | bool | numeric | list;
enumText: ENUM;
quotedText: QUOTED_TEXT;
bool: BOOL;
numeric: NUMERIC;
list: PL enumText (CM enumText)* PR;

OPTION_SETTINGS: 'OptionSettings';
BOOL: TRUE | FALSE;
ENUM: UPPERCASE (UPPERCASE | LOWERCASE | DIGIT)*;
IDENTIFIER: LETTER (LETTER | DIGIT | DH)*;
NUMERIC: DIGIT+ (DT DIGIT+)?;
QUOTED_TEXT: QT (~["])* QT;

BL: '[';
BR: ']';
PL: '(';
PR: ')';
EQ: '='; // equals
CM: ','; // comma
QT: '"'; // quota
DT: '.'; // dot
DH: '_'; // dash
SC: ';'; // semi-colon

fragment TRUE: 'True';
fragment FALSE: 'False';
fragment LETTER: UPPERCASE | LOWERCASE;
fragment UPPERCASE: [A-Z];
fragment LOWERCASE: [a-z];
fragment DIGIT: [0-9];

COMMENT: SC (~[\n])* -> skip;
SECTION: BL (~[\n])* BR -> skip;
WS: [ \t\r\n]+ -> skip;
