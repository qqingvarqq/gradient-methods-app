import React from 'react';
import {Card} from '../../../../ui-components';
import {SubmitButton} from '../../../../ui-components/button';
import {getImage} from '../../../page-utils';
import './detailed-function-description.css';

export default function DetailedFunctionDescription(props) {
  const {id} = props;
  return (
    <Card>
      <div className="detailed-function-description">
        <div className="info">
          <div className="function-header">Powell function</div>
          <img className="function" alt={id} src={getImage(id)} />
          <div className="minimum">
            <div className="f-vector-x-optimized">f(x) = 0</div>
            <div className="vector-x-optimized">x_min=[0,0,0,0....]</div>
          </div>
        </div>
        <div className="gap" />
        <div className="input-form">
          <div className="vector-x">x_0 = [10,10,10,10,...]</div>
          <div className="epsilon">e = 0.000001</div>
          <div className="optimize">
            <SubmitButton>Optimize</SubmitButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
