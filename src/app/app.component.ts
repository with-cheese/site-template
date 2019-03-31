import { Component, OnInit} from '@angular/core';
declare var externalJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    public title = 'site-template';
    public images = [ {'title' : 'img1', 'src': 'Stenmark_1.png'},
                      {'title' : 'img2', 'src': 'Stenmark_2.png'},
                      {'title' : 'img3', 'src': 'Stenmark_3.png'},
                      {'title' : 'img4', 'src': 'Stenmark_4.png'},
                      {'title' : 'img5', 'src': 'Stenmark_5.png'},
                      {'title' : 'img6', 'src': 'Stenmark_6.png'},
                      {'title' : 'img7', 'src': 'Stenmark_7.png'},
                      {'title' : 'img8', 'src': 'Nina_8.png'},
                      {'title' : 'img9', 'src': 'Stenmark_9.png'}];

    ngOnInit() {
        setTimeout(() => { externalJS.initCarousel(); }, 500);
    }
}