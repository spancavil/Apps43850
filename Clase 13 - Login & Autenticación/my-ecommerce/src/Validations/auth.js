const isValidEmail = (emailInput) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(emailInput)
}

const isAtLeastSixCharacters = (input) => {
    const regex = /.{6,}/
    return regex.test(input)
}