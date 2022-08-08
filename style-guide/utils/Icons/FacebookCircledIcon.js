import React from 'react'

function FacebookCircledIcon({ color, width, height }) {
  return (
    <svg
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      viewBox="0 0 25 25"
      fill={color ? color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="24.5" height="24.5" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_413_24" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_413_24"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default FacebookCircledIcon
