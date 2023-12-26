import { createContext, useMemo, useState } from 'react'

const Context = createContext()

export default function Provider({ children }) {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)

  const contextValue = useMemo(
    () => ({
      hamburgerClicked,
      setHamburgerClicked,
    }),
    [hamburgerClicked],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { Context }
