"use client"

import Product, { PRODUCT_DATA } from "@/components/Product"

export default function Screen() {
  return <Product product={"screen" as keyof typeof PRODUCT_DATA} />
}
