function fetchServerTime () {
	return axios.get('/small.json')
	.then(
		(res) => {
			console.log('server date', res.headers.date)
			return new Date(res.headers.date)
		}
	)
}

window.onload = () => {
	const prevTime = new Date()
	fetchServerTime()
	.then((serverTime) => {
		document.getElementById('server-time').textContent = serverTime.toISOString()
		const afterTime = new Date()
		document.getElementById('client-prev-time').textContent = prevTime.toISOString()
		document.getElementById('client-after-time').textContent = afterTime.toISOString()
	})
}