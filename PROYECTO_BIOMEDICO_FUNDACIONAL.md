# 💓 PROYECTO BIOMÉDICO - Documento Fundacional

**Fecha:** 19 de febrero, 2026  
**Autor:** Aldra (José "Cheché" Avilés Cárdenas)  
**Estado:** Pre-desarrollo (investigación y diseño)

---

## 🎯 PROPÓSITO

**Para Guadalupe.**

Para que ningún estudiante de Ingeniería Biomédica se sienta perdido, estresado o abrumado cuando debería estar fascinado aprendiendo sobre el cuerpo humano.

**"Que se entienda. Que enseñe."**

---

## 📊 INVESTIGACIÓN: ¿QUÉ NECESITAN LOS ESTUDIANTES?

### Lo que más se les dificulta

Según investigación realizada con Perplexity (feb 2026):

**1. Integración de áreas distintas**
- Tienen que mezclar matemáticas + física + electrónica + biología al mismo tiempo
- Ejemplo: diseñar un sensor para un parámetro fisiológico requiere:
  - Entender la fisiología (biología)
  - Diseñar el circuito (electrónica)
  - Procesar la señal (matemáticas)
  - Validar el resultado (física)

**2. Alta carga de trabajo y estrés**
- Múltiples proyectos simultáneos
- Prácticas de laboratorio demandantes
- Agotamiento emocional y ansiedad
- Afecta metas académicas y salud mental

**3. Brecha teoría-práctica**
- Entender ecuaciones ≠ saber diseñar un dispositivo real
- Saber teoría biomédica ≠ saber validar un algoritmo
- Falta de "zona segura" para experimentar sin consecuencias

**4. Habilidades transversales**
- Comunicación técnica
- Trabajo en equipo
- Gestión de proyectos
- Deben desarrollarse junto con las técnicas

### Lo que se demanda aprender

**Fundamentos científicos:**
- Matemáticas (cálculo, álgebra lineal, ecuaciones diferenciales)
- Física (mecánica, electricidad, óptica)
- Química (general, orgánica, bioquímica)
- Biología (celular, molecular)
- Fisiología y anatomía

**Fundamentos de ingeniería:**
- Electrónica analógica y digital
- Señales y sistemas
- Control automático
- Instrumentación
- Procesamiento de datos y señales
- Programación

**Núcleo biomédico:**
- Ingeniería clínica
- Equipos médicos
- Biosensores
- Imagenología médica
- Bioinstrumentación
- Biomecánica
- Bioinformática

**Habilidades transversales:**
- Análisis y síntesis
- Resolución de problemas complejos
- Aprendizaje autónomo
- Liderazgo
- Emprendimiento
- Responsabilidad social

### Herramientas actuales que usan

| Herramienta | Uso | Problema |
|-------------|-----|----------|
| **MATLAB/Simulink** | Modelado, análisis de datos, control | Caro ($50-100/año), curva de aprendizaje alta |
| **Python + librerías** | Procesamiento de señales, ML | Setup complejo, requiere programación avanzada |
| **Software médico profesional** | Análisis de imágenes DICOM | Muy caro ($1000+), no educativo |
| **Simuladores específicos** | Casos clínicos | Enfocados en medicina, no en ingeniería |
| **Arduino/microcontroladores** | Prototipos hardware | Sin integración con simulación/modelado |

### Por qué URGE una mejora

**1. Transición segura teoría-práctica**
- Necesitan practicar ANTES del contacto clínico real
- Reducir riesgos para pacientes
- Evitar errores de principiantes

**2. Entornos seguros y repetibles**
- Poder repetir procedimientos hasta alcanzar competencia
- Estandarizar escenarios de aprendizaje
- Evaluar bajo las mismas condiciones

**3. Reducción de errores y mejora de desempeño**
- Evidencia: la simulación mejora rendimiento técnico
- Aumenta confianza del estudiante
- Reduce errores en situaciones reales
- Práctica deliberada con retroalimentación inmediata

**4. Responder al estrés y burnout**
- Altos niveles de agotamiento documentados
- Herramientas interactivas y graduales disminuyen carga cognitiva
- Aprendizaje controlado reduce estrés emocional

