import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'Nesto mnogo zanimljivo';

  osluskivanjeInformacije(informacija: string) {
    alert(informacija);
  }
}
