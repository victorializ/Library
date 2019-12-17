import React, { useState } from 'react';

import { Form, Button } from 'semantic-ui-react';
import { constants } from '../../../i18n';

function AuthorAddForm({submit}) {
    const [ author, setAuthor ] = useState({
        firstName: "", 
        lastName: ""
    });
    const handleChange =  ({target: {name, value}}) => {
        setAuthor({
          ...author, 
          [name]: value
        })
      } 
    return (
        <Form className="new_author_form">
            <Form.Field>
                <label>
                    {constants.firstName}
                </label>
                <input 
                    name="firstName"
                    value={author.firstName}
                    placeholder={constants.firstName} 
                    onChange={handleChange} 
                />
            </Form.Field>
            <Form.Field>
                <label>
                    {constants.lastName}
                </label>
                <input 
                    name="lastName"
                    value={author.lastName}
                    placeholder={constants.lastName} 
                    onChange={handleChange}
                />
            </Form.Field>
            <Button 
                fluid
                onClick={() => submit(author)}>
                {constants.add}
            </Button>
        </Form>
    );
}

export { AuthorAddForm };