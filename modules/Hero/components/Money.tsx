"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Money() {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <motion.div 
      initial={{
        y:-180
      }}
      animate={{
        y:0
      }}
      transition={{
        type: 'tween',
        ease: [0.8, 0.2, 0, 1],
        duration: 1.5,
        delay: 0.1
      }}
      className="relaitve ">
      <motion.svg
        animate={{
          y: [0, -10, 0],
          transition: {  duration: 2, repeat: Infinity },
        }}
        className="top-[70px] left-[10px] relative"
        width="100"
        height="100"
        viewBox="0 0 1347 778"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_102_2)">
          <path
            d="M1009.16 627.085L1009.11 627.109L1009.07 627.135C916.495 680.577 795.044 707.352 673.491 707.352C551.938 707.352 430.488 680.577 337.915 627.135L337.896 627.123L337.877 627.113C243.454 575.534 194.429 497.331 191.89 418.927C189.351 340.543 233.26 261.484 325.696 208.121C418.257 154.685 545.755 127.294 673.384 126.687C801.014 126.08 928.503 152.258 1021.05 205.688C1113.42 259.014 1155.16 341.683 1151.55 422.247C1147.93 502.838 1098.92 581.614 1009.16 627.085Z"
            fill="white"
            fillOpacity="0.5"
            stroke="url(#paint0_linear_102_2)"
            strokeWidth="3.78745"
          />
        </g>
        <g filter="url(#filter1_b_102_2)">
          <circle
            cx="388.575"
            cy="388.575"
            r="386.142"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.450195 389.097)"
            fill="white"
            fillOpacity="0.5"
            stroke="url(#paint1_linear_102_2)"
            strokeWidth="4.86455"
          />
        </g>
        <g filter="url(#filter2_i_102_2)">
          <path
            d="M654.328 463.837C686.436 482.373 737.082 482.946 767.536 465.365L829.766 429.44C856.247 414.152 855.255 388.736 827.118 372.493C796.996 355.103 772.832 356.441 746.351 363.702L611.958 401.157C585.477 408.419 561.644 409.948 531.19 392.367C503.385 376.315 502.06 350.708 528.542 335.421L590.773 299.495C621.226 281.914 671.872 282.487 703.981 301.023"
            stroke="#337EFF"
            strokeWidth="47.057"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M530.199 296.628L828.113 468.614"
            stroke="#337EFF"
            strokeWidth="47.057"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_102_2"
            x="60.1705"
            y="-4.93861"
            width="1223.21"
            height="843.906"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="64.8607" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_102_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_102_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_102_2"
            x="67.8594"
            y="-15.3705"
            width="1211.27"
            height="808.934"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="64.8607" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_102_2"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_102_2"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_i_102_2"
            x="480.657"
            y="270.065"
            width="397.112"
            height="228.518"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="8.80474" />
            <feGaussianBlur stdDeviation="1.89372" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_102_2"
            />
          </filter>
          <linearGradient
            id="paint0_linear_102_2"
            x1="273.399"
            y1="362.517"
            x2="507.872"
            y2="725.145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.846595" stopColor="white" stopOpacity="0.06" />
            <stop offset="1" stopColor="white" stopOpacity="0.23" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_102_2"
            x1="67.3375"
            y1="316.111"
            x2="408.522"
            y2="636.105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.43" />
            <stop offset="0.846595" stopColor="white" stopOpacity="0.44" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
      </motion.div>

    <motion.div
          initial={{
            y:-180
          }}
          animate={{
            y:0
          }}
          transition={{
            type: 'tween',
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
    className="relative z-[-9]"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 1347 1002"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_102_3)">
          <path
            d="M1022.22 204.162C1208.07 311.457 1190.86 537.383 1010.23 628.889C824.375 736.183 523.042 736.183 337.186 628.889C147.41 525.223 139.11 313.889 324.966 206.595C510.823 99.2996 836.362 96.8668 1022.22 204.162Z"
            fill="#1864F8"
          />
        </g>
        <circle
          cx="388.575"
          cy="388.575"
          r="386.142"
          transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.664062 389.21)"
          fill="#3383FF"
          stroke="url(#paint0_linear_102_3)"
          strokeWidth="4.86455"
        />
        <defs>
          <filter
            id="filter0_d_102_3"
            x="60.3877"
            y="124.897"
            width="1223.21"
            height="876.336"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="162.152" />
            <feGaussianBlur stdDeviation="64.8607" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.343982 0 0 0 0 0.567028 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_102_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_102_3"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_102_3"
            x1="67.3375"
            y1="316.111"
            x2="408.522"
            y2="636.105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.43" />
            <stop offset="0.846595" stopColor="white" stopOpacity="0.44" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>

    </div>
  );
}
