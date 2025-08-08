
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class OptionSettingsLexer extends antlr.Lexer {
    public static readonly OPTION_SETTINGS = 1;
    public static readonly BOOL = 2;
    public static readonly ENUM = 3;
    public static readonly IDENTIFIER = 4;
    public static readonly NUMERIC = 5;
    public static readonly QUOTED_TEXT = 6;
    public static readonly BL = 7;
    public static readonly BR = 8;
    public static readonly PL = 9;
    public static readonly PR = 10;
    public static readonly EQ = 11;
    public static readonly CM = 12;
    public static readonly QT = 13;
    public static readonly DT = 14;
    public static readonly DH = 15;
    public static readonly SC = 16;
    public static readonly COMMENT = 17;
    public static readonly SECTION = 18;
    public static readonly WS = 19;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'OptionSettings'", null, null, null, null, null, "'['", "']'", 
        "'('", "')'", "'='", "','", "'\"'", "'.'", "'_'", "';'"
    ];

    public static readonly symbolicNames = [
        null, "OPTION_SETTINGS", "BOOL", "ENUM", "IDENTIFIER", "NUMERIC", 
        "QUOTED_TEXT", "BL", "BR", "PL", "PR", "EQ", "CM", "QT", "DT", "DH", 
        "SC", "COMMENT", "SECTION", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "OPTION_SETTINGS", "BOOL", "ENUM", "IDENTIFIER", "NUMERIC", "QUOTED_TEXT", 
        "BL", "BR", "PL", "PR", "EQ", "CM", "QT", "DT", "DH", "SC", "TRUE", 
        "FALSE", "LETTER", "UPPERCASE", "LOWERCASE", "DIGIT", "COMMENT", 
        "SECTION", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, OptionSettingsLexer._ATN, OptionSettingsLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "OptionSettings.g4"; }

    public get literalNames(): (string | null)[] { return OptionSettingsLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return OptionSettingsLexer.symbolicNames; }
    public get ruleNames(): string[] { return OptionSettingsLexer.ruleNames; }

    public get serializedATN(): number[] { return OptionSettingsLexer._serializedATN; }

    public get channelNames(): string[] { return OptionSettingsLexer.channelNames; }

    public get modeNames(): string[] { return OptionSettingsLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,19,178,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,1,0,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,3,1,69,8,
        1,1,2,1,2,1,2,1,2,5,2,75,8,2,10,2,12,2,78,9,2,1,3,1,3,1,3,1,3,5,
        3,84,8,3,10,3,12,3,87,9,3,1,4,4,4,90,8,4,11,4,12,4,91,1,4,1,4,4,
        4,96,8,4,11,4,12,4,97,3,4,100,8,4,1,5,1,5,5,5,104,8,5,10,5,12,5,
        107,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,
        11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,
        16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,3,18,144,8,18,1,19,1,
        19,1,20,1,20,1,21,1,21,1,22,1,22,5,22,154,8,22,10,22,12,22,157,9,
        22,1,22,1,22,1,23,1,23,5,23,163,8,23,10,23,12,23,166,9,23,1,23,1,
        23,1,23,1,23,1,24,4,24,173,8,24,11,24,12,24,174,1,24,1,24,0,0,25,
        1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
        27,14,29,15,31,16,33,0,35,0,37,0,39,0,41,0,43,0,45,17,47,18,49,19,
        1,0,6,1,0,34,34,1,0,65,90,1,0,97,122,1,0,48,57,1,0,10,10,3,0,9,10,
        13,13,32,32,186,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
        0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
        0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
        0,29,1,0,0,0,0,31,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,
        1,51,1,0,0,0,3,68,1,0,0,0,5,70,1,0,0,0,7,79,1,0,0,0,9,89,1,0,0,0,
        11,101,1,0,0,0,13,110,1,0,0,0,15,112,1,0,0,0,17,114,1,0,0,0,19,116,
        1,0,0,0,21,118,1,0,0,0,23,120,1,0,0,0,25,122,1,0,0,0,27,124,1,0,
        0,0,29,126,1,0,0,0,31,128,1,0,0,0,33,130,1,0,0,0,35,135,1,0,0,0,
        37,143,1,0,0,0,39,145,1,0,0,0,41,147,1,0,0,0,43,149,1,0,0,0,45,151,
        1,0,0,0,47,160,1,0,0,0,49,172,1,0,0,0,51,52,5,79,0,0,52,53,5,112,
        0,0,53,54,5,116,0,0,54,55,5,105,0,0,55,56,5,111,0,0,56,57,5,110,
        0,0,57,58,5,83,0,0,58,59,5,101,0,0,59,60,5,116,0,0,60,61,5,116,0,
        0,61,62,5,105,0,0,62,63,5,110,0,0,63,64,5,103,0,0,64,65,5,115,0,
        0,65,2,1,0,0,0,66,69,3,33,16,0,67,69,3,35,17,0,68,66,1,0,0,0,68,
        67,1,0,0,0,69,4,1,0,0,0,70,76,3,39,19,0,71,75,3,39,19,0,72,75,3,
        41,20,0,73,75,3,43,21,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,
        0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,6,1,0,0,0,78,76,1,
        0,0,0,79,85,3,37,18,0,80,84,3,37,18,0,81,84,3,43,21,0,82,84,3,29,
        14,0,83,80,1,0,0,0,83,81,1,0,0,0,83,82,1,0,0,0,84,87,1,0,0,0,85,
        83,1,0,0,0,85,86,1,0,0,0,86,8,1,0,0,0,87,85,1,0,0,0,88,90,3,43,21,
        0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,99,
        1,0,0,0,93,95,3,27,13,0,94,96,3,43,21,0,95,94,1,0,0,0,96,97,1,0,
        0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,93,1,0,0,0,99,
        100,1,0,0,0,100,10,1,0,0,0,101,105,3,25,12,0,102,104,8,0,0,0,103,
        102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,
        108,1,0,0,0,107,105,1,0,0,0,108,109,3,25,12,0,109,12,1,0,0,0,110,
        111,5,91,0,0,111,14,1,0,0,0,112,113,5,93,0,0,113,16,1,0,0,0,114,
        115,5,40,0,0,115,18,1,0,0,0,116,117,5,41,0,0,117,20,1,0,0,0,118,
        119,5,61,0,0,119,22,1,0,0,0,120,121,5,44,0,0,121,24,1,0,0,0,122,
        123,5,34,0,0,123,26,1,0,0,0,124,125,5,46,0,0,125,28,1,0,0,0,126,
        127,5,95,0,0,127,30,1,0,0,0,128,129,5,59,0,0,129,32,1,0,0,0,130,
        131,5,84,0,0,131,132,5,114,0,0,132,133,5,117,0,0,133,134,5,101,0,
        0,134,34,1,0,0,0,135,136,5,70,0,0,136,137,5,97,0,0,137,138,5,108,
        0,0,138,139,5,115,0,0,139,140,5,101,0,0,140,36,1,0,0,0,141,144,3,
        39,19,0,142,144,3,41,20,0,143,141,1,0,0,0,143,142,1,0,0,0,144,38,
        1,0,0,0,145,146,7,1,0,0,146,40,1,0,0,0,147,148,7,2,0,0,148,42,1,
        0,0,0,149,150,7,3,0,0,150,44,1,0,0,0,151,155,3,31,15,0,152,154,8,
        4,0,0,153,152,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,
        0,0,0,156,158,1,0,0,0,157,155,1,0,0,0,158,159,6,22,0,0,159,46,1,
        0,0,0,160,164,3,13,6,0,161,163,8,4,0,0,162,161,1,0,0,0,163,166,1,
        0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,164,1,
        0,0,0,167,168,3,15,7,0,168,169,1,0,0,0,169,170,6,23,0,0,170,48,1,
        0,0,0,171,173,7,5,0,0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,
        0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,6,24,0,0,177,50,1,
        0,0,0,14,0,68,74,76,83,85,91,97,99,105,143,155,164,174,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OptionSettingsLexer.__ATN) {
            OptionSettingsLexer.__ATN = new antlr.ATNDeserializer().deserialize(OptionSettingsLexer._serializedATN);
        }

        return OptionSettingsLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OptionSettingsLexer.literalNames, OptionSettingsLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OptionSettingsLexer.vocabulary;
    }

    private static readonly decisionsToDFA = OptionSettingsLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}