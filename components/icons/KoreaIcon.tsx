import { ComponentPropsWithoutRef } from "react";

export const KoreaIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const { size = 24, ...rest } = props;

  return (
    <svg width={size} height={size} viewBox="0 0 513 512" fill="none" {...rest}>
      <g clipPath="url(#clip0_103_7302)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0H512.5V512H0.5V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4756 167.546L84.8956 73.9515L100.495 84.3549L38.0747 177.95L22.4756 167.546ZM45.8743 183.151L108.294 89.5565L123.893 99.9599L61.4734 193.555L45.8743 183.151ZM69.273 198.756L131.693 105.162L147.292 115.565L84.8721 209.16L69.273 198.756Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M365.657 396.42L428.077 302.825L443.676 313.228L381.256 406.823L365.657 396.42ZM389.055 412.025L451.475 318.43L467.075 328.833L404.655 422.428L389.055 412.025ZM412.454 427.63L474.874 334.035L490.473 344.438L428.053 438.033L412.454 427.63Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M389.067 344.421L467.063 396.437L389.067 344.421Z"
          fill="black"
        />
        <path
          d="M389.067 344.421L467.063 396.437"
          stroke="white"
          strokeWidth="9.375"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.88 193.572C179.434 168.749 205.172 151.52 234.431 145.673C263.689 139.827 294.072 145.843 318.894 162.397C343.717 178.952 360.947 204.69 366.794 233.948C372.64 263.207 366.624 293.589 350.069 318.412L162.88 193.572Z"
          fill="#CD2E3A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.88 193.572C146.325 218.395 140.309 248.778 146.155 278.036C152.002 307.295 169.232 333.032 194.055 349.587C218.877 366.142 249.26 372.158 278.518 366.311C307.777 360.465 333.515 343.235 350.069 318.412C358.347 306.001 361.355 290.809 358.432 276.18C355.508 261.551 346.893 248.682 334.482 240.405C322.071 232.127 306.879 229.119 292.25 232.043C277.621 234.966 264.752 243.581 256.475 255.992L162.88 193.572Z"
          fill="#0047A0"
        />
        <path
          d="M256.475 255.992C273.711 230.147 266.733 195.222 240.887 177.985C215.042 160.748 180.116 167.727 162.88 193.572C145.643 219.418 152.622 254.343 178.467 271.58C204.313 288.816 239.238 281.838 256.475 255.992Z"
          fill="#CD2E3A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M84.9468 438.033L22.5268 344.438L38.1259 334.035L100.546 427.63L84.9468 438.033ZM108.345 422.428L45.9255 328.833L61.5246 318.43L123.945 412.025L108.345 422.428ZM131.744 406.823L69.3242 313.228L84.9233 302.825L147.343 396.42L131.744 406.823Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M428.128 209.16L365.708 115.565L381.307 105.161L443.727 198.756L428.128 209.16ZM451.527 193.555L389.107 99.9598L404.706 89.5565L467.126 183.151L451.527 193.555ZM474.925 177.95L412.505 84.3548L428.104 73.9515L490.524 167.546L474.925 177.95Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.2356 378.231L96.6343 362.626L73.2356 378.231ZM389.118 167.564L416.417 149.358L389.118 167.564ZM439.815 133.753L463.214 118.148L439.815 133.753Z"
          fill="black"
        />
        <path
          d="M73.2356 378.231L96.6343 362.626M389.118 167.564L416.417 149.358M439.815 133.753L463.214 118.148"
          stroke="white"
          strokeWidth="9.375"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_7302">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
