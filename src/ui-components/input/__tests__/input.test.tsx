import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Input} from '../input';

describe('Input', () => {
  it('should render without crashing', () => {
    const {asFragment} = render(<Input type="text" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render without crashing with type="number"', () => {
    const {asFragment} = render(<Input type="number" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render without crashing with error prop', () => {
    const {asFragment} = render(<Input type="number" error />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should fire onChange event callback', () => {
    const onChange = jest.fn();
    const {getByPlaceholderText} = render(
      <Input type="text" value="" placeholder="testInput" onChange={onChange} />
    );
    const input = getByPlaceholderText('testInput');
    fireEvent.change(input, {target: {value: 'test'}});
    expect(onChange).toBeCalled();
  });
});
