"use client"

import React, { useState } from 'react';
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState } from "lexical";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newData: string) => void;
}

const BlogCreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [previewImage, setPreviewImage] = useState("https://placehold.co/800?text=your+blog+image&font=roboto");

  const initialConfig = {
    namespace: "BlogEditor", // Adding a unique namespace string
    theme: {},
    onError: (error: Error) => {
      console.error("Lexical Error:", error);
    },
  };

  if (!isOpen) return null;

  const handleContentChange = (editorState: EditorState) => {
    const json = JSON.stringify(editorState);
    onCreate(json);
  };

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  const ErrorBoundary = ({ children }: { children: React.ReactNode }) => (
    <div className="error-boundary">
      {children || <p>Something went wrong with the editor.</p>}
    </div>
  );
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 sm:ml-40">
      <div className="mx-4 mt-44 w-full max-w-6xl overflow-hidden rounded-lg bg-white p-6 dark:bg-slate-700 sm:mt-30 md:mx-8 lg:mx-12">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">New Blog</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="blog-title" className="text-sm font-medium text-gray-900 block mb-2">Blog Title</label>
                <input type="text" name="blog-title" id="blog-title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="title" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="blog-subtitle" className="text-sm font-medium text-gray-900 block mb-2">Blog Subtitle</label>
                <input type="text" name="blog-subtitle" id="blog-subtitle" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" placeholder="subtitle" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block">
                  <span className="sr-only">Choose Blog photo</span>
                  <input
                    type="file"
                    onChange={loadFile}
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-orange-50 file:text-green-700
                      hover:file:bg-orange-100"
                  />
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <img
                  id="preview_img"
                  className="object-cover w-40 h-40 p-1 rounded-md ring-2 ring-green-300"
                  src={previewImage}
                  alt="Blog Picture"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="blog-content" className="text-sm font-medium text-gray-900 block mb-2">Blog Content</label>
                <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin
  contentEditable={<ContentEditable className="border p-4 rounded-md bg-gray-50" />}
  placeholder={<div className="text-gray-500">Write your blog content here...</div>}
  ErrorBoundary={ErrorBoundary} // Add the ErrorBoundary prop here
/>

                  <OnChangePlugin onChange={handleContentChange} />
                  <HistoryPlugin />
                </LexicalComposer>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button onClick={onClose} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Create</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCreateModal;
