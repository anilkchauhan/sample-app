import lodash from 'lodash'
export default (list, limit = 5) => {
    let results = new Set();
    let finalLimit = list.length < limit ? list.length : limit;

    while(results.size < finalLimit) {
        let random = Math.floor(Math.random() * finalLimit)
        if(!results.has(list[random]))
          results.add(list[random])
    }

    return lodash.cloneDeep([...results])
}