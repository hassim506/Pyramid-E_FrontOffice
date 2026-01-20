import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  uploadImage(file: File, folder: string = 'formations'): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    return this.http.post(`${this.apiUrl}/upload/image`, formData);
  }

  uploadImageProgress(file: File, folder: string = 'formations'): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    const req = new HttpRequest('POST', `${this.apiUrl}/upload/image`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  // Méthode pour valider le type de fichier
  isValidImageFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    return allowedTypes.includes(file.type);
  }

  // Méthode pour valider la taille du fichier (en MB)
  isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    return file.size <= maxSizeBytes;
  }
}