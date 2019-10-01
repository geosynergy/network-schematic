<template>
  <svg class="full-height full-width" ref="svg"></svg>
</template>

<script>
  import {select, event} from 'd3-selection'
  import {treemap as treemapD3, hierarchy, treemapBinary} from 'd3-hierarchy'
  import {format as formatD3} from 'd3-format'
  import {checkIntersection} from 'line-intersect'
  import {scaleLinear} from 'd3-scale'

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
                location: 1
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
                    name: 'C',
                    angle: 90,
                    length: 600,
                    location: 0.8,
                  }
                ]
              }
            ]
          }
        }
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

        console.log(tree.descendants().map(d => d.data.line))
        console.log(tree.descendants().map(d => d.data))

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
