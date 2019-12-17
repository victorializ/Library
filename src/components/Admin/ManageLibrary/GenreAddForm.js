import React, { useState } from 'react';

import { Form, Button } from 'semantic-ui-react';
import { constants } from '../../../i18n';

function GenreAddForm({submit}) {
    const [ genre, setGenre ] = useState({name: ""});
    return (
        <Form>
            <Form.Field>
                <label>
                    {constants.bookGenre}
                </label>
                <input 
                    value={genre.name}
                    placeholder={constants.bookGenre} 
                    onChange={({target: {value}}) => setGenre({name: value})} 
                />
            </Form.Field>
            <Button 
                fluid
                onClick={() => submit(genre)}>
                {constants.add}
            </Button>
        </Form>
    );
}

export { GenreAddForm };