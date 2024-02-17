"use client";
import Button from "@/components/shared/Button";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import indicatorsArray from "../../../../utils/indicatorsData.js";

interface Indicator {
  ResultArray: any;
  IndicatorEndPoint: string;
  IndicatorName: string;
  InputParams: { Key: string; Name: string; default?: number; max?: number; min?: number; type?: string }[];
}

interface InputParams {
  [key: string]: string | number;
}

interface IndicatorData {
  indicatorName: string;
  inputParams: InputParams;
  resultArray: any
}



const IndicatorForm: any = ({ indicators, extraClass }: { indicators:any, extraClass:any }) => {
  const [indicatorsList, setIndicatorsList] = useState<IndicatorData[]>([]);
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);
  const [inputParams, setInputParams] = useState<InputParams>({});
  const [selectedIndicatorIndex, setSelectedIndicatorIndex] = useState<number | null>(null);
  const [autocompleteValue, setAutocompleteValue] = useState('');

  const handleAddIndicator = () => {
    if (selectedIndicator) {
      const newIndicator: IndicatorData = {
        indicatorName: selectedIndicator.IndicatorName,
        inputParams: { ...inputParams },
        resultArray: [...selectedIndicator.ResultArray]
      };
      setAutocompleteValue(''); // Reset the autocomplete selection
      setIndicatorsList((prevList) => [...prevList, newIndicator]);
      setSelectedIndicator(null);
      setInputParams({});
    }
  };

  const handleIndicatorChange = (event: React.ChangeEvent<{}>, newValue: string | null) => {
    const selected = indicatorsArray.find((indicator) => indicator.IndicatorName === newValue);
    setSelectedIndicator(selected || null);
    setInputParams({});
    setAutocompleteValue(newValue as any);
  };

  const handleParamChange = (paramKey: string, paramValue: string) => {
    setInputParams((prevParams) => ({ ...prevParams, [paramKey]: paramValue }));
  };

  const handleLogAllIndicators = () => {
    console.log('All Indicators Data:', indicatorsList);
  };

  const handleDeleteIndicator = (index: number) => {
    setIndicatorsList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className={`flex flex-col gap-4 ${extraClass}`}>
      <p>
      {indicatorsList.length}/20
      </p>
      {indicatorsList.map((indicator: IndicatorData, index: number) => (
        <div key={index} className="border border-gray-400 p-4 rounded flex flex-col gap-2">
          <div className="flex justify-between">
           <p className="font-semibold text-lg text-primary-800">Indicator {index + 1}</p>
            <p onClick={() => handleDeleteIndicator(index)} className="cursor-pointer text-red-800">Remove</p>
          </div>
          <p className="font-semibold text-lg">{indicator.indicatorName}</p>
          <div className="flex gap-2">
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                label="Interval"
                type="text"
                fullWidth
                variant="outlined"
                value={indicator.inputParams.interval || ''}
                disabled
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                label="Backtrack"
                type="text"
                fullWidth
                variant="outlined"
                value={indicator.inputParams.backtrack || ''}
                disabled
              />
            </FormControl>
            {Object.entries(indicator.inputParams).map(([key, value]) =>
              key !== 'interval' && key !== 'backtrack' ? (
                <FormControl fullWidth key={key}>
                  <TextField
                    autoFocus
                    margin="dense"
                    label={key}
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={value}
                    disabled
                  />
                </FormControl>
              ) : null
            )}
          </div>
        </div>
      ))}

      <FormControl fullWidth sx={{ marginTop: '8px' }}>
        <Autocomplete
          options={indicatorsArray.map((indicator) => indicator.IndicatorName)}
          onChange={handleIndicatorChange}
          value={autocompleteValue}
          renderInput={(params) => <TextField {...params} label="Select Indicator" variant="outlined" />}
        />
      </FormControl>

      {selectedIndicator && (
        <div className="flex gap-2">
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              label="Interval"
              type="text"
              fullWidth
              variant="outlined"
              value={inputParams.interval || ''}
              onChange={(e) => handleParamChange('interval', e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              label="Backtrack"
              type="text"
              fullWidth
              variant="outlined"
              value={inputParams.backtrack || ''}
              onChange={(e) => handleParamChange('backtrack', e.target.value)}
            />
          </FormControl>
          {selectedIndicator.InputParams.map((param) =>
            param.Key !== 'interval' && param.Key !== 'backtrack' ? (
              <FormControl fullWidth key={param.Key}>
                <TextField
                  autoFocus
                  margin="dense"
                  label={param.Name}
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={inputParams[param.Key] || ''}
                  onChange={(e) => handleParamChange(param.Key, e.target.value)}
                  placeholder={`Min: ${param.min || ''} Max: ${param.max || ''}`}
                />
              </FormControl>
            ) : null
          )}
        </div>
      )}

      <Button title="Add Indicator" type="primary" onClick={handleAddIndicator} />
      <Button title="Log All Indicators" type="primary" onClick={handleLogAllIndicators} />
    </div>
  );
};

export default IndicatorForm;
