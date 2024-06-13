import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import "@/styles/Index.css";
export default function IndexPage(): JSX.Element {
  return (
    <>
      <DefaultLayout>
        <></>
      </DefaultLayout>

      <main className="index-main">
        <div className="index-container">
          <Link to="/planets">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
              size="lg"
            >
              宇宙へGO!
            </Button>
          </Link>
          <Link to="/born">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
              size="lg"
            >
              惑星をつくる
            </Button>
          </Link>
          <Link to="/stock">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full"
              size="lg"
            >
              惑星リストをみる
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
