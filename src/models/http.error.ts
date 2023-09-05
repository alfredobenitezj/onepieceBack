export class HttpError extends Error {
    constructor(
      public status: number,
      public statusMessage: string,
      public message: string 
   
    ) {
      super(message);
    }
  }
  