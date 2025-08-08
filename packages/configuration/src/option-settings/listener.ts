import { OptionSettingsListener as AbstractListener } from "@/parser/OptionSettingsListener";
import type {
  OptionSettingsContext,
  PropertyContext,
} from "@/parser/OptionSettingsParser";

import type { Property, ValueType } from "./property";
import { PropertyType } from "./property";

export class Listener extends AbstractListener {
  propertyList: Property[] = [];

  enterOptionSettings = (ctx: OptionSettingsContext) => {
    this.propertyList = [];
  };

  exitProperty = (ctx: PropertyContext) => {
    const key = ctx.key().getText();
    const valueCtx = ctx.value();
    const valueText = valueCtx.getText();
    let value: ValueType = valueText;
    let type: PropertyType = PropertyType.Unknown;
    const listCtx = valueCtx.list();

    if (valueCtx.enumText() !== null) {
      type = PropertyType.Enum;
      value = valueText;
    } else if (valueCtx.quotedText() !== null) {
      type = PropertyType.String;
      value = valueText.substring(1, valueText.length - 1);
    } else if (valueCtx.bool() !== null) {
      type = PropertyType.Boolean;
      value = valueText === "True";
    } else if (valueCtx.numeric() !== null) {
      if (valueText.indexOf(".") > 0) {
        type = PropertyType.Decimal;
        value = Number.parseFloat(valueText);
      } else {
        type = PropertyType.Integer;
        value = Number.parseInt(valueText);
      }
    } else if (listCtx !== null) {
      type = PropertyType.Enums;
      const values: string[] = [];
      for (const element of listCtx.enumText()) {
        values.push(element.getText());
      }
      value = values;
    }

    this.propertyList.push({
      key,
      type,
      value,
    });
  };
}
