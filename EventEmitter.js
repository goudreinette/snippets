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
    if (this.types[type])
      this.types[type].push(listener)
    else
      this.types[type] = [listener]
  }

  emit (type, ...args)
  {
    if (this.types[type])
      for (const listener of this.types[type])
        listener.call(null, ...args)
  }
}

/**
 * Demo
 */
class Greetr extends EventEmitter
{
  constructor ()
  {
    super()
    this.greeting = 'hello'
  }

  greet ()
  {
    this.emit('greeting')
  }
}

const greetr = new Greetr()
greetr.on('greeting', _ => console.log('Someone greeted'))
greetr.greet()
