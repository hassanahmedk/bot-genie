'use client'
import { Grid, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function ConditionForm() {
  const [expression, setExpression] = useState('');

    const handleOptionClick = (option: string) => {
      // Append the selected option to the existing expression
      setExpression((prevExpression) => prevExpression + ' ' + option);
    };
  
    return (
      <Grid container spacing={2}>
        {/* Options */}
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('(')}>
            (
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('(')}>
            )
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('AND')}>
            AND
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('OR')}>
            OR
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('>')}>
            {'>'}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('<')}>
            {'<'}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('isTrue')}>
            isTrue
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => handleOptionClick('isFalse')}>
            isFalse
          </Button>
        </Grid>
  
        {/* Text Field */}
        <Grid item xs={12}>
          <TextField
            label="Expression"
            variant="outlined"
            fullWidth
            value={expression}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    );
  
}

export default ConditionForm
