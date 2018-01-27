export default {
    /**
     * 保存数据
     * 
     * @param {*} key 键
     * @param {*} value 值 
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    /**
     * 获取数据
     * 
     * @param {*} key  键
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },

    /**
     * 删除数据
     * 
     * @param {*} key 键
     */
    remove(key) {
        localStorage.removeItem(key)
    }
}