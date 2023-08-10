import { Parent } from "@/components/Parent";

import { useTranslation } from "next-i18next";

export default function aboutus() {
  const { t } = useTranslation();
  return (
    <>
      <Parent>
        {/* <div class="min-h-screen bg-white">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"> */}
        <div
          className=" md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12   px-80 bg-bgLight dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <div className="md:5/12 lg:w-11/12">
            <img
              className="rounded"
              src="/aboutusimg.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12 font-serif">
            <h2 className="text-6xl text-gray-900 font-bold md:text-4xl dark:text-fontDark">
              About Dailypulse App
            </h2>
            <p className="mt-6 text-gray-600 dark:text-fontDark">
              Welcome to Daily Pulse, a premier digital platform that harnesses
              the power of cutting-edge technology to deliver real-time, global
              news. Established in 2023, we leverage APIs to collate and curate
              news from a myriad of reliable sources across the globe. Our aim
              is to provide you with a comprehensive, balanced, and diverse
              perspective on world events, right at your fingertips. Through
              intelligent algorithms, we filter through the noise to offer you
              the most significant stories spanning numerous topics, including
              politics, science, technology, business, and culture. Our team of
              data scientists and experienced editors work tirelessly to ensure
              the accuracy and timeliness of the information we provide.
            </p>

            <p className="mt-4 text-gray-600 dark:text-fontDark">
              {" "}
              Daily Pulse is your one-stop solution for instant access to the
              pulse of the world, helping you stay informed, connected, and
              empowered in an ever-evolving global landscape.
            </p>
          </div>
        </div>
        {/* </div>
        </div> */}
      </Parent>
    </>
  );
}
