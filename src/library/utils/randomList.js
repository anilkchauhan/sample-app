import lodash from 'lodash'
export default (list, limit = 5) => {
    let results = new Map();
    let finalLimit = list.length < limit ? list.length : limit;

    while(results.size < finalLimit) {
        let random = Math.floor(Math.random() * finalLimit)
        results.set(random, list[random])
    }

    return lodash.cloneDeep([...results.values()])
}