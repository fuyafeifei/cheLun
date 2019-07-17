//格式化数据
export function format(arr, type) {
    let obj = {}
    arr.forEach(item => {
        let key = type == 'y' ? item.time.match(/-(\d{1,2})-/)[1] : item.time
        if (!obj[key]) {
            obj[key] = []
        }
        obj[key].push(item)
    })
    return obj
}

export default {
    format
}