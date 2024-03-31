const targetDate = new Date("2024-04-01T18:00:00-08:00")
const countdown = setInterval(()=>{
	const now = new Date()
	const timeDiff = targetDate - now
	if(timeDiff <= 0){
		clearInterval(countdown)
		document.getElementById("countdown").innerHTML = "Yelling Time!"
		return
	}
	const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
	const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
	const countdownDisplay = days + "d " + hours + "h " + minutes + "m " + seconds + "s"
document.getElementById("countdown").innerHTML = countdownDisplay
}, 1000)