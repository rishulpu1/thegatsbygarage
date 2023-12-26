import React from "react";
import {
  BlockRenderer,
  BlockRendererProvider,
  getStyles,
  getClasses,
} from "@webdeveducation/wp-block-tools";

const Page = (props) => {
  return (
    <BlockRendererProvider
      allBlocks={props.pageContext.blocks}
      renderComponent={(block) => {
        switch (block.name) {
          case "core/media-text": {
            const content = <BlockRenderer blocks={block.innerBlocks} />;
            return (
              <div
                key={block.id}
                style={getStyles(block)}
                className={getClasses(block)}
              >
                {block.attributes.mediaPosition === "right" && (
                  <div>{content}</div>
                )}
                <div>asd</div>
                {block.attributes.mediaPosition !== "right" && (
                  <div>{content}</div>
                )}
              </div>
            );
          }
        }
      }}
    />
  );
};

export default Page;
