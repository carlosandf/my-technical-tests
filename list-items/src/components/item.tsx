import { DeleteIcon } from './icons';

export const Item = ({ text, handleClick }: {text: string, handleClick: () => void}) => {
  return (
    <li style={{ 'overflow-wrap': 'anywhere' }} className='flex justify-between gap-2 bg-slate-700 px-1.5 py-1 rounded break-before-column'>
      <p>{text}</p>
      <button onClick={handleClick} className='cursor-pointer rounded w-fit h-fit hover:bg-slate-500 transition-colors'>
        <DeleteIcon />
      </button>
    </li>
  );
};
