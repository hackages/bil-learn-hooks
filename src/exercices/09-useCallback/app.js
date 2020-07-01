import React, {useState, useCallback, useEffect} from 'react';
import {Container, Button} from '../../helpers/Styled';

export const Exercise9 = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(c => c + 1);
  };

  return (
    <Container>
      <p>{count}</p>
      <ChildComponent inc={inc} />
    </Container>
  );
};

const ChildComponent = ({inc}) => {
  console.log('The Button component has rerended');
  return (
    <div>
      <Button onClick={inc}>+</Button>
    </div>
  );
};
