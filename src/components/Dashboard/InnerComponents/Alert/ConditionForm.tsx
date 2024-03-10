import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import MyButton from "@/components/shared/Button";

interface Indicator {
  indicatorName: string;
  inputParams: Record<string, string>;
  resultArray: string[];
}

interface Props {
  indicatorsList: Indicator[];
  setCondition: any;
  condition: any;
}

function ConditionForm({ indicatorsList, setCondition, condition }: Props) {
  const [expression, setExpression] = useState<string[]>([]);

  const [numericalValueOption, setNumericalValueOption] = useState<any>();

  const handleOptionClick = (option: string) => {
    if(option && option.length){
      // Append the selected option to the existing expression
      setExpression([...expression, option]);
      setCondition([...expression, option]);
      // add the logic to add options as push in array so that we can differentaite and erase them
    }
  };


  useEffect(()=>{
    setExpression(condition);
  }, [condition])

  const generateOptions = () => {
    const options: JSX.Element[] = [];
    indicatorsList.forEach((indicator) => {
      indicator.resultArray.forEach((result) => {
        options.push(
          <MenuItem
            key={`${indicator.indicatorName}:${result}`}
            value={`${indicator.indicatorName}:${result}`}
          >
            <span className="text-[10px]">{`${indicator.indicatorName}:`}</span>
            <span className="text-xs font-semibold">{`${result}`}</span>
          </MenuItem>
        );
      });
    });
    return options;
  };

  const handleOptionRemove = (index: number) => {
    setExpression((prevOptions) => {
      let updatedOptions = prevOptions.filter((_, i) => index !== i);
      setCondition(updatedOptions);
      return updatedOptions;
    });
  };

  const renderColoredOption = (text: string) => {
    if(!text || text?.length === 0) return;

    if (text.toLowerCase() === "isfalse") {
      return <span className="text-red-700">{text}</span>;
    } else if (text.toLowerCase() === "istrue") {
      return <span className="text-green-700">{text}</span>;
    } else if (text.includes(":")) {
      return <span className="text-blue-800">{text}</span>;
    } else {
      return <span className="text-yellow-700">{text}</span>;
    }
  };

  return (
    <Grid container spacing={2}>
      {/* Previous Options */}
      <Grid item>
        <div className="border border-gray-300 rounded p-4 w-full">
          <h3 className="text-primary-800 font-semibold mb-2">Operators</h3>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("(")}
              >
                (
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick(")")}
              >
                )
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("AND")}
              >
                AND
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("OR")}
              >
                OR
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick(">")}
              >
                {">"}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("<")}
              >
                {"<"}
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("isTrue")}
              >
                isTrue
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{ fontSize: "12px" }}
                variant="outlined"
                onClick={() => handleOptionClick("isFalse")}
              >
                isFalse
              </Button>
            </Grid>
          </Grid>
          <div className="flex gap-2 mt-4">
            <input
              type="number"
              placeholder="Numerical Value"
              className="px-2 border border-gray-300 focus:border-gray-500 outline-none"
              value={numericalValueOption}
              onChange={(event: any) =>
                setNumericalValueOption(event?.target?.value)
              }
            />
            <MyButton
              title="Add"
              size="small"
              type="secondary"
              onClick={() => {
                handleOptionClick(numericalValueOption);
                setNumericalValueOption("");
              }}
              className="text-sm py-1"
            />
          </div>
        </div>
      </Grid>

      {/* <Grid container item>
      <div className="flex flex-col border border-gray-300 rounded p-4 w-full">
        <h3 className='text-primary-800 font-semibold mb-2'>Numerical Value</h3>

      </div>
    </Grid> */}

      <Grid item>
        <div className="border border-gray-300 rounded p-4 w-full">
          <h3 className="text-primary-800 font-semibold mb-2">Indicators</h3>
          <Grid container spacing={1}>
            {/* Dynamic Options */}
            {generateOptions().map((option, index) => (
              <Grid item key={index}>
                <Button
                  variant="outlined"
                  onClick={() =>
                    handleOptionClick(option.props.value as string)
                  }
                >
                  <span className="text-sm lg:text-lg">
                    {option.props.children}
                  </span>
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12}>
        <h3 className="text-black-900 text-lg font-semibold mb-2">
          Expression
        </h3>
        <div className="border border-primary-200 rounded p-4 w-full">
          <div className="flex gap-1 flex-wrap">
            {expression.map((option, index) => {
              return (
                <div
                  className={`
                  relative 
                  flex flex-col justify-center items-center
                  font-semibold
                  border-1
                  group
                  `}
                  key={index}
                >
                  <div className="hover:border-primary-900 rounded-lg hover:bg-[#96e7d980] p-1 transition-all">
                    {renderColoredOption(option)}
                  </div>
                  <div
                    className="hidden group-hover:block group/close-icon cursor-pointer absolute -top-2.5 -right-3"
                    onClick={() => handleOptionRemove(index)}
                  >
                    <CancelIcon fontSize="small" color="error" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ConditionForm;
