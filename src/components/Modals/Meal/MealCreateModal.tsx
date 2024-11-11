
import React, { useState } from "react";
import MultiSelect from "@/components/FormElements/MultiSelect";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newData: Meal) => void;
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
interface Option {
  value: string;
  text: string;
  selected: boolean;
}

const MealCreateModal: React.FC<CreateModalProps> = ({
  isOpen,
  onClose,
  onCreate,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState<string>("");
  const [allergenInput, setAllergenInput] = useState<string>("");

  const mealPlanOptions: Option[] = [
    { value: "alacarte", text: "À la carte",selected:false },
    { value: "Muscle Gain", text: "Muscle Gain",selected:false  },
    { value: "Weight loss", text: "Weight loss",selected:false  },
  ];

  const mealTimeOptions: Option[] = [
    { value: "breakfast", text: "Breakfast" ,selected:false },
    { value: "lunch", text: "Lunch" ,selected:false },
    { value: "dinner", text: "Dinner",selected:false  },
    { value: "Snack", text: "Snack",selected:false  },
    { value: "pre workout", text: "Pre Workout",selected:false  },
    { value: "post workout", text: "Post Workout",selected:false  },
  ];

  const handleToggle = (value: string, selectedItems: string[], setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleMealTimeChange = (selectedValues: string[]) => {
    setSelectedCategories(selectedValues);
  };

  const handlePlanChange = (selectedValues: string[]) => {
    setSelectedPlans(selectedValues);
  };


  const [formData, setFormData] = useState<Meal>({
    name: "",
    category: [],
    calories: 0,
    image: "",
    plan: [],
    ingredient: [],
    allergens: [],
    carbohydrates: 0,
    fat: 0,
    fiber: 0,
    protein: 0,
  });

  const [previewImage, setPreviewImage] = useState<string>(
    "https://placehold.co/800?text=your+image&font=roboto"
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSend: Meal = {
      ...formData,
      name: formData.name,
      category: selectedCategories,  // Multi-selected categories
      plan: selectedPlans,           // Multi-selected meal plans
      image: previewImage,
      ingredient: ingredientInput.split(",").map((item) => item.trim()), // Split and trim ingredients
      allergens: allergenInput.split(",").map((item) => item.trim()),    // Split and trim allergens
      calories: formData.calories,
      carbohydrates: formData.carbohydrates,
      fat: formData.fat,
      fiber: formData.fiber,
      protein: formData.protein
    };

    // Log the entire data object for inspection
    console.log("Data to send to backend:", dataToSend);

    onCreate(dataToSend); 
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 sm:ml-40 ">
      <div className="mx-4 mt-44 w-full max-w-6xl overflow-hidden rounded-lg bg-white p-6 dark:bg-slate-700 sm:mt-30 md:mx-8 lg:mx-12">
        <div className="flex items-start justify-between rounded-t border-b p-5">
          <h3 className="text-xl font-semibold">New Meal</h3>
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

        <form onSubmit={handleSubmit} className="max-h-[70vh] space-y-6 overflow-y-auto p-6">
          <div className="grid grid-cols-8 gap-6">
            <div className="col-span-8 sm:col-span-4">
                <label
                  htmlFor="name"
                  className="text-gray-900 mb-2 block text-sm font-medium"
                >
                  Meal Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-300 text-gray-900 block w-full rounded-lg border p-2.5 shadow-sm focus:border-green-600 focus:ring-green-600 sm:text-sm"
                  placeholder="Meal plan name"
                />
              </div>

              <div className="col-span-8 sm:col-span-4">
              <MultiSelect
                id="categories"
                options={mealPlanOptions}
                label="Select Meal Plans"
                selectedValues={handleToggle}
                onChange={handlePlanChange}
              />
            </div>


            <div className="col-span-8 sm:col-span-4">
              <MultiSelect
                id="mealTimes"
                options={mealTimeOptions}
                label="Select Meal Times"
                selectedValues={selectedPlans}
                onChange={handleMealTimeChange}
              />
            </div>
            
            <div className="col-span-8 sm:col-span-4">
              <label htmlFor="allergens" className="text-gray-900 mb-2 block text-sm font-medium">
                Allergens (comma-separated)
              </label>
              <input
                type="text"
                value={allergenInput}
                onChange={(e) => setAllergenInput(e.target.value)}
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
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
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
            Create
          </button>
              </div>
            

          </div>

        </form>
      </div>
    </div>
  );
};

export default MealCreateModal;