'use client';

import React from 'react'

function CommingSoon() {
    const countDownDate = new Date("nov 20, 2023 00:00:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);


      
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white mt-50">
        <h4 className='opacity-95 mb-0'>Elevate Your Sound</h4>
        <h1>UntitledOne</h1>

        <div className='fixed bottom-10 opacity-90'>
          <a href="/styleguide">This website is under development, but take a look at the <span className='text-primary hover:underline'>styleguide</span></a>
        </div>
      </div>



    </>

  )
}

export default CommingSoon