"use client";
import Title from "./Title"; //
import { GiCancel } from "react-icons/gi";

function Search({ isSearchModal, setIsSearchModal }) {
  console.log(setIsSearchModal);
  return (
    <div>
      {/* Modal */}
      {isSearchModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50"
          onClick={() => setIsSearchModal(false)}
        >
          <div
            className="bg-white md:w-2/5 w-[370px] p-10 rounded-lg relative "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel />
            </button>
            <div>
              <h2 className="text-xl font-bold mb-4">
                <Title addClass="text-[40px]  text-center ">Search!</Title>
              </h2>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <ul className="mt-4 text-black">
              <li className=" mt-2 flex items-center justify-between  hover:text-white hover:bg-primary transition-all">
                <div>
                  <img
                    src="https://html.design/demo/feane/images/f2.png"
                    alt=""
                    width={58}
                    height={58}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className=" mt-2 flex items-center justify-between  hover:text-white hover:bg-primary transition-all">
                <div>
                  <img
                    src="https://html.design/demo/feane/images/f2.png"
                    alt=""
                    width={58}
                    height={58}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="mt-2  flex items-center justify-between  hover:text-white hover:bg-primary transition-all">
                <div>
                  <img
                    src="https://html.design/demo/feane/images/f2.png"
                    alt=""
                    width={58}
                    height={58}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className=" mt-2 flex items-center justify-between  hover:text-white hover:bg-primary transition-all">
                <div>
                  <img
                    src="https://html.design/demo/feane/images/f2.png"
                    alt=""
                    width={58}
                    height={58}
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;