import MealCard from '@/components/Cards/MealCard';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import MealSubPageHeader from '@/components/MealSubPageHeader';
import React from 'react'
import { ToastContainer } from 'react-toastify'

const Meals =[
  {
      "name": "Grilled Chicken Salad",
      "category": ["lunch", "dinner"],
      "image": "https://images.unsplash.com/photo-1654171569419-68baf12fc6cd?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "plan": ["Muscle Gain", "Weight loss"],
      "ingredient": ["chicken breast", "mixed greens", "cherry tomatoes", "cucumber", "olive oil", "lemon juice"],
      "allergens": ["none"],
      "calories": 350,
      "carbohydrates": 20,
      "fat": 15,
      "fiber": 5,
      "protein": 30
  },
  {
      "name": "Vegetarian Burrito",
      "category": ["lunch", "dinner"],
      "image": "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
      "plan": ["Weight loss"],
      "ingredient": ["tortilla", "black beans", "rice", "avocado", "salsa", "lettuce"],
      "allergens": ["gluten"],
      "calories": 400,
      "carbohydrates": 60,
      "fat": 10,
      "fiber": 12,
      "protein": 15
  },
  {
      "name": "Protein Pancakes",
      "category": ["breakfast"],
      "image": "https://images.unsplash.com/photo-1587900437942-8758241767ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      "plan": ["Muscle Gain"],
      "ingredient": ["oats", "egg whites", "banana", "protein powder", "blueberries"],
      "allergens": ["eggs"],
      "calories": 450,
      "carbohydrates": 50,
      "fat": 10,
      "fiber": 8,
      "protein": 35
  },
  {
      "name": "Quinoa Salad",
      "category": ["lunch", "dinner"],
      "image": "https://images.unsplash.com/photo-1591278952693-6d759bbbc6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      "plan": ["Weight loss"],
      "ingredient": ["quinoa", "cherry tomatoes", "cucumber", "feta cheese", "olive oil", "lemon juice"],
      "allergens": ["dairy"],
      "calories": 300,
      "carbohydrates": 35,
      "fat": 12,
      "fiber": 7,
      "protein": 10
  },
  {
      "name": "Beef Stir Fry",
      "category": ["dinner"],
      "image": "https://images.unsplash.com/photo-1591745952765-071aa8677b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "plan": ["Muscle Gain"],
      "ingredient": ["beef strips", "bell peppers", "broccoli", "soy sauce", "ginger", "garlic"],
      "allergens": ["soy"],
      "calories": 500,
      "carbohydrates": 25,
      "fat": 20,
      "fiber": 5,
      "protein": 40
  },
  {
      "name": "Quinoa Salad",
      "category": ["lunch", "dinner"],
      "image": "https://images.unsplash.com/photo-1591278952693-6d759bbbc6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      "plan": ["Weight loss"],
      "ingredient": ["quinoa", "cherry tomatoes", "cucumber", "feta cheese", "olive oil", "lemon juice"],
      "allergens": ["dairy"],
      "calories": 300,
      "carbohydrates": 35,
      "fat": 12,
      "fiber": 7,
      "protein": 10
  },
  {
      "name": "Beef Stir Fry",
      "category": ["dinner"],
      "image": "https://images.unsplash.com/photo-1591745952765-071aa8677b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "plan": ["Muscle Gain"],
      "ingredient": ["beef strips", "bell peppers", "broccoli", "soy sauce", "ginger", "garlic"],
      "allergens": ["soy"],
      "calories": 500,
      "carbohydrates": 25,
      "fat": 20,
      "fiber": 5,
      "protein": 40
  }
];
  


const MealsPage: React.FC = () => (
    <DefaultLayout>
      <div className="mx-auto max-w-screen-xl ">
      <ToastContainer position="top-right" />
        <MealSubPageHeader/>
        <div className=" mx-auto flex flex-wrap">
        <section id="meals"
    className="w-full mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 justify-items-start justify-center gap-x-6 gap-y-6 mt-2 ">
          {Meals.map((Meal, index) => (
            <MealCard key={index} Meal={Meal} />
          ))}
          </section>
        </div>
      
      </div>
     
    </DefaultLayout>
);
export default MealsPage;