import React from 'react';

const Container_left = () => {
  return (
    <div>
      <div className="absolute top-1/4 left-0 p-10 ">
        <img
          src="/image/rounded.jpg"
          className="w-40 md:w-auto h-auto md:h-40 rounded-lg absolute -top-5 -right-5"
          alt="Rounded"
        />
        <img
          src="/image/rounded.jpg"
          className="w-60 md:w-auto h-auto md:h-60 rounded-lg"
          alt="Rounded"
        />
      </div>
    </div>
  );
};

export default Container_left;
