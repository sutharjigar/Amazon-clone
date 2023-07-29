import React, { createContext, useContext, useReducer } from 'react'

// prepares the data layer
export const StateContext = createContext()

// Wrap Our App and provide the Data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// pull information from the data layer
export const useStateValue = () => useContext(StateContext)
