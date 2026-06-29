

const ProfileDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4 animate-pulse">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <div className="flex flex-col md:flex-row items-center gap-6">

                        <div className="w-28 h-28 rounded-full bg-slate-300"></div>

                        <div className="flex-1">
                            <div className="h-8 w-64 bg-slate-300 rounded mb-4"></div>
                            <div className="h-5 w-40 bg-slate-200 rounded mb-6"></div>
                            <div className="h-10 w-52 bg-slate-200 rounded-full"></div>
                        </div>

                    </div>

                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-3xl shadow-lg p-8"
                        >

                            <div className="h-8 w-56 bg-slate-300 rounded mb-8"></div>

                            <div className="space-y-6">

                                {[1,2,3,4,5,6].map((i)=>(
                                    <div key={i}>
                                        <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
                                        <div className="h-6 w-full bg-slate-300 rounded"></div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

                {/* Bottom */}
                <div className="bg-white rounded-3xl shadow-lg mt-10 p-8">

                    <div className="h-8 w-60 bg-slate-300 rounded mb-8"></div>

                    <div className="grid md:grid-cols-2 gap-6">

                        {[1,2].map((item)=>(
                            <div
                                key={item}
                                className="border rounded-2xl p-5"
                            >
                                <div className="h-4 w-28 bg-slate-200 rounded mb-3"></div>
                                <div className="h-6 w-40 bg-slate-300 rounded"></div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileDetailsSkeleton;