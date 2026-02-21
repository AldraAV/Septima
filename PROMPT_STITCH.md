¡Crearemos un prototipo interactivo para "Séptima", una plataforma educativa de simulación biomédica!
Este prototipo debe ser **moderno, interactivo y con estética "Aurora Médico"**.

---

### **Estilo Visual (Aurora Médico)**

*   **Tema:** Glassmorphism limpio y futurista (inspirado en interfaces médicas de alta tecnología).
*   **Colores:**
    *   **Fondo:** Gradientes sutiles de Azul Oscuro (#0F172A) a Negro Profundo (#020617).
    *   **Acentos (Vitales):** Rojo Cereza Neón (#FF2E63) para alertas/corazón, Verde Aurora (#00EAD3) para señales estables, Azul Clínico (#252A34) para paneles.
    *   **Texto:** Blanco Lofi (#F9FAFB) para legibilidad máxima, Gris Humo (#94A3B8) para metadatos.
*   **Fuentes:** `Inter` (UI limpia) y `JetBrains Mono` (Datos biomédicos/Código).
*   **Componentes:** Tarjetas translúcidas con bordes sutiles, botones con glow suave, gráficas de líneas finas y brillantes.

---

### **Funcionalidades Clave (Interactivas)**

El prototipo debe tener una barra lateral de navegación y mostrar las siguientes secciones interactivas:

#### 1. **Dashboard Principal**
*   **Resumen del Estudiante:** "Bienvenido, Simulación Activa: Cardiovascular".
*   **Progreso:** Una barra de progreso circular o lineal mostrando el avance en el módulo actual.
*   **Accesos Rápidos:** Tarjetas grandes para "Anatomía 3D", "Fisiología", "Señales ECG".

#### 2. **Módulo Cardiovascular (Simulador)**
Debe integrar 3 vistas en una sola pantalla o pestañas:

*   **A. Anatomía 3D Interactiva:**
    *   Placeholder para un modelo 3D de corazón flotante en el centro.
    *   Controles flotantes: "Rotar", "Zoom", "Capas" (Músculos, Arterias, Nervios).
    *   Etiquetas interactivas que al hacer hover muestren nombres (e.g., "Ventrículo Izquierdo").

*   **B. Panel de Control Fisiológico (Windkessel):**
    *   **Sliders Deslizantes:** Para ajustar "Frecuencia Cardíaca (BPM)", "Resistencia Vascular", "Compliance Arterial".
    *   **Feedback Inmediato:** Al mover un slider, los valores numéricos deben cambiar.
    *   **Botones de Acción:** "Iniciar Simulación", "Pausar", "Reset".
    *   **Escenarios Clínicos:** Botones rápidos para cargar presets: "Normal", "Hipertensión", "Insuficiencia Cardíaca".

*   **C. Monitor de Signos Vitales (ECG):**
    *   Una gráfica de línea continua (tipo osciloscopio) simulando un ECG en tiempo real (línea verde sobre fondo oscuro con cuadrícula).
    *   Display digital de valores: "HR: 72 bpm", "PA: 120/80 mmHg".
    *   Interruptores (Toggles) para activar/desactivar filtros: "Filtro 60Hz", "Baseline Wander".

#### 3. **Funciones Especiales (NUEVAS)**
*   **Modo Laboratorio Seguro:** Un botón/switch prominente en la interfaz que active un borde verde brillante alrededor de la pantalla, indicando que se pueden tocar todos los parámetros sin miedo a romper nada. Botón de pánico "Restaurar Todo".
*   **Recorrido Guiado:** Un sistema de "Tooltips" o tarjetas flotantes paso-a-paso que guíe al usuario: "1. Explora el corazón 3D", "2. Ajusta la resistencia", "3. Observa el cambio en la presión".

---

### **Instrucciones para la Generación**

*   Genera una vista de **Pantalla Completa** con Sidebar a la izquierda y el contenido principal a la derecha.
*   Usa **Tailwind CSS** para el estilizado rápido.
*   Para los gráficos, usa `Chart.js` o `Recharts` simulados.
*   Para el 3D, puedes usar un placeholder visual atractivo o `Three.js` básico (un cubo rotando o esfera para representar el corazón).
*   Asegúrate de que los botones tengan estados `:hover` y `:active` visibles (glow/cambio de color).
*   **Interactividad:** Que los sliders se muevan, los botones cambien de estado y las pestañas funcionen.
