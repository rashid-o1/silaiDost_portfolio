import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy | SilaiDost</title>
        <meta
          name="description"
          content="Read the Privacy Policy of SilaiDost."
        />
      </Head>

      <Header />

      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/images/silaiDost_dark_logo.png"
                alt="SilaiDost Logo"
                className="object-contain w-24 h-24 md:w-28 md:h-28"
              />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Last updated: April 21, 2026
            </p>
          </div>

          <div className="space-y-12">
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Introduction
              </h2>

              <p className="leading-8 text-gray-700">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                We use Your Personal Data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Company Information
                </h3>

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-900">
                      Company:
                    </span>{" "}
                    IR-Tech Solutions
                  </p>

                  <p>
                    <span className="font-semibold text-gray-900">
                      Country:
                    </span>{" "}
                    Pakistan
                  </p>

                  <p>
                    <span className="font-semibold text-gray-900">
                      Address:
                    </span>{" "}
                    Maple Homes Society, Mukarram Shah Street, House #2,
                    Banigala
                  </p>
                </div>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Information We Collect
                </h3>

                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Email address</li>
                  <li>Name and phone number</li>
                  <li>Address and city information</li>
                  <li>Usage and device data</li>
                  <li>Photos from camera or gallery</li>
                  <li>Order, customer, and measurement data</li>
                </ul>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                How We Use Your Data
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Provide and maintain our services",
                  "Manage user accounts and registrations",
                  "Process orders and subscriptions",
                  "Send updates, notifications, and reminders",
                  "Provide customer support",
                  "Improve the app experience and analytics",
                  "Prevent misuse and improve security",
                  "Manage user requests and communication",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white border border-gray-200 rounded-2xl"
                  >
                    <p className="font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Sharing of Information
              </h2>

              <p className="leading-8 text-gray-700">
                We may share Your Personal Data with service providers,
                affiliates, business partners, or authorities when required by
                law. We may also share data during mergers, acquisitions, or
                business transfers.
              </p>

              <p className="mt-4 leading-8 text-gray-700">
                We do not sell Your Personal Data to third parties.
              </p>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Data Retention
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  We retain Personal Data only as long as needed for legal,
                  operational, and support purposes.
                </p>

                <ul className="space-y-3 list-disc list-inside">
                  <li>User accounts: up to 24 months after closure</li>
                  <li>Support tickets: up to 24 months</li>
                  <li>Chat history: up to 24 months</li>
                  <li>Usage logs and analytics: up to 24 months</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
                <h2 className="mb-5 text-2xl font-bold text-gray-900">
                  Your Rights
                </h2>

                <p className="leading-8 text-gray-700">
                  You may request to access, update, correct, or delete Your
                  Personal Data. You may also contact us to learn more about how
                  Your data is stored and processed.
                </p>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
                <h2 className="mb-5 text-2xl font-bold text-gray-900">
                  Children&apos;s Privacy
                </h2>

                <p className="leading-8 text-gray-700">
                  Our Service does not knowingly collect information from anyone
                  under the age of 16. If we discover such data has been
                  collected, we will remove it as soon as possible.
                </p>
              </div>
            </div>

            <div className="p-8 bg-gray-50 border border-gray-200 rounded-3xl">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Security
              </h2>

              <p className="leading-8 text-gray-700">
                We use commercially reasonable measures to protect Your Personal
                Data. However, no online transmission or electronic storage
                method is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-3xl shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                Contact Us
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy, you can
                  contact us using the details below:
                </p>

                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                  <p className="font-semibold text-gray-900">
                    IR-Tech Solutions
                  </p>

                  <p className="mt-3">
                    Email: irtech.solutions.team@gmail.com
                  </p>

                  <p className="mt-2">Phone: +92 311 5449525</p>

                  <p className="mt-2">
                    Address: Maple Homes Society, Mukarram Shah Street, House
                    #2, Banigala, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}