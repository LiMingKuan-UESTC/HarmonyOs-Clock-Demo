// FlipNumber.ets
@Component
export struct FlipNumber {
  @Prop value: string
  @State displayValue: string = ''

  aboutToAppear() {
    this.displayValue = this.value
  }

  aboutToUpdate() {
    this.displayValue = this.value
  }

  build() {
    Text(this.displayValue)
      .fontSize(56)
      .fontWeight(FontWeight.Bold)
  }
}
