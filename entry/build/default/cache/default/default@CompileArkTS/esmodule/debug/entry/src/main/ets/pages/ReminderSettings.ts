if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ReminderSettings_Params {
    morningOn?: boolean;
    morningHour?: number;
    morningMinute?: number;
    noonOn?: boolean;
    noonHour?: number;
    noonMinute?: number;
    eveningOn?: boolean;
    eveningHour?: number;
    eveningMinute?: number;
}
import promptAction from "@ohos:promptAction";
import router from "@ohos:router";
import type common from "@ohos:app.ability.common";
import storageUtil from "@normalized:N&&&entry/src/main/ets/common/utils/StorageUtil&";
import { startReminderCheck } from "@normalized:N&&&entry/src/main/ets/common/utils/ReminderService&";
// 定义接口，避免直接使用字面量类型
interface TimePickerParams {
    hour: number;
    minute: number;
    type: string;
}
class ReminderSettings extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__morningOn = new ObservedPropertySimplePU(true, this, "morningOn");
        this.__morningHour = new ObservedPropertySimplePU(8, this, "morningHour");
        this.__morningMinute = new ObservedPropertySimplePU(0, this, "morningMinute");
        this.__noonOn = new ObservedPropertySimplePU(false, this, "noonOn");
        this.__noonHour = new ObservedPropertySimplePU(12, this, "noonHour");
        this.__noonMinute = new ObservedPropertySimplePU(0, this, "noonMinute");
        this.__eveningOn = new ObservedPropertySimplePU(false, this, "eveningOn");
        this.__eveningHour = new ObservedPropertySimplePU(18, this, "eveningHour");
        this.__eveningMinute = new ObservedPropertySimplePU(0
        // 生命周期回调：用于接收返回的时间
        , this, "eveningMinute");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ReminderSettings_Params) {
        if (params.morningOn !== undefined) {
            this.morningOn = params.morningOn;
        }
        if (params.morningHour !== undefined) {
            this.morningHour = params.morningHour;
        }
        if (params.morningMinute !== undefined) {
            this.morningMinute = params.morningMinute;
        }
        if (params.noonOn !== undefined) {
            this.noonOn = params.noonOn;
        }
        if (params.noonHour !== undefined) {
            this.noonHour = params.noonHour;
        }
        if (params.noonMinute !== undefined) {
            this.noonMinute = params.noonMinute;
        }
        if (params.eveningOn !== undefined) {
            this.eveningOn = params.eveningOn;
        }
        if (params.eveningHour !== undefined) {
            this.eveningHour = params.eveningHour;
        }
        if (params.eveningMinute !== undefined) {
            this.eveningMinute = params.eveningMinute;
        }
    }
    updateStateVars(params: ReminderSettings_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__morningOn.purgeDependencyOnElmtId(rmElmtId);
        this.__morningHour.purgeDependencyOnElmtId(rmElmtId);
        this.__morningMinute.purgeDependencyOnElmtId(rmElmtId);
        this.__noonOn.purgeDependencyOnElmtId(rmElmtId);
        this.__noonHour.purgeDependencyOnElmtId(rmElmtId);
        this.__noonMinute.purgeDependencyOnElmtId(rmElmtId);
        this.__eveningOn.purgeDependencyOnElmtId(rmElmtId);
        this.__eveningHour.purgeDependencyOnElmtId(rmElmtId);
        this.__eveningMinute.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__morningOn.aboutToBeDeleted();
        this.__morningHour.aboutToBeDeleted();
        this.__morningMinute.aboutToBeDeleted();
        this.__noonOn.aboutToBeDeleted();
        this.__noonHour.aboutToBeDeleted();
        this.__noonMinute.aboutToBeDeleted();
        this.__eveningOn.aboutToBeDeleted();
        this.__eveningHour.aboutToBeDeleted();
        this.__eveningMinute.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 简单起见，分三种传入
    private __morningOn: ObservedPropertySimplePU<boolean>;
    get morningOn() {
        return this.__morningOn.get();
    }
    set morningOn(newValue: boolean) {
        this.__morningOn.set(newValue);
    }
    private __morningHour: ObservedPropertySimplePU<number>;
    get morningHour() {
        return this.__morningHour.get();
    }
    set morningHour(newValue: number) {
        this.__morningHour.set(newValue);
    }
    private __morningMinute: ObservedPropertySimplePU<number>;
    get morningMinute() {
        return this.__morningMinute.get();
    }
    set morningMinute(newValue: number) {
        this.__morningMinute.set(newValue);
    }
    private __noonOn: ObservedPropertySimplePU<boolean>;
    get noonOn() {
        return this.__noonOn.get();
    }
    set noonOn(newValue: boolean) {
        this.__noonOn.set(newValue);
    }
    private __noonHour: ObservedPropertySimplePU<number>;
    get noonHour() {
        return this.__noonHour.get();
    }
    set noonHour(newValue: number) {
        this.__noonHour.set(newValue);
    }
    private __noonMinute: ObservedPropertySimplePU<number>;
    get noonMinute() {
        return this.__noonMinute.get();
    }
    set noonMinute(newValue: number) {
        this.__noonMinute.set(newValue);
    }
    private __eveningOn: ObservedPropertySimplePU<boolean>;
    get eveningOn() {
        return this.__eveningOn.get();
    }
    set eveningOn(newValue: boolean) {
        this.__eveningOn.set(newValue);
    }
    private __eveningHour: ObservedPropertySimplePU<number>;
    get eveningHour() {
        return this.__eveningHour.get();
    }
    set eveningHour(newValue: number) {
        this.__eveningHour.set(newValue);
    }
    private __eveningMinute: ObservedPropertySimplePU<number>;
    get eveningMinute() {
        return this.__eveningMinute.get();
    }
    set eveningMinute(newValue: number) {
        this.__eveningMinute.set(newValue);
    }
    // 生命周期回调：用于接收返回的时间
    aboutToAppear() {
        const context = getContext(this) as common.UIAbilityContext;
        storageUtil.init(context); // 初始化 storageUtil
        // 读取存储的数据，更新状态
        this.morningOn = storageUtil.loadBoolean('morningOn', true);
        this.morningHour = storageUtil.loadNumber('morningHour', 8);
        this.morningMinute = storageUtil.loadNumber('morningMinute', 0);
        this.noonOn = storageUtil.loadBoolean('noonOn', false);
        this.noonHour = storageUtil.loadNumber('noonHour', 12);
        this.noonMinute = storageUtil.loadNumber('noonMinute', 0);
        this.eveningOn = storageUtil.loadBoolean('eveningOn', false);
        this.eveningHour = storageUtil.loadNumber('eveningHour', 18);
        this.eveningMinute = storageUtil.loadNumber('eveningMinute', 0);
        // 接收时间选择页回传的值
        const params = router.getParams() as TimePickerParams;
        if (params !== undefined) { // 规避第一次
            if (params?.type) {
                if (params.type === 'morning') {
                    this.morningHour = params.hour;
                    this.morningMinute = params.minute;
                    storageUtil.save('morningHour', params.hour);
                    storageUtil.save('morningMinute', params.minute);
                }
                else if (params.type === 'noon') {
                    this.noonHour = params.hour;
                    this.noonMinute = params.minute;
                    storageUtil.save('noonHour', params.hour);
                    storageUtil.save('noonMinute', params.minute);
                }
                else if (params.type === 'evening') {
                    this.eveningHour = params.hour;
                    this.eveningMinute = params.minute;
                    storageUtil.save('eveningHour', params.hour);
                    storageUtil.save('eveningMinute', params.minute);
                }
            }
        }
        // 启动定时提醒检查
        startReminderCheck(this.morningOn, this.morningHour, this.morningMinute, this.noonOn, this.noonHour, this.noonMinute, this.eveningOn, this.eveningHour, this.eveningMinute);
    }
    // 两个小函数
    getHour(type: string): number {
        if (type === 'morning')
            return this.morningHour;
        if (type === 'noon')
            return this.noonHour;
        if (type === 'evening')
            return this.eveningHour;
        return 0;
    }
    getMinute(type: string): number {
        if (type === 'morning')
            return this.morningMinute;
        if (type === 'noon')
            return this.noonMinute;
        if (type === 'evening')
            return this.eveningMinute;
        return 0;
    }
    // build
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(16);
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#f5f5f5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('提醒设置');
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.padding(16);
        }, Text);
        Text.pop();
        // 改动1：传入 getter 和 setter，而不是 boolean 值
        this.buildReminderCard.bind(this)('早晨提醒', 'morning', () => this.morningOn, val => this.morningOn = val);
        this.buildReminderCard.bind(this)('中午提醒', 'noon', () => this.noonOn, val => this.noonOn = val);
        this.buildReminderCard.bind(this)('晚上提醒', 'evening', () => this.eveningOn, val => this.eveningOn = val);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 占位空白，把按钮推到底部
            Column.create();
            // 占位空白，把按钮推到底部
            Column.layoutWeight(1);
        }, Column);
        // 占位空白，把按钮推到底部
        Column.pop();
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
                router.pushUrl({ url: 'pages/Index' });
            });
            // ===== 跳转卡片按钮 =====
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('返回主页');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        // ===== 跳转卡片按钮 =====
        Column.pop();
        Column.pop();
    }
    //  改动2：bindVal -> getVal()，通过函数实时读取状态
    //  改动3：onToggle(!getVal()) 替代 !bindVal，修复状态不更新问题
    // 一个组件
    buildReminderCard(subtitle: string, type: string, getVal: () => boolean, setVal: (val: boolean) => void, parent = null): void {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.alignItems(VerticalAlign.Center);
            Row.padding(12);
            Row.backgroundColor({ "id": 125831026, "type": 10001, params: [], "bundleName": "com.example.harmonyos_clock_demo", "moduleName": "entry" });
            Row.borderRadius(12);
            Row.margin({ top: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧时间+描述
            Column.create();
            // 左侧时间+描述
            Column.alignItems(HorizontalAlign.Start);
            // 左侧时间+描述
            Column.flexGrow(1);
            // 左侧时间+描述
            Column.justifyContent(FlexAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 新增：点击 Text 可跳转到 TimePickerPage
            Text.create(`${this.getHour(type).toString().padStart(2, '0')}:${this.getMinute(type).toString().padStart(2, '0')}`);
            // 新增：点击 Text 可跳转到 TimePickerPage
            Text.fontSize(24);
            // 新增：点击 Text 可跳转到 TimePickerPage
            Text.fontWeight(FontWeight.Medium);
            // 新增：点击 Text 可跳转到 TimePickerPage
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/TimePickerPage',
                    params: {
                        hour: this.getHour(type),
                        minute: this.getMinute(type),
                        type: type
                    }
                });
            });
        }, Text);
        // 新增：点击 Text 可跳转到 TimePickerPage
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(subtitle);
            Text.fontSize(14);
            Text.fontColor('#888888');
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        // 左侧时间+描述
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧开关
            Toggle.create({
                type: ToggleType.Switch,
                isOn: getVal()
            });
            // 右侧开关
            Toggle.onClick(() => {
                const newVal = !getVal();
                setVal(newVal);
                this.showToast(subtitle.replace('提醒', ''), newVal);
                // 保存
                storageUtil.save(`${type}On`, newVal);
            });
            // 右侧开关
            Toggle.padding(10);
            // 右侧开关
            Toggle.backgroundColor(getVal() ? '#ffbadabb' : '#f2f2f2');
            // 右侧开关
            Toggle.borderRadius(8);
        }, Toggle);
        // 右侧开关
        Toggle.pop();
        Row.pop();
    }
    showToast(label: string, value: boolean) {
        promptAction.showToast({ message: `${label}提醒：${value ? '已开启' : '已关闭'}` });
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ReminderSettings";
    }
}
registerNamedRoute(() => new ReminderSettings(undefined, {}), "", { bundleName: "com.example.harmonyos_clock_demo", moduleName: "entry", pagePath: "pages/ReminderSettings", pageFullPath: "entry/src/main/ets/pages/ReminderSettings", integratedHsp: "false", moduleType: "followWithHap" });
