if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TimePickerPage_Params {
    selectedTime?: Date;
    type?: string;
}
import router from "@ohos:router";
interface TimePickerType {
    hour: number;
    minute: number;
    type: string; // 只接收 type
}
class TimePickerPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectedTime = new ObservedPropertyObjectPU(new Date(), this, "selectedTime");
        this.type = '' // 用来保存 type
        ;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TimePickerPage_Params) {
        if (params.selectedTime !== undefined) {
            this.selectedTime = params.selectedTime;
        }
        if (params.type !== undefined) {
            this.type = params.type;
        }
    }
    updateStateVars(params: TimePickerPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedTime.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedTime.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectedTime: ObservedPropertyObjectPU<Date>;
    get selectedTime() {
        return this.__selectedTime.get();
    }
    set selectedTime(newValue: Date) {
        this.__selectedTime.set(newValue);
    }
    private type: string; // 用来保存 type
    aboutToAppear() {
        const params = router.getParams() as TimePickerType;
        if (params) {
            this.type = params.type ?? ''; // 保存 type
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 整体页面布局
            Column.create();
            // 整体页面布局
            Column.width('100%');
            // 整体页面布局
            Column.height('100%');
            // 整体页面布局
            Column.alignItems(HorizontalAlign.Center);
            // 整体页面布局
            Column.justifyContent(FlexAlign.Center);
            // 整体页面布局
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 时间选择器
            TimePicker.create({ selected: this.selectedTime });
            // 时间选择器
            TimePicker.onChange((value: TimePickerResult) => {
                const newTime = new Date();
                newTime.setHours(value.hour);
                newTime.setMinutes(value.minute);
                this.selectedTime = newTime;
                console.log(`选择时间: ${value.hour}:${value.minute}`);
            });
            // 时间选择器
            TimePicker.width(250);
            // 时间选择器
            TimePicker.height(160);
            // 时间选择器
            TimePicker.backgroundColor('#ffedf5f5');
            // 时间选择器
            TimePicker.borderRadius(12);
        }, TimePicker);
        // 时间选择器
        TimePicker.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 当前选中时间展示
            Text.create(`当前时间: ${this.selectedTime.getHours().toString().padStart(2, '0')} : ${this.selectedTime.getMinutes().toString().padStart(2, '0')}`);
            // 当前选中时间展示
            Text.fontSize(16);
            // 当前选中时间展示
            Text.margin({ top: 20 });
        }, Text);
        // 当前选中时间展示
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 确定按钮
            Button.createWithLabel('确定');
            // 确定按钮
            Button.margin({ top: 24 });
            // 确定按钮
            Button.width(100);
            // 确定按钮
            Button.height(40);
            // 确定按钮
            Button.backgroundColor('#ffbadabb');
            // 确定按钮
            Button.fontColor({ "id": 125831026, "type": 10001, params: [], "bundleName": "com.example.harmonyos_clock_demo", "moduleName": "entry" });
            // 确定按钮
            Button.borderRadius(8);
            // 确定按钮
            Button.onClick(() => {
                const hour = this.selectedTime.getHours();
                const minute = this.selectedTime.getMinutes();
                router.replaceUrl({
                    url: 'pages/ReminderSettings',
                    params: {
                        hour: hour,
                        minute: minute,
                        type: this.type // 返回时带上 type
                    }
                });
            });
        }, Button);
        // 确定按钮
        Button.pop();
        // 整体页面布局
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TimePickerPage";
    }
}
registerNamedRoute(() => new TimePickerPage(undefined, {}), "", { bundleName: "com.example.harmonyos_clock_demo", moduleName: "entry", pagePath: "pages/TimePickerPage", pageFullPath: "entry/src/main/ets/pages/TimePickerPage", integratedHsp: "false", moduleType: "followWithHap" });
