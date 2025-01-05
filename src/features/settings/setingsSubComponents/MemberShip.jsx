import React from "react";
import { PiCrownSimpleBold } from "react-icons/pi";

function MemberShip() {
  return (
    <>
      <h2 className="text-3xl font-normal">Membership Information</h2>
      <p className="text-base text-zinc-400">
        Manage your membership plan & order history details
      </p>
      <p className="mt-6 text-xl font-medium">Free Member</p>

      <section className="border-dotted border-white border-x-2 border-y-2 px-4 py-14 flex flex-col justify-center items-center gap-6">
        <PiCrownSimpleBold color="rgb(250,184,24)" size={50} />
        <p>
          Premium access includes unlimited anime, ad-free, new episodes shortly
          after they air in Japan. Try it now!
        </p>
        <button className="text-black py-2 px-3 bg-yellow-500 hover:bg-yellow-400">
          <PiCrownSimpleBold size={24} className="inline" /> 7-DAY FREE TRIAL
        </button>
      </section>
    </>
  );
}

export default MemberShip;
