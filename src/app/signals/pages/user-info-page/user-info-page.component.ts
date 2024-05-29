import {
  Component,
  OnInit,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {
  private userService: UserServiceService = inject(UserServiceService);

  public userId: WritableSignal<number> = signal<number>(1);

  public currentUser = signal<User | undefined | null>(undefined);

  public userWasFound = signal<boolean>(true);

  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'User not found';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  public loadUser(id: number): void {
    if (id <= 0) return;
    this.userId.set(id);
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(null);
      },
    });
  }
}
