import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return alert("Please enter your email");

        // 🔥 yaha backend API call karna (POST /api/auth/forgot-password)
        console.log("Reset link sent to:", email);
        setSuccess(true);
        setEmail("");
    };

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Forgot Password</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                        Enter your email below and we’ll send you a password reset link.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 max-w-lg">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                        {success && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                                <span className="text-green-800 dark:text-green-200 font-medium">
                                    Reset link sent! Check your inbox.
                                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="flex items-center border rounded-lg px-3 py-2 bg-white dark:bg-gray-700">
                                    <Mail className="w-5 h-5 text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                            >
                                Send Reset Link
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
