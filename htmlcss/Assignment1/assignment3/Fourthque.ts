class item{
    itemid:number;
    itemname:string;
    itemprice:string;
    category:string;

constructor(itemid,name,price,category)
 {
this.itemid=itemid;
this.itemname=name;
this.itemprice=price;
this.category=category;
    
 }

   display=()=>{
    return this.itemid+ " "+this.itemname+" "+this.itemprice+" "+this.category;
 }
 
}
var items = new item(1,"ayushi",10000,"bak");
var itemsa = new item(2,"ayushi",10000,"bakar");
 console.log(itemsa.display());
 console.log(items.display());