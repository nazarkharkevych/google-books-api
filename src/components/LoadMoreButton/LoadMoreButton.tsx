import * as React from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../app/hooks';

type Props = {
  loadHandler: () => void,
}

const LoadMoreButton = ({ loadHandler }: Props) => {
  const isLoading = useAppSelector(state => state.books.isLoading);

  return (
    <Box sx={{
      padding: '2rem'
    }}>
      <Button variant="contained" onClick={loadHandler}>
        {isLoading
          ? (
            <CircularProgress sx={(theme) => ({
              color: '#fff',
              width: '25px!important',
              height: '25px!important'
            })} />
          )
          : 'Load More'}
      </Button>
    </Box>
  )
};

export default LoadMoreButton;
