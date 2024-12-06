
import Image from "next/image"
import ProductDetail from "../components/Pdetails"


export default function Page() {
  const ProductDetails = [
    { label: "Account", href: "/" },
    { label: "Gaming", href: "/gaming" },
    { label: "HAVIT HV-G92 Gamepad", href: "/productdetails" },
  ]

  return (
    <div>
         <div className="p-4">
             <ProductDetail items={ProductDetails} />
        </div>

        <div className=' flex justify-center mt-8 mb-9'>
                <Image
            src="/wishlist/productdetails-1.png"
            alt='productdetails 1'
            height={1000}
            width={1000}
            />

           


            </div>

            <div className=' flex justify-center mt-8 mb-9'>
                <Image
            src="/wishlist/productdetails-2.png"
            alt='productdetails 2'
            height={1000}
            width={1000}
            />

           


            </div>
    </div>
  )
}