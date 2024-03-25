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
import React, { useEffect, useState } from "react";
import MyButton from "@/components/shared/Button";

import indicatorsArray from "../../../../utils/indicatorsData.js";

interface Indicator {
  ResultArray: any;
  IndicatorEndPoint: string;
  IndicatorName: string;
  InputParams: {
    Key: string;
    Name: string;
    default?: number;
    max?: number;
    min?: number;
    type?: string;
  }[];
}

interface InputParams {
  [key: string]: string | number;
}

interface IndicatorData {
  indicatorName: string;
  inputParams: InputParams;
  resultArray: any;
  editState: boolean;
}

const IndicatorForm: any = ({
  indicators,
  extraClass,
  setIndicators,
}: {
  indicators: any;
  setIndicators: any;
  extraClass: any;
}) => {
  const [indicatorsList, setIndicatorsList] = useState<IndicatorData[]>([]);
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(
    null
  );
  const [inputParams, setInputParams] = useState<InputParams>({});
  const [selectedIndicatorIndex, setSelectedIndicatorIndex] = useState<
    number | null
  >(null);
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [editData, setEditData] = useState<any>({}); // indicator that's in edit mode

  useEffect(() => {
    if (indicators.length) {
      console.log(indicators);
      setIndicatorsList([...indicators]);
    }
  }, [indicators]);

  const handleAddIndicator = () => {
    if (selectedIndicator) {
      const newIndicator: IndicatorData = {
        indicatorName: selectedIndicator.IndicatorName,
        inputParams: { ...inputParams },
        resultArray: [...selectedIndicator.ResultArray],
        editState: false,
      };
      setAutocompleteValue(""); // Reset the autocomplete selection
      setIndicatorsList((prevIndicators: any) => {
        const updatedIndicators = [...prevIndicators, newIndicator];
        setIndicators(updatedIndicators);
        return updatedIndicators;
      });
      setSelectedIndicator(null);
      setInputParams({});
    }
  };

  const handleIndicatorChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    const selected = indicatorsArray.find(
      (indicator) => indicator.IndicatorName === newValue
    );
    setSelectedIndicator(selected as any);
    setInputParams({});
    setAutocompleteValue(newValue as any);
  };

  const handleParamChange = (paramKey: string, paramValue: string) => {
    setInputParams((prevParams) => ({ ...prevParams, [paramKey]: paramValue }));
  };

  const handleLogAllIndicators = () => {
    console.log("All Indicators Data:", indicatorsList);
  };

  const handleDeleteIndicator = (index: number) => {
    setIndicatorsList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleEditIndicator = (index: number) => {
    setIndicatorsList((prevList) =>
      prevList.map((indicator, i) => {
        if (i === index) {
          indicator.inputParams = editData;
        }
        indicator.editState = false;
        return indicator;
      })
    );
    setEditData({});
  };

  function enableEditIndicator(index: number): void {
    setIndicatorsList((prevList) =>
      prevList.map((indicator, i) => {
        if (i === index) {
          indicator.editState = true;
          setEditData(indicator.inputParams);
        } else {
          indicator.editState = false;
        }
        return indicator;
      })
    );
  }

  function disableEditIndicator(index: number): void {
    setEditData({});
    setIndicatorsList((prevList) =>
      prevList.map((indicator, i) => {
        indicator.editState = false;
        return indicator;
      })
    );
  }

  function handleEditDataChange(event: any, name: string): void {
    setEditData((prevEditData: any) => {
      return {
        ...prevEditData,
        [name]: event.target.value,
      };
    });
  }

  return (
    <div className={`flex flex-col gap-4 ${extraClass}`}>
      <p className="flex gap-2 self-end">
        <span className="text-gray-400">Indicators</span>
        <span className="font-semibold">{indicatorsList.length}/20</span>
      </p>
      {indicatorsList.map((indicator: IndicatorData, index: number) => (
        <div
          key={index}
          className="border border-gray-400 p-4 rounded flex flex-col gap-2"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-lg text-primary-800">
              Indicator {index + 1}
            </p>
            <div className="flex gap-2">
              {!indicator.editState && (
                <p
                  onClick={() => enableEditIndicator(index)}
                  className="cursor-pointer text-green-800"
                >
                  Edit
                </p>
              )}
              <p
                onClick={() => handleDeleteIndicator(index)}
                className="cursor-pointer text-red-800"
              >
                Remove
              </p>
            </div>
          </div>
          <p className="font-semibold text-lg">{indicator.indicatorName}</p>
          <div className="flex gap-2">
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                label="Interval"
                type="number"
                fullWidth
                variant="outlined"
                // if the indicator is in edit state then get value from edit data else from the indicator
                value={
                  indicator.editState
                    ? editData.interval
                    : indicator.inputParams?.interval || ""
                }
                onChange={
                  indicator.editState
                    ? () => handleEditDataChange(event, "interval")
                    : undefined
                }
                disabled={!indicator.editState}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                autoFocus
                margin="dense"
                label="Backtrack"
                type="number"
                fullWidth
                variant="outlined"
                // if the indicator is in edit state then get value from edit data else from the indicator
                value={
                  indicator.editState
                    ? editData.backtrack
                    : indicator.inputParams?.backtrack || ""
                }
                onChange={
                  indicator.editState
                    ? () => handleEditDataChange(event, "backtrack")
                    : undefined
                }
                disabled={!indicator.editState}
              />
            </FormControl>
            {Object.entries(indicator.inputParams).map(([key, value]) =>
              key !== "interval" && key !== "backtrack" ? (
                <FormControl fullWidth key={key}>
                  <TextField
                    autoFocus
                    margin="dense"
                    label={key}
                    type="text"
                    fullWidth
                    variant="outlined"
                    // value={value}
                    // if the indicator is in edit state then get value from edit data else from the indicator
                    value={indicator.editState ? editData[key] : value}
                    onChange={
                      indicator.editState
                        ? () => handleEditDataChange(event, key)
                        : undefined
                    }
                    disabled={!indicator.editState}
                  />
                </FormControl>
              ) : null
            )}
          </div>
          {indicator.editState && (
            <div className="flex gap-4 items-center self-end">
              <p
                className="cursor-pointer text-primary-800"
                onClick={() => disableEditIndicator(index)}
              >
                Cancel
              </p>
              <Button
                title="Update"
                size="sm"
                type="secondary"
                onClick={() => handleEditIndicator(index)}
              />
            </div>
          )}
        </div>
      ))}

      <FormControl fullWidth sx={{ marginTop: "8px" }}>
        <Autocomplete
          options={indicatorsArray.map((indicator) => indicator.IndicatorName)}
          onChange={handleIndicatorChange}
          value={autocompleteValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Indicator"
              variant="outlined"
            />
          )}
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
              value={inputParams.interval || ""}
              onChange={(e) => handleParamChange("interval", e.target.value)}
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
              value={inputParams.backtrack || ""}
              onChange={(e) => handleParamChange("backtrack", e.target.value)}
            />
          </FormControl>
          {selectedIndicator.InputParams.map((param) =>
            param.Key !== "interval" && param.Key !== "backtrack" ? (
              <FormControl fullWidth key={param.Key}>
                <TextField
                  autoFocus
                  margin="dense"
                  label={param.Name}
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={inputParams[param.Key] || ""}
                  onChange={(e) => {
                    if(parseInt(e.target.value) >= parseInt(param.max as any)
                     || parseInt(e.target.value) <= parseInt(param.min as any)
                    )
                    {
                      return;
                    }
                  handleParamChange(param.Key, e.target.value)
                  }}
                  placeholder={`Min: ${param.min || ""} Max: ${
                    param.max || ""
                  }`}
                />
              </FormControl>
            ) : null
          )}
        </div>
      )}
      <MyButton
        title="Add Indicator"
        size="small"
        type="secondary"
        onClick={handleAddIndicator}
        className="text-sm py-1"
      />
    </div>
  );
};

export default IndicatorForm;
