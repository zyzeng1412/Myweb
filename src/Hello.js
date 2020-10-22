import React from 'react';
import Box from '@material-ui/core/Box';
import TypedHello from './Typed.js';

export default function Hello() {
  return (
    <Box m="auto">
      <TypedHello 
        strings={[
          "<strong>Nice to meet you!</strong>",
          "<strong>I'm Ziyun Zeng</strong>",
        ]}
      />
    </Box>
  );
}
