import { DefaultPalWorldSettings, KnownEnums } from "./common";
import {
  type Parameter,
  parse as parseParameter,
  formatValue,
} from "./parameter";

export const Metadata = parse(DefaultPalWorldSettings);

export type Configuration = Record<string, Parameter>;

export function parse(
  content: string = DefaultPalWorldSettings,
  metadata: Configuration = {},
  enums: Record<string, string[]> = KnownEnums
): Configuration {
  console.info(`正在解析配置文件：\n${content}`);
  const lines = content.split("\n").map((line) => line.trim());
  const config: Configuration = {};
  for (const line of lines) {
    if (line.startsWith("OptionSettings=(") && line.endsWith(")")) {
      const pairs = line.slice(16, -1).split(",");
      for (const pair of pairs) {
        const parameter = parseParameter(pair, enums);
        let { name, type, value } = parameter;
        const metadataParameter = metadata[name];
        if (metadataParameter !== undefined) {
          type = metadataParameter.type;
        }
        config[name] = {
          name,
          type,
          value,
        };
      }
    }
  }
  return config;
}

export function toJSON(
  config: Configuration,
  outputDefault: boolean = false,
  metadata: Configuration = Metadata
): Record<string, string> {
  let result: Record<string, string> = {};
  for (const name in metadata) {
    const { type, value: defaultValue } = metadata[name];
    const configParameter = config[name];
    let parameter = {
      name,
      type,
      value: configParameter?.value ?? defaultValue,
    };
    if (outputDefault || parameter.value !== defaultValue) {
      result[name] = formatValue(parameter);
    }
  }
  return result;
}

export function stringify(
  config: Configuration,
  outputDefault: boolean = false,
  metadata: Configuration = Metadata
): string {
  const parameters: string[] = [];
  const json = toJSON(config, outputDefault, metadata);
  for (const name in json) {
    const value = json[name];
    parameters.push(`${name}=${value}`);
  }
  return `[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${parameters.join(",")})`;
}
