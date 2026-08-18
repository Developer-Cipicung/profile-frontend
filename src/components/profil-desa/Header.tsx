import React from "react";

const Header = () => {
  return (
    <section className="w-full bg-white px-5 py-14 text-center sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase text-hijau">
          Profil Desa
        </p>
        <h1 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-hijau-tua md:text-5xl">
        Profil Desa Cipicung
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5A7A68] md:text-base">
        Mengenal lebih jauh sejarah, identitas, dan arah pembangunan Desa
        Cipicung
        </p>
      </div>
    </section>
  );
};

export default Header;
