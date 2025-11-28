import React from "react";
import { Link } from "react-router";
import Googleicon from "../../assets/google.png";
import appleicon from "../../assets/apple.png";

export default function Login() {
  return (
    <div className="flex items-center justify-center bg-[#111] p-4 min-h-screen">
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
          <h2 className="text-3xl font-bold mb-4">Login to your account</h2>
          <p className="text-sm text-white/60 mb-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-white/80 underline">
              Register
            </Link>
          </p>

          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none"
            />

            <button className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:scale-105 transition-all">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-white/60 mb-2">Or login with</p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition">
                <img src={Googleicon} alt="Google" className="w-5 h-5" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white transition">
                <img src={appleicon} alt="Apple" className="w-5 h-5" />
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
