import React from "react";
import { Blank } from "grommet-icons";

export default function PointerIcon(props) {
  return (
    <Blank viewBox="0 0 32 32" {...props}>
      <path
        transform="scale(-1, 1) translate(-32, 0)"
        d="M28.784 3.226l-10.508 24.556-3.729-10.766-10.756-3.251zM31.389 0.024c-0.191 0-0.422 0.054-0.691 0.167l-29.833 12.659c-1.075 0.456-1.143 1.335-0.151 1.952l12.353 3.862 4.043 12.602c0.29 0.474 0.64 0.71 0.977 0.71 0.373 0 0.728-0.286 0.97-0.852l12.759-29.804c0.346-0.809 0.149-1.296-0.426-1.296z"
      />
    </Blank>
  );
}
