import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ setSearchParams }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    setSearchParams(data.searchValue ? { query: data.searchValue } : {});
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('searchValue')} type="search" />
      <button>Search</button>
    </form>
  );
};

export default Form;
