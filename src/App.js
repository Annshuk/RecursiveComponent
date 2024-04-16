import React, { useMemo, useState } from 'react';
import { Box } from 'rebass';

const intialValue = {
  test1: true,
  test2: false,
  test3: false,
};

const App = (props) => {
  const [formData, setForm] = useState(intialValue);

  return (
    <Box mt="1rem">
      <input type="checkbox" /> Check/unchecked
      <Box mt="1rem"></Box>
    </Box>
  );
};

export default App;
