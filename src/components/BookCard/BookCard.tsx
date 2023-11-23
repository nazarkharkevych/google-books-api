import * as React from 'react';
import { Card, Typography, CardContent, styled } from '@mui/material';
import Image from 'mui-image';
import { Book } from '../../types/book';

export const StyledTextGrey = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontWeight: '500'
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: '700',
  fontSize: '1.3rem'
}));

const StyledImage = styled(Image)(({ theme }) => ({
  maxWidth: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20px',
  filter: 'drop-shadow(11px 9px 8px grey)',
}));

type Props = {
  book: Book,
}

const BookCard = React.memo(({ book }: Props) => {
  return (
    <Card component="article" sx={(theme) => ({
      height: '100%',
      backgroundColor: theme.palette.grey[200],
      transition: 'all .3s ease-out',
      '&:hover': {
        transform: 'scale(101%)'
      },
    })}>
      <CardContent sx={{
        padding: '30px 15px',
        textAlign: 'start',
      }}>
        <StyledImage
          src={book.volumeInfo?.imageLinks?.thumbnail || ''}
          alt={book.volumeInfo.title}
          showLoading
          duration={1000}
          fit="initial"
        />

        {book.volumeInfo.categories && (
          <StyledTextGrey sx={{
            textDecoration: 'underline',
            marginBottom: '10px'
          }}>
            {book.volumeInfo.categories[0]}
          </StyledTextGrey>
        )}

        <StyledTitle variant="h2" sx={{
          marginBottom: '10px'
        }}>
          {book.volumeInfo.title}
        </StyledTitle>

        {book.volumeInfo.authors && (
          <StyledTextGrey>
            {book.volumeInfo.authors.join(', ')}
          </StyledTextGrey>
        )}
      </CardContent>
    </Card>
  )
});

export default BookCard;
