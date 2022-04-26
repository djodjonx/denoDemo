export const requestedEvent: Event = new Event('requested');

export function createPostEvent(value: string): CustomEvent {
    return new CustomEvent('requestedPost', {
        detail: {
            bublles: true,
            value: () => value
        }
    })
}

self.addEventListener('requested name', () => console.log('requested'))
self.addEventListener('requestedPost', (event) => {
    const e = event as CustomEvent
    console.log('POST requested on', e.detail.value())
})
