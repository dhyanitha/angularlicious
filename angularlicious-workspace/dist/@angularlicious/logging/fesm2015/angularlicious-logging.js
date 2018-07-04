import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularliciousLoggingModule {
}
AngularliciousLoggingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularliciousLoggingService {
    constructor() {
        this.applicationName = 'Angularlicio.us';
        this.serviceName = 'LoggingService';
    }
    /**
     * Use this method to send a log message with severity and source information
     * to the application's logger.
     *
     * If the application environment mode is [Production], the information will
     * be sent to a centralized repository.
     *
     * @param {?} source
     * @param {?} severity
     * @param {?} message
     * @return {?}
     */
    log(source, severity, message) {
        this.source = `${this.applicationName}.${source}`;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        const /** @type {?} */ msg = `${this.message}`;
        // todo: add switch based on the severity to:
        // console.info
        // console.warn
        // console.error
        // console.log
        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
AngularliciousLoggingService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class loggingServiceConfig {
    constructor() {
        this.applicationName = 'APP_NAME_NOT_PROVIDED';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const Severity = {
    Information: 1,
    Warning: 2,
    Error: 3,
    Critical: 4,
    Debug: 5,
};
Severity[Severity.Information] = "Information";
Severity[Severity.Warning] = "Warning";
Severity[Severity.Error] = "Error";
Severity[Severity.Critical] = "Critical";
Severity[Severity.Debug] = "Debug";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AngularliciousLoggingModule, AngularliciousLoggingService, loggingServiceConfig, Severity };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmxpY2lvdXMtbG9nZ2luZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGFuZ3VsYXJsaWNpb3VzL2xvZ2dpbmcvc3JjL2xvZ2dpbmcubW9kdWxlLnRzIiwibmc6Ly9AYW5ndWxhcmxpY2lvdXMvbG9nZ2luZy9zcmMvbG9nZ2luZy5zZXJ2aWNlLnRzIiwibmc6Ly9AYW5ndWxhcmxpY2lvdXMvbG9nZ2luZy9zcmMvbG9nZ2luZy5zZXJ2aWNlLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcmxpY2lvdXNMb2dnaW5nTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBsb2dnaW5nU2VydmljZUNvbmZpZyB9IGZyb20gJy4vbG9nZ2luZy5zZXJ2aWNlLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNldmVyaXR5IH0gZnJvbSAnLi9zZXZlcml0eS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJsaWNpb3VzTG9nZ2luZ1NlcnZpY2Uge1xyXG4gIGFwcGxpY2F0aW9uTmFtZSA9ICdBbmd1bGFybGljaW8udXMnO1xyXG4gIHNlcnZpY2VOYW1lID0gJ0xvZ2dpbmdTZXJ2aWNlJztcclxuICBzb3VyY2U6IHN0cmluZztcclxuICBzZXZlcml0eTogU2V2ZXJpdHk7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogRGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIFtMb2dnaW5nU2VydmljZV0gY29uc3RydWN0b3IuXHJcbiAgICovXHJcbiAgLy8gY29uc3RydWN0b3IoXHJcbiAgLy8gICAgIC8vIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnOiBsb2dnaW5nU2VydmljZUNvbmZpZ1xyXG4gIC8vICAgICBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZ1xyXG4gIC8vICkge1xyXG4gIC8vICAgICB0aGlzLmxvZyh0aGlzLnNlcnZpY2VOYW1lLCBTZXZlcml0eS5JbmZvcm1hdGlvbiwgYFN0YXJ0aW5nIGxvZ2dpbmcgc2VydmljZSBhdDogJHt0aGlzLnRpbWVzdGFtcH1gKTtcclxuICAvLyAgICAgaWYoYXBwbGljYXRpb25OYW1lKSB7XHJcbiAgLy8gICAgICAgICB0aGlzLmFwcGxpY2F0aW9uTmFtZSA9IGFwcGxpY2F0aW9uTmFtZTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNlbmQgYSBsb2cgbWVzc2FnZSB3aXRoIHNldmVyaXR5IGFuZCBzb3VyY2UgaW5mb3JtYXRpb25cclxuICAgKiB0byB0aGUgYXBwbGljYXRpb24ncyBsb2dnZXIuXHJcbiAgICpcclxuICAgKiBJZiB0aGUgYXBwbGljYXRpb24gZW52aXJvbm1lbnQgbW9kZSBpcyBbUHJvZHVjdGlvbl0sIHRoZSBpbmZvcm1hdGlvbiB3aWxsXHJcbiAgICogYmUgc2VudCB0byBhIGNlbnRyYWxpemVkIHJlcG9zaXRvcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc291cmNlXHJcbiAgICogQHBhcmFtIHNldmVyaXR5XHJcbiAgICogQHBhcmFtIG1lc3NhZ2VcclxuICAgKi9cclxuICBsb2coc291cmNlOiBzdHJpbmcsIHNldmVyaXR5OiBTZXZlcml0eSwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IGAke3RoaXMuYXBwbGljYXRpb25OYW1lfS4ke3NvdXJjZX1gO1xyXG4gICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xyXG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBtc2cgPSBgJHt0aGlzLm1lc3NhZ2V9YDtcclxuXHJcbiAgICAvLyB0b2RvOiBhZGQgc3dpdGNoIGJhc2VkIG9uIHRoZSBzZXZlcml0eSB0bzpcclxuICAgIC8vIGNvbnNvbGUuaW5mb1xyXG4gICAgLy8gY29uc29sZS53YXJuXHJcbiAgICAvLyBjb25zb2xlLmVycm9yXHJcbiAgICAvLyBjb25zb2xlLmxvZ1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGAke3RoaXMuc2V2ZXJpdHl9IGZyb20gJHt0aGlzLnNvdXJjZX06ICR7bXNnfSAoJHt0aGlzLnRpbWVzdGFtcH0pYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIGxvZ2dpbmdTZXJ2aWNlQ29uZmlnIHtcclxuICBwdWJsaWMgYXBwbGljYXRpb25OYW1lID0gJ0FQUF9OQU1FX05PVF9QUk9WSURFRCc7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O1lBR0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4Qjs7Ozs7OztBQ0xEOzsrQkFPb0IsaUJBQWlCOzJCQUNyQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0lBOEI5QixHQUFHLENBQUMsTUFBYyxFQUFFLFFBQWtCLEVBQUUsT0FBZTtRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFNUIsdUJBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Ozs7UUFPOUIsT0FBTyxDQUFDLEdBQUcsQ0FDVCxHQUFHLElBQUksQ0FBQyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUNuRSxDQUFDO0tBQ0g7OztZQWpERixVQUFVOzs7Ozs7O0FDTFg7OytCQUMyQix1QkFBdUI7O0NBQ2pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==