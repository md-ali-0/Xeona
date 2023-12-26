import { HiOutlineChartPie, HiOutlineClock, HiOutlineEye, HiOutlineUser } from "react-icons/hi";

const DashboardHome = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                <div className="flex justify-between items-center rounded border bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-indigo-100 py-3.5 px-3">
                        <HiOutlineEye className="text-indigo-500" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            3.456K
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total views
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded border bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-green-100 py-3.5 px-3">
                        <HiOutlineClock className="text-green-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            5461
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Products
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded border bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-blue-100 py-3.5 px-3">
                        <HiOutlineChartPie className="text-primary" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            $3.456K
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Sales
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center rounded border bg-white py-6 px-7 shadow">
                    <div className="flex items-center justify-center rounded-md bg-amber-100 py-3.5 px-3">
                        <HiOutlineUser className="text-amber-600" size={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-bold text-black dark:text-white">
                            1456K
                        </h4>
                        <span className="text-md text-neutral-500 font-light">
                            Total Users
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
