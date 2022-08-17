import React from 'react';

const ContactUs = () => {
    return (
        <div className='min-h-screen py-32 bg-base-200'>
 
     <h1 className='text-5xl text-center pb-14'>For any query, Please Contact us</h1>
    <div class="card max-w-3xl mx-auto  shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Type Your Message</span>
          </label>
          <textarea name="" id="" cols="30" rows="10" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
         
        </div>
        
          <button class="btn ">Send</button>
        
      </div>
    </div>
  </div>

       
    );
};

export default ContactUs;