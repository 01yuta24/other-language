/* eslint-disable */
import { Progress } from "@nextui-org/progress";
import { useEffect, useState } from "react";
export default function Loading() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 2));
    }, 120);
  }, []);
  return (
    <Progress
      aria-label="Downloading..."
      size="md"
      value={value}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
  );
}
