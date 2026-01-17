import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mitre',
  templateUrl: './mitre.component.html',
  styleUrls: ['./mitre.component.css']
})
export class MitreComponent {
  @Input() mitreData: any[] = [];
  @Input() selectedTechniqueId: string | null = null;

  @Output() modelDeleted = new EventEmitter<{techniqueId: string, modelName: string}>();

  selectedTechnique: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.selectedTechniqueId) {
    //   this.selectTechniqueById(this.selectedTechniqueId);
    // }
  }

  onTechniqueClick(technique: any) {
    if (!technique.models) {
      technique.models = ['Model A', 'Model B', 'Model C'];
    }
    this.selectedTechnique = technique;
  }

  selectTechniqueById(techniqueId: any) {
    for (let tactic of this.mitreData) {
      const found = tactic.techniques.find((tech: any) => tech.techniqueId === techniqueId);
      if (found) {
        this.onTechniqueClick(found);
        return;
      }
    }
    this.selectedTechnique = null;
  }

  deleteModel(modelName: string) {
    this.modelDeleted.emit({
      techniqueId: this.selectedTechnique.techniqueId,
      modelName: modelName
    });
  }

  getModelCount(technique: any): number {
    return technique.models ? technique.models.length : 0;
  }
}

