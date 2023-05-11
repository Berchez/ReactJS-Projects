export default function Home() {
  return (
    <main>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-ayto bg-white">
          {/* NAVBAR */}
          <nav className="bg-white p-2 flex justify-between">
            <a href="" className="font-bold text-gray-700 text-2xl">
              OpenTable
            </a>
            <div>
              <div className="flex">
                <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
                  Sign in
                </button>
                <button className="border p-1 px-4 rounded text-black">
                  Sign up
                </button>
              </div>
            </div>
          </nav>
          {/* NAVBAR */}
          {/* HEADER */}
          <div className="h-96 overflow-hidden ">
            <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
              <h1 className="text-7xl text-white captitalize text-shadow text-center">
                Milestones Grill (Toronto)
              </h1>
            </div>
          </div>
          {/* HEADER */}
          {/* DESCRIPTION PORTION */}
          <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[70%] rounded p-3 shadow">
              {/* RESTAURANT NAVBAR */}
              <nav className="flex text-reg border-b pb-2">
                <a href="" className="mr-7">
                  Overview
                </a>
                <a href="" className="mr-7">
                  Menu
                </a>
              </nav>
              {/* RESTAURANT NAVBAR */}
              {/* TITLE */}
              <div className="mt-4 border-b pb-6">
                <h1 className="font-bold text-6xl">Milesstone Grill</h1>
              </div>
              {/* TITLE */}
              {/* RATING */}
              <div className="flex items-end">
                <div className="ratings mt-2 flex items-center">
                  <p>*****</p>
                  <p className="text-reg ml-3">4.9</p>
                </div>
                <div>
                  <p className="text-reg ml-4">600 Reviews</p>
                </div>
              </div>
              {/* RATING */}
              {/* DESCRIPTION */}
              <div className="mt-4">
                <p className="text-lg font-light">
                  3 Course Dinner for two, Short rib wontons, smoky chili oil,
                  garlic crunch (NF, DF) Dungeness crab spring onion pancake
                  (NF, DF) Halibut, spring onion oil, tomato nuoc cham, sugar
                  snap pease (NF, DF, GF) Grass-fed strip loin steak, spring
                  radish, "A1" (NF, DF, GF) Coconut cheesecake, rhubarb, yuzu
                  caramel (NF, DF, GF) Mochi cake, sour cherries, chocolate
                  pomegranate sauce (NF, GF)
                </p>
              </div>
              {/* DESCRIPTION */}
            </div>
          </div>
          {/* DESCRIPTION PORTION */}
        </main>
      </main>
    </main>
  );
}
