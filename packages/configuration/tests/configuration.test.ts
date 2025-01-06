import { expect, test } from "vitest";
import {
  type Configuration,
  Metadata,
  parse,
  stringify,
} from "../src/configuration";
import { Type as ParameterType } from "../src/parameter";

const { Enum, String, Integer, Float, Boolean } = ParameterType;

test("配置文件解析", () => {
  console.info(`元数据解析完成：\n${JSON.stringify(Metadata, null, 2)}`);

  const parameters: string[] = [
    "ExpRate=2",
    "DayTimeSpeedRate=1.5",
    'ServerName="Avalon PalWorld Server"',
    "DropItemMaxNum=5000",
    "DeathPenalty=Item",
    "bUseAuth=False",
  ];
  const content = `/Script/Pal.PalGameWorldSettings]
OptionSettings=(${parameters.join(",")})`;
  const config = parse(content);
  console.info(`自定义配置文件解析完成：\n${JSON.stringify(config, null, 2)}`);
});

test("配置文件序列化", () => {
  const config: Configuration = {
    // float
    ExpRate: {
      name: "ExpRate",
      type: Float,
      value: 1.5,
    },
    NightTimeSpeedRate: {
      name: "NightTimeSpeedRate",
      type: Float,
      value: 1, // 同默认值
    },
    // string
    ServerName: {
      name: "ServerName",
      type: String,
      value: "Avalon PalWorld Server",
    },
    BanListURL: {
      name: "BanListURL",
      type: String,
      value: "https://api.palworldgame.com/api/banlist.txt", // 同默认值
    },
    // integer
    DropItemMaxNum: {
      name: "DropItemMaxNum",
      type: Integer,
      value: 5000,
    },
    PublicPort: {
      name: "PublicPort",
      type: Integer,
      value: 8211, // 同默认值
    },
    // enum
    DeathPenalty: {
      name: "DeathPenalty",
      type: Enum,
      value: "None",
    },
    Difficulty: {
      name: "Difficulty",
      type: Enum,
      value: "None", // 同默认值
    },
    // boolean
    bUseAuth: {
      name: "bUseAuth",
      type: Boolean,
      value: false,
    },
    bEnableInvaderEnemy: {
      name: "bEnableInvaderEnemy",
      type: Boolean,
      value: true, // 同默认值
    },
  };

  console.info(`自定义配置文件序列化完成（差异）：\n${stringify(config)}`);
  console.info(
    `自定义配置文件序列化完成（所有）：\n${stringify(config, true)}`
  );
});
