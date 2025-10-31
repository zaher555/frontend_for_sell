export interface IProduct {
    id:string;
    title:string;
    description:string;
    price:Number;
    color:{
        id:string;
        colorName:string
    }[];
    image:string;
    discountPercentage:Number;
    status:string;
    rate:Number;
    category:string
}

