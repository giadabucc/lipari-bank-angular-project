import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-notification-bell',
  standalone: true,
  imports: [],
  templateUrl: './notification-bell.component.html',
  styleUrls: ['./notification-bell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBellComponent {
  readonly unreadCount = signal<number>(3);

  onBellClick(): void {
    console.log('Bell clicked, unread count reset');
    this.unreadCount.set(0);
  }
}
