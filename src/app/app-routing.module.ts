import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';

const routes: Routes = [
  { path: 'destinations', component: DestinationsComponent },
  { path: 'destination-detail/:id', component: DestinationDetailComponent },
  { path: "", pathMatch: "full", redirectTo: "destinations" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
