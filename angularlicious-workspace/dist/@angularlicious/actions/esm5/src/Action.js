/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ValidationContext } from '@angularlicious/rules-engine';
import { ValidationContextState } from '@angularlicious/rules-engine';
import { ActionResult } from './ActionResult';
/**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern.
 *
 * The pre-execute functions that can be implemented are:
 * 		1. start();
 * 		2. audit();
 * 		3. preValidateAction();
 * 		4. evaluateRules();
 * 		5. postValidateAction();
 * 		6. preExecuteAction();
 *
 * If the status of action is good, the business logic will be executed using the:
 * 		7. processAction();
 *
 * The post-execution functions that can be implemented are:
 * 		8. postExecuteAction();
 * 		9. validateActionResult();
 * 		10. finish();
 */
var /**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern.
 *
 * The pre-execute functions that can be implemented are:
 * 		1. start();
 * 		2. audit();
 * 		3. preValidateAction();
 * 		4. evaluateRules();
 * 		5. postValidateAction();
 * 		6. preExecuteAction();
 *
 * If the status of action is good, the business logic will be executed using the:
 * 		7. processAction();
 *
 * The post-execution functions that can be implemented are:
 * 		8. postExecuteAction();
 * 		9. validateActionResult();
 * 		10. finish();
 */
