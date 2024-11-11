import React from "react";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  Blog: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    content: string;
  };
}

const BlogViewModal: React.FC<ViewModalProps> = ({ isOpen, onClose, Blog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50  ">
      <div className="mt-10 w-full max-w-6xl rounded-lg bg-white p-6 lg:ml-40  ">
        <div className="flex items-start justify-between rounded-t">
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm"
            data-modal-toggle="product-modal"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="m-10 max-h-screen text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-scroll max-h-150">
            <div className="mx-auto max-w-3xl">
              <div className="py-8">
                <h1 className="mb-2 text-3xl font-bold">{Blog.title}</h1>
                <p className="text-gray-500 text-sm">{Blog.subtitle}</p>
              </div>

              <img
                src={Blog.image}
                alt="Featured image"
                className="mb-8 h-auto w-full"
              />

              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                <p>{Blog.content}</p>
              </div>
            </div>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BlogViewModal;
