const mongoose = require('mongoose');

const log = require('../../helpers/log');

const Lesson = require('../models/lesson');
const Content = require('../models/content');

/* This data is explicitly provided during connection for testing purposes.
 *
 * During further development, this would be a prime place to include further
 * dummy data.
 **/

// This is a little bit of a dirty fix to dry up the code.
// In essence, it's the same as doing a `err => if (err) log.error(err);`
// but actually conforms to our linting rules.
const handleErr = err => err ? log.error(err) : undefined;

const createdLesson = new Lesson({
  title: 'First Lesson',
  description: 'Welcome to Javascript!',
})
.save((err, lesson) => {
  if (err) {
    log.error('Error saving test lesson.', err);
  }

  new Content({
    order: 0,
    type: 'reading',
    text: 'JavaScript can "display" data in different ways: \n Writing into an alert box, using window.alert(). \n Writing into the HTML output using document.write(). \n Writing into an HTML element, using innerHTML. \nWriting into the browser console, using console.log().',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 1,
    type: 'question',
    text: '_________(\'Hello world!\')',
    choices: [ 'console.log', 'print', 'display' ],
    answer: 'console.log',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 2,
    type: 'question',
    text: 'console.log(Party Parrot!) will throw an error',
    choices: [ 'true', 'false' ],
    answer: 'true',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 3,
    type: 'reading',
    text: 'JavaScript variables are containers for storing data values. \n All JavaScript variables must be identified with unique names. \n These unique names are called identifiers. \n Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 4,
    type: 'question',
    text: '______ catchphrase = \'one more thing\' ',
    choices: [ 'string', 'variable', 'var' ],
    answer: 'var',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 5,
    type: 'reading',
    text: 'A JavaScript function is a block of code designed to perform a particular task. \n A JavaScript function is executed when "something" invokes it (calls it). \n A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 6,
    type: 'question',
    text: '______ doSomething = ______() { \n // do something here \n }',
    choices: [ 'function, var', 'var, function' ],
    answer: 'var, function',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

  new Content({
    order: 7,
    type: 'question',
    text: 'The following is a(n) ________: {\n oneFish: \'twoFish\', \n redFish: \'blueFish\' \n}',
    choices: [ 'dictionary', 'library', 'object' ],
    answer: 'object',
    lessonId: mongoose.Types.ObjectId(lesson._id)
  })
  .save(handleErr);

}); // End of Lesson

module.exports = createdLesson;

