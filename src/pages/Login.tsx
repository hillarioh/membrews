import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Navigate } from "react-router";
import { useState } from "react";
import { loginUser } from "@/utils/api";
import { useAuth } from "@/context";
import toast from "react-hot-toast";

const signInFormSchema = z.object({
  email: z.string().email("Invalid email address").min(6, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type signInFormValues = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { authenticateUser, isAuthenticated } = useAuth();

  const signInForm = useForm<signInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInSubmit = async (values: signInFormValues) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await loginUser(values);
      toast.success("Login successful");
      authenticateUser(response.token, response.userId);
    } catch (error) {
      toast.error("Invalid login credentials");
      setErrorMessage("Invalid login credentials");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        {errorMessage && (
          <div className="p-2 text-sm text-red-600 bg-red-100 rounded-md">
            {errorMessage}
          </div>
        )}

        <Form {...signInForm}>
          <form
            onSubmit={signInForm.handleSubmit(signInSubmit)}
            noValidate
            className="space-y-4"
          >
            <FormField
              control={signInForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="focus:ring-blue-400 focus:border-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="focus:ring-blue-400 focus:border-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
