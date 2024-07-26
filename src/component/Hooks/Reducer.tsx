import React, { useReducer } from 'react';

// this is all type in reduce we need =>

type UpdateactionsType = {
    paylod: number,
    type: "increment"|"decrement"|"reset"

}

type ResetTypeactions = {
    type: "reset"
}


type actionsType = UpdateactionsType | ResetTypeactions

type stateType = { conter: number }

let initialState: stateType = { conter: 0 }

///////////////////////////////////////////////////

const reduce = (state: stateType, actions: actionsType) => {
    switch (actions.type) {
        case "increment": {
            return { conter: state.conter + actions.paylod }
        }
        case "decrement": {
            if (state.conter <= 0) {
                return { conter: 0 }
            } else {

                return { conter: state.conter - actions.paylod }
            }

        }
        case "reset": {
            return initialState

        }


        default: {
            return state
        }

    }
}


const Reducer = (): JSX.Element => {

    const [state, dispach] = useReducer(reduce, initialState)

    return (
        <>
            <h1>{state.conter}</h1>
            <hr />
            <button onClick={() => dispach({ type: "increment", paylod: 5 })}>increment 5</button>
            <hr />
            <button onClick={() => dispach({ type: "decrement", paylod: 5 })}>decrement 5</button>
            <hr />
            <button onClick={() => dispach({type:"reset"})}>Reset to 0</button>
        </>
    );
}

export default Reducer;
