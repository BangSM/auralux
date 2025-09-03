"use client"

import Product, { PRODUCT_DATA } from "@/components/Product"

export default function Wood() {
  return <Product product={"wood" as keyof typeof PRODUCT_DATA} />
}
