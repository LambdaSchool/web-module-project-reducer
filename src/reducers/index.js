import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SET_MEMORY, APPLY_TO_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
        default:
            throw new Error(`Unrecognized operation: ${operation}`)
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            })

        case(SET_MEMORY):
            return ({
                ...state,
                memory: state.total
            })

        case(APPLY_TO_MEMORY):
            const res = calculateResult(state.memory, state.total, state.operation)
            console.log('Apply', res)
            return ({
                ...state,
                memory: calculateResult(state.memory, state.total, state.operation)
            })

        default:
            return state;
    }
}

export default reducer;