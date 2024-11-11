"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import ViewModal from "@/components/Modals/Blog/BlogViewModal";
import CreateModal from "@/components/Modals/Blog/BlogCreateModal";
import EditModal from "@/components/Modals/Blog/BlogEditModal";
import DeleteModal from "@/components/Modals/Blog/BlogDeleteModal";
import BlogCard from "@/components/Cards/BlogCard";
interface BlogListProps{
  Blog :{
    id: number;
    title: string;
    subtitle: string;
    image: string;
    content: string;
   
};
}

const Blogs = [
  {
    id: 1,
    title: "Healthy Eating: A Guide to Balanced Nutrition",
    subtitle:
      "Discover the essentials of a balanced diet and how it can improve your well-being.",
    image: "https://images.unsplash.com/photo-1497888329096-51c27beff665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYWx8ZW58MHx8MHx8fDA%3D",
    content:
      "Eating a balanced diet is essential for maintaining good health. It involves consuming a variety of foods in the right proportions to provide the body with essential nutrients. ",
  },
  {
    id: 2,
    title: "Top 10 Superfoods You Should Include in Your Diet",
    subtitle:
      "Learn about nutrient-packed superfoods that can boost your energy and vitality.",
    image: "https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
    content:
      "Superfoods are nutrient-rich foods that are especially beneficial for health and well-being. From leafy greens to berries and nuts, these foods are packed with vitamins, minerals, and antioxidants. In this article, we'll explore the top 10 superfoods you should consider adding to your diet, along with their health benefits and delicious ways to enjoy them.",
  },
  {
    id: 3,
    title: "Meal Prep Made Easy: Tips for Planning Your Weekly Meals",
    subtitle:
      "Simplify your weekly routine with effective meal prep strategies.",
    image: "https://images.unsplash.com/photo-1650330144131-84c9ba7661f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    content:
      "Meal prep is a great way to save time and stay on track with your health goals. By preparing meals in advance, you can ensure you have nutritious options ready to go throughout the week. This article offers practical tips on meal planning, shopping lists, and storage techniques to make meal prep a breeze. Whether you're a beginner or a seasoned meal prepper, these tips will help you stay organized and enjoy balanced meals every day.",
  },
];

