'use client'
import DateTimePicker from '@/components/shared/MUIDateTimePicker';
import { FormData } from '@/interface/interface';
import { FormControl, TextField, InputLabel, Select, MenuItem, Checkbox, Autocomplete, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '@/components/shared/Button';
import CancelIcon from '@mui/icons-material/Cancel';


function AlertForm({
  formData, 
  handleChange,
  addWebhook, 
  handleWebhookChange, 
  webhooks:webhooksFromProps,
  handleDeleteWebhook
}
:any) {

  const [webhooks, setWebhooks] = useState<any>([]);
  const [symbolsLoading, setSymbolsLoading] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<[string]>(['Please select exchange to load symbols']);

  useEffect(() => {
    setWebhooks(webhooksFromProps)
  }, [webhooksFromProps])

  async function handleExchangeChange(e: any) {
    setSymbolsLoading(true);
    let exchange = e.target.value;
    handleChange('exchange', exchange as string);

    try {
      const response = await fetch('/api/dashboard/alerts/get-symbols', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'exchange': exchange
        },
      });
      const data = await response.json();
      console.log("symbols", symbols)
      setSymbols(data.data);
    } catch (error) {
      console.log(error);
      setSymbols(["An error occured, please try reloading."]);
    }
    setSymbolsLoading(false);

  }

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
          onChange={handleExchangeChange}
        >
          <MenuItem value="stocks">US Stocks</MenuItem>
          <MenuItem value="binance">Binance</MenuItem>
          <MenuItem value="binancefutures">Binance Futures</MenuItem>
          <MenuItem value="bitstamp">Bitstamp</MenuItem>
          <MenuItem value="whitebit">WhiteBIT</MenuItem>
          <MenuItem value="bybit">ByBit</MenuItem>
          <MenuItem value="gateio">Gate.io</MenuItem>
          <MenuItem value="coinbase">Coinbase</MenuItem>
          <MenuItem value="binanceus">Binance US</MenuItem>
          <MenuItem value="kraken">Kraken</MenuItem>

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
            options={symbols}
            value={formData.pair}
            onChange={(_, newValue) => handleChange('pair', newValue as any)}
            sx={{ width: 420, marginLeft: 4 }}
            disabled={symbolsLoading}
            renderInput={(params) => <TextField {...params} label={symbolsLoading ? "Loading symbols..." : `Symbol(s)`} />}
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
          value={formData.expiration} 
          onChange={(newValue:any) => handleChange('expiration', newValue)} 
          disabled={formData.neverExpires}
          />
      </FormControl>
      
      {/* Never Expires */}
      <FormControl fullWidth sx={{ marginTop: '8px' }}>
        <div className="flex items-center text-sm opacity-90 relative z-10">
          <Checkbox
            checked={formData.neverExpires}
            onChange={(e) => {
              handleChange('neverExpires', e.target.checked)
              // to bypass the null value check
              handleChange('expiration', new Date(Date.now() + 86400000))
            }}
          />
          Never Expires
        </div>
      </FormControl>
      <div className="flex flex-col gap-4 my-2">
      {
        webhooks.map((webhook:any, webhookIndex:number) => {
          return(
          <div key={webhookIndex} className='p-4 border-gray-400 border'>
            <div className='flex justify-between mb-2'>
              <h3 className="text-lg font-semibold">Webhook - {webhookIndex+1}</h3>
              <p onClick={() => handleDeleteWebhook(webhookIndex)} className="cursor-pointer text-red-800">Remove</p>
            </div>
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                id="webhook_url"
                label="Webhook URL"
                type="text"
                fullWidth
                variant="outlined"
                value={webhook.webhookURL}
                onChange={(e) => handleWebhookChange("webhookURL", e.target.value, webhookIndex)}
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
                value={webhook.message}
                onChange={(e) => handleWebhookChange("message", e.target.value, webhookIndex)}
              />
            </FormControl>
          </div>
          )
        })
      }
      </div>
      {
        webhooks.length < 6 
        ?
        <MyButton title="Add Webhook" size="small" type="secondary" 
            onClick={addWebhook} 
            className="text-sm py-1" 
        />
        : null
      }

      {/* Receive Email Notification */}
      <FormControl fullWidth>
        <div className="flex items-center text-sm opacity-90">
          <Checkbox
            checked={formData.emailNotification}
            onChange={(e) => handleChange('emailNotification', e.target.checked)}
          />
          Receive Email Notification upon trigger at{' '}
          <span className="font-semibold text-primary-800">lorem@ipsum.com</span>
        </div>
      </FormControl>

      {/* Receive Telegram Notification */}
      <FormControl fullWidth>
        <div className="flex items-center text-sm opacity-90">
          <Checkbox
            checked={formData.telegramNotification}
            onChange={(e) => handleChange('telegramNotification', e.target.checked)}
          />
          Receive Telegram Notification upon trigger at{' '}
          <span className="font-semibold text-primary-800">@loremipsum</span>
        </div>
      </FormControl>

    </div>
  );
}

export default AlertForm;
