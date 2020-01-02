import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Button} from '../button';

describe('Button', () => {
  it('should render without crashing', () => {
    const {asFragment} = render(<Button>btn</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render secondary button', () => {
    const {asFragment} = render(<Button secondary> btn</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be clickable', () => {
    const onClick = jest.fn();
    const {container} = render(<Button onClick={onClick} />);
    // @ts-ignore
    fireEvent.click(container.firstChild);
    expect(onClick).toBeCalled();
  });
});
