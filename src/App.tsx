import "./styles.css";
import React from "react";
import Editor, { deserialize, serialize } from "components/editor";
import { exampleArticle } from "./mdx";
import Flex from "components/flex";
import Box from "components/box";
import { DepthProvider } from "components/editor/depthContext";

export default function App() {
  const [markdown, setMarkdown] = React.useState(exampleArticle);
  const handleChange = React.useCallback((nextValue: any[]) => {
    // serialize slate state to a markdown string
    setMarkdown(nextValue.map((v) => serialize(v)).join(""));
  }, []);

  const value = React.useMemo(() => deserialize(exampleArticle), []);

  return (
    <div className="App">
      <Flex
        direction="row"
        align="stretch"
        gap="4"
        css={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <Box
          css={{
            flex: "1 0 0%"
          }}
        >
          <DepthProvider>
            <Editor value={value} onChange={(value) => handleChange(value)} />
          </DepthProvider>
        </Box>
        <Box
          css={{
            whiteSpace: "pre-wrap",
            flex: "1 0 0%"
          }}
        >
          {markdown}
        </Box>
      </Flex>
    </div>
  );
}
