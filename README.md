# SuperQuiz

Aplicación web interactiva para formación mediante quizzes. Ideal para docentes que quieren enseñar Contabilidad, Análisis, Economía y Marketing.

## 🚀 Características
- Navegación jerárquica: Materia → Tema → Pregunta
- Validación por pregunta (verde/rojo)
- Ventanas "Saber más" con HTML y fórmulas
- Responsive y listo para GitHub Pages
- Basado en JSON (fácil de actualizar)

## 📥 Cómo usar

1. Clona el repositorio
2. `npm install`
3. `npm run dev` (modo desarrollo)
4. `npm run build` (para deploy)

Edita `src/data/codigo.json` para agregar tus propios contenidos.

## 🌐 Deploy en GitHub Pages

1. Cambia `base: './'` en `vite.config.js`
2. Ejecuta `npm run build`
3. Sube la carpeta `dist` a tu repositorio
4. Activa GitHub Pages en Settings → Pages

---

¡Listo! Tu aplicación está en línea.