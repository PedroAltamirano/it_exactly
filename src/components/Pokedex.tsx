import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Pokedex: React.FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen max-w-lg mx-auto flex justify-center items-center">
      <div className="bg-red-600 p-8">
        <div className="flex gap-4 mb-6">
          <div className="bg-blue-300 rounded-full h-24 w-24"></div>
          <div className="bg-red-300 rounded-full h-6 w-6"></div>
          <div className="bg-yellow-300 rounded-full h-6 w-6"></div>
          <div className="bg-green-300 rounded-full h-6 w-6"></div>
        </div>

        <div className="bg-orange-100 max-h-96 h-96 p-6">
          <div className="bg-white h-full overflow-auto">{children}</div>
        </div>

        <div className="flex gap-2 mt-6">
          <div className="flex flex-col w-2/3">
            <div className="flex">
              <div className="bg-black rounded-full h-14 w-14 mr-4"></div>
              <div className="bg-red-300 rounded-full h-5 w-16 mr-2"></div>
              <div className="bg-green-300 rounded-full h-5 w-16"></div>
            </div>
            <div className="flex">
              <div className="flex justify-center gap-4 w-14 mt-4">
                <div className="bg-black rounded-full h-2 w-2"></div>
                <div className="bg-black rounded-full h-2 w-2"></div>
              </div>
              <div className="bg-green-300 rounded-xl h-32 w-60"></div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="w-32 h-10 bg-black relative inset-1/2 -my-5 -mx-16"></div>
            <div className="w-10 h-32 bg-black relative inset-1/2 -my-20 -mx-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
