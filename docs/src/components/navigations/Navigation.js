import React from "react";

function Navigation() {
  return (
    <div className="rounded-lg shadow bg-base-100 drawer h-52">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="flex flex-col drawer-content">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2">
            <a className="text-lg font-bold pr-2">
            MintFlow
            </a>
            <span>
            - Change screen size to show/hide menu
            </span>
          </div> 
          <div className="flex-none hidden lg:block">
            <ul className="menu horizontal">
              <li>
                <a className="btn btn-link body-large-bold">Item 1</a>
              </li> 
              <li>
                <a className="btn btn-link body-large-bold">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <div className="drawer-side">
        <label for="my-drawer-3" className="drawer-overlay"></label> 
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <a>Item 1</a>
          </li> 
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    );
}
                
export default Navigation;