import React, { createContext, useReducer } from 'react'


const initialState = {
    lessonStarted: [],
    score: 0,
    complete: 0
}

const scoreReducer = (state, action) => {
    switch (action.type) {

        case 'START':
            if (!state.lessonStarted.find(item => item.name === action.title)) {
                state.lessonStarted.push(
                    {
                        name: action.title,
                        index: 0,
                        correct: 0,
                        false: 0,
                        score: 0,
                        complete: false
                    }
                )
            }
            return { ...state }

        case 'INCREASE':
            const stateIndex = state.lessonStarted.findIndex(item => item.name === action.title)
            state.lessonStarted[stateIndex].index++
            return { ...state }

        case 'CORRECT':
            const correctQuestion = state.lessonStarted.findIndex(item => item.name === action.title)
            state.lessonStarted[correctQuestion].correct++
            state.lessonStarted[correctQuestion].score++
            state.score++
            return { ...state }

        case 'FALSE':
            const falseQuestion = state.lessonStarted.findIndex(item => item.name === action.title)
            state.lessonStarted[falseQuestion].false++
            state.lessonStarted[falseQuestion].score = state.lessonStarted[falseQuestion].score - 0.33
            state.score = state.score - 0.33
            return { ...state }

        case 'COMPLETE':
            const completeIndex = state.lessonStarted.findIndex(item => item.name === action.title)
            state.lessonStarted[completeIndex].complete = true
            state.complete++
            return { ...state }

        default:
            return state;
    }
}

export const ScoreContext = createContext();

function LessonContextProvider({ children }) {

    const [state, dispatch] = useReducer(scoreReducer, initialState)


    return (
        <ScoreContext.Provider value={{ state, dispatch }}>
            {children}
        </ScoreContext.Provider>)
}


export default LessonContextProvider