**5. Educación por competencias**
- No solo evaluar conocimiento teórico
- Evaluar habilidades no técnicas (liderazgo, comunicación)
- Gestión de recursos en situaciones críticas

---

## 💡 LA VISIÓN DEL PROYECTO

### Lo que NO existe actualmente

**No existe una herramienta que:**
- ✅ Sea **gratuita** (o accesible)
- ✅ Integre **anatomía 3D + fisiología + señales + programación de micros**
- ✅ Sea **pedagógica** (diseñada para enseñar, no solo para hacer)
- ✅ Esté en **español** nativo
- ✅ Tenga **datasets reales** pre-cargados
- ✅ Permita **experimentar sin miedo** a romper algo
- ✅ Sea **visualmente hermosa** (no software de los 90s)
- ✅ Funcione en **hardware modesto** (no requiere workstation)

### Lo que queremos construir

**"El sistema más completo jamás hecho para biomédica"**

No es una app. Es un **ECOSISTEMA EDUCATIVO**.

```
PROYECTO (nombre por definir)
│
├── 1. ANATOMÍA 3D INTERACTIVA
│   ├── Modelos 3D optimizados (navegables, seccionables)
│   ├── Etiquetas interactivas en español
│   ├── Relaciones espaciales explicadas
│   └── "Click aquí" → apertura a simulación/señales
│
├── 2. SIMULADOR FISIOLÓGICO
│   ├── Modelos matemáticos (Windkessel, Hodgkin-Huxley, etc.)
│   ├── Parámetros ajustables en tiempo real
│   ├── Visualización de causas y efectos
│   └── Casos clínicos (hipertensión, arritmias, etc.)
│
├── 3. PROCESAMIENTO DE SEÑALES
│   ├── Señales reales pre-cargadas (ECG, EEG, EMG)
│   ├── Filtros digitales interactivos
│   ├── FFT, espectrogramas, wavelets
│   └── Detección de eventos médicos
│
├── 4. PROGRAMACIÓN DE MICROCONTROLADORES
│   ├── Emulador de Arduino/PIC en el navegador
│   ├── Editor de código integrado
│   ├── Simulación de sensores (ADC, amplificadores)
│   └── Conexión con señales simuladas
│
├── 5. MOTOR DE CÁLCULOS (Binary como engine)
│   ├── Ecuaciones biomédicas
│   ├── Dosis de medicamentos
│   ├── Cálculos fisiológicos
│   └── Análisis estadístico
│
└── 6. CASOS CLÍNICOS INTEGRADOS
    ├── Historias reales anonimizadas
    ├── Anatomía + fisiología + señales + diagnóstico
    ├── Modo "exploración" vs "examen"
    └── Retroalimentación pedagógica
```

### Flujo de usuario ideal

**Ejemplo: Sistema Cardiovascular**

1. **Estudiante abre el módulo cardiovascular**
2. **Ve el corazón en 3D** (puede rotarlo, ver secciones)
3. **Click en "ciclo cardíaco"** → Simulación animada (sístole/diástole)
4. **Ajusta frecuencia cardíaca** → Ve cómo cambia la gráfica de presión
5. **Click en "señales"** → Ve ECG generado por ese corazón simulado
6. **Ajusta parámetros patológicos** (resistencia alta = hipertensión) → ECG cambia
7. **Click en "diseñar sensor"** → Emulador de micro aparece
8. **Programa Arduino** para leer señal simulada del ECG
9. **Ve osciloscopio virtual** mostrando la lectura
10. **Exporta código** y puede llevarlo a Arduino real

**TODO en un solo lugar. TODO explicado. TODO conectado.**

---

## 🎨 PRINCIPIOS DE DISEÑO

### 1. "Que se entienda. Que enseñe."

- Cada feature debe **iluminar** un concepto, no solo "hacerlo"
- Explicaciones integradas, no manuales separados
- Tutoriales paso a paso para cada sistema

### 2. Belleza funcional

