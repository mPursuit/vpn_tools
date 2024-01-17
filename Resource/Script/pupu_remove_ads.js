/**
 * @author pursuit
 * @function 朴朴超市
 * @date 2024-01-17 11:50:13
 */
!function() {
 let obj = JSON.parse($response.body);
 obj.data = obj.data.filter(item => item.position_type !== 50);
 $done({body: JSON.stringify(obj)});
}();
