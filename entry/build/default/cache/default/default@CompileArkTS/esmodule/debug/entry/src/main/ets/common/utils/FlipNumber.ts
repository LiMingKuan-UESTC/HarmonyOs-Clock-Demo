if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FlipNumber_Params {
    value?: string;
    displayValue?: string;
}
export class FlipNumber extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__value = new SynchedPropertySimpleOneWayPU(params.value, this, "value");
        this.__displayValue = new ObservedPropertySimplePU('', this, "displayValue");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FlipNumber_Params) {
        if (params.displayValue !== undefined) {
            this.displayValue = params.displayValue;
        }
    }
    updateStateVars(params: FlipNumber_Params) {
        this.__value.reset(params.value);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__value.purgeDependencyOnElmtId(rmElmtId);
        this.__displayValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__value.aboutToBeDeleted();
        this.__displayValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __value: SynchedPropertySimpleOneWayPU<string>;
    get value() {
        return this.__value.get();
    }
    set value(newValue: string) {
        this.__value.set(newValue);
    }
    private __displayValue: ObservedPropertySimplePU<string>;
    get displayValue() {
        return this.__displayValue.get();
    }
    set displayValue(newValue: string) {
        this.__displayValue.set(newValue);
    }
    aboutToAppear() {
        this.displayValue = this.value;
    }
    aboutToUpdate() {
        this.displayValue = this.value;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.displayValue);
            Text.fontSize(56);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
