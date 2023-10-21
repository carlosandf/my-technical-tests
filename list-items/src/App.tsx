import { useState } from 'react';
import './App.css';

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number,
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 1'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 2'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 3'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 4'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Elemento 5'
  }
];

function App () {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem('item') as HTMLInputElement;

    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input === null) return;

    const newIten: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    };

    setItems(prevItems => [...prevItems, newIten]);
    input.value = '';
  };

  return (
    <main className='grid grid-cols-[2fr_1fr] gap-4 p-6 max-h-[90vh]'>
      <aside className='flex flex-col items-center p-5 justify-evenly gap-4 rounded-lg bg-gray-800 max-h-[40vh] h-fit'>
        <h2 className='font-bold text-lg'>Añadir y eliminar elementos</h2>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-xs gap-3 w-full'>
          <label className='text-start leading-8'>
            Agrega un nuevo elemento
            <input
              name='item'
              required
              type='text'
              placeholder='Nuevo elemento'
              className='px-2 rounded block w-full'
            />
          </label>
          <button className='py-1 px-4 bg-cyan-600 rounded font-semibold hover:bg-cyan-700 transition-colors'>
            Add to list
          </button>
        </form>
      </aside>

      <section className='bg-gray-800 rounded-lg max-h-[inherit] overflow-hidden'>
        <h2 className='font-bold text-lg'>Lista de elementos</h2>
        <ul className='p-5 max-h-[85vh] overflow-y-auto'>
          {
            items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
