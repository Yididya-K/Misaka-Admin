
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  mealPlan: {
    name: string;
    BasePrice: number;
    calories: number;
    description: string;
    image: string;
  };
  onEdit: (updatedData: {
    name: string;
    BasePrice: number;
    calories: number;
    description: string;
    image: string;
  }) => void;
}

const MealPlanEditModal: React.FC<EditModalProps> = ({ isOpen, onClose, mealPlan, onEdit }) => {
  const [formData, setFormData] = useState(mealPlan);
  const [previewImage, setPreviewImage] = useState(mealPlan.image || "https://placehold.co/800?text=your+image&font=roboto");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onEdit(formData);
    onClose();
    toast.success('Meal plan updated successfully!');
  };

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto sm:ml-30 ">
      <ToastContainer />
      <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-6xl w-full mx-4 md:mx-8 lg:mx-12 overflow-hidden mt-44 sm:mt-30">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Meal Plan</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Meal Plan Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" 
                  placeholder="Meal Plan Name" 
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="BasePrice" className="text-sm font-medium text-gray-900 block mb-2">Base Price</label>
                <input 
                  type="number" 
                  name="BasePrice" 
                  id="BasePrice" 
                  value={formData.BasePrice} 
                  onChange={handleInputChange} 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" 
                  placeholder="Base Price" 
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="calories" className="text-sm font-medium text-gray-900 block mb-2">Calories</label>
                <input 
                  type="number" 
                  name="calories" 
                  id="calories" 
                  value={formData.calories} 
                  onChange={handleInputChange} 
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" 
                  placeholder="Calories" 
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block">
                  <span className="sr-only">Choose Meal Plan Image</span>
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
            
                <img
                  id="preview_img"
                  className="object-cover w-40 h-40 p-1 rounded-md ring-2 ring-green-300 ml-30"
                  src={previewImage}
                  alt="Meal Plan Image"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  rows={6} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-4" 
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button onClick={handleSubmit} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default MealPlanEditModal;