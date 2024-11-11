// components/Toolbar.tsx

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { FC } from "react";

const Toolbar: FC = () => {
  const [editor] = useLexicalComposerContext();

  const formatText = (formatType: string) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  const formatBlock = (blockType: string) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, blockType);
  };

  return (
    <div className="toolbar flex space-x-2 p-2 border-b border-gray-300 bg-gray-100">
      <button onClick={() => formatBlock("left")} className="px-2 py-1">Left Align</button>
      <button onClick={() => formatBlock("center")} className="px-2 py-1">Center Align</button>
      <button onClick={() => formatBlock("right")} className="px-2 py-1">Right Align</button>
      <button onClick={() => formatText("bold")} className="px-2 py-1 font-bold">Bold</button>
      <button onClick={() => formatText("italic")} className="px-2 py-1 italic">Italic</button>
      <button onClick={() => formatText("underline")} className="px-2 py-1 underline">Underline</button>
      <button onClick={() => formatBlock("h1")} className="px-2 py-1">H1</button>
      <button onClick={() => formatBlock("h2")} className="px-2 py-1">H2</button>
      <button onClick={() => formatBlock("quote")} className="px-2 py-1">Quote</button>
      <button onClick={() => formatBlock("code")} className="px-2 py-1">Code</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default Toolbar;
