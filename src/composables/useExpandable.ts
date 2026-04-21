import { ref } from 'vue'

export function useExpandable() {
  const expandedByIndex = ref<Record<number, boolean>>({})

  function isExpanded(index: number): boolean {
    return !!expandedByIndex.value[index]
  }

  function toggleExpanded(index: number) {
    expandedByIndex.value[index] = !expandedByIndex.value[index]
  }

  return { isExpanded, toggleExpanded }
}
