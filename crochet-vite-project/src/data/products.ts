export interface Product {
    id: string;
    name: string;
    category: "flower" | "doll" | "keychain" | "other"; // 新增一個 'other' 分類
    images: string[];
    description: string;
    price: number;
  }
  
  export const products: Product[] = [
    // 在這裡放入你的作品資料
    {
      id: "flower-1",
      name: "向日葵吊飾",
      category: "flower",
      images: ["/images/flower.JPEG"], // 圖片路徑
      description: "手工鉤織向日葵，適合當作包包或鑰匙裝飾。",
      price: 350,
    },
    {
      id: "doll-1",
      name: "訂製狗狗玩偶",
      category: "doll",
      images: ["/images/doll.JPEG"],
      description: "可愛的客製化鉤織狗狗玩偶，可指定顏色與尺寸。",
      price: 800,
    },
    // 之後你可以繼續在這裡加入更多作品
  ];