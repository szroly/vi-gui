"use client"
import { createContext, useEffect } from 'react'
import { useRouter } from "next/navigation"
import userHandler from "@/handlers/users"
import { useState } from 'react'
import { getCookie, setCookie, deleteCookie } from "cookies-next";


interface User {
  id: number
  name: string
  email: string
  updated_at: string
  created_at: string
  email_verified_at?: string | null
}

interface loginPayload {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null
  token: string | null
  loading: boolean
  handleLogin: ( data: loginPayload, errorCallback: (error: any) => void) => Promise<void>
  handleLogout: ( token: string, succesCallback: () => void, errorCallback: (error: any) => void) => Promise<void>
}



export const AuthContext = createContext<AuthContextType | null>( null )
export const AuthProvider = ( { children } : { children: React.ReactNode } ) => {
  const router = useRouter()
  const [ user, setUser ] = useState<User | null>( null )
  const [ token, setToken ] = useState<string | null>( null )
  const [ loading, setLoading ] = useState<boolean>( true )
  
  const initAuth = async () => {
    const appToken = getCookie( 'jwt' )?.toString() || "";
    console.log("INIT AUTH")
    if( appToken ) {
      setLoading(true)
      try {
        const response = await userHandler.check( appToken, '/users/login/check' )
        const { user } = response.data
        console.log({ response })
        setUser( user )
        setToken( appToken )
        setLoading( false )
      } catch (error) {
        console.log({ error})
        setUser( null )
        setToken( null )
        setLoading( false )
        router.push( '/login' )
      }
    } else {
      console.log("redirect to login")
      setLoading( false )
      router.push( '/login' )
    }
  }

  useEffect(() => {
    initAuth()
  }, [] )

  const handleLogin = async ( data: loginPayload, errorCallback: any ) => {
    
    try {
      const response = await userHandler.login( null, '/users/login', data )
      const { token, user } = response.data
      setCookie( 'jwt', token )
      setCookie( 'user', user )
      setUser( user )
      setToken( token )

      router.push( '/' )
    } catch ( error ) {
      console.log( error )
      errorCallback( error )
    }
  }

  const handleLogout = async ( token: string, succesCallback: any, errorCallback: any ) => {
    try {
      const resp = await userHandler.logout( token, '/users/logout' )
      setUser( null )
      setToken( null )
      deleteCookie( 'jwt' )
      deleteCookie( 'user' )
      succesCallback()
    } catch (error) {
      errorCallback( error )
    }
  }

  const values = {
    user,
    token,
    loading,
    handleLogin,
    handleLogout
  }
  return (
    <AuthContext.Provider value={ values }>
      { children }
    </AuthContext.Provider>
  )
}