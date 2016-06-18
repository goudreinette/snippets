/**
 * EventEmitter
 */
class EventEmitter
{
  constructor ()
  {
    this.types = {}
  }

  on (type, listener)
  {
    if (this.eventTypes[type])
      this.eventTypes[type].push(listener)
    else
      this.eventTypes[type] = [listener]
  }

  emit (type, ...args)
  {
    for (const listener of this.eventTypes[type])
      listener.call(null, ...args)
  }
}
