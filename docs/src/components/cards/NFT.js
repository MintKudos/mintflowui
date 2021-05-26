import React from "react";

function NFT() {
  return (
    <div className="flex space-x-4">
      <div className="card bordered max-w-xs">
        <div className="card-user">
            <div className="avatar">
              <div className="rounded-full w-7 h-7">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
            </div>
          </div>
        <figure className="px-4">
          <img src="https://picsum.photos/id/1005/400/250" className="h-56 object-cover rounded-xl" />
        </figure>  
        <div className="card-body">
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <p className="body-large">Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
          <div className="justify-end card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 font-bold gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      <div className="card bordered">
        <div className="card-user">
            <div class="avatar items-center">
              <div class="rounded-full w-7 h-7">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
              </div>
              <p className="body-large ml-2 text-base-content">@username</p>
            </div>
          </div>
        <figure className="px-4">
          <img src="https://picsum.photos/id/1005/400/250" className="h-80 object-cover rounded-xl" />
        </figure>  
        <div className="card-body">
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <div className="justify-start card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
      <div className="card bordered">
        <figure className="card-image">
          <img src="https://picsum.photos/id/1005/400/250" className="h-80 object-cover rounded-xl" />
        </figure> 
        <div className="card-body">
        <div class="avatar">
              <div class="rounded-full w-6 h-6">
                <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
              </div>
              <p className="ml-2 body-large text-base-content">@username</p>
            </div>
          <h2 className="card-title font-heading h6">Title of my NFT</h2> 
          <div className="card-details">
            <p className="font-body caption-large text-base-300"> Current price</p> 
            <p className="pl-2 h6 gradient-four">0.80 ETH</p>
          </div>
        </div>
      </div>
    </div>
    );
}
                
export default NFT;