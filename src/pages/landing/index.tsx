import { Crown } from "lucide-react";
import { FC } from "react";

/**
 * Landing page for "밈클리" ‑ Meme Ranking service
 *
 * Fits the base setup in https://github.com/DguFarmSystem/4th-security-S4-FE
 * Place this file in `src/pages/landing/index.tsx` (or adjust the path to match
 * your router configuration). Add a route so `<MemeRanking />` renders at `/`.
 */
const MemeRanking: FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top navigation bar */}
      <header className="flex items-center gap-2 px-4 py-3 shadow-sm">
        <div className="p-1 rounded-full bg-rose-100 flex items-center justify-center">
          <Crown className="w-6 h-6 text-rose-500" />
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-rose-500">밈</span>클리
        </h1>
      </header>

      {/* Hero section */}
      <section className="bg-rose-400 text-white text-center flex flex-col justify-center items-center px-6 py-16 space-y-2">
        <p className="leading-relaxed text-lg font-semibold whitespace-pre-line">
          밈랭킹은 한국에서 유행한{"\n"}
          밈을 모으는 랭킹으로{"\n"}
          어쩌구저쩌구 입니다
        </p>
      </section>

      {/* Rising memes card */}
      <section className="flex-1 flex flex-col items-center px-6">
        <div className="-mt-14 w-full max-w-xs bg-rose-100/80 border-2 border-rose-300 rounded-3xl px-8 py-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-rose-600 mb-4 text-center drop-shadow-sm">
            급상승 밈 Top 5
          </h2>
          <ol className="space-y-2 text-white text-lg font-medium list-decimal list-inside">
            <li>TOP 1</li>
            <li>TOP 2</li>
            <li>TOP 3</li>
            <li>TOP 4</li>
            <li>TOP 5</li>
          </ol>
        </div>

        {/* Spacer to push button near bottom on taller screens */}
        <div className="flex-grow" />

        {/* CTA button */}
        <button
          type="button"
          className="mb-8 w-44 rounded-full border border-rose-400 bg-rose-100/80 px-6 py-3 text-rose-600 font-semibold shadow-inner backdrop-blur-sm transition hover:bg-rose-200 active:scale-95"
        >
          더 알아보기
        </button>
      </section>
    </div>
  );
};

export default MemeRanking;
