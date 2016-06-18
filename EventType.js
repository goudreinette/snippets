/**
 * For one-to-many communication with explicit registration
 */
class EventType
{
  constructor (type)
  {
    this.listeners = []
  }

  attach (listener)
  {
    this.listeners.push(listener)
  }

  emit (...args)
  {
    this.listener.forEach(listener => listerner(...args))
  }
}