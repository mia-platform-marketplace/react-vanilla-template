import { describe, it, expect } from 'vitest'
import { 
  COUNTER_INCREMENT_STEP, 
  COUNTER_DECREMENT_STEP,
  COUNTER_MAX_VALUE,
  COUNTER_MIN_VALUE,
  COUNTER_MESSAGE_DURATION 
} from './counter'

describe('Counter Constants', () => {
  it('exports COUNTER_INCREMENT_STEP', () => {
    expect(COUNTER_INCREMENT_STEP).toBe(1)
  })

  it('exports COUNTER_DECREMENT_STEP', () => {
    expect(COUNTER_DECREMENT_STEP).toBe(1)
  })

  it('exports COUNTER_MAX_VALUE', () => {
    expect(COUNTER_MAX_VALUE).toBe(100)
  })

  it('exports COUNTER_MIN_VALUE', () => {
    expect(COUNTER_MIN_VALUE).toBe(-100)
  })

  it('exports COUNTER_MESSAGE_DURATION', () => {
    expect(COUNTER_MESSAGE_DURATION).toBe(2000)
  })

  it('has positive increment step', () => {
    expect(COUNTER_INCREMENT_STEP).toBeGreaterThan(0)
  })

  it('has positive decrement step', () => {
    expect(COUNTER_DECREMENT_STEP).toBeGreaterThan(0)
  })

  it('max value is greater than min value', () => {
    expect(COUNTER_MAX_VALUE).toBeGreaterThan(COUNTER_MIN_VALUE)
  })
})
