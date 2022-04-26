input.onButtonPressed(Button.A, function () {
    radio.sendNumber(state)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showNumber(state)
})
input.onButtonPressed(Button.B, function () {
    if (state <= 10) {
        state += 1
    } else {
        state = 1
    }
    basic.showNumber(state)
})
let state = 0
radio.setGroup(1)
state = 1
let sprcha = 0
basic.showNumber(state)
pins.digitalWritePin(DigitalPin.P11, 1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendNumber(1)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(2)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendNumber(3)
        if (sprcha == 0) {
            pins.digitalWritePin(DigitalPin.P11, 1)
            sprcha = 1
        } else {
            pins.digitalWritePin(DigitalPin.P11, 0)
        }
    }
})
