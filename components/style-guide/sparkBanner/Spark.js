import React, { useState } from 'react'
import useAnimate from '../../../hooks/useAnimate'
import styles from './styles.module.scss'

const Spark = ({active}) => {
  return (
    <svg
      className={`${styles.svg} ${active ? '' : styles.hide}`}
      width="73"
      height="228"
      viewBox="0 0 73 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.42188 224.41H71.7019V1.03142H9.42188V224.41Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M41.6424 29.5544L42.4467 27.7233L42.4385 27.7197L42.4302 27.7162L41.6424 29.5544ZM44.7518 25.0076L42.9339 25.8415L43.9281 28.0087L45.8893 26.6526L44.7518 25.0076ZM47.6893 22.9763L48.8268 24.6213L50.1071 23.736L49.5632 22.2776L47.6893 22.9763ZM38.5018 32.2732L37.6895 34.1008L37.6999 34.1054L37.7104 34.11L38.5018 32.2732ZM34.1424 37.4607L35.8789 36.4684L34.7803 34.5459L32.9792 35.8338L34.1424 37.4607ZM31.0174 39.6951L29.8542 38.0682L28.4707 39.0573L29.2247 40.5818L31.0174 39.6951ZM39.7362 46.5388C42.649 46.5388 45.3604 45.7203 47.3886 44.1085C49.4531 42.468 50.7205 40.065 50.7205 37.1951H46.7205C46.7205 38.7939 46.0505 40.0627 44.9001 40.9769C43.7135 41.9199 41.9327 42.5388 39.7362 42.5388V46.5388ZM50.7205 37.1951C50.7205 34.5935 49.6688 32.6116 48.0455 31.0855C46.5068 29.639 44.463 28.6089 42.4467 27.7233L40.8381 31.3856C42.8062 32.25 44.3014 33.0558 45.3057 33.9999C46.2254 34.8645 46.7205 35.8279 46.7205 37.1951H50.7205ZM42.4302 27.7162C40.7458 26.9942 39.6411 26.5873 38.8368 26.0989C38.4719 25.8773 38.3278 25.7263 38.2768 25.6567C38.2555 25.6277 38.2518 25.6266 38.2518 25.5701H34.2518C34.2518 27.5797 35.544 28.7791 36.7605 29.5178C37.8859 30.2012 39.4765 30.8021 40.8546 31.3927L42.4302 27.7162ZM38.2518 25.5701C38.2518 25.4157 38.3253 25.1549 38.6889 24.8728C39.0567 24.5873 39.6543 24.3513 40.408 24.3513V20.3513C37.4924 20.3513 34.2518 22.2421 34.2518 25.5701H38.2518ZM40.408 24.3513C41.5666 24.3513 42.5229 24.9455 42.9339 25.8415L46.5696 24.1737C45.4181 21.6633 42.9058 20.3513 40.408 20.3513V24.3513ZM45.8893 26.6526L48.8268 24.6213L46.5518 21.3313L43.6143 23.3626L45.8893 26.6526ZM49.5632 22.2776C48.1862 18.5844 44.6393 16.4763 40.3768 16.4763V20.4763C43.3017 20.4763 45.1299 21.8369 45.8153 23.6751L49.5632 22.2776ZM40.3768 16.4763C35.0701 16.4763 30.2674 19.9441 30.2674 25.4763H34.2674C34.2674 22.7585 36.621 20.4763 40.3768 20.4763V16.4763ZM30.2674 25.4763C30.2674 28.1166 31.4067 30.0106 32.96 31.37C34.4139 32.6425 36.256 33.4637 37.6895 34.1008L39.3141 30.4456C37.7945 29.7702 36.5193 29.1695 35.5944 28.36C34.7687 27.6374 34.2674 26.7892 34.2674 25.4763H30.2674ZM37.7104 34.11C39.2319 34.7655 40.6048 35.3594 41.6152 36.0363C42.6827 36.7515 42.7518 37.1632 42.7518 37.2732H46.7518C46.7518 35.055 45.1646 33.5996 43.8415 32.7132C42.4613 31.7885 40.7091 31.0465 39.2932 30.4364L37.7104 34.11ZM42.7518 37.2732C42.7518 37.3986 42.7062 37.652 42.2347 37.9597C41.7414 38.2818 40.9021 38.5544 39.783 38.5544V42.5544C41.4921 42.5544 43.1372 42.1474 44.4212 41.3093C45.7271 40.4569 46.7518 39.0697 46.7518 37.2732H42.7518ZM39.783 38.5544C37.9954 38.5544 36.6082 37.7448 35.8789 36.4684L32.4059 38.453C33.9266 41.1141 36.7269 42.5544 39.783 42.5544V38.5544ZM32.9792 35.8338L29.8542 38.0682L32.1807 41.322L35.3057 39.0876L32.9792 35.8338ZM29.2247 40.5818C31.0485 44.269 34.9521 46.5388 39.7362 46.5388V42.5388C36.2389 42.5388 33.8613 40.9337 32.8101 38.8084L29.2247 40.5818ZM32.0799 84.1169H30.0799V86.1169H32.0799V84.1169ZM36.033 84.1169V86.1169H38.033V84.1169H36.033ZM36.033 75.3826V73.3826H34.033V75.3826H36.033ZM32.0799 58.9294V56.9294H30.0799V58.9294H32.0799ZM40.5018 71.4763L40.5133 69.4763L40.5088 69.4763L40.5018 71.4763ZM36.033 71.4607H34.033V73.4537L36.026 73.4607L36.033 71.4607ZM36.033 62.8513V60.8513H34.033V62.8513H36.033ZM32.0799 86.1169H36.033V82.1169H32.0799V86.1169ZM38.033 84.1169V75.3826H34.033V84.1169H38.033ZM36.033 77.3826H40.5018V73.3826H36.033V77.3826ZM40.5018 77.3826C46.3179 77.3826 51.3612 72.9876 51.3612 67.2419H47.3612C47.3612 70.4651 44.4357 73.3826 40.5018 73.3826V77.3826ZM51.3612 67.2419C51.3612 61.4405 46.3587 56.9294 40.5018 56.9294V60.9294C44.3948 60.9294 47.3612 63.8871 47.3612 67.2419H51.3612ZM40.5018 56.9294H32.0799V60.9294H40.5018V56.9294ZM30.0799 58.9294V84.1169H34.0799V58.9294H30.0799ZM40.5088 69.4763L36.04 69.4607L36.026 73.4607L40.4948 73.4763L40.5088 69.4763ZM38.033 71.4607V62.8513H34.033V71.4607H38.033ZM36.033 64.8513H40.5018V60.8513H36.033V64.8513ZM40.5018 64.8513C42.3305 64.8513 43.408 66.1259 43.408 67.2107H47.408C47.408 63.483 44.0793 60.8513 40.5018 60.8513V64.8513ZM43.408 67.2107C43.408 68.2186 42.3664 69.4871 40.5133 69.4764L40.4902 73.4763C44.0435 73.4968 47.408 70.9216 47.408 67.2107H43.408ZM47.5487 124.117L45.7241 124.936L46.2543 126.117H47.5487V124.117ZM51.8299 124.117V126.117H54.9536L53.6463 123.28L51.8299 124.117ZM39.9862 98.4138L41.8026 97.5768L41.2667 96.4138H39.9862V98.4138ZM39.7518 98.4138V96.4138H38.4712L37.9353 97.5768L39.7518 98.4138ZM27.908 124.117L26.0916 123.28L24.7843 126.117H27.908V124.117ZM32.1893 124.117V126.117H33.4837L34.0138 124.936L32.1893 124.117ZM33.908 120.289V118.289H32.6137L32.0835 119.47L33.908 120.289ZM45.8299 120.289L47.6544 119.47L47.1243 118.289H45.8299V120.289ZM35.4393 116.898L33.616 116.076L32.3439 118.898H35.4393V116.898ZM39.8768 107.054L41.7012 106.235L39.88 102.181L38.0535 106.233L39.8768 107.054ZM44.2987 116.898V118.898H47.3896L46.123 116.079L44.2987 116.898ZM47.5487 126.117H51.8299V122.117H47.5487V126.117ZM53.6463 123.28L41.8026 97.5768L38.1697 99.2508L50.0135 124.954L53.6463 123.28ZM39.9862 96.4138H39.7518V100.414H39.9862V96.4138ZM37.9353 97.5768L26.0916 123.28L29.7245 124.954L41.5682 99.2508L37.9353 97.5768ZM27.908 126.117H32.1893V122.117H27.908V126.117ZM34.0138 124.936L35.7326 121.108L32.0835 119.47L30.3647 123.298L34.0138 124.936ZM33.908 122.289H45.8299V118.289H33.908V122.289ZM44.0054 121.108L45.7241 124.936L49.3732 123.298L47.6544 119.47L44.0054 121.108ZM37.2626 117.72L41.7001 107.876L38.0535 106.233L33.616 116.076L37.2626 117.72ZM38.0524 107.874L42.4743 117.718L46.123 116.079L41.7012 106.235L38.0524 107.874ZM44.2987 114.898H35.4393V118.898H44.2987V114.898ZM50.3143 164.117V166.117H54.2414L51.9319 162.941L50.3143 164.117ZM42.9862 154.039L42.3691 152.136L39.7481 152.986L41.3686 155.215L42.9862 154.039ZM31.6112 138.929V136.929H29.6099L29.6112 138.931L31.6112 138.929ZM31.6268 164.117L29.6268 164.118L29.628 166.117H31.6268V164.117ZM35.5799 164.117V166.117H37.5799V164.117H35.5799ZM35.5799 154.367V152.367H33.5799V154.367H35.5799ZM38.6737 154.367L40.3156 153.225L39.7188 152.367H38.6737V154.367ZM45.4549 164.117L43.813 165.259L44.4098 166.117H45.4549V164.117ZM35.5643 151.086H33.5643V153.086H35.5643V151.086ZM35.5643 142.851V140.851H33.5643V142.851H35.5643ZM39.533 151.086L39.5462 149.086H39.533V151.086ZM51.9319 162.941L44.6037 152.863L41.3686 155.215L48.6967 165.293L51.9319 162.941ZM43.6032 155.941C47.3346 154.731 49.9705 151.123 49.9705 147.023H45.9705C45.9705 149.424 44.419 151.472 42.3691 152.136L43.6032 155.941ZM49.9705 147.023C49.9705 141.331 45.1247 136.929 39.4393 136.929V140.929C43.1289 140.929 45.9705 143.747 45.9705 147.023H49.9705ZM39.4393 136.929H31.6112V140.929H39.4393V136.929ZM29.6112 138.931L29.6268 164.118L33.6268 164.116L33.6112 138.928L29.6112 138.931ZM31.6268 166.117H35.5799V162.117H31.6268V166.117ZM37.5799 164.117V154.367H33.5799V164.117H37.5799ZM35.5799 156.367H38.6737V152.367H35.5799V156.367ZM37.0317 155.509L43.813 165.259L47.0968 162.975L40.3156 153.225L37.0317 155.509ZM45.4549 166.117H50.3143V162.117H45.4549V166.117ZM37.5643 151.086V142.851H33.5643V151.086H37.5643ZM35.5643 144.851H39.533V140.851H35.5643V144.851ZM39.533 144.851C40.9501 144.851 41.8924 145.86 41.8924 146.929H45.8924C45.8924 143.311 42.8035 140.851 39.533 140.851V144.851ZM41.8924 146.929C41.8924 148.002 40.8806 149.095 39.5462 149.086L39.5199 153.086C42.9355 153.108 45.8924 150.357 45.8924 146.929H41.8924ZM39.533 149.086H35.5643V153.086H39.533V149.086ZM50.0018 204.117V206.117H54.0536L51.5894 202.901L50.0018 204.117ZM40.1737 191.289L38.553 190.117L37.6806 191.323L38.586 192.505L40.1737 191.289ZM49.1112 178.929L50.7318 180.101L53.0256 176.929H49.1112V178.929ZM44.5174 178.929V176.929H43.491L42.8925 177.763L44.5174 178.929ZM35.8612 190.992H33.8612V197.209L37.4861 192.158L35.8612 190.992ZM35.8612 178.929H37.8612V176.929H35.8612V178.929ZM31.9237 178.929V176.929H29.9237V178.929H31.9237ZM31.9237 204.117H29.9237V206.117H31.9237V204.117ZM35.8612 204.117V206.117H37.8612V204.117H35.8612ZM35.8612 191.929L37.4503 190.715L33.8612 186.018V191.929H35.8612ZM45.1737 204.117L43.5845 205.331L44.1848 206.117H45.1737V204.117ZM51.5894 202.901L41.7613 190.072L38.586 192.505L48.4142 205.333L51.5894 202.901ZM41.7943 192.461L50.7318 180.101L47.4905 177.757L38.553 190.117L41.7943 192.461ZM49.1112 176.929H44.5174V180.929H49.1112V176.929ZM42.8925 177.763L34.2363 189.826L37.4861 192.158L46.1423 180.096L42.8925 177.763ZM37.8612 190.992V178.929H33.8612V190.992H37.8612ZM35.8612 176.929H31.9237V180.929H35.8612V176.929ZM29.9237 178.929V204.117H33.9237V178.929H29.9237ZM31.9237 206.117H35.8612V202.117H31.9237V206.117ZM37.8612 204.117V191.929H33.8612V204.117H37.8612ZM34.272 193.144L43.5845 205.331L46.7628 202.903L37.4503 190.715L34.272 193.144ZM45.1737 206.117H50.0018V202.117H45.1737V206.117Z"
        fill="#FF69D9"
      />
      <path
        d="M13.5416 215.889H67.4599V6.96181H13.5416V215.889ZM69 217.425H12V5.42529H69V217.425Z"
        fill="#FFC2FF"
      />
      <path
        d="M13.6049 216.81H67.395V7.0401H13.6049V216.81ZM68 217.425H13V6.42529H68V217.425Z"
        fill="white"
      />
      <path
        d="M0 221.077L8.5104 225.317V-7.62939e-05L1.37264 4.80592L0 221.077Z"
        fill="url(#paint0_linear_2146_1896)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2146_1896"
          x1="4.1188"
          y1="-5.93724"
          x2="4.1188"
          y2="236.622"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="8e-08" stopColor="#690274" />
          <stop offset="0.440625" stopColor="#FF00BF" />
          <stop offset="0.753125" stopColor="#2DD9FF" />
          <stop offset="1" stopColor="#00CEFB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Spark
