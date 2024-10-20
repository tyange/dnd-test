/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { Node } from "../../types/Node";

import DraggableItems from "../DraggableItems/DraggableItems";
import NotdirBox from "./NotdirBox/NotdirBox";

type NotdirListProps = {
  initialNotdir: any;
};

export default function NotdirList({ initialNotdir }: NotdirListProps) {
  const [notdirs, setNotdirs] = useState(initialNotdir);

  const changeNotdirsHandler = (draggableItems: Node<any>[]) => {
    setNotdirs(draggableItems.map((item) => item.nodeInfo));
  };

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fill,minmax(100px,100px))] gap-4">
      <DraggableItems
        key="notdir-list"
        draggableItems={notdirs.map((notdir) => ({
          id: notdir.Id,
          nodeInfo: notdir,
          element: <NotdirBox notdir={notdir} />,
        }))}
        setDraggableItems={changeNotdirsHandler}
      />
    </ul>
  );
}
