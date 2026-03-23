import { BiomedicalModule } from './Module.interface';

class ModuleRegistryClass {
  private modules: Map<string, BiomedicalModule> = new Map();

  register(module: BiomedicalModule): void {
    if (this.modules.has(module.id)) {
      console.warn(`Module with id ${module.id} is already registered. Overwriting.`);
    }
    this.modules.set(module.id, module);
  }

  get(id: string): BiomedicalModule | undefined {
    return this.modules.get(id);
  }

  getAll(): BiomedicalModule[] {
    return Array.from(this.modules.values());
  }

  getByCategory(category: string): BiomedicalModule[] {
    return this.getAll().filter(m => m.category === category);
  }
}

export const ModuleRegistry = new ModuleRegistryClass();
