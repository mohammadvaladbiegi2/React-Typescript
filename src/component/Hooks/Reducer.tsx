import React, { useReducer } from 'react';

// this is all type in reduce we need =>

type actionsType = {
    paylod: number,
    type: string
}

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


        default: {
            return state
        }

    }
}


const Reducer = (): JSX.Element => {

    const [state, actions] = useReducer(reduce, initialState)

    return (
        <>
            <h1>{state.conter}</h1>
            <hr />
            <button onClick={() => actions({ type: "increment", paylod: 5 })}>increment 5</button>
            <hr />
            <button onClick={() => actions({ type: "decrement", paylod: 5 })}>decrement 5</button>
        </>
    );
}

export default Reducer;
