export const Title = ({ title, para }) => {
  return (
    <div className="relative min-h-[300px] bg-title-bg w-full bg-cover bg-no-repeat flex flex-col justify-center items-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-4xl sm:text-4xl lg:text-5xl font-bold">
          {title}
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 font-medium leading-relaxed md:w-9/12 mx-auto">
          {para}
        </p>
      </div>
    </div>
  );
};
