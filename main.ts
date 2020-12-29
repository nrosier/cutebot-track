let sonar = 0
radio.setGroup(1)
basic.showLeds(`
    . . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . .
    `)
basic.pause(2000)
// Driving logic
basic.forever(function () {
    if (sonar > 10 || sonar == 0) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(50, 25)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(25, 50)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(50, 50)
        }
    } else {
        cuteBot.stopcar()
    }
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    radio.sendValue("sonar", sonar)
    radio.sendValue("light", input.lightLevel())
    basic.pause(100)
})
basic.forever(function () {
    if (input.lightLevel() < 10) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    } else {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
    }
})
