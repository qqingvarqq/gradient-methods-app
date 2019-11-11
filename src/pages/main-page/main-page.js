import React from 'react';
import {FunctionDescription} from './components/function-description';
import './main-page.css';

export default function MainPage(props) {
  const {metadata} = props;
  return (
    <div className="main-page">
      <div className="header" title="Chose function to minimize">
        Chose function
      </div>
      <div className="options-container">
        {metadata.map((fnInfo, index) => (
          <FunctionDescription
            key={index}
            description={fnInfo.description}
            name={fnInfo.name}
            onClick={() => alert(index)}
          />
        ))}
      </div>
    </div>
  );
}
