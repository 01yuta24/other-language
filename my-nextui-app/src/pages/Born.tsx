/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Slider } from "@nextui-org/slider";
import { Button } from "@nextui-org/button";
export type SliderValue = number | number[];
import axios from "axios";
export default function BornPage({ setGetData }: any) {
  const postFn = () => {
    console.log("button");
    axios
      .post("/api/planets", {
        name: "taro",
        epoch: 1000.0,
        semiMajor: 0.4,
        eccentricity: 0.4,
        inclination: 0.4,
        orbitAround: "sun",
      })
      .then((res) => res.data)
      .then((data) => setGetData(data));
  };
  return (
    <DefaultLayout>
      <h2>Born</h2>
      <Slider
        className="max-w-md"
        defaultValue={0.2}
        formatOptions={{ style: "percent" }}
        label="Inclination"
        marks={[
          {
            value: 0.2,
            label: "20%",
          },
          {
            value: 0.5,
            label: "50%",
          },
          {
            value: 0.8,
            label: "80%",
          },
        ]}
        onChange={(value) => console.log(value)}
        maxValue={1}
        minValue={0}
        showTooltip={true}
        step={0.1}
      />
      <Slider
        className="max-w-md"
        defaultValue={0.2}
        formatOptions={{ style: "percent" }}
        label="Inclination"
        marks={[
          {
            value: 0.2,
            label: "20%",
          },
          {
            value: 0.5,
            label: "50%",
          },
          {
            value: 0.8,
            label: "80%",
          },
        ]}
        onChange={(value) => console.log(value)}
        maxValue={1}
        minValue={0}
        showTooltip={true}
        step={0.1}
      />
      <Slider
        className="max-w-md"
        defaultValue={0.2}
        formatOptions={{ style: "percent" }}
        label="Inclination"
        marks={[
          {
            value: 0.2,
            label: "20%",
          },
          {
            value: 0.5,
            label: "50%",
          },
          {
            value: 0.8,
            label: "80%",
          },
        ]}
        onChange={(value) => console.log(value)}
        maxValue={1}
        minValue={0}
        showTooltip={true}
        step={0.1}
      />
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        onPress={postFn}
      >
        Genesis Galaxy
      </Button>
    </DefaultLayout>
  );
}
