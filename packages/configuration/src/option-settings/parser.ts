import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4ng";

import { OptionSettingsLexer as Lexer } from "@/parser/OptionSettingsLexer";
import { OptionSettingsParser as BaseParser } from "@/parser/OptionSettingsParser";
import { OptionSettings } from ".";
import { Listener } from "./listener";

export class Parser {
  parse(content: string): OptionSettings {
    console.debug("开始解析\n", content);

    const inputs = CharStream.fromString(content);
    const lexer = new Lexer(inputs);
    const tokens = new CommonTokenStream(lexer);
    const parser = new BaseParser(tokens);
    const root = parser.optionSettings();
    const walker = new ParseTreeWalker();
    const listener = new Listener();
    walker.walk(listener, root);
    return new OptionSettings(listener.propertyList);
  }
}
