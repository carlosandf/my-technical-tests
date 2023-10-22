import { useItems } from './hooks/useItems.ts';
import { Item } from './components/item.tsx';
import { type ItemId } from './types';
import './App.css';
import { useSEO } from './hooks/useSEO.ts';

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Elemento 1'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Elemento 2'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Elemento 3'
//   }
// ];

function App () {
  const { addItem, removeItem, items } = useItems();
  useSEO({
    title: `${items.length > 0 ? `(${items.length})` : ''} Prueba técnica de React`,
    description: 'Esta es una prueba técnica para evaluar habilidades en React.'
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem('item');

    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null) return;

    addItem(input.value);
    input.value = '';
  };

  const handleDelete = (id: ItemId) => removeItem(id);

  return (
    <main className='grid grid-cols-[2fr_1fr] gap-4 p-6 h-[92vh]'>
      <aside className='flex flex-col items-center p-5 justify-evenly gap-4 rounded-lg bg-gray-800 h-[inherit]'>
        <form aria-label='Add item to the list' onSubmit={handleSubmit} className='flex flex-col justify-evenly max-w-xs gap-3 w-full py-5 h-[50vh] px-5 bg-slate-700 rounded-lg shadow-lg'>
          <h2 className='font-bold text-lg'>Añadir elementos</h2>
          <div className='flex flex-col gap-3'>
            <label className='text-start leading-8'>
              Agrega un nuevo elemento
              <input
                name='item'
                required
                type='text'
                placeholder='Nuevo elemento'
                className='px-2 rounded block w-full bg-gray-800'
              />
            </label>
            <button className='py-1 px-4 bg-cyan-600 rounded font-semibold hover:bg-cyan-700 transition-colors'>
              Add to list
            </button>
          </div>
        </form>
      </aside>

      <section className='bg-gray-800 rounded-lg h-[inherit] overflow-hidden'>
        <h2 className='font-bold text-lg p-2'>Lista de elementos</h2>

        {items.length > 0
          ? (
            <ul className='p-1 max-h-[85vh] overflow-y-auto text-start grid gap-1'>
              {
                items.map(({ id, text }) => (
                  <Item
                    key={id}
                    text={text}
                    handleClick={() => handleDelete(id)}
                  />
                ))
              }
            </ul>
            )
          : <p>Aún no hay elementos</p>
        }

      </section>
    </main>
  );
}

export default App;
