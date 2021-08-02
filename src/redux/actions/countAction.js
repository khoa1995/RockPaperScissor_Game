export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN'; 

export const countUp = payload => ({
    type: COUNT_UP,
    payload
})

export const countDown = payload => ({
    type: COUNT_DOWN,
    payload
})