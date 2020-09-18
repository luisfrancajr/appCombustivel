import { ErrorHandler } from '@angular/core';

export class ErrosGlobais implements ErrorHandler {
    handleError(error: any): void {
        //throw new Error('Method not implemented.');
        console.log(error instanceof Error);
        console.log(error);
    }
    
}