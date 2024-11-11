import React, { useState, useEffect } from 'react';
import MultiSelect from '@/components/FormElements/MultiSelect';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedData:Meal) => void;
  Meal :{
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

interface Meal {
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
}


const MealEditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onUpdate, Meal }) => {
  const [formData, setFormData] = useState(Meal);
  const [previewImage, setPreviewImage] = useState<string>(Meal.image);

  useEffect(() => {
    setFormData(Meal);
    setPreviewImage(Meal.image);
  }, [Meal]);

  if (!isOpen) return null;

  const mealPlanOptions = [
    {value: "alacarte", text: "À la carte", selected: Meal.plan.includes('Lean') },
    { value: 'Muscle Gain', text: 'Muscle Gain', selected: Meal.plan.includes('Muscle Gain') },
    { value: "Weight loss", text: "Weight loss", selected: Meal.plan.includes('Vegetarian') },
   
  ];


  const mealTimeOptions = [
    { value: 'breakfast', text: 'Breakfast', selected: Meal.category.includes('breakfast') },
    { value: "lunch", text: "Lunch" , selected: Meal.category.includes('lunch') },
    { value: "dinner", text: "Dinner", selected: Meal.category.includes('dinner') },
    { value: 'Snack', text: 'Snack', selected: Meal.category.includes('Snack') },
    { value: 'pre workout', text: 'pre workout', selected: Meal.category.includes('pre workout') },
    { value: 'post workout', text: 'post workout', selected: Meal.category.includes('post workout') },
  ];

  const handleCategoryChange = (selectedValues: string[]) => {
    setFormData((prev) => ({ ...prev, category: selectedValues }));
  };

  const handlePlanChange = (selectedValues: string[]) => {
    setFormData((prev) => ({ ...prev, plan: selectedValues }));
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    onUpdate({ ...formData, image: previewImage });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto sm:ml-30">
      <div className="bg-white dark:bg-slate-700 p-6 rounded-lg max-w-6xl w-full mx-4 md:mx-8 lg:mx-12 overflow-hidden mt-44 sm:mt-30">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit Meal</h3>
          <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
          <form>
            <div className="grid grid-cols-8 gap-6">
              <div className="col-span-8 sm:col-span-4">
                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Meal Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Meal plan name"
                />
              </div>
            
              <div className="col-span-8 sm:col-span-4">
                <MultiSelect
                  id="plans"
                  options={mealPlanOptions}
                  label="Select Meal Plans"
                  onChange={handlePlanChange}
                />
              </div>
            
              <div className="col-span-8 sm:col-span-4">
                <MultiSelect
                  id="categories"
                  options={mealTimeOptions}
                  label="Select Meal Time"
                  onChange={handleCategoryChange}
                />
              </div>
              
              <div className="col-span-8 sm:col-span-4">
              <label htmlFor="allergens" className="text-gray-900 mb-2 block text-sm font-medium">
                Allergens (comma-separated)
              </label>
              <input
                type="text"
                value={formData.allergens}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm sm:text-sm"
                placeholder="e.g., Nuts, Dairy, Soy"
              />
            </div>
            <div className="col-span-8 sm:col-span-4">
              <label htmlFor="allergens" className="text-gray-900 mb-2 block text-sm font-medium">
                Ingredients (comma-separated)
              </label>
              <input
                type="text"
                value={formData.ingredient}
                onChange={handleChange}
                className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm sm:text-sm"
                placeholder="e.g., Nuts, Dairy, Soy"
              />
            </div>
            <div className="col-span-8 sm:col-span-4">
                <label
                  htmlFor="calories"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >
                  Calories
                </label>
                <input
                  type="number"
                  name="calories"
                  id="calories"
                  value={formData.calories}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="Calories"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="carbohydrates"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >carbohydrates</label>
                <input
                  type="number"
                  name="carbohydrates"
                  id="carbohydrates"
                  value={formData.carbohydrates}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="carbohydrates"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="calories"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >
                  protein
                </label>
                <input
                  type="number"
                  name="protein"
                  id="protein"
                  value={formData.protein}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="protein"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="fat"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >
                  Fat
                </label>
                <input
                  type="number"
                  name="fat"
                  id="fat"
                  value={formData.fat}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="fat"
                />
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="calories"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >
                  Fiber
                </label>
                <input
                  type="number"
                  name="fiber"
                  id="fiber"
                  value={formData.fiber}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="fiber"
                />
              </div>
              <div className="col-span-6 mt-5 sm:col-span-3">
                <label className="block">
                  <span className="sr-only">Choose Meal Plan Image</span></label>
                  <input
            
                    type="file"
                    onChange={loadFile}
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:rounded-full file:border-0
                      file:bg-orange-50 file:px-4
                      file:py-2 file:text-sm
                      file:font-semibold file:text-green-700
                      hover:file:bg-orange-100"
                  />
                

                <img
                  id="preview_img"
                  className="ml-30 mt-2 h-40 w-40 rounded-md object-cover p-1 ring-2 ring-green-300"
                  src={previewImage}
                  alt="Meal Plan Image"
                />
                
         
              </div>
              <div className="col-span-6 mt-5 sm:col-span-3">
              <button type="submit" className=" w-2/3 sm:mt-20 rounded-lg bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200">
            Save changes
          </button>
              </div>
            

          </div>

        </form>
      </div>
    </div>
    </div>
  );
};

export default MealEditModal;
