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
        data: {"legend": {
          "items": [
            {
              "label": "DN800",
              "color": "#ba9d4c",
            },
            {
              "label": "DN630",
              "color": "#2fabf7",
            },
            {
              "label": "DN450",
              "color": "#2fabf7",
            },
            {
              "label": "DN315",
              "color": "#19e31c",
            },
            {
              "label": "DN250",
              "color": "#e319b0",
            }
          ]
          },"root": {"name": 9755433, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 4434, "children": [{"name": 9828278, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 2706, "children": [{"name": 9828238, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1504, "children": [{"name": 9828232, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1502, "children": [{"name": 9828225, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 4109, "children": [{"name": 9828219, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 527, "children": [{"name": 9828174, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1002, "children": [{"name": 9828169, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 90, "children": [{"name": 9828199, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1110, "children": [{"name": 9828214, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 186, "children": [{"name": 9828263, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1083, "children": [{"name": 9828179, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1335, "children": [{"name": 9828194, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 282, "children": [{"name": 9828189, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 398, "children": [{"name": 9828184, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1229, "children": [{"name": 9828164, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 789, "children": [{"name": 9828209, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 480, "children": [{"name": 9828204, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 2010, "children": [{"name": 9828298, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 368, "children": [{"name": 9791335, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 978, "children": [{"name": 9239554, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 578, "children": [{"name": 9697787, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1118, "children": [{"name": 9697783, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 896, "children": [{"name": 8023630, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1488, "children": [{"name": 8023811, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 908, "children": [{"name": 8023665, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1017, "children": [{"name": 8023644, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 836, "children": [{"name": 8023761, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 413, "children": [{"name": 8023829, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 592, "children": [{"name": 8023760, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 289, "children": [{"name": 8023759, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 489, "children": [{"name": 8023837, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 603, "children": [{"name": 8023942, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 396, "children": [{"name": 8023813, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 424, "children": [{"name": 8097824, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 381, "children": [{"name": 8023824, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 371, "children": [{"name": 8023757, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 305, "children": [{"name": 8023882, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 40, "children": [{"name": 8023595, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 403, "children": [{"name": 8023767, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 562, "children": [{"name": 8023690, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 535, "children": [{"name": 8937423, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 11, "children": [{"name": 8023901, "size": "DN160", "angle": 0, "color": "#1a1719", "length": 213, "children": [{"name": 8023657, "size": "DN160", "angle": 0, "color": "#1a1719", "length": 621, "children": [{"name": 9051329, "size": "DN160", "angle": 0, "color": "#1a1719", "length": 646, "children": [{"name": 9808970, "size": "DN160", "angle": 0, "color": "#1a1719", "length": 814, "children": [{"name": 9808967, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1519, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 599, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 351, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 165, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 282, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 843, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 89, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 798, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 882, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "3 wells", "length": 135, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 270, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 675, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 52, "location": -1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 722, "location": -1.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 69, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 629, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 181, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 757, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "3 wells", "length": 608, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "2 wells", "length": 801, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 67, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 745, "location": -1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 226, "location": -1.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 29, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 812, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 122, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 9100500, "size": "DN250", "angle": -90, "color": "#e319b0", "length": 912, "children": [{"name": 8023693, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 592, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 23, "location": 0.5, "fixed_length": 10}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 92, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 362, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 8023830, "size": "DN315", "angle": -90, "color": "#19e31c", "length": 344, "children": [{"name": 8989200, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 547, "children": [{"name": 8023828, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 216, "children": [{"name": 8023692, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 436, "children": [{"name": 8937503, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 818, "children": [{"name": 8023840, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 133, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 153, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 133, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 373, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 597, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 125, "location": 0.5, "fixed_length": 10}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 333, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 301, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 157, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 93, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 8023843, "size": "DN450", "angle": -90, "color": "#2fabf7", "length": 377, "children": [{"name": 8023809, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 764, "children": [{"name": 8888467, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 725, "children": [{"name": 8888485, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 60, "children": [{"name": 8888498, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 432, "children": [{"name": 8023640, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 687, "children": [{"name": 8023687, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 763, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 62, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 123, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 534, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 1062, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 643, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 693, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 297, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 125, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 68, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 784, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 64, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 55, "location": 0.5, "fixed_length": 10}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "3 wells", "length": 205, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 61, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 517, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 1052, "location": -1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 320, "location": -1.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 388, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 164, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 182, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 9239598, "size": "DN800", "angle": -90, "color": "#ba9d4c", "length": 427, "children": [{"name": 9922230, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 568, "children": [{"name": 9922214, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 248, "children": [{"name": 9697767, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 258, "children": [{"name": 9749438, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 18, "children": [{"name": 9749435, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 926, "children": [{"name": 8023734, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 672, "children": [{"name": 8023733, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 153, "children": [{"name": 8023482, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 374, "children": [{"name": 8872662, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 493, "children": [{"name": 8872665, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 275, "children": [{"name": 8023480, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 682, "children": [{"name": 9543366, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 523, "children": [{"name": 9741223, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1955, "children": [{"name": 9749414, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 11, "children": [{"name": 9749411, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 743, "children": [{"name": 8023617, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 73, "children": [{"name": 8023602, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1516, "children": [{"name": 8023814, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 725, "children": [{"name": 8023821, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 415, "children": [{"name": 8023822, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1225, "children": [{"name": 8023819, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 44, "children": [{"name": 8023818, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1179, "children": [{"name": 8023941, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 554, "children": [{"name": 9050231, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 42, "children": [{"name": 8023826, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 1491, "children": [{"name": 8023763, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 614, "children": [{"name": 8023849, "size": "DN630", "angle": 0, "color": "#2fabf7", "length": 323, "children": [{"name": 8023850, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 1780, "children": [{"name": 8023852, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 615, "children": [{"name": 8023896, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 167, "children": [{"name": 8023663, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 1102, "children": [{"name": 8023646, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 769, "children": [{"name": 8023685, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 726, "children": [{"name": 8023851, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 892, "children": [{"name": 8023856, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 83, "children": [{"name": 8023855, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 1128, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 986, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 167, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 618, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 741, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 65, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 1024, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 461, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 147, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 36, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 8023867, "size": "DN315", "angle": -90, "color": "#19e31c", "length": 956, "children": [{"name": 8023369, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 485, "children": [{"name": 8023639, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 226, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 675, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 8989176, "size": "DN250", "angle": -90, "color": "#e319b0", "length": 745, "children": [], "location": 0, "min_length": 15}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 746, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 531, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 765, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 1090, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 62, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 730, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"name": 8023847, "size": "DN450", "angle": -90, "color": "#2fabf7", "length": 300, "children": [{"name": 8556282, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 1000, "children": [{"name": 8556279, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 613, "children": [{"name": 8023696, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 1349, "children": [{"name": 8023698, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 1224, "children": [{"name": 8023643, "size": "DN450", "angle": 0, "color": "#2fabf7", "length": 944, "children": [{"name": 8989181, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 623, "children": [{"name": 8023691, "size": "DN315", "angle": 0, "color": "#19e31c", "length": 888, "children": [{"name": 8023909, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 1520, "children": [{"name": 8937560, "size": "DN250", "angle": 0, "color": "#e319b0", "length": 1602, "children": [], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 559, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 1044, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 513, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 489, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 1225, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 685, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 75, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 66, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 471, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 181, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 204, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 657, "location": -1, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 188, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 2384, "location": 0.5, "fixed_length": 10}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 58, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 151, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 1137, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 137, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 238, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 675, "location": 0, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 53, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 202, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 892, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 448, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 555, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 460, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 626, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}], "location": 1, "min_length": 15}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 642, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 855, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 180, "location": -0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "3 wells", "length": 653, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "2 wells", "length": 29, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 423, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 898, "location": -1, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 60, "location": -1.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 50, "location": -2, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 124, "location": 0.5, "fixed_length": 10}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "2 wells", "length": 311, "location": 0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "2 wells", "length": 17, "location": 0, "fixed_length": 10}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 92, "location": -0.5, "fixed_length": 10}, {"size": "DN160", "angle": -90, "label": "1 wells", "length": 829, "location": -1, "fixed_length": 10}], "location": 1, "min_length": 30}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}, {"name": 9905954, "size": "DN450", "angle": -90, "color": "#2fabf7", "length": 429, "children": [], "location": 0, "min_length": 15}], "location": 1, "min_length": 30}, {"size": "DN160", "angle": 90, "label": "1 wells", "length": 189, "location": 0.5, "fixed_length": 10}], "location": 0.5, "min_length": 30}], "location": 1, "min_length": 30}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}], "location": 1, "min_length": 15}, {"name": 10442585, "size": "DN650", "angle": -90, "color": "#1a1719", "length": 6026, "children": [{"name": 10442583, "size": "DN800", "angle": 0, "color": "#ba9d4c", "length": 2592, "children": [], "location": 1, "min_length": 15}], "location": 0, "min_length": 15}], "location": 1, "min_length": 30}, "extent": 57188.8444920843031}
      }
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      dot (p1, p2) {
        return p1[0] * p2[0] + p1[1] * p2[1];
      },
      deg2rad(deg) {
        return Math.PI * deg / 180
      },
      rad2deg(rad) {
        return 180 * rad / Math.PI
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


            let len = node.fixed_length || Math.max(node.min_length || 0, scale(node.length))

            // console.log(parent.length, parent.length * node.location)
            let offset = (parent.fixed_length || Math.max(parent.min_length || 0, scale(parent.length))) * node.location
            // console.log(`offset ${offset}`)
            // console.log(unitVec)
            let startPoint = [pc[0] + unitVec[0] * offset, pc[1] + unitVec[1] * offset]

            let endPoint = [startPoint[0] + normVec[0] * len, startPoint[1] + normVec[1] * len]

            node.line = []
            node.line.push.apply(node.line, startPoint)
            node.line.push.apply(node.line, endPoint)
            item.line = node.line

            //find label direction
            let zeroVec = this.unitVec(startPoint, [startPoint[0] + 10, startPoint[1]])
            let dotProduct = this.dot(zeroVec, normVec)
            let angle = Math.acos(dotProduct)
            node.labelRotation = this.rad2deg(angle)
            node.labelTextAnchor = 'start'

            if (dotProduct === -1) {
              node.labelRotation = 0
              node.labelTextAnchor = 'end'
            }

            if (startPoint[1] > endPoint[1]) {
              node.labelTextAnchor = 'end'
            }

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
            .attr('stroke', d => d.data.color || 'black')
            .attr('stroke-width', '2')


        svg.selectAll('g')
            .data(tree.descendants().filter(d => d.data.label))
            .join('g')
            .attr('transform', d => `translate(${d.data.line[2]}, ${d.data.line[3]}) rotate(${d.data.labelRotation})`)
            .append('text')
            .attr('class', 'small')
            .attr('text-anchor', d => d.data.labelTextAnchor)
            .attr('y', 4)
            .text(d => d.data.label)


        let legend = svg.selectAll('g.legend')
          .data(this.data.legend.items.reverse())
          .join('g')
          .attr('class', 'legend')
          .attr('transform', (d, i) => `translate (100, ${(height-padding.bottom-(i * 30))})`)

        legend.append('line')
          .attr('x2', 80)
          .attr('stroke-width', '2')
          .attr('stroke', d => d.color)

        legend.append('text')
          .attr('x', 85)
          .text(d => d.label)

      }
    }
  }
</script>

<style lang="scss">
  .small { font: italic 11px sans-serif; }
</style>