const Page = () => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);


  const handleCreate = (newData: string) => {
    console.log("Created:", newData);
  };

  const handleEdit = (updatedData: string) => {
    console.log("Edited:", updatedData);
  };

  const handleDelete = () => {
    console.log("Deleted");
  };
  return (
    <DefaultLayout>
      <div>
        <div className="mx-auto mb-5 flex justify-between border-b text-sm ">
          <div className="flex items-center border-b-2 border-green-600 pb-2 pr-2 uppercase text-green-600">
            <svg
              fill="#006607"
              width="38px"
              height="38px"
              viewBox="-112.64 -112.64 737.28 737.28"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#006607"
              transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
              stroke-width="0.00512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="3.072"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Meal_application_tracking">
                  {" "}
                  <path d="M439.3416,12.4191h-185.78a31.2327,31.2327,0,0,0-31.2324,31.2327v96.3553h-21.108A34.9619,34.9619,0,0,0,166.2981,174.93v40.0767a6,6,0,0,0,12,0V174.93a22.9485,22.9485,0,0,1,22.9228-22.9224h21.108V311.64q-1.7213.2452-3.3179.5393c-6.2153-6.4845-14.8652-9.2832-22.1841-10.4251,6.4658-10.9819,8.1758-25.2519,4.1846-36.3862-3.6221-10.1055-11.292-17.1094-22.1817-20.2549-18.9052-5.4619-28.8838,2.4614-33.6845,9.0889-6.6739-8.21-16.5918-10.3037-27.5967-5.7027l-.336.1529c-13.3593,6.5766-19.6425,19.3891-17.8906,36.28-7.1152-2.5962-17.6963-3.8252-31.42,1.8037-13.7256,5.628-22.5117,17.6465-23.5029,32.1485a39.5224,39.5224,0,0,0,19.9541,36.9927c.4428.2567.8637.5262,1.2959.7891-21.1641,6.6062-24.2237,13.7118-24.2237,19.0053v.5391A43,43,0,0,0,68.39,416.0623c14.5371,5.9439,40.5039,20.207,51.0732,48.95.4688,1.2735,1.2783,3.8311,1.6895,5.1524,1.4394,9.1831,11.5117,16.5708,29.9541,21.9638,16.4326,4.8062,37.9844,7.4527,60.6855,7.4527,41.0606,0,86.6817-9.0533,90.5694-28.916.5058-1.6172,1.6494-5.1827,2.3242-6.8931a74.49,74.49,0,0,1,13.2422-21.5893H439.3416A31.2327,31.2327,0,0,0,470.5745,410.95V43.6518A31.2328,31.2328,0,0,0,439.3416,12.4191ZM364.8684,28.0359h11.29a6,6,0,1,1,0,12h-11.29a6,6,0,0,1,0-12Zm-48.124,0H344.97a6,6,0,1,1,0,12H316.7444a6,6,0,0,1,0-12ZM279.24,332.6134q2.2917.5544,4.4771,1.1686c11.8774,3.35,17.7216,6.9918,19.9443,8.9645-1.9487,1.8809-7.1279,5.324-17.8687,8.4654-12.9741,3.7944-29.6919,5.8841-47.0752,5.8841s-34.101-2.09-47.0752-5.8841c-10.7407-3.1414-15.92-6.5845-17.8686-8.4654,2.2226-1.9727,8.0669-5.6146,19.9443-8.9645.74-.2086,1.5059-.4036,2.2661-.6016,6.8531,5.4831,22.7666,9.3291,41.3023,9.3291C256.4534,342.51,272.803,338.396,279.24,332.6134ZM241.57,325.6089c0-2.9066,5.2173-5.263,11.6533-5.263s11.6543,2.3564,11.6543,5.263-5.2178,5.263-11.6543,5.263S241.57,328.5156,241.57,325.6089ZM127.3191,368.19a18.88,18.88,0,0,1,6.5342-14.455,39.2209,39.2209,0,0,1,27.3628-9.4841c1.7011,8.9982,16.4712,16.7744,37.8916,21.129-9.9883,8.1816-23.1563,13.42-33.8462,16.6132l-37.2437-.1947C127.5847,377.1359,127.3479,372.5868,127.3191,368.19ZM56.3718,319.7025a25.2016,25.2016,0,0,1,16.083-21.8638c9.4112-3.8579,17.7159-4.1367,24.6778-.8272a10.1966,10.1966,0,0,0,14.457-10.7861c-2.0693-13.1177,1.55-22.1079,10.7588-26.7256,6.5371-2.6846,10.9678-1.6118,14.3594,3.4595a10.2118,10.2118,0,0,0,17.2832-.3906c4.1523-6.97,11.1865-8.9087,21.5088-5.9273,7.1328,2.0606,11.916,6.3589,14.2158,12.7759,3.0029,8.3784,1.23,19.8745-4.3135,27.9546a10.2029,10.2029,0,0,0,7.3,15.94,37.2084,37.2084,0,0,1,11.8789,3.1206,33.2476,33.2476,0,0,0-7.2871,4.0612c-12.9487,2.9707-23.7959,7.2148-30.1611,12.1993-15.003-1.9026-26.4493,2.0069-34.648,7.137a1.6217,1.6217,0,0,1-2.4433-1.6884c5.7334-30.2784,18.52-48.9361,18.789-49.3107a6.0054,6.0054,0,0,0-9.81-6.93c-.752,1.0662-11.4283,16.488-18.2061,42.1328a2.0514,2.0514,0,0,1-3.5234.8351A46.1471,46.1471,0,0,0,94.57,310.7713a6,6,0,0,0-2.58,11.72,34.6912,34.6912,0,0,1,22.5893,20.552,19.098,19.098,0,0,1,1.3555,8.9356,169.584,169.584,0,0,0,.0235,29.756l-14.0767-.0736a95.1877,95.1877,0,0,0-10.48-17.9711,69.464,69.464,0,0,0-21.0293-18.1938A27.5986,27.5986,0,0,1,56.3718,319.7025Zm237.1524,139.665c-1.042,2.6411-2.9248,8.916-2.9248,8.916-1.0821,6.7344-29.1006,19.2974-78.8067,19.2974-21.5927,0-41.9492-2.4751-57.3174-6.97-16.4267-4.8038-21.2353-10.2266-21.4834-12.4229,0,0-1.5136-5.2715-2.2656-7.3164-12.1582-33.063-41.4287-49.2251-57.7949-55.9165a31.0451,31.0451,0,0,1-19.5059-28.7441v-.3179c.877-1.6726,6.812-5.76,24.0078-10.0329a49.1748,49.1748,0,0,1,4.3672,5.0275,77.0083,77.0083,0,0,1,5.3472,8.181A89.8192,89.8192,0,0,1,75.491,375.88a6,6,0,1,0-4.1328,11.2656c21.1865,7.7715,78.6962,13.1992,139.8535,13.1992,56.96,0,111.9424-4.6723,136.8174-11.6264a6,6,0,0,0-3.2305-11.5567,197.6616,197.6616,0,0,1-24.085,4.6692,130.0606,130.0606,0,0,0-30.2749-19.4894,85.3325,85.3325,0,0,0,10.6006-3.9584c7.7783.8588,15.1694,1.832,22.064,2.9217,35.3906,5.5942,45.8652,12.3174,47.0556,14.5884v.3179a31.0449,31.0449,0,0,1-19.5068,28.7441C334.7732,411.4471,306.2371,427.1492,293.5242,459.3675ZM454.1863,406.56a17.95,17.95,0,0,1-17.95,17.95H338.8284a107.7233,107.7233,0,0,1,16.3647-8.4481,43,43,0,0,0,26.9658-39.8515v-.5391c0-7.1167-5.5088-17.5093-53.1416-25.56-4.5376-.7669-9.3154-1.477-14.2627-2.1417a10.413,10.413,0,0,0,1.6475-5.4606c0-9.8042-17.6719-18.3656-40.7437-22.9746l-.0019-.0011s-11.6148-8.3024-36.9395-8.8164V247.8856h28.8872a37.4185,37.4185,0,0,0,73.1133,3.551,5.825,5.825,0,0,0-5.68-7.2453h-.3194a5.8955,5.8955,0,0,0-5.6636,4.4035,25.4166,25.4166,0,1,1-29.3808-31.6574,5.9126,5.9126,0,0,0,4.8711-5.7656v-.3026a5.8542,5.8542,0,0,0-6.9273-5.7552,37.5127,37.5127,0,0,0-30.0083,30.7716H238.717V152.0071h28.9322a37.4161,37.4161,0,0,0,73.0683,3.3031,5.825,5.825,0,0,0-5.68-7.2453h-.3194a5.8955,5.8955,0,0,0-5.6636,4.4035,25.4166,25.4166,0,1,1-29.3808-31.6574,5.9126,5.9126,0,0,0,4.8711-5.7656v-.3026a5.8543,5.8543,0,0,0-6.9273-5.7553,37.5086,37.5086,0,0,0-30.0439,31.02H238.717V72.7339a17.95,17.95,0,0,1,17.95-17.95H436.2361a17.95,17.95,0,0,1,17.95,17.95Z"></path>{" "}
                  <path d="M335.0784,211.971c-13.7412,5.7588-25.003,17.39-31.36,25.063l-4.1943-5.1108a7,7,0,0,0-10.8223,8.8808l9.8135,11.9585a7,7,0,0,0,5.4121,2.5562c.1143,0,.2295-.003.3447-.0083a7.0092,7.0092,0,0,0,5.4795-3.106c.1338-.2007,13.5977-20.1377,30.7393-27.3213a7,7,0,0,0-5.4121-12.9121Z"></path>{" "}
                  <path d="M335.0784,116.1155c-13.7412,5.7588-25.003,17.39-31.36,25.0635l-4.1943-5.1113a7,7,0,0,0-10.8223,8.8808l9.8135,11.959a7,7,0,0,0,5.4121,2.5562c.1143,0,.2295-.0029.3447-.0083a7.0092,7.0092,0,0,0,5.4795-3.106c.1338-.2007,13.5977-20.1382,30.7393-27.3218a7,7,0,0,0-5.4121-12.9121Z"></path>{" "}
                  <path d="M423.137,128.2747H364.8684a6,6,0,0,0,0,12H423.137a6,6,0,0,0,0-12Z"></path>{" "}
                  <path d="M423.137,153.6868H364.8684a6,6,0,0,0,0,12H423.137a6,6,0,0,0,0-12Z"></path>{" "}
                  <path d="M423.137,222.5291H364.8684a6,6,0,0,0,0,12H423.137a6,6,0,0,0,0-12Z"></path>{" "}
                  <path d="M423.137,247.9412H364.8684a6,6,0,0,0,0,12H423.137a6,6,0,1,0,0-12Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            Blogs
          </div>

          <button
            className="btn flex  items-center pb-2 pr-2 text-lg font-bold text-green-800"
            onClick={() => setCreateModalOpen(true)}
          >
            <svg
              fill="#006607"
              width="21px"
              height="21px"
              stroke="#006607"
              viewBox="0 0 24 24"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
              </g>
            </svg>
            New
          </button>
        </div>
        <ul className="grid grid-cols-1 items-start gap-x-6 gap-y-10 p-8 xl:grid-cols-3">
          {Blogs.map((blog) => (
          <BlogCard key={blog.id} Blog={blog}/>
         ))}
        </ul>
      </div>
      <ViewModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        Blog={Blogs}
      />
      <CreateModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreate}
      />
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        Blog={Blogs}
        onEdit={handleEdit}
      />
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </DefaultLayout>
  );
};

export default Page;
