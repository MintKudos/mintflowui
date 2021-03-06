import React from "react";

function TableWithElements() {
  return (
    <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </label>
        </th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>Favorite Color</th> 
        <th></th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </label>
        </th> 
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 mask mask-squircle">
                <img src="https://source.unsplash.com/random/300x300" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
            <div>
              <div class="font-bold">
                    Hart Hagerty
                  </div> 
              <div class="text-sm opacity-50">
                    United States
                  </div>
            </div>
          </div>
        </td> 
        <td>
            Zemlak, Daniel and Leannon
            
          <br /> 
          <span class="badge badge-outline badge-sm">Desktop Support Technician</span>
        </td> 
        <td>Purple</td> 
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </label>
        </th> 
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 mask mask-squircle">
                <img src="https://source.unsplash.com/random/300x300" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
            <div>
              <div class="font-bold">
                    Brice Swyre
                  </div> 
              <div class="text-sm opacity-50">
                    China
                  </div>
            </div>
          </div>
        </td> 
        <td>
            Carroll Group
            
          <br /> 
          <span class="badge badge-outline badge-sm">Tax Accountant</span>
        </td> 
        <td>Red</td> 
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </label>
        </th> 
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 mask mask-squircle">
                <img src="https://source.unsplash.com/random/300x300" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
            <div>
              <div class="font-bold">
                    Marjy Ferencz
                  </div> 
              <div class="text-sm opacity-50">
                    Russia
                  </div>
            </div>
          </div>
        </td> 
        <td>
            Rowe-Schoen
            
          <br /> 
          <span class="badge badge-outline badge-sm">Office Assistant I</span>
        </td> 
        <td>Crimson</td> 
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" /> 
            <span class="checkbox-mark"></span>
          </label>
        </th> 
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="w-12 h-12 mask mask-squircle">
                <img src="https://source.unsplash.com/random/300x300" alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
            <div>
              <div class="font-bold">
                    Yancy Tear
                  </div> 
              <div class="text-sm opacity-50">
                    Brazil
                  </div>
            </div>
          </div>
        </td> 
        <td>
            Wyman-Ledner
            
          <br /> 
          <span class="badge badge-outline badge-sm">Community Outreach Specialist</span>
        </td> 
        <td>Indigo</td> 
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>Favorite Color</th> 
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
    );
}
                
export default TableWithElements;