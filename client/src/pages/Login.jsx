import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LogIn, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";

/**
 * @typedef {Object} LoginForm
 * @property {string} email
 * @property {string} password
 */

export default function LoginPage() {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", data);

            // Token save in localStorage
            localStorage.setItem("token", res.data.token);

            setLoginSuccess(true);
            reset();

            Swal.fire({
                title: "🎉 Welcome Back!",
                text: "You have logged in successfully.",
                icon: "success",
                confirmButtonText: "Continue",
                confirmButtonColor: "#4F46E5",
                background: "#f9fafb",
            });

            setTimeout(() => setLoginSuccess(false), 4000);
        } catch (err) {
            Swal.fire({
                title: "❌ Login Failed",
                text: "Invalid email or password. Please try again.",
                icon: "error",
                confirmButtonText: "Retry",
                confirmButtonColor: "#DC2626",
                background: "#fff5f5",
            });
            console.error("Login Error:", err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="flex items-center mb-6">
                    <LogIn className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Login</h2>
                </div>

                {loginSuccess && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-green-800 dark:text-green-200 font-medium">Login successful!</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password *</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
                        <LogIn className="w-5 h-5 mr-2" />
                        Login
                    </button>

                    <div className="text-center mt-4">
                        <a href="/forgot-password" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
