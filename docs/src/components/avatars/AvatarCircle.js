import React from "react";

function AvatarCircle() {
  return (
    <div className="space-x-10">
    <div className="avatar">
      <div className="mb-8 rounded-full w-32 h-32">
        <img src="https://i.pravatar.cc/500?img=32"/>
      </div>
    </div> 
    <div className="avatar">
      <div className="mb-8 rounded-full w-24 h-24">
        <img src="https://i.pravatar.cc/500?img=32"/>
      </div>
    </div> 
    <div className="avatar">
      <div className="mb-8 rounded-full w-16 h-16">
        <img src="https://i.pravatar.cc/500?img=32"/>
      </div>
    </div> 
    <div className="avatar">
      <div className="mb-8 rounded-full w-10 h-10">
        <img src="https://i.pravatar.cc/500?img=32"/>
      </div>
    </div>
    </div>
  );
}

export default AvatarCircle;