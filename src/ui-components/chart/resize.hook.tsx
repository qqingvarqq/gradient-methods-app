import * as React from 'react';

export interface ElementSize {
  height: number;
  width: number;
}
export const useResize = (
  containerRef: React.MutableRefObject<null>
): ElementSize => {
  const [elementSize, setElementSize] = React.useState<ElementSize | null>(
    null
  );
  React.useEffect(() => {
    const element: Element | null = containerRef.current;
    const handleResize = () => {
      if (element === null) {
        return;
      }
      const {height = 0, width = 0} = element!.getBoundingClientRect();
      setElementSize({height, width});
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);
  return elementSize === null ? {height: 0, width: 0} : elementSize;
};
