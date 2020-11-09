radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 40, 200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        bitbot.rotatems(BBRobotDirection.Right, 40, 200)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Forward, 60)
        basic.showIcon(IconNames.Heart)
    } else if (receivedNumber == 4) {
        bitbot.stop(BBStopMode.Brake)
        basic.showIcon(IconNames.Sad)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
radio.setGroup(29)
basic.forever(function () {
	
})
basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) < 20) {
        bitbot.ledRainbow()
        bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    } else {
        bitbot.ledClear()
    }
})
