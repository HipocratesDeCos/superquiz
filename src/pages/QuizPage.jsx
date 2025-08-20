import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/codigo.json';
import QuestionBlock from '../components/QuestionBlock';
import ResultSummary from '../components/ResultSummary';
import ButtonGradient from '../components/ButtonGradient';

const QuizPage = () => {
  const { materiaId, temaId } = useParams();
  const navigate = useNavigate();
  const tema = data.materias[materiaId]?.temas[temaId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleValidate = (selected) => {
    const question = tema.preguntas[currentIndex];
    const correctSet = new Set(question.correctas);
    const isCorrect = selected.length === question.correctas.length &&
      selected.every(idx => correctSet.has(idx));

    const correctAnswers = question.opciones.map((_, i) => correctSet.has(i));
    const result = {
      selected,
      correctAnswers,
      isCorrect
    };

    setResults(prev => [...prev, result]);
    setAnswers(prev => [...prev, selected]);
    if (currentIndex < tema.preguntas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const correctas = results.filter(r => r.isCorrect).length;
  const incorrectas = results.length - correctas;

  if (!tema) return <div>Cargando tema...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Volver
        </button>

        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{tema.nombre}</h2>
          <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: tema.introduccion }} />
        </div>

        {!finished ? (
          <QuestionBlock
            question={tema.preguntas[currentIndex]}
            onValidate={handleValidate}
            hasAnswered={results[currentIndex] !== undefined}
            result={results[currentIndex] || { correctAnswers: [], selected: [] }}
          />
        ) : (
          <>
            <ResultSummary correctas={correctas} incorrectas={incorrectas} total={results.length} />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonGradient
                onClick={() => navigate(`/materia/${materiaId}`)}
                className="flex-1"
              >
                Volver a temas
              </ButtonGradient>
              <ButtonGradient
                onClick={() => navigate('/')}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
              >
                Inicio
              </ButtonGradient>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;