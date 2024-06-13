/* eslint-disable */
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useRef } from "react";
import axios from "axios";
import "@/styles/Stock.css";

export default function StockPage({ getDataState }: any) {
  // const [isInvalid, setIsInvalid] = useState(true);
  const [getData, setGetData] = getDataState;
  const selectData = useRef<String[] | any>(null);
  console.log(getData);
  const delFn = async () => {
    console.log(`delete:${selectData.current}`);
    await axios.delete("/api/planets", {
      data: { deleteList: selectData.current },
    });
    await axios
      .get("/api/planetData")
      .then((res) => res.data)
      .then((data) => setGetData(data));
  };
  return (
    <>
      <DefaultLayout>
        <></>
      </DefaultLayout>
      <main className="stock-main">
        <div className="stock-container">
          <div className="flex flex-col gap-3">
            <Table
              className="opacity-80"
              color={"danger"}
              selectionMode="multiple"
              // defaultSelectedKeys={[""]}
              aria-label="Example static collection table"
              style={{ textAlign: "center" }}
              onSelectionChange={(key) => {
                if (key === "all") {
                  selectData.current = getData.map((obj: getData) => obj.id);
                } else {
                  selectData.current = [...new Set(key)];
                }
                console.log(selectData.current);
              }}
            >
              <TableHeader>
                <TableColumn>惑星の名前</TableColumn>
                <TableColumn>周回している天体</TableColumn>
                <TableColumn>軌道の元期(Julian日数)</TableColumn>
                <TableColumn>軌道長半径(m)</TableColumn>
                <TableColumn>軌道離心率(0-1の無次元量)</TableColumn>
                <TableColumn>軌道傾斜角(°)</TableColumn>
                <TableColumn>昇交点の赤経(°)</TableColumn>
                <TableColumn>近地点引数(°)</TableColumn>
                <TableColumn>平均近点角(°)</TableColumn>
              </TableHeader>
              <TableBody>
                {getData.map((obj: getData) => (
                  <TableRow key={obj.id}>
                    <TableCell>{obj.name}</TableCell>
                    <TableCell>{obj.orbitAround}</TableCell>
                    <TableCell>{obj.epoch}</TableCell>
                    <TableCell>{obj.a}</TableCell>
                    <TableCell>{obj.e}</TableCell>
                    <TableCell>{obj.i}</TableCell>
                    <TableCell>{obj.om}</TableCell>
                    <TableCell>{obj.w}</TableCell>
                    <TableCell>{obj.ma}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="stock-button-container">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              onPress={delFn}
            >
              惑星を破壊する
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
