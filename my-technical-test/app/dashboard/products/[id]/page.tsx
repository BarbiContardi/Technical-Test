import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";
import React from 'react'

interface SingleUserPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage: React.FC<SingleUserPageProps> = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-[1] bg-[var(--bgSoft)] p-5 rounded-large font-extrabold text-[var(--textSoft)] max-h-max">
        <div className="w-full h-[300px] relative rounded-large overflow-hidden mb-5">
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className="flex-[3] bg-[var(--bgSoft)] p-5 rounded-large">
        <form action={updateProduct} className="flex flex-col">
          <input type="hidden" name="id" value={product.id} className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"/>
          <label className="text-sm">Title</label>
          <input type="text" name="title" placeholder={product.title} className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5" />
          <label className="text-sm">Price</label>
          <input type="number" name="price" placeholder={product.price} className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5" />
          <label className="text-sm">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5" />
          <label className="text-sm">Color</label>
          <input
          className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label className="text-sm">Size</label>
          <textarea name="size" placeholder={product.size || "size"} className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"/>
          <label className="text-sm">Cat</label>
          <select name="cat" id="cat" className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-sm">Description</label>
          <textarea
          className="p-5 bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] my-2.5"
            name="desc"
            id="desc"
            rows={10}
            placeholder={product.desc}
          ></textarea>
          <button className="w-full p-5 bg-teal-300 text-[var(--text)] border-0 rounded-[5px] cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
