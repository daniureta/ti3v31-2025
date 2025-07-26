import InscriptionList from "./components/InscriptionList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Inscripciones</h1>
      <InscriptionList />
    </main>
  );
}


