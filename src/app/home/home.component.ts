import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';
import { File } from '../interfaces/files';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  files: File[];
  constructor(private fileService: FilesService) { 
    this.getFiles();
  }

  ngOnInit() {
  }

  getFiles(){
    this.fileService.get().subscribe((data: File[]) => {
      this.files = data;
    }, (error)=>{
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  delete(id){
    if(confirm('Seguro que desea eliminarlo?')){
      this.fileService.delete(id).subscribe( (data) => {
        alert('eliminado con exito');
        console.log(data);
        this.getFiles();
      }, (error) => {
        console.log(error);
      });
    }
  }
}
