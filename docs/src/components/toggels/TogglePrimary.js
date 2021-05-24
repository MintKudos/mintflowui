import React from "react";

function TogglePrimary() {
  return (
    <div class="p-6 card bordered">
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text">Remember me</span> 
          <div>
            <input type="checkbox" checked="checked" class="toggle toggle-primary" /> 
            <span class="toggle-mark"></span>
          </div>
        </label>
      </div>
    </div>
    );
}
                
export default TogglePrimary;