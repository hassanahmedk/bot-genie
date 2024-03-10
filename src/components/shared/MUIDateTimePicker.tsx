"use client"
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker as  DateTimePickerComponent} from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePicker(props:any ) {
  const [disabled, setDisabled] = React.useState<boolean>(false);

  React.useEffect(()=>{
    setDisabled(props.disabled);
  }, [props.disabled])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePickerComponent disabled={disabled} value={props.value} onChange={props.onChange} label="Expiration" />
      </DemoContainer>
    </LocalizationProvider>
  );
}
