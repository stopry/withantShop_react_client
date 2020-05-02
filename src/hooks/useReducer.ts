import React from 'react';

export function useReducer(reducer:Function,initialState:any){
  const [state,setSatte] = React.useState(initialState);

  function dispatch(action:string){
    const nextState:Array<any> = reducer(state,action);
    setSatte(nextState);
  }

  return [state,dispatch];
}