

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import MealPlanCard from "../../components/Tables/MealPlanCard";

import MealPlanSubPageHeader from "@/components/MealPLanSubPageHeader";
// import ToastDanger from "@/components/Toasts/ToastDanger";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "Misaka: Meal Delivery",
  description: "This is Misaka meal delivery app",
};

const style = {
  enableBackground: "new 0 0 32 32",
} as React.CSSProperties;

const mealPlans = [
  {
    name: "Low Cal",
    BasePrice: 50,
    calories: 400,
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi quo deleniti debitis, atque qui fuga dolores voluptas sint, ducimus aliquam nostrum mollitia laborum corrupti hic laudantium at tempora rem.",
    image:
      "https://images.unsplash.com/photo-1654171569419-68baf12fc6cd?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    name: "Muscle Gain",
    BasePrice: 50,
    calories: 400,
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi quo deleniti debitis, atque qui fuga dolores voluptas sint, ducimus aliquam nostrum mollitia laborum corrupti hic laudantium at tempora rem.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
  },
  {
    name: "Vegetrerian",
    BasePrice: 50,
    calories: 400,
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi quo deleniti debitis, atque qui fuga dolores voluptas sint, ducimus aliquam nostrum mollitia laborum corrupti hic laudantium at tempora rem.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    name: "Lean",
    BasePrice: 50,
    calories: 400,
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi quo deleniti debitis, atque qui fuga dolores voluptas sint, ducimus aliquam nostrum mollitia laborum corrupti hic laudantium at tempora rem.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  },
  {
    name: "Low cal",
    BasePrice: 50,
    calories: 400,
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quasi quo deleniti debitis, atque qui fuga dolores voluptas sint, ducimus aliquam nostrum mollitia laborum corrupti hic laudantium at tempora rem.",
    image:
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  // Add other meal plans here
];


const MealPlansPage: React.FC = () => (
  <DefaultLayout>
    <div className="mx-auto max-w-screen-xl ">
    <ToastContainer position="top-right" />
      <MealPlanSubPageHeader/>
      <div className="mb-12 mx-auto flex flex-wrap">
        {mealPlans.map((mealPlan, index) => (
          <MealPlanCard key={index} mealPlan={mealPlan} />
        ))}
      </div>
    
    </div>
   
  </DefaultLayout>
);

export default MealPlansPage;
