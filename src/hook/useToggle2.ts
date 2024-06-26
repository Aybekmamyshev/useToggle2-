import {useReducer} from "react";


interface ITypeInitial {
    type: 'toggle'
}

type Toggle = boolean | string | number

const reducer = (state: Toggle[], action: ITypeInitial) => {
    switch (action.type) {
        case 'toggle':
            return [...state.slice(1), state[0]]

        default :
            return state
    }
}

const useToggle2 = (array: Toggle[] = [true, false])  => {

    const [state, dispatch] = useReducer(reducer, array);


    const toggle = () => {
        dispatch({type: 'toggle'})
    }

    return {state, toggle}
}

export default useToggle2;