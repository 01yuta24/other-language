import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <Button>
        <Link to="/planets">宇宙へGO!</Link>
      </Button>
      <Button>
        <Link to="/born">惑星をつくる</Link>
      </Button>
      <Button>
        <Link to="/stock">惑星リストをみる</Link>
      </Button>
    </DefaultLayout>
  );
}

// <DefaultLayout>
//   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//     <div className="inline-block max-w-lg text-center justify-center">
//       <h1 className={title()}>Make&nbsp;</h1>
//       <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
//       <br />
//       <h1 className={title()}>
//         websites regardless of your design experience.
//       </h1>
//       <h4 className={subtitle({ class: "mt-4" })}>
//         Beautiful, fast and modern React UI library.
//       </h4>
//     </div>

//     <div className="flex gap-3">
//       <Link
//         isExternal
//         className={buttonStyles({
//           color: "primary",
//           radius: "full",
//           variant: "shadow",
//         })}
//         href={siteConfig.links.docs}
//       >
//         Documentation
//       </Link>
//       <Link
//         isExternal
//         className={buttonStyles({ variant: "bordered", radius: "full" })}
//         href={siteConfig.links.github}
//       >
//         <GithubIcon size={20} />
//         GitHub
//       </Link>
//     </div>

//     <div className="mt-8">
//       <Snippet hideCopyButton hideSymbol variant="bordered">
//         <span>
//           Get started by editing{" "}
//           <Code color="primary">pages/index.tsx</Code>
//         </span>
//       </Snippet>
//     </div>
//   </section>
// </DefaultLayout>
