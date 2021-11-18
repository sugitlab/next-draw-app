import React from 'react';
import { Tldraw, TDDocument, TDFile } from "@tldraw/tldraw";

type TldrawWrapProps = {
  id: string;
  doc?: TDDocument;
  useFile?: boolean;
};
const TldrawWrap = (props: TldrawWrapProps) => {
  // const fileSystem = useFileSystem();
  const [file, setFile] = React.useState<TDFile>();
  console.log(file?.document.pages);
  if (props.doc) {
    return <Tldraw document={props.doc} showPages={false} />;
  } else {
    if (props.useFile) {
      return <Tldraw document={file?.document}/>
    } else {
      return <Tldraw id={props.id} />;
    }
  }
};

export default TldrawWrap;
