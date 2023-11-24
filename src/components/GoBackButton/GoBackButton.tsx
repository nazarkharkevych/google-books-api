import * as React from 'react';
import { Button, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '10px',
  color: theme.palette.common.black
}));

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <StyledButton onClick={handleClick}>
      <ArrowBackIcon />
      Go back
    </StyledButton>
  )
};

export default GoBackButton;
