import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {IconButton, IconButtonTypes} from '../icon-button';

describe('IconButton', () => {
  it('should render without crashing', () => {
    const icons = Object.values(IconButtonTypes);
    for (let icon of icons) {
      //@ts-ignore
      const {asFragment} = render(<IconButton iconType={icon} />);
      expect(asFragment()).toMatchSnapshot();
    }
  });
  it('should be clickable', () => {
    const onClick = jest.fn();
    const {container} = render(
      <IconButton iconType={IconButtonTypes.ARROW_LEFT} onClick={onClick} />
    );
    // @ts-ignore
    fireEvent.click(container.firstChild);
    expect(onClick).toBeCalled();
  });
});
