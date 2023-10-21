export const maskNumber = (number: string, maskCharacter = '*') => {
  // Convert the number to a string.
  const numberString = String(number)

  // Get the length of the number string.
  const numberStringLength = numberString.length

  // Create a new string to store the masked number.
  let maskedNumber = ''

  // Iterate over the number string, starting from the first character.
  for (let i = 0; i < numberStringLength - 2; i++) {
    // Add a mask character to the masked number.
    maskedNumber += maskCharacter
  }

  // Add the last two characters of the number string to the masked number.
  maskedNumber += numberString.substring(numberStringLength - 2)

  // Return the masked number.
  return maskedNumber
}
