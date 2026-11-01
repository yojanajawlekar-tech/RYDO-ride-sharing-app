                <span className="text-[11px] font-black text-[#172033]">
                  {percent}%
                </span>
              </div>
            </div>

            <div className="hidden sm:block">
              <p className="text-[9px] font-black uppercase tracking-[.2em] text-slate-500">
                Journey
              </p>
              <p className="mt-0.5 text-xs font-black text-[#172033]">
                {getStageShort(journeyStage)}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM HUD */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-[1000] sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex flex-col gap-3 rounded-[1.6rem] border border-white/60 bg-white/92 p-3 shadow-[0_18px_45px_rgba(17,31,54,.22)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="flex items-center gap-4 overflow-x-auto">
              <div className="flex shrink-0 items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg">
                  📍
                </span>
                <span className="text-[10px] font-black uppercase tracking-[.12em] text-[#172033]">
                  Pickup
                </span>
              </div>

              <div className="h-px w-8 shrink-0 bg-slate-300" />

              <div className="flex shrink-0 items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBE0B] shadow-[0_0_10px_#FFBE0B]" />
                <span className="text-[10px] font-black uppercase tracking-[.12em] text-[#172033]">
                  Route
                </span>
              </div>

              <div className="h-px w-8 shrink-0 bg-slate-300" />

              <div className="flex shrink-0 items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-lg">
                  🚕
                </span>
                <span className="text-[10px] font-black uppercase tracking-[.12em] text-[#172033]">
                  Driver
                </span>
              </div>

              <div className="h-px w-8 shrink-0 bg-slate-300" />

              <div className="flex shrink-0 items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-lg">
                  📍
                </span>
                <span className="text-[10px] font-black uppercase tracking-[.12em] text-[#172033]">
                  Destination
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
              <div>
                <p className="text-[8px] font-black uppercase tracking-[.18em] text-slate-500">
                  Status
                </p>
                <p className="mt-0.5 text-xs font-black text-[#172033]">
                  {getStageShort(journeyStage)}
                </p>
              </div>

              <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200 sm:w-32">
                <div
                  className="h-full rounded-full transition-[width] duration-200"
                  style={{
                    width: `${percent}%`,
                    background: `linear-gradient(90deg,#FFBE0B,${statusColor})`,
                    boxShadow: `0 0 14px ${statusColor}`,
                  }}
                />
              </div>

              <span
                className="text-xs font-black"
                style={{ color: statusColor }}
              >
                {percent}%
              </span>
            </div>
          </div>
        </div>

        {/* ROUTING LOADER */}
        {!routeReady && pickupCoordinates && destinationCoordinates && (
          <div className="pointer-events-none absolute inset-0 z-[1100] flex items-center justify-center bg-white/20 backdrop-blur-[2px]">
            <div className="rounded-2xl border border-white/70 bg-white/95 px-6 py-5 text-center shadow-2xl">
              <div className="mx-auto h-7 w-7 animate-spin rounded-full border-2 border-slate-200 border-t-[#FFBE0B]" />
              <p className="mt-3 text-xs font-black uppercase tracking-[.16em] text-[#172033]">
                Building your route
              </p>
              <p className="mt-1 text-[9px] font-bold text-slate-500">
                Finding the best road path…
              </p>
            </div>
          </div>
        )}

        {routeError && (
          <div className="pointer-events-none absolute right-5 top-24 z-[1000] rounded-xl border border-white/70 bg-white/90 px-3 py-2 text-[9px] font-bold text-slate-500 shadow-xl backdrop-blur-xl">
            Live route fallback
          </div>
        )}
      </div>
    </div>
  );
}
