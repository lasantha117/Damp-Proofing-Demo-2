import React, { useEffect, useRef } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

export function MapSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-green-900/20 text-green-200 px-4 py-1 rounded-full text-sm font-medium border border-green-700/30">
            We Cover This Area
          </div>

               <h2 className="text-4xl md:text-5xl text-white mb-4">
            Service Area
            <span className="block bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
             Central London
            </span>
          </h2>
          
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
            We cover properties within this demo service radius. Use the map controls to zoom and pan; the circle shows approximate coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left info card */}
          <div>
            <div className="bg-slate-800 rounded-2xl p-6 shadow-md border border-slate-700 h-full flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-500 text-white rounded-lg w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Central London (Demo)</h3>
                  <p className="text-sm text-slate-300">Centered at coordinates 51.5074, -0.1278</p>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-200">
          <br></br>
               
                  <br></br>
                     <div className="mt-2 flex gap-4 items-center justify-center">
                <a
                  className="inline-flex items-center justify-center bg-green-500 text-white px-5 py-3 rounded-lg shadow-sm hover:opacity-95"
                  href="https://www.google.com/maps?q=51.507351,-0.127758"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>

              
              </div>
              </div>

           

              {/* Working days / hours */}
              <div className="mt-4 text-sm text-slate-200">
                <div className="bg-slate-900/20 border border-slate-700 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Mon — Fri</span>
                    <span>08:00 — 18:00</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">Saturday</span>
                    <span>09:00 — 13:00</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-slate-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right map area */}
          <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[420px]">
                <div ref={mapRef => { /* placeholder for TypeScript awareness */ }}>
                  {/* map container rendered below */}
                </div>

                <div id="service-map" ref={(el) => { /* kept for React devtools */ }} style={{ width: '100%', height: '100%' }} />

                {/* Initialize map after render */}
                <MapInit />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;

function MapInit() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const container = document.getElementById('service-map');
    if (!container) return;
    if (mapRef.current) return;

    const center = L.latLng(51.507351, -0.127758);
    const radiusMeters = 8046; // ~5 miles

    const map = L.map(container, { center, zoom: 12, zoomControl: true });
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Build an inner ring approximating the circle so we can create an inverted polygon (hole)
    const earthRadius = 6378137;
    const steps = 64;
    const inner: [number, number][] = [];
    for (let i = 0; i < steps; i++) {
      const theta = (i / steps) * Math.PI * 2;
      const dx = radiusMeters * Math.cos(theta);
      const dy = radiusMeters * Math.sin(theta);
      const lat = center.lat + (dy / earthRadius) * (180 / Math.PI);
      const lng = center.lng + (dx / earthRadius) * (180 / Math.PI) / Math.cos((center.lat * Math.PI) / 180);
      inner.push([lat, lng]);
    }

    const outer: [number, number][] = [[90, -180], [90, 180], [-90, 180], [-90, -180]];

    const mask = L.polygon([outer, inner], {
      color: 'transparent',
      fillColor: 'rgba(2,6,23,0.55)',
      fillRule: 'evenodd',
      interactive: false
    }).addTo(map);

    const circle = L.circle(center, {
      radius: radiusMeters,
      color: '#10b981',
      weight: 6,
      fill: false,
      className: 'service-pulse'
    }).addTo(map);

    const marker = L.circleMarker(center, {
      radius: 6,
      fillColor: '#10b981',
      color: '#ffffff',
      weight: 2,
      fillOpacity: 1
    }).addTo(map);

    const info = (L.control as any)({ position: 'topright' });
    info.onAdd = function () {
      const div = L.DomUtil.create('div', 'text-xs px-3 py-1 rounded-full bg-green-900/30 text-green-100 border border-green-700');
      div.innerText = 'Service radius: ~5 miles';
      L.DomEvent.disableClickPropagation(div);
      return div;
    };
    info.addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return null;
}
