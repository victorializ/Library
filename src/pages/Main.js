import React from 'react';
import { Header } from 'semantic-ui-react'

import { constants } from '../i18n';

import image from "../assets/images/books.jpg";

function Main() {
  return (
    <>
      <img 
        src={image} 
        alt="Library"
        className="main__image">  
      </img>
      <Header 
        as='h1' 
        textAlign="center"
        className="main__label">
        {constants.title}
      </Header>
    </>
  );
}

export { Main };