import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  photos: Photo[] = [];
  isLoading = true;
  id!: number;

  ngOnInit(): void {

  this.id = Number(this.route.snapshot.paramMap.get('id'));

  this.albumService.getAlbumPhotos(this.id).subscribe((data: any) => {
    this.photos = data;
    this.isLoading = false;
  });

}

}