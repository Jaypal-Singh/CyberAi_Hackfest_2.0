import React from "react";
import { InfiniteMovingCards } from "../../../Components/InfiniteMovingCards/InfiniteMovingCards";

const Sponsors = () => {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-purple-500 mb-10 uppercase tracking-wider z-10">Our Sponsors</h2>
            <InfiniteMovingCards
                items={firstRow}
                direction="right"
                speed="slow"
            />
            <InfiniteMovingCards
                items={secondRow}
                direction="left"
                speed="slow"
                className="mt-10"
            />
        </div>
    );
};

import recomai from "../../../assets/sponsors/recomai.png";
import iic from "../../../assets/sponsors/iic.png";
import gujcost from "../../../assets/sponsors/gujcost.png";
import iste from "../../../assets/sponsors/iste.png";
import lnt from "../../../assets/sponsors/lnt.png";
import spu from '../../../assets/sponsors/spu.png'
import isg from '../../../assets/sponsors/isogone.png'
import techdefence from '../../../assets/sponsors/techdefence.png'
import iete from '../../../assets/sponsors/iete.png'


const testimonials = [
    {
        image: recomai,
        name: "ReComAI",
        title: "Platinum Sponsor",
    },
    {
        image: iic,
        name: "IIC",
        title: "Gold Sponsor",
    },
    {
        image: gujcost,
        name: "GUJCOST",
        title: "Government Partner",
    },
    {
        image: iste,
        name: "ISTE",
        title: "Silver Sponsor",
    },
    {
        image: lnt,
        name: "L&T EduTech",
        title: "Education Partner",
    },
    {
        image: spu,
        name: "SPU",
        title: "Sponsor",
    },
    {
        image: isg,
        name: "ISG",
        title: "Sponsor",
    },
    {
        image: techdefence,
        name: "TechDefence",
        title: "Sponsor",
    },
    {
        image: iete,
        name: "IETE",
        title: "Sponsor",
    },
];
const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(5);

export default Sponsors;
