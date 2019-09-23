import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MoviesService) { 
    this.getMovies();
  }

  ngOnInit() {
  }

  getMovies(){
    this.movieService.get().subscribe((data: Movie[]) => {
      this.movies = data;
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  delete(id){
    if(confirm('Seguro que desea eliminarlo?')){
      this.movieService.delete(id).subscribe( (data) => {
        alert('eliminado con exito');
        console.log(data);
        this.getMovies();
      }, (error) => {
        console.log(error);
      });
    }
  }
}
