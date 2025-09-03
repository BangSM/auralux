"use client"
import Product, { PRODUCT_DATA } from "@/components/Product"

export default function Curtains() {
  return <Product product={"curtains" as keyof typeof PRODUCT_DATA} />
}
