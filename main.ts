input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
