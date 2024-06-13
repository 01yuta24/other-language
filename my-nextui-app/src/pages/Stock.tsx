/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import axios from "axios";
export default function StockPage({ getDataState }: any) {
  // const [isInvalid, setIsInvalid] = useState(true);
  const [getData, setGetData] = getDataState;
  const [delIndex, setDelIndex] = useState<string[] | null>(null);
  console.log(getData);
  const delFn = async () => {
    console.log(`delete:${delIndex}`);
    await axios.delete("/api/planets", { data: { deleteList: delIndex } });
    await axios
      .get("/api/planetData")
      .then((res) => res.data)
      .then((data) => setGetData(data));
  };
  return (
    <DefaultLayout>
      <h2>stock</h2>
      <CheckboxGroup
        isRequired
        description="Select the planet you want to destroy"
        isInvalid={true}
        // label="Planets"
        onValueChange={(value) => {
          // setIsInvalid(value.length < 1);
          console.log(value);
          setDelIndex(value);
        }}
      >
        {getData.map((obj: getData) => (
          <Checkbox key={obj.id} value={obj.id.toString()}>
            {obj.name}
          </Checkbox>
        ))}
        {/* <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox> */}
      </CheckboxGroup>
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
