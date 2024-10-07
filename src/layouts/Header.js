import React, { useState } from 'react';

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav class="flex items-end flex-col md:items-center justify-end md:justify-center p-4 backdrop-blur-lg border-neutral-700 border-b">
      <span class="absolute left-2 top-3 text-2xl">
        Cartelara Flash
      </span>
      <button onClick={toggleClass} class="py-2 right-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"><span class="sr-only">Open main menu</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" class="h-6 w-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
      <div className={isActive ? 'md:border-none md:mt-0 md:p-0 md:w-auto mt-4 rounded-lg p-4 border dark:border-gray-800 flex justify-start w-full' : 'hidden md:flex'}  class="w-full md:block md:w-auto hidden">
        <ul class="list-none flex md:flex-row flex-col gap-4 text-xl">
          <li>
            <a class="hover:bg-gray-600 py-2 px-3 rounded-xl" href="/">Home</a>
          </li>
          <li>
            <a class="hover:bg-gray-600 py-2 px-3 rounded-xl" href="/">Servicios</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
  
}