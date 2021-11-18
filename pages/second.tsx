import type { NextPage } from "next";
import dynamic from "next/dynamic";

const TldrawDy = dynamic(() => import("./component/tldraw"), { ssr: false });

const Second: NextPage = () => {
  return (
    <>
      <TldrawDy id="second" />
    </>
  );
};

export default Second;
