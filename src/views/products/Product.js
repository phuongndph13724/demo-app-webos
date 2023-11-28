import React, { useEffect, useRef } from 'react';
import Spotlight from '@enact/spotlight';
import Button from '@enact/sandstone/Button';
import Spottable from '@enact/spotlight/Spottable';



const Product = () => {
  const SpottableButton = Spottable('button');
  const SpottableDiv = Spottable('div');
  const divRef = useRef(null);
  const containerId = "myUniqueContainerId";
  Spotlight.add('myUniqueContainerId', {
    enterTo: 'last-focused',
    // thêm các cấu hình khác ở đây nếu cần
  });


  const handleRemoteControl = (ev) => {
    console.log(ev.keyCode);
    switch (ev.keyCode) {
      case 37: // Mã cho nút trái
        break;

      case 38: // Mã cho nút lên
        break;

      case 39: // Mã cho nút phải
        break;

      case 40: // Mã cho nút xuống
        break;

      case 13: // Mã cho nút Enter
        break;
    }
  }

  return (
    <div ref={divRef} className='py-2'>
      <Button onClick={() => console.log(123)}>Click</Button>
      <div className='grid grid-cols-4 gap-2 p-4'>
        <SpottableButton className='bg-gray-600 rounded focus:bg-green-300 focus:ring-2 focus:ring-red-200' onClick={() => console.log(123)}>Button 1 123</SpottableButton>
        <SpottableDiv
          // key={index}
          className={`product flex focus:bg-red-200 focus:ring-2 cursor-pointer flex-col justify-center rounded-lg bg-blue-100 text-black p-2`}
          data-spotlight-focusable={true}
        >
          <img width={50} height={50} src="https://bled.vn/wp-content/uploads/2023/01/anh-san-pham-002.jpg" alt="" />
          <p className='text-lg'>Title</p>
          <span className='text-sm'>Description</span>
          <span className='text-sm'>price</span>
        </SpottableDiv>
      </div>
    </div>
  )
}



export default Product