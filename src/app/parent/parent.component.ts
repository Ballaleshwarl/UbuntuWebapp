import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
   mitreDataFromApiOrService: any[] = [];
  key = 0; // force refresh

  loadMitreData() {
    this.mitreDataFromApiOrService = [
      {
        tactic: "Initial Access",
        techniques: [
          {
            technique: "Phishing",
            techniqueId: "T1566",
            score: 80,
            childData: []
          },
          {
            technique: "Drive-by Compromise",
            techniqueId: "T1189",
            score: 60,
            childData: []
          }
        ]
      },
      {
        tactic: "Execution",
        techniques: [
          {
            technique: "Command and Scripting Interpreter",
            techniqueId: "T1059",
            score: 90,
            childData: []
          }
        ]
      }
    ];
    this.key++;
  }
}
