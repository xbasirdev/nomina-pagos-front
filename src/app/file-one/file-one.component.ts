import { Component, OnInit } from '@angular/core';

import { FileService } from '../shared/services/file.service'; 
@Component({
  selector: 'app-file-one',
  templateUrl: './file-one.component.html',
  styleUrls: ['./file-one.component.scss']
})
export class FileOneComponent implements OnInit {
  constructor(private fileService: FileService ) { } 
  ngOnInit() {
  }
  uploadFile(event){    
    let elem = event.target;  
    let i = 0;
    if(elem.files.length > 0){   
      while(elem.files[i]){  
      let formData = new FormData();  
      console.log(elem.files);
      formData.append('myfile', elem.files[i]);  
      this.fileService.sendFile(formData).subscribe( 
        (response) => {
    console.log(response);
        });
        i++;
      }
    }
elem.value = ""; 
}
}