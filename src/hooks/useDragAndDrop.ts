import { useState, useRef } from "react";
import { IGridItem } from "@/types/layout";

interface UseDragAndDropResult {
  handleMouseDown: (index: number, event: React.MouseEvent) => void;
  handleMouseMove: (event: React.MouseEvent) => void;
  handleMouseUp: () => void;
  handleTouchStart: (index: number, event: React.TouchEvent) => void;
  handleTouchMove: (event: React.TouchEvent) => void;
  handleTouchEnd: () => void;
  dapps: IDapp[];
}

const useDragAndDrop = (
  gridLayouts: IGridItem[],
  itemWidth: number,
  itemHeight: number,
  numberColumn: number
): UseDragAndDropResult => {
  const [dapps, setDapps] = useState([
    { id: 1, name: "Dapp 1", logo: "/app.png", x: 0, y: 0 },
    { id: 2, name: "Dapp 2", logo: "/app.png", x: 1, y: 0 },
    { id: 3, name: "Dapp 3", logo: "/app.png", x: 2, y: 0 },
    { id: 4, name: "Dapp 4", logo: "/app.png", x: 3, y: 0 },
    { id: 5, name: "Dapp 5", logo: "/app.png", x: 0, y: 1 },
    { id: 6, name: "Dapp 6", logo: "/app.png", x: 1, y: 1 },
    { id: 7, name: "Dapp 7", logo: "/app.png", x: 2, y: 1 },
    { id: 8, name: "Dapp 8", logo: "/app.png", x: 3, y: 1 },
  ]);

  const dragItem = useRef<number | null>(null);
  const dragStartX = useRef<number>(0);
  const dragStartY = useRef<number>(0);
  const initialItemX = useRef<number>(0);
  const initialItemY = useRef<number>(0);
  const originalX = useRef<number>(0);
  const originalY = useRef<number>(0);

  const handleMouseDown = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    if (index >= dapps.length) return;
    dragItem.current = index;
    dragStartX.current = event.clientX;
    dragStartY.current = event.clientY;
    const item = dapps[index];
    initialItemX.current = item.x * itemWidth;
    initialItemY.current = item.y * itemHeight;
    originalX.current = item.x;
    originalY.current = item.y;
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (dragItem.current !== null) {
      const deltaX = event.clientX - dragStartX.current;
      const deltaY = event.clientY - dragStartY.current;
      const index = dragItem.current;

      setDapps((prevDapps) => {
        const newDapps = [...prevDapps];
        const item = newDapps[index];
        item.x = Math.max(
          0,
          Math.min(
            numberColumn - 1,
            Math.round((initialItemX.current + deltaX) / itemWidth)
          )
        );
        item.y = Math.max(
          0,
          Math.min(
            Math.floor(gridLayouts.length / numberColumn) - 1,
            Math.round((initialItemY.current + deltaY) / itemHeight)
          )
        );
        return newDapps;
      });
    }
  };

  const handleMouseUp = () => {
    if (dragItem.current !== null) {
      const index = dragItem.current;
      const droppedItem = dapps[index];
      const isPositionOccupied = dapps.some(
        (dapp, i) => i !== index && dapp.x === droppedItem.x && dapp.y === droppedItem.y
      );
      if (isPositionOccupied) {
        setDapps((prevDapps) => {
          const newDapps = [...prevDapps];
          newDapps[index].x = originalX.current;
          newDapps[index].y = originalY.current;
          return newDapps;
        });
      }
      dragItem.current = null;
    }
  };

  const handleTouchStart = (index: number, event: React.TouchEvent) => {
    if (index >= dapps.length) return;
    dragItem.current = index;
    dragStartX.current = event.touches[0].clientX;
    dragStartY.current = event.touches[0].clientY;
    const item = dapps[index];
    initialItemX.current = item.x * itemWidth;
    initialItemY.current = item.y * itemHeight;
    originalX.current = item.x;
    originalY.current = item.y;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (dragItem.current !== null) {
      const deltaX = event.touches[0].clientX - dragStartX.current;
      const deltaY = event.touches[0].clientY - dragStartY.current;
      const index = dragItem.current;

      setDapps((prevDapps) => {
        const newDapps = [...prevDapps];
        const item = newDapps[index];
        item.x = Math.max(
          0,
          Math.min(
            numberColumn - 1,
            Math.round((initialItemX.current + deltaX) / itemWidth)
          )
        );
        item.y = Math.max(
          0,
          Math.min(
            Math.floor(gridLayouts.length / numberColumn) - 1,
            Math.round((initialItemY.current + deltaY) / itemHeight)
          )
        );
        return newDapps;
      });
    }
  };

  const handleTouchEnd = () => {
    if (dragItem.current !== null) {
      const index = dragItem.current;
      const droppedItem = dapps[index];
      const isPositionOccupied = dapps.some(
        (dapp, i) => i !== index && dapp.x === droppedItem.x && dapp.y === droppedItem.y
      );
      if (isPositionOccupied) {
        setDapps((prevDapps) => {
          const newDapps = [...prevDapps];
          newDapps[index].x = originalX.current;
          newDapps[index].y = originalY.current;
          return newDapps;
        });
      }
      dragItem.current = null;
    }
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    dapps
  };
};

export default useDragAndDrop;
