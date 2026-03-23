import React from 'react';

/**
 * Interfaz estricta para asegurar que todos los módulos biomédicos (PTI, Cardiovascular, etc.)
 * sean conectables de manera unánime con Séptima Digital Twin.
 */
export interface BiomedicalModule {
  // Metadata Básica
  id: string;
  name: string;
  category: "cardiovascular" | "metabolic" | "neural" | "hematologic" | "renal" | "respiratory";
  difficulty: "basic" | "intermediate" | "advanced";
  estimatedTime: number; // en minutos
  
  // Componentes de Interfaz Inyectables
  Simulator: React.FC<any>;
  Anatomy3D?: React.FC<any>;
  Theory?: React.FC<any>;
  
  // Opciones de Motor
  defaultMethod?: "RungeKutta4" | "Euler";
  
  // Soporte AI
  aiPrompts?: {
    specialistPrimary: string;
    specialistSecondary?: string;
  };
}
