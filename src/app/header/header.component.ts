import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent implements OnInit, OnDestroy {

  activeRoute: string = 'home';
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Установить активный роут при первой загрузке
    this.setActiveRoute(this.router.url);

    // Следить за изменениями роута
    this.routerSub = this.router
      .events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setActiveRoute(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  private setActiveRoute(url: string): void {
    // Убираем leading slash и берём первый сегмент
    const segment = url.replace('/', '').split('/')[0];
    this.activeRoute = segment || 'home';
  }

}
