import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = {
  COLOR: 'color',
};

interface ColorItemProps {
  color: string;
  index: number;
  moveColor: (fromIndex: number, toIndex: number) => void;
  replaceColor: (index: number, newColor: string) => void;
}

const ColorItem: React.FC<ColorItemProps> = ({ color, index, moveColor, replaceColor }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    type: ItemType.COLOR,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType.COLOR,
    hover: (item: { index: number }) => {
      if (item.index !== index && ref.current) {
        moveColor(item.index, index);
        item.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity: 1,
        backgroundColor: color,
        width: '100px',
        height: '100px',
        margin: '10px',
      }}
    >
      <input
        type="color"
        value={color}
        onChange={(e) => replaceColor(index, e.target.value)}
        style={{ width: '100%', height: '100%', opacity: 0 }}
      />
    </div>
  );
};

export default ColorItem;
