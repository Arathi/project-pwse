
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { OptionSettingsListener } from "./OptionSettingsListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class OptionSettingsParser extends antlr.Parser {
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
    public static readonly RULE_optionSettings = 0;
    public static readonly RULE_property = 1;
    public static readonly RULE_key = 2;
    public static readonly RULE_value = 3;
    public static readonly RULE_enumText = 4;
    public static readonly RULE_quotedText = 5;
    public static readonly RULE_bool = 6;
    public static readonly RULE_numeric = 7;
    public static readonly RULE_list = 8;

    public static readonly literalNames = [
        null, "'OptionSettings'", null, null, null, null, null, "'['", "']'", 
        "'('", "')'", "'='", "','", "'\"'", "'.'", "'_'", "';'"
    ];

    public static readonly symbolicNames = [
        null, "OPTION_SETTINGS", "BOOL", "ENUM", "IDENTIFIER", "NUMERIC", 
        "QUOTED_TEXT", "BL", "BR", "PL", "PR", "EQ", "CM", "QT", "DT", "DH", 
        "SC", "COMMENT", "SECTION", "WS"
    ];
    public static readonly ruleNames = [
        "optionSettings", "property", "key", "value", "enumText", "quotedText", 
        "bool", "numeric", "list",
    ];

    public get grammarFileName(): string { return "OptionSettings.g4"; }
    public get literalNames(): (string | null)[] { return OptionSettingsParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return OptionSettingsParser.symbolicNames; }
    public get ruleNames(): string[] { return OptionSettingsParser.ruleNames; }
    public get serializedATN(): number[] { return OptionSettingsParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, OptionSettingsParser._ATN, OptionSettingsParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public optionSettings(): OptionSettingsContext {
        let localContext = new OptionSettingsContext(this.context, this.state);
        this.enterRule(localContext, 0, OptionSettingsParser.RULE_optionSettings);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 18;
            this.match(OptionSettingsParser.OPTION_SETTINGS);
            this.state = 19;
            this.match(OptionSettingsParser.EQ);
            this.state = 20;
            this.match(OptionSettingsParser.PL);
            this.state = 21;
            this.property();
            this.state = 26;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12) {
                {
                {
                this.state = 22;
                this.match(OptionSettingsParser.CM);
                this.state = 23;
                this.property();
                }
                }
                this.state = 28;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 29;
            this.match(OptionSettingsParser.PR);
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
    public property(): PropertyContext {
        let localContext = new PropertyContext(this.context, this.state);
        this.enterRule(localContext, 2, OptionSettingsParser.RULE_property);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 31;
            this.key();
            this.state = 32;
            this.match(OptionSettingsParser.EQ);
            this.state = 33;
            this.value();
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
        this.enterRule(localContext, 4, OptionSettingsParser.RULE_key);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 35;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 4)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
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
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 6, OptionSettingsParser.RULE_value);
        try {
            this.state = 42;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case OptionSettingsParser.ENUM:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 37;
                this.enumText();
                }
                break;
            case OptionSettingsParser.QUOTED_TEXT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 38;
                this.quotedText();
                }
                break;
            case OptionSettingsParser.BOOL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 39;
                this.bool();
                }
                break;
            case OptionSettingsParser.NUMERIC:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 40;
                this.numeric();
                }
                break;
            case OptionSettingsParser.PL:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 41;
                this.list();
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
    public enumText(): EnumTextContext {
        let localContext = new EnumTextContext(this.context, this.state);
        this.enterRule(localContext, 8, OptionSettingsParser.RULE_enumText);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 44;
            this.match(OptionSettingsParser.ENUM);
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
    public quotedText(): QuotedTextContext {
        let localContext = new QuotedTextContext(this.context, this.state);
        this.enterRule(localContext, 10, OptionSettingsParser.RULE_quotedText);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 46;
            this.match(OptionSettingsParser.QUOTED_TEXT);
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
        this.enterRule(localContext, 12, OptionSettingsParser.RULE_bool);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            this.match(OptionSettingsParser.BOOL);
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
        this.enterRule(localContext, 14, OptionSettingsParser.RULE_numeric);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 50;
            this.match(OptionSettingsParser.NUMERIC);
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
        this.enterRule(localContext, 16, OptionSettingsParser.RULE_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 52;
            this.match(OptionSettingsParser.PL);
            this.state = 53;
            this.enumText();
            this.state = 58;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12) {
                {
                {
                this.state = 54;
                this.match(OptionSettingsParser.CM);
                this.state = 55;
                this.enumText();
                }
                }
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 61;
            this.match(OptionSettingsParser.PR);
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
        4,1,19,64,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,5,0,25,8,0,10,0,12,0,28,
        9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,43,8,
        3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,5,8,57,8,8,10,
        8,12,8,60,9,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,3,
        4,60,0,18,1,0,0,0,2,31,1,0,0,0,4,35,1,0,0,0,6,42,1,0,0,0,8,44,1,
        0,0,0,10,46,1,0,0,0,12,48,1,0,0,0,14,50,1,0,0,0,16,52,1,0,0,0,18,
        19,5,1,0,0,19,20,5,11,0,0,20,21,5,9,0,0,21,26,3,2,1,0,22,23,5,12,
        0,0,23,25,3,2,1,0,24,22,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,
        1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,10,0,0,30,1,1,0,0,0,
        31,32,3,4,2,0,32,33,5,11,0,0,33,34,3,6,3,0,34,3,1,0,0,0,35,36,7,
        0,0,0,36,5,1,0,0,0,37,43,3,8,4,0,38,43,3,10,5,0,39,43,3,12,6,0,40,
        43,3,14,7,0,41,43,3,16,8,0,42,37,1,0,0,0,42,38,1,0,0,0,42,39,1,0,
        0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,7,1,0,0,0,44,45,5,3,0,0,45,9,
        1,0,0,0,46,47,5,6,0,0,47,11,1,0,0,0,48,49,5,2,0,0,49,13,1,0,0,0,
        50,51,5,5,0,0,51,15,1,0,0,0,52,53,5,9,0,0,53,58,3,8,4,0,54,55,5,
        12,0,0,55,57,3,8,4,0,56,54,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,
        59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,10,0,0,62,17,1,0,
        0,0,3,26,42,58
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!OptionSettingsParser.__ATN) {
            OptionSettingsParser.__ATN = new antlr.ATNDeserializer().deserialize(OptionSettingsParser._serializedATN);
        }

        return OptionSettingsParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(OptionSettingsParser.literalNames, OptionSettingsParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return OptionSettingsParser.vocabulary;
    }

    private static readonly decisionsToDFA = OptionSettingsParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class OptionSettingsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPTION_SETTINGS(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.OPTION_SETTINGS, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.EQ, 0)!;
    }
    public PL(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.PL, 0)!;
    }
    public property(): PropertyContext[];
    public property(i: number): PropertyContext | null;
    public property(i?: number): PropertyContext[] | PropertyContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }

        return this.getRuleContext(i, PropertyContext);
    }
    public PR(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.PR, 0)!;
    }
    public CM(): antlr.TerminalNode[];
    public CM(i: number): antlr.TerminalNode | null;
    public CM(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OptionSettingsParser.CM);
    	} else {
    		return this.getToken(OptionSettingsParser.CM, i);
    	}
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_optionSettings;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterOptionSettings) {
             listener.enterOptionSettings(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitOptionSettings) {
             listener.exitOptionSettings(this);
        }
    }
}


