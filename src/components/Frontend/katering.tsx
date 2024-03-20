import Link from "next/link";
import Image from "next/image";

export default function Katering() {
  return (
    
    <section className="mx-auto max-w-screen-xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-16">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
           Optimize Your Experience
          </h2>

          <p className="text-gray-500 md:mt-4 md:block">
          We strongly recommend that our clients utilize our system 
          to engage the services of our pre-screened professional workers 
          for all tasks. It is advisable to entrust the management 
          of our workers within our system, rather than hiring them independently. 
          This ensures that your job is completed satisfactorily before any payment 
          is made to our pre-screened workers.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="./workers"
              className="inline-block rounded bg-top-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Find a worker
            </Link>
          </div>
        </div>
      </div>

      <Image
        alt="katering_img"
        src="/img/pro.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px] sm:pr-14"
        height={400}
        width={400}
      />
      
    </section>
    
  );
}
