<script setup lang="ts">
import { useId } from 'vue'
import logoSvg from '@/assets/logo-mark.svg?raw'
import wordSvg from '@/assets/logo-wordmark.svg?raw'

withDefaults(
  defineProps<{ size?: number; wordmark?: boolean; stacked?: boolean; animate?: boolean }>(),
  {
    size: 36,
    wordmark: false,
    stacked: false,
    animate: false,
  },
)

function parse(svg: string) {
  const viewBox = /viewBox="([^"]+)"/.exec(svg)?.[1] ?? '0 0 1 1'
  const [, , w = 1, h = 1] = viewBox.split(/\s+/).map(Number)
  const d = /\sd="([^"]+)"/.exec(svg)?.[1] ?? ''
  // Every subpath gets its own line so all of them wind in over the same time
  return { viewBox, ratio: w / h, d, parts: d.split(/(?=M)/).map((p) => p.trim()) }
}

const mark = parse(logoSvg)
const word = parse(wordSvg)
const id = useId()
</script>

<template>
  <span
    class="brand"
    :class="{ stacked, lockup: wordmark && !stacked, animate }"
    :style="{ '--s': `${size}px`, '--mark-r': mark.ratio, '--word-r': word.ratio }"
  >
    <svg :viewBox="mark.viewBox" aria-hidden="true" class="mark">
      <mask v-if="animate" :id="`${id}-m`">
        <path
          v-for="(p, i) in mark.parts"
          :key="i"
          class="line"
          :class="{ rev: i % 2 }"
          :d="p"
          pathLength="1"
        />
      </mask>
      <path
        class="fill"
        :d="mark.d"
        fill="currentColor"
        fill-rule="evenodd"
        :mask="animate ? `url(#${id}-m)` : undefined"
      />
    </svg>
    <svg v-if="wordmark" :viewBox="word.viewBox" role="img" aria-label="rezepe" class="word">
      <path class="fill" :d="word.d" fill="currentColor" fill-rule="evenodd" />
    </svg>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--s) * 0.32);
  color: var(--wine);
}

.mark {
  width: var(--s);
  height: calc(var(--s) / var(--mark-r));
  flex-shrink: 0;
}

/* Side-by-side lockup: the mark leads, the wordmark sits at just over half its height. */
.word {
  height: calc(var(--s) * 0.55);
  width: calc(var(--s) * 0.55 * var(--word-r));
  flex-shrink: 0;
}

/* The wordmark's strokes are heavier than the mark's at this size; an outline in the
   mark's own units (base stroke ~18.6) brings both closer to the same optical weight. */
.lockup .mark {
  overflow: visible;
}

.lockup .mark .fill {
  stroke: currentColor;
  stroke-width: 6;
  stroke-linejoin: round;
}

/* Proportions taken from the master logo: wordmark ~1.29× the mark's width */
.stacked {
  flex-direction: column;
  gap: calc(var(--s) * 0.25);
}

.stacked .word {
  width: calc(var(--s) * 1.29);
  height: calc(var(--s) * 1.29 / var(--word-r));
}

/* Interwind (mark only): a thick solid line runs along every part of the mark, neighbouring
   parts from opposite ends, and the logo shows wherever the line has passed.
   The strokes are wide enough to cover each band of the shape from its edge. */
.animate .line {
  fill: none;
  stroke: #fff;
  stroke-width: 40;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 1;
  animation: wind 1.3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.animate .line.rev {
  stroke-dashoffset: -1;
}

.animate .word {
  clip-path: inset(0 100% 0 0);
  animation: wipe 0.8s cubic-bezier(0.65, 0, 0.35, 1) 0.8s forwards;
}

@keyframes wind {
  to {
    stroke-dashoffset: 0;
  }
}

/* The wordmark is uncovered left to right as the mark finishes winding in */
@keyframes wipe {
  to {
    clip-path: inset(0 0 0 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate .line {
    animation: none;
    stroke-dashoffset: 0;
  }

  .animate .word {
    animation: none;
    clip-path: none;
  }
}
</style>
