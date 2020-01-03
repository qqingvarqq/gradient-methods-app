import {optimizationMethods} from '../index';

describe.each(Array.from(optimizationMethods.keys()))(
  'optimizationMethod %s',
  name => {
    it('should optimize function', () => {
      //quadratic function, minimum at point 5
      const quadraticFunction = (x: number[]) => Math.pow(x[0], 2) + 5;
      const QUADRATIC_FUNCTION_OPTIMIZED_VECTOR_X = [0];
      const QUADRATIC_FUNCTION_OPTIMIZED_VALUE = 5;
      //-------------
      const x0 = [1];
      const epsilon = 0.00000001;
      //@ts-ignore
      const {method} = optimizationMethods.get(name);
      let [optimizedVectorX] = method(quadraticFunction, x0, epsilon);
      optimizedVectorX = optimizedVectorX.map(Math.round);
      expect(optimizedVectorX).toEqual(QUADRATIC_FUNCTION_OPTIMIZED_VECTOR_X);
      expect(quadraticFunction(optimizedVectorX)).toBe(
        QUADRATIC_FUNCTION_OPTIMIZED_VALUE
      );
    });
  }
);
