import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-5 rounded-large mt-5'>
      <form action={addProduct} className='flex flex-wrap justify-between'>
        <input type="text" placeholder="title" name="title" required className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'/>
        <select name="cat" id="cat" className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'>
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'/>
        <input type="number" placeholder="stock" name="stock" required className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'/>
        <input type="text" placeholder="color" name="color" className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'/>
        <input type="text" placeholder="size" name="size" className='w-[45%] p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]' />
        <textarea
          required
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className='w-full p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'
        ></textarea>
        <button type="submit" className='w-full p-[30px] bg-teal-300 text-[var(--text)] border-0 rounded-[5px] cursor-pointer'>Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;