function generateUniqueId(data) {
    if(data.length == 0) return "1"

    const ids = data.map(x=>x.id)
    const maximumId = Math.max(...ids)
    return (maximumId + 1).toString()
}

module.exports = generateUniqueId;