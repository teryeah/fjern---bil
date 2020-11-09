radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    } else if (receivedNumber == 3) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 400)
    } else if (receivedNumber == 2) {
        bitbot.goms(BBDirection.Forward, 60, 400)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
radio.setGroup(29)
basic.forever(function () {
	
})
