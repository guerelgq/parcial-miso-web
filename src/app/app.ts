import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

type Tab = 'usuarios' | 'repositorios';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  activeTab: Tab = 'usuarios';
  isDetail = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDetail = /^\/repositorios\/\d+/.test(event.urlAfterRedirects);
        if (this.isDetail) {
          this.activeTab = 'repositorios';
        }
      }
    });
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
    if (this.isDetail) {
      this.router.navigateByUrl('/');
    }
  }
}
