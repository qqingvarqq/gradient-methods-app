import * as React from 'react';
import {render} from '@testing-library/react';
import {Card} from '../card';

describe('Card', () => {
  it('should render without crashing', () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render children', () => {
    const ChildElement = () => <div>Hello From Card</div>;
    const {asFragment} = render(
      <Card>
        <ChildElement />
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
