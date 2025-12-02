// no "use client"
import ContactForm from "@/components/ContactForm";
import BookingCalendar from "@/components/BookingCalendar";

export const metadata = {
  title: "Get in touch | Matt Photo Videography",
  description: "Request an inquiry or self-book a photography session in Edmonton.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-4xl font-semibold tracking-tight mb-6">Get in touch</h1>
        <p className="text-gray-700 mb-8">Booking is by appointment only.</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactForm />
          <BookingCalendar />
        </div>
      </div>
    </section>
  );
}
