import React  from 'react';

import { Card } from 'semantic-ui-react';

function ItemsList({data, Component}) {
    return (
      <Card.Group>
        {
          data.map(element => 
            <Component key={element.id} item={element} />) 
        }
      </Card.Group>
    )
}

export { ItemsList };
