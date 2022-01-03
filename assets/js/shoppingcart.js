var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'ASUS Vivobook Pro 16X OLED 零度黑',
            imgUrl:'assets/img/notebook/ASUS Vivobook Pro 16X OLED 零度黑.png',
            price:'500',
            count:'1'
          },
          {
            id:'2',
            itemName:'HyperX-Alloy-Origins-60-機械式電競鍵盤',
            imgUrl:'assets/img/keyboard/HyperX_Alloy_Origins_60_機械式電競鍵盤-removebg-preview.png',
            price:'790',
            count:'1'
          },
          {
            id:'3',
            itemName:'ROG-Spatha-X',
            imgUrl:'assets/img/mouse/ROG-Spatha-X--unscreen.gif',
            price:'1200',
            count:'1'
          },
          {
            id:'4',
            itemName:'Corsair Virtuoso RGB Wireless XT Headset 無線耳機',
            imgUrl:'assets/img/hearphone/Corsair_Virtuoso_RGB_Wireless_XT_Headset_無線耳機-removebg-preview.png',
            price:'2300',
            count:'1'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{}
})