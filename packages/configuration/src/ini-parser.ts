interface Property {
  type: ValueType;
  value: Value;
}

enum ValueType {
  Enum,
  Text,
  Bool,
  Fixed,
  Int,
  Props,
  List,
}

type Enum = string;
type Text = string;
type Bool = boolean;
type Fixed = number;
type Int = number;
type List = Array<Property>;
type Properties = Record<string, Property>;
type Value = Enum | Text | Bool | Fixed | Int | List | Properties;

const PROPERTY_NAME_REGEX = /([A-Za-z][0-9A-Za-z])=/;

function parse(content: string): Properties {
  const lines = content.split("\n");
  for (const line of lines) {
  }
  const properties = {};

  return properties;
}

function parseLine(line: string): Property {
  return {
    type: ValueType.Bool,
    value: false,
  };
}
