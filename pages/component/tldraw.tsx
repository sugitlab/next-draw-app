import { Tldraw, TDDocument } from "@tldraw/tldraw";

type TldrawWrapProps = {
  id: string;
  doc?: TDDocument;
};
const TldrawWrap = (props: TldrawWrapProps) => {
  if (props.doc) {
    return <Tldraw document={props.doc} showPages={false} />;
  } else {
    return <Tldraw id={props.id} onChange={(state) => console.log(state.document)} showPages={false} />;
  }
};


export default TldrawWrap;