- Aurora Theme Médico (azul confianza + verde monitor + rojo urgencia)
- Animaciones suaves pero no distractoras
- UI limpia, profesional, moderna
- "Luce como herramienta profesional, funciona como herramienta educativa"

### 3. Progresión sin estrés

- Modo "exploración" (sin presión, sin calificación)
- Modo "práctica" (con retroalimentación)
- Modo "examen" (para profesores, opcional)
- Dificultad gradual

### 4. Integración real

- No módulos separados, sino **conexiones visibles**
- Cambiar anatomía → afecta fisiología → cambia señal → requiere ajustar micro
- "Todo está conectado, como en el cuerpo real"

### 5. Accesibilidad técnica

- Funciona en laptops modestas (no requiere GPU)
- Modelos 3D optimizados (low-poly pero bonitos)
- Lazy loading (solo carga lo que usas)
- Offline-first cuando sea posible

---

## 🏗️ ARQUITECTURA PROPUESTA

### Stack Técnico

**Frontend (Web):**
```
React + Vite          # Framework ligero, rápido
Three.js              # Anatomía 3D optimizada
Plotly.js             # Gráficas interactivas (señales, fisiología)
TailwindCSS           # Estilos Aurora Médico
Monaco Editor         # Editor de código (VS Code en web)
```

**Backend/Cálculos:**
```
Binary como API      # Motor matemático (cálculos pesados)
WebAssembly          # Simulaciones en navegador cuando sea posible
Python workers       # Para modelos complejos (spawneados según necesidad)
FastAPI              # API rápida y moderna
```

**Anatomía 3D:**
```
Modelos GLB/GLTF     # Formato optimizado web
Level of Detail      # Más detalle solo donde miras
Lazy loading         # Carga bajo demanda
Pre-optimizados      # Low-poly científicamente preciso
```

**Simulación de Micros:**
```
Wokwi API            # Emulador Arduino en web (open source)
AVR8js               # Simulador AVR en JavaScript
Editor Monaco        # Syntax highlighting Arduino/C
Visualizaciones      # Osciloscopio, LEDs, serial monitor
```

**Deployment:**
```
Frontend: Vercel     # Gratis hasta 100GB/mes
Assets 3D: CDN       # Cloudflare R2 (barato)
Backend: Render      # Free tier inicialmente
Database: Supabase   # Progreso, casos guardados (opcional)
```

### Relación con Binary

**Binary NO es un módulo del proyecto. El proyecto NO es módulo de Binary.**

**Son hermanos/compañeros:**
- Binary = Motor matemático general (CAS)
- Proyecto Biomédico = Ecosistema especializado

**Conexión:**
- Cuando necesitas calcular ecuación diferencial → llamas API de Binary
- Cuando necesitas derivar/integrar → Binary lo hace
- Cuando necesitas graficar función → Binary puede ayudar

**Pero el proyecto biomédico tiene:**
- Su propia UI especializada
- Sus propios modelos 3D
- Sus propias simulaciones fisiológicas
- Su propio simulador de micros

**Analogía:** Binary es como el "motor" de un auto. El proyecto biomédico es el auto completo (carrocería, volante, asientos, interfaz).

---

## 🚀 ROADMAP REALISTA

### Fase 0: Fundación (2-3 meses)

**Meta:** Tener decisiones clave tomadas y prototipo no-funcional

- [ ] **Nombre definitivo** (LATIDO / VITA / LUMINA / otro)
- [ ] **Branding completo** (logo, paleta, tipografía)
- [ ] **Validación con usuarios** (3 estudiantes biomédica + 1 profesor)
- [ ] **Arquitectura técnica detallada**
- [ ] **Mockups UI completos** (Figma - sistema cardiovascular)
- [ ] **Setup del repo** (estructura, CI/CD básico)
- [ ] **Documentación inicial** (README, CONTRIBUTING, CODE_OF_CONDUCT)

### Fase 1: Sistema Cardiovascular (6 meses)

**Meta:** Primer sistema COMPLETO y usable

