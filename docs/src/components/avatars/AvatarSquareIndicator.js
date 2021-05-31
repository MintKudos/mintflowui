import React from "react";

function AvatarSquareIndicator() {
  return (
    <div className="space-x-10">
      <div className="avatar offline">
        <div className="rounded-btn w-32 h-32">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar online">
        <div className="rounded-btn w-24 h-24">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar offline">
        <div className="rounded-btn w-16 h-16">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div> 
      <div className="avatar online">
        <div className="rounded-btn w-10 h-10">
          <img src="https://i.pravatar.cc/500?img=32"/>
        </div>
      </div>
    </div>
  );
}

export default AvatarSquareIndicator;