"use client"

import Product, { PRODUCT_DATA } from "@/components/Product"

export default function Honeycomb() {
  return <Product product={"honeycomb" as keyof typeof PRODUCT_DATA} />
}
