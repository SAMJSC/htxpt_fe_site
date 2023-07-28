import React from 'react';

import { TIcon } from '@/app/types/common';

const IcFruitOutline = ({ color }: TIcon): React.ReactElement => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.98203 3.76488C6.23181 4.75086 6.40166 5.75545 6.48992 6.76884C6.59855 8.05382 6.8372 9.32441 7.20221 10.561C7.4384 11.1445 7.52309 11.7785 7.44835 12.4037C7.37361 13.0289 7.14188 13.6249 6.77484 14.136C6.66198 14.3341 6.52 14.514 6.35366 14.6698C5.84077 15.1646 5.47424 15.7917 5.29452 16.4821C5.03549 17.1976 5.02024 17.9789 5.25116 18.704C5.7429 19.3588 6.2767 19.9807 6.84916 20.566L6.53328 20.9632C6.19881 20.5287 6.17404 20.4232 5.54846 19.7219C5.27062 19.3646 4.87956 19.1128 4.43978 19.0081C3.66278 18.5803 2.78663 18.3662 1.90032 18.3875C1.57797 18.4301 1.26189 18.5114 0.958862 18.6295L0.921699 18.8157C0.892775 18.8501 0.871642 18.8903 0.859761 18.9336H0.84118C0.84118 18.9336 0.84118 18.9709 0.84118 18.9895V19.0516C0.742079 20.1563 1.33668 20.4915 2.63738 21.3852C3.61576 21.9616 4.77845 22.1373 5.88293 21.8755C5.63684 22.2134 5.48892 22.613 5.45556 23.0299C5.48749 23.2571 5.58844 23.4689 5.74468 23.6366C5.90093 23.8043 6.1049 23.9197 6.32888 23.9671C6.77484 24.0788 7.1155 23.8989 7.16505 23.5327C7.35608 22.8156 7.74967 22.1691 8.29851 21.6707C9.45675 22.2914 10.9866 23.0299 12.0148 22.4714L12.1758 22.3845C12.5026 22.1697 12.8131 21.9311 13.1049 21.6707C13.5013 21.2598 13.8017 20.7659 13.9844 20.2246C14.0362 20.0637 14.1265 19.9179 14.2474 19.8C14.3683 19.6821 14.5162 19.5956 14.6781 19.5481C15.0518 19.4821 15.4187 19.3824 15.7744 19.2502C16.0168 19.1163 16.245 18.9582 16.4557 18.7785C16.7319 18.5349 17.0484 18.3417 17.391 18.2075C18.0574 18.1326 18.7316 18.2399 19.342 18.5178C19.8252 18.673 20.4198 18.8654 21.2002 19.0516C21.6626 19.1999 22.1507 19.2506 22.6336 19.2004C23.1165 19.1502 23.5838 19.0002 24.006 18.7599C24.3228 18.5384 24.5562 18.2167 24.6685 17.8464C24.7809 17.476 24.7657 17.0786 24.6254 16.7179C24.5683 16.551 24.4721 16.4003 24.345 16.2782C24.2178 16.1562 24.0633 16.0665 23.8945 16.0166C23.4176 15.9049 23.3432 16.3703 23.2751 16.6372C23.2008 17.1648 23.1203 17.2579 22.6557 17.14L22.3151 17.022C22.0549 16.9289 21.6957 16.8048 21.2993 16.6807C22.2655 16.2462 23.207 15.4394 23.2256 14.8187C23.2214 14.6978 23.1903 14.5793 23.1345 14.4719C23.0788 14.3645 22.9999 14.271 22.9035 14.1981C22.8463 14.1517 22.784 14.1121 22.7177 14.0801C22.3398 13.8877 21.9992 14.0801 21.6028 14.2912C21.033 14.6139 20.5622 14.8187 20.0605 14.5394C20.1349 14.4215 20.203 14.316 20.2711 14.2229C21.5099 12.5657 22.792 13.2174 23.6343 13.6457C24.0617 13.8629 24.5015 14.0863 24.7554 13.7946C25.0094 13.5029 24.582 12.7706 24.0369 12.2616C23.9317 12.1623 23.8202 12.0692 23.7149 11.9823C23.2912 11.6167 22.7993 11.339 22.2676 11.1653C21.736 10.9917 21.1753 10.9255 20.618 10.9707C21.4603 9.89073 22.3584 8.63701 22.346 7.65017C22.3089 6.81706 21.9568 6.02931 21.3612 5.44685C21.2823 5.37965 21.1948 5.3233 21.1011 5.27928C19.9243 4.69586 18.9704 4.85103 18.5864 5.24204C18.4948 5.32235 18.4351 5.43295 18.418 5.5537C18.401 5.67444 18.4278 5.79731 18.4935 5.89993C18.5988 6.07992 18.766 6.14198 19.0386 6.24129C19.3111 6.34059 19.7323 6.48955 19.8252 6.68816C19.7013 7.14744 19.0014 7.50121 18.3201 7.84257C18.0414 7.97912 17.7564 8.12807 17.4963 8.28324C17.5616 7.81645 17.5947 7.34571 17.5954 6.87436C17.5458 4.70207 16.784 2.67874 16.0965 2.12636C16.0358 2.04289 15.9554 1.97591 15.8624 1.93148C15.7693 1.88704 15.6667 1.86656 15.5638 1.87189C15.1179 1.98982 15.1488 2.3498 15.1736 2.6415C15.2311 3.1577 15.1521 3.67998 14.9445 4.1559C14.7273 4.70549 14.4706 5.23858 14.1764 5.75097C14.0241 5.01299 13.6993 4.32171 13.2288 3.73385L13.0615 3.5849C12.9453 3.48346 12.8042 3.41491 12.6527 3.38629C12.1139 3.29939 12.0334 3.83936 11.9714 4.52208C11.9343 4.80137 11.8971 5.14273 11.829 5.45306C11.815 5.35594 11.7858 5.26167 11.7423 5.17377C11.4892 4.50772 11.1201 3.89199 10.6522 3.35525C10.5978 3.30691 10.5338 3.27081 10.4643 3.24939C10.3948 3.22798 10.3216 3.22175 10.2496 3.23112C9.74786 3.29939 9.79741 3.85178 9.84076 4.47243C9.87171 4.81516 9.87171 5.15999 9.84076 5.50271C9.82315 5.7437 9.78376 5.9826 9.72308 6.21646V6.1606C9.47802 5.31936 9.08814 4.5275 8.57104 3.82074C8.43262 3.62175 8.30644 3.41448 8.19322 3.20009C7.92219 2.64835 7.82087 2.02836 7.90211 1.41882C7.95805 1.2001 7.95604 0.970535 7.8963 0.752828C7.83655 0.535122 7.72113 0.336813 7.56145 0.177512C7.53266 0.151911 7.50156 0.129055 7.46854 0.10924C7.35313 0.0378242 7.22017 0 7.08453 0C6.94888 0 6.81592 0.0378242 6.70051 0.10924C6.07494 0.463012 5.45556 1.82224 5.98203 3.76488ZM4.55746 19.6722C5.1149 19.9639 4.92289 20.0446 5.52988 20.7397C4.48933 20.417 2.43299 19.455 1.86316 18.8778C2.8146 18.9053 3.74276 19.179 4.55746 19.6722ZM3.93808 21.2549C3.01084 20.8012 2.17185 20.1854 1.46056 19.4364C3.14527 20.1687 3.83278 20.6777 5.52988 21.3356C4.82379 21.2983 4.67514 21.4845 3.98143 21.2549H3.93808ZM6.21739 23.2596C6.13068 23.2099 6.13688 23.1727 6.13068 23.1541C6.13068 22.9617 6.29172 22.4279 7.36944 21.0749L7.56764 21.2238C6.98219 21.7877 6.57327 22.5102 6.39082 23.303C6.34406 23.3022 6.29867 23.287 6.26075 23.2596H6.21739ZM22.2407 17.6241L22.6 17.7482C23.6839 18.0958 23.9007 17.3944 23.975 16.9724C24.0084 17.1979 23.9766 17.4283 23.8833 17.6362C23.79 17.8441 23.6391 18.0208 23.4485 18.1454C23.2627 18.282 22.5566 18.6916 21.1754 18.3564C20.426 18.1764 19.8437 17.9902 19.3792 17.8351C18.6488 17.5173 17.8467 17.4016 17.0565 17.4999C16.6224 17.6387 16.2232 17.8694 15.8859 18.1764C15.7025 18.3305 15.5055 18.4675 15.2975 18.5861C14.9805 18.7076 14.6529 18.799 14.3189 18.8592C13.9951 19.0083 13.7264 19.2559 13.5508 19.5667C13.2659 19.7095 13.2597 20.5039 12.8881 20.808C12.6102 21.2447 12.2322 21.6086 11.7856 21.8693C11.4956 22.0117 11.1716 22.0697 10.8504 22.0369C10.7063 22.0439 10.5623 22.0205 10.4278 21.9681C10.2934 21.9157 10.1714 21.8355 10.0699 21.7328C9.95845 21.6211 10.5592 21.5962 10.8937 21.4225C11.1758 21.2358 11.4302 21.0101 11.6494 20.7521C11.8537 20.5163 12.0086 20.1315 12.3059 19.8212C12.7952 18.7909 13.012 18.3378 13.3898 18.0399C13.8286 17.7444 14.2929 17.4889 14.7772 17.2765C15.0621 17.1337 15.347 16.991 15.6196 16.842C16.3474 16.9993 17.1028 16.9737 17.8184 16.7676C18.7789 16.677 19.7475 16.8 20.6551 17.1275C21.2807 17.2827 21.9001 17.4875 22.2841 17.6241H22.2407ZM22.0921 14.8249C22.2531 14.738 22.4947 14.6077 22.5319 14.5767C22.6186 14.9366 21.1692 16.1904 20.0234 16.271C19.6539 16.1781 19.2797 16.1056 18.9023 16.0538C19.2368 15.7415 19.5265 15.3844 19.7632 14.9925C20.1305 15.204 20.5523 15.301 20.9748 15.2712C21.3974 15.2414 21.8015 15.086 22.1355 14.8249H22.0921ZM22.5195 11.8582C23.112 12.1329 23.635 12.5381 24.0493 13.0436L23.9317 12.9816C23.0707 12.5347 21.2807 11.6223 19.7323 13.6643C19.6146 13.8195 19.4969 14.0119 19.3668 14.2229C18.8589 15.0608 18.19 16.1469 16.5734 16.2462C16.5989 16.2219 16.6258 16.1992 16.6539 16.1779C17.7586 14.984 18.7497 13.6895 19.6146 12.3113L19.7694 12.0816C20.1581 11.7662 20.633 11.576 21.1316 11.5361C21.6302 11.4963 22.1291 11.6085 22.5628 11.8582H22.5195ZM18.8032 8.38254C19.6208 7.97291 20.3888 7.58811 20.5684 6.90539C20.5985 6.801 20.6052 6.69125 20.588 6.58397C20.5709 6.47669 20.5304 6.37452 20.4693 6.28473C20.1935 5.95934 19.8301 5.72022 19.4226 5.59581C19.6823 5.52201 19.9543 5.50266 20.2218 5.53897C20.4893 5.57527 20.7465 5.66646 20.9772 5.80683C21.2013 6.01974 21.3803 6.27559 21.5037 6.5592C21.6272 6.84281 21.6924 7.14838 21.6957 7.45777C21.6957 8.37013 20.587 9.79142 19.7694 10.8279C19.4411 11.25 19.15 11.6099 18.9766 11.9016C18.1275 13.2379 17.1571 14.4928 16.0779 15.6504C15.5483 16.0682 14.965 16.4126 14.3437 16.6745C13.825 16.9015 13.3293 17.1779 12.8633 17.4999C12.2956 17.9197 11.8646 18.4985 11.6246 19.1633C11.5674 19.3005 11.5198 19.4415 11.4821 19.5853C11.4449 19.8467 11.3463 20.0955 11.1945 20.3112C11.0427 20.527 10.8419 20.7037 10.6088 20.8266C9.85935 21.2363 9.54346 21.4783 8.91789 21.2487C9.76283 20.696 10.4061 19.8837 10.7513 18.9336C11.1973 18.1272 11.7517 17.3858 12.3988 16.7303C12.723 16.3216 13.1199 15.9765 13.5694 15.7124C13.9648 15.484 14.3136 15.1829 14.5976 14.8249C14.7029 14.6822 14.8206 14.5208 14.9568 14.347C15.632 13.5063 16.2038 12.5874 16.6601 11.6099C16.9643 10.8701 17.1986 10.1033 17.36 9.31973C17.7811 8.92315 18.2699 8.6057 18.8032 8.38254ZM15.8921 2.74081C15.8921 2.70977 15.8921 2.67254 15.8921 2.6415C16.5913 3.86319 16.9546 5.24883 16.945 6.65713C16.914 8.23007 16.5905 9.78342 15.9912 11.2375C15.5516 12.1776 15.0005 13.0612 14.3498 13.8691C14.2136 14.0491 14.0897 14.2167 13.9906 14.3594C13.7387 14.6635 13.4345 14.9199 13.0925 15.1166C12.5998 15.4037 12.165 15.7805 11.8104 16.2276C11.135 16.9189 10.5577 17.6999 10.0947 18.5488C9.3019 20.2742 8.57104 20.7211 8.06315 20.7646L7.79681 20.5784C7.38183 19.8956 8.11889 19.064 8.52768 18.6109L8.62059 18.4992C8.83737 18.2571 9.16564 17.9406 9.51869 17.6054C10.0773 17.1089 10.5875 16.5603 11.0424 15.9669C11.5918 14.8869 12.0238 13.7508 12.3307 12.5782C12.405 12.3423 12.4917 12.0878 12.5784 11.8396C12.6156 11.7279 12.6527 11.6161 12.6899 11.5168C12.9996 10.6355 13.3712 9.68591 13.7057 8.817C13.9658 8.15911 14.2012 7.57569 14.3932 7.02331C14.4899 6.78347 14.6081 6.55289 14.7463 6.33439C15.0882 5.75434 15.3843 5.14839 15.632 4.52208C15.873 3.96144 15.9627 3.34715 15.8921 2.74081ZM13.619 6.86815C13.4394 7.34605 13.235 7.87981 12.9996 8.44461C12.9067 8.69287 12.8076 8.94113 12.7085 9.1956C12.5763 8.96936 12.4161 8.76081 12.2316 8.57494C12.0858 8.44031 11.9624 8.28316 11.8661 8.10945C11.7905 7.90102 11.7588 7.6791 11.7732 7.45777C12.3406 6.66166 12.6635 5.71681 12.7023 4.73931C12.7023 4.53449 12.758 4.29865 12.789 4.1559C13.3135 4.96432 13.6011 5.90404 13.619 6.86815ZM7.14646 0.661621C7.1802 0.850453 7.1802 1.04379 7.14646 1.23262C7.05752 1.97214 7.18898 2.7215 7.52429 3.38629C7.65202 3.62478 7.79476 3.85489 7.95166 4.07521C8.41688 4.70443 8.769 5.41013 8.99222 6.1606C9.33319 7.58312 9.39837 9.05802 9.18422 10.5052C9.13447 11.1 9.13447 11.6979 9.18422 12.2927C9.23377 13.3416 9.28332 14.4277 8.86215 14.9925C8.81677 15.0743 8.80497 15.1706 8.82925 15.261C8.85353 15.3513 8.91199 15.4287 8.99222 15.4766C9.05826 15.5418 9.14726 15.5783 9.23997 15.5783C9.33268 15.5783 9.42167 15.5418 9.48772 15.4766C10.0142 14.7629 9.95845 13.5774 9.9027 12.4292C9.85576 11.8716 9.85576 11.311 9.9027 10.7534C10.0409 9.73912 10.0576 8.71189 9.95225 7.69362C10.0031 7.5693 10.0631 7.44897 10.1319 7.33364C10.3772 6.8243 10.5422 6.27994 10.6212 5.71994C10.6555 5.34005 10.6555 4.95783 10.6212 4.57794C10.6212 4.46622 10.6212 4.33589 10.6212 4.21796C10.7513 4.43519 10.9309 4.77655 11.1848 5.31031C11.2413 5.6639 11.2413 6.02424 11.1848 6.37783C11.0577 7.02149 11.1026 7.68737 11.3149 8.30806C11.4545 8.56665 11.6343 8.8013 11.8476 9.00319C12.2192 9.388 12.5413 9.72315 12.0643 11.1693L11.9405 11.5355C11.8537 11.7775 11.7732 12.0196 11.7051 12.243C11.401 13.3696 10.9861 14.4632 10.4663 15.5076C10.0324 16.067 9.5472 16.5844 9.01699 17.0531C8.58962 17.3882 8.27374 17.7358 8.02598 18.0089L7.92688 18.1144C7.48348 18.5452 7.15546 19.0809 6.97304 19.6722C6.53335 19.4279 6.16911 19.0672 5.92009 18.6295C5.77496 18.0137 5.80066 17.3698 5.99442 16.7676C6.15705 16.1565 6.485 15.6024 6.94207 15.1663C7.18273 14.8668 7.39039 14.5422 7.56145 14.1981C7.8798 13.6371 8.07242 13.0134 8.1259 12.3703C8.17938 11.7272 8.09245 11.0802 7.87114 10.4741C7.52151 9.27964 7.29325 8.05279 7.18982 6.81229C7.09549 5.76568 6.91946 4.72808 6.66335 3.70903C6.16784 1.87189 6.92349 0.711273 7.14646 0.667827V0.661621Z"
        fill={color}
      />
    </svg>
  );
};

export default IcFruitOutline;
