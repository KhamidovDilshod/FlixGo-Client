import {Component, Input} from '@angular/core';
import {IconType} from "../../types/icon-type";

@Component({
  selector: 'app-icon',
  template: `
      <ng-template [ngIf]="iconName=='home'">
          <svg height="24" style="fill:{{color}};transform: ;msFilter:;" viewBox="0 0 24 24" width="24"
               xmlns="http://www.w3.org/2000/svg">
              <path
                      d="M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z"></path>
          </svg>

      </ng-template>
      <ng-template [ngIf]="iconName=='user'">
          <svg height="24" style="fill: {{color}};transform: ;msFilter:;" viewBox="0 0 24 24" width="24"
               xmlns="http://www.w3.org/2000/svg">
              <path
                      d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
          </svg>
      </ng-template>
      <ng-template [ngIf]="iconName=='menu'">
          <svg height="24" style="fill: {{color}};transform: ;msFilter:;" viewBox="0 0 24 24" width="24"
               xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
      </ng-template>
      <ng-template [ngIf]="iconName=='cancel'">
          <svg height="24" style="fill: {{color}};transform: ;msFilter:;" viewBox="0 0 24 24" width="24"
               xmlns="http://www.w3.org/2000/svg">
              <path
                      d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
      </ng-template>
      <ng-template [ngIf]="iconName=='logo'">
          <svg id="Layer_1" viewBox="0 0 714 164" width="100%" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
              <path d="M604.000000,165.000000
\tC403.099762,165.000000 202.199493,165.000000 1.149625,165.000000
\tC1.149625,110.333595 1.149625,55.666862 1.149625,1.000000
\tC39.100304,1.000000 77.081497,1.000000 115.530838,1.449676
\tC116.629677,7.961155 116.808197,14.125596 118.147652,20.026518
\tC118.588837,21.970182 122.000000,24.459454 124.110329,24.514717
\tC127.172089,24.594898 129.315536,22.052574 129.033844,18.325026
\tC128.597931,12.556917 128.335815,6.775673 128.000000,1.000000
\tC130.370560,1.000000 132.741104,1.000000 135.519974,1.355219
\tC130.146851,8.675149 129.647720,11.994976 133.658798,18.818041
\tC138.809006,15.191774 144.011322,11.684838 149.030914,7.933425
\tC151.843552,5.831401 154.353607,3.324482 157.000000,0.999998
\tC268.687561,1.000000 380.375122,1.000000 492.576965,1.386374
\tC494.451233,7.210571 495.637695,12.701768 497.283386,18.051693
\tC497.740265,19.536943 499.559204,20.603203 500.753235,21.861685
\tC501.226562,20.268057 502.371490,18.515959 502.040253,17.112200
\tC501.229523,13.676518 501.465332,11.103562 505.036652,9.530215
\tC506.075623,9.072479 507.074646,8.370723 507.882416,7.569511
\tC510.610718,4.863461 513.213074,4.709393 516.023621,7.484222
\tC518.484131,9.913403 520.684509,9.438725 522.440918,6.692158
\tC520.906311,4.725204 519.453186,2.862602 518.000000,1.000000
\tC583.604980,1.000000 649.209961,1.000000 714.907471,1.000000
\tC714.907471,55.553486 714.907471,110.107178 714.907471,165.000000
\tC680.313171,165.000000 645.625244,165.000000 610.499878,164.645691
\tC609.705383,162.745163 609.685730,160.966812 608.848938,159.750732
\tC608.431335,159.143845 605.671082,159.136063 605.436890,159.598999
\tC604.614258,161.225494 604.427856,163.173813 604.000000,165.000000
M133.865295,51.589397
\tC133.969223,51.046246 134.073135,50.503094 134.453125,49.062645
\tC134.453125,43.974129 134.453125,38.885616 134.453125,33.762066
\tC133.139099,33.634151 132.493469,33.516624 131.847778,33.516331
\tC105.704880,33.504375 79.561974,33.496674 53.419102,33.521572
\tC52.279022,33.522659 51.139236,33.835243 49.500725,33.937485
\tC49.343975,33.996845 49.187222,34.056202 48.325180,34.085781
\tC43.232708,36.258106 42.140930,40.548908 42.145298,45.517628
\tC42.170444,74.143730 42.152985,102.769859 42.175819,131.395966
\tC42.176697,132.497269 42.441898,133.598389 42.565594,134.557434
\tC48.787277,134.557434 54.680206,134.557434 60.842751,134.557434
\tC60.842751,132.370209 60.842754,130.558243 60.842754,128.746262
\tC60.842754,104.780212 60.823452,80.814110 60.883461,56.848206
\tC60.887753,55.135757 61.473118,53.424759 62.648193,51.871201
\tC86.098595,51.802948 109.549004,51.734699 133.865295,51.589397
M573.819885,51.565773
\tC573.900269,51.040295 573.980591,50.514820 574.297119,49.084316
\tC574.229492,44.398182 574.161865,39.712044 574.126648,34.308357
\tC573.728088,34.139179 573.329529,33.969997 572.030945,33.549137
\tC550.479980,33.534874 528.928955,33.493168 507.378082,33.530354
\tC503.249542,33.537479 499.121552,33.855137 494.499207,33.941608
\tC494.342804,34.000980 494.186432,34.060352 493.273621,34.054317
\tC481.212982,37.789864 474.577179,45.748501 473.942017,57.496487
\tC473.971222,57.661732 474.000397,57.826973 473.766937,58.899021
\tC473.836731,75.596848 473.906525,92.294678 473.858063,109.818298
\tC473.958954,111.195908 474.059875,112.573524 474.235596,114.695068
\tC476.405518,125.653244 483.631195,131.436142 494.610962,134.319626
\tC495.746643,134.397995 496.882324,134.476364 498.912659,134.843140
\tC510.515320,134.871765 522.118225,134.958862 533.720581,134.912186
\tC544.807739,134.867584 555.894287,134.683792 567.527283,134.548691
\tC568.026550,134.387817 568.525818,134.226929 569.731445,134.038879
\tC571.440918,131.679489 573.150452,129.320099 575.029480,126.500992
\tC575.029480,126.500992 574.946777,126.018021 575.190063,125.106018
\tC575.112610,111.399643 575.035156,97.693268 575.042175,83.500885
\tC575.042175,83.500885 574.838257,83.051712 574.893616,82.325699
\tC573.714111,77.691414 570.900696,75.096611 565.503906,74.960716
\tC565.503906,74.960716 565.019897,75.061043 564.096069,74.875885
\tC545.725952,74.933617 527.355835,74.991348 508.413696,75.006859
\tC508.292114,75.332611 508.170532,75.658356 507.874847,76.905846
\tC507.932922,81.942131 507.990997,86.978409 508.016479,92.678261
\tC508.368195,92.840584 508.719910,93.002907 509.964233,93.445442
\tC525.533386,93.445442 541.102478,93.445442 557.328674,93.445442
\tC556.892273,101.638870 556.490173,109.188492 555.504639,116.647690
\tC555.317871,116.709625 555.131104,116.771568 554.049316,116.554436
\tC536.049438,116.647469 518.049500,116.740509 499.489136,116.648453
\tC499.295258,116.681931 499.101349,116.715401 498.381256,116.321251
\tC496.266602,114.552696 494.151947,112.784134 492.111664,110.267860
\tC492.050903,109.521088 491.990143,108.774307 492.122955,107.104233
\tC492.058441,91.395897 491.993927,75.687553 492.036926,59.500340
\tC492.036926,59.500340 491.947845,59.017693 492.212555,58.333282
\tC492.664429,54.265438 495.199463,52.356594 499.942108,51.884872
\tC524.294434,51.811745 548.646729,51.738613 573.819885,51.565773
M193.343445,41.822342
\tC198.541824,42.076828 203.740189,42.331314 209.623322,42.823467
\tC210.260361,42.116138 211.434555,41.417404 211.446030,40.700062
\tC211.513306,36.494915 211.308914,32.285423 211.339508,27.500927
\tC211.265213,27.317385 211.190903,27.133844 210.658737,26.202316
\tC204.927856,26.202316 199.196991,26.202316 193.364883,26.202316
\tC193.364883,31.317354 193.364883,36.054920 193.343445,41.822342
M125.612305,93.204933
\tC125.740585,92.803612 125.868866,92.402290 126.191544,91.084595
\tC126.126816,86.056137 126.062088,81.027672 126.044464,75.409386
\tC125.701721,75.290192 125.358986,75.170990 124.090836,74.878777
\tC106.053719,74.943527 88.016602,75.008278 69.502274,74.969017
\tC69.502274,74.969017 69.037827,75.120117 68.199028,75.365677
\tC68.453979,81.286568 68.708923,87.207451 69.501434,93.333054
\tC69.684532,93.276154 69.867638,93.219254 70.946793,93.439575
\tC88.943604,93.346931 106.940414,93.254288 125.612305,93.204933
M147.038437,110.788239
\tC148.820175,128.265213 162.455948,137.805511 180.845093,134.310638
\tC180.845093,128.565811 180.845093,122.793213 180.845093,116.471809
\tC178.574539,116.471809 176.451950,116.539116 174.334900,116.459335
\tC167.681839,116.208626 165.416824,113.914940 165.343216,107.297379
\tC165.285889,102.143539 165.348785,96.988472 165.328629,91.834076
\tC165.245453,70.561241 165.150970,49.288452 165.200348,27.496164
\tC165.125931,27.333019 165.051529,27.169872 164.599625,26.227186
\tC158.787811,26.499960 152.976013,26.772734 146.960785,27.495996
\tC146.960785,27.495996 147.061249,27.979961 146.876175,28.903826
\tC146.940948,55.609409 147.005722,82.314995 146.970459,109.497986
\tC146.970459,109.497986 147.138443,109.955933 147.038437,110.788239
M355.412292,34.739582
\tC355.412292,34.739582 354.981293,34.953056 354.066376,34.757229
\tC350.906219,34.742779 347.744232,34.651829 344.586243,34.727386
\tC332.245453,35.022652 325.702057,46.476517 331.677094,57.294125
\tC333.844452,61.218109 336.051056,65.120560 338.257111,69.023041
\tC349.288574,88.537491 360.332611,108.044838 371.356750,127.563438
\tC374.550507,133.218063 379.337158,135.589142 385.817108,135.268402
\tC393.809570,134.872787 396.936340,128.975494 400.869354,123.485596
\tC410.502258,128.745285 418.221436,126.894173 423.601349,117.479683
\tC436.523743,94.866310 449.124542,72.068848 462.096222,49.484169
\tC465.164429,44.142155 465.824310,38.992290 464.462036,33.194092
\tC465.477753,33.702263 466.513123,34.174942 467.506195,34.724056
\tC477.856903,40.447491 489.245880,35.238110 491.618347,23.685551
\tC492.826782,17.800993 486.778320,7.842659 480.439575,5.280501
\tC472.110260,1.913738 461.585510,7.045237 460.044006,15.937282
\tC459.292786,20.270731 460.520691,24.947277 460.109650,29.429802
\tC458.064240,28.323669 456.018829,27.217539 453.059784,25.895590
\tC431.509247,25.836723 409.958679,25.738913 388.408142,25.740311
\tC380.957642,25.740795 373.507172,25.987888 365.336670,26.073601
\tC362.177734,28.903574 359.018799,31.733545 355.412292,34.739582
M229.178864,62.823101
\tC238.806076,73.301308 248.433304,83.779518 258.152252,94.357582
\tC245.722336,107.942390 233.673370,121.110855 221.031174,134.927673
\tC228.223099,134.927673 234.372711,134.674316 240.489517,135.013168
\tC244.860580,135.255310 247.810944,133.874908 250.688004,130.486572
\tC257.093018,122.943344 264.020874,115.844025 270.952576,108.328590
\tC278.478302,116.489166 285.538055,124.214531 292.701782,131.842255
\tC293.871216,133.087463 295.467590,134.720932 296.921204,134.777649
\tC304.479523,135.072586 312.055450,134.915039 320.498718,134.915039
\tC307.754639,121.072357 295.667267,107.942970 283.519470,94.747955
\tC293.664001,83.513008 303.348328,72.787735 313.665192,61.735542
\tC314.424744,60.801708 315.184326,59.867874 316.527985,58.215923
\tC308.133301,58.215923 300.693909,58.143124 293.259125,58.294724
\tC292.148682,58.317364 291.059753,59.393696 289.378082,60.304970
\tC283.232635,67.021019 277.087158,73.737068 270.657501,80.763710
\tC264.929291,74.496147 259.629211,68.697052 254.085968,62.265118
\tC253.408569,61.763126 252.731171,61.261139 251.767273,60.510895
\tC251.571289,60.345383 251.415817,60.147968 251.149231,59.087875
\tC242.825119,58.681561 234.500992,58.275246 226.176865,57.868931
\tC225.866302,58.545437 225.555725,59.221947 225.245148,59.898453
\tC226.456757,60.677971 227.668350,61.457489 229.178864,62.823101
M675.210815,114.215332
\tC675.269653,102.961105 675.814636,91.677635 675.140137,80.467537
\tC674.882263,76.180428 671.834900,72.061150 669.836853,67.210747
\tC665.769531,62.894810 660.974121,59.903038 654.213501,58.802467
\tC640.142944,58.885750 626.072388,58.969036 611.238770,59.051888
\tC597.928406,62.591328 590.964111,71.249161 590.970825,84.498077
\tC590.970825,84.498077 591.070557,84.976761 590.877380,85.899529
\tC590.941772,93.606613 591.006165,101.313690 590.970520,109.497993
\tC590.970520,109.497993 591.138489,109.955742 591.038940,110.794327
\tC591.999695,124.826851 601.368103,134.315094 615.435425,134.779755
\tC627.071777,135.164108 638.737671,135.171432 650.375916,134.837631
\tC663.291504,134.467163 672.551392,126.701462 675.210815,114.215332
M211.487061,88.500237
\tC211.487061,78.565964 211.487061,68.631683 211.487061,58.731461
\tC205.036789,58.731461 199.167007,58.731461 193.478027,58.731461
\tC193.478027,84.340019 193.478027,109.538940 193.478027,134.628876
\tC199.620880,134.628876 205.372116,134.628876 211.486893,134.628876
\tC211.486893,119.400894 211.486893,104.450569 211.487061,88.500237
z" fill="#1E1F26" opacity="1.000000" stroke="none"/>
              <path d="M574.859924,126.960709
\tC573.150452,129.320099 571.440918,131.679489 569.236450,133.830872
\tC568.154663,133.935654 567.567932,134.248413 566.981140,134.561172
\tC555.894287,134.683792 544.807739,134.867584 533.720581,134.912186
\tC522.118225,134.958862 510.515320,134.871765 498.369934,134.394928
\tC496.551239,133.965286 495.275269,133.983841 493.999268,134.002396
\tC483.631195,131.436142 476.405518,125.653244 474.460175,114.089844
\tC474.448608,111.987244 474.212463,110.489876 473.976318,108.992500
\tC473.906525,92.294678 473.836731,75.596848 474.072357,58.374092
\tC474.452606,57.749744 474.611023,57.593178 474.588562,57.560318
\tC474.455811,57.366192 474.281006,57.200809 474.120361,57.025749
\tC474.577179,45.748501 481.212982,37.789864 493.744690,34.249851
\tC494.474945,34.306763 494.734131,34.168144 494.993286,34.029530
\tC499.121552,33.855137 503.249542,33.537479 507.378082,33.530354
\tC528.928955,33.493168 550.479980,33.534874 572.590454,33.951813
\tC573.464722,34.578293 573.779480,34.802097 574.094238,35.025906
\tC574.161865,39.712044 574.229492,44.398182 573.907959,49.528854
\tC573.338135,49.976597 573.157471,49.979801 572.509521,49.987907
\tC549.384399,49.994724 526.726196,49.958935 504.068817,50.075035
\tC502.380524,50.083687 500.697784,51.181019 499.012482,51.772255
\tC495.199463,52.356594 492.664429,54.265438 491.906311,58.754074
\tC491.532501,59.281559 491.385406,59.453911 491.410400,59.484177
\tC491.561554,59.667229 491.752075,59.817795 491.929413,59.979218
\tC491.993927,75.687553 492.058441,91.395897 491.771759,107.743011
\tC491.626160,109.259705 491.831757,110.137634 492.037354,111.015564
\tC494.151947,112.784134 496.266602,114.552696 498.750916,116.730965
\tC499.430267,117.038300 499.739960,116.935913 500.049622,116.833534
\tC518.049500,116.740509 536.049438,116.647469 554.611633,116.883652
\tC555.478699,117.054619 555.783386,116.896378 556.088074,116.738129
\tC556.490173,109.188492 556.892273,101.638870 557.328674,93.445442
\tC541.102478,93.445442 525.533386,93.445442 509.422302,93.049278
\tC508.603241,92.440300 508.326141,92.227493 508.049042,92.014694
\tC507.990997,86.978409 507.932922,81.942131 508.201813,76.390945
\tC508.840057,75.688240 508.992371,75.412590 508.985718,75.049072
\tC527.355835,74.991348 545.725952,74.933617 564.614990,75.144241
\tC565.407471,75.329712 565.680908,75.246826 565.954407,75.163940
\tC570.900696,75.096611 573.714111,77.691414 574.709045,82.786346
\tC574.668823,83.493629 574.813232,83.740265 574.957642,83.986893
\tC575.035156,97.693268 575.112610,111.399643 574.899902,125.632332
\tC574.536987,126.255104 574.383057,126.406883 574.404907,126.438904
\tC574.533936,126.628265 574.703796,126.789810 574.859924,126.960709
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M591.139282,84.039032
\tC590.964111,71.249161 597.928406,62.591328 611.950684,59.297218
\tC626.186584,59.648918 639.710571,59.765598 653.234863,59.826801
\tC653.822388,59.829456 654.412292,59.322380 655.001099,59.052746
\tC660.974121,59.903038 665.769531,62.894810 669.918945,67.929474
\tC671.034119,71.592041 672.783997,74.491257 672.970520,77.487801
\tC673.618286,87.892967 673.685059,98.333321 674.067322,108.756813
\tC674.143860,110.844994 674.635864,112.917923 674.936340,114.997879
\tC672.551392,126.701462 663.291504,134.467163 650.375916,134.837631
\tC638.737671,135.171432 627.071777,135.164108 615.435425,134.779755
\tC601.368103,134.315094 591.999695,124.826851 591.247314,110.284744
\tC591.327271,109.523697 591.198914,109.272240 591.070557,109.020782
\tC591.006165,101.313690 590.941772,93.606613 591.144409,85.372330
\tC591.480042,84.745392 591.628235,84.590248 591.603821,84.555145
\tC591.472717,84.366638 591.298584,84.207985 591.139282,84.039032
M615.304871,76.988640
\tC611.057068,77.393196 609.864258,80.539139 608.666748,84.170425
\tC608.592896,84.276588 608.436218,84.451042 608.458435,84.477936
\tC608.615234,84.668114 608.808716,84.828003 609.189209,85.916855
\tC609.123047,93.612106 609.056885,101.307350 608.640686,109.188080
\tC608.781128,109.464165 608.921570,109.740242 609.473816,110.582031
\tC611.345154,112.545021 613.216431,114.508018 615.319275,117.119919
\tC616.232056,117.026543 617.144836,116.933167 618.953125,116.563690
\tC628.703186,116.547867 638.453735,116.462616 648.203064,116.541298
\tC654.421875,116.591484 655.997253,115.446312 658.200989,108.710014
\tC658.415527,100.879333 658.651184,93.048996 658.782227,85.216927
\tC658.788818,84.824486 657.889465,84.416870 657.149475,83.285637
\tC656.833191,78.837265 654.012268,77.141281 649.756836,76.015625
\tC649.225098,75.692459 648.695312,75.091125 648.161316,75.087372
\tC638.284973,75.017982 628.407532,74.976967 618.532104,75.083382
\tC617.686279,75.092499 616.852173,76.181099 615.304871,76.988640
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M254.329132,62.897957
\tC259.629211,68.697052 264.929291,74.496147 270.657501,80.763710
\tC277.087158,73.737068 283.232635,67.021019 290.140442,60.128738
\tC296.622375,59.944389 302.348877,59.777023 308.057190,60.026432
\tC309.742096,60.100048 311.375610,61.351017 313.032654,62.062450
\tC303.348328,72.787735 293.664001,83.513008 283.519470,94.747955
\tC295.667267,107.942970 307.754639,121.072357 320.498718,134.915039
\tC312.055450,134.915039 304.479523,135.072586 296.921204,134.777649
\tC295.467590,134.720932 293.871216,133.087463 292.701782,131.842255
\tC285.538055,124.214531 278.478302,116.489166 270.952576,108.328590
\tC264.020874,115.844025 257.093018,122.943344 250.688004,130.486572
\tC247.810944,133.874908 244.860580,135.255310 240.489517,135.013168
\tC234.372711,134.674316 228.223099,134.927673 221.031174,134.927673
\tC233.673370,121.110855 245.722336,107.942390 258.152252,94.357582
\tC248.433304,83.779518 238.806076,73.301308 229.106812,62.106476
\tC230.484009,60.902733 231.922867,60.035053 233.384338,59.995121
\tC239.352753,59.832031 245.328064,59.921936 251.300842,59.918655
\tC251.415817,60.147968 251.571289,60.345383 251.954468,60.994350
\tC252.870819,61.951191 253.599976,62.424572 254.329132,62.897957
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M61.788307,51.713089
\tC61.473118,53.424759 60.887753,55.135757 60.883461,56.848206
\tC60.823452,80.814110 60.842754,104.780212 60.842754,128.746262
\tC60.842754,130.558243 60.842751,132.370209 60.842751,134.557434
\tC54.680206,134.557434 48.787277,134.557434 42.565594,134.557434
\tC42.441898,133.598389 42.176697,132.497269 42.175819,131.395966
\tC42.152985,102.769859 42.170444,74.143730 42.145298,45.517628
\tC42.140930,40.548908 43.232708,36.258106 48.771374,34.266232
\tC49.478149,34.298695 49.738731,34.150711 49.999313,34.002724
\tC51.139236,33.835243 52.279022,33.522659 53.419102,33.521572
\tC79.561974,33.496674 105.704880,33.504375 131.847778,33.516331
\tC132.493469,33.516624 133.139099,33.634151 134.453125,33.762066
\tC134.453125,38.885616 134.453125,43.974129 134.014267,49.516068
\tC133.374863,49.972656 133.174332,49.975822 132.506805,49.984398
\tC110.542900,49.992039 89.045731,49.950706 67.549469,50.071091
\tC65.626076,50.081863 63.708557,51.140896 61.788307,51.713089
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M400.268127,123.177963
\tC396.936340,128.975494 393.809570,134.872787 385.817108,135.268402
\tC379.337158,135.589142 374.550507,133.218063 371.356750,127.563438
\tC360.332611,108.044838 349.288574,88.537491 338.257111,69.023041
\tC336.051056,65.120560 333.844452,61.218109 331.677094,57.294125
\tC325.702057,46.476517 332.245453,35.022652 344.586243,34.727386
\tC347.744232,34.651829 350.906219,34.742779 354.540710,35.118118
\tC355.033630,35.653694 355.052246,35.828381 355.043823,36.448345
\tC354.563995,41.667503 355.733765,45.822845 358.254059,50.079815
\tC366.358734,63.769428 373.874481,77.806091 381.811096,91.597427
\tC387.750336,101.917923 393.988892,112.066162 400.144714,122.511429
\tC400.195312,122.731758 400.268127,123.177963 400.268127,123.177963
z" fill="#75EC35" opacity="1.000000" stroke="none"/>
              <path d="M400.568726,123.331779
\tC400.268127,123.177963 400.195312,122.731758 400.436035,122.298279
\tC413.044861,100.045326 425.579315,78.317619 437.695068,56.358929
\tC442.222626,48.153164 438.708252,39.700317 429.828125,35.667648
\tC419.570740,35.224411 409.622437,35.046257 399.673370,34.941620
\tC385.069183,34.788013 370.464417,34.686970 355.859894,34.563526
\tC359.018799,31.733545 362.177734,28.903574 366.002502,26.371353
\tC367.317261,26.775620 367.966034,26.974764 368.615021,26.975317
\tC395.826324,26.998547 423.037659,27.015882 450.248871,26.973480
\tC451.490814,26.971546 452.731934,26.411503 453.973419,26.111404
\tC456.018829,27.217539 458.064240,28.323669 460.455841,29.654320
\tC460.802032,29.878839 461.096954,30.170609 461.096954,30.170609
\tC461.096954,30.170609 461.507782,30.114552 461.626953,30.422878
\tC462.421265,31.574821 463.096375,32.418442 463.756500,33.282364
\tC463.741516,33.302670 463.715210,33.345753 463.715210,33.345753
\tC465.824310,38.992290 465.164429,44.142155 462.096222,49.484169
\tC449.124542,72.068848 436.523743,94.866310 423.601349,117.479683
\tC418.221436,126.894173 410.502258,128.745285 400.568726,123.331779
z" fill="#029E5B" opacity="1.000000" stroke="none"/>
              <path d="
M147.164200,27.045511
\tC152.976013,26.772734 158.787811,26.499960 164.628387,26.724548
\tC164.791672,27.486490 164.926163,27.751068 165.060654,28.015648
\tC165.150970,49.288452 165.245453,70.561241 165.328629,91.834076
\tC165.348785,96.988472 165.285889,102.143539 165.343216,107.297379
\tC165.416824,113.914940 167.681839,116.208626 174.334900,116.459335
\tC176.451950,116.539116 178.574539,116.471809 180.845093,116.471809
\tC180.845093,122.793213 180.845093,128.565811 180.845093,134.310638
\tC162.455948,137.805511 148.820175,128.265213 147.247101,110.281723
\tC147.327332,109.523674 147.198914,109.272125 147.070496,109.020576
\tC147.005722,82.314995 146.940948,55.609409 147.145721,28.385433
\tC147.490234,27.769375 147.648376,27.615677 147.626526,27.583242
\tC147.495361,27.388536 147.322861,27.221693 147.164200,27.045511
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M69.979485,75.073029
\tC88.016602,75.008278 106.053719,74.943527 124.624283,75.203064
\tC125.360138,75.822479 125.640007,75.979767 125.997353,75.999214
\tC126.062088,81.027672 126.126816,86.056137 125.835449,91.644333
\tC125.298645,92.523270 125.117935,92.842461 124.937225,93.161652
\tC106.940414,93.254288 88.943604,93.346931 70.399353,93.115860
\tC69.555901,92.904213 69.259888,93.016273 68.963867,93.128342
\tC68.708923,87.207451 68.453979,81.286568 68.709419,75.400909
\tC69.473038,75.315109 69.726257,75.194069 69.979485,75.073029
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M211.196152,28.077400
\tC211.308914,32.285423 211.513306,36.494915 211.446030,40.700062
\tC211.434555,41.417404 210.260361,42.116138 209.141968,42.350388
\tC203.562027,41.515705 198.463455,41.154095 193.364883,40.792488
\tC193.364883,36.054920 193.364883,31.317354 193.364883,26.202316
\tC199.196991,26.202316 204.927856,26.202316 210.705627,26.700268
\tC210.900406,27.491280 211.048279,27.784340 211.196152,28.077400
z" fill="#fff" opacity="1.000000" stroke="none"/>
              <path d="M355.043823,36.448345
\tC379.771637,35.997852 404.472412,35.992638 429.655029,35.976509
\tC438.708252,39.700317 442.222626,48.153164 437.695068,56.358929
\tC425.579315,78.317619 413.044861,100.045326 400.385468,122.077957
\tC393.988892,112.066162 387.750336,101.917923 381.811096,91.597427
\tC373.874481,77.806091 366.358734,63.769428 358.254059,50.079815
\tC355.733765,45.822845 354.563995,41.667503 355.043823,36.448345
z" fill="#41D813" opacity="1.000000" stroke="none"/>
              <path d="M203.924377,132.998413
\tC193.715179,132.852844 195.053955,134.287506 195.020981,124.511299
\tC194.954788,104.883698 195.111038,85.254608 194.913544,65.628769
\tC194.871582,61.457668 195.671112,59.731754 200.328125,59.887661
\tC209.984848,60.210941 209.993912,59.940876 209.993896,69.762444
\tC209.993896,88.891258 209.876053,108.021347 210.083008,127.147926
\tC210.130219,131.512360 209.226837,133.882538 203.924377,132.998413
z" fill="#fff" opacity="1.000000" stroke="none"/>
          </svg>
      </ng-template>
  `,
  styles: [`

  `]
})
export class IconComponent {
  @Input() iconName!: IconType;
  @Input('color') color: string = '';

  constructor() {
  }
}
