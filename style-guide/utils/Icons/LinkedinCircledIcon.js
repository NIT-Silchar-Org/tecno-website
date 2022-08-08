import React from 'react'

function LinkedinCircledIcon({ width, height, color }) {
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
          <use xlinkHref="#image0_425_73" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_425_73"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default LinkedinCircledIcon
