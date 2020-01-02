import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {BaseButton} from '../base-button';

describe('BaseButton', () => {
  it('should render without crashing', () => {
    const {asFragment} = render(<BaseButton>btn</BaseButton>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be clickable', () => {
    const onClick = jest.fn();
    const {container} = render(<BaseButton onClick={onClick} />);
    // @ts-ignore
    fireEvent.click(container.firstChild);
    expect(onClick).toBeCalled();
  });
});
