'use server'

import { client } from "./client";

export interface IImage {
    src: string;
    alt: string;
}

export type BannerImages = Array<IImage>;

export async function getBannerImages(): Promise<BannerImages | null> {
    const BANNER_IMAGES_ID = "banner";

    try {
        const componentOrderObject = await client.getEntries({ content_type: BANNER_IMAGES_ID });

        if (!componentOrderObject || !componentOrderObject.items || componentOrderObject.items.length === 0) {
            console.error("No items found for the given content type");
            return null;
        }

        const componentOrderList: IImage[] = componentOrderObject.items[0].fields.images.map((image: any) => ({
            alt: image.fields.title,
            src: `https:${image.fields.file.url}`
        }));

        return componentOrderList;
    } catch (error) {
        console.error("Error fetching banner images:", error);
        return null;
    }
}

export interface IProductItem {
    name: string,
    id: string,
    sysId: string,
    season: string,
    sizes: string,
    gender: string,
    material: string,
    isPopular: boolean,
    isBestOffers: boolean,
    images: IImage[]
}

export type ProductList = Array<IProductItem>;

export async function getProductList(): Promise<ProductList | null> {
    const PRODUCT_LIST_ID = "productList";

    try {
        const componentOrderObject = await client.getEntries({ content_type: PRODUCT_LIST_ID });

        if (!componentOrderObject || !componentOrderObject.items || componentOrderObject.items.length === 0) {
            console.error("No items found for the given content type");
            return null;
        }

        const componentOrderList = componentOrderObject.items[0].fields.productList.map((product: any) => ({
            name: product.fields.name,
            id: product.fields.id,
            sysId: product.sys.id,
            season: product.fields.season,
            sizes: product.fields.sizes,
            gender: product.fields.gender,
            material: product.fields.material,
            isPopular: product.fields.isPopular,
            isBestOffers: product.fields.isBestOffers,
            images: product.fields.images.map((image: any) => ({
                alt: image.fields.title,
                src: `https:${image.fields.file.url}`
            }))
        }));

        return componentOrderList;
    } catch (error) {
        console.error("Error fetching banner images:", error);
        return null;
    }
}

export async function getProductById(productId: string): Promise<IProductItem | null> {
    try {
        const productEntry = await client.getEntry(productId);

        if (!productEntry) {
            console.error("No product found for the given ID");
            return null;
        }

        const product: IProductItem = {
            name: productEntry.fields.name,
            id: productEntry.fields.id,
            sysId: productId,
            season: productEntry.fields.season,
            sizes: productEntry.fields.sizes,
            gender: productEntry.fields.gender,
            material: productEntry.fields.material,
            isPopular: productEntry.fields.isPopular,
            isBestOffers: productEntry.fields.isBestOffers,
            images: productEntry.fields.images.map((image: any) => ({
                alt: image.fields.title,
                src: `https:${image.fields.file.url}`
            }))
        };

        return product;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
}
