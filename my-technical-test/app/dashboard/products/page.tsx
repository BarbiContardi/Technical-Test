import Search from "@/app/ui/dashboard/Search";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";
import Pagination from "@/app/ui/dashboard/Pagination";

interface SearchParams {
  q?: string;
  page?: number;
}
const ProductPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className='bg-[var(--bgSoft)] p-5 rounded-large mt-5'>
      <div className='flex items-center justify-between'>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className='p-2.5 bg-[#5d57c9] text-[var(--text)] rounded-[5px] border-0 cursor-pointer'>Add New</button>
        </Link>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <td className='p-2.5'>Title</td>
            <td className='p-2.5'>Description</td>
            <td className='p-2.5'>Price</td>
            <td className='p-2.5'>Created At</td>
            <td className='p-2.5'>Stock</td>
            <td className='p-2.5'>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='p-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className='object-cover rounded-full'
                  />
                  {product.title}
                </div>
              </td>
              <td className='p-2.5'>{product.desc}</td>
              <td className='p-2.5'>${product.price}</td>
              <td className='p-2.5'>{product.createdAt?.toString().slice(4, 16)}</td>
              <td className='p-2.5'>{product.stock}</td>
              <td className='p-2.5'>
                <div className='flex gap-2.5'>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className='px-2.5 py-[5px] text-[var(--text)] border-0 cursor-pointer bg-teal-300'>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className='px-2.5 py-[5px] text-[var(--text)] border-0 cursor-pointer bg-[#D0114F]'>
                        Delete
                      </button>
                    </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
      <Pagination isDisabled={false}/>
    </div>
  );
};
export default ProductPage;
