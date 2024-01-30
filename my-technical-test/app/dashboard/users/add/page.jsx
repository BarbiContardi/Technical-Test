import { addUser } from "@/app/lib/actions";

const AddUserPage = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-5 rounded-large mt-5'>
    <form action={addUser} className='flex flex-wrap justify-between'>
      <input type="text" placeholder="username" name="username" required className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3' />
      <input type="email" placeholder="email" name="email" required className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3' />
      <input
        type="password"
        placeholder="password"
        name="password"
        required
        className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3'
      />
      <input type="phone" placeholder="phone" name="phone" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3' />
      <select name="isAdmin" id="isAdmin" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3'>
        <option value="false">
          Is Admin?
        </option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <select name="isActive" id="isActive" className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-md mb-3'>
        <option value="true">
          Is Active?
        </option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <textarea
        name="address"
        id="address"
        rows={16}
        placeholder="Address"
        className='w-full p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-customColor rounded-[5px] mb-[30px]'
      ></textarea>
      <button type="submit" className='w-full p-[30px] bg-teal-300 text-[var(--text)] border-0 rounded-[5px] cursor-pointer'>Submit</button>
    </form>
  </div>
  );
};

export default AddUserPage;
