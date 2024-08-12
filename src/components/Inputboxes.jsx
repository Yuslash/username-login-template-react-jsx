import '../custom.css'; // Import your custom CSS file

const Inputboxes = () => {
    return (
        <div className="flex flex-col gap-3 mt-8">
            <input
                type="text"
                className="w-full h-14 px-4 bg-purple-600 bg-opacity-10 rounded-lg border border-slate-300 backdrop-blur-3xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-blue-500"
                placeholder="Username"
            />
            <button className="w-full h-14 bg-purple-500 text-white rounded-lg font-semibold shadow-md hover:bg-purple-800 transition duration-300">
                Login
            </button>
        </div>
    );
};

export default Inputboxes;
