/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Slider } from "@nextui-org/slider";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import axios from "axios";
import "@/styles/Born.css";
import { useRef } from "react";
import { Input } from "@nextui-org/input";
// import PlanetsPage from "./Planets";

export type SliderValue = number | number[];
export default function BornPage({
  setGetData,
  setLoading,
  // loading,
  // getData,
}: any) {
  const paramName = useRef("");
  const paramEpoch = useRef<number | number[]>(2000);
  const paramSemiMajor = useRef<number | number[]>(0.2);
  const paramEccentricity = useRef<number | number[]>(0.2);
  const paramInclination = useRef<number | number[]>(2);
  const paramOrbitAround = useRef("");
  const postFn = async () => {
    console.log("button");
    const body = {
      name: paramName.current,
      epoch: paramEpoch.current,
      semiMajor: paramSemiMajor.current,
      eccentricity: paramEccentricity.current,
      inclination: paramInclination.current,
      orbitAround: paramOrbitAround.current,
    };
    console.log("body", body);

    await axios
      .post("/api/planets", body)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setGetData(data);
      });
    setLoading(true);
  };

  return (
    <>
      <DefaultLayout>
        <></>
      </DefaultLayout>
      <main className="born-main">
        <div className="born-container">
          <div className="w-full flex flex-col gap-4 pl-12 pr-12">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                type=""
                variant="bordered"
                label="惑星の名前を入力してください"
                labelPlacement="inside"
                size="lg"
                onValueChange={(value) => {
                  paramName.current = value;
                }}
              />
            </div>
          </div>
          <div className="flex w-full gap-4">
            <Select
              label="周回する天体を選択"
              className="select-box"
              variant="bordered"
              onSelectionChange={(key) => {
                console.log([...new Set(key)][0]);
                const value: any = [...new Set(key)][0];
                paramOrbitAround.current = value;
              }}
            >
              <SelectItem key={"sun"}>太陽</SelectItem>
              <SelectItem key={"mercury"}>水星</SelectItem>
              <SelectItem key={"venus"}>金星</SelectItem>
              <SelectItem key={"earth"}>地球</SelectItem>
              <SelectItem key={"mars"}>火星</SelectItem>
              <SelectItem key={"jupiter"}>木星</SelectItem>
              <SelectItem key={"saturn"}>土星</SelectItem>
              <SelectItem key={"uranus"}>天王星</SelectItem>
              <SelectItem key={"neptune"}>海王星</SelectItem>
            </Select>
          </div>
          <Slider
            className="max-w-md"
            defaultValue={2000}
            // formatOptions={{ style: "percent" }}
            label="回る速度"
            marks={[
              {
                value: 2000,
                label: "20%",
              },
              {
                value: 5000,
                label: "50%",
              },
              {
                value: 8000,
                label: "80%",
              },
            ]}
            onChange={(value) => (paramEpoch.current = value)}
            maxValue={10000}
            minValue={1000}
            showTooltip={false}
            step={1000}
          />
          <Slider
            className="max-w-md ¥"
            defaultValue={0.2}
            // formatOptions={{ style: "percent" }}
            label="天体からの距離"
            marks={[
              {
                value: 1,
                label: "20%",
              },
              {
                value: 2.5,
                label: "50%",
              },
              {
                value: 4,
                label: "80%",
              },
            ]}
            onChange={(value) => (paramSemiMajor.current = value)}
            maxValue={5}
            minValue={0}
            showTooltip={false}
            step={0.5}
          />
          <Slider
            className="max-w-md"
            defaultValue={0.2}
            // formatOptions={{ style: "" }}
            label="離心率"
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
            onChange={(value) => (paramEccentricity.current = value)}
            maxValue={0.9}
            minValue={0}
            showTooltip={false}
            step={0.1}
          />
          <Slider
            className="max-w-md"
            defaultValue={2}
            // formatOptions={{ style: "percent" }}
            label="傾き"
            marks={[
              {
                value: 2,
                label: "20%",
              },
              {
                value: 5,
                label: "50%",
              },
              {
                value: 8,
                label: "80%",
              },
            ]}
            onChange={(value) => (paramInclination.current = value)}
            maxValue={10}
            minValue={0}
            showTooltip={false}
            step={1}
          />
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onPress={postFn}
          >
            Genesis Galaxy
          </Button>
        </div>
      </main>
    </>
  );
}
