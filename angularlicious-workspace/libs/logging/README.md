# angularlicious-logging

The latest version v5.0.x is using the Angular 5.x packages. 

```json
"devDependencies": {
    "@angular/cli": "^1.5.0",
    "@angular/compiler": "^5.0.1",
    "@angular/compiler-cli": "^5.0.1",
    "@angular/core": "^5.0.1",
    "rollup": "^0.50.0",
    "tslint": "4.5.1",
    "typescript": "^2.4.2",
    "uglify-js": "^3.1.10"
  }
```

## NgModule Decorators
The build process is not adding the specified decorator. Added manually for now...

```javascript
import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularliciousLoggingServiceConfig } from './logging.service.config';
import { AngularliciousLoggingService } from './logging.service';
var AngularliciousLoggingModule = /** @class */ (function () {
    function AngularliciousLoggingModule() {
    }
    AngularliciousLoggingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [],
                    exports: [],
                    schemas: [NO_ERRORS_SCHEMA],
                },] },
    ];
    return AngularliciousLoggingModule;
}());
export { AngularliciousLoggingModule };
//# sourceMappingURL=angularlicious-logging.module.js.map
```