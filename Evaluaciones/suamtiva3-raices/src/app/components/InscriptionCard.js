"use client";

export default function InscriptionCard({ nombre, correo, taller, descripcion, profesor }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold text-purple-800">{nombre}</h2>
      <p className="text-gray-700 text-sm">📧 {correo}</p>
      <p className="text-gray-700 text-sm mt-2"><strong>Taller:</strong> {taller}</p>
      <p className="text-gray-600 italic text-sm">{descripcion}</p>
      <p className="text-gray-700 text-sm"><strong>Profesor:</strong> {profesor}</p>
    </div>
  );
}


