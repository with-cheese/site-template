import { Component, OnInit} from '@angular/core';
declare var externalJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public title = 'site-template';
    public images = [ {'title' : 'img1', 'src': 'Martin_1.png'},
                      {'title' : 'img2', 'src': 'Martin_2.png'},
                      {'title' : 'img3', 'src': 'Martin_3.png'},
                      {'title' : 'img4', 'src': 'Martin_4.png'},
                      {'title' : 'img5', 'src': 'Martin_5.png'},
                      {'title' : 'img6', 'src': 'Martin_6.png'},
                      {'title' : 'img7', 'src': 'Martin_7.png'},
                      {'title' : 'img8', 'src': 'Martin_8.png'},
                      {'title' : 'img9', 'src': 'Martin_9.png'}];

    ngOnInit() {
        setTimeout(() => { externalJS.initCarousel(); }, 500);
    }
}