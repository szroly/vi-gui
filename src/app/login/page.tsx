
import LoginForm from "@/components/layout/loginForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




const LoginPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="flex justify-center">VEHICLE INVENTORY LOGIN</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <LoginForm />
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default LoginPage