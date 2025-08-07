
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class PalWorldSettingsLexer extends antlr.Lexer {
    public static readonly COMMENT = 1;
    public static readonly SECTION_HEADER = 2;
    public static readonly BOOL = 3;
    public static readonly IDENTIFIER = 4;
    public static readonly NUMBER = 5;
    public static readonly STRING = 6;
    public static readonly EQ = 7;
    public static readonly CM = 8;
    public static readonly DT = 9;
    public static readonly QT = 10;
    public static readonly SC = 11;
    public static readonly CL = 12;
    public static readonly PL = 13;
    public static readonly PR = 14;
    public static readonly BL = 15;
    public static readonly BR = 16;
    public static readonly NL = 17;
    public static readonly WS = 18;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, "'='", "','", "'.'", "'\"'", 
        "';'", "':'", "'('", "')'", "'['", "']'"
    ];

    public static readonly symbolicNames = [
        null, "COMMENT", "SECTION_HEADER", "BOOL", "IDENTIFIER", "NUMBER", 
        "STRING", "EQ", "CM", "DT", "QT", "SC", "CL", "PL", "PR", "BL", 
        "BR", "NL", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "COMMENT", "SECTION_HEADER", "BOOL", "IDENTIFIER", "NUMBER", "STRING", 
        "EQ", "CM", "DT", "QT", "SC", "CL", "PL", "PR", "BL", "BR", "NL", 
        "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, PalWorldSettingsLexer._ATN, PalWorldSettingsLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "PalWorldSettings.g4"; }

    public get literalNames(): (string | null)[] { return PalWorldSettingsLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return PalWorldSettingsLexer.symbolicNames; }
    public get ruleNames(): string[] { return PalWorldSettingsLexer.ruleNames; }

    public get serializedATN(): number[] { return PalWorldSettingsLexer._serializedATN; }

    public get channelNames(): string[] { return PalWorldSettingsLexer.channelNames; }

    public get modeNames(): string[] { return PalWorldSettingsLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,18,131,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,5,0,40,8,
        0,10,0,12,0,43,9,0,1,0,1,0,1,0,1,0,1,1,1,1,4,1,51,8,1,11,1,12,1,
        52,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,66,8,2,1,3,1,
        3,5,3,70,8,3,10,3,12,3,73,9,3,1,4,4,4,76,8,4,11,4,12,4,77,1,4,1,
        4,4,4,82,8,4,11,4,12,4,83,3,4,86,8,4,1,5,1,5,5,5,90,8,5,10,5,12,
        5,93,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,
        1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,3,16,118,8,16,
        1,16,4,16,121,8,16,11,16,12,16,122,1,17,4,17,126,8,17,11,17,12,17,
        127,1,17,1,17,1,91,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
        19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,1,0,5,1,0,
        10,10,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,
        0,9,10,13,13,32,32,141,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
        0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
        0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,
        0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,
        0,0,0,3,48,1,0,0,0,5,65,1,0,0,0,7,67,1,0,0,0,9,75,1,0,0,0,11,87,
        1,0,0,0,13,96,1,0,0,0,15,98,1,0,0,0,17,100,1,0,0,0,19,102,1,0,0,
        0,21,104,1,0,0,0,23,106,1,0,0,0,25,108,1,0,0,0,27,110,1,0,0,0,29,
        112,1,0,0,0,31,114,1,0,0,0,33,120,1,0,0,0,35,125,1,0,0,0,37,41,3,
        21,10,0,38,40,8,0,0,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,
        41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,3,33,16,0,45,46,
        1,0,0,0,46,47,6,0,0,0,47,2,1,0,0,0,48,50,3,29,14,0,49,51,8,0,0,0,
        50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,54,1,
        0,0,0,54,55,3,31,15,0,55,4,1,0,0,0,56,57,5,84,0,0,57,58,5,114,0,
        0,58,59,5,117,0,0,59,66,5,101,0,0,60,61,5,70,0,0,61,62,5,97,0,0,
        62,63,5,108,0,0,63,64,5,115,0,0,64,66,5,101,0,0,65,56,1,0,0,0,65,
        60,1,0,0,0,66,6,1,0,0,0,67,71,7,1,0,0,68,70,7,2,0,0,69,68,1,0,0,
        0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,8,1,0,0,0,73,71,1,
        0,0,0,74,76,7,3,0,0,75,74,1,0,0,0,76,77,1,0,0,0,77,75,1,0,0,0,77,
        78,1,0,0,0,78,85,1,0,0,0,79,81,3,17,8,0,80,82,7,3,0,0,81,80,1,0,
        0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,79,
        1,0,0,0,85,86,1,0,0,0,86,10,1,0,0,0,87,91,3,19,9,0,88,90,9,0,0,0,
        89,88,1,0,0,0,90,93,1,0,0,0,91,92,1,0,0,0,91,89,1,0,0,0,92,94,1,
        0,0,0,93,91,1,0,0,0,94,95,3,19,9,0,95,12,1,0,0,0,96,97,5,61,0,0,
        97,14,1,0,0,0,98,99,5,44,0,0,99,16,1,0,0,0,100,101,5,46,0,0,101,
        18,1,0,0,0,102,103,5,34,0,0,103,20,1,0,0,0,104,105,5,59,0,0,105,
        22,1,0,0,0,106,107,5,58,0,0,107,24,1,0,0,0,108,109,5,40,0,0,109,
        26,1,0,0,0,110,111,5,41,0,0,111,28,1,0,0,0,112,113,5,91,0,0,113,
        30,1,0,0,0,114,115,5,93,0,0,115,32,1,0,0,0,116,118,5,13,0,0,117,
        116,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,121,5,10,0,0,120,
        117,1,0,0,0,121,122,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,
        34,1,0,0,0,124,126,7,4,0,0,125,124,1,0,0,0,126,127,1,0,0,0,127,125,
        1,0,0,0,127,128,1,0,0,0,128,129,1,0,0,0,129,130,6,17,0,0,130,36,
        1,0,0,0,12,0,41,52,65,71,77,83,85,91,117,122,127,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PalWorldSettingsLexer.__ATN) {
            PalWorldSettingsLexer.__ATN = new antlr.ATNDeserializer().deserialize(PalWorldSettingsLexer._serializedATN);
        }

        return PalWorldSettingsLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PalWorldSettingsLexer.literalNames, PalWorldSettingsLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PalWorldSettingsLexer.vocabulary;
    }

    private static readonly decisionsToDFA = PalWorldSettingsLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}