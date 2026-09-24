export const groups = [
 {id:'care',title:'Làm sạch & chăm sóc',line:'Gạt đi lớp bụi ngày dài.',description:'Bắt đầu từ nhu cầu làm sạch, cấp ẩm và dành thời gian chăm sóc làn da',from:'250.000',tone:'cream'},
 {id:'peel',title:'Peel tái tạo',line:'Một lựa chọn cần được hiểu rõ.',description:'Trao đổi về tình trạng da và phương pháp trước khi quyết định chọn dịch vụ peel.',from:'500.000',tone:'rose'},
 {id:'restore',title:'Phục hồi chuyên sâu',line:'Kiên nhẫn với làn da của mình.',description:'Tìm hiểu lựa chọn chăm sóc theo mối quan tâm về thâm sau mụn, dầu và bề mặt da',from:'500.000',tone:'dark'}
];
export const services = [
 {id:'co-ban',group:'care',name:'Chăm sóc da cơ bản',price:250000},
 {id:'chuyen-sau',group:'care',name:'Chăm sóc da chuyên sâu',price:550000},
 {id:'mun-lung',group:'care',name:'Lấy nhân mụn lưng',price:500000},
 {id:'co2',group:'care',name:'Detox CO2 đa tầng',price:450000},
 {id:'mask',group:'care',name:'Detox mask cleaner',price:400000},
 {id:'tao-lanh',group:'care',name:'Detox tảo lạnh',price:450000},
 {id:'ha',group:'care',name:'Cấy HA cấp ẩm',price:650000},
 {id:'peel-mun',group:'peel',name:'Peel mụn',price:500000,maxPrice:1500000},
 {id:'glass',group:'peel',name:'Peel Glass Skin',price:700000,maxPrice:2000000},
 {id:'tao-nong',group:'peel',name:'Peel tảo nóng',price:1100000},
 {id:'peel-phuc-hoi',group:'peel',name:'Peel phục hồi',price:1700000},
 {id:'nam',group:'peel',name:'Peel nám',price:3000000},
 {id:'peel-lung',group:'peel',name:'Peel lưng',price:1500000,maxPrice:3000000},
 {id:'vi-kim',group:'restore',name:'Vi kim tái tạo',price:1000000},
 {id:'tham',group:'restore',name:'Cải thiện thâm sau mụn',price:800000},
 {id:'dau',group:'restore',name:'Kiểm soát dầu',price:850000},
 {id:'lo-chan-long',group:'restore',name:'Thu nhỏ lỗ chân lông',price:500000,maxPrice:900000}
];
export const money=(price:number)=>new Intl.NumberFormat('vi-VN').format(price);
export const servicePrice=(s:{price:number;maxPrice?:number})=>`${money(s.price)}${s.maxPrice?' – '+money(s.maxPrice):''}đ`;
