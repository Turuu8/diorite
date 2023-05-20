import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Timeline, Tween } from "react-gsap";

const test = () => {
  return (
    <div className="relative min-h-[100vh] w-full m-[0_auto] flex justify-center items-center bg-[yellow]">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[30vw] h-[90vh] z-10 border-4" />
      <Timeline target={<TargetWithNames />}>
        <Tween
          to={{
            y: "-100%",
            scrollTrigger: {
              trigger: "#ve",
              start: "0 0",
              end: "100% top",
              scrub: 1,
              //     markers: true,
            },
          }}
          target="div1"
        />
        <Tween
          to={{
            bottom: 0,
            scrollTrigger: {
              trigger: "#v",
              start: "0 0",
              end: "bottom top",
              scrub: 1,
              pin: true,
              markers: true,
            },
          }}
          target="div2"
        />
      </Timeline>
    </div>
  );
};

export default test;

const TargetWithNames = forwardRef((props, ref) => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  useImperativeHandle(ref, () => ({
    div1,
    div2,
    div3,
    div4,
  }));
  return (
    <div>
      <div
        ref={div1}
        id="ve"
        className="absolute top-0 left-[50%] w-[25vw] h-auto translate-x-[-50%] flex items-center justify-center flex-col"
      >
        <div className="h-[500px] w-full bg-[red]"></div>
        <div className="h-[500px] w-full bg-[blue]"></div>
        <div ref={div3} className="h-[500px] w-full bg-[pink]"></div>
        <div ref={div4} className="h-[500px] w-full bg-[orange]"></div>
      </div>
      <div id="v" ref={div2} className="w-[20%] absolute top-0 right-0 z-10 h-[100%]">
        <h1 className="text-[100px]">hello</h1>
      </div>
    </div>
  );
});
