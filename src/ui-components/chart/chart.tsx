import * as React from 'react';
import styles from './chart.module.css';
import {useResize, ElementSize} from './resize.hook';

function calculatePoints(
  initialPoints: number[],
  height: number,
  width: number
): string {
  const minValue = Math.min.apply(Math, initialPoints);
  const ValueGap = Math.max.apply(Math, initialPoints) - minValue;

  const charthValues = initialPoints.map(
    value => height - ((value - minValue) / ValueGap) * height
  );
  const widthMultiplier = width / (initialPoints.length - 1);
  let polylinePoints: string = '';
  for (let i = 0; i < charthValues.length; i++) {
    polylinePoints += `${Math.round(i * widthMultiplier)},${Math.round(
      charthValues[i]
    )} ${i === charthValues.length - 1 ? '' : ','}`;
  }
  return polylinePoints;
}

export const Chart: React.FC<{points: number[]}> = props => {
  const {points} = props;
  const containerRef = React.useRef(null);
  const elementSize: ElementSize = useResize(containerRef);
  const viewBox: ElementSize = {
    height: (elementSize.width / 16) * 9,
    width: elementSize.width,
  };

  return (
    <div
      className={styles.root}
      style={{height: viewBox.height + 'px'}}
      ref={containerRef}>
      <svg
        version="2.0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        xmlns="http://www.w3.org/2000/svg">
        <polyline
          height="100%"
          width="100%"
          fill="none"
          stroke="#4960e4"
          strokeWidth="2.5"
          points={calculatePoints(
            points,
            viewBox.height - 6,
            viewBox.width - 6
          )}
        />
      </svg>
    </div>
  );
};
