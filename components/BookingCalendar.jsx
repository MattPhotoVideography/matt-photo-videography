"use client";

export default function BookingCalendar() {
  // Put your live link here (or read from process.env.NEXT_PUBLIC_BOOKING_LINK)
  const calUrl = "https://cal.com/mattphotovideo/photoshoot-session?embed=1";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-6">
      <h2 className="text-xl font-semibold mb-2">Self-book a session</h2>
      <p className="text-gray-700 mb-4">
        Pick a time that works for you—this is my live calendar.
      </p>

      <div className="relative w-full" style={{ height: 720 }}>
        <iframe
          src={calUrl}
          title="Book a photoshoot session"
          className="absolute inset-0 h-full w-full rounded-xl"
          frameBorder="0"
          allow="clipboard-read; clipboard-write; microphone; camera"
        />
      </div>

      {/* Accessibility + SEO fallback */}
      <p className="text-sm text-gray-600 mt-4">
        Prefer a full page?{" "}
        <a className="underline" href="https://cal.com/mattphotovideo/photoshoot-session" target="_blank" rel="noreferrer">
          Open the booking calendar
        </a>.
      </p>
    </div>
  );
}
