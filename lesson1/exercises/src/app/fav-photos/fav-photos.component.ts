import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Check out these photos here!';
  image1 = 'https://m.media-amazon.com/images/I/41F55SRS24L._AC_.jpg';
  image2 = 'https://m.media-amazon.com/images/I/41JAT9P45FL._AC_SY445_.jpg';
  image3 = 'https://s.ecrater.com/stores/157240/5707c1c0b708f_157240b.jpg';

  constructor() { }

  ngOnInit() {
  }

}