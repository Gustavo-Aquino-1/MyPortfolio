import { createContext, useMemo } from 'react'

const Context = createContext()

export default function Provider({ children }) {
  const contextValue = useMemo(() => {}, [])

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
