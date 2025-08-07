
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { PalWorldSettingsListener } from "./PalWorldSettingsListener.js";
import { PalWorldSettingsVisitor } from "./PalWorldSettingsVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class PalWorldSettingsParser extends antlr.Parser {
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
    public static readonly RULE_sections = 0;
    public static readonly RULE_section = 1;
    public static readonly RULE_sectionHeader = 2;
    public static readonly RULE_sectionValues = 3;
    public static readonly RULE_pair = 4;
    public static readonly RULE_key = 5;
    public static readonly RULE_literal = 6;
    public static readonly RULE_bool = 7;
    public static readonly RULE_enums = 8;
    public static readonly RULE_numeric = 9;
    public static readonly RULE_text = 10;
    public static readonly RULE_list = 11;
    public static readonly RULE_map = 12;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, "'='", "','", "'.'", "'\"'", 
        "';'", "':'", "'('", "')'", "'['", "']'"
    ];

    public static readonly symbolicNames = [
        null, "COMMENT", "SECTION_HEADER", "BOOL", "IDENTIFIER", "NUMBER", 
        "STRING", "EQ", "CM", "DT", "QT", "SC", "CL", "PL", "PR", "BL", 
        "BR", "NL", "WS"
    ];
    public static readonly ruleNames = [
        "sections", "section", "sectionHeader", "sectionValues", "pair", 
        "key", "literal", "bool", "enums", "numeric", "text", "list", "map",
    ];

    public get grammarFileName(): string { return "PalWorldSettings.g4"; }
    public get literalNames(): (string | null)[] { return PalWorldSettingsParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return PalWorldSettingsParser.symbolicNames; }
    public get ruleNames(): string[] { return PalWorldSettingsParser.ruleNames; }
    public get serializedATN(): number[] { return PalWorldSettingsParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, PalWorldSettingsParser._ATN, PalWorldSettingsParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public sections(): SectionsContext {
        let localContext = new SectionsContext(this.context, this.state);
        this.enterRule(localContext, 0, PalWorldSettingsParser.RULE_sections);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 29;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 26;
                this.section();
                }
                }
                this.state = 31;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 32;
            this.match(PalWorldSettingsParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public section(): SectionContext {
        let localContext = new SectionContext(this.context, this.state);
        this.enterRule(localContext, 2, PalWorldSettingsParser.RULE_section);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 34;
            this.sectionHeader();
            this.state = 35;
            this.sectionValues();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sectionHeader(): SectionHeaderContext {
        let localContext = new SectionHeaderContext(this.context, this.state);
        this.enterRule(localContext, 4, PalWorldSettingsParser.RULE_sectionHeader);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 37;
            this.match(PalWorldSettingsParser.SECTION_HEADER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sectionValues(): SectionValuesContext {
        let localContext = new SectionValuesContext(this.context, this.state);
        this.enterRule(localContext, 6, PalWorldSettingsParser.RULE_sectionValues);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.pair();
            this.state = 44;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 40;
                this.match(PalWorldSettingsParser.NL);
                this.state = 41;
                this.pair();
                }
                }
                this.state = 46;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pair(): PairContext {
        let localContext = new PairContext(this.context, this.state);
        this.enterRule(localContext, 8, PalWorldSettingsParser.RULE_pair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 47;
            this.key();
            this.state = 48;
            this.match(PalWorldSettingsParser.EQ);
            this.state = 52;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 49;
                this.literal();
                }
                break;
            case 2:
                {
                this.state = 50;
                this.list();
                }
                break;
            case 3:
                {
                this.state = 51;
                this.map();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public key(): KeyContext {
        let localContext = new KeyContext(this.context, this.state);
        this.enterRule(localContext, 10, PalWorldSettingsParser.RULE_key);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.match(PalWorldSettingsParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 12, PalWorldSettingsParser.RULE_literal);
        try {
            this.state = 60;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PalWorldSettingsParser.BOOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 56;
                this.bool();
                }
                break;
            case PalWorldSettingsParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 57;
                this.enums();
                }
                break;
            case PalWorldSettingsParser.NUMBER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 58;
                this.numeric();
                }
                break;
            case PalWorldSettingsParser.STRING:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 59;
                this.text();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bool(): BoolContext {
        let localContext = new BoolContext(this.context, this.state);
        this.enterRule(localContext, 14, PalWorldSettingsParser.RULE_bool);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 62;
            this.match(PalWorldSettingsParser.BOOL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enums(): EnumsContext {
        let localContext = new EnumsContext(this.context, this.state);
        this.enterRule(localContext, 16, PalWorldSettingsParser.RULE_enums);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.match(PalWorldSettingsParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numeric(): NumericContext {
        let localContext = new NumericContext(this.context, this.state);
        this.enterRule(localContext, 18, PalWorldSettingsParser.RULE_numeric);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.match(PalWorldSettingsParser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public text(): TextContext {
        let localContext = new TextContext(this.context, this.state);
        this.enterRule(localContext, 20, PalWorldSettingsParser.RULE_text);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.match(PalWorldSettingsParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public list(): ListContext {
        let localContext = new ListContext(this.context, this.state);
        this.enterRule(localContext, 22, PalWorldSettingsParser.RULE_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 70;
            this.match(PalWorldSettingsParser.PL);
            this.state = 71;
            this.literal();
            this.state = 76;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 72;
                this.match(PalWorldSettingsParser.CM);
                this.state = 73;
                this.literal();
                }
                }
                this.state = 78;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 79;
            this.match(PalWorldSettingsParser.PR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public map(): MapContext {
        let localContext = new MapContext(this.context, this.state);
        this.enterRule(localContext, 24, PalWorldSettingsParser.RULE_map);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.match(PalWorldSettingsParser.PL);
            this.state = 82;
            this.pair();
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 83;
                this.match(PalWorldSettingsParser.CM);
                this.state = 84;
                this.pair();
                }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 90;
            this.match(PalWorldSettingsParser.PR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,18,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,
        28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,
        5,3,43,8,3,10,3,12,3,46,9,3,1,4,1,4,1,4,1,4,1,4,3,4,53,8,4,1,5,1,
        5,1,6,1,6,1,6,1,6,3,6,61,8,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
        11,1,11,1,11,1,11,5,11,75,8,11,10,11,12,11,78,9,11,1,11,1,11,1,12,
        1,12,1,12,1,12,5,12,86,8,12,10,12,12,12,89,9,12,1,12,1,12,1,12,0,
        0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,88,0,29,1,0,0,0,2,34,
        1,0,0,0,4,37,1,0,0,0,6,39,1,0,0,0,8,47,1,0,0,0,10,54,1,0,0,0,12,
        60,1,0,0,0,14,62,1,0,0,0,16,64,1,0,0,0,18,66,1,0,0,0,20,68,1,0,0,
        0,22,70,1,0,0,0,24,81,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,
        1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,
        32,33,5,0,0,1,33,1,1,0,0,0,34,35,3,4,2,0,35,36,3,6,3,0,36,3,1,0,
        0,0,37,38,5,2,0,0,38,5,1,0,0,0,39,44,3,8,4,0,40,41,5,17,0,0,41,43,
        3,8,4,0,42,40,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,
        45,7,1,0,0,0,46,44,1,0,0,0,47,48,3,10,5,0,48,52,5,7,0,0,49,53,3,
        12,6,0,50,53,3,22,11,0,51,53,3,24,12,0,52,49,1,0,0,0,52,50,1,0,0,
        0,52,51,1,0,0,0,53,9,1,0,0,0,54,55,5,4,0,0,55,11,1,0,0,0,56,61,3,
        14,7,0,57,61,3,16,8,0,58,61,3,18,9,0,59,61,3,20,10,0,60,56,1,0,0,
        0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,13,1,0,0,0,62,63,
        5,3,0,0,63,15,1,0,0,0,64,65,5,4,0,0,65,17,1,0,0,0,66,67,5,5,0,0,
        67,19,1,0,0,0,68,69,5,6,0,0,69,21,1,0,0,0,70,71,5,13,0,0,71,76,3,
        12,6,0,72,73,5,8,0,0,73,75,3,12,6,0,74,72,1,0,0,0,75,78,1,0,0,0,
        76,74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,0,78,76,1,0,0,0,79,80,5,
        14,0,0,80,23,1,0,0,0,81,82,5,13,0,0,82,87,3,8,4,0,83,84,5,8,0,0,
        84,86,3,8,4,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,
        0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,14,0,0,91,25,1,0,0,0,6,
        29,44,52,60,76,87
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PalWorldSettingsParser.__ATN) {
            PalWorldSettingsParser.__ATN = new antlr.ATNDeserializer().deserialize(PalWorldSettingsParser._serializedATN);
        }

        return PalWorldSettingsParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PalWorldSettingsParser.literalNames, PalWorldSettingsParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PalWorldSettingsParser.vocabulary;
    }

    private static readonly decisionsToDFA = PalWorldSettingsParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.EOF, 0)!;
    }
    public section(): SectionContext[];
    public section(i: number): SectionContext | null;
    public section(i?: number): SectionContext[] | SectionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SectionContext);
        }

        return this.getRuleContext(i, SectionContext);
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_sections;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterSections) {
             listener.enterSections(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitSections) {
             listener.exitSections(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitSections) {
            return visitor.visitSections(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sectionHeader(): SectionHeaderContext {
        return this.getRuleContext(0, SectionHeaderContext)!;
    }
    public sectionValues(): SectionValuesContext {
        return this.getRuleContext(0, SectionValuesContext)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_section;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterSection) {
             listener.enterSection(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitSection) {
             listener.exitSection(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitSection) {
            return visitor.visitSection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SectionHeaderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SECTION_HEADER(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.SECTION_HEADER, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_sectionHeader;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterSectionHeader) {
             listener.enterSectionHeader(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitSectionHeader) {
             listener.exitSectionHeader(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitSectionHeader) {
            return visitor.visitSectionHeader(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SectionValuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pair(): PairContext[];
    public pair(i: number): PairContext | null;
    public pair(i?: number): PairContext[] | PairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PairContext);
        }

        return this.getRuleContext(i, PairContext);
    }
    public NL(): antlr.TerminalNode[];
    public NL(i: number): antlr.TerminalNode | null;
    public NL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PalWorldSettingsParser.NL);
    	} else {
    		return this.getToken(PalWorldSettingsParser.NL, i);
    	}
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_sectionValues;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterSectionValues) {
             listener.enterSectionValues(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitSectionValues) {
             listener.exitSectionValues(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitSectionValues) {
            return visitor.visitSectionValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.EQ, 0)!;
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public list(): ListContext | null {
        return this.getRuleContext(0, ListContext);
    }
    public map(): MapContext | null {
        return this.getRuleContext(0, MapContext);
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_pair;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterPair) {
             listener.enterPair(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitPair) {
             listener.exitPair(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitPair) {
            return visitor.visitPair(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_key;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterKey) {
             listener.enterKey(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitKey) {
             listener.exitKey(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public bool(): BoolContext | null {
        return this.getRuleContext(0, BoolContext);
    }
    public enums(): EnumsContext | null {
        return this.getRuleContext(0, EnumsContext);
    }
    public numeric(): NumericContext | null {
        return this.getRuleContext(0, NumericContext);
    }
    public text(): TextContext | null {
        return this.getRuleContext(0, TextContext);
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_literal;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BoolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.BOOL, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_bool;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterBool) {
             listener.enterBool(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitBool) {
             listener.exitBool(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_enums;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterEnums) {
             listener.enterEnums(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitEnums) {
             listener.exitEnums(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitEnums) {
            return visitor.visitEnums(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumericContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.NUMBER, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_numeric;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterNumeric) {
             listener.enterNumeric(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitNumeric) {
             listener.exitNumeric(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitNumeric) {
            return visitor.visitNumeric(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_text;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterText) {
             listener.enterText(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitText) {
             listener.exitText(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitText) {
            return visitor.visitText(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PL(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.PL, 0)!;
    }
    public literal(): LiteralContext[];
    public literal(i: number): LiteralContext | null;
    public literal(i?: number): LiteralContext[] | LiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }

        return this.getRuleContext(i, LiteralContext);
    }
    public PR(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.PR, 0)!;
    }
    public CM(): antlr.TerminalNode[];
    public CM(i: number): antlr.TerminalNode | null;
    public CM(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PalWorldSettingsParser.CM);
    	} else {
    		return this.getToken(PalWorldSettingsParser.CM, i);
    	}
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_list;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterList) {
             listener.enterList(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitList) {
             listener.exitList(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitList) {
            return visitor.visitList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PL(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.PL, 0)!;
    }
    public pair(): PairContext[];
    public pair(i: number): PairContext | null;
    public pair(i?: number): PairContext[] | PairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PairContext);
        }

        return this.getRuleContext(i, PairContext);
    }
    public PR(): antlr.TerminalNode {
        return this.getToken(PalWorldSettingsParser.PR, 0)!;
    }
    public CM(): antlr.TerminalNode[];
    public CM(i: number): antlr.TerminalNode | null;
    public CM(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PalWorldSettingsParser.CM);
    	} else {
    		return this.getToken(PalWorldSettingsParser.CM, i);
    	}
    }
    public override get ruleIndex(): number {
        return PalWorldSettingsParser.RULE_map;
    }
    public override enterRule(listener: PalWorldSettingsListener): void {
        if(listener.enterMap) {
             listener.enterMap(this);
        }
    }
    public override exitRule(listener: PalWorldSettingsListener): void {
        if(listener.exitMap) {
             listener.exitMap(this);
        }
    }
    public override accept<Result>(visitor: PalWorldSettingsVisitor<Result>): Result | null {
        if (visitor.visitMap) {
            return visitor.visitMap(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
