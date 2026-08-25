"use client";

import { useEffect, useState } from "react";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import type { FeatureCollection } from "geojson";
import {
  mappedVillageLocations,
  type VillageLocation,
} from "@/src/data/villageLocations";

type BoundaryMapProps = {
  className?: string;
  showTitle?: boolean;
};

const kantorDesaLocation = mappedVillageLocations.find(
  (location) => location.id === "kantor-desa-cipicung",
);
const kantorDesaPosition = kantorDesaLocation?.position ?? [-6.6786, 106.7989];

type LocationIconVariant = {
  label: string;
  background: string;
  color: string;
  borderColor?: string;
  radius?: string;
  rotate?: boolean;
};

const createLocationIcon = ({
  label,
  background,
  color,
  borderColor = "white",
  radius = "9999px",
  rotate = false,
}: LocationIconVariant) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width: 30px;
        height: 30px;
        background: ${background};
        border: 2px solid ${borderColor};
        border-radius: ${radius};
        box-shadow: 0 6px 14px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: ${rotate ? "rotate(45deg)" : "none"};
      ">
        <span style="
          transform: ${rotate ? "rotate(-45deg)" : "none"};
          color: ${color};
          font-size: ${label.length > 1 ? "9px" : "14px"};
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0;
        ">
          ${label}
        </span>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });

const kantorDesaIcon = createLocationIcon({
  label: "K",
  background: "#165E33",
  color: "white",
  radius: "9px",
  rotate: true,
});

const posyanduIcon = createLocationIcon({
  label: "+",
  background: "#36C56F",
  color: "#124629",
});

const bottlePressIcon = createLocationIcon({
  label: "BP",
  background: "#2F80ED",
  color: "white",
});

const bioporiIcon = createLocationIcon({
  label: "BI",
  background: "#0F766E",
  color: "white",
});

const budidayaIcon = createLocationIcon({
  label: "BD",
  background: "#E8B921",
  color: "#2F2A0A",
});

const produksiIcon = createLocationIcon({
  label: "RP",
  background: "#7C3AED",
  color: "white",
});

const posPandaiIcon = createLocationIcon({
  label: "PP",
  background: "#F97316",
  color: "white",
});

const pengepulIcon = createLocationIcon({
  label: "PS",
  background: "#475569",
  color: "white",
});

const fasilitasUmumIcon = createLocationIcon({
  label: "L",
  background: "#64748B",
  color: "white",
});

const educationIcon = createLocationIcon({
  label: "S",
  background: "#2563EB",
  color: "white",
});

const healthIcon = createLocationIcon({
  label: "H",
  background: "#DC2626",
  color: "white",
});

const locationTypeMatchers = [
  {
    pattern: /bottle-press/,
    icon: bottlePressIcon,
  },
  {
    pattern: /biopori/,
    icon: bioporiIcon,
  },
  {
    pattern: /budidaya|lahan/,
    icon: budidayaIcon,
  },
  {
    pattern: /rumah-produksi/,
    icon: produksiIcon,
  },
  {
    pattern: /pos-pandai/,
    icon: posPandaiIcon,
  },
  {
    pattern: /pengepul-sampah/,
    icon: pengepulIcon,
  },
];

function getLocationIcon(location: VillageLocation) {
  if (location.category === "Kantor Desa") return kantorDesaIcon;
  if (location.category === "Posyandu") return posyanduIcon;
  if (location.category === "Pendidikan") return educationIcon;
  if (location.category === "Kesehatan") return healthIcon;

  const locationMatch = locationTypeMatchers.find(({ pattern }) =>
    pattern.test(location.id),
  );

  return locationMatch?.icon ?? fasilitasUmumIcon;
}

function LimitToBoundary({ data }: { data: FeatureCollection }) {
  const map = useMap();

  useEffect(() => {
    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();

    if (bounds.isValid()) {
      map.setMaxBounds(bounds.pad(0.35));
    }
  }, [data, map]);

  return null;
}

export default function BoundaryMap({
  className,
  showTitle = false,
}: BoundaryMapProps) {
  const [boundaryData, setBoundaryData] = useState<FeatureCollection | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;

    fetch("/geo/cipicung-boundary.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load Cipicung boundary GeoJSON");
        }

        return response.json() as Promise<FeatureCollection>;
      })
      .then((data) => {
        if (isMounted) setBoundaryData(data);
      })
      .catch(() => {
        if (isMounted) setBoundaryData(null);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={className}>
      {showTitle ? (
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase text-hijau">
            Lokasi Desa
          </p>
          <h2 className="mt-2 font-montserrat text-3xl font-extrabold text-[var(--hijau-tua)] md:text-4xl">
            Peta Desa
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
            Menampilkan Peta Desa Dengan Interest Point Desa Cipicung
          </p>
        </div>
      ) : null}

      <div className="cipicung-boundary-map relative z-0 h-[340px] w-full overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_18px_42px_rgba(22,94,51,0.1)] md:h-[470px]">
        <MapContainer
          center={kantorDesaPosition}
          zoom={15}
          minZoom={14}
          maxZoom={18}
          scrollWheelZoom={false}
          attributionControl={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {boundaryData ? (
            <>
              <LimitToBoundary data={boundaryData} />

              <GeoJSON
                data={boundaryData}
                style={{
                  color: "#E84B4B",
                  weight: 3,
                  dashArray: "6 6",
                  fillColor: "#36C56F",
                  fillOpacity: 0.1,
                }}
                onEachFeature={(_, layer) => {
                  layer.bindPopup(`
                    <strong>Desa Cipicung</strong><br/>
                    Kecamatan Cijeruk, Kabupaten Bogor<br/>
                    Jawa Barat
                  `);
                }}
              />
            </>
          ) : null}

          {mappedVillageLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              icon={getLocationIcon(location)}
            >
              <Popup>
                <div className="space-y-1">
                  <strong>{location.name}</strong>
                  {location.rw ? (
                    <>
                      <br />
                      <span>{location.rw}</span>
                    </>
                  ) : null}
                  <br />
                  <span>{location.address}</span>
                  {location.description ? (
                    <>
                      <br />
                      <span>{location.description}</span>
                    </>
                  ) : null}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="absolute bottom-0 right-0 z-[500] bg-white/90 px-2 py-1 text-[11px] leading-none text-gray-700">
          PPK Ormawa Himagizi 2026 |{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-hijau-tua"
          >
            &copy; OpenStreetMap contributors
          </a>
        </div>
      </div>
    </div>
  );
}
