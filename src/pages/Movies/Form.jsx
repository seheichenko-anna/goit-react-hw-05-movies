import React from 'react';
import { useForm } from 'react-hook-form';

import s from './Form.module.css';

const Form = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    setSearchParams(data.searchValue ? { query: data.searchValue } : {});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={s.form}>
      <input {...register('searchValue')} type="search" className={s.input} />
      <button className={s.button}>Search</button>
    </form>
  );
};

export default Form;
