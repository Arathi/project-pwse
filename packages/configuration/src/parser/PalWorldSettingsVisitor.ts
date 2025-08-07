
import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PalWorldSettingsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PalWorldSettingsVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.sections`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSections?: (ctx: SectionsContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.section`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSection?: (ctx: SectionContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.sectionHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSectionHeader?: (ctx: SectionHeaderContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.sectionValues`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSectionValues?: (ctx: SectionValuesContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.pair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPair?: (ctx: PairContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.key`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey?: (ctx: KeyContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.bool`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBool?: (ctx: BoolContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.enums`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnums?: (ctx: EnumsContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.text`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitText?: (ctx: TextContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitList?: (ctx: ListContext) => Result;
    /**
     * Visit a parse tree produced by `PalWorldSettingsParser.map`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMap?: (ctx: MapContext) => Result;
}

