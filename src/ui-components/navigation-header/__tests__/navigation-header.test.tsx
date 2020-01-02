import * as React from 'react';
import {render} from '@testing-library/react';
import {NavigationHeader} from '../navigation-header';

describe('NavigationHeader', () => {
  it('should render without crashing', () => {
    const {asFragment} = render(<NavigationHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
