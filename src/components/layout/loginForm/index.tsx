"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"




const LoginForm = () => {
  
  const { handleLogin } = useAuth()

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })
  
  const loginForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  
  function onSubmit(data: z.infer<typeof formSchema>) {
    handleLogin(data, (error) => {
      console.log({ error })
    })
    
  }

  return(
    <Form { ...loginForm}>
      <form onSubmit={ loginForm.handleSubmit( onSubmit) } className="space-y-8">
        <FormField 
          control={ loginForm.control }
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel> E-mail </FormLabel>
              <FormControl>
                <Input 
                  placeholder="johndoe@example.com" 
                  { ...field } 
                  type="email"
                  className={ loginForm.formState.errors.email ? "border-red-500" : "" }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={ loginForm.control }
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Password </FormLabel>
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="Enter your Password" 
                  { ...field } 
                  className={ loginForm.formState.errors.email ? "border-red-500" : "" }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}
export default LoginForm