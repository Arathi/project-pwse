import { ParseTree } from "antlr4ng";
import { PalWorldSettingsLexer as Lexer } from "./parser/PalWorldSettingsLexer";
import { PalWorldSettingsListener as AbstractListener } from "./parser/PalWorldSettingsListener";
import {
  PalWorldSettingsParser as BaseParser,
  SectionsContext,
  SectionContext,
  SectionHeaderContext,
  SectionValuesContext,
  PairContext,
  KeyContext,
  LiteralContext,
  BoolContext,
  EnumsContext,
  NumericContext,
  TextContext,
  ListContext,
  MapContext,
} from "./parser/PalWorldSettingsParser";
import { PalWorldSettingsVisitor as AbstractVisitor } from "./parser/PalWorldSettingsVisitor";

type InitializationFile = {
  sections: Record<string, Section>;
};

type Section = {
  name: string;
  parameters: Array<Parameter>;
};

type Parameter = {
  key: string;
  value: string;
};

class Listener extends AbstractListener {
  level: number = 0;
  keys: string[] = [];

  exitKey = (ctx: KeyContext) => {
    const id = ctx.IDENTIFIER();
    if (id === null) {
      console.error("无效的key节点：", ctx);
      return;
    }
    const key = id.getText();
    this.keys.push(key);
  };

  exitPair = (ctx: PairContext) => {
    const key = ctx.key().IDENTIFIER().getText();
    const indent = `  `.repeat(this.level);

    const literal = ctx.literal();
    if (literal !== null) {
      console.info(`${indent}${key}: Literal = ${literal.toString()}`);
    }

    const list = ctx.list();
    if (list !== null) {
      console.info(`${indent}${key}: List = [${list}]`);
    }

    const map = ctx.map();
    if (map !== null) {
      console.info(`${key}: Map = {${map}}`);
    }
  };

  enterMap = (ctx: MapContext) => {
    const key = this.keys[this.keys.length - 1];
    const indent = `  `.repeat(++this.level);
    console.info(`${indent}${key}: Map = {`);
  };
}

class Visitor extends AbstractVisitor<InitializationFile> {
  ini: InitializationFile = {
    sections: {},
  };

  visitSection = (ctx: SectionContext) => {
    return this.ini;
  };
}

class Parser extends BaseParser {
  //
}

export { Lexer, Listener, Parser, Visitor };
