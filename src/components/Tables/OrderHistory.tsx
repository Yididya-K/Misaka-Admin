"use client"
import React, { useState } from 'react';


// Define the structure for the order data
interface Order {
  id: number;
  date:String;
  meal_plan: string;
  meal_type: string;
  duration: {
    start_date: string;
    end_date: string;
    total_days: number;
  };
  status:string;
  price:number;
  meals: Meal[];
}

interface Meal {
  date: string;
  section: string;
  meal_name: string;
  location: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  protein: number;
}

// Dummy orders data for demonstration
const ordersData: Order[] = [
  {
    id: 1,
    meal_plan: 'Muscle Gain',
    meal_type: '2 Main Meals with Snack',
    duration: {
      start_date: '2024-11-01',
      end_date: '2024-11-07',
      total_days: 7,
    },
    status: "Pending",
    price:2340,
    date:"23-02-16",
    meals: [
      {
        date: '2024-11-01',
        section: 'Breakfast',
        meal_name: 'Oatmeal with Berries',
        location: 'Home',
        calories: 300,
        carbohydrates: 45,
        fat: 5,
        fiber: 8,
        protein: 10,
      }
    
      // Add more meals as needed
    ],
  },
  {
    id: 2,
    meal_plan: 'Weight loss',
    meal_type: '2 Main Meals with Snack',
    duration: {
      start_date: '2024-11-01',
      end_date: '2024-11-07',
      total_days: 7,
    },
    status:  "delivered",
    price:2340,
    date:"23-02-16",
    meals: [
      {
        date: '2024-11-01',
        section: 'Breakfast',
        meal_name: 'Oatmeal with Berries',
        location: 'Home',
        calories: 300,
        carbohydrates: 45,
        fat: 5,
        fiber: 8,
        protein: 10,
      }
    
      // Add more meals as needed
    ],
  },
  // Add more orders as needed
];

const OrdersCardList: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4 border-b-2">
            <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Order Date
              </th>
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Meal Plan
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Meal type
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Duration
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
             
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
             {ordersData.map((order) => (
              <tr key={order.id}>
                 <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                   {order.date}
                  </h5>
                
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                   {order.meal_plan}
                  </h5>
                
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                 {order.meal_type}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {order.duration.start_date} - {order.duration.end_date}
                  </p>
                </td>
               
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      order.status === "delivered"
                        ? "bg-success text-success"
                        : order.status === "on_route"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {order.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary"   onClick={() => handleViewDetails(order)}>
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

      {/* Modal for viewing order details */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-2">{selectedOrder.meal_plan} Details</h2>
            <p>Meal Type: {selectedOrder.meal_type}</p>
            <p>Duration: {selectedOrder.duration.start_date} - {selectedOrder.duration.end_date} ({selectedOrder.duration.total_days} days)</p>
            <p>Price: {selectedOrder.price} Birr</p>
            {/* Table for detailed meal information */}
            <table className="mt-4 w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Section</th>
                  <th className="border px-4 py-2">Meal Name</th>
                  <th className="border px-4 py-2">Location</th>
                  <th className="border px-4 py-2">Calories</th>
                  <th className="border px-4 py-2">Carbs</th>
                  <th className="border px-4 py-2">Fat</th>
                  <th className="border px-4 py-2">Fiber</th>
                  <th className="border px-4 py-2">Protein</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.meals.map((meal, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{meal.date}</td>
                    <td className="border px-4 py-2">{meal.section}</td>
                    <td className="border px-4 py-2">{meal.meal_name}</td>
                    <td className="border px-4 py-2">{meal.location}</td>
                    <td className="border px-4 py-2">{meal.calories}</td>
                    <td className="border px-4 py-2">{meal.carbohydrates}</td>
                    <td className="border px-4 py-2">{meal.fat}</td>
                    <td className="border px-4 py-2">{meal.fiber}</td>
                    <td className="border px-4 py-2">{meal.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersCardList;
