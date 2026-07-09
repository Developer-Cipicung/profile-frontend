"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./BoundaryMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-3xl bg-gray-100 md:h-[430px]" />
  ),
});

export default MapClient;
