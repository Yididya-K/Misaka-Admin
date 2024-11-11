import Image from "next/image";
import React from "react";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
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

const MealViewModal: React.FC<ViewModalProps> = ({ isOpen, onClose, Meal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-4 w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg md:mx-8 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-gray-900 text-xl font-bold md:text-2xl">
            {Meal.name}
          </h3>
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative">
            <img
              className="h-50 w-full rounded-lg object-cover shadow-lg md:h-100"
              src={Meal.image}
              alt="Meal Plan Image"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h4 className="text-gray-700 text-lg font-semibold">
                  Meal Category
                </h4>
                <div className="flex items-center justify-start space-x-2">
                  {Meal.category.map((cat, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-between space-x-1 rounded-md bg-green-100 px-2 py-0.5 text-sm text-green-800"
                    >
                      <svg
                        className="h-4 w-4 cursor-pointer text-green-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div className="select-none">{cat}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-gray-700 text-lg font-semibold">
                  Calories
                </h4>
                <p className="text-gray-900 text-xl">{Meal.calories} kcal</p>
              </div>
              <div className="mb-4">
                <h4 className="text-gray-700 text-lg font-semibold">Plan</h4>
                <div className="flex items-center justify-start space-x-2">
                  {Meal.plan.map((p, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-between space-x-1 rounded-md bg-blue-100 px-2 py-0.5 text-sm text-blue-800"
                    >
                      <svg
                        className="h-4 w-4 cursor-pointer text-blue-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div className="select-none">{p}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-gray-700 text-lg font-semibold">Available Days</h4>
                {/* <div className="flex items-center justify-start space-x-2">
                  {Meal.allergens.map((d, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-between space-x-1 rounded-md bg-yellow-100 px-2 py-0.5 text-sm text-yellow-800"
                    >
                      <svg
                        className="h-4 w-4 cursor-pointer text-yellow-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div className="select-none">{d}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealViewModal;
