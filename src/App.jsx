import { Navigate, Route, Routes } from 'react-router-dom'
import Catalogo from './pages/Catalogo.jsx'
import DetallePlantilla from './pages/DetallePlantilla.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/plantillas" replace />} />
      <Route path="/plantillas" element={<Catalogo />} />
      <Route path="/plantillas/:id" element={<DetallePlantilla />} />
      <Route path="*" element={<Navigate to="/plantillas" replace />} />
    </Routes>
  )
}
