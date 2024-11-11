import Misaka from "@/components/Dashboard/Misaka";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Misa'ka ",
  description: "Misa'ka is a meal delivery web app",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Misaka />
      </DefaultLayout>
    </>
  );
}
