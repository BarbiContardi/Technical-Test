import Image from 'next/image'
import React from 'react'

const Transactions = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-5 rounded-large'>
      <h2 className='mb-5 text-[var(--textSoft)] font-extralight'>Latest Transactions</h2>
      <div className="overflow-x-auto">
      <table className='w-full text-sm md:text-base'>
        <thead>
          <tr>
            <td className='p-2.5'>Name</td>
            <td className='p-2.5'>Status</td>
            <td className='p-2.5'>Date</td>
            <td className='p-2.5'>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Barbara
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-sm p-[5px] text-sm text-white bg-[#f7cb7375]'>
                Pending
              </span>
            </td>
            <td className='p-2.5'>14.02.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Yoel
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-sm p-[5px] text-sm text-white bg-[#afd6ee75]'>Done</span>
            </td>
            <td className='p-2.5'>14.02.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Avril
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-sm p-[5px] text-sm text-white bg-[#f7737375]'>
                Cancelled
              </span>
            </td>
            <td className='p-2.5'>14.02.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
          <tr>
            <td className='p-2.5'>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className='object-cover rounded-full'
                />
                Jose
              </div>
            </td>
            <td className='p-2.5'>
              <span className='rounded-sm p-[5px] text-sm text-white bg-[#f7cb7375]'>
                Pending
              </span>
            </td>
            <td className='p-2.5'>14.02.2024</td>
            <td className='p-2.5'>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Transactions;