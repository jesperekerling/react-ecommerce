
import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [token, setToken] = useState(null)
  
  useEffect(() => {
    if(token) return

    const localToken = localStorage.getItem('token')

    if(localToken !== null) {
      setToken(localToken)
    }
  }, [])

  useEffect(() => {
    if(token) localStorage.setItem('token', token)
  }, [token])

  const register = async (formData) => {
    try {
      const res = await fetch('https://ecommerce-api.ekerling.com/api/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })


      console.log(res)
      const data = await res.json()
      console.log(data)
      
      if(res.status !== 201) {
        throw new Error(data)
      }

      setToken(data.token)
      return { success: 'User created' }
      
    } catch (error) {
      return { error: error.message }
    }
  }

  const login = async (formData, history) => {
    try {
      const res = await fetch('https://ecommerce-api.ekerling.com/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      const data = await res.json()
      console.log(data) // log the API response to check its structure
  
      if(res.status !== 200) {
        throw new Error(data)
      }
      
      if(res.status === 200) {
        setToken(data.token)
        // Save user id in local storage
        localStorage.setItem('user', data.user)
        return { success: true } // return an object with a success property
      }
      
    } catch (error) {
      return { error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const value = {
    token,
    register,
    login,
    logout
  }
  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => {
  const context = useContext(AuthContext)

  if(!context) throw new Error('useAuth must be inside an AuthContextProvider')

  return context
}