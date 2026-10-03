import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, LockKeyhole, ArrowLeft } from "lucide-react";

const money = (v: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(v);

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrderId(`HV-${Date.now().toString().slice(-8)}`);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) return (
    <div className="min-h-screen bg-gray-50"><Navbar /><main className="pt-36 pb-20 px-4"><div className="max-w-xl mx-auto bg-white rounded-3xl border p-10 text-center shadow-sm"><CheckCircle2 className="mx-auto text-green-500" size={65}/><h1 className="text-3xl font-bold mt-5">Order received</h1><p className="text-gray-600 mt-3">Your order request has been created successfully.</p><div className="mt-6 rounded-2xl bg-gray-50 p-4"><p className="text-sm text-gray-500">Order ID</p><p className="font-bold text-xl">{orderId}</p></div><p className="text-xs text-gray-500 mt-5">Payment integration can be connected here when your gateway credentials/API are ready.</p><Link to="/store" className="inline-block mt-7 px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold">Continue Shopping</Link></div></main><Footer /></div>
  );

  if (!items.length) return <div className="min-h-screen bg-gray-50"><Navbar/><main className="pt-36 text-center px-4"><h1 className="text-3xl font-bold">No items to checkout</h1><Link to="/store" className="inline-block mt-5 text-purple-600 font-semibold">Browse Products</Link></main><Footer/></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 mb-6"><ArrowLeft size={16}/> Back to cart</Link>
          <div className="mb-8"><p className="text-sm font-semibold text-purple-600">SECURE CHECKOUT</p><h1 className="text-4xl font-bold text-gray-900 mt-1">Complete Your Order</h1></div>
          <form onSubmit={submit} className="grid lg:grid-cols-[1fr_380px] gap-7">
            <div className="space-y-6">
              <section className="bg-white rounded-2xl border p-6">
                <h2 className="text-xl font-bold mb-5">Customer Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full name" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"/>
                  <input required type="email" name="email" placeholder="Email address" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"/>
                  <input required name="phone" placeholder="Phone number" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"/>
                  <input name="company" placeholder="Company (optional)" className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"/>
                </div>
                <textarea required name="address" placeholder="Billing / service address" rows={4} className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-purple-200"/>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <input required name="city" placeholder="City" className="rounded-xl border px-4 py-3"/>
                  <input required name="state" placeholder="State" className="rounded-xl border px-4 py-3"/>
                  <input required name="pincode" placeholder="PIN code" pattern="[0-9]{6}" className="rounded-xl border px-4 py-3"/>
                </div>
              </section>
              <section className="bg-white rounded-2xl border p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <label className="flex items-start gap-3 border rounded-xl p-4"><input type="radio" name="payment" defaultChecked/><span><b>Online Payment</b><span className="block text-sm text-gray-500 mt-1">Connect your payment gateway on order submission.</span></span></label>
                <label className="flex items-start gap-3 border rounded-xl p-4 mt-3"><input type="radio" name="payment"/><span><b>Request Invoice / Pay Later</b><span className="block text-sm text-gray-500 mt-1">For approved business orders.</span></span></label>
              </section>
            </div>
            <aside className="bg-white rounded-2xl border p-6 h-fit sticky top-28">
              <h2 className="text-xl font-bold">Your Order</h2>
              <div className="mt-5 space-y-4 max-h-72 overflow-auto">
                {items.map(item => <div key={item.id} className="flex justify-between gap-4 text-sm"><div><p className="font-semibold">{item.name}</p><p className="text-gray-500">Qty {item.quantity}</p></div><span className="font-semibold whitespace-nowrap">{money(item.price * item.quantity)}</span></div>)}
              </div>
              <div className="border-t mt-5 pt-5 flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="flex justify-between mt-2 text-sm text-gray-500"><span>GST</span><span>Calculated after billing details</span></div>
              <div className="border-t mt-5 pt-5 flex justify-between text-xl font-bold"><span>Total</span><span>{money(subtotal)}</span></div>
              <button type="submit" className="mt-6 w-full py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 flex items-center justify-center gap-2"><LockKeyhole size={17}/> Place Order</button>
              <p className="text-xs text-gray-400 text-center mt-3">By placing your order, you agree to the applicable terms and policies.</p>
            </aside>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
