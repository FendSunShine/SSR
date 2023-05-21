export default class  DB {
    private dbName:string // 数据库名称
    private db :any // 数据库对象 
    constructor(dbName:string){
        this.dbName = dbName
    }
    // 打开数据库
    public openstore(storeName: string, keyPath: string, indexs? : Array<string>){
        const request =  window.indexedDB.open('', 2)
        return new Promise((resolve, reject) => {
            request.onsuccess = (event: any) => {
                console.log('数据库打开成功');
                // 数据库对象   
                this.db = event.target.result
                console.log(event);
                resolve(event)
            }
            request.onerror = (event) => {
                console.log('数据库打开失败');
                console.log(event);
            }
            request.onupgradeneeded = (event) => {
                console.log('数据库更新成功');
                // 创建对象仓库
                const { result } : any = event.target
                const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath})
                if (indexs && indexs.length > 0){
                    indexs.map( (v: string) => {
                        store.createIndex(v, v, {unique: false})
                        
                    })
                }
                store.transaction.oncomplete = (event :any ) => {
                    console.log('创建对象仓库成功');
                }
                console.log(event);
            }
        })
    }
    // 新增数据库数据
    updataItem(storeName: string, data: any) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.put({...data, updataTime: new Date().getTime()})
        return new Promise<void>((resolve, reject) => {
            request.onsuccess = (event :any) => {
                console.log('数据库写入成功');
                console.log(event);
                resolve(event)
            }
            request.onerror = (event :any) => {
                console.log('数据库写入失败');
                console.log(event);
                reject(event)
            }
        })
    }
    // 删除
    deleteItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.delete(key)
        return new Promise<void>((resolve, reject) => {
            request.onsuccess = (event :any) => {
                console.log('数据库删除成功');
                console.log(event);
                resolve(event)
            }
            request.onerror = (event :any) => {
                console.log('数据库删除失败');
                console.log(event);
                reject(event)
            }
        })
    }
    // 查询所有数据
    getList(storeName: string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.getAll()
        return new Promise<void>((resolve, reject) => {
            request.onsuccess = (event :any) => {
                console.log('查询所有数据成功');
                // console.log(event.target.result);
                resolve(event.target.result)
            }
            request.onerror = (event :any) => {
                console.log('查询所有数据失败');
                console.log(event);
                reject(event)
            }
        })
    }
    // 查询某条数据
    getListItem(storeName: string, key: number | string) {
        const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
        const request = store.get(key)
        return new Promise<void>((resolve, reject) => {
            request.onsuccess = (event :any) => {
                console.log('查询某条数据成功');
                console.log(event.target.result);
                resolve(event.target.result)
            }
            request.onerror = (event :any) => {
                console.log('查询某条数据失败');
                console.log(event);
                reject(event)
            }
        })
    }
}