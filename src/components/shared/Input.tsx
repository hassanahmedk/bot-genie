"use client"
import React from 'react'
import { InputComponentProps } from '@/interface/interface';

const Input:React.FC<InputComponentProps> = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {

   

  if(title){
    return (
      <div>
        <label>{title}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
    
  } else {
    return(
      <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className=
            {`p-4 rounded-md outline-none hover:outline-none
              w-80
              border border-gray-300
            `}
          />
      </div>
    );
  }
};

export default Input;
