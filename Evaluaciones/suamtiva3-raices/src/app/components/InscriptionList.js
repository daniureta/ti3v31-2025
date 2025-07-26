"use client";
import React, { useEffect, useState } from "react";
import InscriptionCard from "./InscriptionCard";

export default function InscriptionList() {
  const [inscripciones, setInscripciones] = useState([]);
  const [talleres, setTalleres] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resInsc = await fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/inscripciones.json");
        const resTall = await fetch("https://ejemplo-firebase-657d0-default-rtdb.firebaseio.com/talleres.json");

        const dataInsc = await resInsc.json();
        const dataTall = await resTall.json();

        const resultado = Object.entries(dataInsc || {})
          .filter(([_, insc]) => insc && insc.taller)
          .map(([id, insc]) => {
            const taller = dataTall[insc.taller] || {};

            return {
              id,
              nombre: `${insc.nombres || ""} ${insc.apellidos || ""}`.trim() || "Sin nombre",
              correo: insc.correo || "Sin correo",
              taller: {
                nombre: taller.nombre || "Desconocido",
                descripcion: taller.descripcion || "Sin descripción",
                profesor: taller.profesor || "Sin profesor",
              },
            };
          });

        setInscripciones(resultado);
      } catch (e) {
        console.error("Error al cargar datos", e);
        setInscripciones([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (inscripciones.length === 0) return <p className="text-center mt-10">No hay inscripciones disponibles.</p>;

  return (
    <div className="grid gap-4 p-4">
      {inscripciones.map((i) => (
        <InscriptionCard
          key={i.id}
          nombre={i.nombre}
          correo={i.correo}
          taller={i.taller.nombre}
          descripcion={i.taller.descripcion}
          profesor={i.taller.profesor}
        />
      ))}
    </div>
  );
}


