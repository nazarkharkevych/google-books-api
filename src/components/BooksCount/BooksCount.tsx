import * as React from 'react';
import { Box, Typography } from '@mui/material';

const BooksCount = ({ count }: { count: number }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      paddingBlock: '1rem'
    }}>
      <Typography>
        {`Found ${count} results`}
      </Typography>
    </Box>
  )
};

export default BooksCount;
