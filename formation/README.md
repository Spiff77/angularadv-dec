# Formation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.


 /a/a-alone --> Acomponent
 /a/a1 --> A1component
 /b/b-alone --> BComponent
 /b/b1 --> B1Component

## PWA

Class or interface:

Person{ 
  id: number                                  // formControl
  firstname: string                           // formControl
  addresse:{                                  // formGroup
    streetNumber: number                      // formControl
    street: string                            // formControl
  },
  courses: [                                  // formArray
    { // 0                                    // formGroup  
      id: number,                             // formControl
      name: string                            // formControl
    },       
    { // 1
    id: number, name: string},
    {id: number, name: string},
  ]
}


Installer http-server (`npm install -g http-server`)
Ajouter pwa (`ng add @angular/pwa`)

compiler (`ng build`)
se placer dans le projet compilé (`dist/[project_name]`)
lancer `http-server`

Constater que le projet fonctionne sans server ou sans internet

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
