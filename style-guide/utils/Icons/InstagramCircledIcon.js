import React from 'react'

function InstagramCircledIcon({ color, width, height }) {
  return (
    <svg
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      viewBox="0 0 23 23"
      fill={color ? color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="22.5" height="22.5" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_413_29" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_413_29"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default InstagramCircledIcon
