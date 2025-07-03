import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, RouterModule],
  template: `
    <div class="landing-page">
      <!-- Hero Section with Animated Elements -->
      <section class="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div class="absolute w-96 h-96 rounded-full bg-blue-400 -top-20 -left-20"></div>
          <div class="absolute w-80 h-80 rounded-full bg-indigo-500 bottom-0 right-0"></div>
          <div class="absolute w-64 h-64 rounded-full bg-purple-500 top-1/2 left-1/3"></div>
        </div>
        
        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
              <div class="inline-block px-3 py-1 bg-indigo-500 bg-opacity-30 rounded-full text-sm font-medium mb-4">
                Neu in 2025
              </div>
              <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Revolutionier deine <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Events</span> mit Bitference
              </h1>
              <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-xl">
                Die KI-gestützte All-in-One Plattform für modernes und stressfreies Konferenzmanagement
              </p>
              <div class="flex flex-wrap gap-4">
                <button mat-raised-button color="primary" class="text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium">Kostenlos testen</button>
                <button mat-stroked-button class="border-2 border-white !text-white text-lg py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-medium">Demo ansehen</button>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center text-xs">MS</div>
                  <div class="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs">TR</div>
                  <div class="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-xs">KL</div>
                </div>
                <span class="ml-3 text-sm text-blue-100">+ 2.500 Events organisiert</span>
              </div>
            </div>
            <div class="md:w-1/2 flex justify-center animate-float">
              <div class="relative">
                <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-75 blur-sm"></div>
                <div class="relative bg-gradient-to-br from-blue-900 to-indigo-800 p-8 rounded-lg shadow-2xl">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col p-3 bg-white bg-opacity-10 rounded-lg">
                      <mat-icon class="text-cyan-300 text-2xl">event</mat-icon>
                      <span class="text-sm mt-2">24 Sessions</span>
                    </div>
                    <div class="flex flex-col p-3 bg-white bg-opacity-10 rounded-lg">
                      <mat-icon class="text-indigo-300 text-2xl">people</mat-icon>
                      <span class="text-sm mt-2">12 Sprecher</span>
                    </div>
                    <div class="flex flex-col p-3 bg-white bg-opacity-10 rounded-lg">
                      <mat-icon class="text-purple-300 text-2xl">schedule</mat-icon>
                      <span class="text-sm mt-2">2 Tage</span>
                    </div>
                    <div class="flex flex-col p-3 bg-white bg-opacity-10 rounded-lg">
                      <mat-icon class="text-blue-300 text-2xl">room</mat-icon>
                      <span class="text-sm mt-2">5 Räume</span>
                    </div>
                  </div>
                  <div class="mt-4 p-3 bg-white bg-opacity-5 rounded-lg">
                    <div class="flex items-center text-sm mb-2">
                      <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span>Aktuell läuft: Keynote</span>
                    </div>
                    <div class="h-1 w-full bg-white bg-opacity-10 rounded-full">
                      <div class="h-1 w-1/3 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section with Visual Hierarchy and Interactive Elements -->
      <section class="py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto px-4 md:px-8">
          <div class="text-center mb-16 max-w-3xl mx-auto">
            <div class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Komplettlösung
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Alles was du für erfolgreiche Events brauchst</h2>
            <p class="text-gray-600 text-lg">Eine durchdachte Plattform, die den gesamten Event-Lebenszyklus abdeckt</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">event</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Konferenzmanagement</h3>
              <p class="text-gray-600 mb-4">Erstelle und verwalte deine Konferenzen mit allen Details wie Name, Datum, Veranstaltungsort und thematischer Ausrichtung.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">room</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Raum- und Ortsverwaltung</h3>
              <p class="text-gray-600 mb-4">Konfiguriere Veranstaltungsorte, verwalte Räume und deren Kapazitäten, und erstelle detaillierte Raumkonfigurationen.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">person</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Referentenverwaltung</h3>
              <p class="text-gray-600 mb-4">Pflege Sprecherprofile, verfolge Kommunikationen und verwalte spezifische Anforderungen der Redner.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">schedule</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Sessionplanung</h3>
              <p class="text-gray-600 mb-4">Erstelle verschiedene Sessiontypen und plane Veranstaltungen mit automatischer Erkennung von Terminkonflikten.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">view_list</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Track-Management</h3>
              <p class="text-gray-600 mb-4">Organisiere thematische Tracks, weise Sessions zu und nutze Farbkodierungen für bessere Übersicht.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <mat-icon class="text-3xl">date_range</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Zeitplanverwaltung</h3>
              <p class="text-gray-600 mb-4">Nutze eine visuelle Kalenderoberfläche mit Drag-and-Drop-Funktionalität für einfache Terminplanung.</p>
              <button mat-button color="primary" class="p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Mehr erfahren</span>
                <mat-icon class="text-base ml-1">arrow_forward</mat-icon>
              </button>
            </mat-card>
          </div>
        </div>
      </section>

      <!-- Social Proof Section with Testimonials -->
      <section class="py-24 bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute inset-0 overflow-hidden opacity-30">
          <svg class="absolute left-0 top-0 h-48 w-48 text-indigo-300 opacity-20" viewBox="0 0 184 184" xmlns="http://www.w3.org/2000/svg">
            <path d="M182 184a2 2 0 110-4 2 2 0 010 4zm-20-20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm-20 0a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 0a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm-20 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 40a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 60a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 80a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM22 144a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM2 144a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM2 4a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" fill-rule="evenodd" opacity=".5"/>
          </svg>
          <svg class="absolute right-0 bottom-0 h-48 w-48 text-indigo-300 opacity-20" viewBox="0 0 184 184" xmlns="http://www.w3.org/2000/svg">
            <path d="M182 184a2 2 0 110-4 2 2 0 010 4zm-20-20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm-20 0a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 0a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm-20 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 40a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 60a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm-20 80a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM22 144a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM2 144a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0 20a2 2 0 110-4 2 2 0 010 4zm0-60a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zm0-20a2 2 0 110-4 2 2 0 010 4zM2 4a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" fill-rule="evenodd" opacity=".5"/>
          </svg>
        </div>
        
        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="text-center mb-16 max-w-3xl mx-auto">
            <div class="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              Kundenstimmen
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Das sagen unsere Kunden über Bitference</h2>
            <p class="text-gray-600 text-lg">Erfahrungen von Eventplanern, die ihre Veranstaltungen mit unserer Plattform zum Erfolg geführt haben</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <mat-card class="p-8 h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-10 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
              <div class="text-indigo-600 mb-6">
                <mat-icon class="text-4xl">format_quote</mat-icon>
              </div>
              <p class="text-gray-700 mb-8 text-lg leading-relaxed">"Bitference hat die Organisation unserer jährlichen Tech-Konferenz revolutioniert. Die Plattform ist intuitiv, flexibel und hat uns unzählige Arbeitsstunden erspart."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-lg mr-4">
                  MW
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Markus Weber</div>
                  <div class="text-sm text-gray-500">TechEvents Berlin</div>
                </div>
              </div>
              <div class="absolute bottom-6 right-6 flex">
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
              </div>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-10 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
              <div class="text-indigo-600 mb-6">
                <mat-icon class="text-4xl">format_quote</mat-icon>
              </div>
              <p class="text-gray-700 mb-8 text-lg leading-relaxed">"Die Track-Management-Funktionen und die Konflikterkennung haben uns geholfen, ein reibungsloses Programm für über 200 Sessions zu erstellen."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-lg mr-4">
                  JS
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Julia Schneider</div>
                  <div class="text-sm text-gray-500">Academic Conference München</div>
                </div>
              </div>
              <div class="absolute bottom-6 right-6 flex">
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
              </div>
            </mat-card>
            
            <mat-card class="p-8 h-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-10 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
              <div class="text-indigo-600 mb-6">
                <mat-icon class="text-4xl">format_quote</mat-icon>
              </div>
              <p class="text-gray-700 mb-8 text-lg leading-relaxed">"Mit Bitference konnten wir unser internationales Symposium effizient planen und durchführen. Die mehrsprachige Unterstützung war für uns entscheidend."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-lg mr-4">
                  TH
                </div>
                <div>
                  <div class="font-semibold text-gray-900">Thomas Huber</div>
                  <div class="text-sm text-gray-500">Global Science Forum</div>
                </div>
              </div>
              <div class="absolute bottom-6 right-6 flex">
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star</mat-icon>
                <mat-icon class="text-yellow-500 text-lg">star_half</mat-icon>
              </div>
            </mat-card>
          </div>
          
          <!-- Trust indicators -->
          <div class="mt-16 pt-12 border-t border-gray-200">
            <p class="text-center text-gray-500 mb-8 font-medium">Vertraut von führenden Organisationen</p>
            <div class="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70">
              <div class="flex items-center justify-center h-12">
                <div class="text-xl font-bold text-gray-400">TechCorp</div>
              </div>
              <div class="flex items-center justify-center h-12">
                <div class="text-xl font-bold text-gray-400">UniMünchen</div>
              </div>
              <div class="flex items-center justify-center h-12">
                <div class="text-xl font-bold text-gray-400">EventPro</div>
              </div>
              <div class="flex items-center justify-center h-12">
                <div class="text-xl font-bold text-gray-400">ConferenceWorld</div>
              </div>
              <div class="flex items-center justify-center h-12">
                <div class="text-xl font-bold text-gray-400">InnoSummit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Stats Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div class="p-6 rounded-xl bg-gray-50 text-center">
              <div class="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">500+</div>
              <div class="text-gray-700">Events organisiert</div>
            </div>
            <div class="p-6 rounded-xl bg-gray-50 text-center">
              <div class="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">10k+</div>
              <div class="text-gray-700">Zufriedene Besucher</div>
            </div>
            <div class="p-6 rounded-xl bg-gray-50 text-center">
              <div class="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">98%</div>
              <div class="text-gray-700">Kundenzufriedenheit</div>
            </div>
            <div class="p-6 rounded-xl bg-gray-50 text-center">
              <div class="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">50+</div>
              <div class="text-gray-700">Partner weltweit</div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- CTA Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-700"></div>
        <div class="absolute inset-0 opacity-20 bg-pattern"></div>
        
        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-2">
              <div class="p-8 md:p-12 bg-white">
                <div class="text-blue-600 font-medium mb-2">Starte jetzt</div>
                <h2 class="text-3xl font-bold mb-6">Bereit, deine Events zu revolutionieren?</h2>
                <p class="text-gray-600 mb-8">Entdecke, wie Bitference dir helfen kann, beeindruckende und effiziente Veranstaltungen zu organisieren.</p>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <mat-icon class="text-green-500 mr-3">check_circle</mat-icon>
                    <span class="text-gray-700">14 Tage kostenlose Testversion</span>
                  </div>
                  <div class="flex items-center">
                    <mat-icon class="text-green-500 mr-3">check_circle</mat-icon>
                    <span class="text-gray-700">Keine Kreditkarte erforderlich</span>
                  </div>
                  <div class="flex items-center">
                    <mat-icon class="text-green-500 mr-3">check_circle</mat-icon>
                    <span class="text-gray-700">Unbegrenzte Events in der Testphase</span>
                  </div>
                </div>
              </div>
              <div class="p-8 md:p-12 bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
                <h3 class="text-2xl font-bold mb-6">Registriere dich jetzt</h3>
                <div class="space-y-4">
                  <div>
                    <label for="name-input" class="block text-sm font-medium mb-2">Name</label>
                    <div class="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-3">
                      <mat-icon class="text-white opacity-70 mr-2">person</mat-icon>
                      <input id="name-input" type="text" placeholder="Max Mustermann" class="bg-transparent w-full outline-none text-white placeholder-white placeholder-opacity-70">
                    </div>
                  </div>
                  <div>
                    <label for="email-input" class="block text-sm font-medium mb-2">Email</label>
                    <div class="flex items-center bg-white bg-opacity-20 rounded-lg px-4 py-3">
                      <mat-icon class="text-white opacity-70 mr-2">email</mat-icon>
                      <input id="email-input" type="email" placeholder="max@beispiel.de" class="bg-transparent w-full outline-none text-white placeholder-white placeholder-opacity-70">
                    </div>
                  </div>
                  <button mat-raised-button color="accent" class="w-full py-3 text-center rounded-lg font-medium text-lg mt-6 shadow-lg hover:shadow-xl transition-all duration-300">Kostenlos starten</button>
                </div>
                <p class="text-sm mt-4 text-white text-opacity-80">Mit der Anmeldung stimmst du unseren Nutzungsbedingungen zu und bestätigst, dass du unsere Datenschutzerklärung gelesen hast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white pt-20 pb-12">
        <div class="container mx-auto px-4 md:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 class="text-xl font-bold mb-6">Bitference</h3>
              <p class="text-gray-400 mb-6">Die umfassende Plattform für professionelles Konferenzmanagement</p>
              <div class="flex space-x-4">
                <button mat-icon-button aria-label="Email" class="bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300">
                  <mat-icon class="text-white text-base">alternate_email</mat-icon>
                </button>
                <button mat-icon-button aria-label="Website" class="bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300">
                  <mat-icon class="text-white text-base">language</mat-icon>
                </button>
                <button mat-icon-button aria-label="Social Media" class="bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300">
                  <mat-icon class="text-white text-base">launch</mat-icon>
                </button>
              </div>
            </div>
            <div>
              <h4 class="font-semibold mb-6">Produkt</h4>
              <ul class="space-y-3 text-gray-400">
                <li><a href="#" class="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Preise</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Enterprise</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Fallstudien</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-6">Ressourcen</h4>
              <ul class="space-y-3 text-gray-400">
                <li><a href="#" class="hover:text-white transition-colors duration-300">Dokumentation</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Hilfe & Support</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" class="hover:text-white transition-colors duration-300">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-6">Kontakt</h4>
              <ul class="space-y-3 text-gray-400">
                <li class="flex items-center"><mat-icon class="mr-3 text-sm text-gray-500">email</mat-icon> info&#64;bitference.de</li>
                <li class="flex items-center"><mat-icon class="mr-3 text-sm text-gray-500">call</mat-icon> +49 (0) 123 456789</li>
                <li class="flex items-center"><mat-icon class="mr-3 text-sm text-gray-500">location_on</mat-icon> Berlin, Deutschland</li>
              </ul>
            </div>
          </div>
          <div class="pt-8 border-t border-gray-800 text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Bitference. Alle Rechte vorbehalten.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">Impressum</a>
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">Datenschutz</a>
              <a href="#" class="hover:text-gray-300 transition-colors duration-300">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .mat-icon {
      height: auto;
      width: auto;
    }
  `],
})
export class HomeComponent {
}
