import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav class="bg-white white:bg-gray-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-black-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div class="flex gap-4 md:order-2 ">
    <a className='text-black font-bold px-4 py-2 text-center mr-3 md:mr-0'>
    <NavLink to="/signin">
            Sign In
    </NavLink>
      </a><NavLink to="/signup">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        
          Sign Up
       
      </button> </NavLink>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Abrir menu principal</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800  dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white" aria-current="page">  <NavLink to="/">
Home
</NavLink>
</a>
      </li>
      <li>
      <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white">Features</a>
      </li>
      <li>
      <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white">Sobre</a>
      </li>
      <li>
      <a href="#" class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 dark:hover:bg-blue-700 dark:hover:text-white">Contato</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
