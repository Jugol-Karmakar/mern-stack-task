import React from "react";

const Mission = () => {
  const missions = [
    {
      id: 1,
      name: "OUR MISSION",
      detail:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
    {
      id: 2,
      name: "OUR VISION",
      detail:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
    {
      id: 3,
      name: "PHILOSOPHY",
      detail:
        "To provide outstanding dental care with a commitment of honesty, integrity & quality...",
    },
  ];
  return (
    <section className="container mx-auto px-20 grid grid-cols-3 gap-4 py-10">
      {missions.map((mission) => (
        <div
          key={mission.id}
          className="flex justify-center items-center bg-white px-6 py-8 my-4 hover:scale-105 transition-all duration-300 hover:shadow-lg overflow-hidden hover:rounded-lg"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold py-3">{mission.name}</h2>
            <p className="text-center py-2 text-sm font-thin text-gray-400">
              {mission.detail}
            </p>
            <button className="py-2 px-10 border border-black mt-4 text-base font-semibold text-black">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Mission;
