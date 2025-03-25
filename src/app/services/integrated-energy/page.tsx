"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

export default function page() {
  const businessAreas = [
    "  Investment, Business Process  and consultancy services for Aviation  support resources and utilities supplies.",
    " Investment Advisory Services for Energy Projects.",
    " Safety, safety portfolio and safety management systems consultancy services.",
  ];

  const values = [
    { letter: "V", details: "Value-driven" },
    { letter: "I", details: "Integrity" },
    { letter: "D", details: "Dependable" },
    { letter: "A", details: "Accountable and" },
    {
      letter: "F",
      details:
        "Fidelity in our quest to making customers the main focus of our business",
    },
  ];
  return (
    <div className="px-[120px] max-mobile:px-6">
      <div className="grid grid-cols-2 gap-20 max-mobile:grid-cols-1">
        <div className="">
          <img src="/img/energy.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <div className=" text-h3">Integrated Energy.</div>
            <div className="">
              <br />
              At VIDAF Develpment Company Limited, we specialize in Integrated
              Energy Solutions designed to enhance efficiency, reduce costs, and
              support sustainability. Our comprehensive approach combines
              renewable energy, advanced grid technologies, and smart energy
              management systems to provide a seamless and optimized energy
              experience for businesses, communities, and individuals.
              <br />
              <br />
              We have expertise and capabilities for the following on
              Investment/Business Advisory services:
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-h4">Oil and Gas</div>
            <div className="">
We have very robust and complete value-chain expertise for Down and mid-stream oil and gas systems/sector, with capabilities not limited
            </div>
            <div className="">
            Our corporate efforts at providing a complete energy chain that aligns with the present global efforts of striving for sustainable energy sources; we have partnerships, alliances and business/trade agreements for: Wind, solar and bio energy as outlined below:
            </div>
            {['We work with major OEMs for materials’ specification, supply, installation and commissioning of Wind, solar and bio energy systems.', 'We design and manage off-grid renewable power supply systems.'].map((area, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div className="text-primary font-bold">
                    <FaCheckCircle size={24} className="text-primary" />
                  </div>
                  <div>{area}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-h4">Power</div>
            <div className="">
            We are expert in all stages and/or phases of the conventional power value chain
            </div>
            <div className="">
            We  are expert in all stages and/or phases of the conventional power value chain as outlined below:
            </div>
            {['We have capability for the conceptualization, design, equipment procurement and construction   power generation systems – Our projects take into cognizance resources’ availability, peculiarity of geographical location and sustainability of the entire supply process.', 'We have partnerships with Original equipment manufacturers (OEMs) for the supply, installation of all categorization of power generation and distribution equipment and spares.', 'We carry-out complete asset life maintenance for all categorization of power generation and distribution systems.', ' Power generation  equipment short and long term lease for off-grid supplies.'].map((area, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div className="text-primary font-bold">
                    <FaCheckCircle size={24} className="text-primary" />
                  </div>
                  <div>{area}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-h4">Alternative Energy</div>
            <div className="">
            We can provide sustainable energy at any scale
            </div>
            <div className="">
            Our corporate efforts at providing a complete energy chain that aligns with the present global efforts of striving for sustainable energy sources; we have partnerships, alliances and business/trade agreements for: Wind, solar and bio energy as outlined below:
            </div>
            {['We work with major OEMs for materials’ specification, supply, installation and commissioning of Wind, solar and bio energy systems.', 'We design and manage off-grid renewable power supply systems.'].map((area, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div className="text-primary font-bold">
                    <FaCheckCircle size={24} className="text-primary" />
                  </div>
                  <div>{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
