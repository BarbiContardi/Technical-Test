import React from 'react'
interface Pagi {
    isDisabled: boolean;
    onClick: ()=> void
  }

  const Pagination: React.FC<Pagi> = ({isDisabled, onClick}) => {
    return (
      <div className='p-2.5 flex justify-between'>
          <button onClick={onClick} className={`button px-2.5 py-[5px] ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    disabled={isDisabled}>Previous</button>
          <button onClick={onClick} className={`button px-2.5 py-[5px] ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    disabled={isDisabled}>Next</button>
      </div>
    )
  }

  export default Pagination
