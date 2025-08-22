// import { Navigation } from "@/components/navigation"
import { ShoppingCart } from "@/components/theMarket/shopping-cart"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}
      <main className="py-8">
        <ShoppingCart />
      </main>
    </div>
  )
}
