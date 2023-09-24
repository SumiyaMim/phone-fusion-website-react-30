import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="relative w-full">
        <img src={banner} className="h-96 w-full rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative md:w-3/6">
            <input
              type="email"
              className="h-full w-full rounded-[7px] border border-blue-gray-200 px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline-none"
              placeholder="Search by category..."
              required
            />
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white"
              type="button"
              data-ripple-light="true"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
