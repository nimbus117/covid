import { useReducer, useEffect } from 'react';
import { UseFetchState, UseFetchAction } from '../types';

const reducer = (
  state: UseFetchState,
  action: UseFetchAction,
): UseFetchState => {
  switch (action.type) {
    case 'request':
      return {
        ...state,
        isLoading: true,
      };
    case 'success':
      return {
        data: action.data,
        error: null,
        isLoading: false,
      };
    case 'failure':
      return {
        ...state,
        error: `Error fetching data. Please try again. (${action.error})`,
        isLoading: false,
      };
    default:
      throw new Error('reducer: invalid action type');
  }
};

export const useFetch = (url: string): UseFetchState => {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const request = async (): Promise<void> => {
      dispatch({ type: 'request' });
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error(response.statusText || 'Unknown');
        }
        const data = await response.json();
        dispatch({ type: 'success', data });
      } catch (error) {
        console.log(url, error);
        dispatch({ type: 'failure', error: error.message });
      }
    };
    request();
  }, [url]);

  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error,
  };
};
