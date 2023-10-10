import React from "react";
import { BaseEditor, Editor, Element as SlateElement, Transforms } from "slate";
import { useSlate } from "slate-react";
import { styled } from "stitches.config";

const LIST_TYPES = ["ul_list", "ol_list"];

const isBlockActive = (
  editor: BaseEditor,
  format: string,
  blockType = "type"
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        // @ts-ignore
        n[blockType] === format
    })
  );

  return !!match;
};

const toggleBlock = (editor: BaseEditor, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n: any) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      // @ts-ignore
      LIST_TYPES.includes(n.type),
    split: true
  });
  let newProperties: Partial<SlateElement>;
  newProperties = {
    // @ts-ignore
    type: isActive ? "paragraph" : isList ? "list_item" : format
  };
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const isMarkActive = (editor: BaseEditor, format: string) => {
  const marks = Editor.marks(editor);
  // @ts-ignore
  return marks ? marks[format] === true : false;
};

const StyledButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  background: "transparent",
  border: "0px solid transparent",
  padding: "$2",
  aspectRatio: "1/1",
  cursor: "pointer",
  borderRadius: "$sm",
  "& > div": {
    display: "flex"
  },
  "&:hover": {
    background: "$gray-100"
  },
  variants: {
    active: {
      true: {
        color: "$gray-900"
      },
      false: {
        color: "$gray-500"
      }
    }
  }
});

export const BlockButton = ({
  format,
  icon
}: {
  format: string;
  icon: React.ReactNode;
}) => {
  const editor = useSlate();
  return (
    <StyledButton
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </StyledButton>
  );
};

const toggleMark = (editor: BaseEditor, format: string) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const MarkButton = ({
  format,
  icon
}: {
  format: string;
  icon: React.ReactNode;
}) => {
  const editor = useSlate();
  return (
    <StyledButton
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <div className="icon">{icon}</div>
    </StyledButton>
  );
};
