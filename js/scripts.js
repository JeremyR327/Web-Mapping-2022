// Consolidate the above listeners into one listener
  $('.day-container').on('click', function () {
  var albumArt = $(this).data('album-art')
  var dayOfWeek = $(this).data('dow')
  var artistName = $(this).data('artist-name')
  console.log(albumArt)
  console.log(dayOfWeek)
  console.log(artistName)

  $(".right-half").html(`${dayOfWeek}<img src='${albumArt}'/>${artistName}`)
})
