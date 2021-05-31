import React from "react";

function ButtonLoadingRounded() {
  return (
      <div className="space-x-10">
        <button className="btn btn-lg btn-circle loading"></button> 
        <button className="btn btn-circle loading"></button> 
        <button className="btn btn-sm btn-circle loading"></button> 
        <button className="btn btn-xs btn-circle loading"></button>
      </div>
    );
}
                
export default ButtonLoadingRounded;