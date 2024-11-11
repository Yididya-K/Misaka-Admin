import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  Meal: {
    name: string;
    category: string[];
    image: string;
    plan: string[];
    ingredient: string[];
    allergens: string[];
    calories: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    protein: number;
  };
}


const MealDeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete,Meal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

 
        <div
            className="w-full py-5 p-4 bg-white dark:bg-slate-900 dark:border dark:border-slate-100 cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">

            <button type="button" onClick={onClose} className="absolute top-2 right-2 rtl:right-auto rtl:left-2">
                <svg className="h-4 w-4 cursor-pointer text-gray-400"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span className="sr-only">
                    Close
                </span>
            </button>



            <div className="space-y-2 p-2">
                <div className="p-4 space-y-2 text-center dark:text-white">
                    <h2 className="text-xl font-bold tracking-tight" id="page-action.heading">
                        Delete Meal 
                    </h2>

                    <p className="text-gray-500">
                        Are you sure you want to delete <span className='text-red'>{Meal.name}</span>
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                <div aria-hidden="true" className="border-t dark:border-gray-700 px-2"></div>

                <div className="px-6 py-2">
                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                        <button onClick={onClose}
                                className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800">
                                <span className="flex items-center gap-1">
                                    <span className="">
                                        Cancel
                                    </span>
                                </span>
                            </button>

                        <button onClick={onDelete}
                                className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none  min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red hover:bg-danger focus:bg-red-700 focus:ring-offset-red-700">

                                <span className="flex items-center gap-1">
                                    <span className="">
                                        Delete
                                    </span>
                                </span>

                            </button>
                    </div>
                </div>
            </div>


       
  </div>
  </div>
  
  );
};

export default MealDeleteModal;
