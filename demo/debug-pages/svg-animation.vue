<template>
  <div style="padding: 30px">
    <n-h2>transform 变换</n-h2>
    <n-h3>translate 位移</n-h3>
    <n-card>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <rect x="0" y="0" width="50" height="50" transform="translate(10,10)" />
      </svg>
    </n-card>
    <n-h3>rotate 旋转</n-h3>
    <n-card>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <rect
          x="0"
          y="0"
          width="50"
          height="50"
          transform="translate(50,10) rotate(30)"
        />
      </svg>
    </n-card>
    <n-h3>skewX 和 skewY 斜切</n-h3>
    <n-card>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect
          x="0"
          y="0"
          width="50"
          height="50"
          transform="translate(50,50) skewX(30)"
        />
      </svg>
    </n-card>
    <n-h3>scale 缩放</n-h3>
    <n-card>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect
          x="0"
          y="0"
          width="50"
          height="50"
          transform="translate(50,50) scale(.5)"
        />
      </svg>
    </n-card>
    <n-h3>matrix 复杂变形</n-h3>
    <n-card>
      <svg viewBox="0 0 200 200">
        <rect x="10" y="10" width="30" height="20" fill="green" />

        <rect
          x="10"
          y="10"
          width="30"
          height="20"
          fill="red"
          transform="matrix(3 1 -1 3 30 40)"
        />
      </svg>
    </n-card>
    <n-h3>svg 动画（CSS）</n-h3>
    <n-card>
      <svg width="440" height="440" viewbox="0 0 440 440">
        <circle
          cx="220"
          cy="220"
          r="170"
          stroke-width="50"
          stroke="#D1D3D7"
          fill="none"
        ></circle>
        <circle
          class="circle"
          cx="220"
          cy="220"
          r="170"
          stroke-width="50"
          stroke="#00A5E0"
          fill="none"
          transform="matrix(0,-1,1,0,0,440)"
        />
      </svg>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="grey"
          stroke-width="8"
        ></rect>
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="blue"
          stroke-width="8"
          class="rect-process"
          transform="matrix(0,1,-1,0,200,0)"
        ></rect>
      </svg>
    </n-card>
    <n-h2>svg 动画（SMIL）</n-h2>
    <n-h3>set 标签</n-h3>
    <n-p>实现属性的延迟设置</n-p>
    <n-card>
      <svg width="400" height="400">
        <rect x="0" y="0" width="100" height="100" fill="red">
          <set attributeName="x" attributeType="XML" to="10" begin="1s" />
          <set attributeName="x" attributeType="XML" to="20" begin="2s" />
          <set attributeName="x" attributeType="XML" to="30" begin="3s" />
          <set attributeName="x" attributeType="XML" to="40" begin="4s" />
          <set attributeName="x" attributeType="XML" to="50" begin="5s" />
        </rect>
      </svg>
    </n-card>
    <n-h3>animation 标签</n-h3>
    <n-p>案例一：移动的小球</n-p>
    <n-card>
      <svg width="500" height="200" viewBox="0 0 500 200">
        <circle
          cx="0"
          cy="0"
          r="30"
          fill="blue"
          stroke="black"
          stroke-width="1"
        >
          <animate
            attributeName="cx"
            from="0"
            to="200"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            from="0"
            to="200"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </n-card>
    <n-p>案例二：形状补间动画</n-p>
    <n-card>
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate
            attributeName="points"
            attributeType="XML"
            to="50 30 70 50 50 90 30 50"
            dur="5s"
            fill="freeze"
            repeatCount="1"
          />
        </polygon>
      </svg>
    </n-card>
    <n-p>animateTransform 标签</n-p>
    <n-card>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="60" height="60" fill="red">
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="3s"
            type="scale"
            from="1"
            to="2"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </n-card>
    <n-p>animateMotion 标签</n-p>
    <n-p>案例一：按 path 轨迹运动的正方形</n-p>
    <n-card>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="10" height="10" fill="red">
          <animateMotion
            path="M 10 10 L 110 10 L 110 110 L 10 110 Z"
            dur="5s"
            rotate="auto"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
        <path
          id="motion-path"
          d="M 10 10 L 110 10 L 110 110 L 10 110 Z"
          fill="none"
          stroke="green"
        />
      </svg>
    </n-card>
    <n-p>案例二：混合动画</n-p>
    <n-card>
      <svg viewBox="0 0 200 200" width="200" height="200">
        <rect x="0" y="0" rx="0" ry="0" width="10" height="10" fill="red">
          <animateMotion
            id="forward-rect"
            path="M 10 10 L 110 10 L 110 110 L 10 110"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="0; backward-rect.end + 0.5s"
          />
          <animateMotion
            id="backward-rect"
            path="M 10 110 L 110 110 L 110 10 L 10 10"
            dur="2s"
            rotate="0"
            fill="freeze"
            begin="forward-rect.end + 0.5s"
          />
          <animate
            id="red-to-blue"
            attributeType="XML"
            attributeName="fill"
            begin="0; blue-to-red.end + 1s"
            from="red"
            to="blue"
            dur="2s"
            fill="freeze"
          />
          <animate
            id="blue-to-red"
            attributeType="XML"
            attributeName="fill"
            begin="red-to-blue.end + 1s"
            from="blue"
            to="red"
            dur="2s"
            fill="freeze"
          />
        </rect>
        <path
          d="M 10 10 L 110 10 L 110 110 L 10 110"
          fill="none"
          stroke-width="1"
          stroke="blue"
        />
      </svg>
    </n-card>
    <n-p> 案例三：点击变色或位移 </n-p>
    <n-card>
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
              attributeType="XML"
              attributeName="fill"
              from="red"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="translate"
          from="0, 0"
          to="50, 50"
          begin="rect1.click"
          dur="2s"
          fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
            attributeType="XML"
            attributeName="fill"
            from="blue"
            to="green"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
          />
        </rect>
      </svg>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NH3, NH2, NP, NCard } from 'naive-ui'

export default defineComponent({
  name: '',
  components: {
    NH2,
    NH3,
    NP,
    NCard
  }
})
</script>

<style scoped>
.circle {
  animation: circle 5s linear infinite;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 1069;
  }
  to {
    stroke-dasharray: 1069 0;
  }
}

.rect-process {
  animation: rect-process 5s linear infinite;
}

@keyframes rect-process {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}
</style>
