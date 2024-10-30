import { inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalsServicesService {

  constructor() { }

  async modalEditPrice(): Promise<number | null> {
    const result = await Swal.fire({
      title: 'Edit Price',
      background: '#ffffff',
      color: '#000000',
      input: 'number',
      inputPlaceholder: 'Enter the new price...',
      inputAttributes: {
        min: '0',
        step: '0.01'
      },
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
    });
    if (result.isConfirmed && result.value !== null) {
      const newPrice: number = parseFloat(result.value);
      return newPrice;
    } else {
      return null;
    }
  }

  }