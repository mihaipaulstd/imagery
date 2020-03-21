import React from 'react';
import { connect } from 'react-redux';


import FormTitle from './FormTitle';
import FormInput from './FormInput';
import { fetchImages } from '../actions/fetchImages'

const SearchForm = ({ fetchImages }) => 
  <header>
    <form
      onSubmit={e => {
        e.preventDefault();
        fetchImages();
      }}  
      className="searchForm"
    >
      <FormTitle />
      <FormInput />
    </form>
  </header>


export default connect(null, { fetchImages })(SearchForm);