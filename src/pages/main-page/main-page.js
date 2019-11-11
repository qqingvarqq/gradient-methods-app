import React from 'react';
import {FunctionDescription} from './components/function-description';
import './main-page.css';

export default function MainPage(props) {
  const {metadata, onClickFunctionOption} = props;
  return (
    <div className="main-page">
      <div className="main-page-container">
        <div className="header" title="Chose function to minimize">
          Chose function
        </div>
        <div className="options-container">
          {metadata.map((fnInfo, index) => (
            <FunctionDescription
              key={index}
              description={fnInfo.description}
              name={fnInfo.name}
              onClick={() => onClickFunctionOption(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
