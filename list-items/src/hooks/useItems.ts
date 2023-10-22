import { useState } from 'react';
import { type ItemId, type ItemTypes } from '../types';

export const useItems = () => {
  const [items, setItems] = useState<ItemTypes[]>([]);

  const addItem = (text: string) => {
    const newIten: ItemTypes = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text
    };

    setItems(prevItems => [...prevItems, newIten]);
  };

  const removeItem = (id: ItemId) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  return {
    items,
    addItem,
    removeItem
  };
};
