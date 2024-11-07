import { writable, derived } from 'svelte/store'

export const countdown = writable(0)
export const setCountdown = (value: number) => countdown.set(value)
export const countdownTimer = derived(countdown, (value, set) => {
    set(value)
    let timer = setInterval(() => {
        value--
        set(value)
        if (value <= 0) {
            clearInterval(timer)
        }
    }, 1000)
})