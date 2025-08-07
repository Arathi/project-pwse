
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SectionsContext } from "./PalWorldSettingsParser.js";
import { SectionContext } from "./PalWorldSettingsParser.js";
import { SectionHeaderContext } from "./PalWorldSettingsParser.js";
import { SectionValuesContext } from "./PalWorldSettingsParser.js";
import { PairContext } from "./PalWorldSettingsParser.js";
import { KeyContext } from "./PalWorldSettingsParser.js";
import { LiteralContext } from "./PalWorldSettingsParser.js";
import { BoolContext } from "./PalWorldSettingsParser.js";
import { EnumsContext } from "./PalWorldSettingsParser.js";
import { NumericContext } from "./PalWorldSettingsParser.js";
import { TextContext } from "./PalWorldSettingsParser.js";
import { ListContext } from "./PalWorldSettingsParser.js";
import { MapContext } from "./PalWorldSettingsParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PalWorldSettingsParser`.
 */
export class PalWorldSettingsListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.sections`.
     * @param ctx the parse tree
     */
    enterSections?: (ctx: SectionsContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.sections`.
     * @param ctx the parse tree
     */
    exitSections?: (ctx: SectionsContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.section`.
     * @param ctx the parse tree
     */
    enterSection?: (ctx: SectionContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.section`.
     * @param ctx the parse tree
     */
    exitSection?: (ctx: SectionContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.sectionHeader`.
     * @param ctx the parse tree
     */
    enterSectionHeader?: (ctx: SectionHeaderContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.sectionHeader`.
     * @param ctx the parse tree
     */
    exitSectionHeader?: (ctx: SectionHeaderContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.sectionValues`.
     * @param ctx the parse tree
     */
    enterSectionValues?: (ctx: SectionValuesContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.sectionValues`.
     * @param ctx the parse tree
     */
    exitSectionValues?: (ctx: SectionValuesContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.pair`.
     * @param ctx the parse tree
     */
    enterPair?: (ctx: PairContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.pair`.
     * @param ctx the parse tree
     */
    exitPair?: (ctx: PairContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.key`.
     * @param ctx the parse tree
     */
    enterKey?: (ctx: KeyContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.key`.
     * @param ctx the parse tree
     */
    exitKey?: (ctx: KeyContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.bool`.
     * @param ctx the parse tree
     */
    enterBool?: (ctx: BoolContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.bool`.
     * @param ctx the parse tree
     */
    exitBool?: (ctx: BoolContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.enums`.
     * @param ctx the parse tree
     */
    enterEnums?: (ctx: EnumsContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.enums`.
     * @param ctx the parse tree
     */
    exitEnums?: (ctx: EnumsContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.numeric`.
     * @param ctx the parse tree
     */
    enterNumeric?: (ctx: NumericContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.numeric`.
     * @param ctx the parse tree
     */
    exitNumeric?: (ctx: NumericContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.text`.
     * @param ctx the parse tree
     */
    enterText?: (ctx: TextContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.text`.
     * @param ctx the parse tree
     */
    exitText?: (ctx: TextContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.list`.
     * @param ctx the parse tree
     */
    enterList?: (ctx: ListContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.list`.
     * @param ctx the parse tree
     */
    exitList?: (ctx: ListContext) => void;
    /**
     * Enter a parse tree produced by `PalWorldSettingsParser.map`.
     * @param ctx the parse tree
     */
    enterMap?: (ctx: MapContext) => void;
    /**
     * Exit a parse tree produced by `PalWorldSettingsParser.map`.
     * @param ctx the parse tree
     */
    exitMap?: (ctx: MapContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

