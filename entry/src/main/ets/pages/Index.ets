// Copyright 2026 LI MingKuan
//
// 原项目：HarmonyOs-Clock-Demo
// 作者：LiMingKuan-UESTC
// 仓库地址：https://github.com/LiMingKuan-UESTC/HarmonyOs-Clock-Demo
// Index.ets

import router from '@ohos.router'  // 导入路由功能
import { FlipNumber } from '../common/utils/FlipNumber'  // 翻页时钟

// 通知功能
import { requestNotificationPermission, publishSimpleNotification } from '../common/utils/NotificationUtil';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  @State hours: string = '00'
  @State minutes: string = '00'

  aboutToAppear() {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  updateTime() {
    const now = new Date()
    this.hours = now.getHours().toString().padStart(2, '0')
    this.minutes = now.getMinutes().toString().padStart(2, '0')
  }

  build() {
    Column() {

      // ===== 时钟展示区域 =====
      Row() {
        FlipNumber({ value: this.hours })
        Text(':')
          .fontSize(48)
          .fontWeight(FontWeight.Bold)
          .padding({ left: 8, right: 8 })
        FlipNumber({ value: this.minutes })
      }
      .width('80%')
      .margin({ top: 80, bottom: 80 })
      .justifyContent(FlexAlign.Center)
      .padding(24)
      .backgroundColor('#FFFFFF')
      .borderRadius(16)
      .shadow({ radius: 10, color: '#00000022', offsetX: 0, offsetY: 4 })

      // ===== 跳转卡片按钮 =====
      Column() {
        Text('提醒设置')
          .fontSize(20)
          .fontWeight(FontWeight.Medium)

        Text('添加 / 编辑闹钟')
          .fontSize(14)
          .fontColor('#666666')
          .margin({ top: 4 })
      }
      .width('60%')
      .padding(20)
      .backgroundColor('#FFFFFF')
      .borderRadius(16)
      .shadow({ radius: 10, color: '#00000022', offsetX: 0, offsetY: 4 })
      .onClick(() => {
        const context = getContext(this) as common.UIAbilityContext
        requestNotificationPermission(context)
        router.pushUrl({ url: 'pages/ReminderSettings' })
      })

    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Start)
    .alignItems(HorizontalAlign.Center)
    .backgroundColor('#f2f2f2')
  }
}
