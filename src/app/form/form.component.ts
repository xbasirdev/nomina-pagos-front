import { Component, OnInit } from '@angular/core';
import { File } from '../interfaces/files';
import { FilesService } from '../services/files.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  file: File = {
    user_id: null,
    filenames: null,
    filename: null
  };
  id: any;
  editing: boolean = false;
  files: File[];
  constructor(private filesService: FilesService, private activatedRoute: ActivatedRoute) {
     this.id = this.activatedRoute.snapshot.params['id'];
     if(this.id){
        this.editing = true;
        this.filesService.get().subscribe( (data: File[]) => {
          this.files = data;
          this.file = this.files.find( (m) => {return m.id == this.id })
        })
     }else{
       this.editing = false;
     }
   }

  ngOnInit() {
  }

  

  saveFile(){
    if(this.editing){
      this.filesService.put(this.file).subscribe( (data) => {
        alert('registro actualizada');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      })
    }else {
      this.filesService.save(this.file).subscribe( (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un error');
      })
    }
    
  }

}
