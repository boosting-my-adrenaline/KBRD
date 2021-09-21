import React, { useEffect, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const Background: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  const currentChapter = useTypedSelector((state) => state.nav.chapter)

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

  const BGWidth = (): number => {
    if (currentChapter === 'BOOK') {
      return 8500
    } else if (currentChapter === 'TAP') {
      return 13530
    }
    return 1950
  }

  return (
    <div
      style={{
        position: 'fixed',
        width: BGWidth(),
        backgroundColor: 'rgb(219, 234, 254)',
        transition: '1.25s ease-in-out',
        top: 0,
        bottom: 0,
        right: 0,
        // display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        // transform: `translateX(-${4150 - windowDimensions.width}px)`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15000 1080"
        height="100%"
      >
        <linearGradient
          id="prefix__a"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={540}
          x2={15000}
          y2={540}
        >
          <stop offset={0.235} stopColor="#d1fae5" />
          <stop offset={0.364} stopColor="#fee2e2" />
          <stop offset={0.682} stopColor="#f8e3e7" />
          <stop offset={0.811} stopColor="#dbeafe" />
        </linearGradient>
        <path fill="url(#prefix__a)" d="M0 0h15000v1080H0z" />
        <path
          d="M468.31 0h-73.59v59.4h97.01v61.2H133.8V180h270.95v59.4H214.08v61.2h86.97V360h33.45v59.4H130.46v61.2h66.9V540h6.69v59.4h-36.8v61.2H103.7V720h301.05v59.4H130.46v61.2h434.86V900H207.39v59.4h97.01v61.2H97.01v59.4H0V0h468.31z"
          fill="#6ee7b7"
        />
        <path
          d="M234.15 0h120.42v59.4h80.28v61.2h-66.9V180H153.87v59.4h297.71v61.2h-334.5V360h73.59v59.4h-50.18v61.2h103.7V540h-133.8v59.4h137.15v61.2h90.32V720H143.84v59.4h56.87v61.2h-86.97V900H267.6v59.4h-70.25v61.2h70.25v59.4H0V0h234.15z"
          fill="#65deae"
        />
        <path
          d="M434.86 0H297.71v59.4h170.6v61.2H334.5V180H183.98v59.4h260.91v61.2H66.9V360h254.22v59.4h70.25v61.2h-50.18V540h-36.8v59.4H113.73v61.2h277.64V720h63.56v59.4h-86.97v61.2h30.11V900h60.21v59.4h-244.2v61.2h244.19v59.4H0V0h434.86z"
          fill="#5bd5a5"
        />
        <path
          d="M414.79 0h-86.97v59.4H76.94v61.2h20.07V180h123.77v59.4h-6.69v61.2h-40.14V360h-46.83v59.4h267.6v61.2H183.98V540h127.11v59.4H160.56v61.2h10.04V720h113.73v59.4H130.46v61.2h-23.42V900h207.39v59.4H267.6v61.2H83.63v59.4H0V0h414.79z"
          fill="#52cc9c"
        />
        <path
          d="M190.67 0H56.87v59.4h291.02v61.2h-16.73V180H190.67v59.4h-50.18v61.2H334.5V360H66.9v59.4h153.87v61.2h40.14V540h-46.83v59.4h140.49v61.2H170.6V720h76.94v59.4h-133.8v61.2h183.98V900h-140.5v59.4h46.83v61.2h23.42v59.4H0V0h190.67z"
          fill="#48c293"
        />
        <path
          d="M280.98 0h20.07v59.4h-97.01v61.2H73.59V180h153.87v59.4h30.11v61.2h-23.42V360H97.01v59.4h123.77v61.2H50.18V540h107.04v59.4h123.77v61.2H153.87V720h123.77v59.4H137.15v61.2h-66.9V900h224.12v59.4H83.63v61.2h143.84v59.4H0V0h280.98z"
          fill="#3eb98b"
        />
        <path
          d="M200.7 0h-73.59v59.4h33.45v61.2h60.21V180H60.21v59.4h3.35v61.2h33.45V360H83.63v59.4h107.04v61.2h3.35V540H53.52v59.4H33.45v61.2h133.8V720h-36.8v59.4h-20.07v61.2h70.25V900H36.8v59.4h153.87v61.2h-66.9v59.4H0V0h200.7z"
          fill="#33b082"
        />
        <path
          d="M30.11 0h36.8v59.4h23.42v61.2h63.56V180h-26.76v59.4H103.7v61.2h-3.35V360H83.63v59.4h30.11v61.2h33.45V540H60.21v59.4h117.08v61.2h-56.87V720H46.83v59.4h130.46v61.2H97.01V900h-3.35v59.4h93.66v61.2h-97v59.4H0V0h30.11z"
          fill="#28a87a"
        />
        <path
          d="M66.9 0h73.59v59.4H16.73v61.2h93.66V180h43.49v59.4h-33.45v61.2h33.45V360H66.9v59.4h40.14v61.2h46.83V540h-6.69v59.4H63.56v61.2h23.42V720H36.8v59.4h107.04v61.2H23.42V900h66.9v59.4H73.59v61.2h20.07v59.4H0V0h66.9z"
          fill="#1a9f71"
        />
        <path
          d="M73.59 0h16.73v59.4H73.59v61.2h-30.1V180h16.73v59.4H30.11v61.2h70.25V360h-6.69v59.4H73.59v61.2H36.8V540h16.73v59.4h43.49v61.2H66.9V720h20.07v59.4H63.56v61.2H20.07V900h50.18v59.4H40.14v61.2h43.49v59.4H0V0h73.59z"
          fill="#059669"
        />
        <linearGradient
          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          x1={2102.239}
          y1={973.135}
          x2={15000}
          y2={973.135}
        >
          <stop offset={0.112} stopColor="#d1fae5" />
          <stop offset={0.283} stopColor="#fa7268" />
          <stop offset={0.714} stopColor="#fa7268" />
          <stop offset={0.818} stopColor="#c0d9fe" />
        </linearGradient>
        <path
          d="M2102.24 879.06v200.84l3898.13.1 8999.63-.1V879.06l-418.5 37.25-439.98-34.06-429.98 21.97-426.65-13.98-429.98-23.97-426.65 62.92-429.98-37.95-757.56 30.26-304.06 6.5-328.69-20.17c-102.59 8.39-225.36 16.08-365.36 20.17-178.88 5.19-336.1 3-462.02-1.3-33.89-1.6-85.37-4.19-147.59-7.99l-448.69-20.57c-75.37-3.99-134.44-7.49-186.29-10.19l-38.89-2c-79.44-1.7-114.44-4.09-191.1-2.6-76.66 1.5-153.33 6.49-230.73 14.68-77.03 8.09-154.99 19.47-232.03 19.28-77.4-.2-154.07-11.78-230.73-13.78s-153.33 5.59-229.99 9.99c-76.66 4.29-153.33 5.29-230.73 5.09-77.03-.1-154.99-1.5-232.03-8.09-77.03-6.69-153.7-18.68-230.36-20.87-76.66-2.1-153.33 5.49-229.99 5.49s-153.33-7.59-230.73-5.29c-77.03 2.3-154.99 14.68-232.03 20.47-77.4 5.79-154.07 5.19-230.73.2s-153.33-14.38-191.66-18.98l-35.92-4.29-35.92 4.29c-38.33 4.6-115 13.99-191.66 18.98s-153.33 5.59-230.73-.2c-77.04-5.79-155-18.17-232.03-20.47-77.4-2.3-154.07 5.29-230.73 5.29s-153.33-7.59-229.99-5.49c-76.66 2.19-153.33 14.18-230.36 20.87-77.04 6.59-155 7.99-232.03 8.09-77.4.2-154.07-.8-230.73-5.09-76.66-4.4-153.33-11.99-229.99-9.99s-153.33 13.58-230.73 13.78c-77.04.19-155-11.19-232.03-19.28-77.4-8.19-154.07-13.18-230.73-14.68-76.66-1.49-111.66.9-191.1 2.6l-38.89 2c-51.85 2.7-110.92 6.2-186.29 10.19"
          fill="url(#prefix__b)"
        />
        <linearGradient
          id="prefix__c"
          gradientUnits="userSpaceOnUse"
          x1={2102.447}
          y1={986.57}
          x2={15000}
          y2={986.57}
        >
          <stop offset={0.111} stopColor="#d1fae5" />
          <stop offset={0.285} stopColor="#f16367" />
          <stop offset={0.717} stopColor="#f16367" />
          <stop offset={0.819} stopColor="#a6c8fe" />
        </linearGradient>
        <path
          d="M2102.45 903.23V1080l3898.12-.02v-.1l8999.43.02V903.13l-430.72 36.95-426.65-28.96-429.98-17.98L13286 922.1l-429.98 34.95-426.65-31.96-429.98 8.99-433.5 15.88-585.9-17.38-232.58 13.58s-257.21-10.19-407.02-10.89c-149.81-.7-288.51 20.07-384.61 39.55-96.11 19.47-438.32-31.46-438.32-31.46s-346.65-28.76-400.17-30.16c-53.7-1.3-117.4 8.99-117.4 8.99l-38.33 5.29c-38.33 5.39-115 15.98-191.66 14.38-76.66-1.7-153.33-15.68-230.73-24.37-77.03-8.59-154.99-11.98-232.03-7.99-77.4 3.99-154.07 15.38-230.73 22.67-76.66 7.29-153.33 10.69-229.99 5.19-76.66-5.49-153.33-19.87-230.73-19.37-77.03.5-154.99 15.88-232.03 18.48-77.4 2.7-154.07-7.29-230.73-7.09-76.66.1-153.33 10.49-229.99 15.08-76.66 4.69-153.33 3.7-230.73.4-77.03-3.4-154.99-8.99-232.03-10.99-77.4-2-154.07-.4-230.73 2-76.66 2.3-153.33 5.29-191.66 6.79l-37.41 1.4v.09l-37.22-1.39c-38.33-1.5-115-4.49-191.66-6.79-76.66-2.4-153.33-4-230.73-2-77.04 2-155 7.59-232.03 10.99-77.4 3.3-154.07 4.29-230.73-.4-76.66-4.59-153.33-14.98-229.99-15.08-76.66-.2-153.33 9.79-230.73 7.09-77.04-2.6-155-17.98-232.03-18.48-77.4-.5-154.07 13.88-230.73 19.37-76.66 5.5-153.33 2.1-229.99-5.19s-153.33-18.68-230.73-22.67c-77.04-3.99-155-.6-232.03 7.99-77.4 8.69-154.07 22.67-230.73 24.37-76.66 1.6-153.33-8.99-191.66-14.38l-38.33-5.29s-63.7-10.29-117.4-8.99c-53.52 1.4-400.17 30.16-400.17 30.16"
          fill="url(#prefix__c)"
        />
        <linearGradient
          id="prefix__d"
          gradientUnits="userSpaceOnUse"
          x1={2101.5}
          y1={1001.05}
          x2={15000}
          y2={1001.05}
        >
          <stop offset={0.111} stopColor="#d1fae5" />
          <stop offset={0.285} stopColor="#e85467" />
          <stop offset={0.717} stopColor="#e85467" />
          <stop offset={0.819} stopColor="#8cb7fd" />
        </linearGradient>
        <path
          d="M2101.5 930.09v149.81l3898.5.1 9000-.1V930.09l-341.84 15.18-441.46 29.36-444.8-38.45-441.46 41.55-444.8-55.63-441.46 27.36-444.8-10.29-339.43 31.46-614.97 25.97s-427.02-23.67-554.42-16.48c-127.4 7.19-494.24-12.88-619.42-29.96-125.18-17.08-279.43 10.69-375.54 24.87-96.11 14.18-203.51-19.47-274.99-7.99-69.63 11.29-212.4 7.29-220.18 7.09l-38.33-.8c-38.33-.9-115-2.5-191.66-8.69-76.66-6.19-153.33-16.78-230.73-18.98-77.03-2.2-154.99 4.19-232.03 6.79-77.4 2.7-154.07 1.7-230.73-.5-76.66-2.1-153.33-5.49-229.99-1.3s-153.33 15.78-230.73 16.18c-77.03.3-154.99-10.69-232.03-11.39-77.4-.6-154.07 8.99-230.73 13.88-76.66 4.79-153.33 4.79-229.99-1.7s-153.33-19.47-230.73-24.67c-77.03-5.09-154.99-2.5-232.03 2.9-77.4 5.29-154.07 13.28-230.73 14.28s-153.33-4.99-191.66-7.99l-38.33-3-38.33 3c-38.33 3-115 8.99-191.66 7.99s-153.33-8.99-230.73-14.28c-77.04-5.4-155-7.99-232.03-2.9-77.4 5.2-154.07 18.18-230.73 24.67s-153.33 6.49-229.99 1.7c-76.66-4.89-153.33-14.48-230.73-13.88-77.04.7-155 11.69-232.03 11.39-77.4-.4-154.07-11.99-230.73-16.18s-153.33-.8-229.99 1.3c-76.66 2.2-153.33 3.2-230.73.5-77.04-2.6-155-8.99-232.03-6.79-77.4 2.2-154.07 12.79-230.73 18.98s-153.33 7.79-191.66 8.69l-38.33.8c-7.78.2-150.55 4.2-220.18-7.09-71.48-11.48-178.88 22.17-274.99 7.99"
          fill="url(#prefix__d)"
        />
        <linearGradient
          id="prefix__e"
          gradientUnits="userSpaceOnUse"
          x1={2102.238}
          y1={1018.28}
          x2={15000}
          y2={1018.28}
        >
          <stop offset={0.109} stopColor="#d1fae5" />
          <stop offset={0.289} stopColor="#de4467" />
          <stop offset={0.718} stopColor="#de4467" />
          <stop offset={0.819} stopColor="#72a6fb" />
        </linearGradient>
        <path
          d="M2102.24 956.56V1080H15000V956.56l-433.32 16.38-426.65 13.98-429.98-16.98-426.65 25.97-429.98 9.99-426.65-15.98-429.98 1-625.71 7.89-482.94-34.85c-120.74 3.6-241.47 7.19-362.21 10.69-17.22-1.4-43.52-3.2-76.11-4.29-180.92-5.79-244.43 22.77-404.8 21.67-110-.7-99.26-14.88-234.81-16.08-64.63-.6-127.4 2.8-250.36 9.39-113.88 6.09-136.48 8.79-181.1 10.99-86.66 4.19-210.36 5.49-378.5-14.18l-38.33-3.8c-38.33-2.9-115-8.49-191.66-5.49s-153.33 14.58-230.73 15.28c-77.03.7-154.99-9.69-232.03-9.49-77.4.2-154.07 10.79-230.73 16.68-76.66 5.79-153.33 6.79-229.99 7.99-76.66 1.1-153.33 2.5-230.73-.5-77.03-3-154.99-10.39-232.03-17.18-77.4-6.79-154.07-13.18-230.73-16.28-76.66-3.2-153.33-3.2-229.99 1-76.66 4.09-153.33 12.48-230.73 13.98-77.03 1.5-154.99-3.89-232.03-7.19-77.4-3.3-154.07-4.69-230.73-.5s-153.33 13.77-191.66 18.66l-37.78 4.79-37.78-4.79c-38.33-4.89-115-14.47-191.66-18.66s-153.33-2.8-230.73.5c-77.04 3.3-155 8.69-232.03 7.19-77.4-1.5-154.07-9.89-230.73-13.98-76.66-4.2-153.33-4.2-229.99-1-76.66 3.1-153.33 9.49-230.73 16.28-77.04 6.79-155 14.18-232.03 17.18-77.4 3-154.07 1.6-230.73.5-76.66-1.2-153.33-2.2-229.99-7.99-76.66-5.89-153.33-16.48-230.73-16.68-77.04-.2-155 10.19-232.03 9.49-77.4-.7-154.07-12.28-230.73-15.28s-153.33 2.59-191.66 5.49l-38.33 3.8c-168.14 19.67-291.84 18.37-378.5 14.18-44.62-2.2-67.22-4.9-181.1-10.99"
          fill="url(#prefix__e)"
        />
        <linearGradient
          id="prefix__f"
          gradientUnits="userSpaceOnUse"
          x1={2102.261}
          y1={1032.792}
          x2={15000}
          y2={1032.792}
        >
          <stop offset={0.109} stopColor="#d1fae5" />
          <stop offset={0.291} stopColor="#d23467" />
          <stop offset={0.718} stopColor="#d23467" />
          <stop offset={0.819} stopColor="#5894f9" />
        </linearGradient>
        <path
          d="M2102.26 1031.36V1080l3898.12-.02 8999.62.02v-48.64l-431.09 3.89-426.65-36.95-429.98 21.97-426.65-15.98-429.98-12.98-426.65 3-429.8 39.95v-.2c-90-8.69-180.18-17.48-270.17-26.17-46.29 3.2-109.62 7.19-185.55 10.49-47.96 2.1-134.99 5.99-219.25 6.69-99.63.8-92.22-3.8-400.17-17.18-159.99-6.99-213.14-7.99-270.54-7.59-28.52.2-54.81.8-96.11 0-100.74-1.9-172.96-9.39-191.47-11.09-115.37-10.89-238.14 5.29-459.24 15.18-307.21 13.68-370.17-4.29-733.3 13.68-74.07 3.7-57.22 5.29-96.48 7.99l-76.66 3-38.33.7c-38.33.6-115 2-191.66-1.5s-153.33-11.88-230.73-15.38c-77.03-3.5-154.99-2.1-232.03 1.9-77.4 3.99-154.07 10.59-230.73 12.08-76.66 1.5-153.33-2.1-229.99-4.79-76.66-2.7-153.33-4.29-230.73-2.3-77.03 2-154.99 7.59-232.03 10.59-77.4 3-154.07 3.4-230.73 1.5-76.66-1.8-153.33-5.79-229.99-10.29-76.66-4.5-153.33-9.49-230.73-10.29-77.03-.9-154.99 2.5-232.03 6.09-77.4 3.7-154.07 7.69-230.73 6.99-76.66-.6-153.33-5.99-191.66-8.59l-37.78-2.7-37.78 2.7c-38.33 2.6-115 7.99-191.66 8.59-76.66.7-153.33-3.29-230.73-6.99-77.04-3.59-155-6.99-232.03-6.09-77.4.8-154.07 5.79-230.73 10.29-76.66 4.5-153.33 8.49-229.99 10.29-76.66 1.9-153.33 1.5-230.73-1.5-77.04-3-155-8.59-232.03-10.59-77.4-1.99-154.07-.4-230.73 2.3-76.66 2.69-153.33 6.29-229.99 4.79-76.66-1.49-153.33-8.09-230.73-12.08-77.04-4-155-5.4-232.03-1.9-77.4 3.5-154.07 11.88-230.73 15.38s-153.33 2.1-191.66 1.5l-38.33-.7-76.66-3c-39.26-2.7-22.41-4.29-96.48-7.99"
          fill="url(#prefix__f)"
        />
        <linearGradient
          id="prefix__g"
          gradientUnits="userSpaceOnUse"
          x1={2101.879}
          y1={1049.09}
          x2={15000}
          y2={1049.09}
        >
          <stop offset={0.109} stopColor="#d1fae5" />
          <stop offset={0.291} stopColor="#c62368" />
          <stop offset={0.72} stopColor="#c62368" />
          <stop offset={0.819} stopColor="#3b82f6" />
        </linearGradient>
        <path
          d="M2101.88 1049.24V1080l3898.31-.01 8999.81.01v-30.76l-429.98-1.2-426.65-17.98-429.98 20.97-426.65 7.99-429.98-24.97-426.65 18.98-429.98-3.99v.1l-705.9-30.96-628.49 5.49s-308.69 12.18-369.06 16.38c-60.37 4.19-326.65-10.69-445.17 0-118.52 10.69-409.43 17.38-489.79 10.69-79.81-6.69-304.8-5.69-334.8-6.69l-64.63-2c-38.33-2-115-5.99-191.66-8.79-76.66-2.9-153.33-4.49-230.73-.9-77.03 3.7-154.99 12.68-232.03 15.98-77.4 3.4-154.07 1-230.73-2.5s-153.33-8.09-229.99-7.99c-76.66.2-153.33 5.19-230.73 6.69-77.03 1.5-154.99-.5-232.03-2.7-77.4-2.1-154.07-4.49-230.73-2.1-76.66 2.3-153.33 9.29-229.99 11.29s-153.33-1-230.73-4.79c-77.03-3.9-154.99-8.49-232.03-8.89-77.4-.3-154.07 3.7-230.73 6.69s-153.33 4.99-191.66 5.99l-38.33 1-38.33-1c-38.33-1-115-3-191.66-5.99s-153.33-6.99-230.73-6.69c-77.04.4-155 4.99-232.03 8.89-77.4 3.79-154.07 6.79-230.73 4.79s-153.33-8.99-229.99-11.29c-76.66-2.39-153.33 0-230.73 2.1-77.04 2.2-155 4.2-232.03 2.7-77.4-1.5-154.07-6.49-230.73-6.69-76.66-.1-153.33 4.49-229.99 7.99s-153.33 5.9-230.73 2.5c-77.04-3.3-155-12.28-232.03-15.98-77.4-3.59-154.07-2-230.73.9-76.66 2.8-153.33 6.79-191.66 8.79l-64.63 2c-30 1-254.99 0-334.8 6.69"
          fill="url(#prefix__g)"
        />
      </svg>
    </div>
  )
}