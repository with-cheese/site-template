import { Component, OnInit} from '@angular/core';
declare var externalJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public title = 'site-template';
    public images = [ {'title' : 'img1', 'src': 'Thomas_1.png'},
                      {'title' : 'img2', 'src': 'Thomas_2.png'},
                      {'title' : 'img3', 'src': 'Thomas_3.png'},
                      {'title' : 'img4', 'src': 'Thomas_4.png'},
                      {'title' : 'img5', 'src': 'Thomas_5.png'}];

    ngOnInit() {
        setTimeout(() => { externalJS.initCarousel(); }, 500);
    }
}