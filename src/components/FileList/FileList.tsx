/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Node } from "../../types/Node";

import DraggableItems from "../DraggableItems/DraggableItems";
import FileBox from "./FileBox/FileBox";

type FileListProps = {
  initialFiles: any;
};

export default function FileList({ initialFiles }: FileListProps) {
  const [files, setFiles] = useState(initialFiles);

  const changeFilesHandler = (draggableItems: Node<any>[]) => {
    setFiles(draggableItems.map((item) => item.nodeInfo));
  };

  return (
    <ul className="flex flex-col gap-3 select-none">
      <DraggableItems
        key="notdir-list"
        draggableItems={files.map((file) => ({
          id: file.Id,
          nodeInfo: file,
          element: <FileBox file={file} />,
        }))}
        setDraggableItems={changeFilesHandler}
      />
    </ul>
  );
}
