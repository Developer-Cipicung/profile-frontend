import React from "react";

const Header = () => {
  return (
    <section className="w-full bg-[#f6faf7] px-5 py-10 text-center sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase text-hijau md:text-sm">
          Profil Desa
        </p>
        <h1 className="mt-2 font-montserrat text-2xl font-extrabold leading-tight text-hijau-tua md:text-5xl">
          Profil Desa Cipicung
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-[#5A7A68] md:mt-4 md:text-base md:leading-relaxed">
          Mengenal lebih jauh sejarah, identitas, dan arah pembangunan Desa
          Cipicung
        </p>
      </div>
    </section>
  );
};

export default Header;
