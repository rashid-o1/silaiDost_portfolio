import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <NextSeo
        title="SilaiDost"
        description="SilaiDost is a complete tailoring management platform designed for both tailors and customers."
        canonical="https://silaidost.vercel.app/"
        openGraph={{
          url: "https://silaidost.vercel.app/",
          title: "SilaiDost",
          description:
            "SilaiDost is a complete tailoring management platform designed for both tailors and customers.",
          images: [
            {
              url: "/images/placeholder.webp",
            },
          ],
          site_name: "SilaiDost",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <title>SilaiDost</title>
        <meta
          name="description"
          content="SilaiDost is a complete tailoring management platform designed for both tailors and customers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="relative overflow-hidden">
        <div className="px-4 pt-12 mx-auto max-w-7xl md:pt-20">
          <div className="w-full mx-auto text-center md:w-10/12">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500">
                SilaiDost
              </span>
              <br />
              Crafting Style, Connecting People
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-gray-600 md:text-xl">
              SilaiDost is a complete tailoring management platform designed
              for both tailors and customers. It helps simplify business
              operations by connecting tailors and customers in one easy-to-use
              platform.
            </p>
          </div>

          <div className="relative w-full py-12 mx-auto text-center md:py-20 md:w-11/12">
            <div className="relative z-10">
              <img
                className="w-full transition duration-500 shadow-2xl rounded-3xl ring-1 ring-black ring-opacity-5"
                src="/images/feature_image.png"
                alt="SilaiDost Preview"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Tailor Portal
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Tailors can register themselves, submit business details, choose
              subscription packages, and manage their tailoring business from a
              single dashboard.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "View business snapshots and order statistics",
              "Track upcoming order deadlines",
              "Add and manage customers",
              "Store and manage customer measurements",
              "Create and manage customer orders",
              "Update business profile and details",
              "Monitor pending, active, completed, and cancelled orders",
              "Chat directly with customers for updates and communication",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl"
              >
                <p className="text-base font-medium text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Customer Portal
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600">
              Customers stay connected with their tailor through a simple and
              organized interface built for order tracking and communication.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "View active, pending, completed, or cancelled orders",
              "Check order details and delivery status",
              "View measurements and profile information",
              "Access tailor profile and business details",
              "Chat directly with tailor for updates and communication",
              "Stay connected through a simple and organized interface",
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border border-gray-100 shadow-sm rounded-2xl"
              >
                <p className="text-base font-medium text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Built for Modern Tailoring Businesses
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SilaiDost helps tailors manage customers, measurements, orders,
            payments, deadlines, and communication — all in one place.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}