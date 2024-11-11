// LexicalEditor.js
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const editorConfig = {
    theme: {},
    onError: (error) => {
        console.error('Lexical Error:', error);
    }
};

const EditorPlaceholder = () => <div className="text-gray-400">Enter your blog content...</div>;

const LexicalEditor = ({ setFormData }) => {
    const [editor] = useLexicalComposerContext();

    // Handle editor content changes
    editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
            const content = editor.getEditorState().toJSON();
            setFormData(JSON.stringify(content));
        });
    });

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <RichTextPlugin
                contentEditable={<ContentEditable className="bg-gray-50 border border-gray-300 rounded-lg p-4 w-full h-48" />}
                placeholder={<EditorPlaceholder />}
                ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
        </LexicalComposer>
    );
};

export default LexicalEditor;
