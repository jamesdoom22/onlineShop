export interface ProductModelServer {
    id: number;
    name: string;
    category: string;
    description:  string;
    image: string;
    price: string;
    quantity: string;
    images: string;
}

export interface ServerResponse {
    count: number;
    products: ProductModelServer[];
}