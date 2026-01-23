import preferences from "@ohos:data.preferences";
import type common from "@ohos:app.ability.common";
class StorageUtil {
    private time: preferences.Preferences | undefined = undefined;
    init(context: common.UIAbilityContext) {
        this.time = preferences.getPreferencesSync(context, { name: 'reminder_settings' });
    }
    save(key: string, value: number | boolean) {
        this.time?.putSync(key, value);
        this.time?.flushSync();
    }
    loadNumber(key: string, defaultVal: number): number {
        const result = this.time?.getSync(key, defaultVal);
        return typeof result === 'number' ? result : defaultVal;
    }
    loadBoolean(key: string, defaultVal: boolean): boolean {
        const result = this.time?.getSync(key, defaultVal);
        return typeof result === 'boolean' ? result : defaultVal;
    }
}
const storageUtil = new StorageUtil();
export default storageUtil;
