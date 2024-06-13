// import { SVGP/rops } from "react";

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

declare global {
  interface Window {
    Spacekit: any;
  }
}

type getData = {
  id: number;
  name: string;
  paramId: number;
  epoch: number;
  a: number;
  e: number;
  i: number;
  om: number;
  w: number;
  ma: number;
  orbitAround: string;
};
