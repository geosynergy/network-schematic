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
        data_small: {
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
        data: {"root": {"name": 9755433, "size": "DN800", "angle": 0, "length": 4434, "children": [{"name": 9828278, "size": "DN800", "angle": 0, "length": 2706, "children": [{"name": 9828238, "size": "DN800", "angle": 0, "length": 1504, "children": [{"name": 9828232, "size": "DN800", "angle": 0, "length": 1502, "children": [{"name": 9828225, "size": "DN800", "angle": 0, "length": 4109, "children": [{"name": 9828219, "size": "DN800", "angle": 0, "length": 527, "children": [{"name": 9828174, "size": "DN800", "angle": 0, "length": 1002, "children": [{"name": 9828169, "size": "DN800", "angle": 0, "length": 90, "children": [{"name": 9828199, "size": "DN800", "angle": 0, "length": 1110, "children": [{"name": 9828214, "size": "DN800", "angle": 0, "length": 186, "children": [{"name": 9828263, "size": "DN800", "angle": 0, "length": 1083, "children": [{"name": 9828179, "size": "DN800", "angle": 0, "length": 1335, "children": [{"name": 9828194, "size": "DN800", "angle": 0, "length": 282, "children": [{"name": 9828189, "size": "DN800", "angle": 0, "length": 398, "children": [{"name": 9828184, "size": "DN800", "angle": 0, "length": 1229, "children": [{"name": 9828164, "size": "DN800", "angle": 0, "length": 789, "children": [{"name": 9828209, "size": "DN800", "angle": 0, "length": 480, "children": [{"name": 9828204, "size": "DN800", "angle": 0, "length": 2010, "children": [{"name": 9828298, "size": "DN800", "angle": 0, "length": 368, "children": [{"name": 9791335, "size": "DN800", "angle": 0, "length": 978, "children": [{"name": 9239554, "size": "DN800", "angle": 0, "length": 578, "children": [{"size": "DN160", "angle": -90, "length": 182, "location": 1, "fixed_length": 10}, {"name": 9697787, "size": "DN800", "angle": 0, "length": 1118, "children": [{"size": "DN160", "angle": -90, "length": 164, "location": 1, "fixed_length": 10}, {"name": 9697783, "size": "DN800", "angle": 0, "length": 896, "children": [{"size": "DN160", "angle": -90, "length": 388, "location": 1, "fixed_length": 10}, {"name": 8023630, "size": "DN800", "angle": 0, "length": 1488, "children": [{"size": "DN160", "angle": -90, "length": 205, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 61, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 517, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 1052, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 320, "location": 1, "fixed_length": 10}, {"name": 8023811, "size": "DN800", "angle": 0, "length": 908, "children": [{"name": 8023665, "size": "DN800", "angle": 0, "length": 1017, "children": [{"size": "DN160", "angle": -90, "length": 93, "location": 1, "fixed_length": 10}, {"name": 8023644, "size": "DN800", "angle": 0, "length": 836, "children": [{"size": "DN160", "angle": -90, "length": 157, "location": 1, "fixed_length": 10}, {"name": 8023761, "size": "DN800", "angle": 0, "length": 413, "children": [{"size": "DN160", "angle": -90, "length": 301, "location": 1, "fixed_length": 10}, {"name": 8023829, "size": "DN800", "angle": 0, "length": 592, "children": [{"size": "DN160", "angle": -90, "length": 333, "location": 1, "fixed_length": 10}, {"name": 8023760, "size": "DN800", "angle": 0, "length": 289, "children": [{"name": 8023759, "size": "DN800", "angle": 0, "length": 489, "children": [{"size": "DN160", "angle": -90, "length": 362, "location": 1, "fixed_length": 10}, {"name": 8023837, "size": "DN800", "angle": 0, "length": 603, "children": [{"size": "DN160", "angle": -90, "length": 92, "location": 1, "fixed_length": 10}, {"name": 8023942, "size": "DN800", "angle": 0, "length": 396, "children": [{"name": 8023813, "size": "DN800", "angle": 0, "length": 424, "children": [{"size": "DN160", "angle": -90, "length": 122, "location": 1, "fixed_length": 10}, {"name": 8097824, "size": "DN800", "angle": 0, "length": 381, "children": [{"size": "DN160", "angle": -90, "length": 812, "location": 1, "fixed_length": 10}, {"name": 8023824, "size": "DN800", "angle": 0, "length": 371, "children": [{"size": "DN160", "angle": -90, "length": 29, "location": 1, "fixed_length": 10}, {"name": 8023757, "size": "DN800", "angle": 0, "length": 305, "children": [{"size": "DN160", "angle": -90, "length": 608, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 801, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 67, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 745, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 226, "location": 1, "fixed_length": 10}, {"name": 8023882, "size": "DN800", "angle": 0, "length": 40, "children": [{"size": "DN160", "angle": -90, "length": 629, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 181, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 757, "location": 1, "fixed_length": 10}, {"name": 8023595, "size": "DN800", "angle": 0, "length": 403, "children": [{"size": "DN160", "angle": -90, "length": 69, "location": 1, "fixed_length": 10}, {"name": 8023767, "size": "DN800", "angle": 0, "length": 562, "children": [{"size": "DN160", "angle": -90, "length": 135, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 270, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 675, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 52, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 722, "location": 1, "fixed_length": 10}, {"name": 8023690, "size": "DN800", "angle": 0, "length": 535, "children": [{"size": "DN160", "angle": -90, "length": 882, "location": 1, "fixed_length": 10}, {"name": 8937423, "size": "DN250", "angle": 0, "length": 11, "children": [{"size": "DN160", "angle": -90, "length": 843, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 89, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 798, "location": 1, "fixed_length": 10}, {"name": 8023901, "size": "DN800", "angle": 0, "length": 213, "children": [{"size": "DN160", "angle": -90, "length": 282, "location": 1, "fixed_length": 10}, {"name": 8023657, "size": "DN160", "angle": 0, "length": 621, "children": [{"size": "DN160", "angle": -90, "length": 165, "location": 1, "fixed_length": 10}, {"name": 9051329, "size": "DN160", "angle": 0, "length": 646, "children": [{"size": "DN160", "angle": -90, "length": 351, "location": 1, "fixed_length": 10}, {"name": 9808970, "size": "DN800", "angle": 0, "length": 814, "children": [{"size": "DN160", "angle": -90, "length": 599, "location": 1, "fixed_length": 10}, {"name": 9808967, "size": "DN800", "angle": 0, "length": 1519, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 9100500, "size": "DN250", "angle": -90, "length": 912, "children": [{"size": "DN160", "angle": -90, "length": 23, "location": 1, "fixed_length": 10}, {"name": 8023693, "size": "DN250", "angle": 0, "length": 592, "children": [], "location": 1}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023830, "size": "DN315", "angle": -90, "length": 344, "children": [{"size": "DN160", "angle": -90, "length": 125, "location": 1, "fixed_length": 10}, {"name": 8989200, "size": "DN315", "angle": 0, "length": 547, "children": [{"size": "DN160", "angle": -90, "length": 597, "location": 1, "fixed_length": 10}, {"name": 8023828, "size": "DN250", "angle": 0, "length": 216, "children": [{"size": "DN160", "angle": -90, "length": 373, "location": 1, "fixed_length": 10}, {"name": 8023692, "size": "DN250", "angle": 0, "length": 436, "children": [{"size": "DN160", "angle": -90, "length": 133, "location": 1, "fixed_length": 10}, {"name": 8937503, "size": "DN250", "angle": 0, "length": 818, "children": [{"size": "DN160", "angle": -90, "length": 153, "location": 1, "fixed_length": 10}, {"name": 8023840, "size": "DN250", "angle": 0, "length": 133, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023843, "size": "DN450", "angle": -90, "length": 377, "children": [{"size": "DN160", "angle": -90, "length": 55, "location": 1, "fixed_length": 10}, {"name": 8023809, "size": "DN450", "angle": 0, "length": 764, "children": [{"size": "DN160", "angle": -90, "length": 68, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 784, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 64, "location": 1, "fixed_length": 10}, {"name": 8888467, "size": "DN315", "angle": 0, "length": 725, "children": [{"size": "DN160", "angle": -90, "length": 125, "location": 1, "fixed_length": 10}, {"name": 8888485, "size": "DN315", "angle": 0, "length": 60, "children": [{"size": "DN160", "angle": -90, "length": 643, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 693, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 297, "location": 1, "fixed_length": 10}, {"name": 8888498, "size": "DN250", "angle": 0, "length": 432, "children": [{"size": "DN160", "angle": -90, "length": 123, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 534, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 1062, "location": 1, "fixed_length": 10}, {"name": 8023640, "size": "DN250", "angle": 0, "length": 687, "children": [{"size": "DN160", "angle": -90, "length": 62, "location": 1, "fixed_length": 10}, {"name": 8023687, "size": "DN250", "angle": 0, "length": 763, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 9239598, "size": "DN800", "angle": -90, "length": 427, "children": [{"size": "DN160", "angle": -90, "length": 189, "location": 1, "fixed_length": 10}, {"name": 9922230, "size": "DN800", "angle": 0, "length": 568, "children": [{"name": 9922214, "size": "DN800", "angle": 0, "length": 248, "children": [{"name": 9697767, "size": "DN800", "angle": 0, "length": 258, "children": [{"name": 9749438, "size": "DN800", "angle": 0, "length": 18, "children": [{"size": "DN160", "angle": -90, "length": 311, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 17, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 92, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 829, "location": 1, "fixed_length": 10}, {"name": 9749435, "size": "DN800", "angle": 0, "length": 926, "children": [{"size": "DN160", "angle": -90, "length": 124, "location": 1, "fixed_length": 10}, {"name": 8023734, "size": "DN800", "angle": 0, "length": 672, "children": [{"size": "DN160", "angle": -90, "length": 653, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 29, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 423, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 898, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 60, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 50, "location": 1, "fixed_length": 10}, {"name": 8023733, "size": "DN800", "angle": 0, "length": 153, "children": [{"size": "DN160", "angle": -90, "length": 642, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 855, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 180, "location": 1, "fixed_length": 10}, {"name": 8023482, "size": "DN800", "angle": 0, "length": 374, "children": [{"name": 8872662, "size": "DN800", "angle": 0, "length": 493, "children": [{"size": "DN160", "angle": -90, "length": 626, "location": 1, "fixed_length": 10}, {"name": 8872665, "size": "DN800", "angle": 0, "length": 275, "children": [{"size": "DN160", "angle": -90, "length": 460, "location": 1, "fixed_length": 10}, {"name": 8023480, "size": "DN800", "angle": 0, "length": 682, "children": [{"size": "DN160", "angle": -90, "length": 555, "location": 1, "fixed_length": 10}, {"name": 9543366, "size": "DN800", "angle": 0, "length": 523, "children": [{"size": "DN160", "angle": -90, "length": 448, "location": 1, "fixed_length": 10}, {"name": 9741223, "size": "DN800", "angle": 0, "length": 1955, "children": [{"size": "DN160", "angle": -90, "length": 892, "location": 1, "fixed_length": 10}, {"name": 9749414, "size": "DN800", "angle": 0, "length": 11, "children": [{"size": "DN160", "angle": -90, "length": 202, "location": 1, "fixed_length": 10}, {"name": 9749411, "size": "DN800", "angle": 0, "length": 743, "children": [{"size": "DN160", "angle": -90, "length": 53, "location": 1, "fixed_length": 10}, {"name": 8023617, "size": "DN800", "angle": 0, "length": 73, "children": [{"size": "DN160", "angle": -90, "length": 238, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 675, "location": 1, "fixed_length": 10}, {"name": 8023602, "size": "DN800", "angle": 0, "length": 1516, "children": [{"size": "DN160", "angle": -90, "length": 137, "location": 1, "fixed_length": 10}, {"name": 8023814, "size": "DN800", "angle": 0, "length": 725, "children": [{"size": "DN160", "angle": -90, "length": 1137, "location": 1, "fixed_length": 10}, {"name": 8023821, "size": "DN800", "angle": 0, "length": 415, "children": [{"size": "DN160", "angle": -90, "length": 151, "location": 1, "fixed_length": 10}, {"name": 8023822, "size": "DN800", "angle": 0, "length": 1225, "children": [{"size": "DN160", "angle": -90, "length": 58, "location": 1, "fixed_length": 10}, {"name": 8023819, "size": "DN800", "angle": 0, "length": 44, "children": [{"name": 8023818, "size": "DN800", "angle": 0, "length": 1179, "children": [{"size": "DN160", "angle": -90, "length": 730, "location": 1, "fixed_length": 10}, {"name": 8023941, "size": "DN800", "angle": 0, "length": 554, "children": [{"size": "DN160", "angle": -90, "length": 765, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 1090, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 62, "location": 1, "fixed_length": 10}, {"name": 9050231, "size": "DN800", "angle": 0, "length": 42, "children": [{"size": "DN160", "angle": -90, "length": 531, "location": 1, "fixed_length": 10}, {"name": 8023826, "size": "DN800", "angle": 0, "length": 1491, "children": [{"size": "DN160", "angle": -90, "length": 746, "location": 1, "fixed_length": 10}, {"name": 8023763, "size": "DN800", "angle": 0, "length": 614, "children": [{"name": 8023849, "size": "DN630", "angle": 0, "length": 323, "children": [{"size": "DN160", "angle": -90, "length": 36, "location": 1, "fixed_length": 10}, {"name": 8023850, "size": "DN450", "angle": 0, "length": 1780, "children": [{"size": "DN160", "angle": -90, "length": 147, "location": 1, "fixed_length": 10}, {"name": 8023852, "size": "DN450", "angle": 0, "length": 615, "children": [{"size": "DN160", "angle": -90, "length": 461, "location": 1, "fixed_length": 10}, {"name": 8023896, "size": "DN450", "angle": 0, "length": 167, "children": [{"size": "DN160", "angle": -90, "length": 1024, "location": 1, "fixed_length": 10}, {"name": 8023663, "size": "DN450", "angle": 0, "length": 1102, "children": [{"size": "DN160", "angle": -90, "length": 65, "location": 1, "fixed_length": 10}, {"name": 8023646, "size": "DN450", "angle": 0, "length": 769, "children": [{"size": "DN160", "angle": -90, "length": 741, "location": 1, "fixed_length": 10}, {"name": 8023685, "size": "DN315", "angle": 0, "length": 726, "children": [{"size": "DN160", "angle": -90, "length": 618, "location": 1, "fixed_length": 10}, {"name": 8023851, "size": "DN315", "angle": 0, "length": 892, "children": [{"size": "DN160", "angle": -90, "length": 167, "location": 1, "fixed_length": 10}, {"name": 8023856, "size": "DN250", "angle": 0, "length": 83, "children": [{"size": "DN160", "angle": -90, "length": 986, "location": 1, "fixed_length": 10}, {"name": 8023855, "size": "DN250", "angle": 0, "length": 1128, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023867, "size": "DN315", "angle": -90, "length": 956, "children": [{"name": 8023369, "size": "DN250", "angle": 0, "length": 485, "children": [{"size": "DN160", "angle": -90, "length": 675, "location": 1, "fixed_length": 10}, {"name": 8023639, "size": "DN250", "angle": 0, "length": 226, "children": [], "location": 1}], "location": 1}, {"name": 8989176, "size": "DN250", "angle": -90, "length": 745, "children": [], "location": 0.75}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 8023847, "size": "DN450", "angle": -90, "length": 300, "children": [{"size": "DN160", "angle": -90, "length": 2384, "location": 1, "fixed_length": 10}, {"name": 8556282, "size": "DN450", "angle": 0, "length": 1000, "children": [{"size": "DN160", "angle": -90, "length": 188, "location": 1, "fixed_length": 10}, {"name": 8556279, "size": "DN450", "angle": 0, "length": 613, "children": [{"size": "DN160", "angle": -90, "length": 471, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 181, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 204, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 657, "location": 1, "fixed_length": 10}, {"name": 8023696, "size": "DN450", "angle": 0, "length": 1349, "children": [{"size": "DN160", "angle": -90, "length": 66, "location": 1, "fixed_length": 10}, {"name": 8023698, "size": "DN450", "angle": 0, "length": 1224, "children": [{"size": "DN160", "angle": -90, "length": 75, "location": 1, "fixed_length": 10}, {"name": 8023643, "size": "DN450", "angle": 0, "length": 944, "children": [{"size": "DN160", "angle": -90, "length": 685, "location": 1, "fixed_length": 10}, {"name": 8989181, "size": "DN315", "angle": 0, "length": 623, "children": [{"size": "DN160", "angle": -90, "length": 1225, "location": 1, "fixed_length": 10}, {"name": 8023691, "size": "DN315", "angle": 0, "length": 888, "children": [{"size": "DN160", "angle": -90, "length": 489, "location": 1, "fixed_length": 10}, {"name": 8023909, "size": "DN250", "angle": 0, "length": 1520, "children": [{"size": "DN160", "angle": -90, "length": 559, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "length": 1044, "location": 1, "fixed_length": 10}, {"size": "DN160", "angle": -90, "length": 513, "location": 1, "fixed_length": 10}, {"name": 8937560, "size": "DN250", "angle": 0, "length": 1602, "children": [], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 9905954, "size": "DN450", "angle": -90, "length": 429, "children": [], "location": 0.75}], "location": 1}], "location": 0.75}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}], "location": 1}, {"name": 10442585, "size": "DN800", "angle": -90, "length": 6026, "children": [{"name": 10442583, "size": "DN800", "angle": 0, "length": 2592, "children": [], "location": 1}], "location": 0.75}], "location": 1}, "extent": 57188.8444920843031}
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
            /*let normVec
            if (node.angle !== 0) {
              normVec = this.normalVec(unitVec, this.deg2rad(node.angle))
            } else {
              normVec = unitVec
            }*/
            let normVec = this.normalVec(unitVec, this.deg2rad(node.angle))


            let len = node.fixed_length || scale(node.length)

            // console.log(parent.length, parent.length * node.location)
            let offset = (parent.fixed_length || scale(parent.length)) * node.location
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
            // .attr('id', d => d.data.name)
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
