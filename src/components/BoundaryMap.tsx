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

type BoundaryMapProps = {
  className?: string;
  showTitle?: boolean;
};

const kantorDesaPosition: [number, number] = [-6.6786, 106.7989];

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
          <p className="text-sm font-semibold text-[var(--hijau)]">
            Lokasi Desa
          </p>
          <h2 className="text-3xl font-bold text-[var(--hijau-tua)]">
            Peta Desa
          </h2>
          <p className="mt-2 text-gray-600">
            Menampilkan Peta Desa Dengan Interest Point Desa Cipicung
          </p>
        </div>
      ) : null}

      <div className="h-[320px] w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md md:h-[430px]">
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

          <Marker position={kantorDesaPosition} icon={defaultIcon}>
            <Popup>
              <strong>Kantor Desa Cipicung</strong>
              <br />
              Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa Barat
              16740
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
