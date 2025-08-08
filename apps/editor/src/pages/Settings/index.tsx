import Editor from "@monaco-editor/react";
import { Button, Slider, Switch, Select } from "@pwse/palworld-ui";

import "./index.less";

const Settings = () => {
  return (
    <>
      <div className="mask" />
      <div className="settings-page">
        <Button>打开</Button>
        <Slider />
        <Select
          options={[
            { value: 30, label: "30秒" },
            { value: 60, label: "1分钟" },
            { value: 300, label: "5分钟" },
          ]}
        />
        <Switch />
        <Editor language="ini" theme="vs-dark" value={""} />
      </div>
    </>
  );
};

export default Settings;
