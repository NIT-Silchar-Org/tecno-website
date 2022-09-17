import React, { useState } from 'react'
import useAnimate from '../../../hooks/useAnimate'
import styles from './styles.module.scss'

const Hacks = () => {
  const [vis, setVis] = useState(false)
  useAnimate(vis, setVis)
  return (
    <svg
      className={`${styles.svg} ${vis ? '' : styles.hide}`}
      width="444"
      height="441"
      viewBox="0 0 444 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.350006">
        <path
          d="M424.165 432.731V436.754L420.558 434.972L23.9066 239.063L22.5137 238.375V236.821V234.001V229.962L26.1286 231.764L422.78 429.395L424.165 430.085V431.633V432.731Z"
          fill="url(#paint0_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 420.388V424.589L420.472 422.585L23.8212 207.315L22.5137 206.605V205.118V202.297V198.08L26.2135 200.104L422.865 417.096L424.165 417.808V419.29V420.388Z"
          fill="url(#paint1_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 408.044V412.427L420.392 410.196L23.7409 175.566L22.5137 174.84V173.414V170.594V166.194L26.2934 168.447L422.945 404.799L424.165 405.526V406.946V408.044Z"
          fill="url(#paint2_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 395.701V400.271L420.317 397.807L23.6655 143.817L22.5137 143.079V141.712V138.891V134.305L26.3683 136.79L423.019 392.502L424.165 393.24V394.603V395.701Z"
          fill="url(#paint3_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 383.358V388.117L420.246 385.416L23.5951 112.067L22.5137 111.321V110.008V107.188V102.412L26.4383 105.134L423.09 380.205L424.165 380.951V382.259V383.358Z"
          fill="url(#paint4_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 371.014V375.966L420.18 373.026L23.5292 80.3162L22.5137 79.5668V78.3046V75.4846V70.5154L26.5038 73.4772L423.155 367.909L424.165 368.659V369.917V371.014Z"
          fill="url(#paint5_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 358.671V363.819L420.119 360.635L23.4678 48.5659L22.5137 47.8152V46.6012V43.7811V38.6156L26.5648 41.8204L423.216 355.613L424.165 356.363V357.573V358.671Z"
          fill="url(#paint6_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
        <path
          d="M424.165 346.327V351.674L420.062 348.246L23.4107 16.8164L22.5137 16.0668V14.8979V12.0778V6.71323L26.6216 10.1635L423.273 343.316L424.165 344.065V345.23V346.327Z"
          fill="url(#paint7_linear_2146_1830)"
          stroke="#FF00BF"
          strokeWidth="5"
        />
      </g>
      <path
        d="M20.125 5.33499V238.031L422.862 435.112V340.704L20.125 5.33499Z"
        fill="url(#paint8_linear_2146_1830)"
        fillOpacity="0.2"
        stroke="#FF00BF"
        strokeWidth="5"
      />
      <path
        d="M79.3445 130.405L79.2608 125.406L74.9859 122.813L75.0696 127.812L79.3445 130.405ZM79.9006 163.604L79.9843 168.603L84.2592 171.196L84.1755 166.197L79.9006 163.604ZM50.7613 145.926L46.4864 143.333L46.5702 148.332L50.845 150.926L50.7613 145.926ZM50.2052 112.728L54.4801 115.321L54.3963 110.322L50.1215 107.729L50.2052 112.728ZM39.685 106.346L39.6013 101.347L35.3264 98.7532L35.4101 103.753L39.685 106.346ZM41.0033 185.046L36.7284 182.452L36.8121 187.452L41.087 190.045L41.0033 185.046ZM51.5235 191.428L51.6072 196.427L55.8821 199.02L55.7983 194.021L51.5235 191.428ZM50.9666 158.181L50.8828 153.181L46.6079 150.588L46.6917 155.587L50.9666 158.181ZM80.1058 175.858L84.3807 178.451L84.297 173.452L80.0221 170.859L80.1058 175.858ZM80.6627 209.105L76.3879 206.512L76.4716 211.511L80.7465 214.104L80.6627 209.105ZM91.2247 215.513L91.3084 220.512L95.5833 223.105L95.4996 218.106L91.2247 215.513ZM89.9064 136.813L94.1813 139.406L94.0976 134.407L89.8227 131.813L89.9064 136.813ZM75.0696 127.812L75.6257 161.01L84.1755 166.197L83.6194 132.999L75.0696 127.812ZM79.8168 158.604L50.6776 140.927L50.845 150.926L79.9843 168.603L79.8168 158.604ZM55.0362 148.52L54.4801 115.321L45.9303 110.135L46.4864 143.333L55.0362 148.52ZM50.1215 107.729L39.6013 101.347L39.7687 111.345L50.2889 117.727L50.1215 107.729ZM35.4101 103.753L36.7284 182.452L45.2781 187.639L43.9599 108.939L35.4101 103.753ZM41.087 190.045L51.6072 196.427L51.4397 186.429L40.9195 180.046L41.087 190.045ZM55.7983 194.021L55.2414 160.774L46.6917 155.587L47.2486 188.834L55.7983 194.021ZM51.0503 163.18L80.1896 180.857L80.0221 170.859L50.8828 153.181L51.0503 163.18ZM75.831 173.264L76.3879 206.512L84.9376 211.698L84.3807 178.451L75.831 173.264ZM80.7465 214.104L91.3084 220.512L91.1409 210.513L80.579 204.106L80.7465 214.104ZM95.4996 218.106L94.1813 139.406L85.6316 134.219L86.9498 212.919L95.4996 218.106ZM89.8227 131.813L79.2608 125.406L79.4282 135.405L89.9902 141.812L89.8227 131.813ZM154.379 253.825L150.514 253.507L151.696 257.146L154.463 258.824L154.379 253.825ZM164.674 260.07L164.758 265.07L171.434 269.12L168.522 260.334L164.674 260.07ZM134.984 170.513L138.831 170.777L137.637 167.175L134.9 165.514L134.984 170.513ZM134.42 170.172L134.336 165.172L131.599 163.512L130.503 165.724L134.42 170.172ZM107.151 225.174L103.234 220.727L100.558 226.123L107.235 230.174L107.151 225.174ZM117.446 231.42L117.53 236.419L120.296 238.097L121.38 235.833L117.446 231.42ZM121.398 223.162L121.315 218.162L118.548 216.484L117.464 218.748L121.398 223.162ZM150.066 240.553L153.932 240.871L152.749 237.232L149.982 235.554L150.066 240.553ZM124.921 215.861L120.989 211.442L118.388 216.846L125.005 220.86L124.921 215.861ZM135.128 194.652L138.993 194.969L134.93 182.474L131.196 190.233L135.128 194.652ZM146.224 228.784L146.308 233.784L152.915 237.792L150.089 229.101L146.224 228.784ZM154.463 258.824L164.758 265.07L164.59 255.071L154.296 248.826L154.463 258.824ZM168.522 260.334L138.831 170.777L131.136 170.25L160.827 259.807L168.522 260.334ZM134.9 165.514L134.336 165.172L134.504 175.171L135.067 175.513L134.9 165.514ZM130.503 165.724L103.234 220.727L111.069 229.622L138.338 174.619L130.503 165.724ZM107.235 230.174L117.53 236.419L117.362 226.42L107.067 220.175L107.235 230.174ZM121.38 235.833L125.333 227.575L117.464 218.748L113.512 227.006L121.38 235.833ZM121.482 228.161L150.15 245.552L149.982 235.554L121.315 218.162L121.482 228.161ZM146.2 240.235L150.514 253.507L158.245 254.143L153.932 240.871L146.2 240.235ZM128.852 220.279L139.059 199.071L131.196 190.233L120.989 211.442L128.852 220.279ZM131.262 194.335L142.359 228.467L150.089 229.101L138.993 194.969L131.262 194.335ZM146.141 223.785L124.837 210.861L125.005 220.86L146.308 233.784L146.141 223.785ZM222.224 286.632L225.284 292.013L227.834 290.593L225.651 285.832L222.224 286.632ZM217.214 275.706L220.642 274.906L217.641 268.361L214.145 270.33L217.214 275.706ZM216.674 245.417L213.71 247.118L217.29 253.354L220.162 250.473L216.674 245.417ZM221.453 240.623L224.941 245.679L227.098 243.516L224.377 238.853L221.453 240.623ZM202.589 219.669L202.567 214.708L202.536 214.688L202.506 214.67L202.589 219.669ZM203.897 289.818C213.341 295.548 220.19 294.849 225.284 292.013L219.163 281.251C215.152 283.484 210.316 283.816 203.729 279.82L203.897 289.818ZM225.651 285.832L220.642 274.906L213.786 276.507L218.796 287.433L225.651 285.832ZM214.145 270.33C210.996 272.104 207.313 272.174 203.296 269.737L203.463 279.736C210.468 283.985 216.161 283.404 220.283 281.083L214.145 270.33ZM203.296 269.737C195.87 265.232 188.338 253.021 188.174 243.244L179.624 238.057C179.886 253.668 191.586 272.53 203.463 279.736L203.296 269.737ZM188.174 243.244C188.011 233.473 195.211 230.077 202.674 234.605L202.507 224.606C190.466 217.302 179.365 222.597 179.624 238.057L188.174 243.244ZM202.674 234.605C206.566 236.966 210.479 241.489 213.71 247.118L219.637 243.716C215.173 235.939 209.169 228.647 202.507 224.606L202.674 234.605ZM220.162 250.473L224.941 245.679L217.965 235.567L213.185 240.361L220.162 250.473ZM224.377 238.853C218.317 228.468 210.792 219.834 202.567 214.708L202.612 224.631C208.351 228.207 213.833 234.346 218.529 242.393L224.377 238.853ZM202.506 214.67C184.999 204.049 170.731 212.358 171.074 232.832L179.624 238.018C179.373 223.028 189.922 216.933 202.673 224.668L202.506 214.67ZM171.074 232.832C171.418 253.395 186.3 279.143 203.897 289.818L203.729 279.82C190.801 271.977 179.875 252.997 179.624 238.018L171.074 232.832ZM269.081 323.409L269.165 328.408L277.825 333.662L272.424 322.427L269.081 323.409ZM250.23 284.2L246.717 279.169L244.903 281.054L246.888 285.182L250.23 284.2ZM266.493 267.308L270.006 272.339L274.776 267.385L266.409 262.309L266.493 267.308ZM257.901 262.096L257.817 257.097L255.624 255.766L254.379 257.075L257.901 262.096ZM242.154 278.658L237.879 276.065L238.139 291.606L245.676 283.68L242.154 278.658ZM241.712 252.275L245.987 254.869L245.903 249.869L241.628 247.276L241.712 252.275ZM234.348 247.808L234.264 242.808L229.989 240.215L230.073 245.214L234.348 247.808ZM235.27 302.898L230.996 300.304L231.079 305.304L235.354 307.897L235.27 302.898ZM242.635 307.365L242.718 312.364L246.993 314.958L246.909 309.958L242.635 307.365ZM242.188 280.709L245.534 279.734L237.666 263.339L237.913 278.115L242.188 280.709ZM260.051 317.931L256.705 318.906L258.022 321.648L260.135 322.93L260.051 317.931ZM272.424 322.427L253.573 283.219L246.888 285.182L265.739 324.391L272.424 322.427ZM253.743 289.231L270.006 272.339L262.98 262.278L246.717 279.169L253.743 289.231ZM266.409 262.309L257.817 257.097L257.985 267.096L266.576 272.308L266.409 262.309ZM254.379 257.075L238.632 273.636L245.676 283.68L261.423 267.118L254.379 257.075ZM246.429 281.252L245.987 254.869L237.437 249.682L237.879 276.065L246.429 281.252ZM241.628 247.276L234.264 242.808L234.431 252.807L241.796 257.274L241.628 247.276ZM230.073 245.214L230.996 300.304L239.545 305.491L238.623 250.401L230.073 245.214ZM235.354 307.897L242.718 312.364L242.551 302.366L235.187 297.898L235.354 307.897ZM246.909 309.958L246.463 283.302L237.913 278.115L238.36 304.772L246.909 309.958ZM238.842 281.683L256.705 318.906L263.397 316.956L245.534 279.734L238.842 281.683ZM260.135 322.93L269.165 328.408L268.997 318.41L259.968 312.932L260.135 322.93ZM293.662 311.297L295.304 307.763L295.287 307.743L295.269 307.724L293.662 311.297ZM298.504 305.797L294.653 305.524L296.869 312.231L301.004 311.384L298.504 305.797ZM303.149 304.846L305.649 310.433L308.349 309.88L307.125 305.529L303.149 304.846ZM288.713 313.34L287.053 316.855L287.075 316.88L287.098 316.905L288.713 313.34ZM281.887 318.826L285.557 318.597L283.129 312.367L279.333 313.251L281.887 318.826ZM276.948 319.975L274.393 314.4L271.478 315.079L273.153 319.867L276.948 319.975ZM291.16 342.535C296.021 345.483 300.59 346.674 304.012 345.553C307.51 344.406 309.62 340.876 309.524 335.098L300.974 329.912C301.017 332.512 300.137 333.981 298.562 334.498C296.91 335.039 294.323 334.556 290.993 332.536L291.16 342.535ZM309.524 335.098C309.435 329.835 307.533 324.689 304.691 319.928C302.034 315.476 298.577 311.398 295.304 307.763L292.02 314.832C295.189 318.352 297.463 321.157 298.957 323.661C300.267 325.855 300.937 327.734 300.974 329.912L309.524 335.098ZM295.269 307.724C293.785 306.093 293.003 305.27 291.835 303.98C290.829 302.869 290.114 302.037 289.593 301.359C289.064 300.671 288.96 300.428 288.994 300.502C289.093 300.715 289.167 301.012 289.17 301.179L280.62 295.992C280.694 300.4 283.189 304.468 285.298 307.213C287.21 309.701 289.91 312.514 292.055 314.871L295.269 307.724ZM289.17 301.179C289.173 301.349 289.081 301.146 289.452 301.033C289.832 300.917 290.548 300.99 291.541 301.592L291.373 291.594C286.377 288.563 280.5 288.786 280.62 295.992L289.17 301.179ZM291.541 301.592C293.04 302.502 294.172 304.069 294.653 305.524L302.354 306.07C300.223 299.619 295.735 294.24 291.373 291.594L291.541 301.592ZM301.004 311.384L305.649 310.433L300.649 299.259L296.004 300.21L301.004 311.384ZM307.125 305.529C304.607 296.574 298.392 288.661 291.201 284.299L291.369 294.297C295.7 296.925 298.211 300.742 299.173 304.162L307.125 305.529ZM291.201 284.299C282.28 278.887 274.042 280.691 274.23 291.941L282.78 297.128C282.709 292.912 285.762 290.896 291.369 294.297L291.201 284.299ZM274.23 291.941C274.32 297.306 276.382 302.395 279.112 306.771C281.627 310.801 284.758 314.293 287.053 316.855L290.372 309.825C287.892 307.055 285.981 304.85 284.617 302.663C283.469 300.822 282.814 299.175 282.78 297.128L274.23 291.941ZM287.098 316.905C289.586 319.645 291.704 321.986 293.244 324.1C294.909 326.384 294.622 326.651 294.614 326.199L303.164 331.385C303.083 326.568 300.082 321.724 297.864 318.68C295.522 315.467 292.588 312.264 290.327 309.775L287.098 316.905ZM294.614 326.199C294.609 325.911 294.8 326.147 294.274 326.23C293.701 326.321 292.579 326.105 290.943 325.112L291.11 335.11C294.008 336.868 296.847 337.794 299.087 337.438C301.374 337.075 303.229 335.275 303.164 331.385L294.614 326.199ZM290.943 325.112C288.416 323.579 286.548 321.138 285.557 318.597L278.217 319.054C280.957 326.083 285.872 331.933 291.11 335.11L290.943 325.112ZM279.333 313.251L274.393 314.4L279.502 325.551L284.442 324.401L279.333 313.251ZM273.153 319.867C276.407 329.167 283.147 337.674 291.16 342.535L290.993 332.536C285.73 329.343 282.28 324.477 280.742 320.084L273.153 319.867ZM341.417 342.428L337.179 339.106L335.565 352.073L344.373 347.863L341.417 342.428ZM342.346 334.97L342.262 329.97L338.594 327.745L338.108 331.647L342.346 334.97ZM355.705 343.074L355.789 348.073L360.064 350.667L359.98 345.667L355.705 343.074ZM355.602 336.922L359.877 339.516L359.793 334.516L355.518 331.923L355.602 336.922ZM338.256 326.4L338.173 321.4L334.462 319.149L334.012 323.129L338.256 326.4ZM336.115 345.349L331.871 342.078L331.527 345.123L333.991 348.306L336.115 345.349ZM339.114 349.222L336.99 352.179L340.912 357.245L342.936 353.844L339.114 349.222ZM340.357 356.863L344.079 356.769L342.339 352.113L338.99 351.314L340.357 356.863ZM335.171 355.625L333.803 350.077L329.318 349.007L331.28 355.227L335.171 355.625ZM346.951 338.541C344.035 336.772 340.981 335.789 338.461 336.993L344.373 347.863C344.928 347.598 345.694 347.676 347.119 348.54L346.951 338.541ZM345.655 345.751L346.584 338.292L338.108 331.647L337.179 339.106L345.655 345.751ZM342.43 339.969L355.789 348.073L355.621 338.075L342.262 329.97L342.43 339.969ZM359.98 345.667L359.877 339.516L351.327 334.329L351.43 340.481L359.98 345.667ZM355.518 331.923L338.173 321.4L338.34 331.399L355.686 341.922L355.518 331.923ZM334.012 323.129L331.871 342.078L340.359 348.619L342.5 329.67L334.012 323.129ZM333.991 348.306L336.99 352.179L341.237 346.264L338.239 342.391L333.991 348.306ZM342.936 353.844C343.277 353.272 344.64 352.956 346.489 354.078L346.321 344.079C342.158 341.553 337.402 341.053 335.291 344.6L342.936 353.844ZM346.489 354.078C347.647 354.78 348.282 355.575 348.587 356.084C348.864 356.547 349.17 357.268 349.188 358.329L357.738 363.516C357.678 359.964 356.511 356.01 354.307 352.327C352.13 348.692 349.274 345.871 346.321 344.079L346.489 354.078ZM349.188 358.329C349.207 359.446 348.871 359.864 348.452 360.032C347.947 360.233 347.19 360.094 346.437 359.637L346.604 369.636C351.692 372.723 357.884 372.233 357.738 363.516L349.188 358.329ZM346.437 359.637C345.511 359.076 344.38 357.573 344.079 356.769L336.636 356.956C338.671 362.402 342.938 367.412 346.604 369.636L346.437 359.637ZM338.99 351.314L333.803 350.077L336.539 361.174L341.725 362.411L338.99 351.314ZM331.28 355.227C334.027 363.933 340.533 372.042 346.937 375.927L346.77 365.928C343.28 363.811 340.2 359.629 339.062 356.023L331.28 355.227ZM346.937 375.927C355.913 381.372 363.417 378.197 363.227 366.846L354.678 361.66C354.768 367.054 351.403 368.739 346.77 365.928L346.937 375.927ZM363.227 366.846C363.143 361.785 361.569 356.169 358.611 350.944C355.637 345.691 351.542 341.327 346.951 338.541L347.119 348.54C349.646 350.073 351.445 352.159 352.617 354.23C353.805 356.328 354.631 358.91 354.678 361.66L363.227 366.846ZM372.836 392.723C377.649 395.643 381.576 393.497 381.481 387.792L372.931 382.605C372.932 382.649 372.921 382.705 372.859 382.74C372.795 382.776 372.727 382.76 372.669 382.724L372.836 392.723ZM381.481 387.792C381.386 382.156 377.31 375.055 372.491 372.132L372.659 382.131C372.662 382.133 372.735 382.18 372.831 382.347C372.926 382.514 372.931 382.601 372.931 382.605L381.481 387.792ZM372.491 372.132C367.645 369.192 363.752 371.427 363.847 377.094L372.397 382.281C372.396 382.233 372.41 382.164 372.48 382.123C372.551 382.083 372.617 382.106 372.659 382.131L372.491 372.132ZM363.847 377.094C363.942 382.799 368.023 389.803 372.836 392.723L372.669 382.724C372.61 382.689 372.541 382.622 372.475 382.507C372.41 382.395 372.397 382.324 372.397 382.281L363.847 377.094ZM398.223 407.146C402.867 409.963 406.788 409.927 409.422 407.556C411.998 405.236 413.225 400.825 413.131 395.216L404.581 390.03C404.646 393.892 403.787 396.228 402.602 397.295C401.473 398.311 399.957 398.3 398.055 397.147L398.223 407.146ZM413.131 395.216C413.037 389.6 411.637 383.59 408.929 378.062C406.161 372.411 402.158 367.567 397.513 364.749L397.68 374.748C399.581 375.901 401.128 377.749 402.314 380.17C403.559 382.713 404.516 386.155 404.581 390.03L413.131 395.216ZM397.513 364.749C392.868 361.931 388.946 361.968 386.313 364.342C383.737 366.665 382.511 371.082 382.605 376.698L391.155 381.885C391.09 378.01 391.95 375.67 393.135 374.602C394.263 373.584 395.779 373.595 397.68 374.748L397.513 364.749ZM382.605 376.698C382.699 382.307 384.1 388.312 386.808 393.838C389.576 399.485 393.578 404.328 398.223 407.146L398.055 397.147C396.154 395.994 394.607 394.145 393.421 391.725C392.175 389.184 391.22 385.747 391.155 381.885L382.605 376.698ZM397.955 392.157C397.49 391.875 397.037 391.416 396.536 390.303C395.964 389.031 395.406 386.985 395.363 384.438L386.813 379.251C386.881 383.265 387.761 387.639 389.618 391.765C391.546 396.05 394.513 399.966 398.123 402.156L397.955 392.157ZM395.363 384.438C395.32 381.877 395.821 380.461 396.365 379.858C396.842 379.33 397.289 379.42 397.747 379.698L397.579 369.699C393.962 367.505 391.067 367.878 389.247 369.895C387.495 371.837 386.746 375.23 386.813 379.251L395.363 384.438ZM397.747 379.698C398.192 379.968 398.648 380.422 399.158 381.556C399.736 382.842 400.297 384.902 400.339 387.456L408.889 392.643C408.822 388.616 407.936 384.232 406.08 380.103C404.156 375.822 401.192 371.891 397.579 369.699L397.747 379.698ZM400.339 387.456C400.382 389.998 399.88 391.401 399.337 391.998C398.858 392.524 398.408 392.432 397.955 392.157L398.123 402.156C401.728 404.343 404.62 403.978 406.442 401.975C408.2 400.044 408.956 396.663 408.889 392.643L400.339 387.456Z"
        fill="#7DE7FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2146_1830"
          x1="408.4"
          y1="418.972"
          x2="251.941"
          y2="192.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2146_1830"
          x1="408.4"
          y1="405.289"
          x2="231.645"
          y2="172.242"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2146_1830"
          x1="408.4"
          y1="391.605"
          x2="212.16"
          y2="153.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2146_1830"
          x1="408.4"
          y1="377.922"
          x2="193.633"
          y2="137.449"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2146_1830"
          x1="408.4"
          y1="364.238"
          x2="176.154"
          y2="122.424"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2146_1830"
          x1="408.4"
          y1="350.554"
          x2="159.764"
          y2="108.634"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2146_1830"
          x1="408.4"
          y1="336.87"
          x2="144.467"
          y2="95.854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2146_1830"
          x1="408.4"
          y1="323.186"
          x2="130.239"
          y2="83.8906"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4EDFFF" />
          <stop offset="1" stopColor="#FF00BF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2146_1830"
          x1="127.593"
          y1="357.828"
          x2="311.157"
          y2="143.542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00DFFF" />
          <stop offset="1" stopColor="#9360D8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Hacks
