import { expect, test } from "vitest";
import {
  type Parameter,
  Type as ParameterType,
  parse,
  stringify,
} from "../src/parameter";

test("解析配置项", () => {
  function testParse(
    name: string,
    value: string,
    expectType: ParameterType,
    expectValue: string | number | boolean
  ) {
    const pair = `${name}=${value}`;
    console.info("正在解析配置项：", pair);
    const parameter = parse(pair);
    console.info(
      `配置项${name}解析结果：\n${JSON.stringify(parameter, null, 2)}`
    );
    expect(parameter.name).toBe(name);
    expect(parameter.type).toBe(expectType);
    expect(parameter.value).toBe(expectValue);
  }

  // enum
  testParse("Difficulty", "None", ParameterType.Enum, "None");
  testParse("DeathPenalty", "All", ParameterType.Enum, "All");

  // string
  testParse("RandomizerSeed", `""`, ParameterType.String, "");

  // float
  testParse("DayTimeSpeedRate", "1.000000", ParameterType.Float, 1.0);

  // integer
  testParse("DropItemMaxNum", "3000", ParameterType.Integer, 3000);

  // boolean
  testParse("bEnableInvaderEnemy", "True", ParameterType.Boolean, true);
  testParse("bUseAuth", "False", ParameterType.Boolean, false);
});

test("序列化配置项", () => {
  function testStringify(parameter: Parameter, expectResult: string) {
    const result = stringify(parameter);
    console.info(`配置项${parameter.name}序列化结果：`, result);
    expect(result).toBe(expectResult);
  }

  const Difficulty = {
    name: "Difficulty",
    type: ParameterType.Enum,
    value: "None",
  };
  testStringify(Difficulty, "Difficulty=None");

  const DeathPenalty = {
    name: "DeathPenalty",
    type: ParameterType.Enum,
    value: "All",
  };
  testStringify(DeathPenalty, "DeathPenalty=All");

  const RandomizerSeed = {
    name: "RandomizerSeed",
    type: ParameterType.String,
    value: "",
  };
  testStringify(RandomizerSeed, 'RandomizerSeed=""');

  const DayTimeSpeedRate = {
    name: "DayTimeSpeedRate",
    type: ParameterType.Float,
    value: 1.0,
  };
  testStringify(DayTimeSpeedRate, "DayTimeSpeedRate=1.000000");

  const DropItemMaxNum = {
    name: "DropItemMaxNum",
    type: ParameterType.Integer,
    value: 3000,
  };
  testStringify(DropItemMaxNum, "DropItemMaxNum=3000");

  const bEnableInvaderEnemy = {
    name: "bEnableInvaderEnemy",
    type: ParameterType.Boolean,
    value: true,
  };
  testStringify(bEnableInvaderEnemy, "bEnableInvaderEnemy=True");

  const bUseAuth = {
    name: "bUseAuth",
    type: ParameterType.Boolean,
    value: false,
  };
  testStringify(bUseAuth, "bUseAuth=False");
});
