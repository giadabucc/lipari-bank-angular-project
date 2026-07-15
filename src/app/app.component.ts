import { ChangeDetectionStrategy, Component, OnInit, computed, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { UserService, User } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly title = 'lipari-bank-dashboard';

  private readonly userService = inject(UserService);

  readonly userState = signal<User | null>(null);

  readonly isAuthenticated = computed(() => this.userState() !== null);

  readonly userName = computed(() => this.userState()?.name ?? 'Guest');

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.userState.set(user);
    });
  }
}

