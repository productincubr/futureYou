// src/components/sections/HowItWorks.tsx

import {
  Upload,
  Target,
  Sparkles,
  ImageUp,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1">
            <span className="text-indigo-400 text-xs">✦</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              The Process
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center leading-tight mb-16">
          Your Transformation Starts In
          <br />
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            3 Simple Steps.
          </span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* STEP 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">

            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">
                Step 1
              </span>

              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-blue-100">
                <Upload
                  size={18}
                  strokeWidth={2}
                  className="text-violet-500"
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">
                Upload your image
              </h3>

              <p className="text-sm text-gray-400">
                A single clear photo is all we need.
              </p>
            </div>

            {/* Upload Mockup */}
            <div className="rounded-2xl border-2 border-dashed border-indigo-100 flex flex-col items-center justify-center py-8 gap-2 mt-2 bg-gradient-to-br from-violet-50 to-blue-50">

              <ImageUp
                size={30}
                strokeWidth={1.8}
                className="text-violet-400"
              />

              <p className="text-sm font-medium text-gray-500">
                Drop your photo
              </p>

              <p className="text-xs text-gray-300">
                PNG, JPG • Encrypted
              </p>
            </div>

            {/* Progress */}
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-auto">
              <div
                className="h-full w-1/3 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg,#a855f7,#6366f1)",
                }}
              />
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">

            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">
                Step 2
              </span>

              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-blue-100">
                <Target
                  size={18}
                  strokeWidth={2}
                  className="text-violet-500"
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">
                Define goals & habits
              </h3>

              <p className="text-sm text-gray-400">
                Tell us who you're becoming.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 text-xs">
                  Target weight
                </span>

                <span
                  className="text-xs font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg,#a855f7,#6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  72kg
                </span>
              </div>

              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full w-3/4 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#a855f7,#6366f1)",
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-gray-400">
                  Workouts / week
                </span>

                <span className="font-semibold text-gray-700">
                  5x
                </span>
              </div>

              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <div
                    key={d}
                    className="flex-1 h-7 rounded-lg"
                    style={{
                      background:
                        d <= 5
                          ? "linear-gradient(135deg,#a855f7,#6366f1)"
                          : "#f3f4f6",
                    }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400">
                  Sleep 8h
                </span>

                <div
                  className="w-10 h-5 rounded-full flex items-center px-0.5"
                  style={{
                    background:
                      "linear-gradient(90deg,#a855f7,#6366f1)",
                  }}
                >
                  <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                </div>
              </div>

            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col gap-4">

            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-gray-300 font-medium">
                Step 3
              </span>

              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-100 to-blue-100">
                <Sparkles
                  size={18}
                  strokeWidth={2}
                  className="text-violet-500"
                />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-1">
                AI generates your future self
              </h3>

              <p className="text-sm text-gray-400">
                A photoreal preview, ready in 60 seconds.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden w-full h-[160px]">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                alt="AI generated future self"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-auto">
              {[
                { val: "-12kg", lbl: "weight" },
                { val: "+18%", lbl: "muscle" },
                { val: "9.4", lbl: "confidence" },
              ].map((s) => (
                <div key={s.lbl} className="text-center">
                  <p
                    className="text-sm font-bold"
                    style={{
                      background:
                        "linear-gradient(135deg,#a855f7,#6366f1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.val}
                  </p>

                  <p className="text-xs text-gray-400">
                    {s.lbl}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}