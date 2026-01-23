// TimePickerPage.ets
import router from '@ohos.router'  // 导入路由功能

interface TimePickerType {
  hour: number
  minute: number
  type: string  // 只接收 type
}

@Entry
@Component
struct TimePickerPage {
  @State selectedTime: Date = new Date()
  private type: string = ''  // 用来保存 type

  aboutToAppear() {
    const params = router.getParams() as TimePickerType
    if (params) {
      this.type = params.type ?? ''  // 保存 type
    }
  }

  build() {
    // 整体页面布局
    Column(){
      // 时间选择器
      TimePicker({ selected: this.selectedTime })
        .onChange((value: TimePickerResult) => {
          const newTime = new Date()
          newTime.setHours(value.hour)
          newTime.setMinutes(value.minute)
          this.selectedTime = newTime
          console.log(`选择时间: ${value.hour}:${value.minute}`)
        })
        .width(250)
        .height(160)
        .backgroundColor('#ffedf5f5')
        .borderRadius(12)

      // 当前选中时间展示
      Text(`当前时间: ${this.selectedTime.getHours().toString().padStart(2, '0')} : ${this.selectedTime.getMinutes().toString().padStart(2, '0')}`)
        .fontSize(16)
        .margin({ top: 20 })

      // 确定按钮
      Button('确定')
        .margin({ top: 24 })
        .width(100)
        .height(40)
        .backgroundColor('#ffbadabb')
        .fontColor($r('sys.color.white'))
        .borderRadius(8)
        .onClick(() => {
          const hour = this.selectedTime.getHours()
          const minute = this.selectedTime.getMinutes()

          router.replaceUrl({
            url: 'pages/ReminderSettings',
            params: {
              hour: hour,
              minute: minute,
              type: this.type  // 返回时带上 type
            }
          })
        })
    }
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Center)     // 水平居中
    .justifyContent(FlexAlign.Center)       // 垂直居中
    .padding(20)
  }
}
