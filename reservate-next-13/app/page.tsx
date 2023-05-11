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
              {/* IMAGES */}
              <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                  5 photos
                </h1>
                <div className="flex flex-wrap">
                  <img
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/49717547.jpg"
                    className="w-56 h-44 mr-1 mb-1"
                  ></img>
                  <img
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/49717549.jpg"
                    className="w-56 h-44 mr-1 mb-1"
                  ></img>
                  <img
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/49717563.jpg"
                    className="w-56 h-44 mr-1 mb-1"
                  ></img>
                  <img
                    src="https://resizer.otstatic.com/v2/photos/xlarge/2/49717559.jpg"
                    className="w-56 h-44 mr-1 mb-1"
                  ></img>
                  <img
                    src="https://resizer.otstatic.com/v2/photos/xlarge/3/49717563.jpg"
                    className="w-56 h-44 mr-1 mb-1"
                  ></img>
                </div>
              </div>
              {/* IMAGES */}
              {/* REVIEWS */}
              <div>
                <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                  What 100 people are saying
                </h1>
                <div>
                  {/* REVIEW CARD */}
                  <div className="border-b pb-7 mb-7">
                    <div className="flex">
                      <div className="w-1/6 flex flex-col items-center">
                        <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                          <h2 className="text-white text-2xl">MJ</h2>
                        </div>
                        <p className="text-center mt-1">Micheal Jordan</p>
                      </div>
                      <div className="ml-10 w-5/6">
                        <div className="flex items-center">
                          <div className="flex mr-5">******</div>
                        </div>
                        <div className="mt-5">
                          <p className="text-lg font-light">
                            Excellent excellent excellent, as always. We had the
                            Dungeness crab noodles, tuna bowl, pancake, and
                            cucumber miso salad. All were perfectly balanced and
                            executed. Yum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* REVIEW CARD */}
                </div>
              </div>
              {/* REVIEWS */}
            </div>
          </div>
          {/* DESCRIPTION PORTION */}
        </main>
      </main>
    </main>
  );
}
