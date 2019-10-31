var everybodyAllDay = []

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  everybodyAllDay.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var firstInLine = katzDeliLine[0]
    katzDeliLine.shift(firstInLine)
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(katzDeliLine) {
   if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    let peopleInLine = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      peopleInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${peopleInLine.join(", ")}`
  }
}

console.log(takeANumber(['ada', 'grace'], 'ozzy'))
console.log("everybodyAllDay: " everybodyAllDay)