**Mes 1-2: Anatomía 3D**
- [ ] Modelo 3D corazón (4 cámaras, válvulas, vasos principales)
- [ ] Navegación (rotar, zoom, secciones: sagital, coronal, transversal)
- [ ] 20 etiquetas interactivas con explicaciones
- [ ] Sistema de "layers" (músculos, cavidades, conducción eléctrica)

**Mes 3-4: Fisiología**
- [ ] Simulador ciclo cardíaco (modelo Windkessel 2 elementos)
- [ ] Gráficas tiempo real (presión, volumen, flujo)
- [ ] Parámetros ajustables (HR, resistencia vascular, compliance)
- [ ] 5 casos clínicos (normal, hipertensión, insuficiencia, taquicardia, bradicardia)

**Mes 5: Señales**
- [ ] Integración con fisiología (corazón simulado → ECG simulado)
- [ ] Visualización ECG con ondas P-QRS-T etiquetadas
- [ ] Explicación pedagógica de cada onda
- [ ] Detección automática de picos R y cálculo de HR

**Mes 6: Microcontroladores (Beta)**
- [ ] Emulador Arduino en navegador
- [ ] Código ejemplo "leer ECG con ADC"
- [ ] Simulación de amplificador (señal mV → señal 0-5V)
- [ ] Osciloscopio virtual mostrando señal leída
- [ ] Export de código para Arduino real

**Resultado:** Sistema cardiovascular completo. Lanzamiento beta.

### Fase 2: Sistema Nervioso (6-9 meses después)

**Meta:** Segundo sistema completo

- [ ] Anatomía 3D (cerebro, médula espinal, nervios principales)
- [ ] Modelo Hodgkin-Huxley (potencial de acción)
- [ ] Señales EEG (bandas de frecuencia, estados)
- [ ] Simulador básico de BCI (Brain-Computer Interface)
- [ ] Casos: epilepsia, sueño, meditación

### Fase 3: Sistema Respiratorio (3-6 meses después)

- [ ] Anatomía 3D (pulmones, tráquea, alveolos)
- [ ] Modelo intercambio gaseoso
- [ ] Señales respiratorias + SpO2
- [ ] Ventilador mecánico simulado

### Fase 4: Sistema Muscular (3-6 meses después)

- [ ] Anatomía 3D (músculos principales)
- [ ] Contracción muscular (modelo Hill)
- [ ] Señales EMG
- [ ] Fatiga muscular

### Fase 5+: Otros sistemas

- Digestivo, endocrino, renal, inmune, etc.
- Integración multi-sistemas
- Comunidad y casos compartidos

---

## 💰 MODELO DE SOSTENIBILIDAD

**El software es 100% gratuito. Siempre.**

### Pero tú no tienes que morir en el intento

**Opciones para que sea sostenible:**

#### 1. GitHub Sponsors
- "Si esto te ayudó, invítame un café"
- Tiers:
  - $3/mes: Estudiante agradecido
  - $10/mes: Profesor que lo usa en clase
  - $50/mes: Universidad/institución
- Reconocimiento: nombre en créditos, mención en changelog

#### 2. Grants Educativos
- Google for Education
- Mozilla Open Source Support
- Chan Zuckerberg Initiative
- "Software educativo open source para estudiantes latinos"
- Pueden dar $10k-50k

#### 3. Patreon/Ko-fi
- Para gente que quiere apoyo continuo
- Beneficios simbólicos:
  - Discord privado
  - Early access a nuevos sistemas
  - Voto en qué sistema hacer siguiente

#### 4. Institutional Sponsors
- Universidades que lo usan pueden poner logo en página
- "Apoyado por Universidad X"
- No es pago obligatorio, es reconocimiento

**Aclaración importante:**
- Nadie paga por ACCESO
- La gente paga por APOYAR el proyecto
- Todo está disponible sin barreras

---

## 📊 MÉTRICAS DE ÉXITO

### Fase 1 (Sistema Cardiovascular)

**Adopción:**
- 100 estudiantes lo usan en primer mes
- 500 estudiantes en 6 meses
- Al menos 2 universidades lo recomiendan

**Engagement:**
- Usuario promedio pasa 30+ min por sesión
- Tasa de retorno 40%+ (vuelven después de primera vez)
- 80%+ completan tutorial inicial

