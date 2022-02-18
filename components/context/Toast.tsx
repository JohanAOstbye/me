import React, { createContext, useContext, useReducer } from 'react';
export type toast = {
  type: string;
  message: string;
  id: string;
};

type toaststate = {
  toasts: toast[];
};

const ToastStateContext = createContext<toaststate>({ toasts: [] });
const ToastDispatchContext = createContext<
  React.Dispatch<
    | {
        type: 'ADD_TOAST';
        toast: toast;
      }
    | {
        type: 'DELETE_TOAST';
        id: string;
      }
  >
>(() => {});

function ToastReducer(
  state: {
    toasts: toast[];
  },
  action:
    | {
        type: 'ADD_TOAST';
        toast: toast;
      }
    | {
        type: 'DELETE_TOAST';
        id: string;
      }
) {
  console.log(state.toasts);

  switch (action.type) {
    case 'ADD_TOAST': {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case 'DELETE_TOAST': {
      const updatedToasts = state.toasts.filter((e) => e.id != action.id);
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default: {
      throw new Error('unhandled action type');
    }
  }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });
  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

export const useToastDispatchContext = () => useContext(ToastDispatchContext);
export const useToastStateContext = () => useContext(ToastStateContext);
