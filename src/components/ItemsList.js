import React  from 'react';

import { Card } from 'semantic-ui-react';

//TODO: clerify id everywhere 
function ItemsList({data, Component, ...rest}) {
  return (
    <Card.Group>
      {
        data.map(element => 
          <Component 
            key={element.id} 
            item={element} 
            {...rest}
          />) 
      }
    </Card.Group>
  );
}

export { ItemsList };
