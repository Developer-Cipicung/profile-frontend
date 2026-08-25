"use client";

import dynamic from "next/dynamic";
import type { BoundaryMapProps } from "./BoundaryMap";

const MapClient = dynamic<BoundaryMapProps>(() => import("./BoundaryMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[340px] w-full animate-pulse rounded-lg bg-emerald-50 md:h-[470px]" />
  ),
});

export default MapClient;
