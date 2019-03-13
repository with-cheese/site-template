import { Component, OnInit} from '@angular/core';
declare var externalJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'site-template';
    images = [  {'title' : 'img1', 'src': 'image1.png'},
                {'title' : 'img2', 'src': 'image2.png'},
                {'title' : 'img3', 'src': 'image3.png'}];

    ngOnInit() {
        setTimeout(() => { externalJS.initCarousel(); }, 500);
    }
}