SuperBit.MotorStopAll()
let lhand_pos = 70
let rhand_pos = 50
SuperBit.MotorRunDual(
SuperBit.enMotors.M1,
-150,
SuperBit.enMotors.M3,
-150
)
basic.forever(function () {
    for (let index = 0; index < 12; index++) {
        SuperBit.Servo(SuperBit.enServo.S1, rhand_pos)
        rhand_pos += 2
        basic.pause(50)
    }
    rhand_pos = 50
    SuperBit.Servo(SuperBit.enServo.S1, rhand_pos)
})
basic.forever(function () {
    for (let index = 0; index < 17; index++) {
        SuperBit.Servo(SuperBit.enServo.S5, lhand_pos)
        lhand_pos += 4
        basic.pause(40)
    }
    for (let index = 0; index < 17; index++) {
        SuperBit.Servo(SuperBit.enServo.S5, lhand_pos)
        lhand_pos += -4
        basic.pause(40)
    }
})
