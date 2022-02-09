// Consolidate the above listeners into one listener
$('.day-container').on('click', function () {
  var albumArt = $(this).data('album-art')
  var dayOfWeek = $(this).data('dow')
  var artistName = $(this).data('artist-name')
  console.log(albumArt)
  console.log(dayOfWeek)
  console.log(artistName)
  $(".right-half").show()
  $(".right-half").html(`${dayOfWeek}<img src='${albumArt}'/>${artistName}`)
})

$('.title').on('click', function () {
  $(".right-half").hide()
  console.log('hidden')
})
