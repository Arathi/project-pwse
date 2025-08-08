export interface Property {
  key: string;
  type: PropertyType;
  value: ValueType;
}

export enum PropertyType {
  Enum = "enum",
  String = "string",
  Boolean = "boolean",
  Decimal = "decimal",
  Integer = "integer",
  Enums = "enums",
  Unknown = "unknown",
}

export type ValueType = string | boolean | number | string[];

export type ValueTypes = {
  [PropertyType.Enum]: string;
  [PropertyType.String]: string;
  [PropertyType.Boolean]: boolean;
  [PropertyType.Decimal]: number;
  [PropertyType.Integer]: number;
  [PropertyType.Enums]: string[];
  [PropertyType.Unknown]: ValueType;
};
