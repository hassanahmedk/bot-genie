'use client'
import DateTimePicker from '@/components/shared/MUIDateTimePicker';
import { FormData } from '@/interface/interface';
import { FormControl, TextField, InputLabel, Select, MenuItem, Checkbox, Autocomplete, InputAdornment } from '@mui/material'
import React, { useState } from 'react'


function AlertForm() {
  const [formData, setFormData] = useState<FormData>({
    alertName: '',
    exchange: '',
    multiPairCheck: false,
    pair: [],
    trigger: 'only_once',
    neverExpires: false,
    date: null,
    webhookUrl: '',
    alertMessage: '',
    receiveEmailNotification: false,
    receiveTelegramNotification: false,
  });

  const handleChange = (key: keyof FormData, value: string | boolean | string[]) => {
    // reset pairs
    if(key === "multiPairCheck"){
      setFormData((prevData) => ({
        ...prevData, 
        pair: []
      }))
    }

    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <FormControl fullWidth>
        <TextField
          autoFocus
          margin="dense"
          id="alert_name"
          label="Alert Name"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.alertName}
          onChange={(e) => handleChange('alertName', e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: '4px' }}>
        <InputLabel id="condition-select-label">Exchange</InputLabel>
        <Select
          labelId="condition-select-label"
          id="condition-select"
          label="Condition"
          variant="outlined"
          value={formData.exchange}
          onChange={(e) => handleChange('exchange', e.target.value as string)}
        >
          <MenuItem value="10">Bitcoin</MenuItem>
          <MenuItem value="20">Ethereum</MenuItem>
          <MenuItem value="30">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ marginTop: '8px' }}>
        <div className="flex items-center text-sm opacity-90 relative z-10">
          <Checkbox
            checked={formData.multiPairCheck}
            onChange={(e) => handleChange('multiPairCheck', e.target.checked)}
          />
          MultiPair
          <Autocomplete
            multiple={formData.multiPairCheck}
            disablePortal
            id="combo-box-demo"
            options={['BTC/USDT', 'ETH/USDT']}
            value={formData.pair}
            onChange={(_, newValue) => handleChange('pair', newValue)}
            sx={{ width: 420, marginLeft: 4 }}
            renderInput={(params) => <TextField {...params} label={`Symbol(s)`} />}
          />
        </div>
      </FormControl>

      {/* Trigger */}
      <FormControl fullWidth sx={{ marginTop: '8px' }}>
        <InputLabel id="trigger-select-label">Trigger</InputLabel>
        <Select
          labelId="trigger-select-label"
          id="trigger-select"
          label="Trigger"
          variant="outlined"
          value={formData.trigger}
          onChange={(e) => handleChange('trigger', e.target.value as string)}
        >
          <MenuItem sx={{ fontWeight: '500' }} value="only_once">
            Only Once
          </MenuItem>
          <MenuItem sx={{ fontWeight: '500' }} value="everytime">
            Every Time
          </MenuItem>
        </Select>
      </FormControl>
      
      <FormControl fullWidth>
        <DateTimePicker 
          value={formData.neverExpires ? null : formData.date} 
          onChange={(newValue:any) => handleChange('date', newValue)} 
          disabled={formData.neverExpires}
          />
      </FormControl>
      
      {/* Never Expires */}
      <FormControl fullWidth sx={{ marginTop: '8px' }}>
        <div className="flex items-center text-sm opacity-90 relative z-10">
          <Checkbox
            checked={formData.neverExpires}
            onChange={(e) => handleChange('neverExpires', e.target.checked)}
          />
          Never Expires
        </div>
      </FormControl>
      
      <FormControl fullWidth>
        <TextField
          autoFocus
          margin="dense"
          id="webhook_url"
          label="Webhook URL"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.webhookUrl}
          onChange={(e) => handleChange('webhookUrl', e.target.value)}
        />
      </FormControl>

      {/* Alert Message */}
      <FormControl fullWidth>
        <TextField
          autoFocus
          margin="dense"
          id="alert_message"
          label="Alert Message"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          minRows={3}
          value={formData.alertMessage}
          onChange={(e) => handleChange('alertMessage', e.target.value)}
        />
      </FormControl>

      {/* Receive Email Notification */}
      <FormControl fullWidth>
        <div className="flex items-center text-sm opacity-90">
          <Checkbox
            checked={formData.receiveEmailNotification}
            onChange={(e) => handleChange('receiveEmailNotification', e.target.checked)}
          />
          Receive Email Notification upon trigger at{' '}
          <span className="font-semibold text-primary-800">lorem@ipsum.com</span>
        </div>
      </FormControl>

      {/* Receive Telegram Notification */}
      <FormControl fullWidth>
        <div className="flex items-center text-sm opacity-90">
          <Checkbox
            checked={formData.receiveTelegramNotification}
            onChange={(e) => handleChange('receiveTelegramNotification', e.target.checked)}
          />
          Receive Telegram Notification upon trigger at{' '}
          <span className="font-semibold text-primary-800">@loremipsum</span>
        </div>
      </FormControl>

    </div>
  );
}

export default AlertForm;
