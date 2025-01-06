import { KnownEnums } from "./common";

export enum Type {
  Unknown = "unknown",
  String = "string",
  Integer = "integer",
  Float = "float",
  Boolean = "boolean",
  Enum = "enum",
}

export type ValueTypes = {
  [Type.Unknown]: string | number | boolean;
  [Type.String]: string;
  [Type.Integer]: number;
  [Type.Float]: number;
  [Type.Boolean]: boolean;
  [Type.Enum]: string;
};

export type Parameter<T extends Type = Type> = {
  name: string;
  type: T;
  value: ValueTypes[T];
};

export function parse(
  pair: string,
  enums: Record<string, string[]> = KnownEnums
) {
  const [name, stringValue] = pair.split("=");
  let type: Type = Type.Unknown;
  let value: string | number | boolean = stringValue;
  const numeric = Number.parseFloat(stringValue);
  if (!Number.isNaN(numeric)) {
    type = stringValue.includes(".") ? Type.Float : Type.Integer;
    value = numeric;
  } else if (stringValue === "False" || stringValue === "True") {
    type = Type.Boolean;
    value = stringValue === "True";
  } else if (stringValue.startsWith('"') && stringValue.endsWith('"')) {
    type = Type.String;
    value = stringValue.slice(1, -1);
  } else if (Object.keys(enums).includes(name)) {
    type = Type.Enum;
    value = stringValue;
  }
  return {
    name,
    type,
    value,
  } satisfies Parameter<typeof type>;
}

export function formatValue(parameter: Parameter) {
  const { type, value } = parameter;
  switch (type) {
    case Type.Float:
      return (value as number).toFixed(6);
    case Type.Boolean:
      return (value as boolean) ? "True" : "False";
    case Type.String:
      return `"${value}"`;
    default:
      return `${value}`;
  }
}

export function stringify(parameter: Parameter) {
  const { name } = parameter;
  return `${name}=${formatValue(parameter)}`;
}
