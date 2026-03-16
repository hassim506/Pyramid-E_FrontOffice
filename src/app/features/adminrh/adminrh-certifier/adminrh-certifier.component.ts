// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { CertifierService } from '../../../shared/service/certifier/certifier-service.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';

import { FormationService } from '../../../shared/service/formation/formation.service';
import { AppComponent } from '../../../app.component';


@Component({
  selector: 'app-adminrh-certifier',
  imports: [ BrowserModule,
    HttpClientModule],
      providers: [
    CertifierService
    ],
  templateUrl: './adminrh-certifier.component.html',
  styleUrl: './adminrh-certifier.component.scss'
})
export class AdminrhCertifierComponent implements OnInit {
credentials: any[] = [];
  loading = false;

  constructor(private certifierService: CertifierService) {}

  ngOnInit(): void {
    this.loadCredentials();
  }

  loadCredentials(): void {
    this.loading = true;
    this.certifierService.getCredentials().subscribe({
      next: (response) => {
        this.credentials = response.data || response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des certificats:', error);
        this.loading = false;
      }
    });
  }

  createCertificate(certificateData: any): void {
    this.certifierService.createCredential(certificateData).subscribe({
      next: (response) => {
        console.log('Certificat créé:', response);
        this.loadCredentials(); // Recharger la liste
      },
      error: (error) => {
        console.error('Erreur lors de la création du certificat:', error);
      }
    });
  }
}