export class PropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.EQ, 0)!;
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_property;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterProperty) {
             listener.enterProperty(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitProperty) {
             listener.exitProperty(this);
        }
    }
}


export class KeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(OptionSettingsParser.IDENTIFIER, 0);
    }
    public ENUM(): antlr.TerminalNode | null {
        return this.getToken(OptionSettingsParser.ENUM, 0);
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_key;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterKey) {
             listener.enterKey(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitKey) {
             listener.exitKey(this);
        }
    }
}


export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumText(): EnumTextContext | null {
        return this.getRuleContext(0, EnumTextContext);
    }
    public quotedText(): QuotedTextContext | null {
        return this.getRuleContext(0, QuotedTextContext);
    }
    public bool(): BoolContext | null {
        return this.getRuleContext(0, BoolContext);
    }
    public numeric(): NumericContext | null {
        return this.getRuleContext(0, NumericContext);
    }
    public list(): ListContext | null {
        return this.getRuleContext(0, ListContext);
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_value;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterValue) {
             listener.enterValue(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitValue) {
             listener.exitValue(this);
        }
    }
}


export class EnumTextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENUM(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.ENUM, 0)!;
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_enumText;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterEnumText) {
             listener.enterEnumText(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitEnumText) {
             listener.exitEnumText(this);
        }
    }
}


export class QuotedTextContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public QUOTED_TEXT(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.QUOTED_TEXT, 0)!;
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_quotedText;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterQuotedText) {
             listener.enterQuotedText(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitQuotedText) {
             listener.exitQuotedText(this);
        }
    }
}


export class BoolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.BOOL, 0)!;
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_bool;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterBool) {
             listener.enterBool(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitBool) {
             listener.exitBool(this);
        }
    }
}


export class NumericContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERIC(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.NUMERIC, 0)!;
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_numeric;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterNumeric) {
             listener.enterNumeric(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitNumeric) {
             listener.exitNumeric(this);
        }
    }
}


export class ListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PL(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.PL, 0)!;
    }
    public enumText(): EnumTextContext[];
    public enumText(i: number): EnumTextContext | null;
    public enumText(i?: number): EnumTextContext[] | EnumTextContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumTextContext);
        }

        return this.getRuleContext(i, EnumTextContext);
    }
    public PR(): antlr.TerminalNode {
        return this.getToken(OptionSettingsParser.PR, 0)!;
    }
    public CM(): antlr.TerminalNode[];
    public CM(i: number): antlr.TerminalNode | null;
    public CM(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(OptionSettingsParser.CM);
    	} else {
    		return this.getToken(OptionSettingsParser.CM, i);
    	}
    }
    public override get ruleIndex(): number {
        return OptionSettingsParser.RULE_list;
    }
    public override enterRule(listener: OptionSettingsListener): void {
        if(listener.enterList) {
             listener.enterList(this);
        }
    }
    public override exitRule(listener: OptionSettingsListener): void {
        if(listener.exitList) {
             listener.exitList(this);
        }
    }
}
