import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Tldraw = dynamic(() => import("./component/tldraw"), { ssr: false });
const FileSystem: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5% 10%",
        width: "calc(100% )",
        backgroundColor: "lightBlue",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <Tldraw id="fileSystem" useFile /> 
      </div>
    </div>
  );
};

export default FileSystem;