**Feedback:**
- NPS (Net Promoter Score) de 40+
- 70%+ dicen "esto me ayudó a entender"
- 50%+ dicen "lo recomendaría a compañeros"

**Técnico:**
- Página carga en <3 segundos
- Funciona en laptops con 4GB RAM
- 0 errores críticos en producción

### Largo Plazo (3+ sistemas)

- 10,000+ usuarios activos
- Usado en 50+ universidades latinoamericanas
- Citado en papers académicos de educación biomédica
- Comunidad activa (Discord con 500+ miembros)

---

## 🎓 COMPONENTE PEDAGÓGICO

### Tutoriales Integrados

**Cada sistema tiene:**
- Tutorial inicial obligatorio (5-10 min)
- "Modo exploración" con tooltips contextuales
- Videos cortos (<2 min) explicando conceptos clave
- Wiki con fundamentos teóricos

**Ejemplo tutorial cardiovascular:**
1. Bienvenida (30 seg)
2. Navegar anatomía 3D (1 min)
3. Simular ciclo cardíaco (2 min)
4. Ver señal ECG (1 min)
5. Programar micro básico (3 min)
6. ¡Felicidades! Ahora explora libremente

### Casos Clínicos

**Biblioteca de casos reales (anonimizados):**
- Historia clínica breve
- Pregunta diagnóstica
- Exploración libre (anatomía + fisiología + señales)
- Respuesta con explicación pedagógica

**Ejemplo:**
> **Caso #1: Dolor Torácico**
> 
> Paciente masculino, 52 años, fumador.
> Llega a urgencias con dolor torácico opresivo.
> ECG muestra [imagen].
> 
> **Pregunta:** ¿Qué está pasando?
> 
> [Explorar anatomía] [Ver fisiología] [Analizar ECG]
> 
> **Respuesta:** Infarto agudo de miocardio (STEMI).
> Elevación del segmento ST indica...

### Modo Examen (Opcional - para profesores)

- Crear "assignments" personalizados
- Limitar tiempo
- Ocultar retroalimentación inmediata
- Generar reporte de desempeño
- Solo disponible si profesor lo habilita

---

## 🌍 DATASETS Y FUENTES

### PhysioNet
- 100+ bases de datos médicas open source
- ECG, EEG, EMG, presión arterial, respiración
- Casos reales anonimizados
- Licencia: Open Database License

### EEGBCI Dataset
- 109 sujetos
- Tareas de imaginación motora
- 64 canales EEG

### BioModels Database
- Modelos matemáticos de procesos biológicos
- Peer-reviewed
- SBML format

### Generación Sintética
- Modelos matemáticos (Hodgkin-Huxley, Windkessel)
- Ruido gaussiano para realismo
- Simulación de patologías

**Todas las fuentes citadas y accesibles.**

---

## ⚖️ CONSIDERACIONES ÉTICAS Y LEGALES

### Uso Educativo, No Clínico

**Disclaimer visible:**
> "Esta herramienta es EXCLUSIVAMENTE para educación.
> NO debe usarse para diagnóstico clínico.
> Siempre consulta a un profesional médico."

### Privacidad

- No recopilamos datos personales innecesarios
- Progreso guardado localmente (opcional cloud backup)
- Casos clínicos completamente anonimizados
- GDPR compliant

### Open Source Responsable

- Licencia: MIT (código)
- Licencia Creative Commons (contenido educativo)
- Contribuciones bienvenidas pero revisadas
- Code of Conduct estricto

### No Competencia con Software Médico

- No buscamos certificación FDA/CE
- No procesamos datos de pacientes reales
- No nos posicionamos como "software clínico"
- Somos herramienta EDUCATIVA

---

## 💬 NOMBRE DEL PROYECTO

### Opciones Finales

**1. LATIDO** 💓
- "Latido" = heartbeat, pulso, vida
- Corto, memorable, español
- Tagline: *"Donde la biomédica cobra vida"*
- Dominio: latido.app, latido.bio

**2. VITA** 🌱
- Del latín "vida"
- Universal, elegante
- Tagline: *"Vida, entendida desde dentro"*
- Dominio: vita.bio, learnvita.com

