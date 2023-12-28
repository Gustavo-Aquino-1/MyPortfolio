import { createContext, useMemo, useState } from 'react'

const Context = createContext()

export default function Provider({ children }) {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const [dimensions, setDimensions] = useState([0, 0]) // height, width

  const contextValue = useMemo(
    () => ({
      hamburgerClicked,
      setHamburgerClicked,
      dimensions,
      setDimensions,
    }),
    [hamburgerClicked, dimensions],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { Context }