Action = /** @class */ (function () {
    /**
     * The default constructor for the class.
     */
    function Action() {
        /**
         * Indicates if the action is allowed execution. If there are any rule
         * violations in the validation context, the action is not allowed to
         * execute.
         */
        this.allowExecution = true;
        /**
         * The validation context for the specified action instance.
         */
        this._validationContext = new ValidationContext();
        /**
         * The result of the action. The default value is [Unknown], until the action
         * is executed.
         */
        this.actionResult = ActionResult.Unknown;
    }
    Object.defineProperty(Action.prototype, "validationContext", {
        /**
         * Use to retrieve the [ValidationContext] for the specified action.
         */
        get: /**
         * Use to retrieve the [ValidationContext] for the specified action.
         * @return {?}
         */
        function () {
            return this._validationContext;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     */
    /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     * @return {?}
     */
    Action.prototype.execute = /**
     * Use this method to execute a concrete action. A concrete action must implement
     * the [processAction] and the [validateActionResult] functions to be a valid
     * action.
     * @return {?}
     */
    function () {
        console.log('Preparing to execute action.');
        this.processActionPipeline();
    };
    /**
     * Use this method to process the action pipeline methods.
     * @return {?}
     */
    Action.prototype.processActionPipeline = /**
     * Use this method to process the action pipeline methods.
     * @return {?}
     */
    function () {
        this.startAction();
        if (this.allowExecution) {
            this.processAction();
        }
        this.finishAction();
    };
    /**
     * Use this method to call the pipeline methods for the [start] or beginning
     * process of the action pipeline.
     * @return {?}
     */
    Action.prototype.startAction = /**
     * Use this method to call the pipeline methods for the [start] or beginning
     * process of the action pipeline.
     * @return {?}
     */
    function () {
        console.log('Starting action.');
        this.start();
        this.audit();
        this.preValidateAction();
        this.evaluateRules();
        this.postValidateAction();
        this.preExecuteAction();
    };
    /**
     * Use this method to execute the methods at the end of the action pipeline.
     * @return {?}
     */
    Action.prototype.finishAction = /**
     * Use this method to execute the methods at the end of the action pipeline.
     * @return {?}
     */
    function () {
        console.log('Finishing action.');
        this.postExecuteAction();
        this.validateActionResult();
        this.finish();
    };
    /**
     * Use this method to process the action. This will only be called if the action's
     * validation context is in a valid state (no rule violations).
     *
     * All concrete actions are required to provide an implementation of the [performAction]
     * method that is called for this part of the action pipeline.
     * @return {?}
     */
    Action.prototype.processAction = /**
     * Use this method to process the action. This will only be called if the action's
     * validation context is in a valid state (no rule violations).
     *
     * All concrete actions are required to provide an implementation of the [performAction]
     * method that is called for this part of the action pipeline.
     * @return {?}
     */
    function () {
        console.log('Processing action.');
        this.performAction();
    };
    /**
     * All action must implement this function. This is where your
     * [business logic] should be implemented. This function is called if
     * there are no validation rule exceptions.
     */
    /**
     * All action must implement this function. This is where your
     * [business logic] should be implemented. This function is called if
     * there are no validation rule exceptions.
     * @return {?}
     */
    Action.prototype.performAction = /**
     * All action must implement this function. This is where your
     * [business logic] should be implemented. This function is called if
     * there are no validation rule exceptions.
     * @return {?}
     */
    function () {
        throw new Error('Not implemented. Requires implementation in concrete action.');
    };
    /**
     * Override/Implement this function to perform an early operation in the action pipeline.
     * This function belongs to the pre-execute functions of the action pipeline.
     */
    /**
     * Override/Implement this function to perform an early operation in the action pipeline.
     * This function belongs to the pre-execute functions of the action pipeline.
     * @return {?}
     */
    Action.prototype.start = /**
     * Override/Implement this function to perform an early operation in the action pipeline.
     * This function belongs to the pre-execute functions of the action pipeline.
     * @return {?}
     */
    function () {
        console.log('Starting action.');
    };
    /**
     * Implement this function to perform any auditing features during the pre-exectuion of the
     * business logic.
     */
    /**
     * Implement this function to perform any auditing features during the pre-exectuion of the
     * business logic.
     * @return {?}
     */
    Action.prototype.audit = /**
     * Implement this function to perform any auditing features during the pre-exectuion of the
     * business logic.
     * @return {?}
     */
    function () {
        console.log('Auditing action.');
    };
    /**
     * Use this function to setup any validation rules before the validation happens. This
     * function is called before [evaluateRules].
     */
    /**
     * Use this function to setup any validation rules before the validation happens. This
     * function is called before [evaluateRules].
     * @return {?}
     */
    Action.prototype.preValidateAction = /**
     * Use this function to setup any validation rules before the validation happens. This
     * function is called before [evaluateRules].
     * @return {?}
     */
    function () {
        console.log('Pre-validating action.');
    };
    /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     */
    /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     * @return {?}
     */
    Action.prototype.evaluateRules = /**
     * Use this function to implement the execution of the validation and business rules. This
     * function is called after [preValidateAction].
     * @return {?}
     */
    function () {
        console.log('Evaluating action rules.');
        var /** @type {?} */ context = this.validateAction();
        if (context.isValid) {
            this.allowExecution = true;
            this.validationContext.state = ValidationContextState.Success;
        }
        else {
            this.allowExecution = false;
            this.validationContext.state = ValidationContextState.Failure;
        }
    };
    /**
     * Use to determine or handle the results of the rule evalation. This
     * function is called after the [evaluateRules].
     */
    /**
     * Use to determine or handle the results of the rule evalation. This
     * function is called after the [evaluateRules].
     * @return {?}
     */
    Action.prototype.postValidateAction = /**
     * Use to determine or handle the results of the rule evalation. This
     * function is called after the [evaluateRules].
     * @return {?}
     */
    function () {
        console.log('Post-Validation of action.');
    };
    /**
     * Use this function to perform any setup before the action is executed.
     */
    /**
     * Use this function to perform any setup before the action is executed.
     * @return {?}
     */
    Action.prototype.preExecuteAction = /**
     * Use this function to perform any setup before the action is executed.
     * @return {?}
     */
    function () {
        console.log('Pre-execution of action.');
    };
    /**
     * Use this funciton to evaluate the action after the the business logic within
     * the [performAction] has executed.
     */
    /**
     * Use this funciton to evaluate the action after the the business logic within
     * the [performAction] has executed.
     * @return {?}
     */
    Action.prototype.postExecuteAction = /**
     * Use this funciton to evaluate the action after the the business logic within
     * the [performAction] has executed.
     * @return {?}
     */
    function () {
        console.log('Post-execution of action');
    };
    /**
     * This function requires implementation to determin the state and result of the action.
     * Use this opportunity to validate the results.
     */
    /**
     * This function requires implementation to determin the state and result of the action.
     * Use this opportunity to validate the results.
     * @return {?}
     */
    Action.prototype.validateActionResult = /**
     * This function requires implementation to determin the state and result of the action.
     * Use this opportunity to validate the results.
     * @return {?}
     */
    function () {
        throw new Error('Concrete actions required to implement this method.');
    };
    /**
     * Use this function to perform any cleanup, logging, or disposing of resources used
     * by the action. This is the last function called during the pipeline.
     */
    /**
     * Use this function to perform any cleanup, logging, or disposing of resources used
     * by the action. This is the last function called during the pipeline.
     * @return {?}
     */
    Action.prototype.finish = /**
     * Use this function to perform any cleanup, logging, or disposing of resources used
     * by the action. This is the last function called during the pipeline.
     * @return {?}
     */
    function () {
        console.log('Finish action.');
    };
    /**
     * Implement this function to perform validation of business rules and data.
     */
    /**
     * Implement this function to perform validation of business rules and data.
     * @return {?}
     */
    Action.prototype.validateAction = /**
     * Implement this function to perform validation of business rules and data.
     * @return {?}
     */
    function () {
        console.log('Validating the action.');
        return this.validationContext;
    };
    return Action;
}());
/**
 * This is the framework Action class that provides the pipeline of pre/post
 * execution methods. This class implements the [Template Method] pattern.
 *
 * The pre-execute functions that can be implemented are:
 * 		1. start();
 * 		2. audit();
 * 		3. preValidateAction();
 * 		4. evaluateRules();
 * 		5. postValidateAction();
 * 		6. preExecuteAction();
 *
 * If the status of action is good, the business logic will be executed using the:
 * 		7. processAction();
 *
 * The post-execution functions that can be implemented are:
 * 		8. postExecuteAction();
 * 		9. validateActionResult();
 * 		10. finish();
 */
export { Action };
function Action_tsickle_Closure_declarations() {
    /**
     * Indicates if the action is allowed execution. If there are any rule
     * violations in the validation context, the action is not allowed to
     * execute.
     * @type {?}
     */
    Action.prototype.allowExecution;
    /**
     * The validation context for the specified action instance.
     * @type {?}
     */
    Action.prototype._validationContext;
    /**
     * The result of the action. The default value is [Unknown], until the action
     * is executed.
     * @type {?}
     */
    Action.prototype.actionResult;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXJsaWNpb3VzL2FjdGlvbnMvIiwic291cmNlcyI6WyJzcmMvQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFvQkU7O09BRUc7SUFDSDs7Ozs7OzhCQWhCaUIsSUFBSTs7OztrQ0FLMkIsSUFBSSxpQkFBaUIsRUFBRTs7Ozs7NEJBTTFDLFlBQVksQ0FBQyxPQUFPO0tBS2pDO0lBS2hCLHNCQUFJLHFDQUFpQjtRQUhyQjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDaEM7OztPQUFBO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHdCQUFPOzs7Ozs7SUFBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7SUFLTyxzQ0FBcUI7Ozs7O1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Ozs7Ozs7SUFPZCw0QkFBVzs7Ozs7O1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7OztJQU1sQiw2QkFBWTs7Ozs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7OztJQVVSLDhCQUFhOzs7Ozs7Ozs7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7SUFHdkI7Ozs7T0FJRzs7Ozs7OztJQUNILDhCQUFhOzs7Ozs7SUFBYjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQ2IsOERBQThELENBQy9ELENBQUM7S0FDSDtJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsc0JBQUs7Ozs7O0lBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDakM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHNCQUFLOzs7OztJQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxrQ0FBaUI7Ozs7O0lBQWpCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCw4QkFBYTs7Ozs7SUFBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1NBQy9EO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztTQUMvRDtLQUNGO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtQ0FBa0I7Ozs7O0lBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0tBQzNDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaUNBQWdCOzs7O0lBQWhCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxrQ0FBaUI7Ozs7O0lBQWpCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBb0I7Ozs7O0lBQXBCO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1QkFBTTs7Ozs7SUFBTjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUMvQjtJQUVEOztPQUVHOzs7OztJQUNILCtCQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMvQjtpQkFsTkg7SUFtTkMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUxELGtCQTBMQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0IH0gZnJvbSAnQGFuZ3VsYXJsaWNpb3VzL3J1bGVzLWVuZ2luZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250ZXh0U3RhdGUgfSBmcm9tICdAYW5ndWxhcmxpY2lvdXMvcnVsZXMtZW5naW5lJztcclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gJy4vSUFjdGlvbic7XHJcbmltcG9ydCB7IEFjdGlvblJlc3VsdCB9IGZyb20gJy4vQWN0aW9uUmVzdWx0JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBmcmFtZXdvcmsgQWN0aW9uIGNsYXNzIHRoYXQgcHJvdmlkZXMgdGhlIHBpcGVsaW5lIG9mIHByZS9wb3N0XHJcbiAqIGV4ZWN1dGlvbiBtZXRob2RzLiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIFtUZW1wbGF0ZSBNZXRob2RdIHBhdHRlcm4uXHJcbiAqXHJcbiAqIFRoZSBwcmUtZXhlY3V0ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgaW1wbGVtZW50ZWQgYXJlOlxyXG4gKlx0XHQxLiBzdGFydCgpO1xyXG4gKlx0XHQyLiBhdWRpdCgpO1xyXG4gKlx0XHQzLiBwcmVWYWxpZGF0ZUFjdGlvbigpO1xyXG4gKlx0XHQ0LiBldmFsdWF0ZVJ1bGVzKCk7XHJcbiAqXHRcdDUuIHBvc3RWYWxpZGF0ZUFjdGlvbigpO1xyXG4gKlx0XHQ2LiBwcmVFeGVjdXRlQWN0aW9uKCk7XHJcbiAqXHJcbiAqSWYgdGhlIHN0YXR1cyBvZiBhY3Rpb24gaXMgZ29vZCwgdGhlIGJ1c2luZXNzIGxvZ2ljIHdpbGwgYmUgZXhlY3V0ZWQgdXNpbmcgdGhlOlxyXG4gKlx0XHQ3LiBwcm9jZXNzQWN0aW9uKCk7XHJcbiAqXHJcbiAqIFRoZSBwb3N0LWV4ZWN1dGlvbiBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgaW1wbGVtZW50ZWQgYXJlOlxyXG4gKlx0XHQ4LiBwb3N0RXhlY3V0ZUFjdGlvbigpO1xyXG4gKlx0XHQ5LiB2YWxpZGF0ZUFjdGlvblJlc3VsdCgpO1xyXG4gKlx0XHQxMC4gZmluaXNoKCk7XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWN0aW9uIGltcGxlbWVudHMgSUFjdGlvbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYWN0aW9uIGlzIGFsbG93ZWQgZXhlY3V0aW9uLiBJZiB0aGVyZSBhcmUgYW55IHJ1bGUgXHJcbiAgICogdmlvbGF0aW9ucyBpbiB0aGUgdmFsaWRhdGlvbiBjb250ZXh0LCB0aGUgYWN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIFxyXG4gICAqIGV4ZWN1dGUuIFxyXG4gICAqL1xyXG4gIGFsbG93RXhlY3V0aW9uID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbGlkYXRpb24gY29udGV4dCBmb3IgdGhlIHNwZWNpZmllZCBhY3Rpb24gaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbkNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0ID0gbmV3IFZhbGlkYXRpb25Db250ZXh0KCk7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogVGhlIHJlc3VsdCBvZiB0aGUgYWN0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBbVW5rbm93bl0sIHVudGlsIHRoZSBhY3Rpb25cclxuICAgKiBpcyBleGVjdXRlZC5cclxuICAgKi9cclxuICBhY3Rpb25SZXN1bHQ6IEFjdGlvblJlc3VsdCA9IEFjdGlvblJlc3VsdC5Vbmtub3duO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGVmYXVsdCBjb25zdHJ1Y3RvciBmb3IgdGhlIGNsYXNzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRvIHJldHJpZXZlIHRoZSBbVmFsaWRhdGlvbkNvbnRleHRdIGZvciB0aGUgc3BlY2lmaWVkIGFjdGlvbi5cclxuICAgKi9cclxuICBnZXQgdmFsaWRhdGlvbkNvbnRleHQoKTogVmFsaWRhdGlvbkNvbnRleHQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRpb25Db250ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIGV4ZWN1dGUgYSBjb25jcmV0ZSBhY3Rpb24uIEEgY29uY3JldGUgYWN0aW9uIG11c3QgaW1wbGVtZW50XHJcbiAgICogdGhlIFtwcm9jZXNzQWN0aW9uXSBhbmQgdGhlIFt2YWxpZGF0ZUFjdGlvblJlc3VsdF0gZnVuY3Rpb25zIHRvIGJlIGEgdmFsaWRcclxuICAgKiBhY3Rpb24uXHJcbiAgICovXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQcmVwYXJpbmcgdG8gZXhlY3V0ZSBhY3Rpb24uJyk7XHJcbiAgICB0aGlzLnByb2Nlc3NBY3Rpb25QaXBlbGluZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHByb2Nlc3MgdGhlIGFjdGlvbiBwaXBlbGluZSBtZXRob2RzLiBcclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NBY3Rpb25QaXBlbGluZSgpIHtcclxuICAgIHRoaXMuc3RhcnRBY3Rpb24oKTtcclxuICAgIGlmICh0aGlzLmFsbG93RXhlY3V0aW9uKSB7XHJcbiAgICAgIHRoaXMucHJvY2Vzc0FjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maW5pc2hBY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIG1ldGhvZCB0byBjYWxsIHRoZSBwaXBlbGluZSBtZXRob2RzIGZvciB0aGUgW3N0YXJ0XSBvciBiZWdpbm5pbmcgXHJcbiAgICogcHJvY2VzcyBvZiB0aGUgYWN0aW9uIHBpcGVsaW5lLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhcnRBY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgYWN0aW9uLicpO1xyXG4gICAgdGhpcy5zdGFydCgpO1xyXG4gICAgdGhpcy5hdWRpdCgpO1xyXG4gICAgdGhpcy5wcmVWYWxpZGF0ZUFjdGlvbigpO1xyXG4gICAgdGhpcy5ldmFsdWF0ZVJ1bGVzKCk7XHJcbiAgICB0aGlzLnBvc3RWYWxpZGF0ZUFjdGlvbigpO1xyXG4gICAgdGhpcy5wcmVFeGVjdXRlQWN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gZXhlY3V0ZSB0aGUgbWV0aG9kcyBhdCB0aGUgZW5kIG9mIHRoZSBhY3Rpb24gcGlwZWxpbmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaW5pc2hBY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRmluaXNoaW5nIGFjdGlvbi4nKTtcclxuICAgIHRoaXMucG9zdEV4ZWN1dGVBY3Rpb24oKTtcclxuICAgIHRoaXMudmFsaWRhdGVBY3Rpb25SZXN1bHQoKTtcclxuICAgIHRoaXMuZmluaXNoKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gcHJvY2VzcyB0aGUgYWN0aW9uLiBUaGlzIHdpbGwgb25seSBiZSBjYWxsZWQgaWYgdGhlIGFjdGlvbidzIFxyXG4gICAqIHZhbGlkYXRpb24gY29udGV4dCBpcyBpbiBhIHZhbGlkIHN0YXRlIChubyBydWxlIHZpb2xhdGlvbnMpLlxyXG4gICAqIFxyXG4gICAqIEFsbCBjb25jcmV0ZSBhY3Rpb25zIGFyZSByZXF1aXJlZCB0byBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZSBbcGVyZm9ybUFjdGlvbl0gXHJcbiAgICogbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGZvciB0aGlzIHBhcnQgb2YgdGhlIGFjdGlvbiBwaXBlbGluZS5cclxuICAgKi9cclxuICBwcml2YXRlIHByb2Nlc3NBY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBhY3Rpb24uJyk7XHJcbiAgICB0aGlzLnBlcmZvcm1BY3Rpb24oKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBhY3Rpb24gbXVzdCBpbXBsZW1lbnQgdGhpcyBmdW5jdGlvbi4gVGhpcyBpcyB3aGVyZSB5b3VyXHJcbiAgICogW2J1c2luZXNzIGxvZ2ljXSBzaG91bGQgYmUgaW1wbGVtZW50ZWQuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGlmXHJcbiAgICogdGhlcmUgYXJlIG5vIHZhbGlkYXRpb24gcnVsZSBleGNlcHRpb25zLlxyXG4gICAqL1xyXG4gIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICdOb3QgaW1wbGVtZW50ZWQuIFJlcXVpcmVzIGltcGxlbWVudGF0aW9uIGluIGNvbmNyZXRlIGFjdGlvbi4nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGUvSW1wbGVtZW50IHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSBhbiBlYXJseSBvcGVyYXRpb24gaW4gdGhlIGFjdGlvbiBwaXBlbGluZS5cclxuICAgKiBUaGlzIGZ1bmN0aW9uIGJlbG9uZ3MgdG8gdGhlIHByZS1leGVjdXRlIGZ1bmN0aW9ucyBvZiB0aGUgYWN0aW9uIHBpcGVsaW5lLlxyXG4gICAqL1xyXG4gIHN0YXJ0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIGFjdGlvbi4nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIHRvIHBlcmZvcm0gYW55IGF1ZGl0aW5nIGZlYXR1cmVzIGR1cmluZyB0aGUgcHJlLWV4ZWN0dWlvbiBvZiB0aGVcclxuICAgKiBidXNpbmVzcyBsb2dpYy5cclxuICAgKi9cclxuICBhdWRpdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdBdWRpdGluZyBhY3Rpb24uJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBzZXR1cCBhbnkgdmFsaWRhdGlvbiBydWxlcyBiZWZvcmUgdGhlIHZhbGlkYXRpb24gaGFwcGVucy4gVGhpc1xyXG4gICAqIGZ1bmN0aW9uIGlzIGNhbGxlZCBiZWZvcmUgW2V2YWx1YXRlUnVsZXNdLlxyXG4gICAqL1xyXG4gIHByZVZhbGlkYXRlQWN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1ByZS12YWxpZGF0aW5nIGFjdGlvbi4nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGltcGxlbWVudCB0aGUgZXhlY3V0aW9uIG9mIHRoZSB2YWxpZGF0aW9uIGFuZCBidXNpbmVzcyBydWxlcy4gVGhpc1xyXG4gICAqIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciBbcHJlVmFsaWRhdGVBY3Rpb25dLlxyXG4gICAqL1xyXG4gIGV2YWx1YXRlUnVsZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXZhbHVhdGluZyBhY3Rpb24gcnVsZXMuJyk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy52YWxpZGF0ZUFjdGlvbigpO1xyXG4gICAgaWYgKGNvbnRleHQuaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmFsbG93RXhlY3V0aW9uID0gdHJ1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udGV4dC5zdGF0ZSA9IFZhbGlkYXRpb25Db250ZXh0U3RhdGUuU3VjY2VzcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWxsb3dFeGVjdXRpb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udGV4dC5zdGF0ZSA9IFZhbGlkYXRpb25Db250ZXh0U3RhdGUuRmFpbHVyZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0byBkZXRlcm1pbmUgb3IgaGFuZGxlIHRoZSByZXN1bHRzIG9mIHRoZSBydWxlIGV2YWxhdGlvbi4gVGhpc1xyXG4gICAqIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgW2V2YWx1YXRlUnVsZXNdLlxyXG4gICAqL1xyXG4gIHBvc3RWYWxpZGF0ZUFjdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQb3N0LVZhbGlkYXRpb24gb2YgYWN0aW9uLicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gcGVyZm9ybSBhbnkgc2V0dXAgYmVmb3JlIHRoZSBhY3Rpb24gaXMgZXhlY3V0ZWQuXHJcbiAgICovXHJcbiAgcHJlRXhlY3V0ZUFjdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQcmUtZXhlY3V0aW9uIG9mIGFjdGlvbi4nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGZ1bmNpdG9uIHRvIGV2YWx1YXRlIHRoZSBhY3Rpb24gYWZ0ZXIgdGhlIHRoZSBidXNpbmVzcyBsb2dpYyB3aXRoaW5cclxuICAgKiB0aGUgW3BlcmZvcm1BY3Rpb25dIGhhcyBleGVjdXRlZC5cclxuICAgKi9cclxuICBwb3N0RXhlY3V0ZUFjdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdQb3N0LWV4ZWN1dGlvbiBvZiBhY3Rpb24nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gcmVxdWlyZXMgaW1wbGVtZW50YXRpb24gdG8gZGV0ZXJtaW4gdGhlIHN0YXRlIGFuZCByZXN1bHQgb2YgdGhlIGFjdGlvbi5cclxuICAgKiBVc2UgdGhpcyBvcHBvcnR1bml0eSB0byB2YWxpZGF0ZSB0aGUgcmVzdWx0cy5cclxuICAgKi9cclxuICB2YWxpZGF0ZUFjdGlvblJlc3VsdCgpOiBBY3Rpb25SZXN1bHQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25jcmV0ZSBhY3Rpb25zIHJlcXVpcmVkIHRvIGltcGxlbWVudCB0aGlzIG1ldGhvZC4nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIHBlcmZvcm0gYW55IGNsZWFudXAsIGxvZ2dpbmcsIG9yIGRpc3Bvc2luZyBvZiByZXNvdXJjZXMgdXNlZFxyXG4gICAqIGJ5IHRoZSBhY3Rpb24uIFRoaXMgaXMgdGhlIGxhc3QgZnVuY3Rpb24gY2FsbGVkIGR1cmluZyB0aGUgcGlwZWxpbmUuXHJcbiAgICovXHJcbiAgZmluaXNoKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0ZpbmlzaCBhY3Rpb24uJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnQgdGhpcyBmdW5jdGlvbiB0byBwZXJmb3JtIHZhbGlkYXRpb24gb2YgYnVzaW5lc3MgcnVsZXMgYW5kIGRhdGEuXHJcbiAgICovXHJcbiAgdmFsaWRhdGVBY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnVmFsaWRhdGluZyB0aGUgYWN0aW9uLicpO1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvbkNvbnRleHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==