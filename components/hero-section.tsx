import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Gamepad2, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Three Worlds,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
              One Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover, play, and shop in our unified ecosystem. From the latest
            products to cutting-edge games and premium entertainment.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Explore Now
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* eCommerce Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shop</h3>
              <p className="text-gray-600 mb-6">
                Discover premium products with secure checkout, personalized
                recommendations, and exclusive deals.
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-blue-50 bg-transparent"
              >
                <Link href="/theMarket">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Gaming Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Gamepad2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gaming</h3>
              <p className="text-gray-600 mb-6">
                Play instantly in your browser or download premium games.
                Compete on leaderboards and track your progress.
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-purple-50 bg-transparent"
              >
                <Link href="/gamer">Start Playing</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Entertainment Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <Play className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Entertainment
              </h3>
              <p className="text-gray-600 mb-6">
                Stream videos, music, and podcasts. Create playlists and
                discover content tailored to your taste.
              </p>
              <Button
                variant="outline"
                className="w-full group-hover:bg-red-50 bg-transparent"
              >
                <Link href="/lamp">Watch Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
