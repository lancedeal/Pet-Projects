
const clock = document.getElementById('clock')
const data = document.getElementById('data')
function updateClock(){
    
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var day = now.getDay()
    var date = now.getDate()
    var month = now.getMonth()
    var year = now.getFullYear()

    var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    hours = hours % 12 || 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    date = date < 10 ? '0' + date : date

    var period = hours < 12 ? 'PM' : 'AM'
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`
    data.textContent = `${weekDays[day]}, ${months[month]}, ${date}, ${year}`
}

updateClock()
setInterval(updateClock,1000)