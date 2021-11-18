import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Tldraw = dynamic(() => import("./component/tldraw"), { ssr: false });
const Embedded: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "space-between" , padding: '5% 10%', width: 'calc(100% )', backgroundColor: "lightBlue" }}>
      <div
        style={{
          position: 'relative',
          width: '45%',
          height: '300px',
          overflow: 'hidden',
        }}
      >
        <Tldraw id="first" />
      </div>

      <div
        style={{
          position: 'relative',
          width: '45%',
          height: '300px',
          overflow: 'hidden',
        }}
      >
        <Tldraw id="second" />
      </div>
    </div>
  );
};

export default Embedded;
