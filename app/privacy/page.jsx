import Section from "@/components/Section";

export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <Section title="Privacy Policy">
      <div className="prose-custom text-sm">
        <p>We collect basic contact information you submit (name, email, phone, message) to respond to inquiries. We do not sell your data. For questions, contact us via the email on this website.</p>
      </div>
    </Section>
  );
}
