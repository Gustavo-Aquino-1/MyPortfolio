import { createContext, useMemo, useState } from 'react'

const Context = createContext()

export default function Provider({ children }) {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const [dimensions, setDimensions] = useState([0, 0]) // height, width
  const [isLight, setIsLight] = useState(true)

  const contextValue = useMemo(
    () => ({
      hamburgerClicked,
      setHamburgerClicked,
      dimensions,
      setDimensions,
      isLight,
      setIsLight,
    }),
    [hamburgerClicked, dimensions, isLight],
  )

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export { Context }
