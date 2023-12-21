import React from "react";
import {
  BlockRenderer,
  BlockRendererProvider,
} from "@webdeveducation/wp-block-tools";

const Page = (props) => {
  return <BlockRendererProvider allBlocks={props.pageContext.blocks} />;
};

export default Page;
