import React from 'react';
import {NavigationHeader} from '../../ui-components';
import {IconButton} from '../../ui-components/button';
import {DetailedFunctionDescription} from './components/detailed-function-description';
import './minimization-page.css';

export default function MinimizationPage(props) {
  const {chosedFunctionIndex, onBackToMainPsge = () => null, ...rest} = props;
  return (
    <div className="minimization-page" {...rest}>
      <NavigationHeader>
        <IconButton type="arrowLeft" onClick={onBackToMainPsge}></IconButton>
      </NavigationHeader>
      <DetailedFunctionDescription id="powell-function"></DetailedFunctionDescription>
    </div>
  );
}
