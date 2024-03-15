import Star from "./star";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl sm:p-14 p-4">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Our popular services
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Car-wash-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
                
                <p className="mt-1 text-lg font-medium text-gray-700">Car Wash</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Ditch the bucket and hose! Or long wait at the car wash. Get your car sparkling clean and gleaming with a professional wash at your home. We handle the scrubbing, so you can enjoy a stress-free, dazzling ride. Book your appointment today!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Cleaner-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
                
                <p className="mt-1 text-lg font-medium text-gray-700">Cleaner</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Escape the cleaning vortex! Reclaim your weekends with a sparkling clean home. Our professional cleaners banish dust bunnies and leave you with peace of mind. Breathe easy, book now!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Plumber-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
                
                <p className="mt-1 text-lg font-medium text-gray-700">Plumber</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Don't let plumbing woes dampen your day! Our expert plumbers tackle leaks, clogs, and drips, keeping your home running smoothly. book now, reliable service – 24/7!
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Elect-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
                
                <p className="mt-1 text-lg font-medium text-gray-700">Electrician</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Flickering lights got you in the dark? Our qualified electricians tackle electrical woes – big or small. We keep your home safe and powered up. Schedule your service today! 
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Gardener-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
                
                <p className="mt-1 text-lg font-medium text-gray-700">Gardener</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Tired of a yard gone wild? Our expert gardeners cultivate your outdoor oasis. From manicured lawns to blooming beds, we bring your landscaping dreams to life. Relax and enjoy the view – schedule now! 
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/Carpenter-home.png"
                className="h-16 w-16 object-cover"
                height={64}
                width={64}
              />
              <div>
              
                <p className="mt-1 text-lg font-medium text-gray-700">Carpenter</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
            Squeaks, wobbles, and home improvement dreams? Our skilled carpenters tackle everything from repairs to renovations. We build, fix, and craft the perfect space for you. Get a free quote today!
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
