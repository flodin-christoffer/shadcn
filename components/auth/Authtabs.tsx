import LoginForm from "@/app/(auth)/auth/LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import RegisterForm from "@/app/(auth)/auth/RegisterForm";

const AuthTabs = () => {
    return ( <>
    <Tabs defaultValue="login" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="login">
    <LoginForm></LoginForm>
  </TabsContent>
  <TabsContent value="register"><RegisterForm></RegisterForm></TabsContent>
</Tabs></> );
}
 
export default AuthTabs;