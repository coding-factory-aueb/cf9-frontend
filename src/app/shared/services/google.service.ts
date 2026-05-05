import { Injectable, inject, signal } from '@angular/core';
import { GoogleClientId } from '../config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment';
import { IGoogleUser } from '../interfaces/google-user.interface';

@Injectable({
  providedIn: 'root',
})
export class GoogleService {}
