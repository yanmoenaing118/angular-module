import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesComponent } from "./movies/movies.component";

const rotues: Routes = [
    {
        path: 'movies', component: MoviesComponent
    },
    {
        path: 'movies/:id', component: MovieDetailComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(rotues)],
    exports: [RouterModule]
})

export class MoviesRoutingModule {}