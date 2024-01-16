import React, { useContext } from 'react';
import Theme from '../context/Theme';

function NavBar() {
    const {theme , setContextTheme} = useContext(Theme);
    
    return (
    <header className={`${theme==='light'? "bg-white":"border-gray-700 bg-gray-800"} flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  border-b  text-sm py-2.5 sm:py-4`}>
<nav class="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
<div class="me-5 md:me-8">
<a class={`${theme==='light'? "text-black":"text-white"} flex-none text-xl font-semibold   href="#" aria-label="Bran`}>Brand</a>
</div> 

<div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
<div class="sm:hidden">
  <button type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  </button>
</div>

<div className={`hidden mx-auto sm:block ${theme==='light'? "  ":""}`}>
  <label for="icon" class="sr-only">Search</label>
  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
      <svg class="flex-shrink-0 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    </div>
    <input type="text" id="icon" name="icon" class="py-2 px-4 ps-11 pe-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-lg rounded-lg text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Search"/>
    <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
      <span class="text-gray-500">Ctrl + /</span>
    </div>
  </div>
</div>

<div class="flex flex-row items-center justify-end gap-2">
  <button type="button" className={`${theme==='light'? "bg-gray-700 hover:bg-black/20  ":" hover:bg-white/20 disabled:opacity-50"} text-white w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600`}>
    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  </button>
  <button onClick={(e)=>{if (theme === "light") {
                        setContextTheme("dark")
                         console.log(theme)
                      } else {
                        setContextTheme("light")
                        console.log(theme)
                      }}} type="button" className={`${theme==='light'? "bg-gray-700 hover:bg-black/20":"text-white hover:bg-white/20 disabled:opacity-50"} w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" data-hs-offcanvas="#hs-offcanvas-right`}>
    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 348 512" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/></svg>
  </button>

  <div class="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
    <button id="hs-dropdown-with-header" type="button" class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
      <img class="inline-block h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
    </button>
    
   
  </div>
</div>
</div>
</nav>
</header>
      );
}

export default NavBar;