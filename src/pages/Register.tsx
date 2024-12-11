import { useState, useEffect } from "react";
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
import { Link, Navigate } from "react-router";
import { getRoles, registerUser } from "@/utils/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { useAuth } from "@/context";

const signUpFormSchema = z.object({
  username: z.string().min(6, "Username must be at least 6 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  roleId: z.string().uuid("Invalid role id"),
});

export type signUpFormValues = z.infer<typeof signUpFormSchema>;

type Role = {
  id: string;
  roleName: string;
};

const SignUpForm = () => {
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState<Role[]>([]);

  const { authenticateUser, isAuthenticated } = useAuth();

  const fetchRoles = async () => {
    try {
      const response = await getRoles();
      setRoles(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const signUpForm = useForm<signUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      roleId: "",
    },
  });

  const signUpSubmit = async (values: signUpFormValues) => {
    try {
      const response = await registerUser(values);
      toast.success("Account created successfully.");
      authenticateUser(response.token, response.user.id);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-gray-100 to-gray-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create an Account
        </h2>
        <Form {...signUpForm}>
          <form
            onSubmit={signUpForm.handleSubmit(signUpSubmit)}
            className="flex flex-col gap-3"
          >
            {/* Username */}
            <FormField
              control={signUpForm.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-600">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="john"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={signUpForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-600">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="johndoe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={signUpForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-600">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      placeholder="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select option Role */}
            <FormField
              control={signUpForm.control}
              name="roleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-600">
                    Role
                  </FormLabel>
                  <FormControl>
                    <Select {...field} onValueChange={(e) => field.onChange(e)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {roles.map((role) => (
                            <SelectItem value={role.id}>
                              {role.roleName}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/* <select
                      {...field}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                      {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.roleName}
                        </option>
                      ))}
                    </select> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 mt-4 transition-colors"
            >
              Sign Up
            </Button>
          </form>
        </Form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
