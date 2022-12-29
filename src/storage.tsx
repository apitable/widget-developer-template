import { Button, TextInput } from "@apitable/components";
import { useCloudStorage } from "@apitable/widget-sdk";
import React from "react";

export const Storage: React.FC = () => {
  const [counter, setCounter] = useCloudStorage("counter", 0);
  const [text, setText] = useCloudStorage("text", "");

  return (
    <div>
      <div style={{ flexGrow: 1 }}>
        <h3>Widget data Storage and collaboration</h3>
        <p>
          Simple counter, open multiple windows, values can be persisted and
          coordinated in real time
        </p>
        <p>
          Counter: {counter}
          <Button size="small" onClick={() => setCounter(counter + 1)}>
            +
          </Button>
          <Button size="small" onClick={() => setCounter(counter - 1)}>
            -
          </Button>
        </p>
        <div>
          Text:{" "}
          <TextInput onChange={(e) => setText(e.target.value)} value={text} />
        </div>
      </div>
    </div>
  );
};
