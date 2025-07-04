import { Routes } from '@angular/router';
import { UsersComponent } from './users/users';
import { UserDetailComponent } from './user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
];
