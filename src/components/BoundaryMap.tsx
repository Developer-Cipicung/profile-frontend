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

const kantorDesaIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
    ">
      <div style="
        width: 52px;
        height: 52px;
        background: linear-gradient(135deg, #165E33, #36C56F);
        border: 4px solid white;
        border-radius: 18px;
        box-shadow: 0 12px 28px rgba(22, 94, 51, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: rotate(45deg);
      ">
        <span style="
          transform: rotate(-45deg);
          color: white;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 0;
        ">
          K
        </span>
      </div>

      <div style="
        margin-top: 8px;
        background: white;
        color: #165E33;
        border: 1px solid rgba(22, 94, 51, 0.15);
        border-radius: 9999px;
        padding: 4px 10px;
        font-size: 11px;
        font-weight: 700;
        white-space: nowrap;
        box-shadow: 0 6px 16px rgba(0,0,0,0.15);
      ">
        Kantor Desa
      </div>
    </div>
  `,
  iconSize: [110, 82],
  iconAnchor: [55, 54],
  popupAnchor: [0, -54],
});

const posyanduIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
    ">
      <div style="
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, #E8B921, #83FFBB);
        border: 3px solid white;
        border-radius: 9999px;
        box-shadow: 0 10px 24px rgba(0,0,0,0.22);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #165E33;
        font-size: 22px;
        font-weight: 800;
      ">
        +
      </div>

      <div style="
        margin-top: 5px;
        background: white;
        color: #165E33;
        border-radius: 9999px;
        padding: 3px 8px;
        font-size: 10px;
        font-weight: 700;
        white-space: nowrap;
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      ">
        Posyandu
      </div>
    </div>
  `,
  iconSize: [90, 68],
  iconAnchor: [45, 44],
  popupAnchor: [0, -44],
});

function getLocationIcon(location: VillageLocation) {
  if (location.category === "Kantor Desa") return kantorDesaIcon;
  if (location.category === "Posyandu") return posyanduIcon;

  return posyanduIcon;
}

function FitToBoundary({ data }: { data: FeatureCollection }) {
  const map = useMap();

  useEffect(() => {
    const layer = L.geoJSON(data);
    const bounds = layer.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [28, 28],
      });
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
        <div className="mb-6">
          {/* <p className="text-sm font-semibold text-[var(--hijau)]">
            Lokasi Desa
          </p> */}
          <h2 className="text-3xl font-bold text-[var(--hijau-tua)]">
            Peta Desa
          </h2>
          <p className="mt-2 text-gray-600">
            Menampilkan Peta Desa Dengan Interest Point Desa Cipicung
          </p>
        </div>
      ) : null}

      <div className="cipicung-boundary-map relative z-0 h-[320px] w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md md:h-[430px]">
        <MapContainer
          center={kantorDesaPosition}
          zoom={14}
          minZoom={13}
          maxZoom={18}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {boundaryData ? (
            <>
              <FitToBoundary data={boundaryData} />

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
      </div>
    </div>
  );
}
