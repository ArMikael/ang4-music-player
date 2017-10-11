import {ErrorHandler} from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error.status === 404) {
      console.error('This post has already been deleted');
    } else if (error.status === 400) {
      console.error('Create album error', error.json());
    } else {
      console.error('An unexpected error occurred', error);
    }
  };
}
