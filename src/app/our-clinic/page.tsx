import ClinicsList from "./ClinicsList";

export const metadata = {
  title: "Find Hearing Aid Clinics Near You | Insono Hearing Solutions",
  description:
    "Locate Insono Hearing Aid Clinics across Delhi, Noida, Bihar, Jharkhand, Punjab & more. Expert audiologists, free hearing tests, and advanced hearing aids. Open daily till 7 PM.",
};

export default function ClinicPage() {
  return (
    <main className="bg-gradient-to-b from-[#eaf5ff] to-white text-gray-900">
      <ClinicsList />
    </main>
  );
}
