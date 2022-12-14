import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent as MovieForm } from "./form/form.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesComponent } from "./movies/movies.component";

const rotues: Routes = [
    {
        path: 'movies', component: MoviesComponent
    },
    {
        path: 'movies/:id', component: MovieDetailComponent
    },
    {
        path: 'movies/form', component: MovieForm
    }
]


@NgModule({
    imports: [RouterModule.forChild(rotues)],
    exports: [RouterModule]
})

export class MoviesRoutingModule {}