<template>
  <svg class="full-height full-width" ref="svg"></svg>
</template>

<script>
  import {select, event} from 'd3-selection'
  import {treemap as treemapD3, hierarchy, treemapBinary} from 'd3-hierarchy'
  import {format as formatD3} from 'd3-format'
  import {checkIntersection} from 'line-intersect'
  import {scaleLinear} from 'd3-scale'
  import {zoom} from 'd3-zoom'

  export default {
    name: "TreeMapSchema",
    data() {
      return {
        seq: 0,
        data: {
          extent: 15000,
          root: {
            name: 'root',
            length: 2000,
            children: [
              {
                name: 'A',
                angle: 0,
                length: 1000,
                location: 1,
                children: [
                  {
                    name: 'E',
                    angle: -90,
                    length: 1000,
                    location: 0.3,
                  },
                  {
                    name: 'F',
                    angle: 90,
                    length: 900,
                    location: 0.8,
                  }
                ]
              },
              {
                name: 'B',
                angle: -90,
                length: 1000,
                location: 0.5,
                children: [
                  {
                    name: 'C',
                    angle: -90,
                    length: 500,
                    location: 0.3,
                  },
                  {
                    name: 'D',
                    angle: 90,
                    length: 600,
                    location: 0.8,
                  }
                ]
              }
            ]
          }
        },
        data_exp: {"root": {"name": 9791335, "angle": 0, "length": 978, "children": [{"name": 9239554, "angle": 0, "length": 578, "children": [{"name": 8023438, "angle": -90, "length": 182, "children": [], "location": 0.699993924925651045}, {"name": 9697787, "angle": 0, "length": 1118, "children": [{"name": 8920487, "angle": 0, "length": 164, "children": [], "location": 1}, {"name": 9697783, "angle": 0, "length": 896, "children": [{"name": 8023553, "angle": 90, "length": 388, "children": [], "location": 0.699998650925978572}, {"name": 8023630, "angle": 0, "length": 1488, "children": [{"name": 8023811, "angle": 0, "length": 908, "children": [{"name": 8023665, "angle": 0, "length": 1017, "children": [{"name": 8023644, "angle": 0, "length": 836, "children": [{"name": 8023647, "angle": 0, "length": 157, "children": [], "location": 1}, {"name": 8023761, "angle": 0, "length": 413, "children": [{"name": 8023829, "angle": 0, "length": 592, "children": [{"name": 8023760, "angle": 0, "length": 289, "children": [{"name": 8023759, "angle": 0, "length": 489, "children": [{"name": 8023831, "angle": 0, "length": 362, "children": [], "location": 1}, {"name": 8023837, "angle": 0, "length": 603, "children": [{"name": 8023942, "angle": 0, "length": 396, "children": [{"name": 8023813, "angle": 0, "length": 424, "children": [{"name": 8023892, "angle": 0, "length": 122, "children": [], "location": 1}, {"name": 8097824, "angle": 0, "length": 381, "children": [{"name": 8023772, "angle": 0, "length": 812, "children": [], "location": 1}, {"name": 8023824, "angle": 0, "length": 371, "children": [{"name": 8023757, "angle": 0, "length": 305, "children": [{"name": 8023683, "angle": 0, "length": 608, "children": [{"name": 8023883, "angle": 0, "length": 801, "children": [{"name": 8023825, "angle": 90, "length": 67, "children": [], "location": 0.699999632525176496}, {"name": 8023951, "angle": 0, "length": 745, "children": [], "location": 0.99999963252517643}], "location": 1}, {"name": 8023884, "angle": 0, "length": 226, "children": [], "location": 1}], "location": 1}, {"name": 8023882, "angle": 0, "length": 40, "children": [{"name": 8023595, "angle": 0, "length": 403, "children": [{"name": 8023766, "angle": 0, "length": 69, "children": [], "location": 1}, {"name": 8023767, "angle": 0, "length": 562, "children": [{"name": 8023690, "angle": 0, "length": 535, "children": [{"name": 8023626, "angle": -90, "length": 882, "children": [], "location": 0.699998748145528982}, {"name": 8937423, "angle": 0, "length": 11, "children": [{"name": 8023622, "angle": 90, "length": 843, "children": [{"name": 8023769, "angle": -90, "length": 89, "children": [], "location": 0.699999999999999956}, {"name": 8023773, "angle": 0, "length": 798, "children": [], "location": 1}], "location": 0.69987432370977487}, {"name": 8023901, "angle": 0, "length": 213, "children": [{"name": 8023657, "angle": 0, "length": 621, "children": [{"name": 8023768, "angle": 0, "length": 165, "children": [], "location": 0.999997728149771947}, {"name": 9051329, "angle": 0, "length": 646, "children": [{"name": 8023804, "angle": 0, "length": 351, "children": [], "location": 1}, {"name": 9808970, "angle": 0, "length": 814, "children": [{"name": 8023776, "angle": 0, "length": 599, "children": [], "location": 1}, {"name": 9808967, "angle": 0, "length": 1519, "children": [], "location": 0.999997464237839973}], "location": 1}], "location": 1}], "location": 0.999901386116062385}, {"name": 8023700, "angle": -90, "length": 282, "children": [], "location": 0.399884302317000007}], "location": 1}], "location": 0.999999165428563819}], "location": 0.999996759075520214}, {"name": 8023900, "angle": 0, "length": 135, "children": [{"name": 8023606, "angle": 0, "length": 270, "children": [], "location": 1}, {"name": 9053069, "angle": 0, "length": 675, "children": [{"name": 9053057, "angle": 90, "length": 52, "children": [], "location": 0.699994836304720591}, {"name": 9053066, "angle": 0, "length": 722, "children": [], "location": 1}], "location": 0.999928604708958946}], "location": 0.99998703631375796}], "location": 0.999998810805488469}], "location": 1}, {"name": 8023770, "angle": 0, "length": 629, "children": [{"name": 8023662, "angle": -90, "length": 181, "children": [], "location": 0.699999999999999956}, {"name": 9051322, "angle": 0, "length": 757, "children": [], "location": 0.9999923129848729}], "location": 1}], "location": 1}], "location": 0.999998524657627841}, {"name": 8023810, "angle": 90, "length": 29, "children": [], "location": 0.400000000000000022}], "location": 0.999998560553103211}], "location": 1}], "location": 1}, {"name": 9100500, "angle": 90, "length": 912, "children": [{"name": 8023693, "angle": 0, "length": 592, "children": [{"name": 8023876, "angle": -90, "length": 430, "children": [{"name": 8023832, "angle": 0, "length": 86, "children": [], "location": 1}, {"name": 8023877, "angle": 0, "length": 600, "children": [{"name": 8023947, "angle": 0, "length": 165, "children": [], "location": 1}, {"name": 9054239, "angle": 0, "length": 1380, "children": [], "location": 1}], "location": 1}], "location": 0.699991744480990663}, {"name": 9051447, "angle": 90, "length": 686, "children": [], "location": 0.39999174448099073}], "location": 1}, {"name": 8023878, "angle": -90, "length": 23, "children": [], "location": 0.400000000000000022}], "location": 0.400000000000000022}], "location": 1}, {"name": 8023946, "angle": 0, "length": 92, "children": [], "location": 1}], "location": 0.999998879415073372}], "location": 1}, {"name": 8023830, "angle": 0, "length": 344, "children": [{"name": 8023861, "angle": -90, "length": 125, "children": [], "location": 0.699999999999999956}, {"name": 8989200, "angle": 0, "length": 547, "children": [{"name": 8023828, "angle": 0, "length": 216, "children": [{"name": 8023628, "angle": 0, "length": 373, "children": [], "location": 1}, {"name": 8023692, "angle": 0, "length": 436, "children": [{"name": 8023880, "angle": 0, "length": 133, "children": [], "location": 1}, {"name": 8937503, "angle": 90, "length": 818, "children": [{"name": 8023840, "angle": 0, "length": 133, "children": [{"name": 8023638, "angle": 0, "length": 1133, "children": [{"name": 8023363, "angle": 0, "length": 38, "children": [], "location": 1}, {"name": 9543547, "angle": 0, "length": 32, "children": [{"name": 8937549, "angle": -90, "length": 975, "children": [], "location": 0.699848513729742105}, {"name": 9543544, "angle": 0, "length": 916, "children": [], "location": 1}], "location": 0.999995792901062441}], "location": 1}, {"name": 8937500, "angle": 0, "length": 592, "children": [], "location": 1}], "location": 1}, {"name": 8023841, "angle": 0, "length": 153, "children": [], "location": 1}], "location": 0.400000000000000022}], "location": 1}], "location": 1}, {"name": 8023899, "angle": -90, "length": 597, "children": [], "location": 0.399984504093712667}], "location": 0.999985916957535137}], "location": 1}], "location": 1}, {"name": 8023853, "angle": 0, "length": 333, "children": [], "location": 1}], "location": 0.999994437380946843}, {"name": 8023893, "angle": 0, "length": 301, "children": [], "location": 1}], "location": 1}], "location": 1}, {"name": 8023890, "angle": 0, "length": 93, "children": [], "location": 1}], "location": 1}, {"name": 8023843, "angle": 0, "length": 377, "children": [{"name": 8023809, "angle": 0, "length": 764, "children": [{"name": 8023842, "angle": 0, "length": 68, "children": [{"name": 8023609, "angle": 0, "length": 784, "children": [], "location": 1}, {"name": 8888464, "angle": -90, "length": 64, "children": [], "location": 0.400000000000000022}], "location": 1}, {"name": 8888467, "angle": 0, "length": 725, "children": [{"name": 8888472, "angle": 0, "length": 125, "children": [], "location": 1}, {"name": 8888485, "angle": 0, "length": 60, "children": [{"name": 8023885, "angle": 0, "length": 643, "children": [{"name": 8023863, "angle": 90, "length": 693, "children": [], "location": 0.699999999999999956}, {"name": 8023881, "angle": 0, "length": 297, "children": [], "location": 1}], "location": 1}, {"name": 8888498, "angle": 0, "length": 432, "children": [{"name": 8023640, "angle": 0, "length": 687, "children": [{"name": 8023687, "angle": 0, "length": 763, "children": [{"name": 8023844, "angle": 90, "length": 730, "children": [{"name": 8023871, "angle": 0, "length": 299, "children": [], "location": 1}, {"name": 8023872, "angle": 0, "length": 1207, "children": [], "location": 1}], "location": 0.699999999999999956}, {"name": 8023898, "angle": 0, "length": 182, "children": [{"name": 8023888, "angle": 90, "length": 1022, "children": [], "location": 0.699999999999999956}, {"name": 8888520, "angle": -90, "length": 119, "children": [], "location": 0.400000000000000022}], "location": 1}], "location": 1}, {"name": 8023894, "angle": -90, "length": 62, "children": [], "location": 0.400000000000000022}], "location": 1}, {"name": 8023678, "angle": 0, "length": 123, "children": [{"name": 8023371, "angle": 0, "length": 534, "children": [], "location": 1}, {"name": 8023661, "angle": 0, "length": 1062, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023838, "angle": 0, "length": 55, "children": [], "location": 1}], "location": 1}], "location": 1}, {"name": 8023839, "angle": 0, "length": 205, "children": [{"name": 8023854, "angle": -90, "length": 61, "children": [], "location": 0.699999999999999956}, {"name": 8888458, "angle": 0, "length": 517, "children": [{"name": 9692576, "angle": -90, "length": 1052, "children": [], "location": 0.699990931042090869}, {"name": 9697673, "angle": 90, "length": 320, "children": [], "location": 0.399990931042090825}], "location": 0.999881864405571474}], "location": 1}], "location": 0.999998650925978505}], "location": 1}], "location": 1}], "location": 0.999991930518248306}, {"name": 9239598, "angle": 90, "length": 427, "children": [{"name": 8023436, "angle": 0, "length": 189, "children": [], "location": 1}, {"name": 9922230, "angle": 0, "length": 568, "children": [{"name": 9905954, "angle": 0, "length": 429, "children": [], "location": 1}, {"name": 9922214, "angle": 0, "length": 248, "children": [{"name": 9697767, "angle": 0, "length": 258, "children": [{"name": 9749438, "angle": 0, "length": 18, "children": [{"name": 8023545, "angle": 90, "length": 311, "children": [{"name": 9749428, "angle": 0, "length": 17, "children": [{"name": 8023419, "angle": 90, "length": 92, "children": [], "location": 0.699916733874748731}, {"name": 9749425, "angle": 0, "length": 829, "children": [], "location": 1}], "location": 0.999990548986501082}], "location": 0.699999999999999956}, {"name": 9749435, "angle": 0, "length": 926, "children": [{"name": 8023734, "angle": 0, "length": 672, "children": [{"name": 8023733, "angle": 0, "length": 153, "children": [{"name": 8023482, "angle": 90, "length": 374, "children": [{"name": 8872662, "angle": 0, "length": 493, "children": [{"name": 8023531, "angle": 0, "length": 626, "children": [], "location": 1}, {"name": 8872665, "angle": 0, "length": 275, "children": [{"name": 8023480, "angle": 0, "length": 682, "children": [{"name": 8023412, "angle": -90, "length": 555, "children": [], "location": 0.699993731109107786}, {"name": 9543366, "angle": 0, "length": 523, "children": [{"name": 9741223, "angle": -90, "length": 1955, "children": [{"name": 8023799, "angle": 0, "length": 892, "children": [], "location": 1}, {"name": 9749414, "angle": 0, "length": 11, "children": [{"name": 8023600, "angle": 90, "length": 202, "children": [], "location": 0.699660963085607213}, {"name": 9749411, "angle": 0, "length": 743, "children": [{"name": 8023617, "angle": 0, "length": 73, "children": [{"name": 8023602, "angle": 0, "length": 1516, "children": [{"name": 8023677, "angle": 0, "length": 137, "children": [], "location": 1}, {"name": 8023814, "angle": 0, "length": 725, "children": [{"name": 8023815, "angle": -90, "length": 1137, "children": [], "location": 0.699945283567620091}, {"name": 8023821, "angle": 0, "length": 415, "children": [{"name": 8023822, "angle": 0, "length": 1225, "children": [{"name": 8023752, "angle": 0, "length": 58, "children": [], "location": 1}, {"name": 8023819, "angle": 0, "length": 44, "children": [{"name": 8023818, "angle": 0, "length": 1179, "children": [{"name": 8023650, "angle": 0, "length": 730, "children": [], "location": 0.999999620222662533}, {"name": 8023941, "angle": 90, "length": 554, "children": [{"name": 8888833, "angle": 0, "length": 765, "children": [{"name": 8023699, "angle": 0, "length": 1090, "children": [], "location": 1}, {"name": 8023827, "angle": 90, "length": 62, "children": [], "location": 0.400000000000000022}], "location": 1}, {"name": 9050231, "angle": 90, "length": 42, "children": [{"name": 8023820, "angle": 0, "length": 531, "children": [], "location": 1}, {"name": 8023826, "angle": 0, "length": 1491, "children": [{"name": 8023763, "angle": 0, "length": 614, "children": [{"name": 8023849, "angle": 0, "length": 323, "children": [{"name": 8023850, "angle": 0, "length": 1780, "children": [{"name": 8023852, "angle": 0, "length": 615, "children": [{"name": 8023887, "angle": 90, "length": 461, "children": [], "location": 0.699999999999999956}, {"name": 8023896, "angle": 0, "length": 167, "children": [{"name": 8023637, "angle": 0, "length": 1024, "children": [], "location": 1}, {"name": 8023663, "angle": -90, "length": 1102, "children": [{"name": 8023646, "angle": 0, "length": 769, "children": [{"name": 8023685, "angle": 0, "length": 726, "children": [{"name": 8023648, "angle": -90, "length": 618, "children": [], "location": 0.699999999999999956}, {"name": 8023851, "angle": 90, "length": 892, "children": [{"name": 8023856, "angle": 0, "length": 83, "children": [{"name": 8023674, "angle": 0, "length": 986, "children": [], "location": 1}, {"name": 8023855, "angle": 0, "length": 1128, "children": [{"name": 8023631, "angle": 0, "length": 1768, "children": [], "location": 1}, {"name": 8023857, "angle": 90, "length": 400, "children": [], "location": 0.400000000000000022}], "location": 1}], "location": 1}, {"name": 8023860, "angle": 90, "length": 167, "children": [], "location": 0.400000000000000022}], "location": 0.400000000000000022}], "location": 1}, {"name": 8023869, "angle": 0, "length": 741, "children": [], "location": 1}], "location": 1}, {"name": 8023859, "angle": 0, "length": 65, "children": [], "location": 1}], "location": 0.399970953261480466}], "location": 1}], "location": 1}, {"name": 8023858, "angle": -90, "length": 147, "children": [], "location": 0.400000000000000022}], "location": 1}, {"name": 8023868, "angle": 90, "length": 36, "children": [], "location": 0.400000000000000022}], "location": 1}, {"name": 8023867, "angle": -90, "length": 956, "children": [{"name": 8023369, "angle": 0, "length": 485, "children": [{"name": 8023593, "angle": -90, "length": 675, "children": [], "location": 0.6999960737310984}, {"name": 8023639, "angle": 0, "length": 226, "children": [{"name": 8023623, "angle": 90, "length": 311, "children": [], "location": 0.699999999999999956}, {"name": 8023823, "angle": 0, "length": 932, "children": [], "location": 1}], "location": 0.999996073731098334}], "location": 1}, {"name": 8989176, "angle": 0, "length": 745, "children": [{"name": 8023672, "angle": 0, "length": 31, "children": [], "location": 1}, {"name": 8023846, "angle": 0, "length": 356, "children": [{"name": 8023904, "angle": 0, "length": 997, "children": [], "location": 1}, {"name": 8023950, "angle": -90, "length": 1230, "children": [], "location": 0.400000000000000022}], "location": 1}], "location": 1}], "location": 0.400000000000000022}], "location": 1}, {"name": 8023875, "angle": 0, "length": 746, "children": [], "location": 1}], "location": 1}], "location": 0.400000000000000022}], "location": 0.400000000000000022}], "location": 1}, {"name": 8023847, "angle": 0, "length": 300, "children": [{"name": 8023886, "angle": 0, "length": 2384, "children": [], "location": 1}, {"name": 8556282, "angle": 0, "length": 1000, "children": [{"name": 8023676, "angle": 0, "length": 188, "children": [], "location": 1}, {"name": 8556279, "angle": 0, "length": 613, "children": [{"name": 8023696, "angle": 0, "length": 1349, "children": [{"name": 8023698, "angle": 0, "length": 1224, "children": [{"name": 8023608, "angle": 0, "length": 75, "children": [], "location": 1}, {"name": 8023643, "angle": 0, "length": 944, "children": [{"name": 8023594, "angle": 0, "length": 685, "children": [], "location": 1}, {"name": 8989181, "angle": 0, "length": 623, "children": [{"name": 8023691, "angle": 0, "length": 888, "children": [{"name": 8023909, "angle": 0, "length": 1520, "children": [{"name": 8888568, "angle": 0, "length": 559, "children": [{"name": 8023384, "angle": 0, "length": 1044, "children": [], "location": 1}, {"name": 8023786, "angle": 0, "length": 513, "children": [], "location": 1}], "location": 1}, {"name": 8937560, "angle": 0, "length": 1602, "children": [{"name": 8023654, "angle": -90, "length": 314, "children": [], "location": 0.699999999999999956}, {"name": 8023897, "angle": 0, "length": 1180, "children": [], "location": 1}], "location": 1}], "location": 0.999997227811801448}, {"name": 8023949, "angle": 90, "length": 489, "children": [], "location": 0.39999999999631386}], "location": 1}, {"name": 8023787, "angle": 0, "length": 1225, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023754, "angle": 0, "length": 66, "children": [], "location": 1}], "location": 1}, {"name": 8556274, "angle": 0, "length": 471, "children": [{"name": 8023620, "angle": -90, "length": 181, "children": [], "location": 0.699999999999999956}, {"name": 8023788, "angle": 0, "length": 204, "children": [{"name": 8023636, "angle": 0, "length": 657, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023918, "angle": 0, "length": 151, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023817, "angle": 90, "length": 238, "children": [{"name": 8023613, "angle": 0, "length": 675, "children": [], "location": 1}], "location": 0.399884202089640817}], "location": 1}, {"name": 8023793, "angle": 0, "length": 53, "children": [], "location": 1}], "location": 1}], "location": 0.999997895716826735}], "location": 0.699999999999999956}, {"name": 9741301, "angle": 0, "length": 448, "children": [], "location": 0.999996514284644644}], "location": 0.99999373110910772}], "location": 1}, {"name": 8023483, "angle": 0, "length": 460, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 0.699999999999999956}, {"name": 8872673, "angle": -90, "length": 642, "children": [{"name": 8023485, "angle": 0, "length": 855, "children": [], "location": 1}, {"name": 8872670, "angle": -90, "length": 180, "children": [], "location": 0.400000000000000022}], "location": 0.400000000000000022}], "location": 1}, {"name": 10066166, "angle": 90, "length": 653, "children": [{"name": 10066163, "angle": 0, "length": 29, "children": [{"name": 8023355, "angle": 0, "length": 423, "children": [], "location": 1}, {"name": 8023506, "angle": 0, "length": 898, "children": [{"name": 8023739, "angle": 0, "length": 60, "children": [], "location": 1}], "location": 1}], "location": 1}, {"name": 10066171, "angle": 0, "length": 50, "children": [], "location": 1}], "location": 0.400000000000000022}], "location": 0.999995326592153955}, {"name": 8023738, "angle": -90, "length": 124, "children": [], "location": 0.399995326592153977}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 0.399991930518248329}], "location": 0}, "extent": 57188.8444920843031/2}
      }
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      deg2rad(deg) {
        return Math.PI * deg / 180
      },
      unitVec(p1, p2) {
        let dx = p2[0] - p1[0]
        let dy = p2[1] - p1[1]
        let c = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        return [dx / c, dy / c]
      },
      normalVec(unitVec, tRad) {
        let xp = unitVec[0] * Math.cos(tRad) - unitVec[1] * Math.sin(tRad)
        let yp = unitVec[0] * Math.sin(tRad) + unitVec[1] * Math.cos(tRad)
        return [xp, yp]
      },
      getSeq(prefix) {
        let id = `${prefix}${++this.seq}`
        return {
          id: id,
          href: `#${id}`,
          url: `url(#${id})`
        }
      },
      drawChart() {
        let svgRoot = select(this.$refs.svg)
        svgRoot.selectAll('*').remove()
        let bbox = this.$refs.svg.getBoundingClientRect()
        let format = formatD3(",d")
        let padding = {
          top: 40,
          left: 40,
          bottom: 40,
          right: 40
        }


        let width = bbox.width - (padding.left + padding.right)
        let height = bbox.height - (padding.top + padding.bottom)

        svgRoot.call(zoom().on("zoom", function () {
          svg.attr("transform", event.transform)
        }))

        let svg = svgRoot.append('g')
            .attr('transform', `translate(${padding.left},${padding.top})`)

        let scale = scaleLinear().domain([0, this.data.extent])
            .range([0, Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))])

        // let items = []

        let fn = (node, parent, level) => {
          if (level > 20000) {
            console.error('probably loop in data')
            return
          }

          let item = {...node}

          if (!parent) {
            item['line'] = [0, height / 2, scale(node.length), height / 2]
            node.line = item['line']
          } else {
            let pc = parent.line
            let unitVec = this.unitVec(pc.slice(0, 2), pc.slice(2, 4))
            let normVec = this.normalVec(unitVec, this.deg2rad(node.angle))

            let len = scale(node.length)
            // console.log(parent.length, parent.length * node.location)
            let offset = scale(parent.length * node.location)
            // console.log(`offset ${offset}`)
            // console.log(unitVec)
            let startPoint = [pc[0] + unitVec[0] * offset, pc[1] + unitVec[1] * offset]

            let endPoint = [startPoint[0] + normVec[0] * len, startPoint[1] + normVec[1] * len]

            node.line = []
            node.line.push.apply(node.line, startPoint)
            node.line.push.apply(node.line, endPoint)
            item.line = node.line
          }

          // items.push(item)

          (node.children || []).forEach(ch => fn(ch, node, ++level))

        }

        fn(this.data.root, null, 0)

        let tree = hierarchy(this.data.root)

        svg.selectAll('line')
            .data(tree.descendants())
            .join('line')
            .attr('x1', d => d.data.line[0])
            .attr('y1', d => d.data.line[1])
            .attr('x2', d => d.data.line[2])
            .attr('y2', d => d.data.line[3])
            .attr('stroke', 'black')

      }
    }
  }
</script>

<style scoped>

</style>
