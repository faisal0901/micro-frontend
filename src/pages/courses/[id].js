import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Course from "src/constant/api/course";
import Youtube from "react-youtube";
import { CSSTransition } from "react-transition-group";
import Header from "src/pages/parts/header";
import IconStudent from "public/images/icon-student.svg";
import IconCertificate from "public/images/icon-certificate.svg";
import IconVideo from "public/images/icon-video.svg";
import Feature from "src/pages/parts/details/feature";
import CoursePhoto from "src/pages/parts/details/coursePhoto";
import Footer from "src/pages/parts/Footer";
function DetailsCourse({ data }) {
  console.log(data);
  const footer = useRef(null);
  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const StickyOffsetTop = footer.current.getBoundingClientRect().top;

    const stickyMetaToggler = () => {
      // view relatif dari footer >= view dari atas +tinggi seluruh windows
      setisSticky(StickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };
    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  });
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
        {data.chapters?.[0].lessons?.[0].video && (
          <div className="video-wrapper">
            <Youtube
              videoId={data.chapters?.[0].lessons?.[0].video}
              id={data.chapters?.[0].lessons?.[0].video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}
        <div className="absolute inset-0 z-0 h-full w-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online:</h3>
            <h4 className="text-6xl text-teal-500 font-semibold">
              {data?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between align-center flex-wrap">
              <Feature
                data={{
                  icon: <IconStudent className="fill-teal-500" />,
                  meta: "Student",
                  value: data?.total_student ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <IconVideo className="fill-teal-500" />,
                  meta: "video",
                  value: data?.total_video ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <IconCertificate className="fill-teal-500" />,
                  meta: "Certificate",
                  value: data?.certificate === 1 ? "Tersedia" : "-",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white shadow-md  z-50 left-0  py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-2xl text-gray-900">
                      {" "}
                      {data?.name ?? "Nama Kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-teal-500 whitespace-no-wrap mr-4">
                    {data?.type === "free" ? (
                      "free"
                    ) : (
                      <div>{data?.price ?? 0}</div>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    className="bg-orange-500 hover:bg-orange-400 px-6 py-3 whitespace-nowrap text-white text-center"
                    rel={"noopener noreferer"}
                    target="_blank"
                  >
                    {data?.type === "free" ? "enroll Now" : "Buy now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="w-3/4 mx-auto mt-8">
          <div className="w-3/4">
            <section>
              <h6 className="font-weight-medium text-gray-900 text-2xl mb-4">
                About <span className="text-teal-500">course</span>
              </h6>
              <p className="text-gray-600 text-lg leading-relaxed mb-3">
                {data?.description ?? "no description"}
              </p>
            </section>
            <section className="mt-10">
              <h6 className="font-weight-medium text-gray-900 text-2xl mb-4">
                Course <span className="text-teal-500">Photos</span>
              </h6>
              <div className="flex justify-start items-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map((photo, index) => (
                    <CoursePhoto data={photo.image} key={index} />
                  ))
                ) : (
                  <div className="w-full"> no image</div>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="mt-24 bg-indigo-900 py-12" ref={footer}>
        <Footer></Footer>
      </section>
    </>
  );
}
DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await Course.detail(id);
    return { data };
  } catch (error) {
    return { error };
  }
};
export default DetailsCourse;
