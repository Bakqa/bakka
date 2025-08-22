// import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Shield, RotateCcw } from "lucide-react"

export function ShopHeader() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Premium Shopping Experience</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover quality products with secure checkout and fast delivery
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Free Shipping Over $50
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Secure Payments
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 mr-2" />
                30-Day Returns
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-white text-sm">
            <Badge variant="secondary" className="bg-yellow-400 text-yellow-900">
              Flash Sale
            </Badge>
            <span>Up to 50% off selected items - Limited time only!</span>
            <Button variant="outline" size="sm" className="text-blue-500 bg-white hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
