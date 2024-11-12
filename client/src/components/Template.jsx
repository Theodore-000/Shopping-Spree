const Template = () => {
  return ( 
      <div className="font-[poppins] relative cursor-pointer transition-all duration-400 ease-in-out font-semibold text-gray-200 uppercase text-lg p-3 rounded-lg border-2 border-gray-200 w-80 h-16 flex items-center justify-center bg-gray-900 group">
        <span className="relative uppercase text-green-500 font-bold">Sevireta! 👋</span>
        <span className="absolute bottom-full left-0 w-full mb-4 h-full rounded-lg bg-gray-900 border-2 border-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transform scale-0 transition-all duration-400 ease-in-out before:absolute before:content-[''] before:w-3 before:h-3 before:bg-gray-900 before:rotate-45 before:-bottom-1 before:left-1/2 before:transform before:translate-x-[-50%] before:translate-y-full">
        <b className="text-green-500 text-xl font-bold">Se</b>tup - <b className="text-green-500 text-xl font-bold">Vi</b>te - <b className="text-green-500 text-xl font-bold">Re</b>act - <b className="text-green-500 text-xl font-bold">Ta</b>ilwind
      </span>
    </div>
   );
}
 
export default Template;

