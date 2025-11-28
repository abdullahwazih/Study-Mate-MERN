import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../services/Auth/Register";
import { loginWithGoogle } from "../../services/Auth/Google_Login";
import Googleicon from "../../assets/google.png"; // imported image
import appleicon from "../../assets/apple.png"; // imported image

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        photo: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validatePassword = (password) => {
        if (password.length < 6) return "Password must be at least 6 characters";
        if (!/[A-Z]/.test(password)) return "Must contain at least one uppercase";
        if (!/[a-z]/.test(password)) return "Must contain at least one lowercase";
        return "";
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const passwordError = validatePassword(form.password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        setError("");

        try {
            await registerUser(form);
            toast.success("Registration successful!");
            navigate("/");
        } catch (err) {
            toast.error(err);
        }
    };

    const handleGoogle = async () => {
        const user = await loginWithGoogle();
        toast.success("Google Sign-In successful!");
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111]">
            <div className="max-w-4xl w-full grid md:grid-cols-2 bg-[#1b1b1b] rounded-xl shadow-lg overflow-hidden">

                {/* Left side image */}
                <div className="hidden md:block">
                    <img
                        src="/mnt/data/1e71e135-8cce-40c6-8941-c30b60631c0d.png"
                        alt="Illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right side form */}
                <div className="p-8 md:p-12 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Create an account</h2>
                    <p className="text-sm text-white/60 mb-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-white/80 underline">
                            Log in
                        </Link>
                    </p>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required
                                className="w-1/2 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                required
                                className="w-1/2 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
                            onChange={handleChange}
                        />

                        {error && <p className="text-red-400 text-sm">{error}</p>}

                        <button className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition-all">
                            Create account
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-white/60 mb-2">Or register with</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleGoogle}
                                className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition"
                            >
                                <img src={Googleicon} alt="Google" className="w-5 h-5" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition">
                                <img src={appleicon} alt="Google" className="w-5 h-5" />

                                Apple
                            </button>
                        </div>
                    </div>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}
