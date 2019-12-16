import React, { useState } from 'react';

import { newBook, addAuthor, getAllAuthors } from '../../../services/http-client';
import { LoadingComponent, Book } from '../../index';
import { Dropdown, Segment, Form, Button } from 'semantic-ui-react';
import { useRequest } from '../../../hooks';

function ManageBooks() {
    const [book, setBook ] = useState(null);
    const addBookResponse = useRequest(newBook, [book.Name, book.BookYear, book.NumberAvailable], book);
    
    const [a, setA] = useState({
      loading: false, 
      success: null, 
      error:  {message: ""}
    });
    const [ authors, setAuthors ] = useState({
      data: [], 
      loading: false
    });
    
    const submit = () => {
      setA(
        {
          loading: true, 
          success: false, 
          error:  {message: ""}
        });
      newBook(book.Name, book.BookYear, book.NumberAvailable).then(
        () => setA(
          {
            loading: false, 
            success: true, 
            error:  {message: ""}
          }
        )
      )
      setAuthors({
        data: [], 
        loading: true
      })
      getAllAuthors().then(
        res => setAuthors({
          data: res.data, 
          loading: false
        })
      )
    }
    const handleChange =  ({target: {name, value}}) => {
      setBook({
        ...book, 
        [name]: value
      })
    } 
    const getBook = () => {
      return {
        name: book.Name, 
        bookYear: book.BookYear, 
        numberAvailable: book.NumberAvailable,
        bookAuthors: '', 
        bookGenres: ''
      }
    }
    const getAuthors = () => {
      return authors === null ? 
        [] : authors.data.map(
          author => {
            return {
              key: author.authorId,
              value: author.authorId, 
              text: `${author.firstName} ${author.lastName}`
            }
          }
        );
    }
    const addAuthorToBook = (value) => {
      addAuthor(1, value).then(
        res => console.log(res)
      )
    }
    return (
      <div className="new_author">
        {a.success !== null && <LoadingComponent
            data={a.success}
            error={a.error}
            WrappedComponent={() => <Book book={getBook()} />}
          />}
          {(a.success !== null && !a.error.message) &&
            <div>
          
               <Dropdown 
                search
                selection
                loading={authors.loading} 
                onChange={(e, {value}) => addAuthorToBook(value)}
                placeholder="Authors"
                options={getAuthors()}
              />
          
            </div>
          }
        {a.success === null && <Form className="new_author_form">
          {a.success !== null && <LoadingComponent
            data={a.success}
            error={a.error}
            WrappedComponent={() => <Segment>Success!</Segment>}
          />}
          <Form.Field>
            <label>
              Name
            </label>
            <input 
              name="Name"
              value={book.Name}
              placeholder="Name"
              onChange={handleChange}>
            </input>
          </Form.Field>
          <Form.Field>
            <label>
              Year
            </label>
            <input 
              name="BookYear"
              value={book.BookYear}
              placeholder="Year"
              onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>
              Number Available
            </label>
            <input 
              name="NumberAvailable"
              value={book.NumberAvailable}
              placeholder="Number Available"
              onChange={handleChange}/>
          </Form.Field>
          <Button onClick={submit}>Submit</Button>
        </Form>
      } 
    </div>
    )
  }

export { ManageBooks };