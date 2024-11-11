import Image from 'next/image';
import React from 'react';

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  mealPlan: {
    name: string;
    BasePrice: number;
    calories: number;
    description: string;
    image: string;
  };
}

const MealPlanViewModal: React.FC<ViewModalProps> = ({ isOpen, onClose, mealPlan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white  p-6 md:p-8 rounded-lg max-w-4xl w-full mx-4 md:mx-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{mealPlan.name}</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative">
            <img
              className="object-cover w-full  md:h-100 h-50 rounded-lg shadow-lg"
              src={mealPlan.image}
              alt="Meal Plan Image"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Base Price</h4>
                <p className="text-xl text-gray-900">${mealPlan.BasePrice.toFixed(2)}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Calories</h4>
                <p className="text-xl text-gray-900">{mealPlan.calories} kcal</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Description</h4>
                <p className="text-gray-800">{mealPlan.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button onClick={onClose} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default MealPlanViewModal;
