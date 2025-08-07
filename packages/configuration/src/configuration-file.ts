import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4ng";
import { PalWorldSettingsParser as Parser } from "./parser/PalWorldSettingsParser";
import { PalWorldSettingsLexer as Lexer } from "./parser/PalWorldSettingsLexer";
import { Listener } from "./configuration-parser";

export class ConfigurationFile {
  parse(content: string) {
    const inputStream = CharStream.fromString(content);
    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);
    const root = parser.sections();

    const listener = new Listener();
    const walker = new ParseTreeWalker();
    walker.walk(listener, root);
  }
}
