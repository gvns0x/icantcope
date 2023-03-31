import React from 'react';
import '../Header/Header.css';

class Header extends React.Component {
    render() {
        
        return <div className='Header'>
            <div className='HeaderContent'>
                <div className='HeaderContentOne'>
                    Endless wells of relief,<br/>
                    Of connectedness,<br/>
                    Of some peace,<br/>
                    Outside it’s dope<br/>
                    Inside,<br/>
                </div>
                <svg alt="I can't cope" className='LogoDesktop Logo' xmlns="http://www.w3.org/2000/svg" width="898" height="52" viewBox="0 0 898 52" fill="none">
<path d="M41.848 31.128C41.848 31.128 32.072 24.004 26.508 23.9C20.944 23.796 17.512 24.004 13.456 23.9C9.4 23.796 0.144 23.64 0.56 21.872C0.924 20.052 14.808 12.304 32.072 10.276C49.284 8.248 67.848 11.576 71.124 12.304C71.124 12.304 48.608 11.576 41.848 15.216C35.088 18.908 35.972 24.056 37.688 24.732C46.06 27.956 46.684 29.048 54.848 29.62C59.424 29.932 65.612 31.284 71.072 34.56C76.636 37.836 84.54 30.036 86.516 28.996C86.516 28.996 78.56 41.996 72.008 43.556C66.86 44.908 17.876 51.096 3.472 35.704C3.472 35.704 17.876 45.012 25.416 36.952C29.524 32.532 41.848 31.128 41.848 31.128ZM128.662 16.152C132.042 14.852 149.982 6.48 182.742 10.744C188.722 11.576 187.838 20.884 181.754 20.364C181.39 20.26 180.922 20.208 180.402 20.104C166.726 17.244 152.634 7.832 134.33 19.324C134.33 19.324 159.758 19.428 159.498 36.12C159.498 36.12 161.994 38.044 170.522 40.02C180.974 42.568 212.538 33.624 212.538 33.624C212.538 33.624 204.218 46.936 159.498 45.844C153.414 45.688 147.122 46.728 142.234 37.68C141.818 36.952 142.234 35.756 140.882 34.872C139.53 33.988 151.438 35.704 146.446 24.992C144.47 20.728 126.426 22.028 120.81 21.144L122.318 19.844C123.878 18.648 125.022 17.92 126.79 16.984L128.662 16.152ZM314.677 20.468C308.905 13.24 293.045 10.952 293.045 10.952C293.045 10.952 269.229 7.416 247.597 11.836C247.597 11.836 245.465 12.512 241.149 11.836C238.133 10.328 223.833 16.516 223.833 16.516C223.833 16.516 212.237 23.432 216.657 29.048C220.349 34.872 229.501 35.444 237.405 35.444C246.037 35.444 244.061 34.664 247.597 39.032C249.053 42.048 266.525 51.928 280.045 41.008C294.501 29.568 276.977 28.372 270.529 29.776C263.457 31.18 261.169 31.18 259.869 32.012C256.281 33.364 248.325 37.004 247.025 34.872C247.025 34.872 251.861 32.584 250.457 26.812C249.053 21.352 268.553 17.608 268.553 17.608C268.553 17.608 287.793 22.392 289.977 25.564C292.317 29.048 297.465 43.504 311.765 36.328C314.157 35.444 316.185 33.364 317.537 30.452C318.889 26.292 317.537 24.004 314.677 20.468ZM241.825 29.048C241.149 30.452 235.273 27.644 245.465 19.584C249.053 16.516 244.061 17.608 244.061 13.76C244.061 13.24 245.465 12.512 247.597 13.24C251.861 14.644 263.457 16.048 263.457 16.048C264.185 16.048 248.325 22.392 241.825 29.048ZM345.529 10.692C341.629 11.68 338.093 14.02 336.117 17.348C334.973 19.584 334.245 22.028 335.233 24.836C337.781 31.856 322.753 27.54 321.245 33.572C319.789 39.5 339.393 43.556 341.265 43.868C350.573 45.272 362.741 47.092 379.641 45.22C379.641 45.22 354.369 46 347.921 39.604C343.137 34.612 350.833 29.724 345.165 26.448C339.341 23.068 337.937 17.816 341.369 15.528C344.749 13.084 346.621 11.732 353.329 12.044C360.297 12.252 367.005 12.356 367.629 16.464C368.305 20.676 378.757 28.164 381.409 29.048C384.113 29.828 389.937 27.696 388.949 30.712C388.065 33.78 378.653 49.016 402.989 39.084C420.773 31.804 413.129 19.844 405.537 18.596C398.725 17.608 393.473 24.368 386.973 17.556C386.973 17.556 384.841 13.344 377.769 12.824C371.373 12.408 358.893 7.624 345.529 10.692ZM417.278 15.476C413.43 17.192 444.682 0.863998 490.13 16.412C490.13 16.412 484.826 16.1 480.146 18.128C475.362 20.052 473.074 17.452 464.702 14.956C456.33 12.564 446.19 21.092 443.07 22.652C439.95 24.264 432.15 31.856 431.526 32.324C430.902 32.844 430.434 36.276 436.154 34.82C441.926 33.364 441.042 37.628 446.554 41.892C452.066 46.156 476.246 43.92 476.246 43.92C476.246 43.92 471.254 45.22 464.13 45.636C456.902 46.104 425.91 47.196 418.734 40.956C418.734 40.956 422.426 41.268 423.466 38.72C424.402 36.12 423.57 32.48 426.846 29.984C430.174 27.592 444.422 18.908 445.462 17.66C446.398 16.412 443.434 18.388 442.706 18.596C441.926 18.908 437.974 18.18 437.09 16.36C435.322 12.616 421.126 13.812 417.278 15.476ZM532.271 16.152C535.651 14.852 553.591 6.48 586.351 10.744C592.331 11.576 591.447 20.884 585.363 20.364C584.999 20.26 584.531 20.208 584.011 20.104C570.335 17.244 556.243 7.832 537.939 19.324C537.939 19.324 563.367 19.428 563.107 36.12C563.107 36.12 565.603 38.044 574.131 40.02C584.583 42.568 616.147 33.624 616.147 33.624C616.147 33.624 607.827 46.936 563.107 45.844C557.023 45.688 550.731 46.728 545.843 37.68C545.427 36.952 545.843 35.756 544.491 34.872C543.139 33.988 555.047 35.704 550.055 24.992C548.079 20.728 530.035 22.028 524.419 21.144L525.927 19.844C527.487 18.648 528.631 17.92 530.399 16.984L532.271 16.152ZM715.323 21.404C713.243 19.896 704.975 16.828 701.491 14.956C698.007 13.032 684.955 10.536 678.039 10.432C671.071 10.328 666.911 11.108 665.091 10.744C660.151 10.016 652.975 8.924 649.387 10.016C641.951 12.2 640.339 13.604 637.375 15.216C636.075 15.944 634.723 16.516 633.371 16.984L626.871 19.22C623.283 20.416 620.475 23.068 619.591 26.448C618.083 32.324 622.139 35.444 623.647 36.536C635.035 44.596 647.931 44.648 650.739 45.428C653.495 46.208 661.035 46.52 668.159 45.272C670.031 44.96 677.675 42.984 680.379 42.516C687.971 41.216 692.027 43.14 697.643 43.348C700.503 43.452 707.627 43.088 718.495 33.728C724.787 28.372 721.355 25.876 715.323 21.404ZM693.483 33.936C690.831 34.612 682.303 37.472 679.651 38.72C676.531 40.228 675.127 40.852 669.303 40.176C658.851 39.032 663.791 34.144 657.395 31.7C653.443 30.192 649.439 31.232 648.087 31.336C646.735 31.336 642.107 31.7 639.923 25.304C638.155 20.26 645.123 20.104 646.891 13.084C647.359 11.212 653.547 11.316 655.367 11.524C659.371 11.992 660.515 11.836 664.623 13.344C668.991 14.904 668.575 13.76 685.163 15.476C691.819 16.152 696.031 20.676 699.983 22.392C704.975 24.576 713.347 22.808 712.723 26.24C711.631 31.596 702.791 31.804 693.483 33.936ZM778.931 40.124C777.111 34.82 769.259 34.82 769.259 34.82C763.175 34.82 758.755 33 758.755 33C758.755 33 760.731 29.724 762.083 28.892C763.539 28.164 774.875 26.5 774.875 26.5C777.423 25.408 786.783 24.42 789.383 17.244C790.735 13.604 777.579 9.548 768.843 9.6C730.571 9.808 724.955 23.952 724.955 23.952C728.283 20.468 730.519 21.82 731.299 21.82C731.975 21.924 739.307 25.252 739.827 25.512C740.451 25.772 759.275 38.564 767.023 43.452C774.095 47.872 784.027 45.688 790.059 43.296C793.907 41.736 793.439 45.012 805.711 41.06C804.671 41.216 779.867 42.724 778.931 40.124ZM751.319 15.528C751.319 15.528 755.895 11.056 763.695 12.46C764.787 12.668 766.087 12.044 766.971 12.46C767.959 12.928 770.351 14.748 774.719 14.228C779.139 13.604 780.387 14.072 779.867 16.204C779.347 18.388 777.267 23.9 766.399 26.084C761.615 27.02 759.951 26.5 759.327 26.084C758.651 25.564 754.179 21.612 749.863 20.676C747.627 20.208 749.707 15.424 751.319 15.528ZM805.711 41.06H805.763C805.919 41.008 805.867 41.008 805.711 41.06ZM871.138 11.212C871.138 11.212 841.29 6.012 818.306 13.968C795.529 21.872 821.27 29.62 824.65 29.568C829.07 29.464 830.994 36.588 827.77 37.94C822.622 40.384 826.158 42.516 829.382 43.556C832.554 44.544 856.006 49.432 880.81 41.684C894.902 37.472 897.346 32.22 897.346 32.22C897.346 32.22 880.498 37.16 868.954 38.2C857.046 39.448 851.43 33.052 848.778 36.38C846.906 38.72 841.082 36.64 837.91 35.288C836.922 34.82 836.662 33.468 837.442 32.584C839.262 30.556 842.33 27.228 843.942 26.032C846.542 23.952 852.938 26.5 857.202 24.94C861.518 23.536 860.322 18.076 856.37 17.556C852.002 16.984 852.054 20.26 847.842 21.664C843.682 23.068 837.91 29.932 833.906 29.932C829.798 29.932 826.574 28.58 831.878 23.484C831.878 23.484 835.31 19.896 839.158 17.452C844.618 14.176 851.274 14.332 854.966 14.696C858.71 15.06 863.286 11.42 871.138 11.212Z" fill="#181A27"/>
                </svg>
                <svg className='LogoMobile Logo' alt="I can't cope" xmlns="http://www.w3.org/2000/svg" width="501" height="101" viewBox="0 0 501 101" fill="none">
<path d="M42.7272 22.5872C42.7272 22.5872 32.7432 15.3116 27.0608 15.2054C21.3784 15.0992 17.8734 15.3116 13.7311 15.2054C9.58881 15.0992 0.135884 14.9399 0.560735 13.1343C0.932479 11.2756 15.1119 3.36271 32.7432 1.29156C50.3214 -0.779582 69.2803 2.61922 72.626 3.36271C72.626 3.36271 49.631 2.61922 42.7272 6.33667C35.8233 10.1072 36.7261 15.3647 38.4787 16.0551C47.0288 19.3477 47.666 20.463 56.0037 21.0471C60.6771 21.3658 66.9968 22.7465 72.5729 26.0922C78.2553 29.4379 86.3275 21.472 88.3455 20.4098C88.3455 20.4098 80.2202 33.6864 73.5288 35.2796C68.2713 36.6604 18.2451 42.98 3.53469 27.2606C3.53469 27.2606 18.2451 36.7666 25.9456 28.5351C30.141 24.0211 42.7272 22.5872 42.7272 22.5872Z" fill="#181A27"/>
<path d="M131.388 7.29258C134.84 5.96492 153.162 -2.5852 186.619 1.76952C192.726 2.61922 191.823 12.1253 185.61 11.5942C185.238 11.488 184.76 11.4349 184.229 11.3287C170.262 8.40781 155.87 -1.20443 137.177 10.5321C137.177 10.5321 163.146 10.6383 162.88 27.6854C162.88 27.6854 165.429 29.6503 174.139 31.6684C184.813 34.2706 217.049 25.1363 217.049 25.1363C217.049 25.1363 208.552 38.7315 162.88 37.6163C156.667 37.457 150.241 38.5191 145.249 29.2786C144.824 28.5351 145.249 27.3137 143.868 26.4109C142.487 25.5081 154.649 27.2606 149.551 16.3207C147.532 11.9659 129.105 13.2936 123.369 12.3908L124.909 11.0631C126.502 9.84168 127.671 9.09819 129.476 8.14228L131.388 7.29258Z" fill="#181A27"/>
<path d="M321.361 11.7004C315.466 4.31862 299.269 1.98195 299.269 1.98195C299.269 1.98195 274.946 -1.62929 252.854 2.88475C252.854 2.88475 250.677 3.57513 246.269 2.88475C243.189 1.34467 228.584 7.66432 228.584 7.66432C228.584 7.66432 216.742 14.7275 221.256 20.463C225.026 26.4109 234.373 26.995 242.445 26.995C251.261 26.995 249.243 26.1984 252.854 30.6594C254.341 33.7395 272.185 43.8297 285.992 32.6774C300.756 20.994 282.859 19.7726 276.274 21.2064C269.051 22.6403 266.715 22.6403 265.387 23.49C261.723 24.8708 253.597 28.5882 252.27 26.4109C252.27 26.4109 257.209 24.0742 255.775 18.1794C254.341 12.6032 274.256 8.77956 274.256 8.77956C274.256 8.77956 293.905 13.6653 296.136 16.9048C298.525 20.4629 303.783 35.2265 318.387 27.8978C320.83 26.995 322.901 24.8708 324.282 21.8968C325.663 17.6483 324.282 15.3116 321.361 11.7004ZM246.959 20.463C246.269 21.8968 240.268 19.0291 250.677 10.7976C254.341 7.66432 249.243 8.77956 249.243 4.84969C249.243 4.31862 250.677 3.57513 252.854 4.31862C257.209 5.75249 269.051 7.18637 269.051 7.18637C269.795 7.18637 253.597 13.6653 246.959 20.463Z" fill="#181A27"/>
<path d="M352.869 1.71641C348.886 2.72543 345.275 5.11522 343.257 8.51403C342.088 10.7976 341.345 13.2936 342.354 16.1613C344.956 23.3307 329.608 18.9229 328.068 25.0832C326.581 31.1373 346.602 35.2796 348.514 35.5983C358.02 37.0321 370.447 38.8908 387.707 36.979C387.707 36.979 361.897 37.7756 355.312 31.2435C350.426 26.1453 358.286 21.1533 352.497 17.8076C346.549 14.3557 345.115 8.99198 348.62 6.6553C352.072 4.15931 353.984 2.77854 360.835 3.09718C367.951 3.3096 374.802 3.41582 375.439 7.61122C376.13 11.9128 386.804 19.5601 389.512 20.463C392.274 21.2595 398.222 19.0822 397.213 22.1624C396.31 25.2956 386.698 40.8558 411.551 30.7125C429.714 23.2776 421.907 11.0631 414.154 9.78858C407.197 8.77956 401.833 15.6834 395.195 8.72645C395.195 8.72645 393.017 4.42484 385.795 3.89377C379.263 3.46892 366.517 -1.41686 352.869 1.71641Z" fill="#181A27"/>
<path d="M426.145 6.6022C422.215 8.35471 454.132 -8.32068 500.547 7.55811C500.547 7.55811 495.13 7.23947 490.35 9.31062C485.465 11.2756 483.128 8.62024 474.578 6.07113C466.028 3.62824 455.672 12.3377 452.486 13.9309C449.299 15.5772 441.333 23.3307 440.696 23.8086C440.059 24.3397 439.581 27.8447 445.422 26.3578C451.317 24.8708 450.414 29.2255 456.044 33.5802C461.673 37.9349 486.367 35.6514 486.367 35.6514C486.367 35.6514 481.269 36.979 473.994 37.4039C466.612 37.8818 434.961 38.9971 427.632 32.6243C427.632 32.6243 431.402 32.9429 432.465 30.3407C433.42 27.6854 432.571 23.968 435.916 21.4189C439.315 18.976 453.866 10.1072 454.929 8.83266C455.884 7.55811 452.857 9.57615 452.114 9.78858C451.317 10.1072 447.281 9.36373 446.378 7.505C444.573 3.68135 430.075 4.90279 426.145 6.6022Z" fill="#181A27"/>
<path d="M11.5276 60.6576C16.0594 58.9147 40.1123 47.6899 84.0352 53.4069C92.0529 54.5224 90.8677 67.002 82.7106 66.3049C82.2226 66.1654 81.5951 66.0957 80.8979 65.9563C62.5618 62.1217 43.668 49.5026 19.1269 64.9105C19.1269 64.9105 53.2195 65.0499 52.8709 87.4297C52.8709 87.4297 56.2174 90.0093 67.6513 92.6586C81.6648 96.0748 123.984 84.0832 123.984 84.0832C123.984 84.0832 112.829 101.931 52.8709 100.467C44.7138 100.258 36.2778 101.652 29.7242 89.5213C29.1664 88.5452 29.7242 86.9417 27.9115 85.7564C26.0988 84.5712 42.0645 86.8719 35.3715 72.5098C32.7222 66.7929 8.52964 68.5359 1 67.3506L3.02184 65.6077C5.11341 64.0041 6.64729 63.0281 9.01773 61.7731L11.5276 60.6576Z" fill="#181A27"/>
<path d="M256.953 67.6992C254.165 65.6774 243.079 61.564 238.408 59.0541C233.737 56.4745 216.238 53.128 206.965 52.9885C197.623 52.8491 192.045 53.8949 189.605 53.4069C182.982 52.4308 173.36 50.9667 168.55 52.4308C158.58 55.359 156.419 57.2414 152.445 59.4027C150.702 60.3788 148.889 61.1457 147.076 61.7731L138.362 64.771C133.551 66.3746 129.786 69.9302 128.601 74.462C126.579 82.3402 132.017 86.5233 134.039 87.9874C149.307 98.7939 166.598 98.8636 170.362 99.9094C174.058 100.955 184.167 101.373 193.718 99.7002C196.228 99.2819 206.477 96.6326 210.102 96.0051C220.281 94.2621 225.719 96.8417 233.249 97.1206C237.083 97.2601 246.635 96.772 261.206 84.2226C269.642 77.0416 265.041 73.6951 256.953 67.6992ZM227.671 84.5015C224.116 85.4078 212.682 89.2424 209.126 90.9156C204.943 92.9375 203.061 93.7741 195.252 92.8678C181.239 91.3339 187.862 84.7804 179.287 81.5036C173.988 79.4817 168.62 80.8761 166.807 81.0155C164.994 81.0155 158.789 81.5036 155.861 72.9282C153.491 66.1654 162.833 65.9563 165.203 56.5442C165.831 54.0343 174.127 54.1738 176.567 54.4526C181.936 55.0801 183.47 54.871 188.977 56.8928C194.834 58.9844 194.276 57.4506 216.516 59.7513C225.44 60.6576 231.088 66.7232 236.386 69.0239C243.079 71.9521 254.304 69.5816 253.467 74.1831C252.003 81.3641 240.151 81.643 227.671 84.5015Z" fill="#181A27"/>
<path d="M342.235 92.798C339.795 85.6867 329.268 85.6867 329.268 85.6867C321.111 85.6867 315.184 83.2466 315.184 83.2466C315.184 83.2466 317.834 78.8543 319.646 77.7388C321.599 76.7627 336.797 74.5317 336.797 74.5317C340.214 73.0676 352.763 71.7429 356.249 62.1217C358.062 57.2414 340.423 51.8033 328.71 51.873C277.397 52.1519 269.867 71.1155 269.867 71.1155C274.329 66.4443 277.327 68.257 278.373 68.257C279.279 68.3964 289.11 72.8584 289.807 73.207C290.643 73.5556 315.882 90.7065 326.27 97.26C335.751 103.186 349.068 100.258 357.155 97.0509C362.314 94.9593 361.687 99.3516 378.141 94.053C376.746 94.2621 343.49 96.284 342.235 92.798ZM305.215 59.821C305.215 59.821 311.35 53.8252 321.808 55.7076C323.272 55.9865 325.015 55.1498 326.2 55.7076C327.525 56.3351 330.732 58.7752 336.588 58.078C342.514 57.2414 344.188 57.8689 343.49 60.7273C342.793 63.6555 340.004 71.0457 325.433 73.9739C319.019 75.2289 316.788 74.5317 315.951 73.9739C315.045 73.2768 309.049 67.9781 303.263 66.7232C300.265 66.0957 303.053 59.6816 305.215 59.821ZM378.141 94.053H378.21C378.42 93.9833 378.35 93.9833 378.141 94.053Z" fill="#181A27"/>
<path d="M465.862 54.0343C465.862 54.0343 425.843 47.0624 395.027 57.7294C364.49 68.3267 399.001 78.7148 403.533 78.6451C409.459 78.5057 412.039 88.0572 407.716 89.8698C400.814 93.1466 405.555 96.0051 409.877 97.3995C414.13 98.7241 445.573 105.278 478.829 94.8896C497.723 89.2424 501 82.2008 501 82.2008C501 82.2008 478.411 88.8241 462.934 90.2184C446.968 91.8917 439.438 83.3163 435.883 87.7783C433.373 90.9156 425.564 88.1269 421.311 86.3142C419.987 85.6867 419.638 83.874 420.684 82.6888C423.124 79.9698 427.237 75.5078 429.399 73.9042C432.885 71.1155 441.46 74.5317 447.177 72.4401C452.964 70.5577 451.36 63.2372 446.062 62.54C440.205 61.7731 440.275 66.1654 434.628 68.0478C429.05 69.9302 421.311 79.1331 415.943 79.1331C410.435 79.1331 406.113 77.3204 413.224 70.488C413.224 70.488 417.825 65.6774 422.985 62.4006C430.305 58.0083 439.229 58.2175 444.179 58.7055C449.199 59.1935 455.334 54.3132 465.862 54.0343Z" fill="#181A27"/>
</svg>
                
            </div>
        </div>
    }
}

export default Header;