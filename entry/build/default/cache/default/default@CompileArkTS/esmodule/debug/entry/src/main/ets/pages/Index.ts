if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    hours?: string;
    minutes?: string;
}
import router from "@ohos:router";
import { FlipNumber } from "@normalized:N&&&entry/src/main/ets/common/utils/FlipNumber&";
import { requestNotificationPermission } from "@normalized:N&&&entry/src/main/ets/common/utils/NotificationUtil&";
import type common from "@ohos:app.ability.common";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__hours = new ObservedPropertySimplePU('00', this, "hours");
        this.__minutes = new ObservedPropertySimplePU('00', this, "minutes");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.hours !== undefined) {
            this.hours = params.hours;
        }
        if (params.minutes !== undefined) {
            this.minutes = params.minutes;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__hours.purgeDependencyOnElmtId(rmElmtId);
        this.__minutes.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__hours.aboutToBeDeleted();
        this.__minutes.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __hours: ObservedPropertySimplePU<string>;
    get hours() {
        return this.__hours.get();
    }
    set hours(newValue: string) {
        this.__hours.set(newValue);
    }
    private __minutes: ObservedPropertySimplePU<string>;
    get minutes() {
        return this.__minutes.get();
    }
    set minutes(newValue: string) {
        this.__minutes.set(newValue);
    }
    aboutToAppear() {
        this.updateTime();
        setInterval(() => {
            this.updateTime();
        }, 1000);
    }
    updateTime() {
        const now = new Date();
        this.hours = now.getHours().toString().padStart(2, '0');
        this.minutes = now.getMinutes().toString().padStart(2, '0');
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Start);
            Column.alignItems(HorizontalAlign.Center);
            Column.backgroundColor('#f2f2f2');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // ===== 时钟展示区域 =====
            Row.create();
            // ===== 时钟展示区域 =====
            Row.width('80%');
            // ===== 时钟展示区域 =====
            Row.margin({ top: 80, bottom: 80 });
            // ===== 时钟展示区域 =====
            Row.justifyContent(FlexAlign.Center);
            // ===== 时钟展示区域 =====
            Row.padding(24);
            // ===== 时钟展示区域 =====
            Row.backgroundColor('#FFFFFF');
            // ===== 时钟展示区域 =====
            Row.borderRadius(16);
            // ===== 时钟展示区域 =====
            Row.shadow({ radius: 10, color: '#00000022', offsetX: 0, offsetY: 4 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new FlipNumber(this, { value: this.hours }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 33, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            value: this.hours
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        value: this.hours
                    });
                }
            }, { name: "FlipNumber" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(':');
            Text.fontSize(48);
            Text.fontWeight(FontWeight.Bold);
            Text.padding({ left: 8, right: 8 });
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new FlipNumber(this, { value: this.minutes }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 38, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            value: this.minutes
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        value: this.minutes
                    });
                }
            }, { name: "FlipNumber" });
        }
        // ===== 时钟展示区域 =====
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // ===== 跳转卡片按钮 =====
            Column.create();
            // ===== 跳转卡片按钮 =====
            Column.width('60%');
            // ===== 跳转卡片按钮 =====
            Column.padding(20);
            // ===== 跳转卡片按钮 =====
            Column.backgroundColor('#FFFFFF');
            // ===== 跳转卡片按钮 =====
            Column.borderRadius(16);
            // ===== 跳转卡片按钮 =====
            Column.shadow({ radius: 10, color: '#00000022', offsetX: 0, offsetY: 4 });
            // ===== 跳转卡片按钮 =====
            Column.onClick(() => {
                const context = getContext(this) as common.UIAbilityContext;
                requestNotificationPermission(context);
                router.pushUrl({ url: 'pages/ReminderSettings' });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('提醒设置');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('添加 / 编辑闹钟');
            Text.fontSize(14);
            Text.fontColor('#666666');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // ===== 跳转卡片按钮 =====
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.harmonyos_clock_demo", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
