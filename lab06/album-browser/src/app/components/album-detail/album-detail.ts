import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {

  album: any = null;
  updatedTitle = '';
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe((data: any) => {
      this.album = data;
      this.updatedTitle = data.title;
      this.isLoading = false;
    });

  }

  onSave(): void {

    const updatedAlbum = {
      ...this.album,
      title: this.updatedTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe(() => {
      this.album = updatedAlbum;
    });

  }

}