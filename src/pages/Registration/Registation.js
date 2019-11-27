import React, { useState } from 'react';

function Registration() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ error, setError ] = useState('');
  const [ checked, check ] = useState(false);

  return (
    <div>Reg</div>
  );
}

export { Registration };