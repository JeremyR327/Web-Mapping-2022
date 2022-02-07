// These are listeners that respond to clicks on the Day of Week buttons //

$('#monday').on('click', function ()
{
$('.right-half').html(" Monday <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg'> The Beatles")
})

$('#tuesday').on('click', function ()
{
$('.right-half').html("Tuesday <img src='https://upload.wikimedia.org/wikipedia/en/d/d4/Incredible_Jazz_Guitar.jpg'> Wes Montgomery")
})

$('#wednesday').on('click', function ()
{
$('.right-half').html("Wednesday <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg'> The Beatles")
})

$('#thursday').on('click', function ()
{
$('.right-half').html("Thursday <img src='https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png'> Kendrick Lamar")
})

$('#friday').on('click', function ()
{
$('.right-half').html("Friday <img src='https://upload.wikimedia.org/wikipedia/en/6/6e/Oscarnighttrain.jpg'> Oscar Peterson Trio")
})

$('#saturday').on('click', function ()
{
$('.right-half').html("Saturday <img src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Stadiumarcadium.jpg/220px-Stadiumarcadium.jpg'> Red Hot Chili Peppers")
})

$('#sunday').on('click', function ()
{
$('.right-half').html("Sunday <img src='https://img.discogs.com/N8gesMGLJRkgWb8231aRMw6wxJ4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4625247-1370296315-6051.jpeg.jpg'> Django Reinhardt")
})

// Consolidate the above listeners into one listener
  $('.day-container').on('click', function () {
  var albumArt = $(this).data('album-art')
  var dayOfWeek = $(this).data('dow')
  var artistName = $(this).data('artist-name')
  console.log(albumArt)
  console.log(dayOfWeek)
  console.log(artistName)

  $(".right-half").html(`${dayofWeek}<img src='${albumArt}'/>${artistName}`)
})

// The Following Code Will Tinker With Data Types in JavaScript //

// Boolean
var myBoolean = true

$('.toggle').on('click', function() {

  myBoolean = !myBoolean

  console.log(myBoolean)
})

// Strings

var firstName = 'Jeremy'
var lastName = 'Rucker'

var fullName = firstName + ' ' + lastName
var fullNameAsTemplateLiteral = `${firstName} ${lastName}, esq.`

console.log(fullName)
console.log(fullNameAsTemplateLiteral)

// numbers

var age = 41
var kidAge = 6
var counter = 0
var combinedAge = age + kidAge

$('html').append(`<p> The combined age is ${combinedAge}</p>`)


console.log(combinedAge)


// arrays //

var nameArray = ["chris", "Charlie", "Ben", "Nathan", "Renata"]
console.log('The Person at position 4 in the array is', nameArray[4])
nameArray.forEach(function (name, i) {

  $('html').append(`<p> ${name} is stored in position ${i} </p>`)

})

var chrisObject = {
  age: 41,
  almaMater: 'NYU',
  borough: 'Brooklyn',
  dog: 'Tubu',
  tired: true,
  statesLivedIn: [
    'MD',
    'NY'
  ]
}

var allStudents = {




}
