import React from "react";
import { NavLink } from "react-router-dom";
import bed from "/assets/bed.png";
import bicycle from "/assets/bicycle.png";
import sofa from "/assets/sofa.png";
import table from "/assets/table.jpg";
import dumbells from "/assets/dumbells.jpg";
import television from "/assets/television.png";
import treadmill from "/assets/treadmill.png";
import speaker from "/assets/speaker.jpg";

const images = [
  { img: bed, title: "Bed", connect: "/bed" },
  { img: bicycle, title: "Bicycle", connect: "/" },
  { img: sofa, title: "Washing Machine", connect: "/wash" },
  { img: table, title: "Table", connect: "/" },
  { img: television, title: "Television", connect: "/" },
  { img: treadmill, title: "Treadmill", connect: "/" },
  { img: dumbells, title: "Dumbells", connect: "/" },
  { img: speaker, title: "Speaker", connect: "/" },
];

const Products = () => {
  return (
    <div className="my-12">
      <div className="mx-8">
        <h1 className="text-center text-3xl font-medium my-10">Rent Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image) => (
            <div key={image.title} className="relative">
              <NavLink to={image.connect} className="block">
                <div className="absolute top-1/2 left-4 text-white font-bold text-xl z-10">
                  {image.title}
                </div>
                <img
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-110 opacity-90 filter brightness-75"
                  src={image.img}
                  alt={image.title}
                />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
