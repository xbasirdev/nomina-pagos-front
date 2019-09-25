import { Component, OnInit } from '@angular/core';

import { FileService } from '../shared/services/file.service'; //line 6
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
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
      this.fileService.sendFiles(formData).subscribe( 
        (response) => {
    console.log(response);
        });
        i++;
      }
    }
elem.value = ""; 
}
}