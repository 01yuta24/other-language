/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Progress } from "@nextui-org/progress";
import { Card, CardFooter } from "@nextui-org/card";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/image";
import "@/styles/Loading.css";
import imgUrl from "../../Genesis_Galaxy.png";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";

export default function Loading({ loading, setLoading }: any) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((v) => (v >= 100 ? 100 : v + 3));
    }, 60);
  }, [loading]);

  const linkFn = () => {
    setLoading(false);
  };
  return (
    <>
      <DefaultLayout>
        <></>
      </DefaultLayout>
      <main className="loading-main">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none card-container w-100 h-100"
          fullWidth={true}
        >
          <Image
            alt="Woman listing to music"
            className="object-cover w-full h-full scale-105"
            src={imgUrl}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Progress
              aria-label="Downloading..."
              size="md"
              value={value}
              color="success"
              showValueLabel={true}
              className="max-w-md"
            />
            <Button>
              <Link to="/planets" onClick={linkFn}>
                宇宙へGO!
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
