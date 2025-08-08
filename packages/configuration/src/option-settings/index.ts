import type { Property } from "./property";
import { PropertyType } from "./property";

export class OptionSettings {
  metadata: Record<string, Property>;
  properties: Property[];

  constructor(
    properties: Property[] = [],
    metadata: Record<string, Property> = {},
  ) {
    this.properties = properties;
    this.metadata = metadata;
  }

  toMap(): Record<string, Property> {
    const map: Record<string, Property> = {};
    for (const property of this.properties) {
      map[property.key] = property;
    }
    return map;
  }

  stringify(ignoreDefault: boolean = false): string {
    const parameters: string[] = [];
    for (const property of this.properties) {
      const { key, value } = property;
      const metadata = this.metadata[key];
      const type = metadata?.type ?? property.type;
      let text: string;
      switch (type) {
        case PropertyType.String: {
          text = `"${value}"`;
          break;
        }
        case PropertyType.Boolean: {
          const bool = value as boolean;
          text = bool ? "True" : "False";
          break;
        }
        case PropertyType.Decimal: {
          const decimal = value as number;
          text = decimal.toFixed(6);
          break;
        }
        default: {
          text = `${value}`;
          break;
        }
      }

      if (ignoreDefault && value === metadata?.value) {
        continue;
      }

      parameters.push(`${key}=${text}`);
    }

    return `
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(${parameters.join(",")})
`.trim();
  }
}
