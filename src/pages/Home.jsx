import ButtonGradient from '../components/ButtonGradient';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const materias = [
    "Contabilidad Financiera",
    "Análisis Económico-Financiero",
    "Economía",
    "Marketing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
          SuperQuiz
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Aprende mediante cuestionarios interactivos. Elige una materia para comenzar.
        </p>
        <div className="space-y-4">
          {materias.map((materia, i) => (
            <ButtonGradient
              key={i}
              onClick={() => navigate(`/materia/${i}`)}
              className="w-full text-xl py-4"
            >
              {materia}
            </ButtonGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;