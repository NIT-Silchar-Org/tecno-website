import React from 'react'
import FacebookCircledIcon from '../../../style-guide/utils/Icons/FacebookCircledIcon'
import InstagramCircledIcon from '../../../style-guide/utils/Icons/InstagramCircledIcon'
import LinkedinCircledIcon from '../../../style-guide/utils/Icons/LinkedinCircledIcon'
import TwitterCircledIcon from '../../../style-guide/utils/Icons/TwitterCircledIcon'


const Socials = () => {
  return (
      <div className='absolute h-[50vh] md:h-[80vh] w-16 text-white top-[48vh] md:top-44 left-4 md:left-8 z-20'>
          <div className='my-8 p-3 border-gray-500 border-[4px] rounded-full cursor-pointer hover:shadow-gradient'><FacebookCircledIcon color='white' width='35px' height='30px'/></div>
          <div className='my-8 p-3 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient'><InstagramCircledIcon color='white' width='35px' height='30px'/></div>
          <div className='my-8 p-3 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient'><LinkedinCircledIcon color='white' width='35px' height='30px'/></div>
          <div className='my-8 p-3 border-gray-500 border-[4px]  rounded-full cursor-pointer hover:shadow-gradient'><TwitterCircledIcon color='white' width='35px' height='30px'/></div>
          
    </div>
  )
}

export default Socials