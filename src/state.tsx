import * as fn from "fp-ts/function"
import * as hooks from './hooks';
import * as option from "fp-ts/Option"
import * as react from 'react';

export interface State {
    frame: number;
}

export const StateContext = react.createContext<option.Option<State>>(option.none);

export const use_state_context = (): State => fn.pipe(
    react.useContext(StateContext),
    option.getOrElse(
        () => {
            throw new Error("StateContext is not defined")
            return { frame: 0 };
        }
    )
);

interface StateComponentProps {
    children: react.ReactNode;
}

export function StateComponent({
    children,
}: StateComponentProps): react.ReactNode {
    const frame = hooks.use_animation_linear_default();

    return (
        <StateContext.Provider value={option.some({ frame: frame })} >
            {children}
        </ StateContext.Provider>
    );
}