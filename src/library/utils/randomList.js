export default (list, limit = 5) => {
    let results = [];
    let pending = limit;
    let selected = {};

    let finalLimit = list.length > limit ? list.length : limit;

    while(pending > 0) {
        let random = Math.floor(Math.random() * finalLimit)

        if(!selected[random]) {
            selected[random] = true;
            results.push(list[random])
            pending--;
        }
    }

    return results
}