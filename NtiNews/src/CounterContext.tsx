import { createContext, useReducer } from "react";

const intialState = 0;

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REMOVE":
      return state - 1;
    default:
      return state;
  }
}

export const CounterContext = createContext<{
  state: number;
  dispatch: React.Dispatch<any>;
}>({ state: 0, dispatch: () => null });

export const CounterProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
