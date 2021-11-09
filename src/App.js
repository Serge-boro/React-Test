import React, { useState, useContext } from 'react'

const language = ['JavaScript', 'Phyton']

const ContextLanguage = React.createContext()

export const LanguageProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const indexLanguage = language[index]

  const checkNumber = (number) => {
    if (number > language.length - 1) {
      return 0
    }
    if (number < 0) {
      return language.length - 1
    }
    return number
  }

  const nextLanguage = () => {
    setIndex((item) => {
      let newIndex = item + 1
      return checkNumber(newIndex)
    })
  }

  return (
    <ContextLanguage.Provider
      value={{
        indexLanguage,
        nextLanguage,
        show,
        setShow,
      }}
    >
      {children}
    </ContextLanguage.Provider>
  )
}

const useLanguageContext = () => {
  return useContext(ContextLanguage)
}

function App() {
  return <RenderLanguage />
}

const RenderLanguage = () => {
  const { indexLanguage, nextLanguage } = useLanguageContext()
  return (
    <>
      <p>My favorite language is: {indexLanguage} </p>
      <button onClick={nextLanguage}>set you favorite language</button>
    </>
  )
}

export default App
