import React from "react";
import Announce from "../Components/Announce";
import Counter from "../Components/Counter";
import Footer from "../Components/Footer";
import Navbaar from "../Components/Navbaar";
import Newsletter from "../Components/Newsletter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbaar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            alt="product_image"
            className=" w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration"
          />
        </div>
        <div className="flex-[1.3]  flex items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px]">Creamy Hoody Original</h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            assumenda laborum fugit nesciunt ducimus officiis eum, odio tempore
            praesentium. Veritatis repellendus quo voluptatum eos, mollitia
            molestias optio molestiae error accusamus.
          </p>
          <p className="mt-7 text-3xl">Price: <b>$70</b></p>
          <div className="flex text-2xl mt-7">
            {/* colors variants */}
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
                <option selected disabled>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
          </div>
         <div className="mt-6">
          <Counter/>
         </div>
       <button className="btn mt-6">Add to Cart</button>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
