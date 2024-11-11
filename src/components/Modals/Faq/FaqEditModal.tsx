import React, { useState, useEffect } from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  Faq: {
    question: string;
    answer: string;
  };
  onEdit: (updatedData: {
    question: string;
    answer: string;
  }) => void;
}

const FaqEditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onEdit, Faq }) => {
  const [formData, setFormData] = useState(Faq);

  // Synchronize formData state with Faq prop
  useEffect(() => {
    setFormData(Faq);
  }, [Faq]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onEdit({ ...formData });
    onClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto sm:ml-30 ">
      <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-6xl w-full mx-4 md:mx-8 lg:mx-12 overflow-hidden mt-44 sm:mt-30">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-full">
                <label htmlFor="question" className="text-sm font-medium text-gray-900 block mb-2">Question</label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  rows={2}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-4"
                  placeholder="Question"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label htmlFor="answer" className="text-sm font-medium text-gray-900 block mb-2">Answer</label>
                <textarea
                  id="answer"
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  rows={6}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-4"
                  placeholder="Answer"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button onClick={handleSubmit} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqEditModal;
