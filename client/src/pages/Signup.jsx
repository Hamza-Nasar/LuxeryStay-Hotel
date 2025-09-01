import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserPlus, Mail, Lock, User, CheckCircle } from "lucide-react";

/**
 * @typedef {Object} SignupForm
 * @property {string} email
 * @property {string} password
 * @property {string} name
 */

export default function SignupPage() {
    const [signupSuccess, setSignupSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", data);

            setSignupSuccess(true);
            reset();

            setTimeout(() => setSignupSuccess(false), 4000);
        } catch (err) {
            alert("Error signing up!");
            console.error("Signup Error:", err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="flex items-center mb-6">
                    <UserPlus className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Account</h2>
                </div>

                {signupSuccess && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                        <span className="text-green-800 dark:text-green-200 font-medium">Signup successful! Please login.</span>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password *</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
                        <UserPlus className="w-5 h-5 mr-2" />
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
}
