import { Routes } from '@angular/router'

import { ElephantPageComponent } from './elephants/page';
import { LionPageComponent } from './lions/page';
import { FeedbackFormComponent } from './feedback/page';

import { APP_CONFIG } from './app-config';

export const appRoutes: Routes = [
  { path: APP_CONFIG.path.empty, redirectTo: APP_CONFIG.path.redirect, pathMatch: APP_CONFIG.path.match },
  { path: APP_CONFIG.elephant.path, component: ElephantPageComponent },
  { path: APP_CONFIG.lion.path, component: LionPageComponent },
  { path: APP_CONFIG.feedback.path, component: FeedbackFormComponent },
];
