
<template>
  <canvas id="canvas" class="canvas"></canvas>
</template>
<script>
  /* copy from https://github.com/ycwalker/CMS-of-Blog/blob/master/src/components/MyCanvas.vue  */

  export default{
    mounted: function () {
      // 代码保证 this.$el 在 document 中
      this.$nextTick(function () {
        let canvas = document.getElementById('canvas'),
               ctx = canvas.getContext('2d'),
             width = window.innerWidth,
            height = window.innerHeight,
             mouse = {
                x: width / 2,
                y: height / 2
             },
            nodes,
            lines

        canvas.width = width
        canvas.height = height

        const iniNode = (node, factor)=> {
          const rnd = (...args)=> {
            const produce = (min,max) => {
              return min>max ? false : Math.random()*(max-min)+min
            }

            let num,
                len = args.length

            if(len == 2){
              num = produce(args[0],args[1]);
            }else if(len == 4){
              let flag = Math.random();
              num = flag<0.5 ? produce(args[0],args[1]) : produce(args[2],args[3])
            }else{
              num = Math.random;
            }
            return num;
          }
          let rnd1 = rnd.bind(null,-0.5,-0.4,0.4,0.5);
          node.vx = factor * rnd1()
          node.vy = factor * rnd1()
          node.period = Math.random() * 120
        }

        const createNodes = ()=> {
          nodes = []
          lines = []
          for (let i = 0; i < 50; i++) {

            let R = Math.floor(Math.random() * 100) + 155,
                G = Math.floor(Math.random() * 100) + 155,
                B = Math.floor(Math.random() * 100) + 155,
                color = "rgb(" + R + "," + G + "," + B + ")"

            let node = {
                x: (Math.random() - 0.5) * 300 + mouse.x,
                y: (Math.random() - 0.5) * 300 + mouse.y,
                radius: 2 * Math.random() + 1,
                color,
            }
            iniNode(node, 2)
            nodes.push(node)
          }

          nodes.forEach((node1, index)=> {
            nodes.slice(index + 1).forEach((node2)=> {
              lines.push({
                from: node1,
                to: node2
              })
            })
          })
        }

        const render = (ctx)=> {
          ctx.fillStyle = '#fff'
          ctx.clearRect(0, 0, width, height)
          lines.forEach(({from, to})=> {
            let lineLength = Math.pow((from.x - to.x), 2) +
                            Math.pow((from.y - to.y), 2),
                    limit = 10000,
                    factor = 1 - lineLength / limit
            if (lineLength > limit) {
                return
            }

            ctx.lineWidth = factor
            ctx.globalAlpha = factor
            ctx.strokeStyle = from.color

            ctx.beginPath()
            ctx.moveTo(from.x, from.y)
            ctx.lineTo(to.x, to.y)
            ctx.stroke()
          })
          ctx.globalAlpha = 1

          nodes.forEach(function ({x, y, radius, color,}) {
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, 2 * Math.PI)
            ctx.fill()
          })

          let x = mouse.x,
              y = mouse.y,
              gradient = ctx
                      .createRadialGradient(x, y, 1, x, y, 200)

          gradient.addColorStop(0, 'rgba(236,240,241,0)')
          gradient.addColorStop(1, 'rgba(236,240,241,1)')
          ctx.fillStyle = gradient
          ctx.arc(x, y, 360, 0, 2 * Math.PI)
          ctx.fill()
        }

        const animation = ()=> {
          const invert = (node, dir)=> node[dir] = mouse[dir]
          nodes.forEach((node)=> {
              Math.abs(node.x - mouse.x) > 250 && invert(node, 'x')
              Math.abs(node.y - mouse.y) > 250 && invert(node, 'y')
              node.period--
              switch (true) {
                case node.period < 0:
                  iniNode(node, 2)
                  break
                case node.period < 50:
                  let factor1 = (node.period / 50 )
                  node.x += node.vx * factor1
                  node.y += node.vy * factor1
                  break
                case node.period < 80:
                  node.x += node.vx
                  node.y += node.vy
                  break
                case node.period < 120:
                  let factor2 = (1 - (node.period - 40) / 80 )
                  node.x += node.vx * factor2
                  node.y += node.vy * factor2
                  break
                default:
                  return
              }
            }
          )
          render(ctx)
          requestAnimationFrame(animation)
        }

        window.addEventListener('mousemove', function (event) {
          let x = event.clientX,
              y = event.clientY,
              offsetX = x - mouse.x,
              offsetY = y - mouse.y
          if (Math.pow(offsetX, 2) + Math.pow(offsetY, 2) > 100) {
            mouse.x = x
            mouse.y = y
          }
        })
        createNodes()
        render(ctx)
        animation()
      })
    
    }
  }
</script>
<style>
  .canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
  }
</style>