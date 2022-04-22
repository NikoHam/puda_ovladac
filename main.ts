input.onButtonPressed(Button.A, function () {
    radio.sendNumber(state)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showNumber(state)
})
input.onButtonPressed(Button.B, function () {
    if (state <= 8) {
        state += 1
    } else {
        state = 1
    }
    basic.showNumber(state)
})
let state = 0
radio.setGroup(1)
state = 1
basic.showNumber(state)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendNumber(1)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        radio.sendNumber(2)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        radio.sendNumber(3)
    }
})
