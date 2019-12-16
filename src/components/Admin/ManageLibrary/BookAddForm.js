import React, { useState } from 'react';

import { Form, Button } from 'semantic-ui-react';
import { constants } from '../../../i18n';

const BookAddForm = ({submit}) => {
    const [ book, setBook ] = useState({
        Name: "", 
        BookYear: "", 
        NumberAvailable: ""
      });
    const handleChange =  ({target: {name, value}}) => {
        setBook({
          ...book, 
          [name]: value
        });
    }; 
    return (
        <Form>
            <Form.Field>
                <label>
                    {constants.name}
                </label>
                <input 
                name="Name"
                value={book.Name}
                placeholder={constants.name}
                onChange={handleChange}>
            </input>
            </Form.Field>
            <Form.Field>
                <label>
                    {constants.bookYear}
                </label>
                <input 
                name="BookYear"
                value={book.BookYear}
                placeholder={constants.bookYear}
                onChange={handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>
                    {constants.numberAvalible}
                </label>
                <input 
                name="NumberAvailable"
                value={book.NumberAvailable}
                placeholder={constants.numberAvalible}
                onChange={handleChange}/>
            </Form.Field>
            <Button onClick={() => submit(book)}>
                {constants.add}
            </Button>
        </Form>
    )
}

export { BookAddForm };