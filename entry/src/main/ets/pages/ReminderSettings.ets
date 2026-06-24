// Copyright 2026 LI MingKuan
//
// 原项目：HarmonyOs-Clock-Demo
// 作者：LiMingKuan-UESTC
// 仓库地址：https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo
// ReminderSettings.ets

import promptAction from '@ohos.promptAction'
import router from '@ohos.router'
import { common } from '@kit.AbilityKit'

import storageUtil from '../common/utils/StorageUtil' // 用来保存
import { startReminderCheck } from '../common/utils/ReminderService';  // 引入提醒服务

// 定义接口，避免直接使用字面量类型
interface TimePickerParams {
  hour: number
  minute: number
  type: string
}

@Entry
@Component
struct ReminderSettings {
  // 简单起见，分三种传入
  @State morningOn: boolean = true
  @State morningHour: number = 8
  @State morningMinute: number = 0

  @State noonOn: boolean = false
  @State noonHour: number = 12
  @State noonMinute: number = 0

  @State eveningOn: boolean = false
  @State eveningHour: number = 18
  @State eveningMinute: number = 0


  // 生命周期回调：用于接收返回的时间
  aboutToAppear() {
    const context = getContext(this) as common.UIAbilityContext
    storageUtil.init(context)  // 初始化 storageUtil

    // 读取存储的数据，更新状态
    this.morningOn = storageUtil.loadBoolean('morningOn', true)
    this.morningHour = storageUtil.loadNumber('morningHour', 8)
    this.morningMinute = storageUtil.loadNumber('morningMinute', 0)

    this.noonOn = storageUtil.loadBoolean('noonOn', false)
    this.noonHour = storageUtil.loadNumber('noonHour', 12)
    this.noonMinute = storageUtil.loadNumber('noonMinute', 0)

    this.eveningOn = storageUtil.loadBoolean('eveningOn', false)
    this.eveningHour = storageUtil.loadNumber('eveningHour', 18)
    this.eveningMinute = storageUtil.loadNumber('eveningMinute', 0)

    // 接收时间选择页回传的值
    const params = router.getParams() as TimePickerParams
    if(params !== undefined) { // 规避第一次
      if (params?.type) {
        if (params.type === 'morning') {
          this.morningHour = params.hour
          this.morningMinute = params.minute
          storageUtil.save('morningHour', params.hour)
          storageUtil.save('morningMinute', params.minute)
        } else if (params.type === 'noon') {
          this.noonHour = params.hour
          this.noonMinute = params.minute
          storageUtil.save('noonHour', params.hour)
          storageUtil.save('noonMinute', params.minute)
        } else if (params.type === 'evening') {
          this.eveningHour = params.hour
          this.eveningMinute = params.minute
          storageUtil.save('eveningHour', params.hour)
          storageUtil.save('eveningMinute', params.minute)
        }
      }
    }

    // 启动定时提醒检查
    startReminderCheck(
      this.morningOn, this.morningHour, this.morningMinute,
      this.noonOn, this.noonHour, this.noonMinute,
      this.eveningOn, this.eveningHour, this.eveningMinute
    );
  }

  // 两个小函数
  getHour(type: string): number {
    if (type === 'morning') return this.morningHour
    if (type === 'noon') return this.noonHour
    if (type === 'evening') return this.eveningHour
    return 0
  }

  getMinute(type: string): number {
    if (type === 'morning') return this.morningMinute
    if (type === 'noon') return this.noonMinute
    if (type === 'evening') return this.eveningMinute
    return 0
  }

  // build
  build() {
    Column() {
      Text('提醒设置')
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .padding(16)

      // 改动1：传入 getter 和 setter，而不是 boolean 值
      this.buildReminderCard('早晨提醒', 'morning', () => this.morningOn, val => this.morningOn = val)
      this.buildReminderCard('中午提醒', 'noon', () => this.noonOn, val => this.noonOn = val)
      this.buildReminderCard('晚上提醒', 'evening', () => this.eveningOn, val => this.eveningOn = val)

      // 占位空白，把按钮推到底部
      Column() {}.layoutWeight(1)

      // ===== 跳转卡片按钮 =====
      Column() {
        Text('返回主页')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)
      }
      .width('60%')
      .padding(20)
      .backgroundColor('#FFFFFF')
      .borderRadius(16)
      .shadow({ radius: 10, color: '#00000022', offsetX: 0, offsetY: 4 })
      .onClick(() => {
        router.pushUrl({ url: 'pages/Index' })
      })
      .alignItems(HorizontalAlign.Center)
    }
    .padding(16)
    .width('100%')
    .height('100%')
    .backgroundColor('#f5f5f5')
  }

  //  改动2：bindVal -> getVal()，通过函数实时读取状态
  //  改动3：onToggle(!getVal()) 替代 !bindVal，修复状态不更新问题

  // 一个组件
  @Builder
  buildReminderCard(
    subtitle: string,
    type: string,
    getVal: () => boolean,
    setVal: (val: boolean) => void
  ): void {
    Row({ space: 10}) {
      // 左侧时间+描述
      Column() {
        // 新增：点击 Text 可跳转到 TimePickerPage
        Text(`${this.getHour(type).toString().padStart(2, '0')}:${this.getMinute(type).toString().padStart(2, '0')}`)
          .fontSize(24)
          .fontWeight(FontWeight.Medium)
          .onClick(() => {
            router.pushUrl({
              url: 'pages/TimePickerPage',
              params: {
                hour: this.getHour(type),       // 传递 hour
                minute: this.getMinute(type),
                type: type
              }
            })
          })

        Text(subtitle)
          .fontSize(14)
          .fontColor('#888888')
          .margin({ top: 4 })
      }
      .alignItems(HorizontalAlign.Start)
      .flexGrow(1)  // 左侧自动占位
      .justifyContent(FlexAlign.Start)   // 时间靠左

      // 右侧开关
      Toggle({
        type: ToggleType.Switch,
        isOn: getVal()
      })
        .onClick(() => {
          const newVal = !getVal()
          setVal(newVal)
          this.showToast(subtitle.replace('提醒', ''), newVal)
          // 保存
          storageUtil.save(`${type}On`, newVal)

        })
        .padding(10)
        .backgroundColor(getVal() ? '#ffbadabb' : '#f2f2f2') // 根据开关状态变色，开启为绿色，关闭为灰色
        .borderRadius(8)
    }
    .alignItems(VerticalAlign.Center)
    .padding(12)
    .backgroundColor($r('sys.color.white'))
    .borderRadius(12)
    .margin({ top: 8 })
    .width('100%')
  }

  showToast(label: string, value: boolean) {
    promptAction.showToast({ message: `${label}提醒：${value ? '已开启' : '已关闭'}` })
  }
}
