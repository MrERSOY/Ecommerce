export const navOptions = [
  {
    id: "home",
    label: "Anasayfa",
    path: "/",
  },
  {
    id: "listing",
    label: "Ürünler",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Erkek",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Kadın",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Çocuk",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Ürünleri Düzenle",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Yeni Ürün Ekle",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "İsim giriniz",
    label: "İsim",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email giriniz",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Şifre giriniz",
    label: "Şifre",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Rol",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Yönetici",
      },
      {
        id: "customer",
        label: "Müşteri",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Email giriniz.",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Şifre giriniz.",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Men",
      },
      {
        id: "women",
        label: "Women",
      },
      {
        id: "kids",
        label: "Kids",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyB4xqK2jcCCAMsFJlpOt9mebkKgkn8tMkA",
  authDomain: "next-js-ecommerce-2023-3323b.firebaseapp.com",
  projectId: "next-js-ecommerce-2023-3323b",
  storageBucket: "next-js-ecommerce-2023-3323b.appspot.com",
  messagingSenderId: "440179822114",
  appId: "1:440179822114:web:68999f4b9cea658b26047b",
  measurementId: "G-9WE69QCGBM",
};

export const firebaseStroageURL =
  "gs://next-js-ecommerce-2023-3323b.appspot.com";
