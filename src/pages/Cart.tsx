import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

const money = (v: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8"><p className="text-sm font-semibold text-purple-600">YOUR ORDER</p><h1 className="text-4xl font-bold text-gray-900 mt-1">Shopping Cart</h1></div>
          {items.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
              <ShoppingBag className="mx-auto text-gray-300" size={55} />
              <h2 className="text-2xl font-bold mt-5">Your cart is empty</h2>
              <p className="text-gray-500 mt-2">Add a service from the store to start your order.</p>
              <Link to="/store" className="inline-flex mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">Browse Products</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_360px] gap-7">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase text-purple-600">{item.category}</span>
                      <h2 className="font-bold text-gray-900 mt-1">{item.name}</h2>
                      <p className="text-sm text-gray-500">{money(item.price)} {item.period || ""}</p>
                    </div>
                    <div className="flex items-center gap-2 border rounded-xl p-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"><Minus size={15}/></button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"><Plus size={15}/></button>
                    </div>
                    <div className="font-bold min-w-[100px] text-right">{money(item.price * item.quantity)}</div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 p-2" aria-label={`Remove ${item.name}`}><Trash2 size={18}/></button>
                  </div>
                ))}
              </div>
              <aside className="bg-white rounded-2xl border border-gray-100 p-6 h-fit sticky top-28">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="flex justify-between mt-6 text-gray-600"><span>Subtotal</span><span>{money(subtotal)}</span></div>
                <div className="flex justify-between mt-3 text-gray-600"><span>GST</span><span>Calculated at checkout</span></div>
                <div className="border-t mt-5 pt-5 flex justify-between text-lg font-bold"><span>Total before GST</span><span>{money(subtotal)}</span></div>
                <Link to="/checkout" className="mt-6 w-full py-3.5 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-purple-700">Proceed to Checkout <ArrowRight size={17}/></Link>
                <Link to="/store" className="block text-center mt-4 text-sm font-semibold text-purple-600">Continue Shopping</Link>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
