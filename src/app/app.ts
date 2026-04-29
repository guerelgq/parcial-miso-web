import { Component } from '@angular/core';

type Tab = 'usuarios' | 'repositorios';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  activeTab: Tab = 'usuarios';

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }
}
