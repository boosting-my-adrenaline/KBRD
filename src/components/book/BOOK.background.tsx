import React, { useEffect, useState } from 'react'

export const BOOKBackground: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  function getWindowDimensions(): { width: number; height: number } {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        width: '4860px',
        backgroundColor: 'lightblue',
        top: 0,
        bottom: 0,
        // display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        // transform: `translateX(-${4150 - windowDimensions.width}px)`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 4860 1080"
        height="100%"
        // width={windowDimensions.width * 3}
        // style={{ transform: 'translateX(-2380px)' }}
        // width="100%"
      >
        <linearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={1545.3}
          y1={1081.3}
          x2={1545.3}
          y2={1081.3}
        >
          <stop offset={0.344} stopColor="#d23467" />
          <stop offset={0.667} stopColor="#5894f9" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          x1={1658.4}
          y1={1081.3}
          x2={1658.4}
          y2={1081.3}
        >
          <stop offset={0.174} stopColor="#de4467" />
          <stop offset={0.838} stopColor="#72a6fb" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          x1={3171.4}
          y1={1081.3}
          x2={3171.4}
          y2={1081.3}
        >
          <stop offset={0.174} stopColor="#de4467" />
          <stop offset={0.838} stopColor="#72a6fb" />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          gradientUnits="userSpaceOnUse"
          x1={1620.4}
          y1={1081.3}
          x2={1620.4}
          y2={1081.3}
        >
          <stop offset={0.252} stopColor="#fef3f3" />
          <stop offset={0.73} stopColor="#dbeafe" />
        </linearGradient>
        <path fill="none" d="M3.6 1081.3L0 485.3" />
        <linearGradient
          id="prefix__e"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={540.65}
          x2={4860}
          y2={540.65}
        >
          <stop offset={0.465} stopColor="#fee2e2" />
          <stop offset={0.581} stopColor="#dbeafe" />
        </linearGradient>
        <path fill="url(#prefix__e)" d="M0 0h4860v1081.3H0z" />
        <linearGradient
          id="prefix__f"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={974.4}
          x2={4860}
          y2={974.4}
        >
          <stop offset={0.454} stopColor="#fa7268" />
          <stop offset={0.562} stopColor="#c0d9fe" />
        </linearGradient>
        <path
          d="M4860 1081.3V880.2l-226 37.3-237.6-34.1-232.2 22-230.4-14-232.2-24-230.4 63-232.2-38-409.1 30.3-164.2 6.5-177.5-20.2c-55.4 8.4-121.7 16.1-197.3 20.2-96.6 5.2-181.5 3-249.5-1.3-18.3-1.6-46.1-4.2-79.7-8l-242.3-20.6c-40.7-4-72.6-7.5-100.6-10.2l-21-2c-42.9-1.7-61.8-4.1-103.2-2.6-41.4 1.5-82.8 6.5-124.6 14.7-41.6 8.1-83.7 19.5-125.3 19.3-41.8-.2-83.2-11.8-124.6-13.8s-82.8 5.6-124.2 10c-41.4 4.3-82.8 5.3-124.6 5.1-41.6-.1-83.7-1.5-125.3-8.1-41.6-6.7-83-18.7-124.4-20.9-41.4-2.1-82.8 5.5-124.2 5.5s-82.8-7.6-124.6-5.3c-41.6 2.3-83.7 14.7-125.3 20.5-41.8 5.8-83.2 5.2-124.6.2s-82.8-14.4-103.5-19L0 888.4v193"
          fill="url(#prefix__f)"
        />
        <linearGradient
          id="prefix__g"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={987.8}
          x2={4860}
          y2={987.8}
        >
          <stop offset={0.39} stopColor="#f16367" />
          <stop offset={0.582} stopColor="#a6c8fe" />
        </linearGradient>
        <path
          d="M4860 1081.3v-177l-232.6 37-230.4-29-232.2-18-230.4 29-232.2 35-230.4-32-232.2 9-234.1 15.9-316.4-17.4-125.6 13.6s-138.9-10.2-219.8-10.9-155.8 20.1-207.7 39.6-236.7-31.5-236.7-31.5-187.2-28.8-216.1-30.2c-29-1.3-63.4 9-63.4 9l-20.7 5.3c-20.7 5.4-62.1 16-103.5 14.4-41.4-1.7-82.8-15.7-124.6-24.4-41.6-8.6-83.7-12-125.3-8-41.8 4-83.2 15.4-124.6 22.7s-82.8 10.7-124.2 5.2c-41.4-5.5-82.8-19.9-124.6-19.4-41.6.5-83.7 15.9-125.3 18.5-41.8 2.7-83.2-7.3-124.6-7.1-41.4.1-82.8 10.5-124.2 15.1-41.4 4.7-82.8 3.7-124.6.4-41.6-3.4-83.7-9-125.3-11-41.8-2-83.2-.4-124.6 2-41.4 2.3-82.8 5.3-103.5 6.8L0 945.3v136"
          fill="url(#prefix__g)"
        />
        <linearGradient
          id="prefix__h"
          gradientUnits="userSpaceOnUse"
          x1={-0.2}
          y1={1002.35}
          x2={4860}
          y2={1002.35}
        >
          <stop offset={0.452} stopColor="#e85467" />
          <stop offset={0.586} stopColor="#8cb7fd" />
        </linearGradient>
        <path
          d="M4860 1081.3v-150l-184.6 15.2-238.4 29.4-240.2-38.5-238.4 41.6-240.2-55.7-238.4 27.4-240.2-10.3-183.3 31.5-332.1 26s-230.6-23.7-299.4-16.5-266.9-12.9-334.5-30-150.9 10.7-202.8 24.9-109.9-19.5-148.5-8c-37.6 11.3-114.7 7.3-118.9 7.1l-20.7-.8c-20.7-.9-62.1-2.5-103.5-8.7s-82.8-16.8-124.6-19c-41.6-2.2-83.7 4.2-125.3 6.8-41.8 2.7-83.2 1.7-124.6-.5-41.4-2.1-82.8-5.5-124.2-1.3-41.4 4.2-82.8 15.8-124.6 16.2-41.6.3-83.7-10.7-125.3-11.4-41.8-.6-83.2 9-124.6 13.9-41.4 4.8-82.8 4.8-124.2-1.7s-82.8-19.5-124.6-24.7c-41.6-5.1-83.7-2.5-125.3 2.9-41.8 5.3-83.2 13.3-124.6 14.3s-82.8-5-103.5-8l-20.7-3v131"
          fill="url(#prefix__h)"
        />
        <linearGradient
          id="prefix__i"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={1019.5}
          x2={4860}
          y2={1019.5}
        >
          <stop offset={0.393} stopColor="#de4467" />
          <stop offset={0.576} stopColor="#72a6fb" />
        </linearGradient>
        <path
          d="M4860 1081.3V957.7l-234 16.4-230.4 14-232.2-17-230.4 26-232.2 10-230.4-16-232.2 1-337.9 7.9-260.8-34.9c-65.2 3.6-130.4 7.2-195.6 10.7-9.3-1.4-23.5-3.2-41.1-4.3-97.7-5.8-132 22.8-218.6 21.7-59.4-.7-53.6-14.9-126.8-16.1-34.9-.6-68.8 2.8-135.2 9.4-61.5 6.1-73.7 8.8-97.8 11-46.8 4.2-113.6 5.5-204.4-14.2l-20.7-3.8c-20.7-2.9-62.1-8.5-103.5-5.5s-82.8 14.6-124.6 15.3c-41.6.7-83.7-9.7-125.3-9.5-41.8.2-83.2 10.8-124.6 16.7-41.4 5.8-82.8 6.8-124.2 8-41.4 1.1-82.8 2.5-124.6-.5-41.6-3-83.7-10.4-125.3-17.2-41.8-6.8-83.2-13.2-124.6-16.3-41.4-3.2-82.8-3.2-124.2 1-41.4 4.1-82.8 12.5-124.6 14-41.6 1.5-83.7-3.9-125.3-7.2-41.8-3.3-83.2-4.7-124.6-.5s-82.8 13.8-103.5 18.7L0 1001.3v80"
          fill="url(#prefix__i)"
        />
        <linearGradient
          id="prefix__j"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={1034.036}
          x2={4860}
          y2={1034.036}
        >
          <stop offset={0.426} stopColor="#d23467" />
          <stop offset={0.583} stopColor="#5894f9" />
        </linearGradient>
        <path
          d="M4860 1081.3v-48.7l-232.8 3.9-230.4-37-232.2 22-230.4-16-232.2-13-230.4 3-232.1 40v-.2c-48.6-8.7-97.3-17.5-145.9-26.2-25 3.2-59.2 7.2-100.2 10.5-25.9 2.1-72.9 6-118.4 6.7-53.8.8-49.8-3.8-216.1-17.2-86.4-7-115.1-8-146.1-7.6-15.4.2-29.6.8-51.9 0-54.4-1.9-93.4-9.4-103.4-11.1-62.3-10.9-128.6 5.3-248 15.2-165.9 13.7-199.9-4.3-396 13.7-40 3.7-30.9 5.3-52.1 8l-41.4 3-20.7.7c-20.7.6-62.1 2-103.5-1.5s-82.8-11.9-124.6-15.4c-41.6-3.5-83.7-2.1-125.3 1.9-41.8 4-83.2 10.6-124.6 12.1s-82.8-2.1-124.2-4.8c-41.4-2.7-82.8-4.3-124.6-2.3-41.6 2-83.7 7.6-125.3 10.6-41.8 3-83.2 3.4-124.6 1.5-41.4-1.8-82.8-5.8-124.2-10.3-41.4-4.5-82.8-9.5-124.6-10.3-41.6-.9-83.7 2.5-125.3 6.1-41.8 3.7-83.2 7.7-124.6 7-41.4-.6-82.8-6-103.5-8.6L0 1014.3v67"
          fill="url(#prefix__j)"
        />
        <linearGradient
          id="prefix__k"
          gradientUnits="userSpaceOnUse"
          x1={-0.1}
          y1={1050.35}
          x2={4860}
          y2={1050.35}
        >
          <stop offset={0.332} stopColor="#c62368" />
          <stop offset={0.667} stopColor="#3b82f6" />
        </linearGradient>
        <path
          d="M4860 1081.3v-30.8l-232.2-1.2-230.4-18-232.2 21-230.4 8-232.2-25-230.4 19-232.2-4v.1l-381.2-31-339.4 5.5s-166.7 12.2-199.3 16.4-176.4-10.7-240.4 0-221.1 17.4-264.5 10.7c-43.1-6.7-164.6-5.7-180.8-6.7l-34.9-2c-20.7-2-62.1-6-103.5-8.8-41.4-2.9-82.8-4.5-124.6-.9-41.6 3.7-83.7 12.7-125.3 16-41.8 3.4-83.2 1-124.6-2.5s-82.8-8.1-124.2-8c-41.4.2-82.8 5.2-124.6 6.7-41.6 1.5-83.7-.5-125.3-2.7-41.8-2.1-83.2-4.5-124.6-2.1-41.4 2.3-82.8 9.3-124.2 11.3s-82.8-1-124.6-4.8c-41.6-3.9-83.7-8.5-125.3-8.9-41.8-.3-83.2 3.7-124.6 6.7s-82.8 5-103.5 6l-20.7 1v29"
          fill="url(#prefix__k)"
        />
      </svg>
    </div>
  )
}
