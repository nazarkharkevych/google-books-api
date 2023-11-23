import * as React from 'react';
import { Select, styled, alpha, FormLabel } from '@mui/material';

type Props = {
  name: string,
  labelText: string,
  value: string,
  handleOnChange: (value: string) => void,
  children: React.ReactNode
}

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  minWidth: '150px',
  marginBlock: '10px',
  '& .MuiSelect-select': {
    border: 'none',
    padding: '5px 10px'
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  [theme.breakpoints.up('sm')]: {
    marginBlock: '20px',
  },
  [theme.breakpoints.up('md')]: {
    marginBlock: '30px',
    minWidth: '200px',
  }
}));

const StyledLabel = styled(FormLabel)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.95),
  marginRight: '10px'
}));

const SelectElement = ({
  name,
  children,
  value,
  labelText,
  handleOnChange,
}: Props) => {
  const handleChange = (event: any) => {
    handleOnChange(event.target.value as string);
  }

  return (
    <>
      <StyledLabel htmlFor={name} id={`${name}-label`}>
        {labelText}
      </StyledLabel>

      <StyledSelect
        id={name}
        labelId={`${name}-label`}
        aria-describedby={name}
        name={name}
        value={value}
        onChange={handleChange}
        displayEmpty
      >
        {children}
      </StyledSelect>
    </>
  )
};

export default SelectElement;
