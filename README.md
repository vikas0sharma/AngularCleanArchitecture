# Angular Clean Architecture
Project contains the architecture and best practices that need to be followed while working on an enterprise application.

State Management - NgRx has been used.
UI Components - Angular Material has been used.

## Core
- Core folder should contain singleton services shared throughout the app
  Ex- : LoggerService, ErrorHandlerService
- HTTP interceptors for auth/environment-specific headers
- Core should be imported only by Root module

## Shared
- Shared folder contain reusable components, pipes, directives
- Shared will be imported many times by different feature modules