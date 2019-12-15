import React from 'react';

import { Button } from 'semantic-ui-react'

import { constants } from '../../i18n';
import { colors } from '../../assets/semantic-colors';

const MenuButton = ({name, selectedButton, clickHandler}) => {

  const getButtonColor = (buttonName, selected) =>  {
    return buttonName === selected ? colors.primary : colors.grey;
  }

  return (
    <Button 
      onClick={() => clickHandler(name)}
      color={getButtonColor(name, selectedButton)}>
        {constants[name]}
    </Button>
  )
};

export { MenuButton };