"use client"

import Product, { PRODUCT_DATA } from "@/components/Product"

export default function Combi() {
  return <Product product={"combi" as keyof typeof PRODUCT_DATA} />
}
