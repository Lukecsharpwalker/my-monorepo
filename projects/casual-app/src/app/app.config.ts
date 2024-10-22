import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"monorepo-23f2a","appId":"1:6582058977:web:582ccf99e840b79fd7dca0","storageBucket":"monorepo-23f2a.appspot.com","apiKey":"AIzaSyBb9GKc2wfIu6dTeVnuXsgLlxlTyKNTpDo","authDomain":"monorepo-23f2a.firebaseapp.com","messagingSenderId":"6582058977","measurementId":"G-QKGQW7BM3W"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()),

  ]
};
