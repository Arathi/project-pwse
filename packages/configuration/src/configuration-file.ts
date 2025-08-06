import { ParameterType } from ".";
import type { Parameter } from "./parameter";

export const KeyPattern = "([A-Za-z][0-9A-Za-z_]+)=";
export const EnumPattern = "([A-Z][A-Za-z]+)";
export const TextPattern = '"(.*?)"';
export const NumberPattern = "(\d+(\.\d{6})?)";
export const GroupPattern = "\((.*)\)";

const ValuePatterns = [GroupPattern, EnumPattern, TextPattern, NumberPattern];

export const ParamPattern = `${KeyPattern}=(${ValuePatterns.join("|")})`;
export const ParamRegex = new RegExp(ParamPattern);

export class ConfigurationFile {
  parameters: Parameter[] = [];

  stringify(): string {
    return "";
  }

  parse(content: string): Parameter[] {
    const lines = content.split("\n");
    const parameters: Parameter[] = [];
    for (const line of lines) {
      // const property = this.parseLine(line.trim());
      // parameters.push(property);
    }
    return parameters;
  }

  // parseLine(line: string): Parameter {
  //   return {
  //     type: ParameterType.Boolean,
  //     value: false,
  //   };
  // }

  // parse
}
