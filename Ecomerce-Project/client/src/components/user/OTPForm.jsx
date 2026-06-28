

const OtpForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-10">

                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-300">
                        <span className="text-white text-3xl font-bold">
                            🔒
                        </span>
                    </div>

                    <h1 className="mt-6 text-4xl font-bold text-gray-900">
                        Verify OTP
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Enter the 6-digit verification code sent to your email.
                    </p>

                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

                    <form className="space-y-6">

                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Verification Code
                            </label>

                            <input
                                type="text"
                                maxLength={6}
                                placeholder="Enter 6-digit OTP"
                                className="w-full h-14 px-5 rounded-xl border border-gray-300 outline-none text-center text-2xl tracking-[12px] font-semibold focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 cursor-pointer"
                        >
                            Verify OTP
                        </button>

                    </form>

                    {/* Resend */}
                    <div className="mt-8 text-center">

                        <p className="text-gray-500">
                            Didn't receive the code?
                        </p>

                        <button
                            className="mt-2 text-blue-600 font-semibold hover:text-blue-700 transition cursor-pointer"
                        >
                            Resend OTP
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default OtpForm;