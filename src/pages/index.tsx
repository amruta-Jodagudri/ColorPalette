import update from 'immutability-helper';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ColorItem from '../pages/ColorItem';

const ColorPalette: React.FC = () => {
  const [colors, setColors] = useState<string[]>([
    '#FF5733', '#33FF57', '#3357FF', '#FF33A6',
    '#FF8333', '#33FFF5', '#8D33FF', '#F533FF',
  ]);

  const moveColor = (fromIndex: number, toIndex: number) => {
    if (fromIndex !== toIndex) {
      const updatedColors = update(colors, {
        $splice: [
          [fromIndex, 1],
          [toIndex, 0, colors[fromIndex]],
        ],
      });
      setColors(updatedColors);
    }
  };

  const replaceColor = (index: number, newColor: string) => {
    const updatedColors = colors.map((color, i) =>
      i === index ? newColor : color
    );
    setColors(updatedColors);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <ColorItem
            key={index}
            index={index}
            color={color}
            moveColor={moveColor}
            replaceColor={replaceColor}
          />
        ))}
      </div>
    </DndProvider>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Color Palette</h1>
      <ColorPalette />
    </div>
  );
};

export default Home;