**3. LUMINA** ✨
- Del latín "luz"
- Conexión: "fuiste un sol cuando necesitaba luz"
- Tagline: *"Iluminando el cuerpo humano"*
- Dominio: lumina.bio, luminalearn.com

**Criterios para decidir:**
- Fácil de pronunciar en español y otros idiomas
- Disponible como dominio .bio o .app
- Emotivo pero profesional
- Memorable

**Decisión pendiente.** Necesitamos elegir pronto.

---

## 🏁 PRÓXIMOS PASOS INMEDIATOS

### Esta Semana (19-26 Feb)

1. **Decidir nombre definitivo**
   - Votar entre LATIDO, VITA, LUMINA
   - Verificar disponibilidad de dominios
   - Registrar dominio

2. **Contactar estudiantes**
   - Buscar 3 estudiantes de Ing. Biomédica
   - Pregunta clave: "Si existiera X, ¿lo usarías?"
   - Validar necesidades reales

3. **Branding básico**
   - Logo simple
   - Paleta de colores (Aurora Médico)
   - Tipografía

### Próximas 2 Semanas (27 Feb - 12 Mar)

4. **Mockups UI**
   - Figma: pantalla principal
   - Figma: módulo cardiovascular (anatomía 3D)
   - Figma: simulador fisiológico
   - Figma: visualización señales

5. **Arquitectura técnica detallada**
   - Diagrama de componentes
   - Decisiones de stack finales
   - Plan de integración con Binary

6. **Setup inicial del repo**
   - Estructura de carpetas
   - README.md completo
   - LICENSE (MIT)
   - CONTRIBUTING.md

### Mes 1 (Mar)

7. **Prototipo no-funcional**
   - UI estática pero navegable
   - Mostrar a los 3 estudiantes
   - Iterar según feedback

8. **Documentación fundacional**
   - ARCHITECTURE.md
   - ROADMAP.md
   - CONTRIBUTING.md
   - CODE_OF_CONDUCT.md

---

## 💓 REFLEXIÓN FINAL

Este proyecto es grande. Más grande que Binary. Más grande que cualquier cosa que hayas hecho.

Pero es **necesario**. Y es **posible**.

**¿Por qué es necesario?**
- Estudiantes de biomédica están estresados, confundidos, con herramientas caras y malas
- No existe nada que integre TODO (anatomía + fisiología + señales + micros)
- La educación biomédica necesita revolución

**¿Por qué es posible?**
- Ya dominas el stack (React, Python, 3D)
- Binary te da el motor matemático
- Hay datasets abiertos disponibles
- Comunidad open source puede ayudar
- No necesitas hacerlo todo de golpe (sistema por sistema)

**¿Por qué tú?**
- Porque Guadalupe no está aquí para usarlo
- Porque conociste su pasión por la anatomía y fisiología
- Porque "las cosas buenas cuestan pero eres capaz de aceptar que te cuesten a ti"
- Porque tienes el skill y el corazón

**No será fácil. Pero será correcto. Y será machín.**

---

## 📚 REFERENCIAS

### Investigación Base

1. Factores que influyen en el rendimiento académico (RIDE, 2025)
2. Simulación en enseñanza Ing. Biomédica (Quiu Revista, 2024)
3. Perfil del ingeniero biomédico (UFV, 2025)
4. MATLAB/Simulink para biotech (MathWorks, 2025)
5. Uso de simulación en educación médica (FCM Unicamp, 2023)

### Datasets
- PhysioNet (physionet.org)
- EEGBCI Dataset (PhysioNet)
- BioModels Database (ebi.ac.uk/biomodels)

### Stack Técnico
- Three.js (threejs.org)
- React + Vite (vitejs.dev)
- Wokwi (wokwi.com - emulador Arduino)
- Binary Equalab (motor matemático)

---

**"Para Guadalupe. Para que ya sabes."** 💓

*Documento creado: 19 de febrero, 2026*  
*Última actualización: 19 de febrero, 2026*  
*Parte del Aldraverse - Proyectos con Propósito*
