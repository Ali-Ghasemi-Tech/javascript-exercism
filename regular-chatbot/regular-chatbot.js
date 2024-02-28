// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /Chatbot,/i;
  return command.match(regex)?.index === 0 ? true : false
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
    const emojiRegex = /[\p{Emoji}\u2000-\u200D\uFE00-\uFEFF]+/giu;
    const newMessage =  message.replace(emojiRegex, "");
    const result = newMessage.replace(/emoji/gi , ''); 
    return result
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regexp= /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/gi
  const usernum = number.match(regexp)
  const firstWrongNum = /^\d{3}-\d{3}-\d{3}$/
  const userWrongNum = number.match(firstWrongNum);
  const secondWrongNum = /^\d{4}-\d{2}-\d{3}$/
  const userSecondWrongNum = number.match(secondWrongNum)
  return regexp.test(number)  ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${userWrongNum != null ? userWrongNum[0] : userSecondWrongNum != null ? userSecondWrongNum[0] : null}`
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  return [
    'youtube.com', 
    'theodinproject.com', 
    'reddit.com', 
    'notion.so'
  ].filter((domain) => userInput.includes(domain))

}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const politeName = fullName.replace(/([a-z]+), ([a-z]+)/i, '$2 $1')
  return `Nice to meet you, ${politeName}`
}
