import ButtonGradient from '../components/ButtonGradient';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/codigo.json';

const SubjectList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [materia, setMateria] = useState(null);

  useEffect(() => {
    const mat = data.materias[parseInt(id)];
    if (mat) setMateria(mat);
  }, [id]);

  if (!materia) return <div>Cargando...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Volver al inicio
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{materia.nombre}</h1>
        <div className="grid gap-4">
          {materia.temas.map((tema, i) => (
            <ButtonGradient
              key={i}
              onClick={() => navigate(`/quiz/${id}/${i}`)}
              className="text-left text-lg py-4"
            >
              {tema.nombre}
            </ButtonGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectList;