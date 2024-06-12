/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";

export default function StockPage() {
  const delFn = () => {
    console.log("delete");
  };
  return (
    <DefaultLayout>
      <h2>stock</h2>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onPress={delFn}
      >
        destroy the Planet
      </Button>
    </DefaultLayout>
  );
}
