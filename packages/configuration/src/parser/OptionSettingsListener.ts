
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { OptionSettingsContext } from "./OptionSettingsParser.js";
import { PropertyContext } from "./OptionSettingsParser.js";
import { KeyContext } from "./OptionSettingsParser.js";
import { ValueContext } from "./OptionSettingsParser.js";
import { EnumTextContext } from "./OptionSettingsParser.js";
import { QuotedTextContext } from "./OptionSettingsParser.js";
import { BoolContext } from "./OptionSettingsParser.js";
import { NumericContext } from "./OptionSettingsParser.js";
import { ListContext } from "./OptionSettingsParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `OptionSettingsParser`.
 */
export class OptionSettingsListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `OptionSettingsParser.optionSettings`.
     * @param ctx the parse tree
     */
    enterOptionSettings?: (ctx: OptionSettingsContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.optionSettings`.
     * @param ctx the parse tree
     */
    exitOptionSettings?: (ctx: OptionSettingsContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.property`.
     * @param ctx the parse tree
     */
    enterProperty?: (ctx: PropertyContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.property`.
     * @param ctx the parse tree
     */
    exitProperty?: (ctx: PropertyContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.key`.
     * @param ctx the parse tree
     */
    enterKey?: (ctx: KeyContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.key`.
     * @param ctx the parse tree
     */
    exitKey?: (ctx: KeyContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.value`.
     * @param ctx the parse tree
     */
    enterValue?: (ctx: ValueContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.value`.
     * @param ctx the parse tree
     */
    exitValue?: (ctx: ValueContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.enumText`.
     * @param ctx the parse tree
     */
    enterEnumText?: (ctx: EnumTextContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.enumText`.
     * @param ctx the parse tree
     */
    exitEnumText?: (ctx: EnumTextContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.quotedText`.
     * @param ctx the parse tree
     */
    enterQuotedText?: (ctx: QuotedTextContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.quotedText`.
     * @param ctx the parse tree
     */
    exitQuotedText?: (ctx: QuotedTextContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.bool`.
     * @param ctx the parse tree
     */
    enterBool?: (ctx: BoolContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.bool`.
     * @param ctx the parse tree
     */
    exitBool?: (ctx: BoolContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.numeric`.
     * @param ctx the parse tree
     */
    enterNumeric?: (ctx: NumericContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.numeric`.
     * @param ctx the parse tree
     */
    exitNumeric?: (ctx: NumericContext) => void;
    /**
     * Enter a parse tree produced by `OptionSettingsParser.list`.
     * @param ctx the parse tree
     */
    enterList?: (ctx: ListContext) => void;
    /**
     * Exit a parse tree produced by `OptionSettingsParser.list`.
     * @param ctx the parse tree
     */
    exitList?: (ctx: ListContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

