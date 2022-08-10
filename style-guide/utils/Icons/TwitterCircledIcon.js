import React from 'react'

function TwitterCircledIcon({ color, width, height }) {
  return (
    <svg
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      viewBox="0 0 23 23"
      fill={color ? color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="23" height="23" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_413_31" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_413_31"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default TwitterCircledIcon
