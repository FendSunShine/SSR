import {http} from '../utils/http'
import IndexDB from '../utils/indexDB'
const url = 'https://demo-api.apipost.cn/api/demo/news_list?mobile=18289454846&theme_news=国际新闻&page=1&pageSize=20'
const airbnbDB = new IndexDB('airbnb')
// 真实接口
export  function getRoomList(){
    return http.httpGet(url, {})
}
// Mock接口
export async function  fetchElephant(){
    await airbnbDB.openstore('elephant', 'id', ['nose', 'ear'])
    const result = await airbnbDB.getList('elephant')
    return {
        code: 200,
        message: '操作成功',
        result,
        success: true
    }
}