'use client';
import { useState } from 'react';

export default function DualPriceRange() {
  const min = 10000;
  const max = 100000;

  const [minValue, setMinValue] = useState(20000);
  const [maxValue, setMaxValue] = useState(80000);

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-6">
      {/* Container lebih tinggi agar thumb bisa centered */}
      <div className="relative h-12">
        {/* dasar track (tebal) */}
        <div className="absolute top-1/2 w-full h-3 bg-gray-300 rounded-full transform -translate-y-1/2" />

        {/* track terisi di antara thumbs */}
        <div
          className="absolute top-1/2 h-3 bg-primary rounded-full transform -translate-y-1/2"
          style={{
            left: `${minPercent}%`,
            width: `${Math.max(maxPercent - minPercent, 0)}%`,
          }}
        />

        {/* ===== key fix: pointer-events-none pada input, thumb tetap pointer-events:auto ===== */}
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={minValue}
          onChange={(e) =>
            setMinValue(Math.min(Number(e.target.value), maxValue - 1000))
          }
          className="absolute w-full h-full appearance-none bg-transparent z-20 pointer-events-none"
        />

        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={maxValue}
          onChange={(e) =>
            setMaxValue(Math.max(Number(e.target.value), minValue + 1000))
          }
          className="absolute w-full h-full appearance-none bg-transparent z-30 pointer-events-none"
        />

        {/* Tooltip bergerak mengikuti thumb */}
        <div
          className="absolute -bottom-4 text-xs text-white bg-primary px-2 py-1 rounded-md transform -translate-x-1/2 pointer-events-none"
          style={{ left: `${minPercent}%` }}
        >
          Rp{minValue.toLocaleString('id-ID')}
        </div>

        <div
          className="absolute -bottom-4 text-xs text-white bg-primary px-2 py-1 rounded-md transform -translate-x-1/2 pointer-events-none"
          style={{ left: `${maxPercent}%` }}
        >
          Rp{maxValue.toLocaleString('id-ID')}
        </div>

        {/* Styling range (webkit + moz) */}
        <style jsx>{`
          /* basic reset */
          input[type="range"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          /* draggable area for track (keep transparent because track drawn by divs) */
          input[type="range"]::-webkit-slider-runnable-track {
            height: 12px; /* sama dengan h-3 (12px) track */
            background: transparent;
            border: none;
          }

          /* thumb (Chrome, Safari) */
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;      /* ukuran thumb */
            width: 20px;
            border-radius: 50%;
            background: var(--tw-color-primary, #3b82f6);
            margin-top: -4px;  /* center thumb: (thumbHeight - trackHeight)/2 */
            box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.12);
            cursor: pointer;
            pointer-events: auto; /* penting — memungkinkan drag meski input pointer-events:none */
          }

          /* Firefox */
          input[type="range"]::-moz-range-track {
            height: 12px;
            background: transparent;
            border: none;
          }
          input[type="range"]::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: var(--tw-color-primary, #3b82f6);
            border: none;
            cursor: pointer;
            pointer-events: auto;
          }

          /* Remove focus outline */
          input[type="range"]:focus {
            outline: none;
          }
        `}</style>
      </div>

      {/* Legend / min-max */}
      {/* <div className="flex justify-between text-sm text-gray-400">
        <span>Rp{min.toLocaleString('id-ID')}</span>
        <span>Rp{max.toLocaleString('id-ID')}</span>
      </div> */}
    </div>
  );
}
