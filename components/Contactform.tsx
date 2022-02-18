import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import { Button } from './elements/Button';
const Contactform = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  async function onSubmitForm(values: { [x: string]: any }) {
    try {
      const response = await axios({
        method: 'post',
        url: `/api/contact`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: values,
      });
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className='w-4/5 max-w-2xl mx-auto mt-20 shadow-xl p-5 rounded-2xl grid gap-5'
    >
      <div>
        <label htmlFor='name' className='sr-only'>
          Full name
        </label>
        <input
          type='text'
          {...register('name', {
            required: {
              value: true,
              message: 'You must enter your name',
            },
          })}
          className={`block bg-stone-100 w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-stone-500 focus:border-stone-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
            errors.name ? 'ring-2 ring-red-500' : null
          }`}
          placeholder='Full name'
        />
        <span className='text-red-400 text-sm py-2'>
          {errors?.name?.message}
        </span>
      </div>
      <div>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          type='text'
          {...register('email', {
            required: {
              value: true,
              message: 'You must enter your email address',
            },
            minLength: {
              value: 8,
              message: 'This is not long enough to be an email',
            },
            maxLength: {
              value: 120,
              message: 'This is too long',
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'This needs to be a valid email address',
            },
          })}
          className={`block bg-stone-100 w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-stone-500 focus:border-stone-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? 'ring-2 ring-red-500' : null
          }`}
          placeholder='Email'
        />
        <span className='text-red-400 text-sm py-2'>
          {errors?.email?.message}
        </span>
      </div>
      <div>
        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          rows={4}
          {...register('message', {
            required: {
              value: true,
              message: 'You need to enter your message',
            },
            maxLength: {
              value: 1000,
              message: "Your message can't be more than 1000 characters",
            },
            minLength: {
              value: 15,
              message: 'Your message must be longer than this!',
            },
          })}
          className={`block bg-stone-100 w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-stone-500 focus:border-stone-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
            errors.message ? 'ring-2 ring-red-500' : null
          }`}
          placeholder='Message'
        ></textarea>
        <span className='text-red-400 text-sm py-2'>
          {errors?.message?.message}
        </span>
      </div>
      <div>
        <Button
          type='submit'
          className='  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500'
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Contactform;
