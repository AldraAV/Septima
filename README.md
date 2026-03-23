# Séptima — Simulador Biomédico Profesional

> **Educación científica sin compromisos.** Modela sistemas fisiológicos reales con ecuaciones que funcionan. Potenciado por el motor C++ de Binary EquaLab.

---

## 🎯 ¿Qué es Séptima?

Plataforma de simulación interactiva para estudiantes de Ingeniería Biomédica. Combina:

- **Modelos validados clínicamente** (cardiovascular, glucosa-insulina, farmacocinética, neuronal)
- **Interfaz educativa** con controles intuitivos + gráficas en tiempo real
- **Motor de cálculo** potente (equacore C++) para precisión numérica
- **Laboratorio seguro** para experimentar sin miedo a romper nada

**El objetivo:** Que entiendas el cuerpo humano a través de las ecuaciones que lo gobiernan.

---

## 📦 Características Actuales

| Sistema | Estado | Detalles |
|---------|--------|----------|
| **Cardiovascular** | ✅ | Anatomía 3D + Windkessel + ECG monitor |
| **Glucosa-Insulina** | ✅ | Modelo Bergman (IVGTT, postprandial, ejercicio) |
| **Neuronal** | ✅ | Hodgkin-Huxley (canales iónicos, potencial de acción) |
| **Farmacocinética** | ✅ | PK 1-cmt (absorción, distribución, eliminación) |
| **PTI** | ✅ | Dinámica de plaquetas (anticuerpos + tratamientos) |
| **Emulador uC** | ✅ | Programación Arduino + simulación de sensores |

---

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
# o con pnpm (recomendado)
pnpm install
```

### Desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173)

### Build
```bash
npm run build
```

---

## 🏗️ Stack Técnico

- **Frontend:** React 18 + Vite + Tailwind CSS
- **UI:** Radix UI + Material-UI icons
- **Gráficas:** Recharts
- **Estado:** TanStack Query + React Hook Form
- **Backend:** FastAPI (Binary EquaLab) con motor C++ equacore

---

## 📚 Documentación

- [SEPTIMA.md](./SEPTIMA.md) — Visión del proyecto y arquitectura
- [guidelines/](./guidelines/) — Guías de desarrollo

---

## 🔧 Estructura del Proyecto

```
src/
├── app/              # Páginas y routing
├── components/       # Componentes reutilizables
├── hooks/           # Custom hooks
├── services/        # API calls + integración Binary
├── utils/           # Utilidades
└── styles/          # CSS global + variables
```

---

## 💡 Filosofía

Educación biomédica significa:
- ✋ **Manos en la masa** — no solo teoría
- 🔬 **Realismo** — modelos que médicos usan
- 🛡️ **Seguridad** — experimenta sin consecuencias
- 🌍 **Acceso** — gratis, en español, multiplataforma

---

## 📄 Licencia

MIT © Aldra

---

**¿Preguntas?** Abre un issue o contacta al equipo.
  