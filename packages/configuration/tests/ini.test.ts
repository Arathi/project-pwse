import { describe, expect, test } from "vitest";
import ini from "ini";

import { ParamPattern } from "../src/configuration-file";
import { Parameter, ParameterType } from "../src";

const content = `
; This configuration file is a sample of the default server settings.
; Changes to this file will NOT be reflected on the server.
; To change the server settings, modify Pal/Saved/Config/WindowsServer/PalWorldSettings.ini.
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,RandomizerType=None,RandomizerSeed="",bIsRandomizerPalLevelRandom=False,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectHpRate=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,BaseCampMaxNumInGuild=4,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,AutoSaveSpan=30.000000,bIsMultiplay=False,bIsPvP=False,bHardcore=False,bPalLost=False,bCharacterRecreateInHardcore=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="Default Palworld Server",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",RESTAPIEnabled=False,RESTAPIPort=8212,bShowPlayerList=False,ChatPostLimitPerMinute=30,CrossplayPlatforms=(Steam,Xbox,PS5,Mac),bIsUseBackupSaveData=True,LogFormatType=Text,SupplyDropSpan=180,EnablePredatorBossPal=True,MaxBuildingLimitNum=0,ServerReplicatePawnCullDistance=15000.000000,bAllowGlobalPalboxExport=True,bAllowGlobalPalboxImport=False,EquipmentDurabilityDamageRate=1.000000,ItemContainerForceMarkDirtyInterval=1.000000)
`;

const REGEX_KEY = /([A-Za-z][0-9A-Za-z_]+)=/;
const REGEX_PARAM =
  /([A-Za-z][0-9A-Za-z_]+)=(\((.*)\)|([A-Za-z][0-9A-Za-z_]+)|"(.*?)"|(\d+(\.\d+)?))/;

function parse(content: string) {
  const lines = content.split("\n");

  for (let line of lines) {
    line = line.trim();

    if (line.startsWith(";")) {
      continue;
    }

    const matches = REGEX_KEY.exec(line);
    if (matches === null) {
      continue;
    }

    const key = matches[1];
    // console.info("key = ", key);
    parsePair(line);
  }
}

// function parseParameter(remains: string): Parameter | null {
//   let index = 0;
//   // let key: string | undefined;
//   const param: Parameter = {
//     type: ParameterType.Unknown,
//     name: "",
//     value: 0,
//   };
//   do {
//     const matches = REGEX_KEY.exec(remains);
//     if (matches === null) {
//       // 找不到 key=
//       return null;
//     }
//     param.name = matches[1];
//
//   } while (index >= remains.length);
//   return param;
// }

function parsePair(input: string) {
  const matches = REGEX_PARAM.exec(input);
  if (matches === null) {
    return;
  }

  const [full, key, value, group, enums, text, decimal] = matches;
  // console.info("full = ", full);
  // console.info("key = ", key);
  // console.info("value = ", value);
  // console.info("group = ", group);
  // console.info("enum = ", group);

  if (group !== undefined) {
    parseGroup(group);
  }
}

function parseGroup(input: string) {
  let remains = input;
  while (true) {
    const matches = REGEX_PARAM.exec(remains);
    if (matches === null) {
      break;
    }

    const [full, key, value, group, enums, text, decimal] = matches;
    if (group !== undefined) {
      console.info(`${key}: Array = [${group}]`);
    } else if (enums !== undefined) {
      console.info(`${key}: Enum = ${enums}`);
    } else if (text !== undefined) {
      console.info(`${key}: Text = "${text}"`);
    } else if (decimal !== undefined) {
      console.info(`${key}: Decimal = ${decimal}`);
    }

    remains = remains.substring(matches.index + full.length);
    // console.info("remains =", remains);
  }
}

describe("配置文件测试", () => {
  test("反序列化测试", () => {
    // console.info("正则表达式：", ParamPattern);
    // const key = new RegExp();
    parse(content);
  });
});
