"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BellRing,
  Clock3,
  Gauge,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const hourlyForecast = [
  { time: "09:00", wait: 8 },
  { time: "10:00", wait: 17 },
  { time: "11:00", wait: 32 },
  { time: "12:00", wait: 41 },
  { time: "13:00", wait: 12 },
];

const queueSummary = [
  { label: "Active Queues", value: "6" },
  { label: "People Waiting", value: "87" },
  { label: "Avg Wait", value: "18 min" },
  { label: "Longest Queue", value: "31 min" },
];

export default function QueueDashboard() {
  const [counterOffline, setCounterOffline] = useState(false);

  const queue = useMemo(() => {
    const peopleAhead = 12;
    const avgServiceTime = 4;
    const activeCounters = counterOffline ? 1 : 2;
    const serviceRate = (peopleAhead * avgServiceTime) / Math.max(activeCounters, 1);
    const estimatedWait = Math.round(serviceRate);
    const confidence = 91;

    return {
      peopleAhead,
      avgServiceTime,
      activeCounters,
      estimatedWait,
      confidence,
      expectedService: "11:53 AM",
      queueHealth: 82,
      bestVisit: "2:30 PM – 3:00 PM",
    };
  }, [counterOffline]);

  return (
    <main className="min-h-screen px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
              <Gauge className="h-3.5 w-3.5" />
              CloudWait AI
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Queue intelligence for fast decisions
            </h1>
          </div>

          <button
            onClick={() => setCounterOffline((state) => !state)}
            className="rounded-xl border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-500/20"
          >
            {counterOffline ? "Restore counter" : "Simulate counter outage"}
          </button>
        </header>

        <section className="grid-pattern card-surface overflow-hidden rounded-3xl border border-slate-700/70 p-6 shadow-glow md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Current Queue
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-4">
                <MetricCard icon={<Users className="h-5 w-5" />} label="People Ahead" value={`${queue.peopleAhead}`} />
                <MetricCard icon={<Activity className="h-5 w-5" />} label="Active Counters" value={`${queue.activeCounters}`} />
                <MetricCard icon={<Clock3 className="h-5 w-5" />} label="Avg Service Tim" value={`${queue.avgServiceTime} min`} />
                <MetricCard icon={<BellRing className="h-5 w-5" />} label="Current Time" value="11:30 AM" />
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI Prediction</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                      Estimated Wait <span className="text-sky-400">{queue.estimatedWait} min</span>
                    </h2>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-right text-sm text-emerald-300">
                    <div className="font-semibold">Confidence</div>
                    <div>{queue.confidence}%</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
                  <span>Expected service</span>
                  <span className="font-medium text-slate-100">{queue.expectedService}</span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${queue.confidence}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Queue Health</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">{queue.queueHealth}%</h3>
                </div>
                <ShieldCheck className="h-10 w-10 text-emerald-400" />
              </div>

              <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-yellow-400"
                  style={{ width: `${queue.queueHealth}%` }}
                />
              </div>

              <p className="mb-6 text-sm text-slate-300">Status: GOOD</p>

              <div className="space-y-3">
                <p className="flex items-center justify-between text-sm text-slate-300">
                  <span>Best time to visit</span>
                  <span className="font-medium text-sky-300">{queue.bestVisit}</span>
                </p>
                <p className="flex items-center justify-between text-sm text-slate-300">
                  <span>Counter status</span>
                  <span className={`font-medium ${counterOffline ? "text-amber-300" : "text-emerald-300"}`}>
                    {counterOffline ? "Counter 2 Offline" : "All counters active"}
                  </span>
                </p>
                <p className="flex items-center justify-between text-sm text-slate-300">
                  <span>Queue alert</span>
                  <span className="font-medium text-rose-300">{counterOffline ? "+18 min delay" : "Stable flow"}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-surface rounded-3xl border border-slate-700 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Peak-Time Prediction</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Live queue trend</h3>
              </div>
              <TrendingUp className="h-8 w-8 text-sky-400" />
            </div>

            <div className="flex h-52 items-end gap-4">
              {hourlyForecast.map((item) => (
                <div key={item.time} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-40 w-full items-end justify-center rounded-t-2xl bg-slate-800 p-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.max(item.wait * 4.5, 18)}px` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={`${item.wait >= 30 ? "bg-rose-400" : item.wait >= 15 ? "bg-amber-400" : "bg-emerald-400"} w-full rounded-t-xl`} 
                    />
                  </div>
                  <div className="text-center text-xs text-slate-400">
                    <div>{item.time}</div>
                    <div className="font-semibold text-slate-200">{item.wait} min</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-3xl border border-slate-700 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Admin Dashboard</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Queue summary</h3>
              </div>
            </div>

            <div className="space-y-4">
              {queueSummary.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-lg font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-sky-500/10 p-4 text-sky-100">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                <ArrowRight className="h-4 w-4" />
                Recommendation
              </div>
              <p className="mt-2 text-sm text-sky-100/90">
                Open a second counter during 12:00–13:00 to reduce wait times by up to 19 minutes.
              </p>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {counterOffline && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-amber-100"
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                <BellRing className="h-4 w-4" />
                Live update
              </div>
              <p className="mt-2 text-lg font-medium">
                Counter 2 offline. Previous wait: 23 minutes. New estimate: <span className="font-bold">41 minutes</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function MetricCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">{icon}</div>
      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
