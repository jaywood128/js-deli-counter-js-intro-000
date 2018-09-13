var katzDeliLine = [];

function takeANumber(line, name) {
  push.line(name)

  return `Welcome, ${name}. You are number ${line.length} in line`
}
function nowServing(line) {
  if (!line.length) {
    console.log("There is nobody waiting to be served!")

    return "There is nobody waitint to be served!"
} else {

  return "Now serving" +  line.shift();
  }
}
