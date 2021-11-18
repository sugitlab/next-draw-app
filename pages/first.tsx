import type { NextPage } from "next";
import dynamic from "next/dynamic";

const TldrawDy = dynamic(() => import("./component/tldraw"), { ssr: false });
const First: NextPage = () => {
  return (
    <>
      <TldrawDy id="first" />
    </>
  );
};

export default First;
